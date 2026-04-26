# terraform/backend.tf

# 1. Backend folder ko ZIP karna (Lambda ke liye)
data "archive_file" "backend_zip" {
  type        = "zip"
  source_dir  = "${path.module}/../backend" # Aapke backend folder ka path
  output_path = "${path.module}/backend.zip"
}

# 2. IAM Role (Lambda ko execute hone ki permission dena)
resource "aws_iam_role" "lambda_exec_role" {
  name = "portfolio_lambda_exec_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

# Lambda ko CloudWatch (Logs) mein likhne ki permission
resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = aws_iam_role.lambda_exec_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# 3. AWS Lambda Function
resource "aws_lambda_function" "portfolio_backend" {
  function_name    = "portfolio-contact-api"
  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "server.handler" # server.js file ke andar handler function
  runtime          = "nodejs20.x"     # Latest Node.js version
  filename         = data.archive_file.backend_zip.output_path
  source_code_hash = data.archive_file.backend_zip.output_base64sha256
  timeout          = 10 # Email send hone mein thoda time lagta hai

  environment {
    variables = {
      EMAIL_USER = var.email_user
      EMAIL_PASS = var.email_pass
    }
  }
}

# 4. API Gateway (HTTP API - Fast & Cost-Effective)
resource "aws_apigatewayv2_api" "http_api" {
  name          = "portfolio-http-api"
  protocol_type = "HTTP"
  
  # CORS setup taaki CloudFront frontend isko call kar sake
  cors_configuration {
    allow_origins = ["*"] # Security ke liye isey baad mein "https://d25l972l1rqn75.cloudfront.net" kar sakte hain
    allow_methods = ["POST", "GET", "OPTIONS"]
    allow_headers = ["content-type"]
  }
}

# API Gateway ko Lambda se connect karna
resource "aws_apigatewayv2_integration" "lambda_integration" {
  api_id             = aws_apigatewayv2_api.http_api.id
  integration_type   = "AWS_PROXY"
  integration_uri    = aws_lambda_function.portfolio_backend.invoke_arn
  integration_method = "POST"
}

# Catch-all Route (Express app khud routing handle karega)
resource "aws_apigatewayv2_route" "default_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "ANY /{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.lambda_integration.id}"
}

# Default Stage
resource "aws_apigatewayv2_stage" "default_stage" {
  api_id      = aws_apigatewayv2_api.http_api.id
  name        = "$default"
  auto_deploy = true
}

# 5. Permission: API Gateway ko Lambda invoke karne dena
resource "aws_lambda_permission" "api_gw_invoke" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.portfolio_backend.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

# 6. Output API Gateway URL
output "api_gateway_url" {
  value       = aws_apigatewayv2_api.http_api.api_endpoint
  description = "Aapke Backend ka live AWS URL"
}
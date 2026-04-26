# terraform/frontend.tf

# 1. S3 Bucket for React Frontend
resource "aws_s3_bucket" "frontend_bucket" {
  bucket = var.bucket_name
}

# Bucket ko public access se block karna (Security Best Practice)
resource "aws_s3_bucket_public_access_block" "frontend_bucket_pab" {
  bucket = aws_s3_bucket.frontend_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# 2. CloudFront Origin Access Control (OAC) - Secure connection ke liye
resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "oac-${var.bucket_name}"
  description                       = "OAC for portfolio frontend"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# 3. CloudFront Distribution (CDN)
resource "aws_cloudfront_distribution" "frontend_cdn" {
  enabled             = true
  is_ipv6_enabled     = true
  aliases             = [var.domain_name] # <--- Custom Domain yahan add kiya gaya hai
  default_root_object = "index.html"

  origin {
    domain_name              = aws_s3_bucket.frontend_bucket.bucket_regional_domain_name
    origin_id                = "S3-${aws_s3_bucket.frontend_bucket.id}"
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.frontend_bucket.id}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  # React Router (SPA) ke liye custom error response taaki page refresh par 404 na aaye
  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
  }
  
  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # <--- Naya Viewer Certificate Block (SSL ke liye) --->
  viewer_certificate {
  acm_certificate_arn      = aws_acm_certificate.cert.arn
  ssl_support_method       = "sni-only"
  minimum_protocol_version = "TLSv1.2_2021"
}
}

# 4. S3 Bucket Policy (CloudFront ko read karne ki permission)
data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.frontend_bucket.arn}/*"]
    
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.frontend_cdn.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "frontend_bucket_policy" {
  bucket = aws_s3_bucket.frontend_bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

# 5. Output mein CloudFront ka URL print karwana
output "cloudfront_url" {
  value       = aws_cloudfront_distribution.frontend_cdn.domain_name
  description = "Aapki website ka AWS CloudFront URL"
}

# ==========================================
# CUSTOM DOMAIN & SSL CERTIFICATE (ACM)
# ==========================================

# 1. Request SSL Certificate in us-east-1
resource "aws_acm_certificate" "cert" {
  provider          = aws.us_east_1
  domain_name       = var.domain_name
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# 2. Output for DNS Validation
output "ssl_validation_name" {
  value       = tolist(aws_acm_certificate.cert.domain_validation_options)[0].resource_record_name
  description = "Add this NAME as a CNAME in your Domain DNS"
}

output "ssl_validation_value" {
  value       = tolist(aws_acm_certificate.cert.domain_validation_options)[0].resource_record_value
  description = "Add this VALUE in your Domain DNS"
}
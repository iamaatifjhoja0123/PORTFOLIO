# terraform/variables.tf

variable "domain_name" {
  description = "Aapki website ka primary domain"
  type        = string
  default     = "aatif.jhoja.tech"
}

variable "bucket_name" {
  description = "Frontend host karne ke liye S3 bucket ka naam"
  type        = string
  default     = "aatif-portfolio-frontend-bucket" 
}

variable "email_user" {
  description = "Gmail address for NodeMailer"
  type        = string
  sensitive   = true # Sensitive true karne se yeh terminal mein print nahi hoga
}

variable "email_pass" {
  description = "Gmail App Password for NodeMailer"
  type        = string
  sensitive   = true
}
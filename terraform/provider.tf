# terraform/provider.tf

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Hum Mumbai (ap-south-1) region use kar rahe hain
# Agar aapko US mein banana hai toh "us-east-1" kar dein
provider "aws" {
  region = "ap-south-1" 
}

# CloudFront ke certificates hamesha us-east-1 mein bante hain
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
# terraform/provider.tf

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}


provider "aws" {
  region = "ap-south-1" 
}

# CloudFront ke certificates hamesha us-east-1 mein bante hain
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
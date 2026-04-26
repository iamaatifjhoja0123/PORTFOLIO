# 🚀 Mohd Aatif | Enterprise-Grade Serverless Portfolio

![AWS](https://img.shields.io/badge/AWS-Certified_Solutions_Architect-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

Welcome to the source code of my personal portfolio website, hosted live at **[aatif.jhoja.tech](https://aatif.jhoja.tech)**. 

This project is not just a standard web application; it is a demonstration of **Cloud-Native Architecture, Infrastructure as Code (IaC), and Zero-Downtime CI/CD pipelines**. It showcases my ability to architect and deploy highly available, secure, and cost-optimized full-stack solutions.

---

## 🏗️ Cloud Architecture

The application runs on a 100% Serverless AWS architecture, entirely provisioned using Terraform.

* **Frontend (Static Site Hosting):** React (Vite) built and stored in an **AWS S3 Bucket**. Delivered globally with ultra-low latency using **AWS CloudFront (CDN)**.
* **Backend (Serverless API):** Node.js/Express application wrapped with `serverless-http` and deployed on **AWS Lambda**. Exposed to the frontend securely via **AWS API Gateway (HTTP API)**.
* **Security & DNS:** Custom domain routing via Route 53 (CNAMEs) with SSL/TLS encryption managed by **AWS Certificate Manager (ACM)**.
* **Automation:** Fully automated GitOps workflow using **GitHub Actions**. Pushing to the `main` branch triggers a build, deployment to S3, and automatic CloudFront cache invalidation.

---

## 💻 Tech Stack

### Frontend
* **Framework:** React.js + Vite
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React

### Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Email Service:** Nodemailer (Gmail SMTP)
* **Serverless Wrapper:** Serverless-HTTP

### DevOps & Infrastructure
* **Cloud Provider:** Amazon Web Services (AWS)
* **IaC:** Terraform
* **CI/CD:** GitHub Actions

---

## ⚙️ Features

- ⚡ **Blazing Fast Performance:** Global content delivery via CloudFront CDN.
- 🔒 **Secure:** Strict S3 bucket policies (OAC), HTTPS enforcement, and environment variable protection.
- ✉️ **Functional Contact Form:** Direct email delivery using the Serverless Lambda API.
- 📜 **Interactive UI:** Smooth scrolling navigation and dynamic PDF certificate rendering.
- 🤖 **Zero-Touch Deployments:** Automated build and deploy pipeline.

---

## 🛠️ Local Development Setup

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone [https://github.com/iamaatifjhoja0123/PORTFOLIO.git](https://github.com/iamaatifjhoja0123/PORTFOLIO.git)
cd PORTFOLIO

2. Setup Backend (API)
cd backend
npm install

Create a .env file in the backend directory:

PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password

Start the backend server:
node server.js

3. Setup Frontend
Open a new terminal and navigate to the frontend directory:
cd frontend
npm install
npm run dev


🌐 Connect with Me
Portfolio: aatif.jhoja.tech

LinkedIn: Mohd Aatif

Email: m.aatif0123@gmail.com
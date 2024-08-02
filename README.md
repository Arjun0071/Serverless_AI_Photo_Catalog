# Serverless_AI_Photo_Catalog
Overview
The Serverless AI Photo Catalog is a robust solution for managing, processing, and distributing images using AWS services. Leveraging AWS SAM and Amazon Bedrock's Claude 3 Haiku model, this project provides an end-to-end pipeline for image handling with serverless architecture.

Features
Image Upload: Users can upload images to an S3 bucket.
Image Processing: Automatically triggers Lambda functions to process images using Claude 3 Haiku for AI-driven summaries and categorization.
Image Hosting: Processed images are hosted and distributed through CloudFront.
Metadata Storage: Summaries and categories are stored in DynamoDB for easy retrieval.
Architecture
S3 Buckets:
Incoming Bucket: Stores uploaded images.
Image Bucket: Stores processed images.
Lambda Functions:
RenameImageFunction: Renames and processes images.
SummariseImageFunction: Uses Claude 3 Haiku to generate summaries and categories.
GetImagesFunction: Provides image data through an API.
CloudFront: Distributes the frontend files and processed images.
DynamoDB: Stores image metadata.
Deployment
Build and Deploy: Use the SAM CLI to build and deploy the application.

bash
Copy code
sam build --use-container
sam deploy --guided
Frontend Deployment: Upload your frontend files (e.g., index.html) to the S3 bucket specified for hosting.

Frontend Access
Access your application via the CloudFront distribution URL.
Notes
Ensure the necessary IAM roles and policies are configured for Lambda functions.
Verify Bedrock model access and permissions for Claude 3 Haiku.

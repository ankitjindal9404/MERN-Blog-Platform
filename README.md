# MERN Blog Platform - Deployed on AWS EKS with Helm, ArgoCD, and Docker

A blog platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to create, read, and delete blog posts. It also includes user authentication.

This project includes a full CI/CD setup with unit tests, linting, SonarQube analysis, Trivy scans for frontend and backend, container builds to Docker Hub, and deployment to an Amazon EKS cluster using Helm charts and ArgoCD.

---

## Tech stack

- **App**: MERN
- **Database**: MongoDB Atlas
- **Container**: Docker
- **Orchestration**: Amazon EKS
- **GitOps**: ArgoCD
- **Quality**: ESLint, Jest, SonarCloud, Trivy
- **CI/CD**: GitHub Actions

---

## Project Structure

This repository is structured into two main parts:

- **Frontend**: The client-side React.js application for the user interface.
- **Backend**: The server-side Node.js application for handling API requests and managing the database.

You can find the `README.md` files for both the frontend and backend in their respective directories.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- For deployment: AWS account, an EKS cluster, kubectl, Helm, and Argo CD

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ankitjindal9404/MERN-Blog-Platform.git
   cd MERN-Blog-Platform

Follow the installation instructions for the Frontend and Backend below.

## Running the Application

To run the application, make sure both the frontend and backend are set up and running:

### Setup Frontend

For details on setting up the frontend, visit: [Frontend README](./frontend/README.md)

### Setup Backend

For details on setting up the backend, visit: [Backend README](./backend/README.md)

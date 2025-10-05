# **Backend README.md**

This file explains how to set up and run the backend Node.js application.

## Blog Platform - Backend

This is the backend part of the Blog Platform, built with Node.js and Express.js. It handles the API requests for managing blog posts, user authentication, and interacting with the MongoDB database.

## Features

- User Authentication (JWT-based login and registration)
- CRUD operations for blog posts
- User management for handling content
- MongoDB integration for data storage

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [MongoDB](https://www.mongodb.com/) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud database

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ankitjindal9404/MERN-Blog-Platform.git
   cd MERN-Blog-Platform/backend

2. Create a .env file in the backend directory and add the following:

   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=mysecretkey

3. Install dependencies:

   ```bash
   npm install
   nodemon server.js

This will start the backend API at http://localhost:5000/api/blogs.

### Available Scripts

1. **`nodmon server.js`**: Starts the development server.
2. **`npm run lint`**: Lint checks.
3. **`npm test`**: Runs the test suite.
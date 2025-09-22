const express = require('express');
const router = express.Router();
const { getBlogs, createBlog } = require('../controllers/blogController');
const authMiddleware = require('../middleware/auth');

// Get all blogs
router.get('/', getBlogs);

// Create a new blog (requires authentication)
router.post('/', authMiddleware, createBlog);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getBlogs, createBlog, deleteBlog } = require('../controllers/blogController');
const authMiddleware = require('../middleware/auth');

// Get all blogs
router.get('/', getBlogs);

// Create a new blog (requires authentication)
router.post('/', authMiddleware, createBlog);

// DELETE a blog by ID (protected route)
router.delete('/:id', authMiddleware, deleteBlog);  // <-- This is the new delete route

module.exports = router;

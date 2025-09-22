const mongoose = require('mongoose');
const Blog = require('../models/Blog');

// Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Create a new blog
exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.userId;
  try {
    const newBlog = new Blog({ title, content, author: userId });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  const { id } = req.params;

  // Check if the provided ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: 'Invalid blog ID' });
  }

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ msg: 'Blog not found' });
    }

    // Check if the user is the author of the blog
    if (blog.author.toString() !== req.userId) {
      return res.status(403).json({ msg: 'You are not authorized to delete this blog' });
    }

    // Remove the blog using findByIdAndDelete
    await Blog.findByIdAndDelete(id); // Use findByIdAndDelete or deleteOne instead of remove
    res.status(200).json({ msg: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Error deleting blog:', err);  // Log the error
    res.status(500).json({ msg: 'Server error' });
  }
};
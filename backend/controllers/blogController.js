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

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (err) {
        setError('Error fetching blogs: ' + err.response?.data?.msg || 'Server error');
      }
    };
    fetchBlogs();
  }, []);

  // Delete Blog
  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to delete a blog');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: {
          'x-auth-token': token, // Send the JWT token to authenticate
        },
      });
      // Remove the deleted blog from the UI
      setBlogs(blogs.filter((blog) => blog._id !== id));
      alert('Blog deleted successfully');
    } catch (err) {
      console.error('Error deleting the blog:', err);
      console.error('Error response:', err.response);  // Log the error response for debugging
      alert('Please log in again to continue.');
    }
  };

  return (
    <div>
      <h2>My Blogs</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {blogs.length > 0 ? (
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <p><strong>Author:</strong> {blog.author.username}</p>
              <button onClick={() => handleDelete(blog._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}

export default BlogList;

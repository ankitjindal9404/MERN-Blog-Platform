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

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  // Dynamically set backend API URL based on hostname
  const apiUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : 'http://my-blog-app.local';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const response = await axios.get('http://localhost:5000/api/blogs');
        const response = await axios.get(`${apiUrl}/api/blogs`);
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
      // const response = await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
      await axios.delete(`${apiUrl}/api/blogs/${id}`, {
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
    <div style={styles.container}>
      <h2 style={styles.header}>My Blogs</h2>
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.blogList}></div>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
            <div key={blog._id} style={styles.blogCard}>
              <h3 style={styles.blogTitle}>{blog.title}</h3>
              <p style={styles.blogContent}>{blog.content}</p>
              <p><strong>Author:</strong> {blog.author.username}</p>
              {/* <button style={styles.readMoreButton}>Read More</button> */}
              <button onClick={() => handleDelete(blog._id)} style={styles.deleteButton}>Delete</button>
            </div>
          ))
      ) : (
        <p style={styles.noBlogs}>No blogs found.</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '900px',
  },
  header: {
    textAlign: 'center',
    fontSize: '36px',
    color: '#333',
    marginBottom: '30px',
  },
  error: {
    color: 'red',
    fontSize: '18px',
    textAlign: 'center',
  },
  blogList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  blogCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
  },
  blogCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  blogTitle: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  blogContent: {
    color: '#555',
    fontSize: '16px',
    marginBottom: '10px',
  },
  deleteButton: {
    padding: '8px 16px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  noBlogs: {
    textAlign: 'center',
    color: '#555',
  },
  readMoreButton: {
    backgroundColor: '#28a745', // Green color
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};


export default BlogList;
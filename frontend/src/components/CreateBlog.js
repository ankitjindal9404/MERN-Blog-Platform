import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to create a blog.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:5000/api/blogs',
        { title, content },
        { headers: { 'x-auth-token': token } }
      );
      alert('Blog created successfully!');
      navigate('/blogs'); // Navigate to blog list
    } catch (err) {
      setError('Error: ' + err.response?.data?.msg || 'Server error');
    }
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleCreateBlog}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Blog Content"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/" element={<BlogList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/login" style={styles.link}>Login</Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/register" style={styles.link}>Register</Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/create-blog" style={styles.link}>Create Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0,
  },
  menuItem: {
    margin: '0 15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  }
};

export default Navbar;
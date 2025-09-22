import React from 'react';
import ReactDOM from 'react-dom/client'; // Import 'react-dom/client' for React 18
import './index.css';
import App from './App'; // Importing App.js

// Create a root element using React 18's new createRoot method
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
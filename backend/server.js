const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blogs');

// Initialize dotenv
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Server start
const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Remove the app.listen() in the test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log('Server running on port 5000');
  });
}
// module.exports = app; // Export the app for use in your tests

module.exports = app; // Export app for use in tests
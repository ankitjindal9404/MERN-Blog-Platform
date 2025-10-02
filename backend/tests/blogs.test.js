require('dotenv').config();

const request = require('supertest');
const app = require('../server'); // Assuming your Express app is in server.js
const mongoose = require('mongoose');


beforeAll(() => {
  // Mock console.log to prevent server start logs during tests
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

// Set up database and app before tests
beforeAll(async () => {
  // Set up the database connection
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  // Register a test user and log in to get the token
  await request(app)
    .post('/api/auth/register')
    .send({ username: 'testuser', email: 'testuser@example.com', password: 'password123' });

  const loginResponse = await request(app)
    .post('/api/auth/login')
    .send({ email: 'testuser@example.com', password: 'password123' });

  token = loginResponse.body.token; // Save the token for further tests
});

afterAll(async () => {
  // Clean up database connections after tests
  await mongoose.disconnect();
});

describe('Blog API Tests', () => {

  test('Should fetch all blogs', async () => {
    const response = await request(app)
      .get('/api/blogs')
      .set('x-auth-token', token); // Set token to authorize

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array); // Ensure the response is an array
  });

  test('Should create a new blog', async () => {
    const response = await request(app)
      .post('/api/blogs')
      .set('x-auth-token', token)
      .send({ title: 'Test Blog', content: 'This is a test blog content' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });

  test('Should delete a blog', async () => {
    const newBlog = await request(app)
      .post('/api/blogs')
      .set('x-auth-token', token)
      .send({ title: 'Test Blog for Deletion', content: 'This blog will be deleted' });

    const blogId = newBlog.body._id;
    const response = await request(app)
      .delete(`/api/blogs/${blogId}`)
      .set('x-auth-token', token);

    expect(response.status).toBe(200);
    expect(response.body.msg).toBe('Blog deleted successfully');
  });
});

afterAll(() => {
  // Restore original console.log after tests
  console.log.mockRestore();
});
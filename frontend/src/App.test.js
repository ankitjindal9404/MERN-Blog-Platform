import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios';

// Mock axios so tests don't hit your API
jest.mock('axios');

beforeEach(() => {
  // Start each test on the home route
  window.history.pushState({}, '', '/');

  // Default: BlogList gets no blogs
  axios.get.mockResolvedValue({ data: [] });
  jest.clearAllMocks();
});

test('renders Navbar correctly', () => {
  render(<App />);

  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
  expect(screen.getByText(/Create Blog/i)).toBeInTheDocument();
});

test('navigates to /login when Login link is clicked', () => {
  render(<App />);

  fireEvent.click(screen.getByText(/Login/i));
  expect(screen.getByRole('heading', { name: /Login to Your Account/i })).toBeInTheDocument();
});

test('navigates to /register when Register link is clicked', () => {
  render(<App />);

  fireEvent.click(screen.getByText(/Register/i));
  expect(screen.getByRole('heading', { name: /Register to Create an Account/i })).toBeInTheDocument();
});

test('renders BlogList component by default', async () => {
  render(<App />);

  // “No blogs found.” is rendered when blogs = []
  // Use findByText since BlogList sets state after effect
  expect(await screen.findByText(/No blogs found/i)).toBeInTheDocument();
});

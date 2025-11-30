// src/services/api.js
import axios from 'axios';

// Get API URL from environment variable with fallback to localhost
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  withCredentials: true, // Enable credentials for cookies/sessions
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add auth token if available
client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle errors globally
client.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle different error scenarios
    if (error.response?.status === 401) {
      // Unauthorized - clear auth and redirect to login
      localStorage.removeItem('authToken');
      window.location.href = '/auth-callback';
    } else if (error.response?.status === 403) {
      // Forbidden
      console.error('Access forbidden');
    } else if (!error.response) {
      // Network error
      console.error('Network error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Request wrapper with error normalization
async function request(method, url, data = null, config = {}) {
  try {
    const res = await client({ method, url, data, ...config });
    return res.data;
  } catch (err) {
    // Normalize error response
    const message = err?.response?.data?.message || err.message || 'API request failed';
    const status = err?.response?.status || 500;
    const error = new Error(message);
    error.status = status;
    error.response = err?.response;
    error.originalError = err;
    throw error;
  }
}

export default {
  get: (url, config) => request('get', url, null, config),
  post: (url, data, config) => request('post', url, data, config),
  put: (url, data, config) => request('put', url, data, config),
  patch: (url, data, config) => request('patch', url, data, config),
  del: (url, config) => request('delete', url, null, config),
  client,
};

// src/services/api.js
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || '';

const client = axios.create({
  baseURL: API,
  timeout: 10000,
});

// basic error wrapper
async function request(method, url, data = null, config = {}) {
  try {
    const res = await client({ method, url, data, ...config });
    return res.data;
  } catch (err) {
    // normalize error
    const message = err?.response?.data?.message || err.message || 'API request failed';
    const status = err?.response?.status || 500;
    const error = new Error(message);
    error.status = status;
    error.response = err?.response;
    throw error;
  }
}

export default {
  get: (url, config) => request('get', url, null, config),
  post: (url, data, config) => request('post', url, data, config),
  put: (url, data, config) => request('put', url, data, config),
  del: (url, config) => request('delete', url, null, config),
  client,
};

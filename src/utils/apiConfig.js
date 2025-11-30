/**
 * Centralized API configuration
 * Ensures all API calls use the correct base URL from environment variables
 */

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

/**
 * Build full API URL from endpoint
 * @param {string} endpoint - API endpoint (e.g., '/api/courses')
 * @returns {string} Full URL
 */
export const buildApiUrl = (endpoint) => {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${cleanEndpoint}`;
};

/**
 * Get API configuration object for fetch requests
 * @param {object} options - Additional fetch options
 * @returns {object} Fetch configuration
 */
export const getApiConfig = (options = {}) => {
  return {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };
};

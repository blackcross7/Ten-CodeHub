import axios from 'axios';

const baseURL = 'http://localhost:5000/api';

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // Important for handling cookies/JWT
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add any request preprocessing here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle specific error cases
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          break;
        case 404:
          // Handle not found
          break;
        case 500:
          // Handle server error
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
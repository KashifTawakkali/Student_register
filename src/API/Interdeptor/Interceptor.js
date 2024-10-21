import axios from 'axios';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://register-backend-silk.vercel.app/',  
  timeout: 10000,  
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
   
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle the response globally if needed
    return response;
  },
  (error) => {
    // Handle response errors globally
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized, redirecting to login...');
      window.location.href = '/';   
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

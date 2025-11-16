import axios from 'axios';

const API_URL = 'https://railway.com/project/8d07b58a-6d29-4d9a-b0a8-2a625ef80ec8/service/9fc835c3-068f-4ba5-ba13-c7ce370e7fc9?environmentId=f5492063-6bf8-40f4-b24a-00675e03731a&id=9efcddb3-8926-4138-9c72-67d3ad623f21#details/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to headers
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

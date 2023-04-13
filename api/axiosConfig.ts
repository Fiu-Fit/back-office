import axios from 'axios';
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401 || error.response.status === 500) {
      window.location.href = '/';
    }
  }
);

export default axiosInstance;

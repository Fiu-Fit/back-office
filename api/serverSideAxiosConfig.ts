import axios from 'axios';
import { cookies } from 'next/headers';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.API_URL;

axiosInstance.interceptors.request.use((config) => {
  const token  = cookies().get('token')?.value;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

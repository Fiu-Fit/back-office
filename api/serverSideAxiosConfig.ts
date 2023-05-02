import axios from 'axios';
import { cookies } from 'next/headers';

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use((config) => {
  const token  = cookies().get('token')?.value;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

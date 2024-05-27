import axios from 'axios';

const baseURL = 'http://localhost:8000';

const instance = axios.create({
    baseURL: baseURL,
    headers: {'Content-Type': 'application/json'}
});


instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default instance;
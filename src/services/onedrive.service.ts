// src/onedriveService.js
import axios from 'axios';

const BASE_URL = 'https://graph.microsoft.com/v1.0/me';
// Create an axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.token;
  config.headers.Authorization = token;
  return config;
});

export const onedriveService = {
  axiosInstance: axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  getUserDetails: () => {
    return axiosInstance.get('/');
  },

  getFilePermissions: (itemId) => {
    return axiosInstance.get(`/drive/items/${itemId}/permissions`);
  },

  getRootWithThumbnails: () => {
    return axiosInstance.get(
      '/drive/root?expand=thumbnails,children(expand=thumbnails(select=large))'
    );
  },

  getRootChildren: () => {
    return axiosInstance.get('/drive/root/children');
  },

  getItemChildren: (itemId) => {
    return axiosInstance.get(`/drive/items/${itemId}/children`);
  },

  getItemPermissions: (itemId) => {
    return axiosInstance.get(`/drive/items/${itemId}/permissions`);
  },
};

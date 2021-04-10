import baseAxios from 'axios';

export const axios = baseAxios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

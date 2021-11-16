import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dtmoney-victor.netlify.app/api',
})
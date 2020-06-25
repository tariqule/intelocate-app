import axios from 'axios';
// import {getToken} from '../utils/localStorage/storage';
import {BASE_API_URL} from './config';

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 6000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

import axios from 'axios';
// import {getToken} from '../utils/localStorage/storage';
import {BASE_API_URL} from './config';

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 6000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    // 'Content-Type': 'application/json;charset=UTF-8',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    // 'Access-Control-Allow-Headers':
    //   'X-Requested-With, content-type, Authorization',
    Accept: '*/*',
  },
});

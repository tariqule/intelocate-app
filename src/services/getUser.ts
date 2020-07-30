import {api} from './api';
import {storeUserInfo} from './local-storage';
import Axios from 'axios';

export const getCurrentUser = () => {
  api.get('/user').then((res) => {
    storeUserInfo(res.data);
  });
};

export const getExternalUsers = (response) => {
  api
    .get('/top-external-users')
    .then((res) => response(res.data))
    .then((err) => console.log(err));
};

export const getTaskForUsers = (taskID, response) => {
  api.defaults.withCredentials;
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  };

  api
    .get(`users/task-tree/${taskID}`, config)
    .then((res) => response(res.data))
    .then((err) => console.log(err));
};

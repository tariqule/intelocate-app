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
    headers: {Accept: `*/*`, 'Content-Type': 'application/json;charset=UTF-8'},
  };

  api
    .get(`users/task-tree/${taskID}`, config)
    .then((res) => response(res.data))
    .then((err) => console.log(err));
};

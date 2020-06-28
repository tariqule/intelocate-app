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

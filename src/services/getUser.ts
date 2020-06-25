import {api} from './api';
import {storeUserInfo} from './local-storage';

export const getCurrentUser = () => {
  api.get('/user').then((res) => {
    storeUserInfo(res.data);
  });
};

import {api} from './api';
import {getCurrentUser} from './getUser';
import Axios from 'axios';

// import {HttpDataSource} from './data-source';

export const signin = (
  email: string,
  password: string,
  response: any,
  error: any,
) => {
  api
    .post('/authenticate', {email, password})
    .then((res) => {
      response(res);
    })
    .then(() => {
      getCurrentUser();
    })
    .catch((err) => error(err));
};

export const forgotPassword = (email: string, response: any) => {
  api
    .post('/recover-password', {email})
    .then((res) => {
      const newLocal = ' => [auth] forgot password response received';
      console.log(JSON.stringify(res) + newLocal);
      alert('Email sent!');
      response(res);
    })
    .catch((err) => {
      alert('Invalid Email');
    });
};

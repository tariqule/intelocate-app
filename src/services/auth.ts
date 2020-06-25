import {api} from './api';
import {getCurrentUser} from './getUser';

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

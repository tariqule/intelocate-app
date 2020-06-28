import {api} from './api';

export const getUserLocations = (response) => {
  api
    .get('/user-locations')
    .then((res) => response(res.data))
    .then((err) => console.log(err));
};

import {api} from './api';

export const getUserByNfc = (etagId, response) => {
  api
    .get(`/etag/check/${etagId}`)
    .then((res) => response(res.data))
    .then((err) => console.log(err));
};

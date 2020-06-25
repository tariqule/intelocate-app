import {api} from './api';
import axios from 'axios';
export const getCategories = (response) => {
  api.get('/task-categories').then((res) => response(res));
};

export const getSubCategories = (catId, response) => {
  axios
    .get(`https://mobile.intelocate.com/api/task-sub-categories/${catId}`)
    .then((res) => response(res));
};

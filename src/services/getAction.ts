import {api} from './api';
import Axios from 'axios';

export const getAction = async (params, reposnse, error?) => {
  console.log(
    JSON.stringify(params) + 'dta to be sent to db [get Action Service',
  );
  await api
    .post('/list-tasks', params)
    .then((response) => reposnse(response))
    .catch((err) => {
      error(err);
      console.log(JSON.stringify(err) + 'Error: [get Action Service]');
    });
};
export const getDashboardAction = (params, reposnse) => {
  console.log(
    JSON.stringify(params) + 'dta to be sent to db [get Action Service',
  );
  api
    .post('/dashboard/tasks', params)
    .then((response) => reposnse(response))
    .catch((err) =>
      console.log(JSON.stringify(err) + 'Error: [get Action Service]'),
    );
};

export const getSpecificTask = (taskId: string, response: any) => {
  api
    .get(`/task/${taskId}`)
    .then((res) => response(res))
    .catch((err) => alert(err));
};

export const updateAction = (id: string, params, response: any) => {
  console.log(JSON.stringify(params));
  Axios.put(`https://mobile.intelocate.com/api/task/${id}`, params)
    .then((res) => response(res))
    .catch((Error) => console.log(Error));
};

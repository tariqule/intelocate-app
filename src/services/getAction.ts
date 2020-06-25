import {api} from './api';

export const getAction = (params, reposnse) => {
  console.log(
    JSON.stringify(params) + 'dta to be sent to db [get Action Service',
  );
  api
    .post('/list-tasks', params)
    .then((response) => reposnse(response))
    .then((err) =>
      console.log(JSON.stringify(err) + 'Error: [get Action Service]'),
    );
};

export const getSpecificTask = (taskId: string, response: any) => {
  api
    .get(`/task/${taskId}`)
    .then((res) => response(res))
    .catch((err) => alert(err));
};

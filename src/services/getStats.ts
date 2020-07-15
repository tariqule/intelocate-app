import {api} from './api';

export const getStats = (reposnse) => {
  api
    .post('/dashboard/task-status-stat')
    .then((response) => reposnse(response))
    .catch((err) =>
      console.log(JSON.stringify(err) + 'Error: [get Stats Service]'),
    );
};

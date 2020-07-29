import {api} from './api';
import Axios from 'axios';

export const sendIssue = (useOrganizationID, params, response) => {
  Axios.post(
    `https://mobile.intelocate.com/api/tasks/${useOrganizationID}`,
    params,
  )
    .then((res) => response(res))
    .catch((err) => console.log(err));
};

export const getFormForIssue = (taskId, response) => {
  api
    .get(`/task-tree/${taskId}/forms`)
    .then((res) => response(res))
    .catch((err) => console.log(err));
};

export const getFilesForIssue = (taskId: string, response) => {
  api
    .get(`/task-attachments/${taskId}`)
    .then((res) => response(res))
    .catch((err) => console.log(err));
};

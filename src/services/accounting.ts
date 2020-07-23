import {api} from './api';
export const getAcctuals = (taskId: string, response: any) => {
  api
    .get(`/accounting/task-costs/${taskId}`)
    .then((res) => response(res.data))
    .catch((err) => alert(err));
};

export const updateInvoice = (taskId: string, params: any, response: any) => {
  console.log(JSON.stringify(params) + 'sending..');
  api
    .put(`/accounting/task-cost/${taskId}`, params)
    .then((res) => response(res.data))
    .catch((err) => alert(err));
};

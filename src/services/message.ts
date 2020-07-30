import {api} from './api';

export const getConversationForTask = (taskID, response) => {
  api
    .get(`/task-conversations/${taskID}`)
    .then((res) => response(res.data))
    .then((err) => console.log(err));
};

export const getMessageForTask = (chatID, response) => {
  api
    .get(`/messages/${chatID}`)
    .then((res) => response(res.data))
    .then((err) => console.log(err));
};

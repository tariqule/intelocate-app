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

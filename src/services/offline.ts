import Axios from 'axios';

import {api} from './api';

export const getOfflineOrganizations = (response) => {
  Axios.get('https://mobile.intelocate.com/api/mobile/data-packet')
    .then((res) => response(res.data.tenants))
    .then((err) => console.log(err));
};

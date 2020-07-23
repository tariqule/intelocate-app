import {api} from './api';
import Axios from 'axios';

export const getOrganizationsList = (permission, response) => {
  api
    .get(`/api/list-organizations/${permission}`)
    .then((res) => response(res.data))
    .then((err) => console.log(err));
};

export const getListOrganizationWithLocation = (
  tenantId,
  permission,
  response,
) => {
  api
    .get(
      `https://mobile.intelocate.com/api/list-organizations-with-locations/${tenantId}/${permission}`,
    )
    .then((res) => response(res))
    .catch((err) => console.log(err));
};

export const getListTenantsWithLocation = (response) => {
  Axios.get(
    `https://mobile.intelocate.com/api/list-tenants-with-locations/CREATE_PROJECT`,
  )
    .then((res) => response(res))
    .catch((err) => console.log(err + 'error'));
};

export const getListLocationByOrganization = (orgId, response) => {
  Axios.get(`https://mobile.intelocate.com/api/organization-locations/${orgId}`)
    .then((res) => {
      console.log(JSON.stringify(res));
      response(res);
    })
    .catch((err) => console.log(err));
};

export const getAllOrganizations = (response) => {
  //mobile.intelocate.com/api/list-organizations/VIEW_ORGANIZATION
  api
    .get(`/list-organizations/VIEW_ORGANIZATION`)
    .then((res) => response(res.data))
    .catch((err) => console.log(err));
};

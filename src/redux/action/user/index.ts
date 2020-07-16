import {GET_TOKEN, GET_ORG_ID} from './types';
export const token = (responseData: any) => ({
  type: GET_TOKEN,
  payload: responseData,
});

export const userOrgId = (responseData: any) => ({
  type: GET_ORG_ID,
  payload: responseData,
});

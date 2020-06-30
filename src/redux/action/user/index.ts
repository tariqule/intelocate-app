import {GET_TOKEN} from './types';
export const token = (responseData: any) => ({
  type: GET_TOKEN,
  payload: responseData,
});

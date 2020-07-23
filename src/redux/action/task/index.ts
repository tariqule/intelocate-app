import {VendorBlock} from './../../../navigations/guarded/action/action-details/actuals/types';
import {ActualItem} from '@intelocate/api-services';
import {SET_ACTUAL_DATA, SET_ACTUAL_INVOICE, SET_ORGANIZATION} from './types';

export const setAcctualData = (payload: ActualItem[]) => ({
  type: SET_ACTUAL_DATA,
  payload,
});
export const setActualInvoice = (payload: VendorBlock[]) => ({
  type: SET_ACTUAL_INVOICE,
  payload,
});
export const setOrganization = (payload: any) => ({
  type: SET_ORGANIZATION,
  payload,
});

import {
  AccountingService,
  CurrencyCode,
  OrganizationFoundByString,
  ActualItem,
  TaskCost,
} from '@intelocate/api-services';
// import { Data } from '~/services/composite-services/find-by-string';

export {OrganizationFoundByString, TaskCost, ActualItem, CurrencyCode};

// export type VendorGroup = Data;

export interface VendorAndDate {
  vendorId: string | null;
  invoiceDate: string | null;
}

export interface VendorBlock extends VendorAndDate {
  name: string | null;
  invoices: ActualItem[];
}

export interface User {
  id: string;
  name: string;
}

export interface IStore {
  taskId: string | null;
  currency: CurrencyCode | null;
  actuals: ActualItem[];
  finPeriod: string | null;
  user: User | null;
}

export type HttpSource = AccountingService;

export interface ValidActualItem {
  vendorId: string;
  invoiceDate: string;
  invoiceNumber: number;
  hours: number;
  actualCost: number;
  description: string;
  externalCreatorId?: string;
  finPeriod?: string | null;
}

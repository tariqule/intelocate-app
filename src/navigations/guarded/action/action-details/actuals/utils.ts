import {toDateWithUTCTime, toUTCString} from './../../../../../utils/datetime';
import * as sortBy from 'lodash/sortBy';
import * as findLastIndex from 'lodash/findLastIndex';
import {TaskCostOptions} from '@intelocate/api-services';
import {ActualItem, VendorAndDate, ValidActualItem, VendorBlock} from './types';
// import { toUTCString, toDateWithUTCTime } from "../../../../utils/datetime";
var numeral = require('numeral');
import * as _ from 'lodash';

interface ReducedActualItem extends VendorAndDate {
  id: number;
  finPeriod?: string | null;
}
type GetNewActualData = (
  taskId: string,
  common: Partial<ReducedActualItem>,
) => ActualItem;
export const getNewActualData: GetNewActualData = (taskId, common) => {
  return {
    taskId,
    id: common.id || 0,
    vendorId: common.vendorId || null,
    invoiceDate: common.invoiceDate || null,
    finPeriod: common.finPeriod || undefined,
    externalCreatorId: null,
    externalCreatorName: null,
    vendorName: null,
    invoiceNumber: null,
    minutes: 0,
    hours: 0,
    description: '',
    creatorId: '',
    creatorName: '',
    createdAt: '',
    actualCost: 0,
  };
};

type IsVendorEqual = <T extends VendorAndDate>(v1: T) => (v2: T) => boolean;

export const getIsVendorEqual: IsVendorEqual = (v1) => {
  const key = getGroupKey(v1.invoiceDate, v1.vendorId);
  return (v2) => getGroupKey(v2.invoiceDate, v2.vendorId) === key;
};

export function getGroupKey(
  date: string | null,
  vendorId: string | null,
): string {
  return `${date || '0'}-${vendorId || '0'}`;
}

export function getTaskCostForRequest<T extends ValidActualItem>(
  data: T,
): TaskCostOptions {
  return {
    description: data.description,
    hours: data.hours,
    finPeriod: data.finPeriod,
    vendorId: data.vendorId,
    invoiceDate: toUTCString(new Date(data.invoiceDate)),
    externalCreatorId: data.externalCreatorId,
    invoiceNumber: String(data.invoiceNumber),
    cost: data.actualCost,
  };
}

interface PartialActualItem {
  vendorId: null | string;
  invoiceDate: null | string;
  invoiceNumber: null | number;
  hours: number;
  actualCost: number;
  description: string;
  finPeriod?: string | null;
}

export function isValidToSave(a: PartialActualItem): a is ValidActualItem {
  return (
    !!a.vendorId &&
    !!a.invoiceDate &&
    !!a.invoiceNumber &&
    a.hours > 0 &&
    a.actualCost > 0 &&
    a.description !== ''
  );
}

export function isNewInvoice(actual: {id: number}): boolean {
  return actual.id < 0;
}

export function getNewActualId(actuals: {id: number}[]): number {
  return Math.min(0, ...actuals.map((a) => a.id)) - 1;
}

export function convertDateForActuals(actuals: ActualItem[]): ActualItem[] {
  return actuals.map((a) => {
    const date = a.invoiceDate ? toDateWithUTCTime(a.invoiceDate) : null;
    return {
      ...a,
      invoiceDate: date ? date.toString() : null,
    };
  });
}

export function parseCost(value: string): number {
  return parseFloat(
    splitByDot(value)
      .filter((v) => !!v)
      .join('.') || '0',
  );
}

export function splitByDot(value: string): string[] {
  let dots = value.split('.'); // length always > 0 even if empty [""]
  if (dots.length > 1) {
    // if dot exists
    dots = [dots[0], dots.slice(1).join('').slice(0, 2)];
  }
  return dots;
}

export function removeLettersExceptDot(v: string): string {
  return v.replace(/[^.\d]/g, '');
}

export function sortActuals(actuals: ActualItem[]): ActualItem[] {
  const filtered = actuals.filter((i) => i.invoiceDate);
  return [
    ...sortBy(filtered, (a) =>
      a.invoiceDate ? new Date(a.invoiceDate).getTime() : 0,
    ),
    ...actuals.filter((i) => !i.invoiceDate),
  ];
}

export function concatInvoiceWithVendor(
  current: ActualItem[],
  oldActual: VendorAndDate,
  newActual: ActualItem,
): ActualItem[] {
  const isVendorTheSame = getIsVendorEqual(oldActual);
  const indexOfVendors = findLastIndex(current, isVendorTheSame);
  return concatActuals(current, [newActual], indexOfVendors + 1);
}

export function concatActuals(
  actuals: ActualItem[],
  addedActuals: ActualItem[],
  index: number,
): ActualItem[] {
  return [...actuals.slice(0, index), ...addedActuals, ...actuals.slice(index)];
}

export function formatCost(cost: number, currency: Currency): string {
  return `${getCurrencySign(currency)}${numeral(cost).format('0,0.00')}`;
}
export type Currency = 'USD' | 'GBP' | 'CAD' | 'EUR' | 'RUB';

function getCurrencySign(currency: Currency): string {
  switch (currency) {
    case 'GBP':
      return '£';
    case 'EUR':
      return '€';
    case 'RUB':
      return '₽';
    case 'USD':
    case 'CAD':
      return '$';
  }
}

export function getInvoices(actuals: ActualItem[]): VendorBlock[] {
  const group = _.groupBy(actuals, (a) =>
    getGroupKey(a.invoiceDate, a.vendorId),
  );
  return Object.keys(group).map((key) => {
    const invoices = [
      ...group[key].filter((a) => !isNewInvoice(a)),
      ...group[key].filter(isNewInvoice),
    ];
    const vendor = invoices[0]; // always exists
    return {
      invoices,
      vendorId: vendor.vendorId,
      name: vendor.vendorName,
      invoiceDate: vendor.invoiceDate,
    };
  });
}

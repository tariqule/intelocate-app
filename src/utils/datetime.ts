import * as moment from 'moment';
import {FORMAT, DATE_FORMAT, UI_DATE_FORMAT} from './constants';

export function formatTaskDate(date: Date, format = UI_DATE_FORMAT): string {
  return moment(date).format(format);
}

export function convertToDateFormat(date: Date | null): string | null {
  if (date === null) {
    return null;
  }
  return formatTaskDate(date, DATE_FORMAT);
}

export function formatTaskDateTime(
  date: Date,
  formatDate = UI_DATE_FORMAT,
  formatTime = 'LT',
): string {
  return `${formatTaskDate(date, formatDate)} ${formatTaskDate(
    date,
    formatTime,
  )}`;
}

export function formatISODate(isoDate: string) {
  return formatTaskDate(new Date(isoDate));
}

/**
 * Returns UTC string with 00:00:00.000
 */
export function toUTCString(date: Date): string {
  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  ).toJSON();
}

/**
 * Returns Date as for UTC but with wrong offset
 * @param input UTC string
 */
export function toDateWithUTCTime(input: string): Date | null {
  const date = new Date(input);
  if (isNaN(date.getTime())) {
    return null;
  }
  return new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
}

export function convertToTwelveHourFormat(value: string): string | null {
  if (value.indexOf(':') === -1) {
    return null;
  }
  if (getTimeFormat(value) === 12) {
    return value;
  }
  const [tempHours, minutes] = value.split(':').map(parseNum);
  if (tempHours === -1 || minutes === -1) {
    return null;
  }
  const hours =
    tempHours === 0 ? 12 : tempHours > 12 ? tempHours - 12 : tempHours;
  return `${hours}:${padNum(minutes)} ${tempHours >= 12 ? 'PM' : 'AM'}`;
}

export function convertToTwentyFourHourFormat(value: string): string | null {
  if (value.indexOf(':') === -1) {
    return null;
  }
  if (getTimeFormat(value) === 24) {
    return value;
  }
  const [time, period] = value.toLowerCase().split(' ');
  const [tempHours, minutes] = time.split(':').map(parseNum);
  if (tempHours === -1 || minutes === -1) {
    return null;
  }
  const hours =
    period === 'am' && tempHours === 12
      ? 0
      : period === 'pm' && tempHours < 12
      ? tempHours + 12
      : tempHours;
  return `${padNum(hours)}:${padNum(minutes)}`;
}

export function getTimeFormat(value: string): number {
  return value.toLowerCase().indexOf('am') === -1 &&
    value.toLowerCase().indexOf('pm') === -1
    ? 24
    : 12;
}

export function parseNum(v: string): number {
  const result = parseInt(v, 10);
  if (isNaN(result)) {
    return -1;
  }
  if (String(result).length !== v.length) {
    // 01 or 1f
    return v.slice(0, 1) === '0' ? result : -1;
  }
  return result;
}

export function padNum(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

export function getDateForRequest(date: Date | null): string | undefined {
  if (date === null) {
    return undefined;
  }
  return formatTaskDate(date, FORMAT);
}

export function getDaysTillStart(date: string | null): number {
  if (date === null) {
    return 0;
  }
  const now = moment();
  const start = moment(date);
  return Math.ceil(start.diff(now, 'hours') / 24);
}

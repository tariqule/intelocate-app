export const ITEMS_PER_PAGE = 50;

export const MIN_DESKTOP_WIDTH = 900;

export const MOBILE_MAX_WIDTH = 761;

export const DATE_FORMAT = 'YYYY-MM-DD';

export const STORAGE_KEY = 'viewListTypeOnLocationList';

export enum HTTP_ERROR {
    ACCOUNT_ALREADY_EXISTS = 9,
    EMAIL_ALREADY_REGISTERED = 50004,
    TASK_STASUS_ERROR = 50008,
    USERNAME_ALREADY_REGISTRED = 50010
}

export const DEFAULT_FETCH_HEADERS = [
    ['Content-Type', 'application/json; charset=utf-8']
];

export const DEFAULT_FETCH_FORM_HEADERS = [
    ['Content-Type', 'application/x-www-form-urlencoded; charset=utf-8']
];

export const KEY_CODE_ENTER = 13;
export const KEY_CODE_ESC = 27;

export const DEFAULT_DEBOUNCE_TIME = 500;

export const FORMAT = 'DD-MM-YYYY';

export const SELECTED_ITEMS_COLORS = {
    0: '#78a548',
    1: '#a27caa',
    2: '#e67348',
    3: '#ccc15e',
    4: '#51adae',
    5: '#3d9ad1',
    6: '#e0457b',
    7: '#614b79',
    8: '#276fb7',
    9: '#f08080'
};

export let UI_DATE_FORMAT = 'MM/DD/YYYY';
export function setUiDateFormat(f?: string) {
    UI_DATE_FORMAT = f || UI_DATE_FORMAT;
}

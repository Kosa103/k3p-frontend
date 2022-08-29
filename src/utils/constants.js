export const TOKEN = 'token';
export const USER = 'user';
export const USERNAME = 'username';
export const LANG = 'language';
export const STORAGE = 'storage';
export const MENU = 'menu';
export const TOPMATCH = 'topmatch';
export const INTL = 'intl';
export const NO_SERVER = 'Could not reach server';
export const TWO_WEEKS_MS = 12096e5;
export const EXP_DATE = 'token-expiration-date'

export const BASE_URL = process.env.REACT_APP_DATA_URL;
export const BASE_API_URL = `${BASE_URL}/api`;

//eslint-disable-next-line no-useless-escape
export const TRANSLATE_REGEXP = /[^\x20-\x7E]|[\s-\/()-]/g;

//TRANSLATION CONSTANTS
export const K3P = 'K3P';

export const PATHS = {
  root: '/',
  login: '/login',
  register: '/register',
  landing: '/landing',
  params: {

  }
};

export const STATUSES = {
  DONE: 'Done',
  UPDATE: 'Checking update status',
  LOGIN: 'Logging in',
  LOGIN_SUCCESS: 'Login was successful. Starting data fetch',
  FETCH: 'Fetching', // new
  ACTUALIZE: 'Actualizing data'
};

export const ERROR_MESSAGES = {
  EMAIL_EMPTY: 'Email is required',
  EMAIL_FORMAT: 'Please enter a valid email address',
  PASSWORD_EMPTY: 'Password is required',
  PASSWORD_SHORT: 'Password is too short',
  REQUIRED_FIELD: 'This field is required',
  ACCEPT_TERMS_REQUIRED: 'You must accept our terms of service',
};

export const DEFAULT_ERROR_MESSAGE = 'Something went wrong while making the request.<br />Please try again or reload the page.';

import * as Yup from 'yup';
import { ERROR_MESSAGES } from './constants';

export const LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(ERROR_MESSAGES.REQUIRED_FIELD),
  password: Yup.string()
    .required(ERROR_MESSAGES.PASSWORD_EMPTY),
});

export const REGISTER_SCHEMA = Yup.object().shape({
  firstName: Yup.string()
    .required(ERROR_MESSAGES.REQUIRED_FIELD),
  lastName: Yup.string()
    .required(ERROR_MESSAGES.REQUIRED_FIELD),
  email: Yup.string()
    .email()
    .required(ERROR_MESSAGES.REQUIRED_FIELD),
  password: Yup.string()
    .required(ERROR_MESSAGES.PASSWORD_EMPTY),
});

import * as yup from 'yup';
import { MSG_ERROR_REQUIRED_FIELD } from '../../../common/constants';
import { AUTH_FIELD_PASSWORD, AUTH_FIELD_USER_NAME } from '../constants';

export const LoginSchema = yup.object().shape({
  [AUTH_FIELD_USER_NAME]: yup.string().required(MSG_ERROR_REQUIRED_FIELD),
  [AUTH_FIELD_PASSWORD]: yup.string().required(MSG_ERROR_REQUIRED_FIELD),
});

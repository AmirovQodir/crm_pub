import * as yup from 'yup';
import { FIELD_BIRTH_DATE, FIELD_FULL_NAME, FIELD_STATUS, MSG_ERROR_REQUIRED_FIELD } from '../../../common/constants';

export const patientFormSchema = yup.object().shape({
  [FIELD_FULL_NAME]: yup.string().required(MSG_ERROR_REQUIRED_FIELD),
  [FIELD_BIRTH_DATE]: yup.string().required(MSG_ERROR_REQUIRED_FIELD),
  [FIELD_STATUS]: yup.string().required(MSG_ERROR_REQUIRED_FIELD),
});

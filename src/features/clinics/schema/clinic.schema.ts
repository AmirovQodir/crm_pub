import * as yup from 'yup';
import { FIELD_CLINIC_NAME, FIELD_COORDINATOR_NAME, MSG_ERROR_REQUIRED_FIELD } from '../../../common/constants';

export const clinicFormSchema = yup.object().shape({
  [FIELD_CLINIC_NAME]: yup.string().required(MSG_ERROR_REQUIRED_FIELD),
  [FIELD_COORDINATOR_NAME]: yup.string().required(MSG_ERROR_REQUIRED_FIELD),
});

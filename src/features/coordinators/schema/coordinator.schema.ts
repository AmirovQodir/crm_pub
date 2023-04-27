import * as yup from 'yup';
import { FIELD_COORDINATOR_NAME, FIELD_PHONE, MSG_ERROR_REQUIRED_FIELD } from '../../../common/constants';

export const coordinatorFormSchema = yup.object().shape({
  [FIELD_COORDINATOR_NAME]: yup.string().required(MSG_ERROR_REQUIRED_FIELD),
  [FIELD_PHONE]: yup.string().required(MSG_ERROR_REQUIRED_FIELD),
});

import * as yup from 'yup';
import { FIELD_PROCESS_BEFORE, MSG_ERROR_REQUIRED_FIELD } from '../../../common/constants';


export const processFormSchema = yup.object().shape({
    [FIELD_PROCESS_BEFORE]: yup.string().required(MSG_ERROR_REQUIRED_FIELD)
  });
  
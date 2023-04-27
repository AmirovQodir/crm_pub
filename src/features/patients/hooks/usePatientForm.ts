import { message } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { patientFormSchema } from '../schema';
import { FIELD_BIRTH_DATE, FIELD_CLINIC, FIELD_FULL_NAME, FIELD_LIVING_CITY } from '../../../common/constants';


export const usePatientForm = () => {

  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    [FIELD_FULL_NAME]: '',
    [FIELD_BIRTH_DATE]: '',
    [FIELD_LIVING_CITY]: '',
    [FIELD_CLINIC]: '',
  }

  const { register, control, formState: { errors }, handleSubmit, setValue, reset, getValues } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(patientFormSchema),
    mode: 'onBlur',
  });



  const [messageApi, contextHolder] = message.useMessage();

  const handleErrors = (errors: any) => {
    messageApi.open({
      type: 'error',
      content: errors.response.data.detail || 'Error messages'
    });
  };

  const onSubmit = (values: any) => {
    console.log(values);
    setIsLoading(true);
    createPatient(values)
      .then(() => {

      })
      .catch(handleErrors)
      .finally(() => setTimeout(() => setIsLoading(false), 20));
  };

  const handleReset = () => {
    reset(defaultValues)
  }

  const handlePatientForm = handleSubmit(onSubmit);

  return { control, register, setValue, getValues, isLoading, handleReset, resetValues: reset, handlePatientForm, contextHolder };
};

export const createPatient = (values: any): Promise<{ success: boolean }> => {
  return Promise.resolve({ success: true })
}
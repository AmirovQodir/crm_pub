import { message } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { coordinatorFormSchema } from '../schema';
import { FIELD_COORDINATOR_NAME, FIELD_EMAIL, FIELD_PASSWORD, FIELD_PHONE } from '../../../common/constants';

export const useCoordinatorForm = () => {

  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    [FIELD_COORDINATOR_NAME]: '',
    [FIELD_PHONE]: '',
    [FIELD_EMAIL]: '',
    [FIELD_PASSWORD]: '',
  }

  const { register, control, formState: { errors }, handleSubmit, setValue, reset, getValues } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(coordinatorFormSchema),
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

  const handleCoordinatorForm = handleSubmit(onSubmit);

  return { control, register, setValue, getValues, isLoading, handleReset, resetValues: reset, handleCoordinatorForm, contextHolder };
};

export const createPatient = (values: any): Promise<{ success: boolean }> => {
  return Promise.resolve({ success: true })
}
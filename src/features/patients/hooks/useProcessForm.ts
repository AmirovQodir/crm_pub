import { message } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { processFormSchema } from '../schema';
import { FIELD_PROCESS_AFTER, FIELD_PROCESS_BEFORE, FIELD_PROCESS_WHILE } from '../../../common/constants';


export const useProcessForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      [FIELD_PROCESS_BEFORE]: '',
      [FIELD_PROCESS_WHILE]: '',
      [FIELD_PROCESS_AFTER]: '',
    },
    resolver: yupResolver(processFormSchema),
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
    onProcess(values)
      .then(() => {
        
      })
      .catch(handleErrors)
      .finally(() => setTimeout(() => setIsLoading(false), 20));
  };

  const handleProcessForm = handleSubmit(onSubmit);

  return { control, register, isLoading, handleProcessForm, contextHolder };
};

export const onProcess = (values: any): Promise<{success: boolean}> => {
  return Promise.resolve({ success: true })
}
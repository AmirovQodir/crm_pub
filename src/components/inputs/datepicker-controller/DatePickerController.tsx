import { Space, DatePickerProps, DatePicker } from "antd";
import { FC } from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import dayjs from 'dayjs';

export type DatePickerControllerProps = DatePickerProps & {
  control: Control<any>;
  name: string;
  label?: string;
  setValue: UseFormSetValue<any>
};

export const DatePickerController: FC<DatePickerControllerProps> = ({
  control,
  name,
  label,
  setValue,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...fieldProps }, fieldState: { error } }) => {
        const onChange = (date: any, dateString: string) => {
          setValue(name, dateString)
        }
        return <Space style={{ width: '100%' }} size={'small'} direction={'vertical'}>
          {label && <label className="controller-label">{label}</label>}
          <DatePicker value={value ? dayjs(value) : undefined} {...fieldProps} onChange={onChange} {...props}></DatePicker>
          <small>{error?.message ? error.message : null}</small>
        </Space>
      }}
    ></Controller>
  );
};
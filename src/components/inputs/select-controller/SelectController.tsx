import { Select, SelectProps, Space } from "antd";
import { FC } from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";

const { Option } = Select;

export type SelectControllerProps = SelectProps & {
  control: Control<any>;
  name: string;
  items: {value: any, label: string}[];
  label?: string;
  setValue: UseFormSetValue<any>
};

export const SelectController: FC<SelectControllerProps> = ({
  control,
  name,
  label,
  setValue,
  items,
  defaultValue,
  ...props
}) => {
  
  const onChange = (value: any) => {
    setValue(name, value)
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...fieldProps }, fieldState: { error } }) => {
        return <Space style={{ width: '100%' }} size={'small'} direction={'vertical'}>
           {label && <label className="controller-label">{label}</label>}
          <Select
            value={value}
            {...fieldProps} onChange={onChange} {...props}>
              {items.map((option) => <Option key={option.value} value={option.value}>{option.label}</Option>)}
          </Select>
          <small>{error?.message ? error.message : null}</small>
        </Space>
      }}
    ></Controller>
  );
};
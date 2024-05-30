import { Controller, type Control } from "react-hook-form";

import { Input, type InputProps } from "./Input";
import { SelectGroup, type SelectGroupProps } from "./SelectGroup";

interface FormInputProps {
  name: string;
  control: Control<any>;
}

export function FormInput({
  name,
  control,
  ...props
}: FormInputProps & Omit<InputProps, "onChangeText" | "error">) {
  return (
    <Controller
      control={control}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => (
        <Input
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          error={error?.message}
          {...props}
        />
      )}
      name={name}
    />
  );
}

export function FormSelectGroup({
  name,
  control,
  ...props
}: FormInputProps & Omit<SelectGroupProps, "onChange" | "value" | "error">) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <SelectGroup
          onChange={onChange}
          value={value}
          error={error?.message}
          {...props}
        />
      )}
      name={name}
    />
  );
}

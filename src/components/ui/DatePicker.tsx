import DateTimePicker, {
  DateTimePickerAndroid,
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { useState } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { FormInput, type FormInputProps } from "./Form";
import { type InputProps } from "./Input";

interface DatePickerProps extends FormInputProps, Omit<InputProps, "onChange"> {
  onChange?: (date: Date) => void;
  mode?: "date" | "time";
}

export function DatePicker({
  onChange: onChangeDate,
  mode = "date",
  ...props
}: DatePickerProps) {
  const [showComponent, setShowComponent] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    props.control._defaultValues.birthDate
  );

  function onChange(
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) {
    setDate(selectedDate!);
    onChangeDate?.(selectedDate!);
    props.control.setError(props.name, {});
  }

  function showDatePicker() {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: date || new Date(),
        onChange,
        mode,
        maximumDate: mode === "time" ? undefined : new Date(),
        minuteInterval: 15,
      });
    } else {
      setShowComponent(true);
    }
  }

  return (
    <View>
      <TouchableOpacity activeOpacity={1} onPress={showDatePicker}>
        <FormInput
          readOnly
          placeholder={
            mode === "time" ? "Selecione um horário" : "Selecione uma data"
          }
          value={
            !date
              ? ""
              : dayjs(date).format(mode === "date" ? "DD/MM/YYYY" : "HH:mm")
          }
          {...props}
        />
      </TouchableOpacity>
      {showComponent ? (
        <DateTimePicker
          value={date || new Date()}
          mode={mode}
          onChange={onChange}
          maximumDate={new Date()}
          minuteInterval={15}
        />
      ) : null}
    </View>
  );
}

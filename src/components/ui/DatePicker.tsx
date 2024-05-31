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
}

export function DatePicker({
  onChange: onChangeDate,
  ...props
}: DatePickerProps) {
  const [showComponent, setShowComponent] = useState(false);
  const [date, setDate] = useState<Date | undefined>();

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
        mode: "date",
        maximumDate: new Date(),
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
          value={dayjs(date).format("DD/MM/YYYY")}
          {...props}
        />
      </TouchableOpacity>
      {showComponent ? (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          onChange={onChange}
          maximumDate={new Date()}
        />
      ) : null}
    </View>
  );
}

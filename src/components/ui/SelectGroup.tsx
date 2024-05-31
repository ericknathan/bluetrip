import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { theme } from "@/styles";
import { ErrorMessage } from "./ErrorMessage";
import { Label } from "./Label";
import { Text } from "./Text";

export interface SelectGroupProps {
  options: { label: string; value: string }[];
  onChange?: (value: string) => void;
  value?: string;
  label?: string;
  error?: string;
}

export function SelectGroup({
  options,
  onChange,
  value,
  label,
  error,
}: SelectGroupProps) {
  const [selectedOption, setSelectedOption] = useState<string>(value || "");

  function handleChange(value: string) {
    setSelectedOption(value);
    onChange?.(value);
  }

  return (
    <View>
      {label ? <Label>{label}</Label> : null}

      <View style={styles.container}>
        {options.map((option) => (
          <TouchableOpacity
            style={[
              styles.option,
              selectedOption === option.value && styles.selectedOption,
            ]}
            key={option.value}
            onPress={() => handleChange(option.value)}
          >
            <Text
              color={
                selectedOption === option.value
                  ? theme.primary[500]
                  : theme.zinc[900]
              }
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ErrorMessage>{error}</ErrorMessage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
  option: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.zinc[200],
    backgroundColor: theme.zinc[100],
  },
  selectedOption: {
    borderColor: theme.primary[500],
  },
});

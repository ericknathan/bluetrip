import { theme } from "@/styles";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "./Text";

interface SelectGroupProps {
  options: { label: string; value: string }[];
}

export function SelectGroup({ options }: SelectGroupProps) {
  const [selectedOption, setSelectedOption] = useState<string>();

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === option.value && styles.selectedOption,
          ]}
          key={option.value}
          onPress={() => setSelectedOption(option.value)}
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

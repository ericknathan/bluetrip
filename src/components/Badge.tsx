import { theme } from "@/styles";
import type { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "./Text";

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <View style={styles.container}>
      <Text size={12} weight="medium" color={theme.primary[500]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: theme.primary.opaque,
    borderRadius: 24,
    backgroundColor: theme.primary[500] + "22",
    paddingHorizontal: 8,
  },
});

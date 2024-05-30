import { theme } from "@/styles";
import type { TextProps } from "react-native";
import { Text } from "./Text";

export function ErrorMessage({ children, ...props }: TextProps) {
  return (
    <Text
      style={{
        color: theme.red[500],
        marginTop: 2,
        fontSize: 12,
        height: 18,
      }}
      {...props}
    >
      {children}
    </Text>
  );
}

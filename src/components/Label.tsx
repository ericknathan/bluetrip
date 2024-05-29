import type { TextProps } from "react-native";
import { Text } from "./Text";

export function Label({ children, style, ...props }: TextProps) {
  return (
    <Text style={[{ paddingBottom: 4 }, style]} size={12} {...props}>
      {children}
    </Text>
  );
}

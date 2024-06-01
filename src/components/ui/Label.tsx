import { Text, TextProps } from "./Text";

export function Label({ children, style, ...props }: TextProps) {
  return (
    <Text style={[{ paddingBottom: 2 }, style]} size={12} {...props}>
      {children}
    </Text>
  );
}

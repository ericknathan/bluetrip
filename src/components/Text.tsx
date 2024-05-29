import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import { fontFamily } from "../styles";

interface TextProps extends NativeTextProps {
  weight?: keyof typeof fontFamily;
  size?: number;
}

export function Text({
  children,
  weight = "regular",
  size = 14,
  style,
  ...props
}: TextProps) {
  return (
    <NativeText
      style={[
        {
          fontFamily: fontFamily[weight],
          fontSize: size,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </NativeText>
  );
}

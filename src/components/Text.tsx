import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import { fontFamily, theme } from "../styles";

interface TextProps extends NativeTextProps {
  weight?: keyof typeof fontFamily;
  size?: number;
  align?: "left" | "center" | "right";
  color?: string;
}

export function Text({
  children,
  weight = "regular",
  size = 14,
  align = "left",
  color = theme.zinc[900],
  style,
  ...props
}: TextProps) {
  return (
    <NativeText
      style={[
        {
          fontFamily: fontFamily[weight],
          fontSize: size,
          textAlign: align,
          color,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </NativeText>
  );
}

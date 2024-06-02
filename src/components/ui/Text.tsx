import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import { fontFamily, theme } from "@/styles";

export interface TextProps extends NativeTextProps {
  weight?: keyof typeof fontFamily;
  size?: number;
  align?: "left" | "center" | "right";
  color?: string;
  lineHeight?: number;
}

export function Text({
  children,
  weight = "regular",
  size = 14,
  align = "left",
  color = theme.zinc[900],
  lineHeight,
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
          lineHeight,
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

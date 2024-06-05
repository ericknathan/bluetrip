import { fontFamily, theme } from "@/styles";
import Toast from "react-native-toast-message";

export const toast = Toast.show;

export const baseToastStyles = {
  contentContainerStyle: { backgroundColor: theme.zinc[100] },
  text1Style: { color: theme.zinc[900], fontFamily: fontFamily.semibold },
  text2Style: { color: theme.zinc[800], fontFamily: fontFamily.regular },
};

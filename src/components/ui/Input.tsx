import { Eye, EyeClosed } from "phosphor-react-native";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import MaskInput, { MaskInputProps } from "react-native-mask-input";

import { fontFamily, theme } from "@/styles";
import { ErrorMessage } from "./ErrorMessage";
import { Label } from "./Label";

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  hideErrorMessage?: boolean;
  mask?: MaskInputProps["mask"];
}

export function Input({
  label,
  error,
  secureTextEntry,
  hideErrorMessage = false,
  ...props
}: InputProps) {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  const SecureIcon = isSecure ? EyeClosed : Eye;
  const InputComp = props.mask ? MaskInput : TextInput;

  function toggleSecure() {
    setIsSecure(!isSecure);
  }

  return (
    <View style={{ flex: 1 }}>
      {label ? <Label>{label}</Label> : null}
      <View style={styles.container}>
        <InputComp
          style={styles.input}
          placeholderTextColor={theme.zinc[400]}
          secureTextEntry={isSecure}
          selectionColor={theme.primary.opaque}
          selectionHandleColor={theme.primary[500]}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.visibilityButton}
            onPress={toggleSecure}
          >
            <SecureIcon size={20} color={theme.zinc[400]} />
          </TouchableOpacity>
        )}
        {!hideErrorMessage ? <ErrorMessage>{error}</ErrorMessage> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  input: {
    height: 48,
    width: "100%",

    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,

    backgroundColor: theme.zinc[100],
    borderColor: theme.zinc[200],
    color: theme.zinc[800],

    fontFamily: fontFamily.regular,
  },
  visibilityButton: {
    position: "absolute",
    right: 0,
    top: 0,

    alignItems: "center",
    justifyContent: "center",

    width: 48,
    height: 48,
  },
});

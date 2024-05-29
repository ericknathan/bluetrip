import { Eye, EyeClosed } from "phosphor-react-native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import { fontFamily, theme } from "@/styles";

interface InputProps extends TextInputProps {
  error?: string;
}

export function Input({ error, secureTextEntry, ...props }: InputProps) {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  const SecureIcon = isSecure ? EyeClosed : Eye;

  function toggleSecure() {
    setIsSecure(!isSecure);
  }

  return (
    <View style={styles.container}>
      <TextInput
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
      {error && <Text style={styles.error}>{error}</Text>}
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
  error: {
    color: theme.red[500],
    marginTop: 2,
    fontSize: 12,
  },
});

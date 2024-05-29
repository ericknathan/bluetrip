import { StyleSheet, Text, View } from "react-native";

export function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

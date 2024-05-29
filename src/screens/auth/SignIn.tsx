import { StyleSheet, Text, View } from "react-native";

export function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
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

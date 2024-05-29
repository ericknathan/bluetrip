import { StyleSheet, View } from "react-native";

import { Header, Text } from "@/components";

export function RecoverPasswordScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View style={styles.container}>
        <Text>RecoverPassword</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
});

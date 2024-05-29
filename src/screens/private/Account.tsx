import { StyleSheet, View } from "react-native";

import { Header, Text } from "@/components";

export function AccountScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Minha conta" />

      <View style={styles.container}>
        <Text>Account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

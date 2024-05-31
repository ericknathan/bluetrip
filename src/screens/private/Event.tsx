import { StyleSheet, View } from "react-native";

import { Header } from "@/components/app";
import { Text } from "@/components/ui";

export function EventScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header showBackButton />

      <View style={styles.container}>
        <Text>Event</Text>
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

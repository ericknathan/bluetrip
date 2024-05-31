import { StyleSheet, View } from "react-native";

import { Header } from "@/components/app";
import { Text } from "@/components/ui";

export function EventsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Eventos" />

      <View style={styles.container}>
        <Text>Events</Text>
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

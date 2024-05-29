import { Text } from "@/components/Text";
import { StyleSheet, View } from "react-native";

export function EventsScreen() {
  return (
    <View style={styles.container}>
      <Text>Events</Text>
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

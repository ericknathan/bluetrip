import { Text } from "@/components/Text";
import { StyleSheet, View } from "react-native";

export function EventScreen() {
  return (
    <View style={styles.container}>
      <Text>Event</Text>
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

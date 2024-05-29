import { Text } from "@/components/Text";
import { StyleSheet, View } from "react-native";

export function ReservationScreen() {
  return (
    <View style={styles.container}>
      <Text>Reservation</Text>
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

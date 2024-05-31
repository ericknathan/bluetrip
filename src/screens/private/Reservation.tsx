import { StyleSheet, View } from "react-native";

import { Header } from "@/components/app";
import { Text } from "@/components/ui";

export function ReservationScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header showBackButton />

      <View style={styles.container}>
        <Text>Reservation</Text>
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

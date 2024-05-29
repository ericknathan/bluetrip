import { StyleSheet, View } from "react-native";

import { Header, Text } from "@/components";

export function TouristSpotsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Pontos turísticos" />

      <View style={styles.container}>
        <Text>TouristSpots</Text>
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

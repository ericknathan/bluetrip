import { StyleSheet, Text, View } from "react-native";

export function TouristSpotsScreen() {
  return (
    <View style={styles.container}>
      <Text>TouristSpots</Text>
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

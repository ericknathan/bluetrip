import { StyleSheet, Text, View } from "react-native";

export function TouristSpotScreen() {
  return (
    <View style={styles.container}>
      <Text>TouristSpot</Text>
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

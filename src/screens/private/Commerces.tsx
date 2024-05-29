import { StyleSheet, Text, View } from "react-native";

export function CommercesScreen() {
  return (
    <View style={styles.container}>
      <Text>Commerces</Text>
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

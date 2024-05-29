import { StyleSheet, Text, View } from "react-native";

export function CommerceScreen() {
  return (
    <View style={styles.container}>
      <Text>Commerce</Text>
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

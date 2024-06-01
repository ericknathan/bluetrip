import { Button, Text } from "@/components/ui";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";

export function ReservationSuccessScreen({
  navigation,
}: ScreenProps<"ReservationSuccess">) {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/opaque-logo.png")}
        style={styles.backgroundDetail}
        resizeMode="contain"
      />
      <View />
      <View style={styles.content}>
        <Image source={require("@/assets/done.png")} style={styles.image} />
        <Text size={32} weight="semibold" color={theme.white}>
          Reserva efetuada!
        </Text>
        <Text size={16} color={theme.zinc[200]} align="center">
          Agora você pode aproveitar o seu passeio no dia escolhido.
        </Text>
      </View>
      <Button
        variant="secondary"
        style={{ width: 80 }}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "App" }],
          })
        }
      >
        OK
      </Button>
      <StatusBar backgroundColor={theme.primary[500]} translucent={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 80,
    position: "relative",

    backgroundColor: theme.primary[500],
  },
  backgroundDetail: {
    position: "absolute",
    width: "150%",
    maxHeight: 700,
    top: "-65%",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 56,
    gap: 16,
    marginTop: 56,
  },
  image: {
    height: 80,
    width: 80,
    marginBottom: 24,
  },
});

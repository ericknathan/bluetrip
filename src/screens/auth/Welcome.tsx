import { Image, StyleSheet, View } from "react-native";

import { Header } from "@/components/app";
import { Button, Text } from "@/components/ui";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";

export function WelcomeScreen({ navigation }: ScreenProps<"SignIn">) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <Image source={require("@/assets/welcome.png")} style={styles.image} />
        <Text
          weight="semibold"
          size={32}
          align="center"
          style={{ paddingHorizontal: 32 }}
        >
          Olá, boas vindas ao{" "}
          <Text color={theme.primary[500]} size={32} weight="semibold">
            Bluetrip
          </Text>
          !
        </Text>
        <Text size={18} align="center" color={theme.zinc[600]}>
          Lorem ipsum dolor sit amet consectetur. Mi urna cras amet consequat
          odio venenatis ipsum.
        </Text>
        <Button
          style={{ width: "100%" }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Fazer login
        </Button>
        <Button
          style={{ width: "100%" }}
          variant="secondary"
          onPress={() => navigation.navigate("SignUp")}
        >
          Criar nova conta
        </Button>
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
    gap: 12,
  },
  image: {
    width: "100%",
    height: 300,
  },
});

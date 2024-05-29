import { Image, ScrollView, StyleSheet, View } from "react-native";

import { Button, Header, Input, Text } from "@/components";
import type { ScreenProps } from "@/navigation";

export function RecoverPasswordScreen({
  navigation,
}: ScreenProps<"RecoverPassword">) {
  function handleRecoverPassword() {
    navigation.navigate("SignIn");
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header showBackButton />

      <View style={styles.container}>
        <Image
          source={require("@/assets/auth.png")}
          style={{ width: "100%", height: 200 }}
          resizeMode="contain"
        />
        <Text weight="semibold" size={32}>
          Recupere sua conta
        </Text>
        <Input
          label="E-mail"
          placeholder="alan.turing@email.com"
          keyboardType="email-address"
          autoComplete="email"
          autoFocus
        />
        <Button onPress={handleRecoverPassword}>
          Enviar e-mail de recuperação
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 8,
  },
});

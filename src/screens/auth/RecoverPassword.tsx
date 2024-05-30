import { Image, ScrollView, StyleSheet, View } from "react-native";

import { Button, FormInput, Header, Text } from "@/components";
import type { ScreenProps } from "@/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  recoverPasswordSchema,
  type RecoverPasswordSchema,
} from "./validators";

export function RecoverPasswordScreen({
  navigation,
}: ScreenProps<"RecoverPassword">) {
  const { control, handleSubmit } = useForm<RecoverPasswordSchema>({
    resolver: zodResolver(recoverPasswordSchema),
  });

  function onRecoverPassword(data: RecoverPasswordSchema) {
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
        <FormInput
          name="email"
          control={control}
          label="E-mail"
          placeholder="alan.turing@email.com"
          keyboardType="email-address"
          autoComplete="email"
          autoFocus
        />
        <Button onPress={handleSubmit(onRecoverPassword)}>
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

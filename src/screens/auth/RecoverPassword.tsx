import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Image, ScrollView, StyleSheet, View } from "react-native";

import { Header } from "@/components/app";
import { Button, FormInput, Text } from "@/components/ui";
import type { ScreenProps } from "@/navigation";
import {
  recoverPasswordSchema,
  type RecoverPasswordSchema,
} from "./validators";

export function RecoverPasswordScreen({
  route,
  navigation,
}: ScreenProps<"RecoverPassword">) {
  const { control, handleSubmit } = useForm<RecoverPasswordSchema>({
    resolver: zodResolver(recoverPasswordSchema),
    defaultValues: {
      email: route.params?.email ?? "",
    },
  });

  function onRecoverPassword(data: RecoverPasswordSchema) {
    navigation.reset({
      index: 0,
      routes: [{ name: "Welcome" }, { name: "SignIn", params: data }],
    });
  }

  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="always">
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
          autoCapitalize="none"
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

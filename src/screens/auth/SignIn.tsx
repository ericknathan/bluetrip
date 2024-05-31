import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { Header } from "@/components/app";
import { Button, FormInput, Text } from "@/components/ui";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";
import { SignInSchema, signInSchema } from "./validators";

export function SignInScreen({ route, navigation }: ScreenProps<"SignIn">) {
  const { handleSubmit, control, getValues } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: route.params?.email ?? "",
    },
  });

  function onSignIn(data: SignInSchema) {
    // TODO: send request to backend
    navigation.reset({
      index: 0,
      routes: [{ name: "App" }],
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
          Entre em sua conta
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
        <FormInput
          name="password"
          control={control}
          label="Senha"
          placeholder="••••••••"
          secureTextEntry
          autoCapitalize="none"
          autoComplete="current-password"
        />
        <TouchableOpacity
          style={{ paddingVertical: 12 }}
          onPress={() =>
            navigation.navigate("RecoverPassword", {
              email: getValues("email"),
            })
          }
        >
          <Text
            color={theme.primary[500]}
            style={{ textDecorationLine: "underline" }}
          >
            Esqueci a senha
          </Text>
        </TouchableOpacity>
        <Button onPress={handleSubmit(onSignIn)}>Fazer login</Button>
        <Button
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "Welcome" }, { name: "SignUp" }],
            })
          }
          variant="secondary"
          style={{ marginTop: 8 }}
        >
          Criar nova conta
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

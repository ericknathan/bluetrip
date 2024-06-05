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
import { toast } from "@/helpers";
import { signInSchema, type SignInSchema } from "@/helpers/validators";
import { useAuth } from "@/hooks";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";

export function SignInScreen({ route, navigation }: ScreenProps<"SignIn">) {
  const { signIn } = useAuth();

  const {
    handleSubmit,
    control,
    getValues,
    formState: { isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: route.params?.email ?? "",
    },
  });

  async function onSignIn(data: SignInSchema) {
    try {
      await signIn(data);

      navigation.reset({
        index: 0,
        routes: [{ name: "App" }],
      });
    } catch (error) {
      toast({
        type: "error",
        text1: error.message,
      });
    }
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
        <Button onPress={handleSubmit(onSignIn)} isLoading={isSubmitting}>
          Fazer login
        </Button>
        <Button
          disabled={isSubmitting}
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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Image, ScrollView, StyleSheet, View } from "react-native";

import {
  Button,
  FormInput,
  FormSelectGroup,
  Header,
  Label,
  Text,
} from "@/components";
import { CountrySelector } from "@/components/CountrySelector";
import type { ScreenProps } from "@/navigation";
import { signUpSchema, type SignUpSchema } from "./validators";
import { DatePicker } from "@/components/DatePicker";

export function SignUpScreen({ navigation }: ScreenProps<"SignUp">) {
  const { control, handleSubmit, setValue } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  function onSignUp() {
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
          Cadastre sua conta
        </Text>
        <FormInput
          name="name"
          control={control}
          label="Nome completo"
          placeholder="Alan turing Oliveira"
          autoComplete="name"
          autoFocus
        />
        <View style={{ marginBottom: 14 }}>
          <Label>Nacionalidade</Label>
          <CountrySelector
            onSelect={(nationality) =>
              setValue("nationality", nationality.name.toString())
            }
          />
        </View>
        <FormInput
          name="phone"
          control={control}
          label="Telefone"
          placeholder="(••) ••••• ••••"
          autoComplete="tel"
        />
        <DatePicker
          name="birthDate"
          control={control}
          label="Data de nascimento"
          placeholder="__/__/____"
          onChange={(date) => setValue("birthDate", date)}
        />
        <FormSelectGroup
          name="gender"
          control={control}
          label="Gênero"
          options={[
            { label: "Masculino", value: "m" },
            { label: "Feminino", value: "f" },
          ]}
        />
        <FormSelectGroup
          name="language"
          control={control}
          label="Idioma"
          options={[
            { label: "Português", value: "pt" },
            { label: "Inglês", value: "en" },
            { label: "Espanhol", value: "es" },
          ]}
        />
        <FormInput
          name="email"
          control={control}
          label="E-mail"
          placeholder="alan.turing@email.com"
          keyboardType="email-address"
          autoComplete="email"
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
        <Button onPress={handleSubmit(onSignUp)} style={{ marginTop: 12 }}>
          Criar conta
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

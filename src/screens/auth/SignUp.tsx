import { Image, ScrollView, StyleSheet, View } from "react-native";

import { Button, Header, Input, Label, SelectGroup, Text } from "@/components";
import { CountrySelector } from "@/components/CountrySelector";
import type { ScreenProps } from "@/navigation";

export function SignUpScreen({ navigation }: ScreenProps<"SignUp">) {
  function handleSignUp() {
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
        <Input
          label="Nome completo"
          placeholder="Alan turing Oliveira"
          autoComplete="name"
          autoFocus
        />
        <View>
          <Label>Nacionalidade</Label>
          <CountrySelector />
        </View>
        <Input
          label="Telefone"
          placeholder="(••) ••••• ••••"
          autoComplete="tel"
        />
        <Input
          label="Data de nascimento"
          placeholder="__/__/____"
          autoComplete="birthdate-day"
        />
        <View>
          <Label>Gênero</Label>
          <SelectGroup
            options={[
              { label: "Masculino", value: "m" },
              { label: "Feminino", value: "f" },
            ]}
          />
        </View>
        <View>
          <Label>Idioma</Label>
          <SelectGroup
            options={[
              { label: "Português", value: "pt" },
              { label: "Inglês", value: "en" },
              { label: "Espanhol", value: "es" },
            ]}
          />
        </View>
        <Input
          label="E-mail"
          placeholder="alan.turing@email.com"
          keyboardType="email-address"
          autoComplete="email"
        />

        <Input
          label="Senha"
          placeholder="••••••••"
          secureTextEntry
          autoCapitalize="none"
          autoComplete="current-password"
        />
        <Button onPress={handleSignUp} style={{ marginTop: 12 }}>
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
    gap: 8,
  },
});

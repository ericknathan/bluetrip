import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { Button, Header, Input, Text } from "@/components";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";

export function SignInScreen({ navigation }: ScreenProps<"SignIn">) {
  function handleSignIn() {
    navigation.navigate("TouristSpots");
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
          Entre em sua conta
        </Text>
        <Input
          label="E-mail"
          placeholder="alan.turing@email.com"
          keyboardType="email-address"
          autoComplete="email"
          autoFocus
        />
        <Input
          label="Senha"
          placeholder="••••••••"
          secureTextEntry
          autoCapitalize="none"
          autoComplete="current-password"
        />
        <TouchableOpacity
          style={{ paddingVertical: 12 }}
          onPress={() => navigation.navigate("RecoverPassword")}
        >
          <Text
            color={theme.primary[500]}
            style={{ textDecorationLine: "underline" }}
          >
            Esqueci a senha
          </Text>
        </TouchableOpacity>
        <Button onPress={handleSignIn}>Fazer login</Button>
        <Button
          onPress={() => navigation.navigate("SignUp")}
          variant="secondary"
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
    gap: 8,
  },
});

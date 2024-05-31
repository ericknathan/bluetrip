import { Image, ScrollView, StyleSheet, View } from "react-native";

import { Header } from "@/components/app";
import { UserForm } from "@/components/app/UserForm";
import { Text } from "@/components/ui";
import { type UserDataSchema } from "@/helpers/validators";
import type { ScreenProps } from "@/navigation";

export function SignUpScreen({ navigation }: ScreenProps<"SignUp">) {
  function onSignUp(data: UserDataSchema) {
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
          Cadastre sua conta
        </Text>
        <UserForm onSubmit={onSignUp} buttonLabel="Criar conta" />
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

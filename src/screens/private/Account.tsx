import { ScrollView, StyleSheet, View } from "react-native";

import { Header } from "@/components/app";
import { UserForm } from "@/components/app/UserForm";
import { useAuth } from "@/hooks";
import { Button } from "@/components/ui";

export function AccountScreen() {
  const { user, signOut } = useAuth();

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header title="Minha conta" />

      <View style={styles.container}>
        <UserForm
          buttonLabel="Atualizar dados"
          onSubmit={console.log}
          showPassword={false}
          defaultValues={{
            ...user!,
            birthDate: new Date(user!.birthDate),
          }}
        />
        <Button variant="secondary" onPress={() => signOut()}>
          Fazer logout
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    gap: 8
  },
});

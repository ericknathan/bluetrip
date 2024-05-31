import { ScrollView, StyleSheet, View } from "react-native";

import { Header } from "@/components/app";
import { UserForm } from "@/components/app/UserForm";

export function AccountScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header title="Minha conta" />

      <View style={styles.container}>
        <UserForm
          buttonLabel="Atualizar dados"
          onSubmit={console.log}
          showPassword={false}
          defaultValues={{
            name: "Erick Nathan",
            email: "erick.capito@hotmail.com",
            birthDate: new Date("2005-08-14"),
            gender: "m",
            language: "pt",
            nationality: "Brazil",
            phone: "(11) 96119-7019",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

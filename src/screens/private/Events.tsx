import { ScrollView, StyleSheet, View } from "react-native";

import { DataSection, EventCard, Header, SearchBar } from "@/components/app";
import { generateEvent } from "@/mocks";

export function EventsScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header title="Eventos" />

      <SearchBar placeholder="Busque pelo nome do evento" />

      <View style={styles.container}>
        <DataSection
          title="Próximos eventos"
          data={Array.from({ length: 10 }, generateEvent)}
          renderItem={({ item }) => <EventCard data={item} />}
        />
        <DataSection
          title="Sugestões para você"
          data={Array.from({ length: 10 }, generateEvent)}
          renderItem={({ item }) => <EventCard data={item} />}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingVertical: 24,
  },
});

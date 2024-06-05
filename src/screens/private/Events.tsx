import { ScrollView, StyleSheet, View } from "react-native";

import { DataSection, EventCard, Header, SearchBar } from "@/components/app";
import { Skeleton } from "@/components/ui";
import { getEventsListRequest } from "@/helpers/requests";
import type { EventModel } from "@/models";
import { useEffect, useState } from "react";

export function EventsScreen() {
  const [events, setEvents] = useState<{
    next: EventModel[];
    suggestions: EventModel[];
  }>();

  useEffect(() => {
    async function getEventsList() {
      try {
        const [{ data: next }, { data: suggestions }] = await Promise.all([
          getEventsListRequest("next"),
          getEventsListRequest("suggestions"),
        ]);

        setEvents({
          next: next.data,
          suggestions: suggestions.data,
        });
      } catch (error) {
        console.log(error);
      }
    }

    getEventsList();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header title="Eventos" />

      <SearchBar placeholder="Busque pelo nome do evento" />

      <View style={styles.container}>
        <DataSection
          title="Próximos eventos"
          data={events?.next}
          renderItem={({ item }) => <EventCard data={item} />}
          ListEmptyComponent={EmptySkeleton}
        />
        <DataSection
          title="Sugestões para você"
          data={events?.suggestions}
          renderItem={({ item }) => <EventCard data={item} />}
          ListEmptyComponent={EmptySkeleton}
        />
      </View>
    </ScrollView>
  );
}

function EmptySkeleton() {
  return (
    <View style={{ flexDirection: "row", gap: 20 }}>
      <Skeleton width={260} height={370} />
      <Skeleton width={260} height={370} />
      <Skeleton width={260} height={370} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingVertical: 24,
  },
});

import { ScrollView, StyleSheet, View } from "react-native";

import {
  DataSection,
  Header,
  SearchBar,
  TouristicSpotCard,
} from "@/components/app";

import { Skeleton } from "@/components/ui";
import { toast } from "@/helpers";
import { getTouristicSpotsListRequest } from "@/helpers/requests";
import type { TouristicSpotModel } from "@/models";
import { useEffect, useState } from "react";

export function TouristSpotsScreen() {
  const [touristicSpots, setTouristicSpots] = useState<{
    near: TouristicSpotModel[];
    popular: TouristicSpotModel[];
    recommended: TouristicSpotModel[];
  }>();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function getTouristicSpotsList() {
      try {
        const [{ data: near }, { data: popular }, { data: recommended }] =
          await Promise.all([
            getTouristicSpotsListRequest("near"),
            getTouristicSpotsListRequest("popular"),
            getTouristicSpotsListRequest("recommended"),
          ]);

        setTouristicSpots({
          near: near.data,
          popular: popular.data,
          recommended: recommended.data,
        });
      } catch (error) {
        toast({
          type: "error",
          text1: error.message,
        });
      }
    }

    getTouristicSpotsList();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Header title="Pontos turísticos" />

      <SearchBar
        placeholder="Busque pelo nome do ponto turístico"
        onSearch={setSearchQuery}
      />

      <View style={styles.container}>
        <DataSection
          title="Perto de você"
          data={touristicSpots?.near.filter((touristicSpot) =>
            touristicSpot.name.toLowerCase().includes(searchQuery.toLowerCase())
          )}
          renderItem={({ item }) => <TouristicSpotCard data={item} />}
          ListEmptyComponent={EmptySkeleton}
        />
        <DataSection
          title="Mais populares"
          data={touristicSpots?.popular.filter((touristicSpot) =>
            touristicSpot.name.toLowerCase().includes(searchQuery.toLowerCase())
          )}
          renderItem={({ item }) => <TouristicSpotCard data={item} />}
          ListEmptyComponent={EmptySkeleton}
        />
        <DataSection
          title="Recomendados para você"
          data={touristicSpots?.recommended.filter((touristicSpot) =>
            touristicSpot.name.toLowerCase().includes(searchQuery.toLowerCase())
          )}
          renderItem={({ item }) => <TouristicSpotCard data={item} />}
          ListEmptyComponent={EmptySkeleton}
        />
      </View>
    </ScrollView>
  );
}

function EmptySkeleton() {
  return (
    <View style={{ flexDirection: "row", gap: 20 }}>
      <Skeleton width={280} height={230} />
      <Skeleton width={280} height={230} />
      <Skeleton width={280} height={230} />
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

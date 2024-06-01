import { ScrollView, StyleSheet, View } from "react-native";

import {
  DataSection,
  Header,
  SearchBar,
  TouristicSpotCard,
} from "@/components/app";

import { generateTouristicSpot } from "@/mocks";

export function TouristSpotsScreen() {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Header title="Pontos turísticos" />

      <SearchBar placeholder="Busque pelo nome do ponto turístico" />

      <View style={styles.container}>
        <DataSection
          title="Perto de você"
          data={Array.from({ length: 10 }, generateTouristicSpot)}
          renderItem={({ item }) => <TouristicSpotCard data={item} />}
        />
        <DataSection
          title="Mais populares"
          data={Array.from({ length: 10 }, generateTouristicSpot)}
          renderItem={({ item }) => <TouristicSpotCard data={item} />}
        />
        <DataSection
          title="Recomendados para você"
          data={Array.from({ length: 10 }, generateTouristicSpot)}
          renderItem={({ item }) => <TouristicSpotCard data={item} />}
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

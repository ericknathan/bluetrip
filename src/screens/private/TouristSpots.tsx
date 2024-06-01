import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import { Header, SearchBar, TouristicSpotCard } from "@/components/app";
import { Text } from "@/components/ui";
import type { TouristicSpotModel } from "@/models";

import { touristicSpotMock } from "@/mocks/touristic-spot.mock";

function TouristicSpotSection({
  title,
  data,
}: {
  title: string;
  data: TouristicSpotModel[];
}) {
  return (
    <View>
      <Text
        weight="semibold"
        size={18}
        style={{ marginLeft: 20, marginBottom: 4 }}
      >
        {title}
      </Text>
      <FlatList
        data={data}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item }) => <TouristicSpotCard data={item} />}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export function TouristSpotsScreen() {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Header title="Pontos turísticos" />

      <SearchBar placeholder="Busque pelo nome do ponto turístico" />

      <View style={styles.container}>
        <TouristicSpotSection title="Perto de você" data={touristicSpotMock} />
        <TouristicSpotSection title="Mais populares" data={touristicSpotMock} />
        <TouristicSpotSection
          title="Recomendados para você"
          data={touristicSpotMock}
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

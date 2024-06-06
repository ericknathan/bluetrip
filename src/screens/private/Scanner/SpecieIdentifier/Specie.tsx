import { Header } from "@/components/app";
import { Badge, Text } from "@/components/ui";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";
import {
  FishSimple,
  FrameCorners,
  GlobeHemisphereEast,
  Thermometer,
} from "phosphor-react-native";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { specieMap } from "./specieMap";

export function SpecieScreen({ route }: ScreenProps<"Specie">) {
  const { name, image, score, type } = route.params;
  const { description, from, size, temperature } =
    specieMap[name as keyof typeof specieMap];

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header showBackButton />
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text weight="semibold" size={24}>
            {name}
          </Text>
          <Badge>{score}%</Badge>
        </View>
        <View style={[styles.section, { borderBottomWidth: 1 }]}>
          <Text size={18} color={theme.zinc[700]} weight="semibold">
            Descrição
          </Text>
          <Text color={theme.zinc[500]}>{description}</Text>
        </View>
        <View style={styles.section}>
          <Text size={18} color={theme.zinc[700]} weight="semibold">
            Informações
          </Text>
          <View style={styles.detailsGrid}>
            <View style={styles.detailCard}>
              <Text size={10} color={theme.zinc[500]}>
                CATEGORIA
              </Text>
              <FishSimple />
              <Text align="center">{type}</Text>
            </View>
            <View style={styles.detailCard}>
              <Text size={10} color={theme.zinc[500]}>
                TAMANHO
              </Text>
              <FrameCorners />
              <Text align="center">Até {size}</Text>
            </View>
            <View style={styles.detailCard}>
              <Text size={10} color={theme.zinc[500]}>
                TEMPERATURA
              </Text>
              <Thermometer />
              <Text align="center">{temperature}</Text>
            </View>
            <View style={styles.detailCard}>
              <Text size={10} color={theme.zinc[500]}>
                ORIGEM
              </Text>
              <GlobeHemisphereEast />
              <Text align="center">{from}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  section: {
    paddingVertical: 12,
    borderColor: theme.zinc[200],
    gap: 4,
  },
  detailsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 4,
  },
  detailCard: {
    backgroundColor: theme.zinc[100],
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    paddingVertical: 8,
    minWidth: "30%",
    flex: 1,
  },
});

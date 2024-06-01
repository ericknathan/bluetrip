import { Image, ScrollView, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { AverageStars, Header } from "@/components/app";
import { Badge, Button, Text } from "@/components/ui";
import type { TouristicSpotModel } from "@/models";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";

export function TouristSpotScreen({
  route,
  navigation,
}: ScreenProps<"TouristSpot">) {
  const data = route.params as TouristicSpotModel;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Header showBackButton />

        <View style={styles.container}>
          <Image source={{ uri: data.imageUrl }} style={styles.image} />
          <View style={styles.section}>
            <View style={styles.row}>
              <Text
                size={24}
                color={theme.zinc[700]}
                weight="semibold"
                style={{ flex: 1 }}
              >
                {data.name}
              </Text>
              <Text size={18} color={theme.zinc[500]}>
                R$ 100,00 / Noite
              </Text>
            </View>
            <View style={styles.row}>
              <AverageStars rate={data.averageRate} />
              <Badge>{data.category}</Badge>
            </View>
          </View>
          <View style={styles.section}>
            <Text size={20} color={theme.zinc[700]} weight="semibold">
              Descrição
            </Text>
            <Text color={theme.zinc[500]}>{data.description}</Text>
          </View>
          <View style={styles.section}>
            <Text size={20} color={theme.zinc[700]} weight="semibold">
              Localização
            </Text>
            <Text color={theme.zinc[500]}>
              {data.address.street}, {data.address.number},{" "}
              {data.address.neighborhood}, {data.address.city} -{" "}
              {data.address.state} | {data.address.zipCode}
            </Text>
            <View style={styles.map}>
              <MapView
                style={{ flex: 1 }}
                initialRegion={{
                  latitude: -23.59350410594463,
                  longitude: -46.61410199919542,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
              >
                <Marker
                  identifier="origin"
                  coordinate={{
                    latitude: -23.59350410594463,
                    longitude: -46.61410199919542,
                  }}
                >
                  <Image
                    source={require("@/assets/map-pin.png")}
                    style={{ width: 48, height: 48 }}
                    resizeMode="contain"
                  />
                </Marker>
              </MapView>
            </View>
          </View>
          <View style={styles.section}>
            <Text size={20} color={theme.zinc[700]} weight="semibold">
              Próximos eventos
            </Text>
            <Text>TODO: Colocar card dos eventos aqui</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Reservation")}
        >
          Escolher data da reserva
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
  },
  section: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: theme.zinc[200],
    gap: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  map: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.zinc[200],
  },
  buttonContainer: {
    backgroundColor: theme.zinc[100],
    width: "100%",
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: theme.zinc[200],
  },
  button: {
    marginVertical: 12,
  },
});

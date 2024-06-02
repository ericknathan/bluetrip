import { Image, ScrollView, StyleSheet, View } from "react-native";

import { Header, TouristicSpotCard } from "@/components/app";
import { Button, Text } from "@/components/ui";
import type { EventModel } from "@/models";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";
import dayjs from "dayjs";
import { Calendar, MapPin } from "phosphor-react-native";
import { parseCurrency } from "@/helpers/parsers";

export function EventScreen({ route, navigation }: ScreenProps<"Event">) {
  const data = route.params as EventModel;
  const address = data.touristicSpot!.address;
  const startDate = dayjs(data.startDate);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header showBackButton />

      <View style={styles.container}>
        <Image source={{ uri: data.imageUrl }} style={styles.image} />
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
            {parseCurrency(data.price)} / Sessão
          </Text>
        </View>
        <View style={styles.addressContainer}>
          <MapPin color={theme.zinc[600]} />
          <Text color={theme.zinc[600]} style={{ flex: 1 }}>
            {address.street}, {address.number}, {address.neighborhood},{" "}
            {address.city} - {address.state}
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <View style={styles.day}>
            <Text size={20} align="center" weight="semibold">
              {startDate.format("DD")}
            </Text>
            <Text size={12} align="center" lineHeight={14}>
              {startDate.format("MMM").toUpperCase()}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text weight="semibold">{startDate.format("dddd")}</Text>
            <Text color={theme.zinc[500]}>
              Início {startDate.format("HH:mm")} - Fim{" "}
              {dayjs(data.endDate).format("HH:mm")}
            </Text>
          </View>
          <Button onPress={() => navigation.navigate("Reservation")}>
            <Calendar color={theme.white} />
          </Button>
        </View>
        <View style={styles.section}>
          <Text size={18} color={theme.zinc[700]} weight="semibold">
            Descrição
          </Text>
          <Text color={theme.zinc[500]}>{data.description}</Text>
        </View>
        <View style={styles.section}>
          <Text size={18} color={theme.zinc[700]} weight="semibold">
            Ponto turístico
          </Text>
          <TouristicSpotCard data={data.touristicSpot!} full />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 8,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  section: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: theme.zinc[200],
    gap: 4,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  day: {
    backgroundColor: theme.zinc[100],
    borderWidth: 1,
    borderColor: theme.zinc[200],
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
});

import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { CalendarBlank, MapPin } from "phosphor-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import type { EventModel } from "@/models";
import { theme } from "@/styles";
import { Badge, Button, Text } from "../ui";

interface EventCardProps {
  data: EventModel;
}

export function EventCard({ data }: EventCardProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Event", data)}
    >
      <View style={styles.date}>
        <Text color={theme.white} align="center" weight="semibold" size={20}>
          {dayjs(data.startDate).format("DD")}
        </Text>
        <Text color={theme.white} align="center" size={12}>
          {dayjs(data.startDate).format("MMMM").toUpperCase()}
        </Text>
      </View>
      <View style={styles.content}>
        <Badge style={styles.badge}>{data.touristicSpot?.name.slice(0, 23)}</Badge>
        <Text size={18} weight="semibold">
          {data.name}
        </Text>
        <View style={{ marginBottom: 4 }}>
          <View style={styles.detail}>
            <CalendarBlank
              size={12}
              weight="fill"
              color={theme.primary[500]}
              style={{ marginTop: 4 }}
            />
            <Text size={14} color={theme.zinc[600]}>
              {dayjs(data.startDate)
                .format("dddd, DD [de] MMMM, HH:mm")
                .replace("-feira", "")}
              - {dayjs(data.endDate).format("HH:mm")}
            </Text>
          </View>
          <View style={styles.detail}>
            <MapPin
              size={12}
              weight="fill"
              color={theme.primary[500]}
              style={{ marginTop: 4 }}
            />
            <Text size={14} color={theme.zinc[600]}>
              {data.touristicSpot?.address.street},{" "}
              {data.touristicSpot?.address.number},{" "}
              {data.touristicSpot?.address.city} -{" "}
              {data.touristicSpot?.address.state}
            </Text>
          </View>
        </View>
        <Button disabled style={styles.button}>
          Ingressos
        </Button>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "auto",
  },
  date: {
    position: "absolute",
    top: 0,
    left: 16,

    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,

    backgroundColor: theme.primary[500],
    zIndex: 10,
  },
  badge: { marginLeft: "auto", marginBottom: 12 },
  content: {
    padding: 16,
    borderRadius: 8,
    marginTop: 28,

    backgroundColor: theme.zinc[100],
    width: 260,
    flex: 1,
  },
  detail: {
    gap: 4,
    flexDirection: "row",
    maxWidth: 220,
    marginBottom: 4,
  },
  button: { opacity: 1, marginTop: "auto" },
});

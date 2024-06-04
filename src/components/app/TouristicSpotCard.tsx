import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { Badge, Text } from "@/components/ui";
import { parseCurrency } from "@/helpers/parsers";
import type { TouristicSpotModel } from "@/models";
import { theme } from "@/styles";
import { useNavigation } from "@react-navigation/native";
import { AverageStars } from "./AverageStars";

interface TouristicSpotCardProps {
  data: TouristicSpotModel;
  full?: boolean;
}

export function TouristicSpotCard({
  data,
  full = false,
}: TouristicSpotCardProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: full ? "100%" : 280,
        },
      ]}
      activeOpacity={0.7}
      onPress={() => navigation.navigate("TouristSpot", data)}
    >
      <Image
        style={styles.image}
        source={{
          uri: data.imageUrl,
        }}
      />
      <View style={styles.details}>
        <View style={[styles.row, { flex: 1, maxWidth: full ? "100%" : 280 }]}>
          <Text
            weight="semibold"
            size={16}
            style={{ flex: 1 }}
            color={theme.zinc[700]}
          >
            {data.name}
          </Text>
          <View style={{ alignItems: "flex-end" }}>
            <Text size={14} color={theme.zinc[500]}>
              {parseCurrency(data.price)}
            </Text>
            <Text size={14} color={theme.zinc[500]} lineHeight={14}>
              por sessão
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <AverageStars rate={data.averageRate} />
          <Badge>{data.category}</Badge>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.zinc[100],
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
  },
  details: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {},
});

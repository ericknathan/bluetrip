import type { LocalBusinessModel } from "@/models";
import { theme } from "@/styles";
import { useNavigation } from "@react-navigation/native";
import { Clock } from "phosphor-react-native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Badge, Text } from "../ui";
import { AverageStars } from "./AverageStars";

interface LocalBusinessCardProps {
  data: LocalBusinessModel;
}

export function LocalBusinessCard({ data }: LocalBusinessCardProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Commerce", data)}
    >
      <Image
        source={{ uri: data.imageUrl }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text weight="semibold" size={16} color={theme.zinc[700]}>
          {data.tradeName.slice(0, 24)}
        </Text>
        <View style={styles.info}>
          <Clock size={16} color={theme.zinc[500]} />
          <Text color={theme.zinc[500]}>
            {data.openHour} - {data.closeHour}
          </Text>
        </View>
        <View style={styles.row}>
          <AverageStars rate={data.averageRating} />
          <Badge>{data.businessCategory}</Badge>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 12,
    backgroundColor: theme.zinc[100],
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: theme.zinc[500],
    borderRadius: 12,
  },
  content: {
    flex: 1,
    padding: 12,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

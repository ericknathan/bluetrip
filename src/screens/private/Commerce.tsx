import * as Linking from "expo-linking";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { Header } from "@/components/app";
import { Badge, Text } from "@/components/ui";
import type { LocalBusinessModel } from "@/models";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";
import { Clock, Link, Phone } from "phosphor-react-native";

export function CommerceScreen({ route, navigation }: ScreenProps<"Commerce">) {
  const data = route.params as LocalBusinessModel;

  function handleOpenWebsite() {
    Linking.openURL(data.websiteUrl);
  }

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
            {data.tradeName}
          </Text>
          <Badge>{data.businessCategory}</Badge>
        </View>
        <View style={styles.row}>
          <Clock />
          <Text size={16} color={theme.zinc[500]}>
            {data.openHour} - {data.closeHour}
          </Text>
        </View>
        <View style={styles.row}>
          <Phone />
          <Text size={16} color={theme.zinc[500]}>
            {data.phoneNumber}
          </Text>
        </View>
        <TouchableOpacity style={styles.row} onPress={handleOpenWebsite}>
          <Link />
          <Text size={16} color={theme.zinc[500]}>
            {data.websiteUrl}
          </Text>
        </TouchableOpacity>
        <View style={styles.section}>
          <Text size={18} color={theme.zinc[700]} weight="semibold">
            Descrição
          </Text>
          <Text color={theme.zinc[500]}>{data.description}</Text>
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
    gap: 8,
  },
  section: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: theme.zinc[200],
    gap: 4,
  },
});

import { ScrollView, StyleSheet, View } from "react-native";

import { Header, SearchBar } from "@/components/app";
import { LocalBusinessCard } from "@/components/app/LocalBusinessCard";
import { toast } from "@/helpers";
import { getLocalBusinessListRequest } from "@/helpers/requests";
import type { LocalBusinessModel } from "@/models";
import { useEffect, useState } from "react";

export function CommercesScreen() {
  const [commerces, setCommerces] = useState<LocalBusinessModel[]>();

  useEffect(() => {
    async function getEventsList() {
      try {
        const { data: businessList } = await getLocalBusinessListRequest();

        setCommerces(businessList.data);
      } catch (error) {
        toast({
          type: "error",
          text1: error.message,
        });
      }
    }

    getEventsList();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Header title="Comércios locais" />

      <SearchBar placeholder="Busque pelo nome do comércio" />

      <View style={styles.container}>
        {commerces?.map((commerce) => (
          <LocalBusinessCard data={commerce} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 16,
  },
});

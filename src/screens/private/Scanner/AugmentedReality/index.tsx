import { Badge, Text } from "@/components/ui";
import { theme } from "@/styles";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { ViroARSceneNavigator } from "@viro-community/react-viro";
import {
  FishSimple,
  FrameCorners,
  GlobeHemisphereEast,
  Scan,
  Thermometer,
} from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { FishSceneAR } from "./FishSceneAR";

export function AugmentedRealityScreen() {
  const [isScanned, setIsScanned] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <View style={{ flex: 1 }}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: () => <FishSceneAR onScan={() => {
            setIsScanned(true);
            bottomSheetRef.current?.snapToPosition("70%")
          }} />,
        }}
        style={{ flex: 1 }}
      />

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={isScanned ? [100, "70%"] : [150]}
      >
        <BottomSheetView style={{ flex: 1, padding: 24 }}>
          {isScanned ? (
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text weight="semibold" size={24}>
                  Carpa Koi (Nishikigoi)
                </Text>
                <Badge>Japão</Badge>
              </View>
              <View style={[styles.section, { borderBottomWidth: 1 }]}>
                <Text size={18} color={theme.zinc[700]} weight="semibold">
                  Descrição
                </Text>
                <Text color={theme.zinc[500]}>
                  Koi, mais especificamente Nishikigoi, são carpas ornamentais,
                  coloridas ou estampadas, que surgiram por mutação genética
                  espontânea das carpas comuns (carpas cinza) na região de
                  Niigata (no Japão) e que no período de 1804 e 1829 foram
                  multiplicadas pelos piscicultores da região que aperfeiçoaram
                  suas características chegando a obter três tipos híbridos: o
                  Higoi (carpa vermelha), o Asagui (carpa azul e vermelha) e o
                  Bekko (branca e preta).
                </Text>
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
                    <Text>Peixe</Text>
                  </View>
                  <View style={styles.detailCard}>
                    <Text size={10} color={theme.zinc[500]}>
                      ORIGEM
                    </Text>
                    <GlobeHemisphereEast />
                    <Text>Japão</Text>
                  </View>
                  <View style={styles.detailCard}>
                    <Text size={10} color={theme.zinc[500]}>
                      TAMANHO
                    </Text>
                    <FrameCorners />
                    <Text>Pequeno</Text>
                  </View>
                  <View style={styles.detailCard}>
                    <Text size={10} color={theme.zinc[500]}>
                      TEMPERATURA
                    </Text>
                    <Thermometer />
                    <Text>20-25°C</Text>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 4 }}>
                <Scan weight="bold" />
                <Text align="center" size={24} weight="semibold">
                  QR Trip
                </Text>
              </View>
              <Text align="center">
                Escaneie um QRCode identificado com a logo BlueTrip para obter mais informações sobre a
                espécie ou local.
              </Text>
            </View>
          )}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
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
    padding: 4,
    minWidth: "40%",
    flex: 1,
  },
});

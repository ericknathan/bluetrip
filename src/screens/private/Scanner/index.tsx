import { Header } from "@/components/app";
import { Text } from "@/components/ui";
import type { ScreenProps } from "@/navigation";
import { theme } from "@/styles";
import { useCameraPermissions } from "expo-camera";
import { CubeFocus, FishSimple } from "phosphor-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function ScannerScreen({ navigation }: ScreenProps<"Scanner">) {
  const [permission, requestPermission] = useCameraPermissions();

  async function handleNavigate(name: "AugmentedReality" | "SpecieIdentifier") {
    if(!permission?.granted) {
      await requestPermission();
    }

    navigation.navigate(name);
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Scanner" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.7}
          onPress={() => handleNavigate("AugmentedReality")}
        >
          <CubeFocus size={56} color={theme.primary[500]} />
          <Text weight="semibold" size={24} color={theme.zinc[700]}>
            Realidade aumentada
          </Text>
          <Text align="center" size={16} color={theme.zinc[500]}>
            Escaneie e veja informações sobre determinadas espécies ou item
            cultural em realidade aumentada.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          activeOpacity={0.7}
          onPress={() => handleNavigate("SpecieIdentifier")}
        >
          <FishSimple size={56} color={theme.primary[500]} />
          <Text weight="semibold" size={24} color={theme.zinc[700]}>
            Identificador de espécies
          </Text>
          <Text align="center" size={16} color={theme.zinc[500]}>
            Envie ou tire uma foto com sua câmera e identifique espécies de
            animais marinhos.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  option: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: theme.zinc[100],
    borderColor: theme.primary[500],
    borderRadius: 12,
    padding: 24,
  },
});

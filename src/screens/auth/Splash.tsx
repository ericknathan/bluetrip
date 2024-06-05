import { theme } from "@/styles";
import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";

export function SplashScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.primary[500],
      }}
    >
      <Image
        source={require("@/assets/splash.png")}
        resizeMode="contain"
        style={{ width: "100%", height: "100%" }}
      />
      <StatusBar backgroundColor={theme.primary[500]} translucent={false} />
    </View>
  );
}

import { useCallback } from "react";
import { LogBox, View } from "react-native";
LogBox.ignoreAllLogs();

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { Router } from "@/screens";
import { theme } from "@/styles";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    text_regular: Poppins_400Regular,
    text_medium: Poppins_500Medium,
    text_semibold: Poppins_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Router />
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={theme.zinc[50]}
      />
    </View>
  );
}

import { useCallback } from "react";
import { View } from "react-native";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { theme } from "@/styles";
import { Router } from "./src/screens";

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
    <View
      style={{ flex: 1, backgroundColor: theme.zinc[50] }}
      onLayout={onLayoutRootView}
    >
      <NavigationContainer>
        <Router />
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

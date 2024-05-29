import { useCallback } from "react";
import { View } from "react-native";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { theme } from "@/styles";
import { Router } from "./src/screens";

import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

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
      <NavigationContainer
        theme={{
          colors: {
            background: theme.zinc[50],
            border: theme.zinc[200],
            card: theme.white,
            primary: theme.primary[500],
            text: theme.zinc[900],
            notification: theme.primary[500],
          },
          dark: false,
        }}
      >
        <Router />
        <StatusBar
          style="auto"
          translucent={false}
          backgroundColor={theme.zinc[50]}
        />
      </NavigationContainer>
    </View>
  );
}

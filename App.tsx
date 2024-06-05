import "setup";

import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import * as ExpoSplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { Toaster } from "@/components/ui";
import { UserModel } from "@/models";
import { AuthProvider, getUser } from "@/providers";
import { Router } from "@/screens";
import { SplashScreen } from "@/screens/auth";
import { theme } from "@/styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [user, setUser] = useState<UserModel | string>("loading");
  let [fontsLoaded, fontError] = useFonts({
    text_regular: Poppins_400Regular,
    text_medium: Poppins_500Medium,
    text_semibold: Poppins_600SemiBold,
  });

  useEffect(() => {
    (async () => {
      const loggedUser = await getUser();
      setUser(loggedUser);
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if ((!fontsLoaded && !fontError) || typeof user === "string") {
    return <SplashScreen />;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <GestureHandlerRootView>
        <AuthProvider user={user}>
          <Router />
          <Toaster />
        </AuthProvider>
      </GestureHandlerRootView>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={theme.zinc[50]}
      />
    </View>
  );
}

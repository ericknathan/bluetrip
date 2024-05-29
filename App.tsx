import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/screens";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

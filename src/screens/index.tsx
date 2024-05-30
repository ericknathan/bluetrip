import { theme } from "@/styles";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

export function Router() {
  return (
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
      <StackRoutes />
    </NavigationContainer>
  );
}

import { AppNavigation } from "@/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  RecoverPasswordScreen,
  SignInScreen,
  SignUpScreen,
  WelcomeScreen,
} from "./auth";
import {
  CommerceScreen,
  EventScreen,
  ReservationScreen,
  TouristSpotScreen,
} from "./private";
import { TabRoutes } from "./tab.routes";

const Stack = createNativeStackNavigator<AppNavigation>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />

      <Stack.Screen name="App" component={TabRoutes} />
      <Stack.Screen name="TouristSpot" component={TouristSpotScreen} />
      <Stack.Screen name="Event" component={EventScreen} />
      <Stack.Screen name="Commerce" component={CommerceScreen} />
      <Stack.Screen name="Reservation" component={ReservationScreen} />
    </Stack.Navigator>
  );
}

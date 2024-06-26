import { useAuth } from "@/hooks";
import { AppNavigation } from "@/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  RecoverPasswordScreen,
  SignInScreen,
  SignUpScreen,
  WelcomeScreen,
} from "./auth";
import {
  AugmentedRealityScreen,
  CommerceScreen,
  EventScreen,
  ReservationScreen,
  ReservationSuccessScreen,
  SpecieIdentifierScreen,
  SpecieScreen,
  TouristSpotScreen,
} from "./private";
import { TabRoutes } from "./tab.routes";

const Stack = createNativeStackNavigator<AppNavigation>();

export function StackRoutes() {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Scanner"
    >
      {!!user ? (
        <>
          <Stack.Screen name="App" component={TabRoutes} />
          <Stack.Screen name="TouristSpot" component={TouristSpotScreen} />
          <Stack.Screen name="Event" component={EventScreen} />
          <Stack.Screen name="Commerce" component={CommerceScreen} />
          <Stack.Screen name="Reservation" component={ReservationScreen} />
          <Stack.Screen
            name="ReservationSuccess"
            component={ReservationSuccessScreen}
          />

          <Stack.Screen
            name="SpecieIdentifier"
            component={SpecieIdentifierScreen}
          />
          <Stack.Screen name="Specie" component={SpecieScreen} />
          <Stack.Screen
            name="AugmentedReality"
            component={AugmentedRealityScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen
            name="RecoverPassword"
            component={RecoverPasswordScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

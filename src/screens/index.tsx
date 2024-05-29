import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RecoverPasswordScreen, SignInScreen, SignUpScreen, WelcomeScreen } from "./auth";
import {
  AccountScreen,
  CommerceScreen,
  CommercesScreen,
  EventScreen,
  EventsScreen,
  ReservationScreen,
  TouristSpotScreen,
  TouristSpotsScreen,
} from "./private";

const Tab = createBottomTabNavigator();

export function Router() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Group
        key="Auth"
        screenOptions={{
          tabBarStyle: {
            display: "none",
          },
        }}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="SignIn" component={SignInScreen} />
        <Tab.Screen name="SignUp" component={SignUpScreen} />
        <Tab.Screen name="RecoverPassword" component={RecoverPasswordScreen} />
      </Tab.Group>
      <Tab.Group key="Private">
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="TouristSpots" component={TouristSpotsScreen} />
        <Tab.Screen name="TouristSpot" component={TouristSpotScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Commerces" component={CommercesScreen} />
        <Tab.Screen name="Commerce" component={CommerceScreen} />
        <Tab.Screen name="Reservation" component={ReservationScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
}

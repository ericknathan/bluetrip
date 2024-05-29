import { fontFamily, theme } from "@/styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CalendarBlank,
  MapTrifold,
  Storefront,
  User,
} from "phosphor-react-native";
import {
  RecoverPasswordScreen,
  SignInScreen,
  SignUpScreen,
  WelcomeScreen,
} from "./auth";
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
          tabBarButton: () => null,
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
      <Tab.Group
        key="Bottom"
        screenOptions={{
          tabBarStyle: {
            height: 64,
            backgroundColor: theme.zinc[100],
            borderTopWidth: 1,
            borderColor: theme.zinc[200],
            paddingTop: 12,
          },
          tabBarLabelStyle: {
            paddingBottom: 12,
            fontFamily: fontFamily.medium,
            fontSize: 10,
          },
          tabBarActiveTintColor: theme.primary[500],
          tabBarInactiveTintColor: theme.zinc[600],
        }}
      >
        <Tab.Screen
          name="TouristSpots"
          component={TouristSpotsScreen}
          options={{
            tabBarIcon: ({ color }) => <MapTrifold color={color} />,
            tabBarLabel: "Pontos turísticos",
          }}
        />
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{
            tabBarIcon: ({ color }) => <CalendarBlank color={color} />,
            tabBarLabel: "Eventos",
          }}
        />
        <Tab.Screen
          name="Commerces"
          component={CommercesScreen}
          options={{
            tabBarIcon: ({ color }) => <Storefront color={color} />,
            tabBarLabel: "Comércios",
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color }) => <User color={color} />,
            tabBarLabel: "Conta",
          }}
        />
      </Tab.Group>
      <Tab.Group
        key="Stack"
        screenOptions={{
          tabBarButton: () => null,
          tabBarStyle: {
            display: "none",
          },
        }}
      >
        <Tab.Screen name="TouristSpot" component={TouristSpotScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Commerce" component={CommerceScreen} />
        <Tab.Screen name="Reservation" component={ReservationScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CalendarBlank,
  MapTrifold,
  Scan,
  Storefront,
  User,
} from "phosphor-react-native";

import { AppNavigation } from "@/navigation";
import { fontFamily, theme } from "@/styles";
import {
  AccountScreen,
  CommercesScreen,
  EventsScreen,
  ScannerScreen,
  TouristSpotsScreen,
} from "./private";

const Tab = createBottomTabNavigator<AppNavigation>();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
        name="Scanner"
        component={ScannerScreen}
        options={{
          tabBarIcon: ({ color }) => <Scan color={color} />,
          tabBarLabel: "Scanner",
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
    </Tab.Navigator>
  );
}

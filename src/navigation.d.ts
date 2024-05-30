import { NavigationProp, RouteProp } from "@react-navigation/native";

export type AppNavigation = {
  App: undefined;
  Welcome: undefined;
  SignIn: { email: string } | undefined;
  SignUp: undefined;
  RecoverPassword: { email: string } | undefined;
  TouristSpots: undefined;
  Events: undefined;
  Commerces: undefined;
  Account: undefined;
  TouristSpot: undefined;
  Event: undefined;
  Commerce: undefined;
  Reservation: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, AppNavigation {}
  }
}

export type ScreenProps<ScreenName extends keyof AppNavigation = "undefined"> = {
  navigation: NavigationProp<AppNavigation, ScreenName>;
  route: RouteProp<AppNavigation, ScreenName>;
};

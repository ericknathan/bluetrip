import { NavigationProp, RouteProp } from "@react-navigation/native";

export type AppNavigation = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  RecoverPassword: undefined;
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

export type ScreenProps<ScreenName extends keyof AppNavigation = undefined> = {
  navigation: NavigationProp<AppNavigation, ScreenName>;
  route: RouteProp<AppNavigation, ScreenName>;
};

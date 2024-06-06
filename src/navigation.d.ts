import { NavigationProp, RouteProp } from "@react-navigation/native";
import type { EventModel } from "./models";

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
  TouristSpot: TouristicSpotModel;
  Event: EventModel;
  Commerce: undefined;
  Reservation: undefined;
  ReservationSuccess: undefined;
  Scanner: undefined;
  AugmentedReality: undefined;
  SpecieIdentifier: undefined;
  Specie: { name: string; score: number; type: string; image: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, AppNavigation {}
  }
}

export type ScreenProps<ScreenName extends keyof AppNavigation = "undefined"> =
  {
    navigation: NavigationProp<AppNavigation, ScreenName>;
    route: RouteProp<AppNavigation, ScreenName>;
  };

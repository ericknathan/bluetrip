import type { AddressModel } from "./address.model";

export type TouristicSpotModel = {
  id: number;
  name: string;
  description: string;
  averageRate: number;
  price: number;
  phone?: string;
  imageUrl: string;
  category: string;
  address: AddressModel;
  events?: Omit<EventModel, "touristicSpot">[];
};

export type EventModel = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  startDate: string;
  endDate: string;
  touristicSpot?: Omit<TouristicSpotModel, "events">;
};

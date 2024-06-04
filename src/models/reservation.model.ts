export type ReservationModel = {
  id: number;
  date: string;
  status: string;
  quantity: number;
  type: string;
  paymentMethod: "C" | "P" | "B";
  userId: number;
  externalId: number;
};

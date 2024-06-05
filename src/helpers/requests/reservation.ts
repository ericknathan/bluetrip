import { api, isApiError } from "@/helpers";
import type { ReservationModel } from "@/models";

export async function createReservationRequest(data: ReservationModel) {
  try {
    const response = await api.post("/resevartion", data);
    return response;
  } catch (error) {
    if (isApiError(error)) {
      throw new Error(error.response?.data.message);
    }

    throw error;
  }
}

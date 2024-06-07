import { api, isApiError } from "@/helpers";
import { getUser } from "@/providers";
import type { CreateReservationSchema } from "../validators/reservation";

export async function createReservationRequest(data: CreateReservationSchema) {
  try {
    const user = await getUser();

    const response = await api.post("/reservation", data, {
      headers: {
        "x-user-email": user.email,
      },
    });

    return response;
  } catch (error) {
    if (isApiError(error)) {
      throw new Error(error.response?.data.message);
    }

    throw error;
  }
}

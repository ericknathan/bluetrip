import { api, isApiError } from "@/helpers";
import type { TouristicSpotModel } from "@/models";

export async function getTouristicSpotsListRequest(
  category: "near" | "popular" | "recommended"
) {
  try {
    const response = await api.get<{ data: TouristicSpotModel[] }>(
      "/touristic-spots",
      {
        params: {
          category,
        },
      }
    );

    return response;
  } catch (error) {
    if (isApiError(error)) {
      throw new Error(error.response?.data.message);
    }

    throw error;
  }
}

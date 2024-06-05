import { api, isApiError } from "@/helpers";
import type { LocalBusinessModel } from "@/models";

export async function getLocalBusinessList(
  category: "near" | "popular" | "recommended"
) {
  try {
    const response = await api.get<{ data: LocalBusinessModel[] }>("/events", {
      params: {
        category,
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

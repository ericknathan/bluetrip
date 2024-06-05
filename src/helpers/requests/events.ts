import { api, isApiError } from "@/helpers";
import type { EventModel } from "@/models";

export async function getEventsList(category: "next" | "suggestions") {
  try {
    const response = await api.get<{ data: EventModel[] }>("/events", {
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

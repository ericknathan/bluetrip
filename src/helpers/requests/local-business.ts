import { api, isApiError } from "@/helpers";
import type { LocalBusinessModel } from "@/models";

export async function getLocalBusinessListRequest() {
  try {
    const response = await api.get<{ data: LocalBusinessModel[] }>("/local-business");

    return response;
  } catch (error) {
    if (isApiError(error)) {
      throw new Error(error.response?.data.message);
    }

    throw error;
  }
}

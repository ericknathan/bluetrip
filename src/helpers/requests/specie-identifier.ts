import { api, isApiError } from "@/helpers";

export async function identifySpecieRequest(imageUri: string) {
  try {
    const data = new FormData();
    data.append("file", {
      uri: imageUri,
      name: "image.png",
      type: "image/png",
    } as unknown as Blob);

    const response = await api.post(
      "http://192.168.15.14:8000/identify-specie",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
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

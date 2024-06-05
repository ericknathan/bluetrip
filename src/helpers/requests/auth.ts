import { UserModel } from "@/models";
import { api, isApiError } from "@/helpers";
import type {
  RecoverPasswordSchema,
  SignInSchema,
  UserDataSchema,
} from "../validators";

export async function signInRequest(data: SignInSchema) {
  try {
    const response = await api.post<{ user: UserModel }>("/auth/signin", data);
    return response;
  } catch (error) {
    if (isApiError(error)) {
      if (error.response?.status === 401) {
        throw new Error("Credenciais incorretas, tente novamente!");
      }

      throw new Error(error.response?.data.message);
    }

    throw error;
  }
}

export async function signUpRequest(data: UserDataSchema) {
  try {
    const response = await api.post("/auth/signup", data);
    return response;
  } catch (error) {
    if (isApiError(error)) {
      if (error.response?.status === 409) {
        throw new Error("E-mail ou CPF já cadastrado!");
      }

      throw new Error(error.response?.data.message);
    }

    throw error;
  }
}

export async function recoverPasswordRequest(data: RecoverPasswordSchema) {
  try {
    const response = await api.post("/auth/recover-password", data);
    return response;
  } catch (error) {
    if (isApiError(error)) {
      if (error.response?.status === 404) {
        throw new Error("Cadastro não encontrado!");
      }

      throw new Error(error.response?.data.message);
    }

    throw error;
  }
}

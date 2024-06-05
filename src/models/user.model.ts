import type { UserDataSchema } from "@/helpers/validators";

export type UserModel = Omit<UserDataSchema, "password">;
export type UserModel = {
  id: number;
  email: string;
  name: string;
  nationality: string;
  phone: string;
  birthDate: string;
  gender: "m" | "f";
  language: string;
};
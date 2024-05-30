import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "É necessário informar o e-mail" })
    .email("Insira um e-mail inválido"),
  password: z
    .string({ required_error: "É necessário informar a senha" })
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .refine((password) => {
      return /[A-Z]/.test(password);
    }, "A senha deve conter ao menos uma letra maiúscula")
    .refine((password) => {
      return /[a-z]/.test(password);
    }, "A senha deve conter ao menos uma letra minúscula")
    .refine((password) => {
      return /[0-9]/.test(password);
    }, "A senha deve conter ao menos um número"),
});
export type SignInSchema = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  name: z
    .string({ required_error: "É necessário informar o nome" })
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(100, "O nome deve ter no máximo 100 caracteres"),
  nationality: z
    .string({ required_error: "É necessário informar uma nacionalidade" })
    .min(3, "Selecione uma nacionalidade válida"),
  phone: z
    .string({ required_error: "É necessário informar o telefone" })
    .min(11, "O telefone deve ter no mínimo 11 caracteres")
    .max(15, "O telefone deve ter no máximo 15 caracteres"),
  birthDate: z
    .date({
      required_error: "É necessário informar a data de nascimento",
      invalid_type_error: "Insira uma data válida",
    })
    .refine(
      (date) => date < new Date(),
      "A data de nascimento deve ser menor que a data atual"
    ),
  gender: z.enum(["m", "f"], {
    required_error: "É necessário informar seu gênero",
  }),
  language: z.enum(["pt", "en", "es"], {
    required_error: "É necessário informar o idioma",
  }),
  email: z
    .string({ required_error: "É necessário informar o e-mail" })
    .email("Insira um e-mail inválido"),
  password: z
    .string({ required_error: "É necessário informar a senha" })
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .refine((password) => {
      return /[A-Z]/.test(password);
    }, "A senha deve conter ao menos uma letra maiúscula")
    .refine((password) => {
      return /[a-z]/.test(password);
    }, "A senha deve conter ao menos uma letra minúscula")
    .refine((password) => {
      return /[0-9]/.test(password);
    }, "A senha deve conter ao menos um número"),
});
export type SignUpSchema = z.infer<typeof signUpSchema>;

export const recoverPasswordSchema = z.object({
  email: z
    .string({ required_error: "É necessário informar o e-mail" })
    .email("Insira um e-mail inválido"),
});
export type RecoverPasswordSchema = z.infer<typeof recoverPasswordSchema>;

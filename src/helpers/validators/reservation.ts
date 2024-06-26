import { z } from "zod";

export const createReservationSchema = z.object({
  externalId: z.number({ required_error: "O identificador é obrigatório" }),
  type: z.enum(["event", "touristic-spot"], {
    required_error: "O tipo é obrigatório",
  }),
  quantity: z.coerce
    .number({
      required_error: "A quantidade de pessoas é obrigatória",
      invalid_type_error: "A quantidade de pessoas deve ser um número válido",
    })
    .int("A quantidade de pessoas deve ser um número inteiro")
    .positive("A quantidade de pessoas deve ser um número positivo")
    .min(1, "A quantidade de pessoas deve ser maior que 0")
    .max(15, "A quantidade de pessoas deve ser até 15"),
  paymentMethod: z.enum(["C", "M", "P"], {
    required_error: "A forma de pagamento é obrigatória",
  }),
  date: z.string({ required_error: "A data da reserva é obrigatória" }),
  time: z.string({ required_error: "O horário da reserva é obrigatório" }),
});
export type CreateReservationSchema = z.infer<typeof createReservationSchema>;

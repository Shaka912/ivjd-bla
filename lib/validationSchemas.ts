import { z } from "zod";

export const newsLetterSchema = z.object({
  email: z.string().email("Ingrese un correo electrónico válido"),
});

export const contactusSchema = z.object({
  email: z.string().email("Ingrese un correo electrónico válido"),
  name: z.string({ required_error: "Se requiere el nombre" }).min(1),
  message: z.string({ required_error: "Por favor ingresa el mensaje" }).min(10),
});

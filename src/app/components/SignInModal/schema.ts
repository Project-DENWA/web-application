import { z } from "zod";
export const formSchema = z.object({
  emailorusername: z
    .string({
      required_error: "Электронная почта или логин должны быть заполнены",
    })
    .min(3, {
      message:
        "Электронная почта или логин должны содержать не менее 3 символов.",
    })
    .max(30, {
      message:
        "Электронная почта или логин должны содержать не более 30 символов.",
    }),
  remember: z.boolean().default(false),
  password: z
    .string({
      required_error: "Пароль должен быть заполнен",
    })
    .min(4, { message: "Пароль должен содержать минимум 4 символа" })
    .max(20, { message: "Пароль не должен превышать 20 символов" })
    .refine((value) => /[a-zA-Z]/.test(value), {
      message: "Пароль должен содержать хотя бы одну латинскую букву",
    })
    .refine((value) => /\d/.test(value), {
      message: "Пароль должен содержать хотя бы одну цифру",
    }),
});

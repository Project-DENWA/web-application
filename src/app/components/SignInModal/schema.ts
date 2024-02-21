import { z } from "zod"

export const formSchema = z.object({
   emailorusername: z.string().min(1, {
      message: "Электронная почта или логин должны быть заполнены",
   }),
   remember: z.boolean().default(false),
   password: z.string().min(1, {
      message: "Поле пароля должно быть заполнено",
   }),
})

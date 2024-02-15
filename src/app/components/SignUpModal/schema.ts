import { z } from "zod"
export const formSchema = z.object({
   fio: z.string()
    .min(4, {
        message: "Минимальная длина ФИО - 4 символа."
    })
    .max(50, {
        message: "Максимальная длина ФИО - 50 символов."
    })
    .refine(value => /[\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
        message: "В поле ФИО не должны содержаться цифры и спец. символы."
    }),
   username: z
      .string()
      .min(4, {
         message: "Логин должен содержать не менее 4 символов",
      })
      .max(30, {
         message: "Логин должнен содержать не более 30 символов.",
      }),
   email: z.string()
       .min(1, {
            message: "Поле эл.почты обязательно для заполнения",
        })
        .email( {
            message: "Введите корректные данные эл. адреса"
        }),
   password: z
      .string()
      .min(4, { message: "Пароль должен содержать минимум 4 символа" })
      .max(20, { message: "Пароль не должен превышать 20 символов" })
      .refine(value => /[a-zA-Z]/.test(value), {
         message: "Пароль должен содержать хотя бы одну латинскую букву",
      })
      .refine(value => /\d/.test(value), {
         message: "Пароль должен содержать хотя бы одну цифру",
      }),
})

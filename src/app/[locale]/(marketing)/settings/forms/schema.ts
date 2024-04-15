import { ZodType, z } from 'zod';

export interface ProfileFormData {
  fullname: string;
  bio: string;
}

export interface AccountFormData {
  username: string;
  mail: string;
}

export interface ChangePassFormData {
  oldPass: string;
  newPass: string;
  confirmPass: string;
}

export const ProfileFormSchema: ZodType<ProfileFormData> = z.object({
  fullname: z.string().min(1, {
    message: 'Поле полного имени обязательно для заполнения!',
  }),
  bio: z.string().min(1, {
    message: "Поле 'О себе' обязательно для заполнения",
  }),
});

export const AccountFormSchema: ZodType<AccountFormData> = z.object({
  username: z
    .string()
    .min(1, {
      message: 'Поле имени пользователя обязательно для заполнения!',
    })
    .regex(/^\w{3,}$/i, {
      message:
        'Имя пользователя должно содержать как минимум 3 символа и состоять только из букв, цифр и символа подчеркивания',
    }),
  mail: z
    .string()
    .min(1, {
      message: 'Поле почты обязательно для заполнения!',
    })
    .email({
      message: 'Неверный формат эл.почты!',
    }),
});

export const ChangePasswordSchema: ZodType<ChangePassFormData> = z.object({
  oldPass: z
    .string()
    .min(1, { message: "Поле старого пароля обязательно для заполнения!" }),
  newPass: z
    .string()
    .min(6, { message: 'Пароль должен состоять не менее чем из 6 символов!' })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
      'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру.',
    ),
  confirmPass: z
    .string()
    .min(1, {
      message: "Поле подтверждения пароля обязательно для заполнения!",
    }),
});

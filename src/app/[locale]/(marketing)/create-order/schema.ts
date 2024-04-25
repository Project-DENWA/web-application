import { ZodType, z } from 'zod';

export interface CreateOrderFormData {
  title: string;
  description: string;
  images: File[] | null;
  cost: number | string;
  deadline: string;
  categoryNames: string;
}

export const CreateOrderFormSchema: ZodType<CreateOrderFormData> = z.object({
  title: z.string().min(1, {
    message: 'Поле заголовка проекта обязательно для заполнения!',
  }),
  description: z.string().min(1, {
    message: 'Поле описания проекта обязательно для заполнения',
  }),
  images: z
    .array(z.any())
    .min(1, {
      message: 'Необходимо загрузить хотя-бы одно изображение!',
    })
    .max(5, {
      message: 'Можно загружать только до 5 изображений!',
    }),
    cost: z
    .union([z.number(), z.string()])
    .transform((val) => (typeof val === 'number' ? val.toString() : val))
    .refine((val) => val !== '' && !isNaN(parseFloat(val)), {
      message: 'Поле цены обязательно для заполнения',
      path: ['price'],
    }),
  deadline: z.string().min(1, {
    message: 'Поле срока проекта обязательно для заполнения',
  }),
  categoryNames: z
    .string()
    .min(1, {
      message: "Поле категории обязательно для заполнения",
    }),
});

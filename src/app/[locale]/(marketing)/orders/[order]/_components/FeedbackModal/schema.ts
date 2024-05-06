import { ZodType, z } from 'zod';

export interface FeedbackData {
  description: string;
}

export const FeedbackFormSchema: ZodType<FeedbackData> = z.object({
  description: z.string().min(1, {
    message: "Вы забыли добавить комментарий к заказу!",
  }),
});

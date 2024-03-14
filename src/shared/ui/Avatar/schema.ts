import { z } from 'zod';

export const AvatarSchema = z.object({
  name: z.string(), 
  type: z.enum(['image/jpeg', 'image/png', 'image/jpg']), 
  size: z.number().min(0).max(2 * 1024 * 1024), 
})
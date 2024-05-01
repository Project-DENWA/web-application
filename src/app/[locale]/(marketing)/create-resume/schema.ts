import { ZodType, z } from 'zod';

export type Language = {
  name: string;
  level: string;
};

export type Category = {
  name: string;
  exp: number;
  seniority: string;
};

export type Socials = {
  websiteURL?: string;
  twitter?: string;
  github?: string;
  telegram?: string;
  discord?: string;
};

export interface ResumeData {
  tagname: string;
  description: string;
  languages: Language[];
  categories: Category[];
  socials?: Socials;
}

export const createResumeForm: ZodType<ResumeData> = z.object({
  tagname: z
    .string()
    .min(1, { message: 'Поле тэгнейм обязательно для заполнения' }),

  description: z
    .string()
    .min(1, { message: 'Поле описания обязательно для заполнения' }),

  languages: z
    .array(
      z.object({
        name: z
          .string()
          .min(1, { message: 'Поле языка в свойствах является обязательным!' }),
        level: z.string().min(1, {
          message: 'Поле уровня языка в свойствах является обязательным!',
        }),
      }),
    )
    .min(1, { message: 'Необходимо добавить хотя-бы один язык' }),

  categories: z
    .array(
      z.object({
        name: z.string().min(1, {
          message: 'Поле навыка в свойствах навыков является обязательным!',
        }),
        exp: z.number().min(1, {
          message: 'Введите кол-во вашего опыта!',
        }),
        seniority: z.string().min(1, {
          message: 'Выберите месяц/год опыта в выпадающем списке!',
        }),
      }),
    )
    .min(1, { message: 'Необходимо добавить хотя-бы один навык' }),

  socials: z
    .object({
      websiteURL: z.string().optional(),
      twitter: z.string().optional(),
      github: z.string().optional(),
      telegram: z.string().optional(),
      discord: z.string().optional(),
    })
    .optional(),
});

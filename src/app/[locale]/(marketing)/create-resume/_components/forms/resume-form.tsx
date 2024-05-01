'use client';
import css from './forms.module.scss';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from 'sonner';

import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import MyTooltip from '@/shared/ui/myTooltip';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';

import { languageItems, dateFormat } from './langualeItems';
import { PlusCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { createResumeForm, ResumeData, Language, Category } from '../../schema';
import { useCreateResumeMutation } from '@/shared/redux/features/resumeApi';

type FieldErrors = {
  [key: string]: any | undefined;
};

export default function ResumeForm(): JSX.Element {
  const [create, { isLoading }] = useCreateResumeMutation();
  const t = useTranslations('createResume.content');
  const form = useForm<z.infer<typeof createResumeForm>>({
    resolver: zodResolver(createResumeForm),
    defaultValues: {
      tagname: '',
      description: '',
      languages: [{}],
      categories: [{}],
      socials: {},
    },
  });
  const [isErrorsShown, setIsErrorsShown] = useState<boolean>(false);
  const errors: FieldErrors = form.formState.errors;

  const [addedLanguages, setAddedLanguages] = useState<Language[]>([]);
  const [languageName, setlanguageName] = useState<string>('');
  const [languageLevel, setlanguageLevel] = useState<string>('');

  const [addedSkills, setaddedSkills] = useState<Category[]>([]);
  const [skillName, setSkillName] = useState<string>('');
  const [quantityExp, setQuantityExp] = useState<number>();
  const [seniority, setSeniority] = useState<string>('');

  useEffect(() => {
    if (!isErrorsShown) return;
    for (const field in errors) {
      const errorMessage = errors[field]?.message;
      if (errorMessage) {
        toast.error(errorMessage, { position: 'bottom-right' });
      }
    }
    setIsErrorsShown(false);
  }, [isErrorsShown, errors]);

  const onSubmit = async (data: ResumeData) => {
    const modifiedCategories = data.categories.map((category) => ({
      ...category,
      exp: `${category.exp}${category.seniority}`,
    }));
    const payload = {
      tagname: data.tagname,
      description: data.description,
      languages: data.languages,
      categories: modifiedCategories,
      socials: data.socials,
    };
    toast.loading('Создание резюме..');
    try {
      //@ts-ignore
      const response = await create(payload).unwrap();
      form.reset();
      toast.success('Резюме успешно создано!');
    } catch (e: any) {
      if (e.data && e.data.message) {
        toast.error(e.data.message);
      } else {
        toast.error('Упсс, возникла ошибка...');
      }
      console.error(e, 'Говно не зашло', payload);
    } finally {
      toast.dismiss();
    }
  };

  const addLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!languageName || !languageLevel) {
      toast.error(
        'Оба поля при заполнении владения языками обязательны для заполнения',
        {
          position: 'bottom-right',
        },
      );
      return;
    }

    const newLanguage = { name: languageName, level: languageLevel };
    const updatedLanguages = [...addedLanguages, newLanguage];
    setAddedLanguages(updatedLanguages);
    form.setValue('languages', updatedLanguages);
    toast.success(`Вы добавили ${languageName} язык!`);
    setlanguageName('');
  };

  const addSkill = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!skillName || !quantityExp || !seniority) {
      toast.error(
        'Все поля при заполнении навыков обязательны для заполнения',
        {
          position: 'bottom-right',
        },
      );
      return;
    }

    const newSkill: Category = {
      name: skillName,
      exp: quantityExp,
      seniority: seniority as 'Month' | 'Year',
    };

    const updatedSkills: Category[] = [...addedSkills, newSkill];
    setaddedSkills(updatedSkills);
    form.setValue('categories', updatedSkills);
    toast.success(`Вы добавили навык: ${newSkill.name}`);
    setSkillName('');
    setQuantityExp(undefined);
    setSeniority('');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={css.wrapper}>
        <div className={css.field}>
          <div className={css.questionMark}>
            <h3>{t('fieldName.title')}</h3>
            <MyTooltip>{t('fieldName.questionMark')}</MyTooltip>
          </div>
          <div className={css.input}>
            <FormField
              control={form.control}
              name="tagname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t('fieldName.placeholder')}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className={css.fieldTextArea}>
          <h3>{t('fieldDescription.title')}</h3>
          <div className={css.textarea}>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className={css.textarea}
                      placeholder={t('fieldDescription.placeholder')}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className={css.languageField}>
          <div>
            <h3>{t('fieldLanguage.title')}</h3>
          </div>
          <div>
            <Input
              className={css.input}
              type="text"
              placeholder={t('fieldLanguage.placeholder')}
              value={languageName}
              onChange={(e) => setlanguageName(e.target.value)}
            />

            <Select onValueChange={(value) => setlanguageLevel(value)}>
              <SelectTrigger
                className={cn(
                  css.selectTrigger,
                  'bg-light-main-colored-20 dark:bg-dark-main-colored-10',
                )}
              >
                <SelectValue
                  placeholder={t('fieldLanguage.selectPlaceholder')}
                />
              </SelectTrigger>
              <SelectContent
                className={
                  'bg-light-main-colored-20 dark:bg-dark-main-colored-10'
                }
              >
                {languageItems.map((language) => (
                  <SelectItem key={language.value} value={language.value}>
                    {language.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button onClick={(e) => addLanguage(e)}>
              <PlusCircle />
            </button>
          </div>
        </div>
        {addedLanguages.length > 0 && (
          <div className={css.table}>
            <div>
              <h3>Добавленные языки:</h3>
            </div>
            <div>
              {addedLanguages.map((language, index) => (
                <p key={index}>
                  {language.name} - {language.level}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className={css.skillsField}>
          <div>
            <h3>{t('fieldSkills.title')}</h3>
          </div>
          <div>
            <Input
              className={css.input}
              placeholder={t('fieldSkills.placeholder')}
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
            />
            <Input
              className={css.expInput}
              type="number"
              placeholder={t('fieldSkills.expPlaceholder')}
              value={quantityExp}
              onChange={(e) => setQuantityExp(parseInt(e.target.value))}
            />
            <Select onValueChange={(value) => setSeniority(value)}>
              <SelectTrigger
                className={cn(
                  css.selectTrigger,
                  'bg-light-main-colored-20 dark:bg-dark-main-colored-10',
                )}
              >
                <SelectValue placeholder={t('fieldSkills.expPlaceholder')} />
              </SelectTrigger>
              <SelectContent
                className={
                  'bg-light-main-colored-20 dark:bg-dark-main-colored-10'
                }
              >
                {dateFormat.map((date) => (
                  <SelectItem key={date.value} value={date.value}>
                    {date.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button onClick={(e) => addSkill(e)}>
              <PlusCircle />
            </button>
          </div>
        </div>
        <div className={css.table}>
          <div>
            <h3>Добавленные навыки:</h3>
          </div>
          <div>
        {addedSkills.map((skill, index) => (
          <p key={index}>
            {skill.name} - {skill.exp} - {skill.seniority}
          </p>
        ))}
        </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className={cn(css.accordion, 'w-full')}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>{t('fieldSocials.title')}</AccordionTrigger>
            <AccordionContent className={cn(css.accordionContent)}>
              <FormField
                control={form.control}
                name="socials.websiteURL"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t('fieldSocials.website')}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socials.twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t('fieldSocials.twitter')}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socials.github"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t('fieldSocials.github')}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socials.telegram"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t('fieldSocials.telegram')}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socials.discord"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t('fieldSocials.discord')}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button
          onClick={() => {
            setIsErrorsShown(true);
            form.handleSubmit((data) => {
              if (form.formState.isValid) {
                onSubmit(data);
              }
            })();
          }}
          type="submit"
        >
          {t('btn')}
        </Button>
      </form>
    </Form>
  );
}

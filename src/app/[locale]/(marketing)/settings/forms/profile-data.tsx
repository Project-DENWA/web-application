'use client';
import Image from 'next/image';
import questionMark from '@/../public/questionMark.svg';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Button } from '@/shared/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip';
import css from '../settings.module.scss';
import { useTranslations } from 'next-intl';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
import { toast } from 'sonner';
import { ProfileFormData, ProfileFormSchema } from './schema';

type FieldErrors = {
  [key: string]: any | undefined;
};

export default function ProfileData(): JSX.Element {
  const t = useTranslations('settings.profile');

  const form = useForm<z.infer<typeof ProfileFormSchema>>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      fullname: '',
      bio: '',
    },
  });
  const onSubmit = (data: ProfileFormData) => {
    const payload = {
      fullname: data.fullname,
      bio: data.bio,
    };
    console.log('Payload:', payload);
    toast.success('Данные успешно изменены!');
  };

  const [isErrorsShown, setIsErrorsShown] = useState<boolean>(false);
  const errors: FieldErrors = form.formState.errors;

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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={css.form}>
        <div className={css.editName}>
          <h4> {t('fullName')}</h4>
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="fullname"
                    type="text"
                    placeholder={t('fullNamePlaceholder')}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className={css.editBio}>
          <div>
            <h4> {t('bio')}</h4>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={questionMark}
                    alt="Question mark"
                    width={16}
                    height={16}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('tooltip')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    id="bio"
                    placeholder={t('bioPlaceholder')}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div>
          <Button
            onClick={() => {
              setIsErrorsShown(true);
              form.handleSubmit((data) => {
                onSubmit(data);
              });
            }}
            type="submit"
          >
            {' '}
            {t('textBtn')}
          </Button>
        </div>
      </form>
    </Form>
  );
}

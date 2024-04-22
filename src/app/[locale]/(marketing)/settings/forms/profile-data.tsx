'use client';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Button } from '@/shared/ui/button';
import MyTooltip from '@/shared/ui/myTooltip';

import css from '../settings.module.scss';
import { useTranslations } from 'next-intl';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
import { toast } from 'sonner';
import { ProfileFormData, ProfileFormSchema } from './schema';
import { UserData, getUserData } from '@/shared/lib/localstorage';
type FieldErrors = {
  [key: string]: any | undefined;
};

export default function ProfileData(): JSX.Element {
  const t = useTranslations('settings.profile');
  const userData: UserData | null = getUserData();

  const form = useForm<z.infer<typeof ProfileFormSchema>>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      name: userData?.meta.name || '',
      description: userData?.meta.description || '',
    },
  });
  const onSubmit = (data: ProfileFormData) => {
    const payload = {
      newUsername: data.name,
      newDescription: data.description,
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="name"
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
            <MyTooltip>
              <p>{t('tooltip')}</p>
            </MyTooltip>
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    id="description"
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

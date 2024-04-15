'use client';
import css from '../settings.module.scss';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
import { toast } from 'sonner';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AccountFormData, AccountFormSchema } from './schema';

type FieldErrors = {
  [key: string]: any | undefined;
};

export default function AccountData(): JSX.Element {
  const t = useTranslations('settings.account');

  const form = useForm<z.infer<typeof AccountFormSchema>>({
    resolver: zodResolver(AccountFormSchema),
    defaultValues: {
      username: '',
      mail: '',
    },
  });

  const onSubmit = (data: AccountFormData) => {
    const payload = {
      username: data.username,
      mail: data.mail,
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
        <div className={css.accountContainer}>
          <div>
            <h4>{t('username')}</h4>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="username"
                      type="text"
                      placeholder={t('usernamePlaceholder')}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <h4>{t('mail')}</h4>
            <FormField
              control={form.control}
              name="mail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="username"
                      type="text"
                      placeholder={t('mailPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button
            onClick={() => {
              setIsErrorsShown(true);
              form.handleSubmit((data) => {
                onSubmit(data);
              });
            }}
          >
            {t('btn')}
          </Button>
        </div>
      </form>
    </Form>
  );
}

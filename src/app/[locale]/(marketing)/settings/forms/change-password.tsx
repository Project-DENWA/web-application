'use client';
import css from '../settings.module.scss';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
import { toast } from 'sonner';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangePassFormData, ChangePasswordSchema } from './schema';

type FieldErrors = {
  [key: string]: any | undefined;
};

export default function ChangePassword(): JSX.Element {
  const t = useTranslations('settings.account.pass');

  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      oldPass: '',
      newPass: '',
      confirmPass: '',
    },
  });

  const onSubmit = (data: ChangePassFormData) => {
    if (data.newPass !== data.confirmPass) {
      toast.error("Пароли не совпадают");
      return;
    }
    const payload = {
      oldPass: data.oldPass,
      newPass: data.newPass,
      confirmPass: data.confirmPass,
    };
    console.log('Payload:', payload);
    form.reset();
    toast.success('Пароль успешно изменён!');
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={css.passwordChange}>
          <div>
            <h4>{t('old')}</h4>
            <FormField
              control={form.control}
              name="oldPass"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="oldPass"
                      type="text"
                      placeholder={t('oldPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <h4>{t('new')}</h4>
            <FormField
              control={form.control}
              name="newPass"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="oldPass"
                      type="text"
                      placeholder={t('newPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <h4>{t('confirm')}</h4>
            <FormField
              control={form.control}
              name="confirmPass"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="confirmPass"
                      type="text"
                      placeholder={t('confirmPlaceholder')}
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
            >
              Изменить
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

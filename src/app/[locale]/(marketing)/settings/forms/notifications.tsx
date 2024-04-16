'use client';
import css from '../settings.module.scss';
import { useTranslations } from 'next-intl';
import { Switch } from '@/shared/ui/switch';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NotificationsFormSchema, NotificationsFormData } from './schema';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/shared/ui/form';
import { toast } from 'sonner';
import { Button } from '@/shared/ui/button';



export default function NotificationsForm(): JSX.Element {
  const t = useTranslations('settings.notifications');
  const form = useForm<z.infer<typeof NotificationsFormSchema>>({
    resolver: zodResolver(NotificationsFormSchema),
    defaultValues: {
      news: false,
      push: false,
      sound: false,
    },
  });

  function onSubmit(data: z.infer<typeof NotificationsFormSchema>) {
    toast('Настройки успешно применены!');
    console.log(data);
  }
  return (
    <Form {...form}>
      <form className={css.notificationsform} onSubmit={form.handleSubmit(onSubmit)}>
        <div className={css.notificationsItem}>
          <div>
            <h4>{t('chat.title')}</h4>
            <p className="text-dark-text-main-50">{t('chat.description')}</p>
          </div>
          <FormField
            control={form.control}
            name="push"
            render={({ field }) => (
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            )}
          />
        </div>

        <div className={css.notificationsItem}>
          <div>
            <h4>{t('sounds.title')}</h4>
            <p className="text-dark-text-main-50">{t('sounds.description')}</p>
          </div>
          <FormField
            control={form.control}
            name="sound"
            render={({ field }) => (
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            )}
          />
        </div>

        <div className={css.notificationsItem}>
          <div>
            <h4>{t('news.title')}</h4>
            <p className="text-dark-text-main-50">{t('news.description')}</p>
          </div>
          <FormField
            control={form.control}
            name="news"
            render={({ field }) => (
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            )}
          />
        </div>
        <Button className={css.btn} type="submit">Сохранить</Button>
      </form>
    </Form>
  );
}

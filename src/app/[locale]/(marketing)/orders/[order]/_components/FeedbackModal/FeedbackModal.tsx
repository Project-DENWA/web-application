import css from './FeedbackModal.module.scss';

import { useEffect, useState } from 'react';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/shared/ui/form';
import { Button } from '@/shared/ui/button';
import { toast } from 'sonner';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FeedbackFormSchema } from './schema';

import { useCreateFeedbackMutation } from '@/shared/redux/features/feedbackApi';

import { Separator } from '@/shared/ui/separator';
import { Textarea } from '@/shared/ui/textarea';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  children: React.ReactNode;
  workId: string;
};

type FieldErrors = {
  [key: string]: any | undefined;
};

export default function FeedbackModal({
  open,
  setIsOpen,
  children,
  workId,
}: Props): JSX.Element {
  const [createFeedback, {isLoading}] = useCreateFeedbackMutation();
  const form = useForm<z.infer<typeof FeedbackFormSchema>>({
    resolver: zodResolver(FeedbackFormSchema),
    defaultValues: {
      description: '',
    },
  });

  const [isErrorsShown, setIsErrorsShown] = useState<boolean>(false);
  const errors: FieldErrors = form.formState.errors;

  const onSubmit = async (data: z.infer<typeof FeedbackFormSchema>) => {
    toast.success('Вы успешно оставили отклик!');
    console.log(data);
    const payload = {
        workId,
        description: data.description,
    }
    toast.loading("Отправка отклика...");
    try {
        const response = await createFeedback(payload).unwrap();
        form.reset();
        toast.success('Отклик успешно оставлен!')
        console.log(response);
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
  }

  useEffect(() => {
    if (!isErrorsShown) return;
    for (const field in errors) {
      const errorMessage = errors[field]?.message;
      if (errorMessage) {
        toast.error(errorMessage, { position: 'top-center' });
      }
    }
    setIsErrorsShown(false);
  }, [isErrorsShown]);

  return (
    <Dialog modal={true} open={open} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={css.dialogContent}>
        <DialogHeader>
          <DialogTitle className={css.title}>
            <h1>Добавьте комментарий к вашему отклику!</h1>
          </DialogTitle>
        </DialogHeader>
        <Separator orientation="horizontal" decorative />
        <DialogFooter className={css.footer}>
          <Form {...form}>
            <form className={css.form} onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          className="min-h-72"
                          placeholder="🚀 Здравствуйте, меня зовут Антон, и я заинтересован в вашем заказе. У меня есть опыт работы в области..."
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
                <Button onClick={() => setIsErrorsShown(true)}>
                  Откликнуться
                </Button>
            </form>
          </Form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

'use client';
import css from './createOrder.module.scss';
import { useState, ChangeEvent, useEffect } from 'react';

import Page from '@/shared/containers/Page';
import { cn } from '@/shared/lib/utils';

import InfoBlock from './_components/InfoBlock/InfoBlock';
import NavBar from './_components/NavBar/NavBar';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';
import { Checkbox } from '@/shared/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';

import Image from 'next/image';

import { CreateOrderFormSchema } from './schema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useCreateOrderMutation } from '@/shared/redux/features/worksApi';

import paperClip from '@/../public/Paperclip.svg';
import { useGetCategoriesQuery } from '@/shared/redux/features/categoriesApi';

type FieldErrors = {
  [key: string]: any | undefined;
};

export default function CreateOrderStepOne(): JSX.Element {
  const [create, { isLoading }] = useCreateOrderMutation();
  const { data: categoryData } = useGetCategoriesQuery();
  const categories = categoryData?.result;
  const [activeTab, setActiveTab] = useState<'step1' | 'step2'>('step1');
  const [isPriceDisabled, setIsPriceDisabled] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const t = useTranslations(
    activeTab === 'step1'
      ? 'createOrderStepOne.form'
      : 'createOrderStepTwo.form',
  );
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const imageUrl = reader.result;
          setUploadedImage(imageUrl);
          form.setValue('images', [file]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const form = useForm<z.infer<typeof CreateOrderFormSchema>>({
    resolver: zodResolver(CreateOrderFormSchema),
    defaultValues: {
      title: '',
      description: '',
      images: [],
      cost: 0,
      deadline: '',
      categoryNames: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof CreateOrderFormSchema>) => {
    const price = isPriceDisabled ? 0 : data.cost;
    const payload = {
      title: data.title,
      description: data.description,
      images: data.images,
      cost: price,
      deadline: data.deadline,
      categoryNames: data.categoryNames.split(','),
    };
    toast.loading('Создание заказа..');
    setButtonDisabled(true);
    console.log('Payload:', payload);
    try {
      //@ts-ignore
      const response = await create(payload).unwrap();
      form.reset();
      toast.success('Заказ успешно создан!');
      console.log('send payload:', payload);
      setButtonDisabled(false);
    } catch (e: any) {
      if (e.data && e.data.message) {
        toast.error(e.data.message);
        setButtonDisabled(true);
      } else {
        toast.error('Упсс, возникла ошибка...');
        setButtonDisabled(true);
      }
      console.error(e);
    } finally {
      toast.dismiss();
    }
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
    <Page>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={css.wrapper}>
          <NavBar
            active={activeTab}
            switchToFirstTab={() => setActiveTab('step1')}
            switchToSecondTab={() => setActiveTab('step2')}
          />
          <main>
            <InfoBlock active={activeTab} />
            {activeTab === 'step1' && (
              <div className={css.projectInfo}>
                <div
                  className={cn(
                    css.infoBlock,
                    'bg-light-main-colored-20 dark:bg-dark-main-colored-20',
                  )}
                >
                  <div>
                    <div className="bg-light-text-colored">
                      <span className="text-light-text-primary dark:text-light-main-bg-primary">
                        i
                      </span>
                    </div>
                    <p className="text-light-text-colored">
                      {t('infoSection.title')}
                    </p>
                  </div>
                  <Link className="text-light-text-colored" href={'#'}>
                    {t('infoSection.link')}
                  </Link>
                </div>
                <div className={css.form}>
                  <h3>{t('title.title')}</h3>
                  <h4 className="text-dark-text-main-50">
                    {t('title.description')}
                  </h4>
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={t('title.placeholder')}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Link className="text-light-text-colored" href={'#'}>
                    {t('title.link')}
                  </Link>
                </div>
                <div className={css.form}>
                  <h3>{t('description.title')}</h3>
                  <h4 className="text-dark-text-main-50">
                    {t('description.description')}
                  </h4>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            className="min-h-52"
                            placeholder={t('description.placeholder')}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Link className="text-light-text-colored" href={'#'}>
                    {t('description.link')}
                  </Link>
                  <label
                    className={cn(
                      css.uploadFile,
                      'bg-light-main-colored-20 dark:bg-dark-main-colored-20',
                    )}
                  >
                    <div>{t('uploadFile.title')}</div>
                    <Image
                      src={paperClip}
                      alt="Paper clip"
                      width={20}
                      height={20}
                    />
                    <input
                      type="file"
                      multiple
                      accept="image/jpeg, image/png, image/jpg"
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>
                <div className={css.nextBtn}>
                  <Button onClick={() => setActiveTab('step2')}>
                    {t('btn')}
                  </Button>
                </div>
              </div>
            )}
            {activeTab === 'step2' && (
              <div className={css.projectInfo}>
                <div className={css.form}>
                  <h3>{t('price.title')}</h3>
                  <h4 className="text-dark-text-main-50">
                    {t('price.description')}
                  </h4>
                  <FormField
                    control={form.control}
                    name="cost"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder={t('price.placeholder')}
                            {...field}
                            onChange={(e) => {
                              const value = parseInt(e.target.value, 10);
                              field.onChange(value);
                            }}
                            disabled={isPriceDisabled}
                            value={isPriceDisabled ? 0 : field.value}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className={css.checkbox}>
                    <Checkbox
                      checked={isPriceDisabled}
                      //@ts-ignore
                      onCheckedChange={(checked) => setIsPriceDisabled(checked)}
                    />
                    <p className="text-light-text-main-50 dark:text-light-text-main-50">
                      {t('price.checkbox')}
                    </p>
                  </div>
                  <Link className="text-light-text-colored" href={'#'}>
                    {t('price.link')}
                  </Link>
                </div>
                <div className={css.form}>
                  <h3>{t('deadline.title')}</h3>
                  <FormField
                    control={form.control}
                    name="deadline"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder={t('price.placeholder')}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <h4 className="text-dark-text-main-50">
                    {t('deadline.description')}
                  </h4>
                  <Link className="text-light-text-colored" href={'#'}>
                    {t('deadline.link')}
                  </Link>
                </div>
                <div className={css.form}>
                  <h3>{t('category.title')}</h3>
                  <FormField
                    control={form.control}
                    name="categoryNames"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger
                              className={cn(
                                css.selectTrigger,
                                'dark:bg-dark-main-colored-20',
                              )}
                            >
                              <SelectValue placeholder={t('category.title')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="dark:bg-dark-main-colored-20">
                            {categories?.map((category) => (
                              <SelectItem
                                key={category.id}
                                value={category.name}
                              >
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <div className={css.createBtn}>
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
                    disabled={buttonDisabled}
                  >
                    {t('btn')}
                  </Button>
                </div>
              </div>
            )}
          </main>
        </form>
      </Form>
    </Page>
  );
}

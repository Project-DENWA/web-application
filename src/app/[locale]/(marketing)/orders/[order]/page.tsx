'use client';
import css from './order.module.scss';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { cn } from '@/shared/lib/utils';

import SectionHeader from '@/shared/ui/sectionHeader/SectionHeader';
import Page from '@/shared/containers/Page';
import UserInfo from './_components/UserInfo/UserInfo';
import Requirement from './_components/UserInfo/Requirement/Requirement';
import RelatedTasks from './_components/RelatedTasks/RelatedTasks';

import { useGetOrderQuery } from '@/shared/redux/features/worksApi';

export default function Order({ params }: { params: { order: string } }) {
  const locale = useLocale();

  const breadcrumb_data = [
    { link: '/', title: 'Главная' },
    { link: `/${locale}/orders`, title: 'Заказы' },
    { link: '', title: 'Подробное описание заказа' },
  ];

  const { data: order, isSuccess } = useGetOrderQuery({ id: params.order });

  if (isSuccess && order) {
    return (
      <Page>
        <div className={css.wrapper}>
          <div className={css.title}>
            <SectionHeader
              title={order.result.name}
              breadcrumbs={breadcrumb_data}
            />
          </div>
          <div className={css.main}>
            <UserInfo
              user={order.result.user}
              views={order.result.views}
              feedbacksAmount={order.result.feedbacksAmount}
              cost={order.result.cost}
              deadline={order.result.deadline}
            />
            <div className={cn(css.separator, 'bg-light-text-main-50')}></div>
            <Requirement
              description={order.result.description}
              createdAt={order.result.createdAt}
            />
            <div className={cn(css.separator, 'bg-light-text-main-50')}></div>
            <RelatedTasks />
          </div>
        </div>
      </Page>
    );
  }
}

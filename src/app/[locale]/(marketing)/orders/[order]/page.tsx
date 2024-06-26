'use client';
import css from './order.module.scss';

import { useLocale } from 'next-intl';
import { cn } from '@/shared/lib/utils';

import SectionHeader from '@/shared/ui/sectionHeader/SectionHeader';
import Page from '@/shared/containers/Page';
import UserInfo from './_components/UserInfo/UserInfo';
import Requirement from './_components/UserInfo/Requirement/Requirement';
import RelatedTasks from './_components/RelatedTasks/RelatedTasks';

import { useGetOrderQuery, useAddViewMutation } from '@/shared/redux/features/worksApi';
import { useEffect } from 'react';
import OrderPageSkeleton from './skeleton';

export default function Order({ params }: { params: { order: string } }) {
  const locale = useLocale();

  const breadcrumb_data = [
    { link: '/', title: 'Главная' },
    { link: `/${locale}/orders`, title: 'Заказы' },
    { link: '', title: 'Подробное описание заказа' },
  ];

  const { data: order, isSuccess, isLoading } = useGetOrderQuery({ id: params.order });
  const [addViewMutation] = useAddViewMutation();

  useEffect(() => {
    if (order?.result.id) {
      addViewMutation({ workId: order.result.id });
    }
  }, [order]);

  if (isLoading) {
    return <OrderPageSkeleton />
  }

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
              rating={order.result.rating}
              deadline={order.result.deadline}
              orderId={params.order}
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

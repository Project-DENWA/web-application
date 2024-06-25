'use client';
import css from './tasksContent.module.scss';

import TasksFilter from '../TasksFilter/TasksFilter';
import TasksCardSkeleton from '../TasksCard/skeleton';

import dynamic from 'next/dynamic';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/shared/ui/pagination';

import { useGetWorksQuery } from '@/shared/redux/features/worksApi';

import { OrderResult } from '../../[order]/Iordet';
import PageLoader from '../../../_components/PageLoader/PageLoader';

const TasksCard = dynamic(() => import('../TasksCard/TasksCard'), {
  loading: () => <TasksCardSkeleton />,
  ssr: false,
});

export default function TasksContent(): JSX.Element {
  const { data, isLoading } = useGetWorksQuery({
    sort: 'RECENTLY',
    page: 1,
    pageSize: 10,
  });
  //@ts-ignore
  const orders: OrderResult[] = data?.result || [];
  return (
    <div className={css.wrapper}>
      <TasksFilter />
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className={css.cards}>
          {orders.length > 0 ? (
            orders.map((order: OrderResult) => (
              <TasksCard
                id={order.id}
                key={order.id}
                title={order.name}
                description={order.description}
                cost={order.cost}
                deadline={order.deadline}
                reply={order.feedbacksAmount}
                views={order.views}
                createdAt={order.createdAt}
              />
            ))
          ) : (
            <div>No tasks found.</div>
          )}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

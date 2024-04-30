'use client';
import css from './tasksContent.module.scss';
import TasksFilter from '../TasksFilter/TasksFilter';
import { useGetWorksQuery } from '@/shared/redux/features/worksApi';
import dynamic from 'next/dynamic';
import TasksCardSkeleton from '../TasksCard/skeleton';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/pagination';

const TasksCard = dynamic(() => import('../TasksCard/TasksCard'), {
  loading: () => <TasksCardSkeleton />,
  ssr: false,
});

export default function TasksContent(): JSX.Element {
  const {
    data: tasks = [],
    error,
    isLoading,
  } = useGetWorksQuery({
    sort: 'relevant',
    page: 1,
    pageSize: 10,
  });

  return (
    <div className={css.wrapper}>
      <TasksFilter />
      <div className={css.cards}>
        {tasks.map((task, index) => (
          <TasksCard
            key={task.id}
            title={task.name}
            description={task.description}
            cost={task.cost}
            deadline={task.deadline}
            reply={1}
            views={task.views}
            createdAt={task.createdAt}
          />
        ))}
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
    </div>
  );
}

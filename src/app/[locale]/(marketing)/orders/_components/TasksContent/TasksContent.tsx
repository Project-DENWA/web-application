'use client'
import css from './tasksContent.module.scss';
import TasksFilter from '../TasksFilter/TasksFilter';
import TasksCard from '../TasksCard/TasksCard';
import { useGetWorksQuery } from '@/shared/redux/features/worksApi';
export default function TasksContent(): JSX.Element {

  const { data: tasks = [], error, isLoading } = useGetWorksQuery({
    sort: 'relevant',
    page: 1,
    pageSize: 10,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
      </div>
    </div>
  );
}

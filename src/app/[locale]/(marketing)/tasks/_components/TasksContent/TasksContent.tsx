import css from './tasksContent.module.scss';
import TasksFilter from '../TasksFilter/TasksFilter';
import TasksCard from '../TasksCard/TasksCard';
import { taskItems } from '../../taskItems';

export default function TasksContent(): JSX.Element {
  return (
    <div className={css.wrapper}>
      <TasksFilter />
      <div className={css.cards}>
        {taskItems.map((task, index: number) => (
          <TasksCard
            key={index}
            title={task.title}
            description={task.description}
            price={task.price}
            reply={task.reply}
            views={task.views}
            deadline={task.deadline}
            data={task.data}
            time={task.time}
          />
        ))}
      </div>
    </div>
  );
}

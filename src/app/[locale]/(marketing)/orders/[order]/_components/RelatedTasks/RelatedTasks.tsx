import css from './RelatedTasks.module.scss';

import { taskItems } from '../../../taskItems';
import TasksCard from '../../../_components/TasksCard/TasksCard';

export default function RelatedTasks(): JSX.Element {
  return (
    <div className={css.relatedTasks}>
      <h3>Похожие заказы</h3>
      <div className={css.cards}>
        {taskItems.map((task, index) => (
          <TasksCard
            key={index}
            title={task.title}
            description={task.description}
            cost={task.price}
            createdAt={task.data}
            id={'Залупа'}
            reply={1}
            views={1}
          />
        ))}
      </div>
    </div>
  );
}

'use client'
import { useState, useEffect } from 'react';
import css from './tasksContent.module.scss';
import TasksFilter from '../TasksFilter/TasksFilter';
import TasksCard from '../TasksCard/TasksCard';
import { Task } from './ITask';

export default function TasksContent(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://xm5pqtm1-5000.euw.devtunnels.ms/works');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        if (data.ok) {
          setTasks(data.result);
        } else {
          throw new Error('Response not okay');
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={css.wrapper}>
      <TasksFilter />
      <div className={css.cards}>
        {tasks.map((task, index) => (
          <TasksCard
            key={task.id}
            title={task.meta.name}
            description={task.meta.description}
            price={task.cost}
            deadline={task.deadline}
            reply={1}
            time={1}
            views={1}
          />
        ))}
      </div>
    </div>
  );
}

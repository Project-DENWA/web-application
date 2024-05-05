import css from './Requirement.module.scss';
import { cn } from '@/shared/lib/utils';

import useFormatCreatedAt from '@/shared/lib/hooks/useFormatDate';

type Props = {
  description: string;
  createdAt: string;
}

export default function Requirement({description, createdAt}: Props): JSX.Element {
  const dateOfCreate = useFormatCreatedAt(createdAt)
  return (
    <div className={css.wrapper}>
      <div className={css.requirement}>
        <h3>Требование</h3>
        <p>
          {description}
        </p>
      </div>
      <div className={cn(css.date, 'text-light-text-main-50')}>
        <h4>{dateOfCreate.date}</h4>
        <h4>|</h4>
        <h4>{dateOfCreate.time}</h4>
      </div>
    </div>
  );
}

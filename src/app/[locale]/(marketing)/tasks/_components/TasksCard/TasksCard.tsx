import { MessageCircleMore, Eye, Clock } from 'lucide-react';
import css from './TasksCard.module.scss';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface TaskProps {
  title: string;
  description: string;
  price: number;
  reply: number;
  views: number;
  deadline: number;
  data: string;
  time: string;
}

export default function TasksCard({
  title,
  description,
  price,
  reply,
  views,
  deadline,
  data,
  time,
}: TaskProps): JSX.Element {
  const wrapperClass = cn(css.wrapper, 'bg-light-main-colored-10 dark:bg-dark-main-colored-10',);
  const t = useTranslations('tasks.card')
  return (
    <div className={wrapperClass}>
      <div className={css.header}>
        <Link href={'#'}>{title}</Link>
        <h4>{price}₽</h4>
      </div>
      <div>
        <h5>{description}</h5>
      </div>
      <div className={css.stats}>
        <div className={css.parameters}>
          <div>
            <MessageCircleMore size={22} />
            <h6>
              {reply} <span className="text-light-text-main-50">{t('reply')}</span>
            </h6>
          </div>
          <div>
            <Eye size={22} />
            <h6>
              {views}{' '}
              <span className="text-light-text-main-50">{t('views')}</span>
            </h6>
          </div>
          <div>
            <Clock size={22} />
            <span className="text-light-text-main-50">{t('per')} {deadline} {t('day')}</span>
          </div>
        </div>
        <div className={cn(css.data, 'text-light-text-main-50')}>
          <h6>{data}</h6>
          <h1>{time}</h1>
        </div>
      </div>
    </div>
  );
}

import { MessageCircleMore, Eye, Clock } from 'lucide-react';
import css from './TasksCard.module.scss';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import useFormatPrice from '@/shared/lib/hooks/useFormatPrice';
import useFormatCreatedAt from '@/shared/lib/hooks/useFormatDate';

interface TaskProps {
  id: string;
  title: string;
  description: string;
  cost: string;
  reply: number;
  views: number;
  deadline?: Date;
  createdAt: string;
}

export default function TasksCard({
  id,
  title,
  description,
  cost,
  reply,
  views,
  deadline,
  createdAt,
}: TaskProps): JSX.Element {
  const wrapperClass = cn(
    css.wrapper,
    'bg-light-main-colored-10 dark:bg-dark-main-colored-10',
  );
  const locale = useLocale();
  const t = useTranslations('tasks.card');
  const { value: formattedPrice, isNumber } = useFormatPrice(parseFloat(cost));
  const formatCreatedAt = useFormatCreatedAt(createdAt);
  return (
    <div className={wrapperClass}>
      <div className={css.header}>
        <Link href={`/${locale}/orders/${id}`}>{title}</Link>
        <h4>
          {formattedPrice} {isNumber && '₽'}
        </h4>
      </div>
      <div>
        <h5>{description}</h5>
      </div>
      <div className={css.stats}>
        <div className={css.parameters}>
          <div>
            <MessageCircleMore size={22} />
            <h6>
              {reply}{' '}
              <span className="text-light-text-main-50">{t('reply')}</span>
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
            <span className="text-light-text-main-50">
              {t('per')} {deadline?.toLocaleString()}
            </span>
          </div>
        </div>
        <div className={cn(css.data, 'text-light-text-main-50')}>
          <h6>{formatCreatedAt.date}</h6>
          <h1>{formatCreatedAt.time}</h1>
        </div>
      </div>
    </div>
  );
}

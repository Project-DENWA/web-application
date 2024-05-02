import css from './CategoryCard.module.scss';
import { cn } from '@/shared/lib/utils';

type Props = {
  category: string;
};

export default function CategoryCard({ category }: Props): JSX.Element {
  return (
    <div className={cn(css.wrapper, 'border-light-main-dark')}>
      <p>{category}</p>
    </div>
  );
}

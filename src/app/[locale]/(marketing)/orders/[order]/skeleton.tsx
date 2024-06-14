import { LoadingSpinner } from '@/shared/ui/loading-spinner';
import css from './order.module.scss';
import { cn } from '@/shared/lib/utils';

export default function OrderPageSkeleton(): JSX.Element {
  return (
    <div className={cn(css.loadingWrapper, 'bg-light-main-bg-main dark:bg-dark-main-bg-main')}>
      <LoadingSpinner size={36}/>
    </div>
  );
}

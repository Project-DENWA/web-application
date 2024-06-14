import { LoadingSpinner } from '@/shared/ui/loading-spinner';
import css from './PageLoader.module.scss'
export default function PageLoader(): JSX.Element {
  return (
    <div className={css.wrapper}>
        <LoadingSpinner size={32}/>
    </div> 
  );
}

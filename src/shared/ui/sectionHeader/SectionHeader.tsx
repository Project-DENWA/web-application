import css from './sectionHeader.module.scss';
import { cn } from '@/shared/lib/utils';
import Breadcrumbs from '../breadcrumbs/BreadCrumbs';

interface Breadcrumbs {
  title: string;
  link: string;
}

type Props = {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumbs[];
  children?: React.ReactNode;
  separator?: boolean;
};

export default function SectionHeader({
  breadcrumbs = [],
  title,
  children,
  description,
  separator,
}: Props): React.ReactElement {
  return (
    <div className={css.wrapper}>
      <h1>{title}</h1>
      <Breadcrumbs data={breadcrumbs} />
      <p className={cn(css.description, 'text-dark-text-main-50')}>
        {description}
      </p>
      {children}
      {separator && (
        <div className={cn(css.separator, 'bg-light-text-main-50')}></div>
      )}
    </div>
  );
}

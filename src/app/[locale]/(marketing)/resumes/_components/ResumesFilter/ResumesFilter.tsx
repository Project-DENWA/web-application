import css from './ResumesFilter.module.scss';
import { cn } from '@/shared/lib/utils';
import { useTranslations } from 'next-intl';
import { categories } from './categoriesItems';
import AccordionWithCheckboxes from '@/shared/ui/accordionWithCheckboxes/AccordionWithCheckboxes';
import Experience from '../forms/Experience';
import Verification from '../forms/Verification';

export default function ResumesFilter(): JSX.Element {
  const t = useTranslations('resumes.filter');
  const wrapperClass = cn(css.wrapper,'bg-light-main-colored-10 dark:bg-dark-main-colored-10',);
  const elementClass = cn(css.element,'border-b-light-main-colored-20 border-b-[1px] dark:border-b-dark-main-colored-20');
  return (
    <aside className={wrapperClass}>
      <div className={elementClass}>
        <h2>{t('title')}</h2>
      </div>
      <div
        className={elementClass}>
        <AccordionWithCheckboxes
          title={t('category')}
          categories={categories}
        />
      </div>
      <div className={elementClass}>
        <Experience />
      </div>
      <div className={elementClass}>
        <Verification />
      </div>
    </aside>
  );
}

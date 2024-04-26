import css from './TasksFilter.module.scss';
import { cn } from '@/shared/lib/utils';
import { categories } from './categoriesItems';
import { Slider } from '@/shared/ui/slider';
import AccordionWithCheckboxes from '@/shared/ui/accordionWithCheckboxes/AccordionWithCheckboxes';
import { useTranslations } from 'next-intl';
export default function TasksFilter(): JSX.Element {
  const t = useTranslations('tasks.filter')
  const wrapperClass = cn(css.wrapper,'bg-light-main-colored-10 dark:bg-dark-main-colored-10');
  const elementClass = cn(css.element,'border-b-light-main-colored-20 border-b-[1px]');
  
  const dataItems = [
    {
      name: t('dataSort.subTitle'),
      subcategories: [
        { name: t('dataSort.24hour')},
        { name: t('dataSort.3days')},
        { name: t('dataSort.7days')},
        { name: t('dataSort.1months')},
        { name: t('dataSort.3months')},
      ],
    },
  ];

  return (
    <aside className={wrapperClass}>
      <div className={elementClass}>
        <h2>{t('title')}</h2>
      </div>
      <div
        className={cn(
          css.element,
          'border-b-light-main-colored-20 border-b-[1px]',
        )}
      >
        <AccordionWithCheckboxes title={t('category')} categories={categories} />
      </div>
      <div
        className={cn(
          css.element,
          'border-b-light-main-colored-20 border-b-[1px]',
        )}
      >
        <div className={css.slider}>
          <Slider defaultValue={[33]} max={100} step={1} />
          <div className={cn(css.priceRange, 'text-light-text-main-50')}>
            <p>0</p>
            <p>250</p>
            <p>500</p>
            <p>750</p>
            <p>1000</p>
          </div>
        </div>
      </div>
      <div
        className={cn(
          css.element,
          'border-b-light-main-colored-20 border-b-[1px]',
        )}
      >
        <AccordionWithCheckboxes
          title={t('dataSort.title')}
          categories={dataItems}
        />
      </div>
    </aside>
  );
}

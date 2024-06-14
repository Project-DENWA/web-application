import css from './tasks.module.scss';
import Page from '@/shared/containers/Page';
import SectionHeader from '@/shared/ui/sectionHeader/SectionHeader';
import TasksContent from './_components/TasksContent/TasksContent';
import { useTranslations } from 'next-intl';

export default function Orders(): JSX.Element {
  const t = useTranslations('tasks.sectionHeader')

  const breadcrumb_data = [
    { link: '/', title: t('breadcrumb.firstLink') },
    { link: '', title: t('breadcrumb.secondLink') },
  ];
  return (
    <Page>
      <div className={css.wrapper}>
        <div className={css.title}>
          <SectionHeader title={t('title')} breadcrumbs={breadcrumb_data} />
        </div>
        <div>
          <TasksContent />
        </div>
      </div>
    </Page>
  );
}

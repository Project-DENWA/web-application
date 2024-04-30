import css from './createResume.module.scss';
import SectionHeader from '@/shared/ui/sectionHeader/SectionHeader';
import ResumeForm from './_components/forms/resume-form';
import { useTranslations } from 'next-intl';

import Page from '@/shared/containers/Page';

export default function CreateResume() {
  const t = useTranslations('createResume');

  const breadcrumb_data = [
    { link: '/', title: t('header.breadcrumbs.main') },
    { link: '', title: t('header.breadcrumbs.current') },
  ];

  return (
    <Page>
      <main className={css.wrapper}>
        <div className={css.title}>
          <SectionHeader
            title={t('header.title')}
            breadcrumbs={breadcrumb_data}
            separator
            description={t('header.description')}
          />
        </div>
        <div className={css.content}>
          <ResumeForm />
        </div>
      </main>
    </Page>
  );
}

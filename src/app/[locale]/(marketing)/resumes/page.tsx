import css from './resumes.module.scss';
import Page from '@/shared/containers/Page';
import SectionHeader from '@/shared/ui/sectionHeader/SectionHeader';
import ResumesContent from './_components/ResumesContent/page';
import { useTranslations } from 'next-intl';

export default function Resumes() {
  const t = useTranslations('resumes');

  const breadcrumb_data = [
    { link: '/', title: t('header.breadcrumbs.main') },
    { link: '', title: t('header.breadcrumbs.current') },
  ];
  return (
    <Page>
      <div className={css.wrapper}>
        <div className={css.title}>
          <SectionHeader title={t('header.title')} breadcrumbs={breadcrumb_data} />
        </div>
        <div>
            <ResumesContent />
        </div>
      </div>
    </Page>
  );
}

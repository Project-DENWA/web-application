import css from './forms.module.scss';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';

export default function ProjectInfo(): JSX.Element {
  const t = useTranslations('createOrder.form');
  return (
    <div className={css.projectInfo}>
      <div className={cn(css.infoBlock, 'bg-dark-main-colored-20')}>
        <div>
          <div className="bg-light-text-colored">
            <span className="text-light-text-primary dark:text-light-main-bg-primary">
              i
            </span>
          </div>
          <p className="text-light-text-colored">{t('infoSection.title')}</p>
        </div>
        <Link className="text-light-text-colored" href={'#'}>
          {t('infoSection.link')}
        </Link>
      </div>
      <div className={css.form}>
        <h3>{t('title.title')}</h3>
        <h4 className="text-dark-text-main-50">{t('title.description')}</h4>
        <Input type="text" placeholder={t('title.placeholder')} />
        <Link className="text-light-text-colored" href={'#'}>
          {t('title.link')}
        </Link>
      </div>
      <div className={css.form}>
        <h3>{t('description.title')}</h3>
        <h4 className="text-dark-text-main-50">
          {t('description.description')}
        </h4>
        <Textarea
          className="min-h-52"
          placeholder={t('description.placeholder')}
        />
        <Link className="text-light-text-colored" href={'#'}>
          {t('description.link')}
        </Link>
        <Button variant={'default'}>{t('uploadFile.title')}</Button>
      </div>
    </div>
  );
}

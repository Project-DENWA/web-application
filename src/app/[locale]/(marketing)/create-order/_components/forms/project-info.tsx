import css from './forms.module.scss';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';
import { Checkbox } from '@/shared/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

type Props = {
  active: 'step1' | 'step2';
};

export function ProjectInfo({ active }: Props): JSX.Element {
  const t = useTranslations(
    active === 'step1' ? 'createOrderStepOne.form' : 'createOrderStepTwo.form',
  );
  const renderStepContent = () => {
    if (active === 'step1') {
      return (
        <div className={css.projectInfo}>
          <div className={cn(css.infoBlock, 'bg-dark-main-colored-20')}>
            <div>
              <div className="bg-light-text-colored">
                <span className="text-light-text-primary dark:text-light-main-bg-primary">
                  i
                </span>
              </div>
              <p className="text-light-text-colored">
                {t('infoSection.title')}
              </p>
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
    } else if (active === 'step2') {
      return (
        <div className={css.projectInfo}>
          <div className={css.form}>
            <h3>{t('price.title')}</h3>
            <h4 className="text-dark-text-main-50">{t('price.description')}</h4>
            <Input type="text" placeholder={t('price.placeholder')} />
            <div className={css.checkbox}>
              <Checkbox defaultChecked />
              <p className="text-light-text-main-50 dark:text-light-text-main-50">
                {t('price.checkbox')}
              </p>
            </div>
            <Link className="text-light-text-colored" href={'#'}>
              {t('price.link')}
            </Link>
          </div>
          <div className={css.form}>
            <h3>{t('deadline.title')}</h3>
            <Input type="date" placeholder={t('price.placeholder')} />
            <h4 className="text-dark-text-main-50">
              {t('deadline.description')}
            </h4>
            <div className={css.checkbox}>
              <Checkbox defaultChecked />
              <p className="text-light-text-main-50 dark:text-light-text-main-50">
                {t('deadline.checkbox')}
              </p>
            </div>
            <Link className="text-light-text-colored" href={'#'}>
              {t('deadline.link')}
            </Link>
          </div>
          <div className={css.form}>
            <h3>{t('category.title')}</h3>
            <Select>
              <SelectTrigger className={css.selectTrigger}>
                <SelectValue placeholder={t('category.title')}/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Веб-разработка</SelectItem>
                <SelectItem value="dark">Мобильная-разработка</SelectItem>
                <SelectItem value="system">Геймдев</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      );
    }
  };

  return <div>{renderStepContent()}</div>;
}

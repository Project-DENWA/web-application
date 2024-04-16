import css from './NavBar.module.scss';
import arrow from '@/../public/right-arrow-colored.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
export default function NavBar(): JSX.Element {
  const t = useTranslations('createOrder.navBar');
  return (
    <nav className={css.wrapper}>
      <div className={css.elements}>
        <div className="bg-light-text-colored text-light-text-primary dark:text-light-main-bg-primary">
          1
        </div>
        <p>{t('firstTitle')}</p>
        <Image alt="right arrow" src={arrow} width={8} height={8} />
        <div className="bg-light-text-colored text-light-text-primary dark:text-light-main-bg-primary">
          2
        </div>
        <p>{t('secondTitle')}</p>
      </div>
      <div>
        <p className="text-dark-text-main-50">{t('exit')}</p>
      </div>
    </nav>
  );
}

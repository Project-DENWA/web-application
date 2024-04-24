'use client'
import css from './NavBar.module.scss';
import arrow from '@/../public/right-arrow-colored.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

type Props = {
  active: 'step1' | 'step2';
  switchToFirstTab : () => void;
  switchToSecondTab : () => void;
};

export default function NavBar({ active, switchToFirstTab, switchToSecondTab }: Props): JSX.Element {
  const t = useTranslations('createOrderStepOne.navBar');
  return (
    <nav className={css.wrapper}>
      <div className={css.elements}>
        <div className="bg-light-text-colored text-light-text-primary dark:text-light-main-bg-primary">
          1
        </div>
        <p onClick={switchToFirstTab} className={active === 'step1' ? 'text-dark-text-colored' : ''}>
            {t('firstTitle')}
        </p>
        <Image alt="right arrow" src={arrow} width={8} height={8} />
        <div className="bg-light-text-colored text-light-text-primary dark:text-light-main-bg-primary">
          2
        </div>
        <p onClick={switchToSecondTab} className={active === 'step2' ? 'text-dark-text-colored' : ''}>
            {t('secondTitle')}
        </p>
      </div>
      <div>
        <p className="text-dark-text-main-50">{t('exit')}</p>
      </div>
    </nav>
  );
}

'use client'
import css from './NavBar.module.scss';
import arrow from '@/../public/right-arrow-colored.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

type Props = {
  active: 'step1' | 'step2';
};

export default function NavBar({ active }: Props): JSX.Element {
  const t = useTranslations('createOrderStepOne.navBar');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <nav className={css.wrapper}>
      <div className={css.elements}>
        <div className="bg-light-text-colored text-light-text-primary dark:text-light-main-bg-primary">
          1
        </div>
        <Link className={active === 'step1' ? 'text-dark-text-colored' : ''} href={`/${locale}/create-order/step-1`}>
            {t('firstTitle')}
        </Link>
        <Image alt="right arrow" src={arrow} width={8} height={8} />
        <div className="bg-light-text-colored text-light-text-primary dark:text-light-main-bg-primary">
          2
        </div>
        <Link className={active === 'step2' ? 'text-dark-text-colored' : ''} href={`/${locale}/create-order/step-2`}>
            {t('secondTitle')}
        </Link>
      </div>
      <div>
        <p className="text-dark-text-main-50">{t('exit')}</p>
      </div>
    </nav>
  );
}

import css from './InfoBlock.module.scss';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Plug from '@/../public/Plug.png';

type Props = {
  active: 'step1' | 'step2';
};

export default function InfoBlock({ active }: Props): JSX.Element {
  const t = useTranslations(
    active === 'step1'
      ? 'createOrderStepOne.infoBlock'
      : 'createOrderStepTwo.infoBlock',
  );
  return (
    <div className={css.wrapper}>
      <h1>{t('title')}</h1>
      <h2>{t('description')}</h2>
      <Link href={'#'} className="text-light-text-colored">
        {t('link')}
      </Link>
      <Image alt="Illustration" src={Plug} width={340} height={340} />
    </div>
  );
}

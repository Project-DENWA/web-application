import css from '../settings.module.scss';
import Image from 'next/image';
import questionMark from '@/../public/questionMark.svg';
import { useTranslations } from 'next-intl';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip';

import ModalTrigger from '../_components/ModalTrigger';
export default function TwoFa(): JSX.Element {
  const t = useTranslations('settings.account.2fa');

  return (
    <div className={css.twoFaWrapper}>
      <div>
        <div>
          <h3>{t('title')}</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={questionMark}
                  alt="Question mark"
                  width={18}
                  height={18}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className={css.tooltip}>{t('tooltip')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-light-text-main-50">{t('description')}</p>
      </div>
     <ModalTrigger />
    </div>
  );
}

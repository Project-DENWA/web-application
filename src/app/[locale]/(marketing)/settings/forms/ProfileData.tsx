'use client'
import Image from 'next/image';
import questionMark from '@/../public/questionMark.svg';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Button } from '@/shared/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/shared/ui/tooltip';
import css from '../settings.module.scss';
import { useTranslations } from 'next-intl';
export default function ProfileData() {
    const t = useTranslations('settings')
  return (
    <>
      <div className={css.editName}>
        <h4> {t('profile.fullName')}</h4>
        <Input placeholder={t('profile.fullNamePlaceholder')} />
      </div>
      <div className={css.editBio}>
        <div>
          <h4> {t('profile.bio')}</h4>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={questionMark}
                  alt="Question mark"
                  width={16}
                  height={16}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('profile.tooltip')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Textarea placeholder={t('profile.bioPlaceholder')} />
      </div>
      <div>
        <Button type="submit"> {t('profile.textBtn')}</Button>
      </div>
    </>
  );
}

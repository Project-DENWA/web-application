import css from './settings.module.scss';
import Image from 'next/image';
import questionMark from '@/../public/questionMark.svg';
import Avatar from '@/shared/ui/Avatar';
import Banner from '@/shared/ui/Banner';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Button } from '@/shared/ui/button';
import { TabsContent } from '@/shared/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip';
import { useTranslations } from 'next-intl';
export const Profile: React.FC = () => {
  const t = useTranslations('settings');
  return (
    <TabsContent value="profile" className={css.tabContent}>
      <form action="">
        <div>
          <h3>{t('profile.title')}</h3>
          <p className="text-light-text-main-50">{t('profile.description')}</p>
        </div>
        <div className={css.profileContainer}>
          <Avatar />
          <Banner />
        </div>
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
      </form>
    </TabsContent>
  );
};

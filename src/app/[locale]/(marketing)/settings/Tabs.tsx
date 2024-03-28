import css from './settings.module.scss';
import FormBanner from './forms/Banner';
import { TabsContent } from '@/shared/ui/tabs';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import FormAvatar from './forms/Avatar';
import ProfileData from './forms/ProfileData';
export const Profile: React.FC = () => {
  const t = useTranslations('settings');
  return (
    <TabsContent value="profile" className={css.tabContent}>
      <div className={css.form}>
        <div>
          <h3>{t('profile.title')}</h3>
          <p className="text-light-text-main-50">{t('profile.description')}</p>
        </div>
        <div className={css.profileContainer}>
          <FormAvatar />
          <FormBanner />
        </div>
        <ProfileData />
      </div>
    </TabsContent>
  );
};

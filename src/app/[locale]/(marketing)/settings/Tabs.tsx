import css from './settings.module.scss';
import FormBanner from './forms/Banner';
import { TabsContent } from '@/shared/ui/tabs';
import { useTranslations } from 'next-intl';
import FormAvatar from './forms/Avatar';
import ProfileData from './forms/profile-data';
import AccountData from './forms/account-data';
import ChangePassword from './forms/change-password';
import TwoFa from './forms/two-fa';
export const Profile: React.FC = () => {
  const t = useTranslations('settings.profile');
  return (
    <TabsContent value="profile" className={css.tabContent}>
      <div className={css.form}>
        <div>
          <h3>{t('title')}</h3>
          <p className="text-light-text-main-50">{t('description')}</p>
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

export const Account: React.FC = () => {
  const t = useTranslations('settings.account');
  return (
    <TabsContent value="account" className={css.tabContent}>
      <div className={css.accountForm}>
        <div className={css.item}>
          <div>
            <h3>{t('title')}</h3>
            <p className="text-light-text-main-50">{t('description')}</p>
          </div>
          <div>
            <AccountData />
          </div>
        </div>
        <div className={css.item}>
          <div>
            <h3>{t('pass.title')}</h3>
            <p className="text-light-text-main-50">{t('pass.description')}</p>
          </div>
          <div>
            <ChangePassword />
          </div>
        </div>
        <div className={css.item}>
          <TwoFa />
        </div>
      </div>
    </TabsContent>
  );
};

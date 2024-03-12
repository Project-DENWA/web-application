import css from './settings.module.scss'
import { cn } from '@/shared/lib/utils';
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { Profile } from './Tabs';
import { useTranslations } from 'next-intl';
export default function Settings() {
  const t = useTranslations("settings");
  return (
    <main className={cn(css.wrapper,"bg-light-main-bg-main dark:bg-dark-main-bg-main")}>
      <div className={css.content}>
        <div className={cn(css.title)}>
          <h1>{t("title")}</h1>
          <p className='text-dark-text-main-50'>{t("description")}</p>
          <div className={cn(css.separator, "bg-light-text-main-50")}></div>
        </div>
        <Tabs defaultValue='profile' className={css.tabsContainer}>
            <TabsList className={css.tabsList}>
              <TabsTrigger value='profile'>{t("profile.title")}</TabsTrigger>
              <TabsTrigger value='Account'>{t("account.title")}</TabsTrigger>
              <TabsTrigger value='Social'>{t("socialMedia.title")}</TabsTrigger>
              <TabsTrigger value='Notifications'>{t("notifications.title")}</TabsTrigger>
              <TabsTrigger value='Logout'>{t("logout.title")}</TabsTrigger>
            </TabsList>         
            <Profile/>
         </Tabs>

      </div>
    </main>
  );
}

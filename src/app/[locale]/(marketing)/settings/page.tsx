import css from './settings.module.scss'
import { cn } from '@/shared/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/ui/tabs"
import { Profile } from './Tabs';
export default function Settings() {
  return (
    <main className={cn(css.wrapper,"bg-light-main-bg-main dark:bg-dark-main-bg-main")}>
      <div className={css.content}>
        <div className={cn(css.title)}>
          <h1>Настройки</h1>
          <p className='text-dark-text-main-50'>Управляйте настройками своей учетной записи</p>
          <div className={cn(css.separator, "bg-light-text-main-50")}></div>
        </div>
        <Tabs defaultValue='profile' className={css.tabsContainer}>
            <TabsList className={css.tabsList}>
              <TabsTrigger value='profile'>Профиль</TabsTrigger>
              <TabsTrigger value='Account'>Аккаунт</TabsTrigger>
              <TabsTrigger value='Social'>Социальные сети</TabsTrigger>
              <TabsTrigger value='Notifications'>Уведомления</TabsTrigger>
              <TabsTrigger value='Logout'>Выйти из аккаунта</TabsTrigger>
            </TabsList>         
            <Profile/>
         </Tabs>

      </div>
    </main>
  );
}

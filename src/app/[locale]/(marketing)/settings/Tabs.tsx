import { TabsContent } from '@/shared/ui/tabs';
import css from './settings.module.scss';
import Image from 'next/image';
import Avatar from '@/shared/ui/Avatar';
import Banner from '@/shared/ui/Banner';
import { Input } from '@/shared/ui/input';
export const Profile: React.FC = () => {
  return (
    <TabsContent value="profile" className={css.tabContent}>
      <div>
        <h3>Профиль</h3>
        <p className="text-light-text-main-50">
          Настройте внешний вид своего профиля
        </p>
      </div>
      <div className={css.profileContainer}>
        <Avatar/>
        <Banner/>
      </div>
      <div className={css.editName}>
        <h4>Полное имя</h4>
        <Input placeholder='Веня Жикторов' />
      </div>
      <div className={css.editBio}>
        <h4>О себе</h4>
        <Input placeholder='🚀 Привет! Я опытный веб-разработчик с фокусом на создании уникальных и эффективных веб-сайтов. Мое портфолио включает в себя разнообразные проекты.' />
      </div>
    </TabsContent>
  );
};

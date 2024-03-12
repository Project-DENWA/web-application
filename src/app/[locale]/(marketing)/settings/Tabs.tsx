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

export const Profile: React.FC = () => {
  return (
    <TabsContent value="profile" className={css.tabContent}>
      <form action="">
        <div>
          <h3>Профиль</h3>
          <p className="text-light-text-main-50">
            Настройте внешний вид своего профиля
          </p>
        </div>
        <div className={css.profileContainer}>
          <Avatar />
          <Banner />
        </div>
        <div className={css.editName}>
          <h4>Полное имя</h4>
          <Input placeholder="Веня Жикторов" />
        </div>
        <div className={css.editBio}>
          <div>
            <h4>О себе</h4>
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
                  <p>Информация будет отображаться в вашем личном кабинете</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Textarea placeholder="🚀 Привет! Я опытный веб-разработчик с фокусом на создании уникальных и эффективных веб-сайтов. Мое портфолио включает в себя разнообразные проекты." />
        </div>
        <div>
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
    </TabsContent>
  );
};

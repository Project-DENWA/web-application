import css from './UserInfo.module.scss';

import Image from 'next/image';

import Performer from '@/../public/photosPerfomers/Perfomer1.png';
import { Clock, Eye, MessageCircleMore } from 'lucide-react';
import { Button } from '@/shared/ui/button';

export default function UserInfo(): JSX.Element {
  return (
    <div className={css.userInfo}>
      <div className={css.leftItems}>
        <div className={css.info}>
          <div className={css.avatar}>
            <Image alt="Avatar" src={Performer} width={60} height={60} />
          </div>
          <div className={css.userName}>
            <h2>Заказчик / Eugene</h2>
            <h5 className="text-light-text-main-50">
              Рейтинг: <span className="text-light-text-colored">4.3</span>
            </h5>
          </div>
        </div>
        <div className={css.stats}>
          <div>
            <Eye size={22} />
            <h3>300</h3>
            <h3 className="text-light-text-main-50">просмотров</h3>
          </div>
          <div>
            <MessageCircleMore size={22} />
            <h3>10</h3>
            <h3 className="text-light-text-main-50">откликов</h3>
          </div>
        </div>
      </div>
      <div className={css.rightItems}>
        <div className={css.terms}>
          <h2>10.000р</h2>
          <div>
            <Clock />
            <h4>24.05.2024</h4>
          </div>
        </div>
        <div>
          <Button>Откликнуться</Button>
        </div>
      </div>
    </div>
  );
}

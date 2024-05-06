import css from './UserInfo.module.scss';

import Image from 'next/image';

import Performer from '@/../public/photosPerfomers/Perfomer1.png';
import { Clock, Eye, MessageCircleMore } from 'lucide-react';
import { Button } from '@/shared/ui/button';

import FeedbackModalTrigger from '../FeedbackModal/FeedbackModalTrigger';

type Props = {
  user: {
    id: string;
    fullname: string;
  };
  views: number;
  feedbacksAmount: number;
  cost: string;
  deadline: Date;
  orderId: string;
};

export default function UserInfo({
  user,
  views,
  feedbacksAmount,
  cost,
  deadline,
  orderId
}: Props): JSX.Element {
  return (
    <div className={css.userInfo}>
      <div className={css.leftItems}>
        <div className={css.info}>
          <div className={css.avatar}>
            <Image alt="Avatar" src={Performer} width={60} height={60} />
          </div>
          <div className={css.userName}>
            <h2>Заказчик / {user.fullname}</h2>
            <h5 className="text-light-text-main-50">
              Рейтинг: <span className="text-light-text-colored">4.3</span>
            </h5>
          </div>
        </div>
        <div className={css.stats}>
          <div>
            <Eye size={22} />
            <h3>{views}</h3>
            <h3 className="text-light-text-main-50">просмотров</h3>
          </div>
          <div>
            <MessageCircleMore size={22} />
            <h3>{feedbacksAmount}</h3>
            <h3 className="text-light-text-main-50">откликов</h3>
          </div>
        </div>
      </div>
      <div className={css.rightItems}>
        <div className={css.terms}>
          <h2>{cost}₽ / Заказ</h2>
          <div>
            <Clock />
            <h4>{deadline.toLocaleString()}</h4>
          </div>
        </div>
        <div>
          <FeedbackModalTrigger id={orderId}/>
        </div>
      </div>
    </div>
  );
}

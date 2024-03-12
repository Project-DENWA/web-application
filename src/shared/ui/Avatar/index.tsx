import css from './Avatar.module.scss';
import Image from 'next/image';
import camera from '@/../public/account/Camera.svg';

export default function Avatar() {
  const responce_avatar: string = '';
  const default_avatar: string = '/account/AvatarForTest.png';
  return (
    <div className={css.wrapper}>
      <Image
        src={camera}
        alt="Camera icon"
        width={35}
        height={35}
        className={css.change}
      />

      <Image
        src={responce_avatar || default_avatar}
        alt="Avatar"
        width={104}
        height={104}
        className={css.avatar}
      />
    </div>
  );
}

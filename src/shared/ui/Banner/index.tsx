import css from './Banner.module.scss';
import Image from 'next/image';
import camera from '@/../public/account/Camera.svg';

export default function Banner() {
  const responce_banner: string = '';
  const default_banner: string = '/account/bannerForTest.jpg';
  return (
    <div
      className={css.banner}
      style={{ backgroundImage: `url("${responce_banner || default_banner}")` }}
    >
      <Image
        src={camera}
        alt="Camera icon"
        width={35}
        height={35}
        className={css.change}
      />
    </div>
  );
}

import css from './Banner.module.scss';
import Image from 'next/image';
type Props = {
  url: string | undefined;
  isLoading?: boolean;
  className?: string;
};

export default function Banner({ url, className, isLoading }: Props) {
  const default_banner: string = '/account/bannerForTest.jpg';
  const baseUrl: string =
    'https://lr4wkl74-5000.euw.devtunnels.ms/users/cover/';

  return (
    <div className={`${css.banner} ${className}`}>
      {url ? (
        <div className={css.imageContainer}>
          <Image
            src={`${baseUrl}${url}`}
            alt="Banner background"
            width={1200}
            height={200}
            className={css.bannerImage}
          />
        </div>
      ) : (
        <div className={css.imageContainer}>
          <Image
            src={default_banner}
            alt="Banner background"
            width={1200}
            height={200}
            className={css.bannerImage}
          />
        </div>
      )}
    </div>
  );
}

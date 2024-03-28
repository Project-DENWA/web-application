import css from './Avatar.module.scss';
import Image from 'next/image';
import { LoadingSpinner } from '../loading-spinner';
type Props = {
  url: string | undefined;
  isLoading?: boolean;
  className?: string;
};

export default function Avatar({ url, className, isLoading }: Props) {
  const default_avatar: string = '/account/AvatarForTest.png';
  const baseUrl: string = 'https://lr4wkl74-5000.euw.devtunnels.ms/users/avatar/';
  
  return (
    <div className={`${css.wrapper} ${className}`}>
      {isLoading ? (
        <div className={css.loader}>
          <LoadingSpinner/>
        </div>
      ) : (
        <>
          {url ? ( // Проверяем, есть ли URL
            <Image
              src={`${baseUrl}${url}`}
              alt="Avatar"
              width={104}
              height={104}
              className={css.avatar}
            />
          ) : (
            <Image
              src={default_avatar}
              alt="Default Avatar"
              width={104}
              height={104}
              className={css.avatar}
            />
          )}
        </>
      )}
    </div>
  );
}

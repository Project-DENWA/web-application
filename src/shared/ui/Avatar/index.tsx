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
  const baseUrl: string = 'http://79.174.80.17:5000/users/avatar/';

  return (
    <div className={`${css.wrapper} ${className}`}>
      <>
        {url ? (
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
    </div>
  );
}

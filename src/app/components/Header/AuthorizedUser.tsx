import Link from 'next/link';
import Image from 'next/image';

import user from '@/../public/user.svg';
import notifications from '@/../public/notifications.svg';
import chat from '@/../public/chat.svg';

import css from './Header.module.scss';

import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { UserData } from '@/shared/lib/localstorage';

import Dropdown from '@/shared/ui/dropdown';

export default function AuthorizedUser({ data }: { data: UserData | null}) {
  const locale = useLocale();
  const t = useTranslations('header.profileDropdownItems');
  const keys = ['myAccount', 'profile', 'createResume'];

  const profileDropdownItems = keys.map((key) => ({
    title: t(`${key}.title`),
    href: `${locale}${t(`${key}.href`)}`,
  }));

  return (
    <div className={css.AuthorizedUserWrapper}>
      <Link href="/chat">
        <Image
          src={chat}
          height={24}
          width={24}
          alt="chat icon"
          className="dark:invert hover:opacity-85 transition-opacity"
        />
      </Link>
      <Link href="/notifications">
        <Image
          src={notifications}
          height={24}
          width={24}
          alt="notifications icon"
          className="dark:invert hover:opacity-85 transition-opacity"
        />
      </Link>
      <Dropdown dropdownItems={profileDropdownItems}>
        <Image
          src={user}
          height={24}
          width={24}
          alt="user icon"
          className="dark:invert hover:opacity-85 transition-opacity"
        />
      </Dropdown>
    </div>
  );
}

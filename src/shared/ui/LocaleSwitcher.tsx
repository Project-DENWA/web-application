'use client';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';

import globe from '@/../public/globe.svg';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';

import Cookies from 'js-cookie';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const currentLocale = Cookies.get('selectedLocale') || locale || 'ru';

  const switchLocale = () => {
    if (!isPending) {
      startTransition(() => {
        const newLocale = currentLocale === 'ru' ? 'en' : 'ru';
        const newPath = pathname.startsWith(`/${currentLocale}`)
          ? pathname.replace(`/${currentLocale}`, `/${newLocale}`)
          : `/${newLocale}${pathname}`;
        router.replace(newPath);
        Cookies.set('selectedLocale', newLocale);
      });
    }
  };

  return (
    <Button size="icon" variant="ghost" onClick={() => switchLocale()}>
      <Image
        alt="change language icon"
        src={globe}
        width={24}
        height={24}
        className="dark:invert hover:opacity-85 transition-opacity"
      />
    </Button>
  );
}

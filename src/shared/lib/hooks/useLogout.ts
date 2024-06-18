import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { removeToken } from '@/shared/lib/cookie';
import { toast } from 'sonner';
import { useAuth } from './useAuth';

export default function useLogout(): () => void {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('header.messages');
  const { updateAuthInfo } = useAuth();

  const handleLogout = () => {
    removeToken();
    toast.success(t('logout'));
    router.push(`/${locale}/`);
    updateAuthInfo(null, false);
  };

  return handleLogout;
}

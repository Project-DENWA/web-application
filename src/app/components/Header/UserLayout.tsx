'use client';

import AuthorizedUser from './AuthorizedUser';
import UnauthorizedUser from './UnauthorizedUser';
import { getUserData } from '@/shared/lib/cookie';
import { useEffect, useState } from 'react';
export default function UserLayout() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const user = getUserData();
  return (
    <>
      {!user?.username ? <AuthorizedUser data={user} /> : <UnauthorizedUser />}
    </>
  );
}

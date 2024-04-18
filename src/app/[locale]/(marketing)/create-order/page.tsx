'use client';

import { useRouter, usePathname } from 'next/navigation';
export default function CreateOrder() {
  const router = useRouter();
  const pathname = usePathname();
  return router.push(`${pathname}/step-1`);
}

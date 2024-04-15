'use client';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import TwoFaModal from '@/app/components/TwoFaModal/TwoFaModal';

export default function ModalTrigger(): JSX.Element {
  const [isOpenModal, setIsModal] = useState<boolean>(false);
  const t = useTranslations('settings.account.2fa');
  return (
    <TwoFaModal open={isOpenModal} setIsOpen={setIsModal}>
      <div>
        <Button>{t('btn')}</Button>
      </div>
    </TwoFaModal>
  );
}

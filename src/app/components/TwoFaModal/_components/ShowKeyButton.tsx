import { Button } from '@/shared/ui/button';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
type Props = {
  keyValue: string;
};

export default function ShowKeyButton({ keyValue }: Props): JSX.Element {
  const [showKey, setShowKey] = useState(false);
  const t = useTranslations('settings.account.2fa.modal');
  return (
    <Button onClick={() => setShowKey(!showKey)}>
      {showKey ? keyValue : t('btn')}
    </Button>
  );
}

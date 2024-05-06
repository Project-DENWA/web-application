'use client';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';

import FeedbackModal from './FeedbackModal';

type Props = {
  id: string;
};

export default function FeedbackModalTrigger({ id }: Props): JSX.Element {
  const [isOpenModal, setIsModal] = useState<boolean>(false);
  return (
    <FeedbackModal workId={id} open={isOpenModal} setIsOpen={setIsModal}>
      <div>
        <Button>Откликнуться</Button>
      </div>
    </FeedbackModal>
  );
}

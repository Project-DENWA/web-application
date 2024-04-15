'use client';
import { useState } from 'react';
import questionMark from '@/../public/questionMark.svg';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip';
import Image from 'next/image';

type Props = {
  children: React.ReactNode;
};

export default function MyTooltip({ children }: Props): JSX.Element {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <TooltipProvider>
      <Tooltip open={tooltipOpen}>
        <TooltipTrigger
          onMouseOver={() => setTooltipOpen(true)}
          onMouseLeave={() => setTooltipOpen(false)}
        >
          <Image
            src={questionMark}
            alt="Question mark"
            width={18}
            height={18}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{children}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

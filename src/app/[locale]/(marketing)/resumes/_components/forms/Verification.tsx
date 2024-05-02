import { useTranslations } from 'next-intl';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';

export default function Verification(): JSX.Element {
  const t = useTranslations('resumes.filter.verification');
  return (
    <div>
      <Accordion type="multiple">
        <AccordionItem value="Suka">
          <AccordionTrigger>
            <h3>{t('title')}</h3>
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2"> 
                <RadioGroupItem value="irrelevant" id="irrelevant" />
                <h4>{t('irrelevant')}</h4>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="have" id="have" />
                <h4>{t('have')}</h4>
              </div>
              <div className="flex items-center space-x-2"> 
                <RadioGroupItem value="absent" id="absent" />
                <h4>{t('absent')}</h4>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

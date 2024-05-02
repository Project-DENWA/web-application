import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';

export default function Experience(): JSX.Element {
  const t = useTranslations('resumes.filter.experience');
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
                <RadioGroupItem value="no-experience" id="no-experience" />
                <h4>{t('noExp')}</h4>
              </div>
              <div className="flex items-center space-x-2"> 
                <RadioGroupItem value="one-to-three-year" id="one-to-three-year" />
                <h4>{t('oneToThree')}</h4>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="over-three-year" id="over-three-year" />
                <h4>{t('overThree')}</h4>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

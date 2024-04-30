import css from './forms.module.scss';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion';
import { languageItems, dateFormat } from './langualeItems';
import { PlusCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import MyTooltip from '@/shared/ui/myTooltip';

export default function ResumeForm(): JSX.Element {
  const t = useTranslations('createResume.content')
  return (
    <div className={css.wrapper}>
      <div className={css.field}>
        <div className={css.questionMark}>
        <h3>{t("fieldName.title")}</h3>
        <MyTooltip>{t("fieldName.questionMark")}</MyTooltip>
        </div>
        <Input className={css.input} placeholder={t("fieldName.placeholder")} />
      </div>
      <div className={css.fieldTextArea}>
        <h3>{t("fieldDescription.title")}</h3>
        <Textarea className={css.textarea} placeholder={t("fieldDescription.placeholder")} />
      </div>
      <div className={css.languageField}>
        <div>
          <h3>{t("fieldLanguage.title")}</h3>
        </div>
        <div>
          <Input className={css.input} placeholder={t("fieldLanguage.placeholder")}/>
          <Select>
            <SelectTrigger
              className={cn(
                css.selectTrigger,
                'bg-light-main-colored-20 dark:bg-dark-main-colored-10',
              )}
            >
              <SelectValue placeholder={t("fieldLanguage.selectPlaceholder")} />
            </SelectTrigger>
            <SelectContent
              className={
                'bg-light-main-colored-20 dark:bg-dark-main-colored-10'
              }
            >
              {languageItems.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <PlusCircle />
        </div>
      </div>

      <div className={css.skillsField}>
        <div>
          <h3>{t("fieldSkills.title")}</h3>
        </div>
        <div>
          <Input className={css.input} placeholder={t("fieldSkills.placeholder")} />
          <Input className={css.expInput} type="number" placeholder={t("fieldSkills.expPlaceholder")}/>
          <Select>
            <SelectTrigger
              className={cn(
                css.selectTrigger,
                'bg-light-main-colored-20 dark:bg-dark-main-colored-10',
              )}
            >
              <SelectValue placeholder={t("fieldSkills.expPlaceholder")}/>
            </SelectTrigger>
            <SelectContent
              className={
                'bg-light-main-colored-20 dark:bg-dark-main-colored-10'
              }
            >
              {dateFormat.map((date) => (
                <SelectItem key={date.value} value={date.value}>
                  {date.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <PlusCircle />
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className={cn(css.accordion, 'w-full')}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{t("fieldSocials.title")}</AccordionTrigger>
          <AccordionContent className={cn(css.accordionContent)}>
            <Input placeholder={t("fieldSocials.title")}/>
            <Input placeholder={t("fieldSocials.website")}/>
            <Input placeholder={t("fieldSocials.twitter")}/>
            <Input placeholder={t("fieldSocials.github")}/>
            <Input placeholder={t("fieldSocials.telegram")} />
            <Input placeholder={t("fieldSocials.discord")} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button>{t('btn')}</Button>
    </div>
  );
}

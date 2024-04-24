import css from './accordionWithCheckboxes.module.scss';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion';
import { Checkbox } from '@/shared/ui/checkbox';

interface Subcategory {
  name: string;
}

interface Category {
  name: string;
  subcategories: Subcategory[];
}

interface AccordionWithCheckboxesProps {
  title: string;
  categories: Category[];
}

export default function AccordionWithCheckboxes({ title, categories}: AccordionWithCheckboxesProps) {
  return (
    <div>
      <h3>{title}</h3>
      <Accordion type="multiple">
        {categories.map((category, categoryIndex) => (
          <AccordionItem key={categoryIndex} value={`item-${categoryIndex}`}>
            <AccordionTrigger>{category.name}</AccordionTrigger>
            <AccordionContent className={css.accordionContent}>
              {category.subcategories.map((subcategory, subcategoryIndex) => (
                <div key={subcategoryIndex}>
                  <Checkbox className="bg-light-main-bg-main dark:bg-dark-main-colored-10 data-[state=checked]:dark:bg-light-main-colored-100" />
                  {subcategory.name}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

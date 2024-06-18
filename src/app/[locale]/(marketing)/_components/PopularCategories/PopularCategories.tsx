import PopularCategoryCard from "./PopularCategoryCard/PopularCategoryCard"
import css from "@/app/[locale]/(marketing)/_components/PopularCategories/PopularCategories.module.scss"
import ICategoriesCardProps from "@/app/interfaces/ICategoriesCardProps"
import Illustration from "@/../public/illustrations/homeIllustration.png";
import Image from "next/image"
import HeaderLink from "@/app/[locale]/(marketing)/_components/HeaderLink/HeaderLink"
import { useTranslations, useLocale } from "next-intl"
export default function PopularCategories() {
   const t = useTranslations("categories")
   const locale = useLocale();
   const keys = ["graphDesign", "videoProduction", "writtenWorks", "webDev"]

   const categoryCards = keys.map(key => ({
      icon: t(`${key}.icon`),
      name: t(`${key}.name`),
      description: t(`${key}.description`),
      textLink: t(`${key}.textLink`),
      link: t(`${key}.link`),
   }))

   return (
      <section className={css.wrapper}>
         <div className={css.navContainer}>
            <HeaderLink
               title={t("title")}
               href={`${locale}/orders`}
               description={t("textLink")}
               abbreviatedDescription={t("abbreviatedDescription")}
            />
         </div>
         <div className={css.itemsContainer}>
            <div className={css.leftItems}>
               {categoryCards.map((item: ICategoriesCardProps, key: number) => (
                  <PopularCategoryCard
                     icon={item.icon}
                     name={item.name}
                     description={item.description}
                     textLink={item.textLink}
                     link={item.link}
                     key={key}
                  />
               ))}
            </div>
            <div className={css.rightItems}>
               <Image
                  alt='Categoryes illustration'
                  src={Illustration}
                  width={430}
                  height={370}
               />
            </div>
         </div>
      </section>
   )
}

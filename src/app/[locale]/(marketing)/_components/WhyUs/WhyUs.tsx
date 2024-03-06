import HeaderLink from "@/app/[locale]/(marketing)/_components/HeaderLink/HeaderLink"
import WhyUsCard from "@/app/[locale]/(marketing)/_components/WhyUs/WhyUsCard/WhyUsCard"
import css from "@/app/[locale]/(marketing)/_components/WhyUs/WhyUs.module.scss"
import ICategoriesCardProps from "@/app/interfaces/ICategoriesCardProps"
import { useTranslations } from "next-intl"
export default function WhyUs() {
   const t = useTranslations("whyUs")
   const keys = ["freeAndEasy","dataProtection","resumeBuilder","bestCustomerSupport",]

   const whyUsCards = keys.map(key => ({
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
               href='/'
               description={t("textLink")}
            />
         </div>
         <div className={css.cardWrapper}>
            {whyUsCards.map((item: ICategoriesCardProps, key: number) => (
               <WhyUsCard
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                  textLink={item.textLink}
                  link={item.link}
                  key={key}
               />
            ))}
         </div>
      </section>
   )
}

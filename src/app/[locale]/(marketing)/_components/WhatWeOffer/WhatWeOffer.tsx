import HeaderLink from "@/app/[locale]/(marketing)/_components/HeaderLink/HeaderLink"
import css from "@/app/[locale]/(marketing)/_components/WhatWeOffer/WhatWeOffer.module.scss"

import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { useTranslations } from "next-intl"

import { Constructor, MatchingOrders, PaymentMethods, TechnicalSupport } from "@/app/[locale]/(marketing)/_components/WhatWeOffer/Tabs"

export default function WhatWeOffer() {
   const t = useTranslations("whatWeOffer")
   const keys = ["tabsList.constructor", "tabsList.matchingOrders", "tabsList.paymentMethods", "tabsList.technicalSupport"]

   const tabsList = keys.map(key => ({
      title: t(`${key}.title`),
      value: t(`${key}.value`)
   }))

   return (
      <section className={css.wrapper}>
         <div className={css.navContainer}>
            <HeaderLink
               title={t("title")}
               href='/categories'
               description={t("textLink")}
            />
         </div>
         <Tabs defaultValue='сonstructor' className={css.tabsContainer + " bg-light-main-bg-primary dark:bg-dark-main-bg-primary"}>
            <TabsList className={css.tabsList}>
               {tabsList.map((item, key: number) => (
                  <TabsTrigger key={key} value={item.value}>
                     <p>{item.title}</p>
                  </TabsTrigger>
               ))}
            </TabsList>
            <Constructor/>
            <MatchingOrders/>
            <PaymentMethods/>
            <TechnicalSupport/>            
         </Tabs>
      </section>
   )
}

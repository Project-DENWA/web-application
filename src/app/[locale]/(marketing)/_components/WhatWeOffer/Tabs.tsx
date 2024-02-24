import Link from "next/link"
import Image from "next/image"
import { Button } from "@/shared/ui/button"
import { TabsContent } from "@/shared/ui/tabs"
import css from "@/app/[locale]/(marketing)/_components/WhatWeOffer/WhatWeOffer.module.scss"
import Illustration from "@/../public/Illustration.png"
import { useTranslations } from "next-intl"

export const Constructor: React.FC = () => {
   const t = useTranslations("whatWeOffer.tabsContent.constructor")
   return (
      <TabsContent className={css.contentContainer} value='сonstructor'>
         <div className={css.leftItems}>
            <h4>{t("title")}</h4>
            <p>
               {t("description")}{" "}
               <span className='text-light-text-colored'>{t("span")}</span>
            </p>
            <Link href={t("link")}>
               <Button variant={"default"}>{t("textBtn")}</Button>
            </Link>
         </div>
         <div>
            <Image
               loading='lazy'
               src={Illustration}
               alt='Illustration'
               width={415}
               height={335}
            />
         </div>
      </TabsContent>
   )
}

export const MatchingOrders: React.FC = () => {
   const z = useTranslations("whatWeOffer.tabsContent.matchingOrders")
   return (
      <TabsContent className={css.contentContainer} value='matchingOrders'>
         <div className={css.leftItems}>
            <h4>{z("title")}</h4>
            <p>
               {z("description")}{" "}
               <span className='text-light-text-colored'>{z("span")}</span>
            </p>
            <Link href={z("link")}>
               <Button variant={"default"}>{z("textBtn")}</Button>
            </Link>
         </div>
         <div>
            <Image
               loading='lazy'
               src={Illustration}
               alt='Illustration'
               width={415}
               height={335}
            />
         </div>
      </TabsContent>
   )
}

export const PaymentMethods: React.FC = () => {
   const r = useTranslations("whatWeOffer.tabsContent.paymentMethods")
   return (
      <TabsContent className={css.contentContainer} value='paymentMethods'>
         <div className={css.leftItems}>
            <h4>{r("title")}</h4>
            <p>
               {r("description")}{" "}
               <span className='text-light-text-colored'>{r("span")}</span>
            </p>
            <Link href={r("link")}>
               <Button variant={"default"}>{r("textBtn")}</Button>
            </Link>
         </div>
         <div>
            <Image
               loading='lazy'
               src={Illustration}
               alt='Illustration'
               width={415}
               height={335}
            />
         </div>
      </TabsContent>
   )
}

export const TechnicalSupport: React.FC = () => {
   const e = useTranslations("whatWeOffer.tabsContent.technicalSupport")
   return (
      <TabsContent className={css.contentContainer} value='technicalSupport'>
         <div className={css.leftItems}>
            <h4>{e("title")}</h4>
            <p>
               {e("description")}{" "}
               <span className='text-light-text-colored'>{e("span")}</span>
            </p>
            <Link href={e("link")}>
               <Button variant={"default"}>{e("textBtn")}</Button>
            </Link>
         </div>
         <div>
            <Image
               loading='lazy'
               src={Illustration}
               alt='Illustration'
               width={415}
               height={335}
            />
         </div>
      </TabsContent>
   )
}

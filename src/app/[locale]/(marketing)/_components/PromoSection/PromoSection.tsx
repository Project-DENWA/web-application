import css from "@/app/[locale]/(marketing)/_components/PromoSection/PromoSection.module.scss"
import { Button } from "@/shared/ui/button"
import AnimatedText from "./AnimatedText/AnimatedText"
import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'

export default function PromoSection() {
   const t = useTranslations("promoSection");
   const locale = useLocale();
   return (
      <article className={css.wrapper}>
         <div className={css.title}>
            <h1>{t("title")}</h1>
            <AnimatedText />
         </div>
        <div className={css.promoContainer}>
         <div>
            <p>
               {t("description")}
            </p>
         </div>
          <div className={css.links}>
            <Link href={`${locale}/orders`}>
               <Button className={css.mainBtn} variant='default'>{t("textBtnMain")}</Button>
            </Link>
            <Link href={`${locale}/create-order`}>
               <Button className={css.hiddenBtn} variant='default'>{t("textBtnMainReduced")}</Button>
            </Link>
            <Link href={`${locale}/create-order`}>
               <Button variant='dark'>{t("textBtnOrder")}</Button>
            </Link>
          </div>
        </div>
      </article>
   )
}

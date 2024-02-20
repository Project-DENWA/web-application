import css from "@/app/[locale]/(marketing)/_components/PromoSection/PromoSection.module.scss"
import { Button } from "@/shared/ui/button"
import AnimatedText from "../AnimatedText/AnimatedText"
import Link from "next/link"
import {useTranslations} from 'next-intl'
export default function PromoSection() {
   const t = useTranslations("promoSection");
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
          <Link href={"/signin"}>
            <Button variant='default'>{t("textBtnMain")}</Button>
            <Button variant='dark'>{t("textBtnOrder")}</Button>
          </Link>
        </div>
      </article>
   )
}

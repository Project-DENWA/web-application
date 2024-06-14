import css from "@/app/[locale]/(marketing)/_components/CollaborationBanner/CollaborationBanner.module.scss"
import HeaderLink from "@/app/[locale]/(marketing)/_components/HeaderLink/HeaderLink"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/utils"

import Image from "next/image"
import Plug from "@/../public/Plug.png"

import { useTranslations } from "next-intl"
export default function CollaborationBanner() {
   const t = useTranslations("collaborationBanners")
   return (
      <section className={css.wrapper}>
         <div className={css.navContainer}>
            <HeaderLink
               title={t("header.title")}
               href='/collaboration'
               description={t("header.textLink")}
            />
         </div>
         <div className={css.content}>
            <div className={cn(css.bannerFirst, "hover:opacity-90")}>
               <div className={css.leftItems}>
                  <h3>{t("firstCard.title")}</h3>
                  <p>{t("firstCard.description")}</p>
                  <Button variant={"dark"}>{t("firstCard.textBtn")}</Button>
               </div>
               <div className={css.illustration}>
                  <Image
                     alt='Illustration'
                     src={'/3D/3DIllustrationCircle.png'}
                     width={230}
                     height={215}
                  />
               </div>
            </div>

            <div
               className={cn(
                  css.bannerSecond,
                  "bg-light-main-dark dark:bg-dark-main-dark hover:opacity-90"
               )}
            >
               <div className={css.leftItems}>
                  <h3
                     className={cn(
                        "text-light-text-primary dark:text-dark-main-full-white"
                     )}
                  >
                     {t("secondCard.title")}
                  </h3>
                  <p
                     className={cn(
                        "text-light-text-primary dark:text-dark-main-full-white"
                     )}
                  >
                     {t("secondCard.description")}
                  </p>
                  <Button variant={"default"}>{t("secondCard.textBtn")}</Button>
               </div>
               <div className={css.illustration}> 
                  <Image
                     alt='Illustration'
                     src={'/3D/3DIllustrationMessenger.png'}
                     width={230}
                     height={215}
                  />
               </div>
            </div>
         </div>
      </section>
   )
}

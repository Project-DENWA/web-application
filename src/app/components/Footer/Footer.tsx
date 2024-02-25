import css from "@/app/components/Footer/Footer.module.scss"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/shared/lib/utils"
import { useTranslations } from "next-intl"

import logotype from "@/../public/logotype.svg"
import LinkedIn from "@/../public/FooterSocialIcons/LinkedIn.svg"
import Telegram from "@/../public/FooterSocialIcons/Telegram.svg"
import GitHub from "@/../public/FooterSocialIcons/GitHub.svg"
import Twitter from "@/../public/FooterSocialIcons/Twitter.svg"
import Mail from "@/../public/FooterSocialIcons/Mail.svg"
import coinMarket from "@/../public/FooterSocialIcons/coinMarket.svg"

type Section = {
   title: string
   links: string[]
}

/**
 * @dev Sorry for the hardcore, I don't fucking know how to do this properly.
 */

export default function Footer() {
   const t = useTranslations("footer")
   return (
      <footer
         className={cn(
            css.wrapper,
            "bg-light-main-bg-main dark:bg-dark-main-bg-main"
         )}
      >
         <div className={css.items}>
            <div className={cn(css.item, "text-light-text-main-50")}>
               <h3 className='text-light-text-main-100 dark:text-dark-text-main-100'>
                  {t("orders.title")}
               </h3>
               <Link href={t("orders.links.link1.url")}>
                  {t("orders.links.link1.text")}
               </Link>
               <Link href={t("orders.links.link2.url")}>
                  {t("orders.links.link2.text")}
               </Link>
               <Link href={t("orders.links.link3.url")}>
                  {t("orders.links.link3.text")}
               </Link>
               <Link href={t("orders.links.link4.url")}>
                  {t("orders.links.link4.text")}
               </Link>
               <Link href={t("orders.links.link5.url")}>
                  {t("orders.links.link5.text")}
               </Link>
               <Link href={t("orders.links.link6.url")}>
                  {t("orders.links.link6.text")}
               </Link>
            </div>

            <div className={cn(css.item, "text-light-text-main-50")}>
               <h3 className='text-light-text-main-100 dark:text-dark-text-main-100'>
                  {t("experts.title")}
               </h3>
               <Link href={t("experts.links.link1.url")}>
                  {t("experts.links.link1.text")}
               </Link>
               <Link href={t("experts.links.link2.url")}>
                  {t("experts.links.link2.text")}
               </Link>
               <Link href={t("experts.links.link3.url")}>
                  {t("experts.links.link3.text")}
               </Link>
               <Link href={t("experts.links.link4.url")}>
                  {t("experts.links.link4.text")}
               </Link>
               <Link href={t("experts.links.link5.url")}>
                  {t("experts.links.link5.text")}
               </Link>
               <Link href={t("experts.links.link6.url")}>
                  {t("experts.links.link6.text")}
               </Link>
            </div>

            <div className={cn(css.item, "text-light-text-main-50")}>
               <h3 className='text-light-text-main-100 dark:text-dark-text-main-100'>
                  {t("news.title")}
               </h3>
               <Link href={t("news.links.link1.url")}>
                  {t("news.links.link1.text")}
               </Link>
               <Link href={t("news.links.link2.url")}>
                  {t("news.links.link2.text")}
               </Link>
               <Link href={t("news.links.link3.url")}>
                  {t("news.links.link3.text")}
               </Link>
               <Link href={t("news.links.link4.url")}>
                  {t("news.links.link4.text")}
               </Link>
               <Link href={t("news.links.link5.url")}>
                  {t("news.links.link5.text")}
               </Link>
               <Link href={t("news.links.link6.url")}>
                  {t("news.links.link6.text")}
               </Link>
            </div>

            <div className={cn(css.item, "text-light-text-main-50")}>
               <h3 className='text-light-text-main-100 dark:text-dark-text-main-100'>
                  {t("more.title")}
               </h3>
               <Link href={t("more.links.link1.url")}>
                  {t("more.links.link1.text")}
               </Link>
               <Link href={t("more.links.link2.url")}>
                  {t("more.links.link2.text")}
               </Link>
               <Link href={t("more.links.link3.url")}>
                  {t("more.links.link3.text")}
               </Link>
               <Link href={t("more.links.link4.url")}>
                  {t("more.links.link4.text")}
               </Link>
               <Link href={t("more.links.link5.url")}>
                  {t("more.links.link5.text")}
               </Link>
               <Link href={t("more.links.link6.url")}>
                  {t("more.links.link6.text")}
               </Link>
            </div>

            <div className={cn(css.item, "text-light-text-main-50")}>
               <h3 className='text-light-text-main-100 dark:text-dark-text-main-100'>
                  {t("inProgress.title")}
               </h3>
               <Link href={t("inProgress.links.link1.url")}>
                  {t("inProgress.links.link1.text")}
               </Link>
               <Link href={t("inProgress.links.link2.url")}>
                  {t("inProgress.links.link2.text")}
               </Link>
               <Link href={t("inProgress.links.link3.url")}>
                  {t("inProgress.links.link3.text")}
               </Link>
               <Link href={t("inProgress.links.link4.url")}>
                  {t("inProgress.links.link4.text")}
               </Link>
               <Link href={t("inProgress.links.link5.url")}>
                  {t("inProgress.links.link5.text")}
               </Link>
               <Link href={t("inProgress.links.link6.url")}>
                  {t("inProgress.links.link6.text")}
               </Link>
            </div>
         </div>
         <div className={cn(css.line, "bg-light-text-main-50")}></div>
         <div className={css.underfooter}>
            <Link href={"/"} className={css.logotype}>
               <Image
                  src={logotype}
                  alt='denwa logotype'
                  width={62}
                  height={38}
                  className='dark:invert hover:scale-105 transition-transform duration-75'
               />
            </Link>
            <div className={css.socialIcons}>
               <Link href={"/"}>
                  <Image
                     alt='LinkedIn icon'
                     src={LinkedIn}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
               <Link href={"/"}>
                  <Image
                     alt='Telegram icon'
                     src={Telegram}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
               <Link href={"/"}>
                  <Image
                     alt='GitHub icon'
                     src={GitHub}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
               <Link href={"/"}>
                  <Image
                     alt='Twitter icon'
                     src={Twitter}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
               <Link href={"/"}>
                  <Image
                     alt='Mail icon'
                     src={Mail}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
               <Link href={"/"}>
                  <Image
                     alt='coinMarket icon'
                     src={coinMarket}
                     width={30}
                     height={30}
                     className='hover:scale-105 transition-transform duration-75'
                  />
               </Link>
            </div>
         </div>
      </footer>
   )
}

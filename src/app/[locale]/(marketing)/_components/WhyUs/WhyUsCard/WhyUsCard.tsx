import css from "@/app/[locale]/(marketing)/_components/WhyUs/WhyUsCard/WhyUsCard.module.scss"
import Image from "next/image"
import ICategoriesCardProps from "@/app/interfaces/ICategoriesCardProps"
import Link from "next/link"
import arrowRightSmall from "@/../public/arrow-right-small.svg"
import { useLocale } from "next-intl"
export default function WhyUsCard({
   name,
   description,
   icon,
   link,
   textLink,
}: ICategoriesCardProps) {
   const locale = useLocale();
   return (
      <article className={css.wrapper + " bg-light-main-bg-primary dark:bg-dark-main-bg-primary"}>
         <Image alt='Icon' src={"/whyUsIcons/" + icon} width={40} height={40} />
         <div className={css.descriptionContainer}>
            <div>
               <div>
                  <h3 className='dark:text-dark-text-primary'>{name}</h3>
                  <p className='dark:text-dark-text-primary'>{description}</p>
               </div>
            </div>
            <Link href={`${locale}/${link}`} className='text-dark-text-colored'>
               {textLink}
               <Image
                  alt='arrow icon'
                  src={arrowRightSmall}
                  width={24}
                  height={24}
                  id={css.arrow}
               />
            </Link>
         </div>
      </article>
   )
}

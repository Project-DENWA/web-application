import Image from "next/image"
import headlineIcon from "@/../public/headlineIcon.svg"
import arrowRight from "@/../public/arrow-right.svg"
import css from "@/app/components/Header/Header.module.scss"
import logotype from "@/../public/logotype.svg"
export default function Header() {
   return (
      <header className={css.header}>
         <div className={css.headlineBanner}>
            <div>
               <Image
                  alt='headline icon smile'
                  src={headlineIcon}
                  width={28}
                  height={28}
               />
            </div>
            <h1 className='text-dark-text-primary'>
               <u>DenwaHub 2024.</u> Программируй деньги с ведущими
               специалистами.
            </h1>
            <div>
               <Image
                  src={arrowRight}
                  alt='right arrow'
                  width={24}
                  height={24}
               />
            </div>
         </div>
         <div className={css.mainHeader}>
            <div className={css.logotype}>
               <Image
                  src={logotype}
                  alt='denwa logotype'
                  width={62}
                  height={38}
               />
            </div>
            <nav>
              
            </nav>
         </div>
      </header>
   )
}

"use client"
import Image from "next/image"
import headlineIcon from "@/../public/headlineIcon.svg"
import arrowRight from "@/../public/arrow-right.svg"
import globe from "@/../public/globe.svg"

import css from "@/app/components/Header/Header.module.scss"
import logotype from "@/../public/logotype.svg"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/shared/ui/button"
import ThemeSwitcher from "@/shared/ui/ThemeSwitcher"

import SignInModal from "@/app/components/SignInModal/SignInModal"
import SignUpModal from "../SignUpModal/SignUpModal"

export default function Header() {
   const handleOpenModal = (modalType: "signUp" | "signIn") => {
      if (modalType === "signUp") {
         setIsOpenSignUp(!isOpenSignUp)
         setIsOpenSignIn(false)
      } else if (modalType === "signIn") {
         setIsOpenSignUp(false)
         setIsOpenSignIn(!isOpenSignIn)
      }
   }

   const [isOpenSignUp, setIsOpenSignUp] = useState<boolean>(false)
   const [isOpenSignIn, setIsOpenSignIn] = useState<boolean>(false)

   return (
      <header
         className={
            css.header + " bg-light-main-bg-main dark:bg-dark-main-bg-main"
         }
      >
         <Link
            className={
               css.headlineBanner + " hover:opacity-90 transition-opacity"
            }
            href={"/"}
         >
            <div>
               <Image
                  alt='headline icon smile'
                  src={headlineIcon}
                  width={28}
                  height={28}
               />
            </div>
            <p className='text-dark-text-primary'>
               <u>DenwaHub 2024.</u>{" "}
               <span>Программируй деньги с ведущими специалистами.</span>
            </p>
            <div>
               <Image
                  src={arrowRight}
                  alt='right arrow'
                  width={24}
                  height={24}
                  id={css.arrow}
               />
            </div>
         </Link>
         <div className={css.mainHeader}>
            <Link href={"/"} className={css.logotype}>
               <Image
                  src={logotype}
                  alt='denwa logotype'
                  width={62}
                  height={38}
                  className='dark:invert hover:scale-105 transition-transform duration-75'
               />
            </Link>
            <nav>
               <Link
                  href={"./#"}
                  className='hover:text-light-text-colored dark:hover:text-dark-text-colored transition-colors'
               >
                  Заказы
               </Link>
               <Link
                  href={"./#"}
                  className='hover:text-light-text-colored dark:hover:text-dark-text-colored transition-colors'
               >
                  Специалисты
               </Link>
               <Link
                  href={"./#"}
                  className='hover:text-light-text-colored dark:hover:text-dark-text-colored transition-colors'
               >
                  Новости
               </Link>
               <Link
                  href={"./#"}
                  className='hover:text-light-text-colored dark:hover:text-dark-text-colored transition-colors'
               >
                  Ещё...
               </Link>
            </nav>
            <div className={css.rightItems}>
               <SignInModal
                  open={isOpenSignIn}
                  setIsOpen={setIsOpenSignIn}
                  handleOpenModal={() => handleOpenModal("signUp")}
               >
                  <Button variant={"default"}>Войти</Button>
               </SignInModal>
               <SignUpModal
                  open={isOpenSignUp}
                  setIsOpen={setIsOpenSignUp}
                  handleOpenModal={() => handleOpenModal("signIn")}
               />
               <div>
                  <Button size='icon' variant='ghost'>
                     <Image
                        alt='change language icon'
                        src={globe}
                        width={24}
                        height={24}
                        className='dark:invert hover:opacity-85 transition-opacity'
                     />
                  </Button>
                  <ThemeSwitcher />
               </div>
            </div>
         </div>
      </header>
   )
}

"use client"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/button"
import CookieIcon from "@/../public/smileCookie.svg"
import Cookies from "universal-cookie"
import css from "@/app/components/CookieModal/CookitModal.module.scss"

const cookies = new Cookies()

export default function CookieModal() {
   const [isOpen, setIsOpen] = useState<boolean>(true)
   const [hasElapsed, setHasElapsed] = useState<boolean>(false)
   const t = useTranslations("cookieModal")
   useEffect(() => {
      const timer = setTimeout(() => {
         setHasElapsed(true)
      }, 10000)
      return () => clearTimeout(timer)
   }, [])

   const handleClose = () => {
      setIsOpen(false)
      cookies.set("cookieModalShown", true, { path: "/" })
   }

   useEffect(() => {
      const cookieValue = cookies.get("cookieModalShown")

      if (cookieValue) {
         setIsOpen(false)
      }
   }, [])
   return (
      <>
         {isOpen && hasElapsed && (
            <dialog
               className={cn(
                  css.wrapper,
                  "bg-light-main-bg-primary dark:bg-dark-main-bg-primary"
               )}
            >
               <div>
                  <h3>{t("title")}</h3>
                  <Image
                     alt='Smile Icon'
                     src={CookieIcon}
                     width={58}
                     height={58}
                     className='dark:invert hover:scale-105 transition-transform duration-75'
                  />
               </div>
               <p>{t("description")}</p>
               <Button variant={"default"} onClick={handleClose}>
                  {t("textBtn")}
               </Button>
            </dialog>
         )}
      </>
   )
}

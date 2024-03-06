"use client"
import React, { useState, useEffect, useMemo } from "react"
import { useTranslations } from "next-intl"
import css from "@/app/[locale]/(marketing)/_components/PromoSection/AnimatedText/AnimatedText.module.scss"

type IAnimatedText = {
   text: string
}

export default function AnimatedText() {
   const t = useTranslations("promoSection")
   const textVariants: IAnimatedText[] = useMemo(
      () => [
         { text: t("textVariants.0.text") },
         { text: t("textVariants.1.text") },
         { text: t("textVariants.3.text") },
         { text: t("textVariants.4.text") },
         { text: t("textVariants.5.text") },
         { text: t("textVariants.6.text") },
         { text: t("textVariants.7.text") },
         { text: t("textVariants.8.text") },
         { text: t("textVariants.9.text") },
         { text: t("textVariants.10.text") },
         { text: t("textVariants.11.text") },
         { text: t("textVariants.12.text") },
      ],
      [t]
   )

   const [displayedText, setDisplayedText] = useState("каждого")
   const [currentWordIndex, setCurrentWordIndex] = useState(0)

   useEffect(() => {
      let isMounted = true

      const animateText = async () => {
         const currentWord = textVariants[currentWordIndex].text

         // Text typesetting
         for (let i = 0; i <= currentWord.length; i++) {
            if (!isMounted) return

            setDisplayedText(currentWord.substring(0, i))

            await new Promise(resolve => setTimeout(resolve, 100))
         }

         // Delay before erasing
         await new Promise(resolve => setTimeout(resolve, 3000))

         // Text erasure
         for (let i = currentWord.length; i >= 0; i--) {
            if (!isMounted) return

            setDisplayedText(currentWord.substring(0, i))

            await new Promise(resolve => setTimeout(resolve, 100))
         }

         // Going to the next word with a delay
         await new Promise(resolve => setTimeout(resolve, 700))
         setCurrentWordIndex(prevIndex => (prevIndex + 1) % textVariants.length)
      }

      animateText()

      return () => {
         isMounted = false
      }
   }, [textVariants, currentWordIndex])

   return (
      <span>
         {t("startWord")} {displayedText} <div className={css.caret}>|</div>
      </span>
   )
}

"use client"
import React, { useState, useEffect, useMemo } from "react"
import css from "@/app/(marketing)/_components/AnimatedText/AnimatedText.module.scss"
type IAnimatedText = {
   text: string
}

export default function AnimatedText() {
   const textVariants: IAnimatedText[] = useMemo(
      () => [
         { text: "русских" },
         { text: "каждого" },
         { text: "программистов" },
         { text: "дизайнеров" },
         { text: "тестировщиков" },
         { text: "маркетологов" },
         { text: "писателей" },
         { text: "архитекторов" },
         { text: "копирайтеров" },
         { text: "фотографов" },
         { text: "видеографов" },
         { text: "переводчиков" },
         { text: "модельеров" },
      ],
      []
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
         для {displayedText} <div className={css.caret}>|</div>
      </span>
   )
}

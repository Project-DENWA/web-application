"use client"
import React, { useState, useEffect, useMemo } from 'react';

type IAnimatedText = {
  text: string;
};

export default function AnimatedText() {

  const textVariants: IAnimatedText[] = useMemo(() => [
    { text: 'стартапов' },
    { text: 'дизайнеров' },
  ], []); 

  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const animateText = async () => {
      const currentWord = textVariants[currentWordIndex].text;

      // Набор текста
      for (let i = 0; i <= currentWord.length; i++) {
        if (!isMounted) return;

        setDisplayedText(currentWord.substring(0, i));

        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      // Задержка перед стиранием
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Стирание текста
      for (let i = currentWord.length; i >= 0; i--) {
        if (!isMounted) return;

        setDisplayedText(currentWord.substring(0, i));

        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      // Переход к следующему слову с задержкой
      await new Promise((resolve) => setTimeout(resolve, 700));
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % textVariants.length);
    };

    animateText();

    return () => {
      isMounted = false;
    };
  }, [textVariants, currentWordIndex]);

  return (
    <span>для {displayedText}</span>
  );
};

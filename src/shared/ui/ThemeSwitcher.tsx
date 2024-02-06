"use client";
import Image from "next/image";
import moon from "@/../public/moon.svg";
import sun from "@/../public/sun.svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeTheme = (t: string) => {
    setTheme(t);
  };
  return (
    <Image
      alt="change color scheme icon"
      src={theme == 'light' ? moon : sun}
      width={24}
      height={24}
      className="dark:invert"
      role="button"
      onClick={() => changeTheme(theme == 'light' ? 'dark' : 'light')}
    />
  );
}

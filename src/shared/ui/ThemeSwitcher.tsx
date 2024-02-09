"use client";
import Image from "next/image";
import moon from "@/../public/moon.svg";
import sun from "@/../public/sun.svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./button";

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
    <Button size="icon" variant="ghost">
      <Image
        alt="change color scheme icon"
        src={theme == "light" ? moon : sun}
        width={24}
        height={24}
        className="dark:invert hover:opacity-85 transition-opacity"
        onClick={() => changeTheme(theme == "light" ? "dark" : "light")}
      />
    </Button>
  );
}

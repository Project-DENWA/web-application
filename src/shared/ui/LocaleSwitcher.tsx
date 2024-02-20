"use client";
import Image from "next/image";
import { Button } from "@/shared/ui/button";

import globe from "@/../public/globe.svg";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale } from "next-intl";

import Cookies from "js-cookie";

export default function LocaleSwitcher() {
   const [isPending, startTransition] = useTransition();
   const router = useRouter();
   const localActive = useLocale();

   const Switcher = (nextLocale: string) => {
      if (!isPending) {
         startTransition(() => {
            router.replace(`/${nextLocale}`);
            Cookies.set("selectedLocale", nextLocale);
         })
      }
   }
   return (
      <Button
         size='icon'
         variant='ghost'
         onClick={() => Switcher(localActive === "en" ? "ru" : "en")}
      >
         <Image
            alt='change language icon'
            src={globe}
            width={24}
            height={24}
            className='dark:invert hover:opacity-85 transition-opacity'
         />
      </Button>
   )
}

"use client"
import HeaderLink from "@/app/[locale]/(marketing)/_components/HeaderLink/HeaderLink"
import css from "@/app/[locale]/(marketing)/_components/LeaderBoard/LeaderBoard.module.scss"
import LeaderCard from "@/app/[locale]/(marketing)/_components/LeaderCard/LeaderCard"
import Autoplay from "embla-carousel-autoplay"
import { useTranslations } from "next-intl"
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/shared/ui/carousel"
interface LeaderBoardItem {
   avatar: string
   fullname: string
   href: string
   description: string
   rate: number
   category: string[]
}

export default function LeaderBoard() {
   /**
    * @dev only for a dev, later will be through the data base
    */
   const t = useTranslations("leaderBoard")
   const LeaderBoardItems: LeaderBoardItem[] = [
      {
         avatar: "Perfomer1.png",
         fullname: "Николаенко Веня",
         href: "/",
         description:
            "С уникальным видением, дизайнер заслужил первое место в конкурсе месяца.",
         rate: 5.0,
         category: ["Веб-дизайн", "Иллюстрации"],
      },
      {
         avatar: "Perfomer2.png",
         fullname: "Сергиенко Веня",
         href: "/",
         description:
            "Бекенд-гений месяца: уникальное первое место в серверном коде!",
         rate: 4.5,
         category: ["Программирование", "Бэк-энд"],
      },
      {
         avatar: "Perfomer3.png",
         fullname: "Коваленко Веня",
         href: "/",
         description:
            "Копирайт мастер - первое место за месяц, слова, которые завоевали всех!",
         rate: 1.0,
         category: ["Копирайтинг", "Парсинг книг"],
      },
      {
         avatar: "Perfomer1.png",
         fullname: "Викторов Диса",
         href: "/",
         description:
            "Копирайт мастер - первое место за месяц, слова, которые завоевали всех!",
         rate: 1.0,
         category: ["Копирайтинг", "Парсинг книг"],
      },
      {
         avatar: "Perfomer2.png",
         fullname: "Иванов Иван",
         href: "/",
         description:
            "Тестовый пользователь - описание пользователя Иванова Ивана.",
         rate: 3.8,
         category: ["Тестирование", "Качество"],
      },
      {
         avatar: "Perfomer3.png",
         fullname: "Петров Петр",
         href: "/",
         description:
            "Тестовый пользователь - описание пользователя Петрова Петра.",
         rate: 4.2,
         category: ["Тестирование", "Автоматизация"],
      },
      {
         avatar: "Perfomer1.png",
         fullname: "Сидоров Сидор",
         href: "/",
         description:
            "Тестовый пользователь - описание пользователя Сидорова Сидора.",
         rate: 2.7,
         category: ["Тестирование", "Ручное тестирование"],
      },
      {
         avatar: "Perfomer2.png",
         fullname: "Александров Саня",
         href: "/",
         description:
            "Тестовый пользователь - описание пользователя Александрова Александра.",
         rate: 3.5,
         category: ["Тестирование", "QA"],
      },
   ]
   return (
      <section className={css.wrapper}>
         <div className={css.navContainer}>
            <HeaderLink
               title={t("title")}
               description={t("textLink")}
               href='/leaderboard'
            />
         </div>
         <Carousel
            orientation='horizontal'
            opts={{ align: "center" }}
            plugins={[
               Autoplay({
                  delay: 4000,
                  stopOnMouseEnter: true,
               }),
            ]}
            className='w-full max-w-[1280px]'
         >
            <CarouselContent className={css.cardsContainer}>
               {LeaderBoardItems.map((item: LeaderBoardItem, index: number) => (
                  <CarouselItem
                     key={index}
                     className='md:basis-1/2 lg:basis-1/3'
                  >
                     <LeaderCard
                        avatar={item.avatar}
                        fullname={item.fullname}
                        href={item.href}
                        description={item.description}
                        category={item.category}
                        rate={item.rate}
                        key={index}
                     />
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
      </section>
   )
}

import HeaderLink from "@/app/(marketing)/_components/HeaderLink/HeaderLink"
import css from "@/app/(marketing)/_components/LeaderBoard/LeaderBoard.module.scss"
import LeaderCard from "../LeaderCard/LeaderCard"

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
    * @dev only for a dev, later will be through the I18n module
    */
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
   ]
   return (
      <section className={css.wrapper}>
         <div className={css.navContainer}>
            <HeaderLink
               title='Лидеры в своей категории'
               description='Хочешь быть здесь?'
               href='/leaderboard'
            />
         </div>
         <div className={css.cardsContainer}>
          {LeaderBoardItems.map((item: LeaderBoardItem, index: number) => (
              <LeaderCard
                avatar={item.avatar}
                fullname={item.fullname}
                href={item.href}
                description={item.description}
                category={item.category}
                rate={item.rate}
                key={index}
              />
          ))}
         </div>
      </section>
   )
}

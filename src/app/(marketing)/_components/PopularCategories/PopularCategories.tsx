import PopularCategoryCard from "../PopularCategoryCard/PopularCategoryCard"
import css from "@/app/(marketing)/_components/PopularCategories/PopularCategories.module.scss"
import ICategoriesCardProps from "@/app/interfaces/ICategoriesCardProps"
import Illustration from "@/../public/categoryIcons/IllustrationCategories.png"
import Image from "next/image"
import HeaderLink from "@/app/(marketing)/_components/HeaderLink/HeaderLink"

export default function PopularCategories() {
   /**
    * @dev only for a dev, later will be through the I18n module
    */
   const categoryesCards = [
      {
         icon: "webPage.svg",
         name: "Графический дизайн",
         description: "Креативный и уникальный графический дизайн.",
         textLink: "Выбрать дизайнера",
         link: "/orders",
      },
      {
         icon: "videoIcon.svg",
         name: "Видео-продакшн",
         description:
            "Создание и редактирование видеоконтента для различных целей.",
         textLink: "Посмотреть заказы",
         link: "/orders",
      },
      {
         icon: "penIcon.svg",
         name: "Письменные работы",
         description: "Написание, редактирование текстов, статей.",
         textLink: "Редактировать текст",
         link: "/orders",
      },
      {
         icon: "desktopIcon.svg",
         name: "Веб-разработка",
         description: "Проекты по созданию и развитию веб-сайтов и приложений.",
         textLink: "Посмотреть заказы",
         link: "/orders",
      },
   ]

   return (
      <section className={css.wrapper}>
        <div className={css.navContainer}>
         <HeaderLink title="Популярные категории" href="/categories" description="Больше категорий"/>
        </div>
         <div className={css.itemsContainer}>
         <div className={css.leftItems}>
            {categoryesCards.map((item: ICategoriesCardProps, key: number) => (
               <PopularCategoryCard
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                  textLink={item.textLink}
                  link={item.link}
                  key={key}
               />
            ))}
         </div>
         <div className={css.rightItems}>
            <Image alt="Categoryes illustration" src={Illustration} width={430} height={370}/>
         </div>
        </div>
      </section>
   )
}

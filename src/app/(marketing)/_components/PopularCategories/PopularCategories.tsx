import PopularCategoryCard from "../PopularCategoryCard/PopularCategoryCard"
import css from "@/app/(marketing)/_components/PopularCategories/PopularCategories.module.scss"
import ICategoriesCardProps from "@/app/interfaces/ICategoriesCardProps"
import arrowRightSmall from "@/../public/arrow-right-small.svg"
import Illustration from "@/../public/categoryIcons/IllustrationCategories.png"
import Image from "next/image"
import Link from "next/link"

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
         <h2>Популярные категории</h2>
         <Link className={css.moreCategoryLink + " text-dark-text-colored"} href={'/categories'}>
            Больше категорий
            <Image alt="arrow icon" src={arrowRightSmall} width={24} height={24}/>
         </Link>
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

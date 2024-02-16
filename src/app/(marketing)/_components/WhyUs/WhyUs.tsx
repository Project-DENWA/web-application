import HeaderLink from "@/app/(marketing)/_components/HeaderLink/HeaderLink"
import WhyUsCard from "@/app/(marketing)/_components/WhyUsCard/WhyUsCard"
import css from "@/app/(marketing)/_components/WhyUs/WhyUs.module.scss"
import ICategoriesCardProps from "@/app/interfaces/ICategoriesCardProps"

export default function WhyUs() {
   /**
    * @dev only for a dev, later will be through the I18n module
    */
   const whyUsCards = [
      {
         icon: "Smile.svg",
         name: "Бесплатно и просто",
         description: "Бесплатное и простое использование без скрытых платежей и комиссий.",
         textLink: "Быстрый старт",
         link: "/",
      },
      {
         icon: "Shield.svg",
         name: "Защита ваших данных",
         description: "Гарантия безопасности и конфиденциальности ваших данных.",
         textLink: "Узнать о защите",
         link: "/",
      },
      {
         icon: "Puzzle.svg",
         name: "Конструктор резюме",
         description: "Легкое создание профессиональных резюме для всех пользователей.",
         textLink: "Создать резюме",
         link: "/",
      },
      {
         icon: "Comet.svg",
         name: "Лучшая поддержка клиентов",
         description: "Команда экспертов, всегда готовы предложить оперативную помощь.",
         textLink: "Связаться с поддержкой",
         link: "/",
      },
   ]

   return (
      <section className={css.wrapper}>
         <div className={css.navContainer}>
            <HeaderLink
               title='Почему выбирают нас?'
               href='/'
               description='Узнать все преимущества'
            />
         </div>
         <div className={css.cardWrapper}>
            {whyUsCards.map((item: ICategoriesCardProps, key: number) => (
               <WhyUsCard
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                  textLink={item.textLink}
                  link={item.link}
                  key={key}
               />
            ))}
         </div>
      </section>
   )
}

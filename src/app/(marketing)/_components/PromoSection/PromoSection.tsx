import css from "@/app/(marketing)/_components/PromoSection/PromoSection.module.scss"
import { Button } from "@/shared/ui/button"
import AnimatedText from "../AnimatedText/AnimatedText"
import Link from "next/link"

export default function PromoSection() {
   return (
      <article className={css.wrapper}>
         <div className={css.title}>
            <h1>Фриланс биржа</h1>
            <AnimatedText />
         </div>
        <div className={css.promoContainer}>
         <div>
            <p>
               Оптимизируйте работу с Denwa находите проекты, контролируйте
               нагрузку, увеличивайте заработок
            </p>
         </div>
          <Link href={"/signin"}>
            <Button variant='default'>Работать вместе с Denwa</Button>
            <Button variant='dark'>Сделать заказ</Button>
          </Link>
        </div>
      </article>
   )
}

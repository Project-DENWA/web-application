import css from "@/app/(marketing)/_components/LeaderCard/LeaderCard.module.scss"
import Image from "next/image"
import Link from "next/link"
import Perfomer from "@/../public/photosPerfomers/Perfomer1.png"
type Props = {}

export default function LeaderCard({}: Props) {
   return (
      <article className={css.wrapper}>
        <div className={css.leftItems}>
            <div>
            <Image
                alt="Photo of the performer"
                src={Perfomer}
                width={109}
                height={109}
            />
            </div>
        </div>
        <div className={css.rightItems}>
            <h3 className='text-light-main-dark dark:text-dark-text-primary'>Николаенко Веня</h3>
            <h4 className='text-light-main-dark dark:text-dark-text-primary'>С уникальным видением, дизайнер заслужил первое место в конкурсе месяца.</h4>
            <div className={css.categoryes}>
                <Link href={"/"} className=" text-dark-text-colored">Веб-дизайн</Link>
                <Link href={"/"} className=" text-dark-text-colored">Иллюстрации</Link>
            </div>
        </div>
      </article>
   )
}

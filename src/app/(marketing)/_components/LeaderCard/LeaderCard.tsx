import css from "@/app/(marketing)/_components/LeaderCard/LeaderCard.module.scss"
import Image from "next/image"
import Link from "next/link"

interface LeaderBoardItem {
   avatar: string
   fullname: string
   href: string
   description: string
   rate: number
   category: string[]
}

export default function LeaderCard({
   avatar,
   fullname,
   description,
   category,
   rate,
   href,
}: LeaderBoardItem) {
   return (
      <Link href={href} className={css.wrapper}>
         <div className={css.leftItems}>
            <Image
               alt='Photo of the performer'
               src={"/photosPerfomers/" + avatar}
               width={109}
               height={109}
            />
            <div className={css.circle + " bg-light-main-bg-main dark:bg-dark-main-bg-main"}>
               <p className='text-dark-text-colored'>{rate}</p>
            </div>
         </div>
         <div className={css.rightItems}>
            <h3 className='text-light-main-dark dark:text-dark-text-primary'>
               {fullname}
            </h3>
            <h4 className='text-light-main-dark dark:text-dark-text-primary'>
               {description}
            </h4>
            <div className={css.categoryes}>
               {category.map((item, index: number) => (
                  <Link href={href} key={index}>
                     <p className='text-dark-text-colored'>{item}</p>
                  </Link>
               ))}
            </div>
         </div>
      </Link>
   )
}

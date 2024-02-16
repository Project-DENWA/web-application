import HeaderLink from "@/app/(marketing)/_components/HeaderLink/HeaderLink"
import css from "@/app/(marketing)/_components/LeaderBoard/LeaderBoard.module.scss"
import LeaderCard from "../LeaderCard/LeaderCard"
export default function LeaderBoard() {
  return (
    <section className={css.wrapper}>
        <div className={css.navContainer}>
            <HeaderLink title="Лидеры в своей категории" description="Хочешь быть здесь?" href="/leaderboard"/>
        </div>
        <LeaderCard/>
    </section>
  )
}
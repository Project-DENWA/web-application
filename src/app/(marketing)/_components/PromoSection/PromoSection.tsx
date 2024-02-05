import css from '@/app/(marketing)/_components/PromoSection/PromoSection.module.scss'
import { Button } from '@/shared/ui/button'
import AnimatedText from '../AnimatedText/AnimatedText';

export default function PromoSection() {
  return (
    <article className={css.wrapper}>
      <div className={css.mainTitleContainer}>
        <h1>
          Фриланс биржа 
        </h1>
        <AnimatedText/> 
      </div>
      <div className={css.descriptionContainer}>
        <p>Оптимизируйте работу с Denwa находите проекты, контролируйте нагрузку, увеличивайте заработок</p>
      </div>
      <div className={css.functionalBtnsContainer}>
      </div>
    </article>
  )
}

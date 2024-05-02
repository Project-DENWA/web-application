import { cn } from '@/shared/lib/utils';
import css from './ResumesCard.module.scss';
import Image from 'next/image';
import Performer from '@/../public/photosPerfomers/Perfomer1.png';
import Star from '@/../public/Star.svg';
import Shield from '@/../public/Shield.svg';
import CategoryCard from '@/shared/ui/categoryCard/CategoryCard';
import { useTranslations } from 'next-intl';

type Category = {
  categoryName: string;
};

type Props = {
  avatarUrl: string;
  fullname: string;
  description: string;
  rating: number;
  experience: string;
  category: Category[];
};

export default function ResumesCard({
  avatarUrl,
  fullname,
  description,
  experience,
  rating,
  category,
}: Props): JSX.Element {
  const t = useTranslations('resumes.card');
  const wrapperClass = cn(
    css.wrapper,
    'bg-light-main-colored-10 dark:bg-dark-main-colored-10',
  );
  const numberOfStars = Math.round(rating);

  return (
    <div className={wrapperClass}>
      <div>
        <Image
          alt="Performer avatar"
          src={`/photosPerfomers/${avatarUrl}`}
          width={65}
          height={65}
        />
      </div>
      <div className={css.rightItems}>
        <div className={css.username}>
          <h2>{fullname}</h2>
          <Image alt="Verified shield" src={Shield} width={24} height={24} />
        </div>
        <div className={css.stats}>
          <div>
            <h4 className="text-light-text-main-50">{t('rating')}:</h4>
            <div className={css.stars}>
              {Array.from({ length: numberOfStars }, (_, i) => (
                <Image key={i} alt="Star" src={Star} width={20} height={20} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-light-text-main-50">{t('experience')}:</h4>
            <h4>{experience}</h4>
          </div>
        </div>
        <div className={css.description}>
          <h5>{description}</h5>
        </div>
        <div className={css.categories}>
          {category.map((category, index) => (
            <CategoryCard category={category.categoryName} key={index} /> 
          ))}
        </div>
      </div>
    </div>
  );
}

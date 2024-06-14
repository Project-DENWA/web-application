import css from './ResumesCard.module.scss';

import { cn } from '@/shared/lib/utils';
import Star from '@/../public/Star.svg';
import Shield from '@/../public/Shield.svg';

import Image from 'next/image';

import CategoryCard from '@/shared/ui/categoryCard/CategoryCard';

import useMaxExperience from '@/shared/lib/hooks/useMaxExperience';
import { useFormatExperience } from '@/shared/lib/hooks/useFormatExperience';
import { useTranslations } from 'next-intl';

type Category = {
  id: string;
  name: string;
  exp: string;
};

type Props = {
  avatarUrl: string | null;
  fullname: string;
  description: string;
  rating: number;
  verified: boolean;
  category: Category[];
};

export default function ResumesCard({
  avatarUrl,
  fullname,
  description,
  verified,
  rating,
  category,
}: Props): JSX.Element {
  const t = useTranslations('resumes.card');
  const wrapperClass = cn(css.wrapper,'bg-light-main-colored-10 dark:bg-dark-main-colored-10');
  const numberOfStars = Math.round(rating ?? 0);

  const defaultAvatar = '/account/defaultAvatar.svg';
  const baseUrl = 'https://3c6czcvp-5000.euw.devtunnels.ms/users/avatar/';

  const maxExperience = useMaxExperience(category);

  return (
    <div className={wrapperClass}>
      <div className={css.avatar}>
        {avatarUrl ? (
          <Image
            alt="Performer avatar"
            src={`${baseUrl}${avatarUrl}`}
            width={65}
            height={65}
          />
        ) : (
          <Image
            alt="Performer avatar"
            src={defaultAvatar}
            className="dark:invert"
            width={65}
            height={65}
          />
        )}
      </div>
      <div className={css.rightItems}>
        <div className={css.username}>
          <h2>{fullname}</h2>
          {verified && (
            <Image alt="Verified shield" src={Shield} width={24} height={24} />
          )}
        </div>
        <div className={css.stats}>
          <div>
            <h4 className="text-light-text-main-50">{t('rating')}:</h4>
            <div className={css.stars}>
            {rating ? (
                Array.from({ length: numberOfStars }, (_, i) => (
                  <Image key={i} alt="Star" src={Star} width={20} height={20} />
                ))
              ) : (
                <p className={cn(css.empty, 'text-light-text-main-50')}>{t('empty')}</p>
              )}
            </div>
          </div>
          <div>
            <h4 className="text-light-text-main-50">{t('experience')}:</h4>
            <h4>{useFormatExperience(maxExperience)}</h4>
          </div>
        </div>
        <div className={css.description}>
          <h5>{description}</h5>
        </div>
        <div className={css.categories}>
          {category.map((cat, index) => (
            <CategoryCard category={cat.name} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

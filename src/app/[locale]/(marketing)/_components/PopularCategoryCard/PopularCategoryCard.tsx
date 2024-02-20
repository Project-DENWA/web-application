import css from "@/app/[locale]/(marketing)/_components/PopularCategoryCard/PopularCategoryCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import arrowRightSmall from "@/../public/arrow-right-small.svg";
import ICategoriesCardProps from "@/app/interfaces/ICategoriesCardProps";

export default function PopularCategoryCard({
  name,
  description,
  icon,
  link,
  textLink,
}: ICategoriesCardProps) {
  return (
    <article
      className={
        css.wrapper + " bg-light-main-bg-primary dark:bg-dark-main-bg-primary"
      }
    >
      <Image alt="Icon" src={"/categoryIcons/" + icon} width={24} height={24} />
      <div className={css.descriptionContainer}>
        <div>
          <div>
            <h3 className="dark:text-dark-text-primary">{name}</h3>
            <p className="dark:text-dark-text-primary">{description}</p>
          </div>
        </div>
        <Link href={link} className="text-dark-text-colored">
          {textLink}
          <Image
            alt="arrow icon"
            src={arrowRightSmall}
            width={24}
            height={24}
            id={css.arrow}
          />
        </Link>
      </div>
    </article>
  );
}

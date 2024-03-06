import Image from "next/image";
import Link from "next/link";
import css from "@/app/[locale]/(marketing)/_components/HeaderLink/HeaderLink.module.scss";
import arrowRightSmall from "@/../public/arrow-right-small.svg";
import { Url } from "url";

type Props = {
  title: string;
  href: string;
  description: string;
  abbreviatedDescription?: string;
};

export default function HeaderLink({ title, href, description, abbreviatedDescription }: Props) {
  return (
    <div className={css.wrapper}>
      <h2>{title}</h2>
      <Link
        className={css.moreCategoryLink + " text-dark-text-colored"}
        href={href}
      >
        {description}
        <Image alt="arrow icon" src={arrowRightSmall} width={24} height={24} />
      </Link>
      <Link
        className={css.abbreviatedMoreCategoryLink + " text-dark-text-colored"}
        href={href}
      >
        {abbreviatedDescription}
        <Image alt="arrow icon" src={arrowRightSmall} width={24} height={24} />
      </Link>
    </div>
  );
}

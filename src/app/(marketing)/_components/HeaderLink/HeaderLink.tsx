import Image from "next/image";
import Link from "next/link";
import css from "@/app/(marketing)/_components/HeaderLink/HeaderLink.module.scss";
import arrowRightSmall from "@/../public/arrow-right-small.svg";
import { Url } from "url";

type Props = {
  title: string;
  href: string;
  description: string;
};

export default function HeaderLink({ title, href, description }: Props) {
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
    </div>
  );
}

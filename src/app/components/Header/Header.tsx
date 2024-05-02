import Image from "next/image";
import headlineIcon from "@/../public/headlineIcon.svg";
import arrowRight from "@/../public/arrow-right.svg";
import css from "@/app/components/Header/Header.module.scss";
import logotype from "@/../public/logotype.svg";
import Link from "next/link";
import LocaleSwitcher from "@/shared/ui/LocaleSwitcher";
import ThemeSwitcher from "@/shared/ui/ThemeSwitcher";
import UnauthorizedUser from "./UnauthorizedUser";
import UserLayout from "./UserLayout";
import { useTranslations, useLocale } from "next-intl";
export default function Header() {
  const t = useTranslations("header")
  const locale = useLocale()
  return (
    <header
      className={
        css.header + " bg-light-main-bg-main dark:bg-dark-main-bg-main"
      }
    >
      <Link
        className={css.headlineBanner + " hover:opacity-90 transition-opacity"}
        href={"/"}
      >
        <div>
          <Image
            alt="headline icon smile"
            src={headlineIcon}
            width={28}
            height={28}
          />
        </div>
        <p className="text-dark-text-primary">
          <u>DenwaHub 2024.</u>{" "}
          <span>{t("description")}</span>
        </p>
        <div>
          <Image
            src={arrowRight}
            alt="right arrow"
            width={24}
            height={24}
            id={css.arrow}
          />
        </div>
      </Link>
      <div className={css.mainHeader}>
        <Link href={"/"} className={css.logotype}>
          <Image
            src={logotype}
            alt="denwa logotype"
            width={62}
            height={38}
            className="dark:invert hover:scale-105 transition-transform duration-75"
          />
        </Link>
        <nav>
          <Link
            href={`/${locale}/orders`}
            className="hover:text-light-text-colored dark:hover:text-dark-text-colored transition-colors"
          >
            {t("orders")}
          </Link>
          <Link
            href={`/${locale}/freelancers`}
            className="hover:text-light-text-colored dark:hover:text-dark-text-colored transition-colors"
          >
            {t("specialists")}
          </Link>
          <Link
            href={`/${locale}/news`}
            className="hover:text-light-text-colored dark:hover:text-dark-text-colored transition-colors"
          >
            {t("news")}
          </Link>
          <Link
            href={`/${locale}/more`}
            className="hover:text-light-text-colored dark:hover:text-dark-text-colored transition-colors"
          >
            {t("more")}
          </Link>
        </nav>
        <div className={css.rightItems}>
          <UserLayout />
          <div>
            <LocaleSwitcher/>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

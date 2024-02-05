import Image from "next/image";
import headlineIcon from "@/../public/headlineIcon.svg";
import arrowRight from "@/../public/arrow-right.svg";
import css from "@/app/components/Header/Header.module.scss";
export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.headlineBanner}>
        <div>
          <Image
            alt="headline icon smile"
            src={headlineIcon}
            width={28}
            height={28}
          />
        </div>
        <h1 className="text-dark-text-primary">
          <u>DenwaHub 2024.</u> Программируй деньги с ведущими специалистами.
        </h1>
        <div>
          <Image src={arrowRight} alt="right arrow" width={24} height={24} />
        </div>
      </div>
    </header>
  );
}

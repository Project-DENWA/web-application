import css from "@/styles/components/Header/Dropdown.module.scss";
import Image from "next/image";
import Link from "next/link";
import bottomArrow from "@/assets/arrows/bottom.svg";

type Props = {
  data: Product[];
  children: React.ReactNode;
};
type Product = {
  title: string;
  href: string;
  img: string;
};

export default function Dropdown({ data, children }: Props) {
  return (
    <div className={css.dropdown}>
      <div role="button" className={css.dropbtn}>
        {children}
      </div>
      <div className={css.dropdowncontent}>
        {data.map((item, index) => (
          <Link href={`/${item.href}`} key={index} target="_self">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

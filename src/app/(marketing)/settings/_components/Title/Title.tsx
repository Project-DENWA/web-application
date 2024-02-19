import { Separator } from "@/shared/ui/separator";
import css from "./Title.module.scss";

export default function Title() {
  return (
    <div className={css.wrapper}>
      <h1 className="text-light-text-main-100 dark:text-dark-text-main-100">
        Настройки
      </h1>
      <p className="text-light-text-main-50 dark:text-dark-text-main-50">
        Управляйте настройками своей учетной записи
      </p>
      <Separator className="bg-light-text-main-50 dark:bg-dark-text-main-50" />
    </div>
  );
}

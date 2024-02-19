"use client";

import css from "./Tabs.module.scss";
import { cn } from "@/shared/lib/utils";
import Avatar from "./../Avatar/Avatar";
import { getUserData } from "@/shared/lib/cookie";

export default function Tabs() {
  const user = getUserData();
  return (
    <div className={css.wrapper}>
      <div className={css.menu}>
        <div className={cn(css.item, css.active)}>
          <p>Профиль</p>
        </div>
        <div
          className={cn(
            css.item,
            "text-light-text-main-50 dark:text-dark-text-main-50"
          )}
        >
          <p>Аккаунт</p>
        </div>
        <div
          className={cn(
            css.item,
            "text-light-text-main-50 dark:text-dark-text-main-50"
          )}
        >
          <p>Социальные сети</p>
        </div>
        <div
          className={cn(
            css.item,
            "text-light-text-main-50 dark:text-dark-text-main-50"
          )}
        >
          <p>Уведомления</p>
        </div>
        <div className={cn(css.item, "text-[#FF3434]")}>
          <p>Выйти из аккаунта</p>
        </div>
      </div>
      <div className={css.content}>
        <div className={css.title}>
          <h2 className="text-light-text-main-100 dark:text-dark-text-main-100">
            Профиль
          </h2>
          <p className="text-light-text-main-50 dark:text-dark-text-main-50">
            Настройте внешний вид своего профиля
          </p>
        </div>
        <div className={css.bannerAvatar}>
          <Avatar />
        </div>
      </div>
    </div>
  );
}

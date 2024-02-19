import Link from "next/link";
import css from "./Header.module.scss";
import { UserData } from "@/shared/lib/cookie";
import Image from "next/image";
import user from "@/../public/user.svg";
import notifications from "@/../public/notifications.svg";
import chat from "@/../public/chat.svg";

export default function AuthorizedUser({ data }: { data: UserData }) {
  return (
    <div className={css.AuthorizedUserWrapper}>
      <Link href="/chat">
        <Image
          src={chat}
          height={24}
          width={24}
          alt="chat icon"
          className="dark:invert hover:opacity-85 transition-opacity"
        />
      </Link>
      <Link href="/notifications">
        <Image
          src={notifications}
          height={24}
          width={24}
          alt="notifications icon"
          className="dark:invert hover:opacity-85 transition-opacity"
        />
      </Link>
      <Link href="/settings">
        <Image
          src={user}
          height={24}
          width={24}
          alt="user icon"
          className="dark:invert hover:opacity-85 transition-opacity"
        />
        
      </Link>
    </div>
  );
}

import Link from "next/link";
import css from "./Header.module.scss";
import { UserData } from "@/shared/lib/cookie";
import Image from "next/image";
import user from "@/../public/user.svg";
import notifications from "@/../public/notifications.svg";
import chat from "@/../public/chat.svg";
import { useLocale } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"

export default function AuthorizedUser({ data }: { data: UserData }) {
  const locale = useLocale();
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
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Link href="/settings">
          <Image
            src={user}
            height={24}
            width={24}
            alt="user icon"
            className="dark:invert hover:opacity-85 transition-opacity"
          />
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem><Link href={`${locale}` + '/settings'}>Мой аккаунт </Link></DropdownMenuItem>
        <DropdownMenuItem><Link href={'/profile'}>Профиль </Link></DropdownMenuItem>
        <DropdownMenuItem><Link href={'/resumebuilder'}>Создать резюме </Link></DropdownMenuItem>
        <DropdownMenuItem><Link href={'/logout'}>Выйти </Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
   
    </div>
  );
}

import Image from "next/image"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Checkbox } from "@/shared/ui/checkbox"
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/shared/ui/dialog"
import css from "@/app/components/SignUpModal/SignUpModal.module.scss"
import Link from "next/link"

type Props = {
   children: React.ReactNode
}

export default function SignUpModal({ children }: Props) {
   return (
      <Dialog modal={true}>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className='max-w-[425px] bg-light-main-full-white border-none rounded-3xl dark:bg-dark-main-bg-primary'>
            <DialogHeader>
               <DialogTitle className='text-xl font-semibold'>
                  Регистрация
               </DialogTitle>
            </DialogHeader>
            <Input placeholder='Логин' />
            <Input placeholder='Полное имя' />
            <Input placeholder='Электронная почта' />
            <Input placeholder='Пароль' />
            <div className={css.checkboxContainer}>
               <Checkbox />
               <div className={css.servicePolicyContainer}>
                  <p>
                     Я принимаю{" "}
                     <Link
                        href={"/agreement"}
                        className='text-light-text-colored'
                     >
                        Пользовательское согласение
                     </Link>{" "}
                     и{" "}
                     <Link
                        href={"privacypolicy"}
                        className='text-light-text-colored'
                     >
                        Политику конфиндециальности
                     </Link>
                  </p>
               </div>
            </div>
            <Button variant={"default"}>Продолжить</Button>
            <DialogFooter>
               <div className={css.footer}>
                  <p>Уже зарегистрированы?</p>
                  <Button
                     size={"default"}
                     className={"text-light-main-colored-100 font-normal"}
                     variant={"link"}
                  >
                     Войти
                  </Button>
               </div>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
}

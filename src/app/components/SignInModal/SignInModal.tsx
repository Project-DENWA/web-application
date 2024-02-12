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
import css from "@/app/components/SignInModal/SignInModal.module.scss"

import SignUpModal from "@/app/components/SignUpModal/SignUpModal"

import GoogleIcon from "@/../public/socialcons/GoogleIcon.svg"
import TwitterIcon from "@/../public/socialcons/TwitterIcon.svg"
import VkIcon from "@/../public/socialcons/VkIcon.svg"
import Link from "next/link"

export default function SignInModal() {
   return (
      <Dialog modal={true}>
         <DialogTrigger asChild>
            <Button variant={"default"}>Войти</Button>
         </DialogTrigger>
         <DialogContent className='max-w-[425px] bg-light-main-full-white border-none rounded-3xl dark:bg-dark-main-bg-primary'>
            <DialogHeader>
               <DialogTitle className='text-xl font-semibold'>
                  Войти
               </DialogTitle>
            </DialogHeader>
            <Input placeholder='Логин / Почта' />
            <Input placeholder='Пароль' />
            <div className={css.checkboxContainer}>
               <div>
                  <Checkbox />
                  <p>Запомнить</p>
               </div>
               <div>
                  <Button variant={"ghost"}>Забыли пароль?</Button>
               </div>
            </div>
            <Button variant={"default"}>Продолжить</Button>
            <div className={css.socialIcons}>
               <Link href={"/"}>
                  <Button size={"default"} variant={"ghost"}>
                     <Image
                        className='dark:invert'
                        alt='Google Icon'
                        src={GoogleIcon}
                        width={40}
                        height={40}
                     />
                  </Button>
               </Link>
               <Link href={"/"}>
                  <Button size={"default"} variant={"ghost"}>
                     <Image
                        className='dark:invert'
                        alt='Twitter Icon'
                        src={TwitterIcon}
                        width={48}
                        height={48}
                     />
                  </Button>
               </Link>
               <Link href={"/"}>
                  <Button size={"default"} variant={"ghost"}>
                     <Image
                        className='dark:invert'
                        alt='Vk Icon'
                        src={VkIcon}
                        width={48}
                        height={48}
                     />
                  </Button>
               </Link>
            </div>
            <DialogFooter>
               <div className={css.footer}>
                  <p>Нет аккаунта?</p>
                  <SignUpModal>
                     <Button
                        size={"default"}
                        className={"text-light-main-colored-100 font-normal"}
                        variant={"link"}
                     >
                        Зарегистрируйтесь
                     </Button>
                  </SignUpModal>
               </div>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
}

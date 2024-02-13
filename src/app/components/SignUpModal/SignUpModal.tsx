import Image from "next/image"
import googleicon from "@/../public/google icon.svg"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"

import {
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogDescription,
} from "@/shared/ui/dialog"
import css from "@/app/components/SignInModal/Modal.module.scss"
import { Separator } from "@/shared/ui/separator"
import Link from "next/link"
import { cn } from "@/shared/lib/utils"
type Props = {
   handleOpenModal: (modalType: "signIn" | "signUp") => void
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   open: boolean
}

export default function SignUpModal({
   handleOpenModal,
   open,
   setIsOpen,
}: Props) {
   return (
      <Dialog modal={true} open={open} onOpenChange={setIsOpen}>
         <DialogContent className={css.dialogContent}>
            <DialogHeader>
               <DialogTitle className='text-xl font-semibold'>
                  Регистрация
               </DialogTitle>
            </DialogHeader>
            <Button variant='outline' size='social'>
               <Image
                  src={googleicon}
                  width={18}
                  height={18}
                  alt='google icon'
                  loading='lazy'
               />
               Продолжить с Google
            </Button>
            <div className={css.separator}>
               <Separator orientation='horizontal' decorative />
               <p className='text-light-text-main-50 dark:text-light-text-main-50'>
                  или
               </p>
               <Separator orientation='horizontal' decorative />
            </div>
            <Input placeholder='ФИО' />
            <Input placeholder='Логин' />
            <Input placeholder='Электронная почта' />
            <Input placeholder='Пароль' />
            <Button variant={"default"}>Продолжить</Button>
            <DialogDescription>
               <p
                  className={cn(
                     css.privacy,
                     "text-light-text-main-50 dark:text-light-text-main-50"
                  )}
               >
                  Создавая аккаунт, я принимаю следующие документы:{" "}
                  <Link
                     className='dark:text-light-text-colored text-light-text-colored'
                     href={"#"}
                  >
                     Условия обслуживания{" "}
                  </Link>
                  и{" "}
                  <Link
                     className='dark:text-light-text-colored text-light-text-colored'
                     href={"#"}
                  >
                     Конфиденциальность
                  </Link>
                  .
               </p>
            </DialogDescription>
            <DialogFooter>
               <div className={css.footer}>
                  <p>Уже есть аккаунт?</p>
                  <Button
                     size={"default"}
                     className={"text-light-main-colored-100 font-normal"}
                     variant={"link"}
                     onClick={() => handleOpenModal("signIn")}
                  >
                     Войти
                  </Button>
               </div>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
}

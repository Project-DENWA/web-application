"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import googleicon from "@/../public/google icon.svg";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Separator } from "@/shared/ui/separator";
import { toast } from "sonner";
import { cn } from "@/shared/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/app/components/SignUpModal/schema";
import { z } from "zod";
import { useRegistrationMutation } from "@/shared/redux/features/authApi";
import { Form, FormControl, FormField, FormItem } from "@/shared/ui/form";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

import css from "@/app/components/SignInModal/Modal.module.scss";
type Props = {
  handleOpenModal: (modalType: "signIn" | "signUp") => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

export default function SignUpModal({
  handleOpenModal,
  open,
  setIsOpen,
}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
  });
  const [isErrorsShown, setIsErrorsShown] = useState<boolean>(false);
  type FieldErrors = {
    [key: string]: any | undefined;
  };

  const errors: FieldErrors = form.formState.errors;
  const router = useRouter();
  const [register, { isLoading }] = useRegistrationMutation();
  useEffect(() => {
    if (!isErrorsShown) return;
    for (const field in errors) {
      const errorMessage = errors[field]?.message;
      if (errorMessage) {
        toast(errorMessage, { position: "top-center" });
      }
    }
    setIsErrorsShown(false);
  }, [isErrorsShown]);

  const signUp = async (data: z.infer<typeof formSchema>) => {
    const fullname = data.email;
    const username = data.username;
    const email = data.email;
    const password = data.password;
    const payload = {
      fullname,
      username,
      email,
      password,
    };
    toast.loading("Creating an account...");
    try {
      const responce = await register(payload).unwrap();
      toast.success("Account created successfully");
      form.reset();
      router.push("/");
    } catch (e) {
      toast.error("Error");
      console.error(e);
    } finally {
      toast.dismiss();
    }
  };
  return (
    <Dialog modal={true} open={open} onOpenChange={setIsOpen}>
      <DialogContent className={css.dialogContent}>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Регистрация
          </DialogTitle>
        </DialogHeader>
        <Button variant="outline" size="social">
          <Image
            src={googleicon}
            width={18}
            height={18}
            alt="google icon"
            loading="lazy"
          />
          Продолжить с Google
        </Button>
        <div className={css.separator}>
          <Separator orientation="horizontal" decorative />
          <p className="text-light-text-main-50 dark:text-light-text-main-50">
            или
          </p>
          <Separator orientation="horizontal" decorative />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(signUp)}>
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Полное имя" {...field} />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Логин" {...field} />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Электронная почта" {...field} />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Пароль" {...field} />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <Button onClick={() => setIsErrorsShown(true)} variant={"default"}>
              Продолжить
            </Button>
          </form>
        </Form>
        <p
          className={cn(
            css.privacy,
            "text-light-text-main-50 dark:text-light-text-main-50"
          )}
        >
          Создавая аккаунт, я принимаю следующие документы:{" "}
          <Link
            className="dark:text-light-text-colored text-light-text-colored"
            href={"#"}
          >
            Условия обслуживания{" "}
          </Link>
          и{" "}
          <Link
            className="dark:text-light-text-colored text-light-text-colored"
            href={"#"}
          >
            Конфиденциальность
          </Link>
          .
        </p>
        <DialogFooter>
          <p>Уже есть аккаунт?</p>
          <Button
            size={"link"}
            className={"text-light-main-colored-100 font-normal"}
            variant={"link"}
            onClick={() => handleOpenModal("signIn")}
          >
            Войти
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

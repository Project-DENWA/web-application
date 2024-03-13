"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Checkbox } from "@/shared/ui/checkbox";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Separator } from "@/shared/ui/separator";
import { Form, FormControl, FormField, FormItem } from "@/shared/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { formSchema } from "@/app/components/SignInModal/schema";

import { toast } from "sonner";

import { useAuth } from "@/shared/lib/hooks/useAuth";
import { useLoginMutation } from "@/shared/redux/features/authApi";
import { setToken } from "@/shared/lib/cookie";
import { setUserData } from "@/shared/lib/localstorage";

import { useTranslations } from "next-intl";

import { cn } from "@/shared/lib/utils";

import css from "@/app/components/SignInModal/Modal.module.scss";
import googleicon from "@/../public/google icon.svg";

type Props = {
  children: React.ReactNode;
  handleOpenModal: (modalType: "signIn" | "signUp") => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

export default function SignInModal({
  children,
  handleOpenModal,
  open,
  setIsOpen,
}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailorusername: "",
      password: "",
      remember: false,
    },
  });
  const [isErrorsShown, setIsErrorsShown] = useState<boolean>(false);
  type FieldErrors = {
    [key: string]: any | undefined;
  };
  const { updateAuthInfo } = useAuth();

  const errors: FieldErrors = form.formState.errors;
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const t = useTranslations("signInModal");
  type Response = {
    status: number;
    data: {
      message: any;
    };
  };

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

  const signIn = async (data: z.infer<typeof formSchema>) => {
    const emailOrUsername = data.emailorusername;
    const isEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(emailOrUsername);
    const username = isEmail ? "" : emailOrUsername;
    const email = isEmail ? emailOrUsername : "";
    const payload = {
      username,
      email,
      password: data.password,
      remember: data.remember,
      tfaCode: "123456",
    };
    toast.loading("Logining...");
    try {
      const response = await login(payload).unwrap();
      setToken(
        response.result.tokens.accessToken,
        response.result.tokens.refreshToken
      );
      updateAuthInfo(response.result.userModel, true);
      console.log(response);
      setUserData(response.result.userModel);
      toast.success("Login succesfull");
      form.reset();
      router.push("/");
    } catch (e) {
      toast.error("Error");
      // REMOVE
      console.log(e);
    } finally {
      toast.dismiss();
    }
  };

  return (
    <Dialog modal={true} open={open} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={cn(css.dialogContent)}>
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
        </DialogHeader>
        <Button variant="outline" size="social">
          <Image
            src={googleicon}
            width={18}
            height={18}
            alt="google icon"
            loading="lazy"
          />
          {t("continueWithGoogle")}
        </Button>
        <div className={css.separator}>
          <Separator orientation="horizontal" decorative />
          <p className="text-light-text-main-50 dark:text-light-text-main-50">
            {t("or")}
          </p>
          <Separator orientation="horizontal" decorative />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(signIn)}>
            <FormField
              control={form.control}
              name="emailorusername"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={t("loginPlaceholder")} {...field} />
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
                      <Input placeholder={t("passwordPlaceholder")} {...field} />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <Button onClick={() => setIsErrorsShown(true)}>{t("btnForm")}</Button>
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <div className={css.checkbox}>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <p className="text-light-text-main-50 dark:text-light-text-main-50">
                          {t("remindMe")}
                        </p>
                      </div>
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </form>
        </Form>
        <p
          className={cn(
            css.privacy,
            "text-light-text-main-50 dark:text-light-text-main-50"
          )}
        >
          {t("creatingAccountText")}{" "}
          <Link
            className="dark:text-light-text-colored text-light-text-colored"
            href={"#"}
          >
            {t("termsOfService")}{" "}
          </Link>
          {t("and")}{" "}
          <Link
            className="dark:text-light-text-colored text-light-text-colored"
            href={"#"}
          >
            {t("confidentiality")}
          </Link>
          .
        </p>

        <DialogFooter>
          <p>{t("question")}</p>
          <Button
            size={"link"}
            className={"text-light-main-colored-100 font-normal"}
            variant={"link"}
            onClick={() => handleOpenModal("signUp")}
          >
            {t("btnCreate")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

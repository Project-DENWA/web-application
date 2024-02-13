"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "border-1 group toast group-[.toaster]:bg-light-main-bg-main group-[.toaster]:text-light-text-main-100 group-[.toaster]:border-light-text-main-50 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-dark-main-bg-main dark:group-[.toaster]:text-dark-text-main-100 dark:group-[.toaster]:border-dark-text-main-50",
          description:
            "group-[.toast]:text-neutral-500 dark:group-[.toast]:text-neutral-400",
          actionButton:
            "group-[.toast]:bg-neutral-900 group-[.toast]:text-neutral-50 dark:group-[.toast]:bg-neutral-50 dark:group-[.toast]:text-neutral-900",
          cancelButton:
            "group-[.toast]:bg-neutral-100 group-[.toast]:text-neutral-500 dark:group-[.toast]:bg-neutral-800 dark:group-[.toast]:text-neutral-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

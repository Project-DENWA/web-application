import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "transition-opacity bg-light-main-colored-100 text-light-text-primary hover:opacity-90 dark:bg-dark-main-colored-100 dark:text-light-text-primary",
        dark: "bg-light-main-dark text-light-text-primary hover:bg-opacity-90 dark:hover:bg-opacity-70 dark:bg-dark-main-full-white dark:text-dark-text-primar py-3 px-6 text-[16px] font-bold",
        outline:
          "border border-light-text-main-50 text-light-text-main-50 text-base dark:border-light-text-main-50 bg-light-bg-main-100 hover:opacity-80 transition-opacity  dark:hover:opacity-80",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost:
          "hover:opacity-90 hover:text-neutral-900 dark:hover:opacity-90 dark:hover:text-neutral-50",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "py-2 px-6 text-[16px] font-bold",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        social: "py-2 px-6 font-normal gap-2",
        icon: "h-6 w-6",
        link: "p-0 text-[16px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

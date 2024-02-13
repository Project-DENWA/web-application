import * as React from "react"

import { cn } from "@/shared/lib/utils"

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, ...props }, ref) => {
      return (
         <input
            type={type}
            className={cn(
               "flex h-[40px] w-full rounded-md border border-light-text-main-50 pl-2.5 py-2.5 text-base ring-offset-transparent file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-light-text-main-50 focus-visible:outline-none focus-visible:none focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  dark:bg-dark-main-bg-main dark:ring-offset-neutral-950 dark:placeholder:text-dark-text-main-50 dark:focus-visible:ring-neutral-300 bg-light-main-bg-main",
               className
            )}
            ref={ref}
            {...props}
         />
      )
   }
)
Input.displayName = "Input"

export { Input }

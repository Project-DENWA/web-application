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
               "flex h-[43px] bg-none w-full rounded-lg border border-light-text-main-50 px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-transparent dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
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

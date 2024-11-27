import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-2.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "h-6 font-normal border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80 cursor-pointer",
        outline: "text-foreground",
        linkOne: "h-6 border-transparent font-extrabold text-xs cursor-pointer bg-primary text-primary-foreground underline underline-offset-1 hover:decoration-dotted",
        linkTwo: "h-6 border-transparent font-light text-sm cursor-pointer dark:bg-orange-700 bg-primary dark:text-foreground text-muted",
        blog: "h-6 font-normal text-sm border-transparent bg-orange-700 text-destructive-foreground shadow"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

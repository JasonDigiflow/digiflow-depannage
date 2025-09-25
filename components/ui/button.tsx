import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-glass text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-violet to-orange text-white hover:shadow-glow before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange before:to-violet before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        secondary: "bg-glass border border-glass text-foreground hover:bg-violet/20 hover:border-violet/50",
        ghost: "hover:bg-glass hover:text-foreground",
        outline: "border-2 border-violet text-violet hover:bg-violet hover:text-white",
        orange: "bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-glow-orange",
        glass: "glass text-foreground hover:bg-white/10",
      },
      size: {
        xs: "h-8 px-3 text-xs",
        default: "h-9 sm:h-10 px-4 sm:px-6 py-2 text-sm sm:text-base",
        sm: "h-8 sm:h-9 rounded-md px-3 text-sm",
        lg: "h-11 sm:h-12 rounded-premium px-6 sm:px-8 text-base sm:text-lg",
        xl: "h-12 sm:h-14 px-8 sm:px-10 text-lg sm:text-xl rounded-premium",
        icon: "h-9 w-9 sm:h-10 sm:w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Chargement...</span>
          </div>
        ) : (
          <span className="relative z-10">{children}</span>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
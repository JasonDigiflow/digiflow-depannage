import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, MotionProps } from "framer-motion"

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, MotionProps {
  hover3d?: boolean
  glowOnHover?: boolean
  variant?: "default" | "glass" | "gradient"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover3d = false, glowOnHover = false, variant = "default", children, ...props }, ref) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!hover3d) return
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePosition({ x, y })
    }

    const handleMouseLeave = () => {
      if (!hover3d) return
      setMousePosition({ x: 0, y: 0 })
    }

    const variantStyles = {
      default: "bg-dark-card border-glass",
      glass: "glass",
      gradient: "gradient-border",
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-glass border p-6 transition-all duration-300",
          variantStyles[variant],
          glowOnHover && "hover:shadow-glow",
          hover3d && "preserve-3d",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          hover3d
            ? {
                transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
              }
            : undefined
        }
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight font-heading",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-foreground-muted", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
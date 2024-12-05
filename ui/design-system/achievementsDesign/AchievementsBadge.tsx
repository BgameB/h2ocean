import React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    
    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      secondary: "bg-[#1CB0F6] text-secondary-foreground hover:bg-[#1CB0F6]/80",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
    }

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }

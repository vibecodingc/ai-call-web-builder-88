
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue to-blue-dark text-white shadow hover:shadow-lg",
        outline:
          "border border-blue text-blue hover:bg-blue/10",
        ghost:
          "text-blue hover:bg-blue/10",
        link: "text-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 px-5",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
      withArrow: {
        true: "group",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      withArrow: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ButtonGradient = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withArrow, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, withArrow, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {withArrow && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
      </button>
    );
  }
);
ButtonGradient.displayName = "ButtonGradient";

export { ButtonGradient, buttonVariants };

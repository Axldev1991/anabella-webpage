import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "dark";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all",
            outline: "border-2 border-primary/20 text-primary hover:bg-primary/5 active:scale-95 transition-all",
            ghost: "text-foreground hover:bg-primary/10 active:scale-95 transition-all",
            dark: "bg-background-dark text-white hover:bg-black transition-all",
        };

        const sizes = {
            sm: "px-4 py-1.5 text-xs font-bold",
            md: "px-6 py-2.5 text-sm font-bold",
            lg: "px-8 py-3.5 text-base font-bold",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };

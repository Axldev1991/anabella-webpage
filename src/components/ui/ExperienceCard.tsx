import { LucideIcon, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
    year: string;
    company: string;
    role: string;
    description: string;
    icon: LucideIcon;
    className?: string;
    variant?: "mobile" | "desktop";
}

export function ExperienceCard({
    year,
    company,
    role,
    description,
    icon: Icon,
    className,
    variant = "desktop"
}: ExperienceCardProps) {
    return (
        <div className={cn(
            "experience-card",
            variant === "desktop" && "lg:p-7 rounded-[2rem] border-primary/5 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5",
            className
        )}>
            <div className="flex items-start justify-between">
                <div className={cn(
                    "icon-container",
                    variant === "desktop" && "lg:size-12 group-hover:scale-105 transition-transform"
                )}>
                    <Icon className={cn("size-5", variant === "desktop" && "lg:size-6")} />
                </div>
                <span className={cn(
                    "badge-year",
                    variant === "desktop" && "text-xs opacity-60"
                )}>
                    {year}
                </span>
            </div>
            <div className="space-y-1 text-left">
                <h3 className={cn(
                    "text-xl font-black text-foreground leading-tight tracking-tight",
                    variant === "desktop" && "lg:text-xl group-hover:text-primary transition-colors"
                )}>
                    {company}
                </h3>
                <p className={cn(
                    "font-bold text-sm text-primary italic leading-none",
                    variant === "desktop" && "lg:text-base leading-tight"
                )}>
                    {role}
                </p>
                <div className={cn(
                    "h-0.5 w-10 bg-primary/20 my-2",
                    variant === "desktop" && "w-6 group-hover:w-12 transition-all"
                )} />
                <p className={cn(
                    "text-[12px] text-foreground/70 leading-relaxed font-medium",
                    variant === "desktop" && "lg:text-[13px] line-clamp-3 xl:line-clamp-4",
                    variant === "mobile" && "line-clamp-3"
                )}>
                    {description}
                </p>
            </div>
        </div>
    );
}

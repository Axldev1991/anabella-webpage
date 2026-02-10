import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    maxWidth?: "container" | "full";
}

export function Section({ children, className, id, maxWidth = "container" }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24",
                maxWidth === "container" && "max-w-[1200px] mx-auto px-4",
                className
            )}
        >
            {children}
        </section>
    );
}

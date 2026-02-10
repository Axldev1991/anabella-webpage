"use client";

import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-[100] w-full transition-all duration-300 px-4 md:px-20 py-3",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                    <div className="text-primary group-hover:rotate-12 transition-transform">
                        <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12c-4-4-8-4-12 0s-8 4-12 0" />
                            <path d="M22 17c-4-4-8-4-12 0s-8 4-12 0" />
                            <path d="M22 7c-4-4-8-4-12 0s-8 4-12 0" />
                        </svg>
                    </div>
                    <h2 className="text-foreground text-base md:text-xl font-black tracking-tight">
                        {content.personalInfo.first} <span className="text-primary">{content.personalInfo.last}</span>
                    </h2>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {content.navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-foreground/70 text-sm font-bold hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button size="sm" className="hidden md:inline-flex">
                        Contactar
                    </Button>
                </div>
            </div>
        </header>
    );
}

"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MoveDown } from "lucide-react";

export function Specialties() {
    return (
        <section id="specialties" className="w-full">
            {content.specialties.map((specialty, index) => {
                const themeClass = `theme-${specialty.theme}`;

                return (
                    <div
                        key={specialty.id}
                        className={cn(
                            "min-h-screen w-full flex items-center justify-center px-4 md:px-20 relative overflow-hidden sticky top-0 transition-colors duration-700",
                            themeClass
                        )}
                        style={{ scrollSnapAlign: 'start' }}
                    >
                        {/* Background Decorations & Image */}
                        <div className="absolute inset-0 z-0">
                            {specialty.image && (
                                <div className="absolute inset-0">
                                    <Image
                                        src={specialty.image}
                                        alt={specialty.title}
                                        fill
                                        className={cn(
                                            "object-cover opacity-50 brightness-90 transition-transform duration-[20s] hover:scale-110",
                                            specialty.id === "contemporaneo" && "object-bottom",
                                            specialty.id === "folklore" && "object-top"
                                        )}
                                        priority={index === 0}
                                    />
                                    {/* Overlay for readability - simplified and decoupled */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                                </div>
                            )}

                            {/* Specific Theme Ornaments - Moved to CSS where possible, remaining minimal here */}
                            {specialty.theme === "neon" && (
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" />
                                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[150px] animate-pulse delay-700" />
                                </div>
                            )}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20%" }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl w-full text-center space-y-8 relative z-10"
                        >
                            <span className={cn(
                                "uppercase tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm block font-black opacity-80",
                                specialty.theme === "urban" && "bg-yellow-400 text-black px-3 py-1 w-fit mx-auto rotate-[-2deg]"
                            )}>
                                {specialty.subtitle}
                            </span>

                            <h2 className={cn(
                                "text-4xl md:text-6xl lg:text-9xl font-black leading-tight tracking-tighter px-4 transition-all duration-500",
                                specialty.theme === "minimal" && "font-serif italic font-light text-5xl md:text-7xl lg:text-8xl",
                                specialty.theme === "urban" && "uppercase text-5xl md:text-8xl lg:text-[12rem]",
                                specialty.theme === "neon" && "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]",
                                specialty.theme === "impact" && "animate-pulse"
                            )}>
                                {specialty.title}
                            </h2>

                            <div className="w-20 h-1 mx-auto rounded-full bg-current opacity-30" />

                            <p className={cn(
                                "text-sm md:text-lg lg:text-2xl leading-relaxed max-w-2xl mx-auto font-medium px-4 opacity-90",
                                specialty.theme === "minimal" && "font-serif italic",
                                specialty.theme === "neon" && "font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-base"
                            )}>
                                {specialty.description}
                            </p>
                        </motion.div>

                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
                            <MoveDown className="size-8" />
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

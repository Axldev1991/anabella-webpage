"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown, MoveDown } from "lucide-react";

export function Specialties() {
    return (
        <section id="specialties" className="w-full">
            {content.specialties.map((specialty, index) => {
                const isImpact = specialty.theme === "impact";
                const isNeon = specialty.theme === "neon";
                const isEarth = specialty.theme === "earth";
                const isUrban = specialty.theme === "urban";
                const isDark = specialty.theme === "dark";
                const isMinimal = specialty.theme === "minimal";

                return (
                    <div
                        key={specialty.id}
                        className={cn(
                            "min-h-screen w-full flex items-center justify-center px-4 md:px-20 relative overflow-hidden sticky top-0",
                            isMinimal && "bg-[#FAF9F6] text-[#4A3F35]",
                            isDark && "bg-[#0A0A0A] text-white",
                            isUrban && "bg-[#1A1A1A] text-white",
                            isNeon && "bg-[#05000A] text-white",
                            isEarth && "bg-[#3D2B1F] text-[#D4A373]",
                            isImpact && "bg-[#EE1B24] text-white"
                        )}
                    >
                        {/* Background Decorations & Image */}
                        <div className="absolute inset-0 z-0">
                            {specialty.image && (
                                <div className="absolute inset-0">
                                    <Image
                                        src={specialty.image}
                                        alt={specialty.title}
                                        fill
                                        className="object-cover opacity-30 md:opacity-25 grayscale-[30%] brightness-75"
                                        priority={index === 0}
                                    />
                                    {/* Overlay for readability */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-b",
                                        isMinimal && "from-[#FAF9F6]/70 to-[#FAF9F6]/90",
                                        isDark && "from-black/50 to-black/80",
                                        isUrban && "from-black/60 to-[#1A1A1A]/90",
                                        isNeon && "from-[#05000A]/70 to-[#05000A]/90",
                                        isEarth && "from-[#3D2B1F]/50 to-[#3D2B1F]/85",
                                        isImpact && "from-[#EE1B24]/30 to-[#EE1B24]/80"
                                    )} />
                                </div>
                            )}

                            {isMinimal && (
                                <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-[radial-gradient(circle_at_50%_50%,_#E5D3B3_0%,_transparent_70%)]" />
                            )}
                            {isDark && (
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
                            )}
                            {isNeon && (
                                <div className="absolute inset-0">
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
                                "uppercase tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm block font-black",
                                isMinimal && "text-[#8C7B6A]",
                                isNeon && "text-cyan-400 animate-pulse",
                                isEarth && "text-[#D4A373]",
                                isUrban && "bg-[#FFFF00] text-black px-3 md:px-4 py-1 w-fit mx-auto rotate-[-2deg]"
                            )}>
                                {specialty.subtitle}
                            </span>

                            <h2 className={cn(
                                "text-4xl md:text-6xl lg:text-9xl font-black leading-tight tracking-tighter px-4",
                                isMinimal && "font-serif italic font-light text-5xl md:text-7xl lg:text-8xl",
                                isDark && "uppercase italic",
                                isUrban && "uppercase text-5xl md:text-8xl lg:text-[12rem]",
                                isNeon && "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]",
                                isImpact && "text-[18vw] md:text-[15vw] animate-pulse"
                            )}>
                                {specialty.title}
                            </h2>

                            <div className={cn(
                                "w-20 h-1 mx-auto rounded-full",
                                isMinimal && "bg-[#8C7B6A]",
                                isDark && "bg-primary",
                                isNeon && "bg-gradient-to-r from-cyan-400 to-fuchsia-500",
                                isImpact && "bg-white"
                            )} />

                            <p className={cn(
                                "text-sm md:text-lg lg:text-2xl leading-relaxed max-w-2xl mx-auto font-medium px-4",
                                isMinimal && "font-serif italic",
                                isDark && "text-white/70 italic",
                                isUrban && "text-white/80 uppercase font-bold tracking-wider",
                                isNeon && "font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-80 text-xs md:text-base",
                                isEarth && "text-[#F5EBE0] italic",
                                isImpact && "text-base md:text-2xl font-black uppercase tracking-[0.3em] md:tracking-[0.5em]"
                            )}>
                                {specialty.description}
                            </p>
                        </motion.div>

                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50 animate-bounce">
                            <MoveDown className="size-8" />
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

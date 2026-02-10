"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background-light" style={{ scrollSnapAlign: 'start' }}>
            {/* Mobile Background Image (Only visible on small screens) */}
            <div className="absolute inset-0 z-0 md:hidden">
                <Image
                    src={content.personalInfo.heroImage}
                    alt={`${content.personalInfo.first} ${content.personalInfo.last}`}
                    fill
                    className="object-cover object-center opacity-80 brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/40 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 items-center md:items-start text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/10 text-primary w-fit border border-primary/20 backdrop-blur-sm">
                        <Sparkles className="size-3 md:size-4 animate-pulse" />
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em]">Portafolio Profesional</span>
                    </div>

                    <h1 className="text-6xl md:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter text-foreground drop-shadow-sm">
                        {content.personalInfo.first} <br />
                        <span className="text-primary italic relative inline-block">
                            {content.personalInfo.last}
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute bottom-1 md:bottom-2 left-0 h-1 md:h-2 bg-primary/20 -z-10"
                            />
                        </span>
                    </h1>

                    <p className="text-sm md:text-md lg:text-2xl text-foreground md:text-foreground/70 leading-relaxed font-bold md:font-medium max-w-md md:max-w-lg">
                        {content.personalInfo.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 w-full sm:w-auto px-4 md:px-0">
                        <Button size="lg" className="h-12 md:h-14 px-8 md:px-10 w-full sm:w-auto shadow-xl shadow-primary/20 text-sm md:text-base">
                            Ver Trayectoria
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 md:h-14 px-8 md:px-10 w-full sm:w-auto bg-white/50 backdrop-blur-md text-sm md:text-base border-primary/20">
                            Contacto
                        </Button>
                    </div>
                </motion.div>

                {/* Desktop Image (Hidden on mobile) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hidden md:block w-1/2 relative"
                >
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

                    <div className="relative aspect-square max-w-md md:max-w-none rounded-2xl md:rounded-3xl overflow-hidden border-4 md:border-8 border-white shadow-2xl rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-700 bg-primary/5">
                        <Image
                            src={content.personalInfo.heroImage}
                            alt={`${content.personalInfo.first} ${content.personalInfo.last}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

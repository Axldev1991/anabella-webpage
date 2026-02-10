"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative flex flex-col gap-8 md:gap-12 md:flex-row items-center py-16 md:py-24 overflow-hidden max-w-[1200px] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex flex-col gap-8"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/10 text-primary w-fit border border-primary/20">
                    <Sparkles className="size-3 md:size-4 animate-pulse" />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em]">Portafolio Profesional</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-foreground">
                    {content.personalInfo.first} <br />
                    <span className="text-primary italic relative">
                        {content.personalInfo.last}
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="absolute bottom-1 md:bottom-2 left-0 h-1 md:h-2 bg-primary/20 -z-10"
                        />
                    </span>
                </h1>

                <p className="text-base md:text-xl lg:text-2xl text-foreground/70 leading-relaxed font-medium max-w-lg">
                    {content.personalInfo.description}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-4 w-full sm:w-auto">
                    <Button size="lg" className="h-12 md:h-14 px-8 md:px-10 w-full sm:w-auto">
                        Ver Trayectoria
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 md:h-14 px-8 md:px-10 w-full sm:w-auto">
                        Contacto
                    </Button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full md:w-1/2 relative"
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
        </section>
    );
}

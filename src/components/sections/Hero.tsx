"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative flex flex-col gap-12 md:flex-row items-center py-12 md:py-24 overflow-hidden max-w-[1200px] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex flex-col gap-8"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary w-fit border border-primary/20">
                    <Sparkles className="size-4 animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">Portafolio Profesional</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground">
                    {content.personalInfo.first} <br />
                    <span className="text-primary italic relative">
                        {content.personalInfo.last}
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="absolute bottom-2 left-0 h-2 bg-primary/20 -z-10"
                        />
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-medium max-w-lg">
                    {content.personalInfo.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <Button size="lg" className="h-14 px-10">
                        Ver Trayectoria
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-10">
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

                <div className="relative aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 bg-primary/5">
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

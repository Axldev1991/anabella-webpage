"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import Image from "next/image";
import { Section } from "@/components/layout/Section";

export function About() {
    return (
        <Section id="about" className="bg-white overflow-hidden">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Image Container */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full relative px-4 md:px-0"
                >
                    <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />

                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-[2rem] md:rounded-[3rem] rotate-3 scale-105 blur-sm transition-transform group-hover:rotate-1" />
                        <div className="relative aspect-[4/5] md:aspect-square w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                            <Image
                                src={content.personalInfo.aboutImage}
                                alt="Trayectoria de Anabella"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Floating elements for "Artistic" feel */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl hidden sm:block">
                            <span className="text-3xl md:text-5xl font-black text-primary italic leading-none block">
                                {content.stats[0].value}
                            </span>
                            <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest block mt-1">
                                {content.stats[0].label}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Content Container */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8 text-left"
                >
                    <div className="space-y-6">
                        <div className="inline-block">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground relative">
                                <span className="relative z-10">Acerca de Mí</span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 w-full h-4 bg-primary/10 -z-10"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                />
                            </h2>
                        </div>

                        <div className="space-y-4 text-base md:text-xl leading-relaxed text-foreground/80 font-medium whitespace-pre-line">
                            <p>
                                Formada en danza contemporánea, jazz y ritmos urbanos, mi enfoque integra la expresión corporal con una profunda formación musical en percusión y batería.
                            </p>
                            <p>
                                Entiendo la danza no solo como técnica, sino como un lenguaje universal de movimiento y emoción. Como docente en escuelas públicas, busco transmitir esta visión, fomentando la creatividad y el autodescubrimiento a través del cuerpo.
                            </p>
                        </div>
                    </div>

                    {/* Stats for Mobile & Desktop - Redesigned */}
                    <div className="grid grid-cols-3 gap-4 md:gap-8 py-6 border-y border-primary/5">
                        {content.stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start">
                                <span className="text-2xl md:text-4xl font-black text-primary italic leading-none">
                                    {stat.value}
                                </span>
                                <span className="text-[8px] md:text-[10px] font-bold text-foreground/50 uppercase tracking-[0.2em] leading-tight block mt-2">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

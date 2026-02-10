"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { Section } from "@/components/layout/Section";
import { Theater, Star, School, Droplets, LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
    theater: Theater,
    star: Star,
    school: School,
    water: Droplets,
};

export function Experience() {
    return (
        <Section id="experience" className="bg-white">
            <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Experiencia Laboral</h2>
                <div className="w-20 md:w-24 h-1.5 md:h-2 bg-primary rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
                {content.experience.map((item, index) => {
                    const Icon = icons[item.icon] || Star;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl border border-primary/5 bg-white hover:bg-primary/5 hover:border-primary/20 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="flex-none">
                                <div className="size-10 md:size-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
                                    <Icon className="size-5 md:size-6" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 pt-0.5">
                                <span className="text-primary font-black text-[10px] tracking-[0.2em] uppercase">
                                    {item.year}
                                </span>
                                <h3 className="text-lg md:text-xl font-black text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.company}
                                </h3>
                                <p className="font-bold text-xs md:text-sm text-foreground/60 italic">
                                    {item.role}
                                </p>
                                <p className="text-xs md:text-sm text-foreground/70 mt-2 leading-relaxed font-medium line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}

"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { Section } from "@/components/layout/Section";
import * as Icons from "lucide-react";

export function Skills() {
    return (
        <Section id="skills" className="bg-primary/5 rounded-[3rem] px-8 my-12">
            <div className="mb-16">
                <h2 className="text-4xl font-black tracking-tight">Habilidades & Expertise</h2>
                <p className="text-foreground/60 font-bold mt-2 uppercase tracking-widest text-sm">Versatilidad artística y técnica pedagógica</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {content.skills.map((skill, index) => {
                    return (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 flex flex-col items-center text-center gap-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                        >
                            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Icons.Layers className="size-8" />
                            </div>
                            <h4 className="font-black text-lg leading-tight uppercase tracking-tight">
                                {skill.title}
                            </h4>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}

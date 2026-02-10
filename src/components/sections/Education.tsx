"use client";

import { content } from "@/data/content";
import { Section } from "@/components/layout/Section";

export function Education() {
    return (
        <Section id="education" className="bg-background-light">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 md:mb-12">Educación</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {content.education.map((edu, index) => (
                    <div
                        key={index}
                        className="p-6 md:p-8 bg-white border border-primary/5 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
                    >
                        <h3 className="text-primary font-black text-lg md:text-xl mb-3 md:mb-4 group-hover:scale-105 transition-transform origin-left">
                            {edu.institution}
                        </h3>
                        <p className="font-bold text-foreground text-base md:text-lg leading-snug">
                            {edu.degree}
                        </p>
                        <p className="text-xs md:text-sm text-foreground/50 mt-4 md:mt-6 italic font-medium">
                            {edu.note}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

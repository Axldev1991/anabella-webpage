"use client";

import { content } from "@/data/content";
import { Section } from "@/components/layout/Section";

export function Education() {
    return (
        <Section id="education">
            <h2 className="text-4xl font-black tracking-tight mb-12">Educación</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {content.education.map((edu, index) => (
                    <div
                        key={index}
                        className="p-8 bg-white border border-primary/5 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
                    >
                        <h3 className="text-primary font-black text-xl mb-4 group-hover:scale-105 transition-transform origin-left">
                            {edu.institution}
                        </h3>
                        <p className="font-bold text-foreground text-lg leading-snug">
                            {edu.degree}
                        </p>
                        <p className="text-sm text-foreground/50 mt-6 italic font-medium">
                            {edu.note}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

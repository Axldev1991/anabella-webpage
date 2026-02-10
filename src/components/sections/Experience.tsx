"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { content } from "@/data/content";
import { Star, Theater, School, Waves, LucideIcon } from "lucide-react";
import { useRef } from "react";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

const ICONS: Record<string, LucideIcon> = {
    star: Star,
    theater: Theater,
    school: School,
    water: Waves,
};

// --- Mobile Component (The Poster choreography you liked, now Solid) ---
function ExperienceMobile() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const STEP = 0.22;
    const PEAK = 0.08;
    const MOVE = 0.15;

    return (
        <div ref={containerRef} className="lg:hidden relative h-[450vh] bg-background-light">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
                <header className="absolute top-[8vh] text-center z-[110] w-full px-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">Trayectoria</span>
                    <h2 className="text-4xl font-black tracking-tighter text-foreground mt-1">
                        Experiencia <span className="text-primary italic">Laboral</span>
                    </h2>
                </header>

                <div className="relative w-full h-[60vh] flex items-center justify-center translate-y-8">
                    {content.experience.map((item, index) => {
                        const Icon = ICONS[item.icon] || Star;
                        const isFirst = index === 0;
                        const start = index * STEP;
                        const range = [start, start + PEAK, start + MOVE, start + STEP];

                        // Binary opacity to avoid translucent "ghosting"
                        const opacity = useTransform(scrollYProgress, (v) => {
                            if (isFirst) return 1;
                            return v >= start ? 1 : 0;
                        });

                        // Standardize scales and offsets to prevent overlap in the center
                        const scale = useTransform(scrollYProgress, range, isFirst ? [1, 1, 0.95, 0.55] : [0.8, 1, 0.95, 0.55]);

                        const cornerX = index % 2 === 0 ? "-26vw" : "26vw";
                        const cornerY = index < 2 ? "-18vh" : "18vh";

                        const x = useTransform(scrollYProgress, range, ["0vw", "0vw", "0vw", cornerX]);
                        const y = useTransform(scrollYProgress, range, [isFirst ? "0vh" : "45vh", "0vh", "0vh", cornerY]);

                        // Critical: Card in action is ALWAYS on top (100), others are behind (index)
                        const zIndex = useTransform(scrollYProgress,
                            [start - 0.01, start, start + STEP],
                            [index, 100, index]
                        );

                        return (
                            <motion.div
                                key={`mob-${index}`}
                                style={{
                                    opacity,
                                    scale,
                                    x,
                                    y,
                                    zIndex
                                }}
                                className="absolute"
                            >
                                <ExperienceCard
                                    {...item}
                                    icon={Icon}
                                    variant="mobile"
                                    className="w-[88vw] max-w-[340px]"
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// --- Desktop Component (Same as before but Modular) ---
function ExperienceDesktop() {
    return (
        <div className="hidden lg:flex flex-col items-center justify-center h-screen bg-background-light py-12 px-20 relative overflow-hidden">
            <div className="text-center mb-8 relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40"
                >
                    Professional Path
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl xl:text-6xl font-black tracking-tighter text-foreground mt-2"
                >
                    Experiencia <span className="text-primary italic">Laboral</span>
                </motion.h2>
                <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-2 gap-4 xl:gap-6 w-full max-w-6xl relative z-10 mt-2">
                {content.experience.map((item, index) => {
                    const Icon = ICONS[item.icon] || Star;
                    return (
                        <motion.div
                            key={`desk-${index}`}
                            initial={{ opacity: 0, scale: 0.98, y: 15 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            className="group"
                        >
                            <ExperienceCard
                                {...item}
                                icon={Icon}
                                variant="desktop"
                                className="h-full"
                            />
                        </motion.div>
                    );
                })}
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/2 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/2 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
    );
}

export function Experience() {
    return (
        <section id="experience" style={{ scrollSnapAlign: 'start' }}>
            <ExperienceMobile />
            <ExperienceDesktop />
        </section>
    );
}

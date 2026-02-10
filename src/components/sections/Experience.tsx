"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { content } from "@/data/content";
import { Star, Theater, School, Waves, LucideIcon } from "lucide-react";
import { useRef } from "react";

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
                                    zIndex,
                                    backgroundColor: "#ffffff" // Solid white
                                }}
                                className="absolute w-[88vw] max-w-[340px] p-6 rounded-[2.2rem] border border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col gap-4"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="size-11 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
                                        <Icon className="size-5" />
                                    </div>
                                    <span className="text-primary font-black text-[10px] tracking-widest uppercase">{item.year}</span>
                                </div>
                                <div className="space-y-1 text-left">
                                    <h3 className="text-xl font-black text-foreground leading-tight tracking-tight">{item.company}</h3>
                                    <p className="font-bold text-sm text-primary italic leading-none">{item.role}</p>
                                    <div className="h-0.5 w-10 bg-primary/20 my-2" />
                                    <p className="text-[12px] text-foreground/70 leading-relaxed line-clamp-3 font-medium">{item.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// --- Desktop Component (Same as before) ---
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
                            className="group p-5 xl:p-7 rounded-[2rem] border border-primary/5 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-3"
                        >
                            <div className="flex items-start justify-between">
                                <div className="size-11 xl:size-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                                    <Icon className="size-5 xl:size-6" />
                                </div>
                                <span className="text-primary font-black text-xs tracking-[0.15em] uppercase opacity-60">{item.year}</span>
                            </div>
                            <div className="space-y-1 text-left">
                                <h3 className="text-lg xl:text-xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors leading-tight">{item.company}</h3>
                                <p className="font-bold text-sm xl:text-base text-primary italic leading-tight">{item.role}</p>
                                <div className="h-0.5 w-6 bg-primary/20 my-2 group-hover:w-12 transition-all" />
                                <p className="text-[11px] xl:text-[13px] text-foreground/70 leading-relaxed font-medium line-clamp-3 xl:line-clamp-4">{item.description}</p>
                            </div>
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

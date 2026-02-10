"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { content } from "@/data/content";
import { Star, Theater, School, Waves, LucideIcon } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// --- Types & Constants ---
const ICONS: Record<string, LucideIcon> = {
    star: Star,
    theater: Theater,
    school: School,
    water: Waves,
};

const ANIM_CONFIG = {
    SCREEN_HEIGHTS: 5, // Increased for more reading time
    TIMING_GAP: 0.2,
    PEAK_OFFSET: 0.1,
};

// --- Hooks ---
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    return isMobile;
}

// --- Sub-components ---

interface ExperienceCardProps {
    item: typeof content.experience[0];
    index: number;
    scrollYProgress: MotionValue<number>;
    isMobile: boolean;
}

function ExperienceCard({ item, index, scrollYProgress, isMobile }: ExperienceCardProps) {
    const Icon = ICONS[item.icon] || Star;
    const isFirst = index === 0;

    // Responsive positioning logic
    // On Mobile: Cards are smaller and move less
    // On Desktop: Cards move further out to avoid overlap
    const cornerXVal = isMobile ? (index % 2 === 0 ? "-22vw" : "22vw") : (index % 2 === 0 ? "-26vw" : "26vw");
    const cornerYVal = isMobile ? (index < 2 ? "-22vh" : "22vh") : (index < 2 ? "-22vh" : "22vh");
    const endScale = isMobile ? 0.6 : 0.85;

    const start = index * ANIM_CONFIG.TIMING_GAP;
    const peak = start + ANIM_CONFIG.PEAK_OFFSET;
    const end = start + ANIM_CONFIG.TIMING_GAP + 0.05;

    const opacity = useTransform(scrollYProgress,
        [start - 0.05, start, peak, end, 0.95],
        isFirst ? [1, 1, 1, 1, 0.8] : [0, 0, 1, 1, 0.8]
    );

    const scale = useTransform(scrollYProgress,
        [start, peak, end],
        isFirst ? [0.95, 1, endScale] : [0.8, 1, endScale]
    );

    const x = useTransform(scrollYProgress, [start, peak, end], ["0vw", "0vw", cornerXVal]);
    const y = useTransform(scrollYProgress, [start, peak, end], [isFirst ? "0vh" : "15vh", "0vh", cornerYVal]);

    const zIndex = useTransform(scrollYProgress,
        [start - 0.01, start, peak, end],
        [20 - index, 20 - index, 100, 20 - index]
    );

    return (
        <motion.div
            style={{ opacity, scale, x, y, zIndex }}
            className="absolute w-[88vw] md:w-[42vw] lg:w-[38vw] max-w-lg flex flex-col gap-4 p-6 md:p-8 rounded-[2rem] border border-primary/10 bg-white/98 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
        >
            <div className="flex items-start justify-between">
                <div className="size-12 md:size-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <Icon className="size-6 md:size-8" />
                </div>
                <div className="text-right">
                    <span className="text-primary font-black text-xs md:text-sm tracking-[0.2em] uppercase">
                        {item.year}
                    </span>
                    <p className="font-bold text-[10px] md:text-xs text-foreground/40 mt-1 uppercase tracking-widest">
                        Trayectoria
                    </p>
                </div>
            </div>

            <div className="space-y-3">
                <h3 className="text-lg md:text-2xl font-black text-foreground leading-tight tracking-tight">
                    {item.company}
                </h3>
                <p className="font-bold text-sm md:text-lg text-primary italic">
                    {item.role}
                </p>
                <div className="h-px w-10 bg-primary/20 my-2" />
                <p className="text-xs md:text-base text-foreground/70 leading-relaxed font-medium">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}

// --- Main Section Component ---

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section
            ref={containerRef}
            className="relative bg-background-light"
            style={{
                height: `${ANIM_CONFIG.SCREEN_HEIGHTS * 100}vh`,
                scrollSnapAlign: 'start'
            }}
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4">
                {/* Header */}
                <header className="absolute top-12 md:top-20 text-center z-50">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-2 md:mb-4"
                    >
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary/60">Professional Path</span>
                    </motion.div>
                    <motion.h2
                        className="text-4xl md:text-7xl font-black tracking-tighter text-foreground"
                    >
                        Experiencia <span className="text-primary italic">Laboral</span>
                    </motion.h2>
                    <motion.div
                        className="w-16 md:w-24 h-1 md:h-2 bg-primary rounded-full mx-auto mt-4 md:mt-6"
                        style={{
                            scaleX: useTransform(scrollYProgress, [0, 0.1], [0.2, 1])
                        }}
                    />
                </header>

                {/* Cards Container */}
                <div className="relative w-full max-w-6xl h-[65vh] flex items-center justify-center">
                    {content.experience.map((item, index) => (
                        <ExperienceCard
                            key={`exp-${index}`}
                            item={item}
                            index={index}
                            scrollYProgress={scrollYProgress}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

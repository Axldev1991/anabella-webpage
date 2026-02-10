"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { content } from "@/data/content";
import { Star, Theater, School, Waves, LucideIcon } from "lucide-react";
import { useRef } from "react";

const icons: Record<string, LucideIcon> = {
    star: Star,
    theater: Theater,
    school: School,
    water: Waves,
};

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section
            ref={containerRef}
            className="relative h-[450vh] bg-background-light"
            style={{ scrollSnapAlign: 'start' }}
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-20">
                {/* Fixed Title Section */}
                <div className="absolute top-16 md:top-24 text-center z-50">
                    <motion.h2
                        className="text-4xl md:text-7xl font-black tracking-tighter text-foreground"
                        style={{
                            opacity: useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0])
                        }}
                    >
                        Experiencia <span className="text-primary italic">Laboral</span>
                    </motion.h2>
                    <motion.div
                        className="w-20 md:w-32 h-1.5 md:h-2 bg-primary rounded-full mx-auto mt-4"
                        style={{
                            scaleX: useTransform(scrollYProgress, [0, 0.1], [0.1, 1])
                        }}
                    />
                </div>

                {/* Main Cards Arena */}
                <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
                    {content.experience.map((item, index) => {
                        const Icon = icons[item.icon] || Star;
                        const isFirst = index === 0;

                        // Timing adjustments for a smoother sequence
                        const start = index * 0.22;
                        const peak = start + 0.12;
                        const end = start + 0.22;

                        // Animation logic
                        // First card starts visible (opacity 1)
                        const opacity = useTransform(scrollYProgress,
                            [start - 0.05, start, peak, end, 0.95],
                            isFirst ? [1, 1, 1, 1, 0.8] : [0, 0, 1, 1, 0.8]
                        );

                        const scale = useTransform(scrollYProgress,
                            [start, peak, end],
                            isFirst ? [0.9, 1, 0.55] : [0.7, 1, 0.55]
                        );

                        // Corner positions
                        const cornerX = index % 2 === 0 ? "-24vw" : "24vw";
                        const cornerY = index < 2 ? "-18vh" : "18vh";

                        // Sequential transform
                        const x = useTransform(scrollYProgress, [start, peak, end], ["0vw", "0vw", cornerX]);
                        // First card is already centered, others fly from bottom
                        const y = useTransform(scrollYProgress, [start, peak, end], [isFirst ? "0vh" : "10vh", "0vh", cornerY]);

                        // Z-Index: Start with 0 on top, then active on top
                        const zIndex = useTransform(scrollYProgress,
                            [start - 0.01, start, peak, end, end + 0.01],
                            [20 - index, 20 - index, 100, 20 - index, 20 - index]
                        );

                        return (
                            <motion.div
                                key={index}
                                style={{
                                    opacity,
                                    scale,
                                    x,
                                    y,
                                    zIndex,
                                }}
                                className="absolute w-[85vw] md:w-[40vw] max-w-md flex flex-col gap-4 p-5 md:p-8 rounded-[2rem] border border-primary/10 bg-white/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="size-12 md:size-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                                        <Icon className="size-6 md:size-8" />
                                    </div>
                                    <span className="text-primary font-black text-xs md:text-sm tracking-[0.2em] uppercase pt-2">
                                        {item.year}
                                    </span>
                                </div>

                                <div className="space-y-2 md:space-y-3">
                                    <h3 className="text-lg md:text-2xl font-black text-foreground leading-none">
                                        {item.company}
                                    </h3>
                                    <p className="font-bold text-xs md:text-lg text-primary italic">
                                        {item.role}
                                    </p>
                                    <p className="text-xs md:text-base text-foreground/70 leading-relaxed font-medium line-clamp-4 md:line-clamp-none">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

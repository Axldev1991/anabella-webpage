"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import Image from "next/image";
import { Section } from "@/components/layout/Section";

export function About() {
    return (
        <Section id="about" className="border-t border-primary/5">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="order-2 md:order-1 relative"
                >
                    <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl -z-10 transform translate-x-4 translate-y-4" />
                    <div className="rounded-2xl overflow-hidden bg-primary/5 p-4 transform hover:-rotate-2 transition-transform duration-500">
                        <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3lBc2li6ZsbeP88_Cq-xiu-RuJqtgGbv_6YCJgoXZNfYq12KZ5HPewG5t8l1VrYvzM0hdoSExXQvpQODlqgKG3GlvY3Pq7OkJp3Oadl4AXWvefLe-E4EWB-7xEror7hLi7QL0AXZT51s2XrOP0zoteeFNSjjMgwf2O_B0rTs5Yn09e-_W1b82sH2UJz0ukts9ujSIvy1LckqdJH5HIc_VuHiPDecNGd1lcWyKndJOA7tdCVWDHXFxZ7zKwUjfGEnbcfH3VYyMod9e"
                                alt="Trayectoria de Anabella"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2 space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black tracking-tight border-l-8 border-primary pl-6">
                            Acerca de Mí
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 font-medium">
                            <p>
                                Formada en danza contemporánea, jazz y ritmos urbanos, mi enfoque integra la expresión corporal con una profunda formación musical en percusión y batería.
                            </p>
                            <p>
                                Entiendo la danza no solo como técnica, sino como un lenguaje universal de movimiento y emoción. Como docente en escuelas públicas, busco transmitir esta visión, fomentando la creatividad y el autodescubrimiento a través del cuerpo.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-6">
                        {content.stats.map((stat, index) => (
                            <div key={index} className="space-y-1">
                                <span className="block text-4xl font-black text-primary italic leading-none">
                                    {stat.value}
                                </span>
                                <span className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] leading-tight block">
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

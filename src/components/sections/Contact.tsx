"use client";

import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Mail, Instagram, Send } from "lucide-react";
import { Section } from "@/components/layout/Section";

export function Contact() {
    return (
        <Section id="contact" maxWidth="full" className="px-4 md:px-20 bg-white">
            <div className="bg-primary text-white rounded-2xl md:rounded-[3rem] px-6 md:px-20 py-12 md:py-20 overflow-hidden relative shadow-2xl shadow-primary/30">
                {/* Blob Decoration */}
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.7,-78.3C58.3,-71.4,67.1,-58.3,73.5,-44.6C79.8,-30.9,83.7,-15.5,82.4,-0.7C81.2,14.1,74.7,28.2,66.6,41.2C58.5,54.1,48.7,65.9,36.4,72.4C24.1,78.9,9.2,80,-5.2,78.9C-19.5,77.9,-33.4,74.7,-46.7,67.9C-60,61.1,-72.7,50.7,-79.9,37.3C-87.1,23.9,-88.7,7.6,-85.4,-7.8C-82.2,-23.3,-74.1,-37.9,-63,-48.9C-51.8,-59.9,-37.7,-67.3,-24.1,-73.6C-10.4,-79.8,2.7,-84.9,18.4,-85.2C34.1,-85.4,33.1,-85.2,45.7,-78.3Z" fill="#FFFFFF" transform="translate(100 100)" />
                    </svg>
                </div>

                <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black italic leading-[0.9] tracking-tighter">
                            Hablemos de tu <br /> próximo proyecto.
                        </h2>
                        <p className="text-base md:text-xl opacity-80 leading-relaxed font-medium max-w-md">
                            Abierta a propuestas de performance, clases magistrales, producciones audiovisuales y proyectos educativos.
                        </p>

                        <div className="space-y-4 md:space-y-6 pt-4">
                            <a href={`mailto:${content.personalInfo.email}`} className="flex items-center gap-4 group">
                                <div className="p-2.5 md:p-3 bg-white/10 rounded-xl md:rounded-2xl group-hover:bg-white/20 transition-colors">
                                    <Mail className="size-5 md:size-6" />
                                </div>
                                <span className="font-bold text-sm md:text-lg break-all">{content.personalInfo.email}</span>
                            </a>
                            {content.personalInfo.phone && (
                                <a href={`tel:${content.personalInfo.phone}`} className="flex items-center gap-4 group">
                                    <div className="p-2.5 md:p-3 bg-white/10 rounded-xl md:rounded-2xl group-hover:bg-white/20 transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 md:size-6">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-sm md:text-lg">{content.personalInfo.phone}</span>
                                </a>
                            )}
                            <a href="#" className="flex items-center gap-4 group">
                                <div className="p-2.5 md:p-3 bg-white/10 rounded-xl md:rounded-2xl group-hover:bg-white/20 transition-colors">
                                    <Instagram className="size-5 md:size-6" />
                                </div>
                                <span className="font-bold text-sm md:text-lg">{content.personalInfo.instagram}</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 shadow-3xl text-foreground">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary">Nombre</label>
                                    <input
                                        className="w-full h-11 md:h-12 rounded-lg md:rounded-xl bg-primary/5 border-none focus:ring-2 focus:ring-primary px-3 md:px-4 font-medium text-sm md:text-base"
                                        placeholder="Tu nombre"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary">Email</label>
                                    <input
                                        className="w-full h-11 md:h-12 rounded-lg md:rounded-xl bg-primary/5 border-none focus:ring-2 focus:ring-primary px-3 md:px-4 font-medium text-sm md:text-base"
                                        placeholder="tu@email.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary">Asunto</label>
                                <input
                                    className="w-full h-11 md:h-12 rounded-lg md:rounded-xl bg-primary/5 border-none focus:ring-2 focus:ring-primary px-3 md:px-4 font-medium text-sm md:text-base"
                                    placeholder="Motivo de contacto"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary">Mensaje</label>
                                <textarea
                                    className="w-full rounded-lg md:rounded-xl bg-primary/5 border-none focus:ring-2 focus:ring-primary p-3 md:p-4 font-medium text-sm md:text-base"
                                    placeholder="Cuéntame sobre tu propuesta..."
                                    rows={4}
                                />
                            </div>
                            <Button className="w-full h-14 md:h-16 rounded-xl md:rounded-2xl text-base md:text-lg gap-2 md:gap-3">
                                <Send className="size-5" />
                                Enviar Mensaje
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
}

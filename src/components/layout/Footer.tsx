import { content } from "@/data/content";
import { Instagram, Youtube, Share2 } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-primary/5 py-12 px-4 md:px-20">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex items-center gap-4">
                    <div className="text-primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12c-4-4-8-4-12 0s-8 4-12 0" />
                        </svg>
                    </div>
                    <span className="text-foreground font-black uppercase tracking-[0.3em]">
                        {content.personalInfo.first} {content.personalInfo.last}
                    </span>
                </div>

                <div className="flex gap-8">
                    <a href="#" className="text-primary/40 hover:text-primary transition-all hover:scale-110">
                        <Instagram className="size-6" />
                    </a>
                    <a href="#" className="text-primary/40 hover:text-primary transition-all hover:scale-110">
                        <Youtube className="size-6" />
                    </a>
                    <a href="#" className="text-primary/40 hover:text-primary transition-all hover:scale-110">
                        <Share2 className="size-6" />
                    </a>
                </div>

                <p className="text-foreground/30 text-xs font-black uppercase tracking-widest">
                    © {new Date().getFullYear()} {content.personalInfo.first} {content.personalInfo.last}.
                </p>
            </div>
        </footer>
    );
}

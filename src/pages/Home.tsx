/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import SkillsSection from "../components/sections/Skills";
import ExperienceSection from "@/components/sections/Experience";
import ProjectsShowcase from "../components/sections/Projects";
import { LoadingScreen } from "@/components/sections/Loading";
import { 
    FormationsSection, 
    ServicesSection, 
    DisponibiliteSection 
} from "@/components/sections/FormationsSection";
import { trackVisitor, trackSectionView } from "@/lib/firebase";
import { SpotlightBackground } from "@/components/components/ui/SpotlightBackground";
import { Github, Linkedin, Twitter } from "lucide-react";

const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading) {
            trackVisitor();
        }
    }, [loading]);

    useEffect(() => {
        if (loading) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        trackSectionView(sectionId);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [loading]);

    return (
        <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary overflow-x-hidden">
            <AnimatePresence mode="wait">
                {loading && <LoadingScreen key="loading" />}
            </AnimatePresence>

            {!loading && (
                <div className="relative">
                    <SpotlightBackground />
                    <Header />

                    <main className="relative w-full">
                        {/* Hero Section */}
                        <section id="accueil" className="min-h-screen flex items-center justify-center">
                            <Hero />
                        </section>

                        {/* Experience Section */}
                        <section id="expérience">
                            <ExperienceSection />
                        </section>
                        
                        {/* Projects Section */}
                        <section id="projets">
                            <ProjectsShowcase />
                        </section>

                        {/* Skills Section */}
                        <section id="compétences">
                            <SkillsSection />
                        </section>

                        {/* Formations Section */}
                        <section id="formations">
                            <FormationsSection />
                        </section>

                        {/* Services Section */}
                        <section id="services">
                            <ServicesSection />
                        </section>

                        {/* Contact Section */}
                        <section id="contact">
                            <DisponibiliteSection />
                        </section>
                    </main>

                    {/* Footer */}
                    <footer className="relative z-20 py-20 px-4 border-t border-foreground/5 overflow-hidden">
                        <div className="max-w-7xl mx-auto space-y-12">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                                <div className="flex flex-col items-center md:items-start gap-2">
                                    <h2 className="text-3xl font-black tracking-tighter uppercase">Oumar <span className="text-primary">SY_</span></h2>
                                    <p className="text-xs font-bold text-foreground/20 uppercase tracking-[0.2em]">Engineering & Design</p>
                                </div>
                                
                                <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-widest text-foreground/40">
                                    <a href="#accueil" className="hover:text-primary transition-colors">Accueil</a>
                                    <a href="#projets" className="hover:text-primary transition-colors">Projets</a>
                                    <a href="#expérience" className="hover:text-primary transition-colors">Expérience</a>
                                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                                </div>

                                <div className="flex items-center gap-6">
                                    {[
                                        { icon: <Github size={18} />, href: "https://github.com/oumarsy97" },
                                        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/oumarsy97/" },
                                        { icon: <Twitter size={18} />, href: "https://twitter.com/oumarsy97" }
                                    ].map((social, i) => (
                                        <a 
                                            key={i} 
                                            href={social.href} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center text-foreground/40 hover:text-primary hover:bg-primary/5 transition-all"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-12 border-t border-foreground/[0.02] flex flex-col md:flex-row items-center justify-between gap-6">
                                <p className="text-[10px] font-black text-foreground/10 uppercase tracking-widest">
                                    © {new Date().getFullYear()} Oumar SY. All rights reserved.
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/20 animate-pulse" />
                                    <span className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.2em]">System Status: Operational</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Background Decoration */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    </footer>
                </div>
            )}
        </div>
    );
};

export default Home;
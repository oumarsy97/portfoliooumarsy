/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import SkillsSection from "../components/sections/Skills";
import ExperienceSection from "@/components/sections/Experience";
import ProjectsShowcase from "../components/sections/Projects";
import ContactSection from "../components/sections/Contact";
import { LoadingScreen } from "@/components/sections/Loading";
import { FormationsSection } from "@/components/sections/FormationsSection";
import { trackVisitor, trackSectionView } from "@/lib/firebase";

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
};

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    // Enregistrer la visite une fois le chargement terminé
    useEffect(() => {
        if (!loading) {
            trackVisitor();
        }
    }, [loading]);

    // Observer les sections pour tracker les vues
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
            { threshold: 0.5 } // La section doit être visible à 50%
        );

        // Observer toutes les sections
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [loading]);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <LoadingScreen />}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    className="bg-gradient-to-br from-[#FFF7ED] to-[#FFEFD5] dark:from-[#0A192F] dark:to-[#0F172A] text-[#0A192F] dark:text-[#E2E8F0]"
                >
                    <Header />

                    <motion.main
                        variants={staggerChildren}
                        className="px-4 sm:px-8 py-12 mx-auto max-w-screen-xl"
                    >
                        {/* Hero Section */}
                        <motion.section
                            id="accueil"
                            variants={fadeInUp}
                            className="flex flex-col items-center justify-center py-16 md:py-24 text-center space-y-8"
                        >
                            <Hero/>
                        </motion.section>

                        {/* Experience Section */}
                        <motion.section
                            id="expérience"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24 bg-[#FFF7ED]/50 dark:bg-[#0A192F]/50 rounded-3xl"
                        >
                            <ExperienceSection/>
                        </motion.section>
                        
                        {/* Projects Section */}
                        <motion.section
                            id="projets"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24 bg-gradient-to-br from-[#FFF7ED]/30 to-[#FFEFD5]/30 dark:from-[#0F172A]/30 dark:to-[#0A192F]/30 rounded-3xl"
                        >
                            <ProjectsShowcase/>
                        </motion.section>

                        {/* Skills Section */}
                        <motion.section
                            id="compétences"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24"
                        >
                            <SkillsSection/>
                        </motion.section>

                        {/* Formations Section */}
                        <motion.section
                            id="formations"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24"
                        >
                            <FormationsSection/>
                        </motion.section>

                        {/* Contact Section */}
                        <motion.section
                            id="contact"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24 bg-gradient-to-br from-[#F97316]/5 to-[#8B5CF6]/5 dark:from-[#F97316]/10 dark:to-[#8B5CF6]/10 rounded-3xl"
                        >
                            <ContactSection/>
                        </motion.section>
                    </motion.main>

                    {/* Footer */}
                    <motion.footer
                        variants={fadeInUp}
                        className="py-8 bg-gradient-to-r from-[#FFF7ED] via-[#FFEFD5] to-[#FFF7ED] dark:from-[#0A192F] dark:via-[#0F172A] dark:to-[#0A192F] text-center border-t border-[#F97316]/20 dark:border-[#06B6D4]/20"
                    >
                        <p className="text-sm text-[#0A192F]/70 dark:text-[#E2E8F0]/70">
                            © {new Date().getFullYear()} Oumar SY. Tous droits réservés.
                        </p>
                    </motion.footer>
                </motion.div>
            )}
        </>
    );
};

export default Home;
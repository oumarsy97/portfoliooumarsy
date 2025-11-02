import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import SkillsSection from "../components/sections/Skills";
import ExperienceSection from "@/components/sections/Experience";
import ProjectsShowcase from "../components/sections/Projects";
import ContactSection from "../components/sections/Contact";
import { LoadingScreen } from "@/components/sections/Loading";

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
        }, 5000); // Durée du chargement de 5 secondes

        return () => clearTimeout(timer);
    }, []);

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
                        <motion.section
                            id="accueil"
                            variants={fadeInUp}
                            className="flex flex-col items-center justify-center py-16 md:py-24 text-center space-y-8"
                        >
                            <Hero/>
                        </motion.section>

                        <motion.section
                            id="expérience"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24 bg-[#FFF7ED]/50 dark:bg-[#0A192F]/50 rounded-3xl"
                        >
                            <ExperienceSection/>
                        </motion.section>
                        
                        <motion.section
                            id="projets"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24 bg-gradient-to-br from-[#FFF7ED]/30 to-[#FFEFD5]/30 dark:from-[#0F172A]/30 dark:to-[#0A192F]/30 rounded-3xl"
                        >
                            <ProjectsShowcase/>
                        </motion.section>

                        <motion.section
                            id="compétences"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24"
                        >
                            <SkillsSection/>
                        </motion.section>

                        <motion.section
                            id="contact"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24 bg-gradient-to-br from-[#F97316]/5 to-[#8B5CF6]/5 dark:from-[#F97316]/10 dark:to-[#8B5CF6]/10 rounded-3xl"
                        >
                            <ContactSection/>
                        </motion.section>
                    </motion.main>

                    
                </motion.div>
            )}
        </>
    );
};

export default Home;
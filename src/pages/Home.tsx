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
                    className="bg-gradient-to-br from-[#F0F9FF] to-[#DBEAFE] dark:from-[#2C5364] dark:to-[#2C5364] text-[#1E293B] dark:text-[#E5E7EB]"
                >
                    <Header />

                    <motion.main
                        variants={staggerChildren}
                        className="px-4 sm:px-8 py-12 mx-auto max-w-screen-xl"
                    >
                        <motion.section
                            id="home"
                            variants={fadeInUp}
                            className="flex flex-col items-center justify-center py-16 md:py-24 text-center space-y-8"
                        >
                            <Hero/>
                        </motion.section>

                        <motion.section
                            id="experience"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24 bg-[#EFF6FF]/50 dark:bg-[#2C5364]/50"
                        >
                            <ExperienceSection/>
                        </motion.section>
                        <motion.section
                            id="projects"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24 bg-[#EFF6FF]/50 dark:bg-[#2C5364]/50"
                        >
                            <ProjectsShowcase/>
                        </motion.section>


                        <motion.section
                            id="skills"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24"
                        >
                            <SkillsSection/>
                        </motion.section>


                        <motion.section
                            id="contact"
                            variants={fadeInUp}
                            className="space-y-12 py-16 md:py-24"
                        >
                            <ContactSection/>
                        </motion.section>
                    </motion.main>

                    <motion.footer
                        variants={fadeInUp}
                        className="py-8 bg-[#F0F9FF] dark:bg-[#2C5364] text-center"
                    >
                        <p className="text-sm text-[#1E293B]/80 dark:text-[#E5E7EB]/80">
                            © {new Date().getFullYear()} Oumar SY. All Rights Reserved.
                        </p>
                    </motion.footer>
                </motion.div>
            )}
        </>
    );
};

export default Home;

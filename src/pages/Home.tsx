import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import SkillsSection from "../components/sections/Skills";
import ExperienceSection from "@/components/sections/Experience";
import ProjectsShowcase from "../components/sections/Projects";
import ContactSection from "../components/sections/Contact";

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const LoadingScreen = () => {
    const letterVariants = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: i * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }),
        exit: {
            y: -50,
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                background: "linear-gradient(135deg, #E6E9F0 0%, #EEF1F5 100%)",
            }}
        >
            <div className="relative">
                <motion.div
                    className="text-7xl font-light tracking-widest text-[#2C5364] mb-4 text-center"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {["O", "U", "M", "A", "R"].map((letter, i) => (
                        <motion.span
                            key={i}
                            variants={letterVariants}
                            custom={i}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    className="text-8xl font-bold text-[#6CA2BC] text-center"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {["S", "Y"].map((letter, i) => (
                        <motion.span
                            key={i}
                            variants={letterVariants}
                            custom={i + 5}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-8 h-0.5 bg-gradient-to-r from-[#6CA2BC] to-[#8EC5FC]"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                        scaleX: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.8,
                            duration: 3,
                            ease: "linear"
                        }
                    }}
                />
            </div>
        </motion.div>
    );
};

const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <LoadingScreen />}
            </AnimatePresence>

            <motion.div
                initial="initial"
                animate="animate"
                className="bg-gradient-to-br from-[#E6E9F0] to-[#EEF1F5] dark:from-[#2C5364] dark:to-[#203A43] text-[#2C5364] dark:text-[#8EC5FC]"
                style={{ opacity: loading ? 0 : 1 }}
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
                        <Hero />
                    </motion.section>



                    <motion.section
                        id="experience"
                        variants={fadeInUp}
                        className="space-y-12 py-16 md:py-24 bg-[#E6E9F0]/50 dark:bg-[#2C5364]/50"
                    >
                        <ExperienceSection />
                    </motion.section>

                    <motion.section
                        id="skills"
                        variants={fadeInUp}
                        className="space-y-12 py-16 md:py-24"
                    >
                        <SkillsSection />
                    </motion.section>

                    <motion.section
                        id="projects"
                        variants={fadeInUp}
                        className="space-y-12 py-16 md:py-24 bg-[#E6E9F0]/50 dark:bg-[#2C5364]/50"
                    >
                        <ProjectsShowcase />
                    </motion.section>

                    <motion.section
                        id="contact"
                        variants={fadeInUp}
                        className="space-y-12 py-16 md:py-24"
                    >
                        <ContactSection />
                    </motion.section>
                </motion.main>

                <motion.footer
                    variants={fadeInUp}
                    className="py-8 bg-[#E6E9F0] dark:bg-[#2C5364] text-center"
                >
                    <p className="text-sm text-[#2C5364]/80 dark:text-[#8EC5FC]/80">
                        © {new Date().getFullYear()} Oumar SY. All Rights Reserved.
                    </p>
                </motion.footer>
            </motion.div>
        </>
    );
};

export default Home;
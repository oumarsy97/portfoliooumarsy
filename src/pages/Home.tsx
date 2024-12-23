import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const menuItems = ["Home", "Experience", "Skills", "Projects", "Contact"];

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#E6E9F0]/80 dark:bg-[#2C5364]/80 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="text-2xl font-bold text-[#2C5364] dark:text-[#8EC5FC]">
                        OS
                    </div>

                    <div className="flex items-center space-x-8">
                        <nav>
                            <ul className="flex space-x-6">
                                {menuItems.map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="text-[#2C5364] dark:text-[#8EC5FC] hover:text-[#6CA2BC]
                                                     dark:hover:text-[#8EC5FC] transition-colors"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-[#E6E9F0] dark:bg-[#2C5364]
                                     text-[#2C5364] dark:text-[#8EC5FC]
                                     hover:bg-[#6CA2BC]/20 dark:hover:bg-[#8EC5FC]/20
                                     transition-colors"
                        >
                            {isDark ? '🌞' : '🌙'}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Loading screen duration
        const loadingTimer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        // Delay for content appearance after loading
        const contentTimer = setTimeout(() => {
            setShowContent(true);
        }, 5500);

        return () => {
            clearTimeout(loadingTimer);
            clearTimeout(contentTimer);
        };
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <LoadingScreen />}
            </AnimatePresence>

            {showContent && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-[#E6E9F0] to-[#EEF1F5] dark:from-[#2C5364] dark:to-[#203A43] text-[#2C5364] dark:text-[#8EC5FC]"
                >
                    <Header />

                    <motion.main className="px-4 sm:px-8 py-12 mx-auto max-w-screen-xl mt-16">
                        <section id="home" className="py-16 md:py-24">
                            <Hero />
                        </section>

                        <section id="experience" className="py-16 md:py-24 bg-[#E6E9F0]/50 dark:bg-[#2C5364]/50">
                            <ExperienceSection />
                        </section>

                        <section id="skills" className="py-16 md:py-24">
                            <SkillsSection />
                        </section>

                        <section id="projects" className="py-16 md:py-24 bg-[#E6E9F0]/50 dark:bg-[#2C5364]/50">
                            <ProjectsShowcase />
                        </section>

                        <section id="contact" className="py-16 md:py-24">
                            <ContactSection />
                        </section>
                    </motion.main>

                    <footer className="py-8 bg-[#E6E9F0] dark:bg-[#2C5364] text-center">
                        <p className="text-sm text-[#2C5364]/80 dark:text-[#8EC5FC]/80">
                            © {new Date().getFullYear()} Oumar SY. All Rights Reserved.
                        </p>
                    </footer>
                </motion.div>
            )}
        </>
    );
};

export default Home;
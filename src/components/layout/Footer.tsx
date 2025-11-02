import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Github, Linkedin, Twitter,  Heart, ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";

const Footer = () => {
    const { theme } = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const socialLinks = [
        { icon: Github, href: "https://github.com/oumarsy97", label: "GitHub", color: "#F97316" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/oumarsy97/", label: "LinkedIn", color: "#06B6D4" },
        { icon: Twitter, href: "https://twitter.com/oumarsy97", label: "Twitter", color: "#8B5CF6" },
        { icon: MessageCircle, href: "https://api.whatsapp.com/send/?phone=+221781807229&text=Hello+Oumar", label: "WhatsApp", color: "#F97316" },
    ];

    const quickLinks = [
        { name: "Accueil", id: "accueil" },
        { name: "Expérience", id: "expérience" },
        { name: "Projets", id: "projets" },
        { name: "Compétences", id: "compétences" },
        { name: "Contact", id: "contact" },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <footer
            className={`
                relative overflow-hidden
                ${theme === "dark" ? "bg-[#0F172A]" : "bg-[#FFF7ED]"}
                transition-colors duration-300
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Gradient animé en arrière-plan */}
            <motion.div
                className="absolute inset-0 z-0 opacity-30"
                animate={{
                    background: isHovered
                        ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.3), rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))'
                        : 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))'
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Ligne décorative du haut */}
            <div className="relative z-10">
                <div className="h-1 bg-gradient-to-r from-[#F97316] via-[#06B6D4] to-[#8B5CF6]" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto px-4 py-12 relative z-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Section Logo & Description */}
                    <motion.div variants={itemVariants} className="space-y-4 lg:col-span-2">
                        <div className="text-3xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-[#F97316] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
                                Oumar SY
                            </span>
                        </div>
                        <p className={`text-sm leading-relaxed max-w-md ${theme === "dark" ? "text-[#E2E8F0]/70" : "text-[#0A192F]/70"}`}>
                            Développeur full-stack passionné par l'innovation technologique. 
                            Je crée des expériences digitales élégantes et performantes avec React, TypeScript et les technologies modernes.
                        </p>
                        <div className="flex items-center space-x-2 text-sm pt-2">
                            <span className={theme === "dark" ? "text-[#E2E8F0]/70" : "text-[#0A192F]/70"}>
                                Fait avec
                            </span>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Heart className="text-[#F97316] fill-[#F97316]" size={16} />
                            </motion.div>
                            <span className={theme === "dark" ? "text-[#E2E8F0]/70" : "text-[#0A192F]/70"}>
                                à Dakar, Sénégal 🇸🇳
                            </span>
                        </div>
                    </motion.div>

                    {/* Navigation rapide */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-lg font-bold bg-gradient-to-r from-[#F97316] to-[#8B5CF6] bg-clip-text text-transparent">
                            Navigation
                        </h3>
                        <nav className="flex flex-col space-y-3">
                            {quickLinks.map((link) => (
                                <motion.button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    whileHover={{ x: 5 }}
                                    className={`
                                        text-left text-sm transition-all duration-300
                                        hover:text-[#F97316] dark:hover:text-[#06B6D4]
                                        ${theme === "dark" ? "text-[#E2E8F0]/70" : "text-[#0A192F]/70"}
                                        relative group
                                    `}
                                >
                                    <span className="relative">
                                        {link.name}
                                        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            →
                                        </span>
                                    </span>
                                </motion.button>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Réseaux sociaux */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-lg font-bold bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
                            Restons connectés
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        flex items-center justify-center p-3 rounded-xl
                                        border-2 transition-all duration-300
                                        ${theme === "dark" 
                                            ? "bg-[#0A192F]/50 border-[#06B6D4]/30 hover:border-[#06B6D4] hover:bg-[#06B6D4]/10" 
                                            : "bg-white/50 border-[#F97316]/30 hover:border-[#F97316] hover:bg-[#F97316]/10"
                                        }
                                    `}
                                >
                                    <Icon 
                                        className={theme === "dark" ? "text-[#06B6D4]" : "text-[#F97316]"} 
                                        size={20} 
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Séparateur avec gradient */}
                <motion.div
                    variants={itemVariants}
                    className="h-px bg-gradient-to-r from-transparent via-[#F97316] to-transparent mb-8 opacity-50"
                />

                {/* Copyright et bouton retour en haut */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
                >
                    <p className={`text-sm text-center md:text-left ${theme === "dark" ? "text-[#E2E8F0]/60" : "text-[#0A192F]/60"}`}>
                        © {new Date().getFullYear()} Oumar SY • Tous droits réservés • 
                        <span className="ml-1 bg-gradient-to-r from-[#F97316] to-[#8B5CF6] bg-clip-text text-transparent font-semibold">
                            Portfolio
                        </span>
                    </p>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollToTop}
                            className={`
                                rounded-full border-2 transition-all duration-300
                                ${theme === "dark"
                                    ? "border-[#06B6D4] hover:bg-[#06B6D4]/20 bg-[#0A192F]/50"
                                    : "border-[#F97316] hover:bg-[#F97316]/20 bg-white/50"
                                }
                            `}
                            aria-label="Retour en haut"
                        >
                            <ArrowUp 
                                className={theme === "dark" ? "text-[#06B6D4]" : "text-[#F97316]"} 
                                size={20} 
                            />
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
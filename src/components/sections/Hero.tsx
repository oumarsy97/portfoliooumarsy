import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    DownloadIcon,
    MessageCircle,
} from 'lucide-react';
import { Button } from "@/components/components/ui/button";
import { Card } from "@/components/components/ui/card";
import { Badge } from "@/components/components/ui/badge";

const Hero: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const socialLinks = [
        {
            Icon: GithubIcon,
            href: "https://github.com/oumarsy97",
        },
        {
            Icon: LinkedinIcon,
            href: "https://www.linkedin.com/in/oumarsy97/",
        },
        {
            Icon: TwitterIcon,
            href: "https://twitter.com/oumarsy97",
        },
        {
            Icon: MessageCircle,
            href: "https://api.whatsapp.com/send/?phone=+221781807229&text=Hello+Oumar+Comment+vous+allez",
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120
            }
        }
    };

    return (
        <div
            className="relative min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FFEFD5] dark:from-[#0A192F] dark:to-[#0F172A] flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="absolute inset-0 z-0 opacity-50"
                animate={{
                    background: isHovered
                        ? 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.2), rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))'
                        : 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.1), rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))'
                }}
                transition={{duration: 2, repeat: Infinity, repeatType: "reverse"}}
            />

            <div className="container mx-auto px-4 relative z-10">
                <Card
                    className="bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-xl border-2 border-[#F97316]/20 dark:border-[#06B6D4]/20 shadow-2xl rounded-2xl">
                    <div className="grid md:grid-cols-2 gap-12 p-8 lg:p-16 items-center">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-6"
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl lg:text-6xl font-bold text-[#0A192F] dark:text-[#E2E8F0] tracking-tight"
                            >
                                Oumar Sy
                            </motion.h1>

                            <motion.div variants={itemVariants}>
                                <Badge
                                    variant="outline"
                                    className="mb-4 bg-gradient-to-r from-[#F97316]/10 to-[#8B5CF6]/10 text-[#0A192F] dark:text-[#E2E8F0] border-[#F97316]/30 dark:border-[#06B6D4]/30"
                                >
                                    Développeur Full Stack certifé à l'Orange Digital Center
                                </Badge>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="text-2xl lg:text-4xl font-semibold bg-gradient-to-r from-[#F97316] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent"
                            >
                                <TypeAnimation
                                    sequence={[
                                        'Création Web Innovante',
                                        1000,
                                        'Expert React & TypeScript',
                                        1000,
                                        'Solutions Digitales Élégantes',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </motion.div>

                            <motion.p
                                variants={itemVariants}
                                className="text-[#0A192F]/70 dark:text-[#E2E8F0]/70 leading-relaxed"
                            >
                                Développeur full-stack passionné par l'innovation technologique, spécialisé dans les technologies web et mobile. Créatif, autonome et orienté résultats, je construis des solutions performantes et évolutives. Avec une forte capacité d'écoute et un esprit d'équipe, j'assure une communication claire pour atteindre les objectifs communs.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
                            >
                                <Button
                                    variant="outline"
                                    className="w-full md:w-auto bg-gradient-to-r from-[#F97316] to-[#8B5CF6] text-white border-none hover:opacity-90 transition-opacity"
                                    onClick={() => window.open('https://cvdesignr.com/p/670e5f7cbe58a', '_blank')}
                                >
                                    <DownloadIcon className="mr-2" size={18}/>
                                    Voir CV
                                </Button>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex space-x-4 mt-6"
                            >
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{scale: 1.2}}
                                        whileTap={{scale: 0.9}}
                                        className="text-[#F97316] dark:text-[#06B6D4] hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors"
                                    >
                                        <link.Icon size={24}/>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="hidden md:flex justify-center items-center"
                            animate={{
                                rotate: isHovered ? [0, 5, -5, 0] : 0,
                                scale: isHovered ? [1, 1.05, 0.95, 1] : 1
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "mirror"
                            }}
                        >
                            <div className="relative">
                                <motion.div
                                    className="absolute -inset-2 bg-gradient-to-r from-[#F97316] via-[#06B6D4] to-[#8B5CF6] rounded-full opacity-30 blur-xl"
                                    animate={{
                                        scale: isHovered ? [1, 1.2, 0.8, 1] : 1,
                                        opacity: isHovered ? [0.3, 0.5, 0.2, 0.3] : 0.3
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "mirror"
                                    }}
                                />
                                <div
                                    className="relative z-10 w-64 h-64 lg:w-96 lg:h-96 bg-[#FFF7ED] dark:bg-[#0F172A] rounded-full overflow-hidden border-4 border-[#F97316]/20 dark:border-[#06B6D4]/20">
                                    <img
                                        src="/profil.png"
                                        alt="Oumar Sy"
                                        className=" object-cover object-center"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Hero;
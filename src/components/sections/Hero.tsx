import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from 'next-themes';
import {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    DownloadIcon,
    MessageCircle
} from 'lucide-react';
import { Button } from "@/components/components/ui/button";
import { Card } from "@/components/components/ui/card";
import { Badge } from "@/components/components/ui/badge";

const Hero: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { theme } = useTheme();

    const socialLinks = [
        {
            Icon: GithubIcon,
            href: "https://github.com/oumarsy97",
        },
        {
            Icon: LinkedinIcon,
            href: "https://www.linkedin.com/in/oumar-sy-061797233/",
        },
        {
            Icon: TwitterIcon,
            href: "https://twitter.com/oumarsy",
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
            className="relative min-h-screen bg-gradient-to-br from-[#E6E9F0] to-[#EEF1F5] dark:from-[#2C5364] dark:to-[#203A43] flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="absolute inset-0 z-0 opacity-50"
                animate={{
                    background: isHovered
                        ? 'linear-gradient(to bottom right, rgba(108, 162, 188, 0.2), rgba(142, 197, 252, 0.2))'
                        : 'linear-gradient(to bottom right, rgba(108, 162, 188, 0.1), rgba(142, 197, 252, 0.1))'
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <Card className="bg-white/90 dark:bg-[#203A43]/90 backdrop-blur-xl border-2 border-[#6CA2BC]/20 dark:border-[#8EC5FC]/20 shadow-2xl rounded-2xl">
                    <div className="grid md:grid-cols-2 gap-12 p-8 lg:p-16 items-center">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-6"
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl lg:text-6xl font-bold text-[#2C5364] dark:text-[#8EC5FC] tracking-tight"
                            >
                                Oumar Sy
                            </motion.h1>

                            <motion.div variants={itemVariants}>
                                <Badge
                                    variant="outline"
                                    className="mb-4 bg-[#6CA2BC]/10 dark:bg-[#8EC5FC]/10 text-[#2C5364] dark:text-[#8EC5FC] border-[#6CA2BC]/30 dark:border-[#8EC5FC]/30"
                                >
                                    Full Stack Developer
                                </Badge>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="text-2xl lg:text-4xl font-semibold text-[#6CA2BC] dark:text-[#8EC5FC]"
                            >
                                <TypeAnimation
                                    sequence={[
                                        'Innovative Web Creation',
                                        1000,
                                        'React & TypeScript Expert',
                                        1000,
                                        'Elegant Digital Solutions',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </motion.div>

                            <motion.p
                                variants={itemVariants}
                                className="text-[#2C5364]/80 dark:text-[#8EC5FC]/80 leading-relaxed"
                            >
                                Transforming complex concepts into smooth and high-performance digital experiences.
                                Passionate about technological innovation.Rigorous full-stack developer specializing in web and mobile technologies.
                                Self-reliant, creative, and results-oriented, I design high-performance solutions while ensuring their scalability.
                                With strong listening skills and a collaborative mindset, I strive to maintain clear communication within teams to achieve shared goals.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
                            >
                                <Button
                                    variant="outline"
                                    className="w-full md:w-auto border-[#6CA2BC] dark:border-[#8EC5FC] text-[#2C5364] dark:text-[#8EC5FC] hover:bg-[#6CA2BC]/10 dark:hover:bg-[#8EC5FC]/10"
                                    onClick={() => window.open('https://cvdesignr.com/p/670e5f7cbe58a', '_blank')}
                                >
                                    <DownloadIcon className="mr-2" size={18}/>
                                    View CV
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
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-[#6CA2BC] dark:text-[#8EC5FC] hover:text-[#2C5364] dark:hover:text-white transition-colors"
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
                                    className="absolute -inset-2 bg-gradient-to-r from-[#6CA2BC] to-[#8EC5FC] dark:from-[#2C5364] dark:to-[#203A43] rounded-full opacity-30 blur-xl"
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
                                <div className="relative z-10 w-64 h-64 lg:w-96 lg:h-96 bg-[#E6E9F0] dark:bg-[#2C5364] rounded-full overflow-hidden border-4 border-[#6CA2BC]/20 dark:border-[#8EC5FC]/20">
                                    <img
                                        src="/profile.png"
                                        alt="Oumar Sy"
                                        className="w-full h-full object-cover object-center"
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
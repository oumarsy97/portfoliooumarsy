import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from 'next-themes';
import {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    DownloadIcon,
    MessageCircle,
    MailIcon,
    PhoneIcon,
    Star,
    Globe,
    Pencil,
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
            className="relative min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] dark:from-[#2C5364] dark:to-[#2C5364] flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="absolute inset-0 z-0 opacity-50"
                animate={{
                    background: isHovered
                        ? 'linear-gradient(to bottom right, rgba(6, 182, 212, 0.2), rgba(14, 165, 233, 0.2), rgba(16, 185, 129, 0.2))'
                        : 'linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(14, 165, 233, 0.1), rgba(16, 185, 129, 0.1))'
                }}
                transition={{duration: 2, repeat: Infinity, repeatType: "reverse"}}
            />

            <div className="container mx-auto px-4 relative z-10">
                <Card
                    className="bg-white/90 dark:bg-[#1E293B]/90 backdrop-blur-xl border-2 border-[#06B6D4]/20 dark:border-[#22D3EE]/20 shadow-2xl rounded-2xl">
                    <div className="grid md:grid-cols-2 gap-12 p-8 lg:p-16 items-center">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-6"
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl lg:text-6xl font-bold text-[#334155] dark:text-[#E2E8F0] tracking-tight"
                            >
                                Oumar Sy
                            </motion.h1>

                            <motion.div variants={itemVariants}>
                                <Badge
                                    variant="outline"
                                    className="mb-4 bg-[#06B6D4]/10 dark:bg-[#22D3EE]/10 text-[#334155] dark:text-[#E2E8F0] border-[#06B6D4]/30 dark:border-[#22D3EE]/30"
                                >
                                    Full Stack Developer
                                </Badge>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="text-2xl lg:text-4xl font-semibold text-[#0EA5E9] dark:text-[#38BDF8]"
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
                                className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed"
                            >
                                Full-stack developer passionate about tech innovation, specializing in web and mobile technologies. Creative, self-driven, and results-oriented, I build high-performance and scalable solutions. With strong listening skills and a team-focused mindset, I ensure clear communication to achieve shared goals.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
                            >
                                <Button
                                    variant="outline"
                                    className="w-full md:w-auto border-[#06B6D4] dark:border-[#22D3EE] text-[#334155] dark:text-[#E2E8F0] hover:bg-[#06B6D4]/10 dark:hover:bg-[#22D3EE]/10"
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
                                        whileHover={{scale: 1.2}}
                                        whileTap={{scale: 0.9}}
                                        className="text-[#0EA5E9] dark:text-[#38BDF8] hover:text-[#10B981] dark:hover:text-[#34D399] transition-colors"
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
                                    className="absolute -inset-2 bg-gradient-to-r from-[#06B6D4] via-[#0EA5E9] to-[#10B981] dark:from-[#22D3EE] dark:via-[#38BDF8] dark:to-[#34D399] rounded-full opacity-30 blur-xl"
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
                                    className="relative z-10 w-64 h-64 lg:w-96 lg:h-96 bg-[#F1F5F9] dark:bg-[#1E293B] rounded-full overflow-hidden border-4 border-[#06B6D4]/20 dark:border-[#22D3EE]/20">
                                    <img
                                        src="/image.png"
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

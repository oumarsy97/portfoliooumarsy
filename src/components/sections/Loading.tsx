import { motion } from "framer-motion";
import React, { useState } from "react";

export const LoadingScreen = () => {
    const [isHovered, setIsHovered] = useState(false);

    const letterVariants = {
        initial: {
            y: 50,
            opacity: 0,
            scale: 0.5
        },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }),
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3
            }
        }
    };

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5
            }
        }
    };

    const imageVariants = {
        initial: {
            scale: 0.8,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.3
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                background: "linear-gradient(135deg, #FFF7ED 0%, #FFEFD5 100%)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Gradient subtil en arrière-plan */}
            <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                    background: isHovered
                        ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(139, 92, 246, 0.15))'
                        : 'linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(139, 92, 246, 0.08))'
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />

            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative z-10 flex flex-col items-center"
            >
                {/* Image de profil */}
                <motion.div
                    variants={imageVariants}
                    className="relative mb-8"
                    animate={{
                        scale: isHovered ? [1, 1.05, 1] : 1
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror"
                    }}
                >
                    <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-[#F97316] to-[#8B5CF6] rounded-full opacity-30 blur-xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                    />
                    <div className="relative z-10 w-32 h-32 bg-[#FFF7ED] rounded-full overflow-hidden border-4 border-[#F97316]/30">
                        <img
                            src="/image.png"
                            alt="Oumar Sy"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </motion.div>

                {/* Conteneur avec effet glassmorphism */}
                <div className="bg-white/60 backdrop-blur-lg border border-[#F97316]/20 rounded-3xl px-16 py-8 shadow-xl">
                    {/* Prénom OUMAR */}
                    <motion.div
                        className="text-5xl md:text-6xl font-light tracking-widest mb-2 text-center"
                        initial="initial"
                        animate="animate"
                    >
                        {["O", "U", "M", "A", "R"].map((letter, i) => (
                            <motion.span
                                key={i}
                                variants={letterVariants}
                                custom={i}
                                whileHover="hover"
                                className="inline-block bg-gradient-to-r from-[#F97316] to-[#8B5CF6] bg-clip-text text-transparent cursor-pointer"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Nom SY */}
                    <motion.div
                        className="text-6xl md:text-7xl font-bold text-center mb-4"
                        initial="initial"
                        animate="animate"
                    >
                        {["S", "Y"].map((letter, i) => (
                            <motion.span
                                key={i}
                                variants={letterVariants}
                                custom={i + 5}
                                whileHover="hover"
                                className="inline-block bg-gradient-to-r from-[#F97316] to-[#8B5CF6] bg-clip-text text-transparent cursor-pointer"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Barre de progression minimaliste */}
                    <div className="relative w-48 h-0.5 bg-[#0A192F]/10 rounded-full overflow-hidden mx-auto">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#8B5CF6] rounded-full"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
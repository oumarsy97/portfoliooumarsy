import { motion } from "framer-motion";

export const LoadingScreen = () => {

    const letterVariants = {
        initial: {
            y: 80,
            opacity: 0,
            scale: 0.2,
            rotateX: -90
        },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 1.2,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1]
            }
        }),
        hover: {
            scale: 1.2,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        },
        exit: {
            opacity: 0,
            y: -100,
            filter: "blur(20px)",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const imageVariants = {
        initial: {
            scale: 0.5,
            opacity: 0,
            rotate: -20
        },
        animate: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center z-[100] overflow-hidden bg-[#FFF7ED] dark:bg-[#020617]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit="exit"
            variants={containerVariants}
        >
            {/* Arrière-plan dynamique */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="relative z-10 flex flex-col items-center"
            >
                {/* Photo de Profil */}
                <motion.div
                    variants={imageVariants}
                    className="relative mb-12"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse" />
                    <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary via-purple-500 to-cyan-400 overflow-hidden">
                        <div className="w-full h-full rounded-full overflow-hidden bg-background">
                            <img
                                src="/image.png"
                                alt="Oumar Sy"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Conteneur Texte */}
                <div className="text-center space-y-2">
                    <motion.div
                        className="flex justify-center space-x-1 overflow-hidden"
                        style={{ perspective: "1000px" }}
                    >
                        {["O", "U", "M", "A", "R"].map((letter, i) => (
                            <motion.span
                                key={i}
                                variants={letterVariants}
                                custom={i}
                                whileHover="hover"
                                className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent cursor-default"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex justify-center space-x-2 overflow-hidden"
                        style={{ perspective: "1000px" }}
                    >
                        {["S", "Y"].map((letter, i) => (
                            <motion.span
                                key={i}
                                variants={letterVariants}
                                custom={i + 5}
                                whileHover="hover"
                                className="text-7xl md:text-9xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent cursor-default"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Indicateur de chargement minimaliste */}
                <div className="mt-12 overflow-hidden w-64">
                    <motion.div
                        className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};
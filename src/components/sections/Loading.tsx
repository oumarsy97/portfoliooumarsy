import {motion} from "framer-motion";
import React from "react";

export const LoadingScreen = () => {
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

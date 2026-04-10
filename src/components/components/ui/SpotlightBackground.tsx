import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const SpotlightBackground: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Mesh Background */}
            <div className="absolute inset-0 bg-[#FFF7ED] dark:bg-[#020617] transition-colors duration-500" />
            
            {/* Animated Spotlights */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 dark:opacity-20"
                style={{
                    left: springX,
                    top: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                }}
            />
            
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.05] dark:opacity-10"
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -100, 100, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    right: '10%',
                    top: '10%',
                    background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
                }}
            />

            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full blur-[160px] opacity-[0.05] dark:opacity-10"
                animate={{
                    x: [0, -150, 150, 0],
                    y: [0, 150, -150, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    left: '-10%',
                    bottom: '-10%',
                    background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
                }}
            />
        </div>
    );
};

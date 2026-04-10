import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    ArrowRight,
    MapPin,
    Calendar
} from 'lucide-react';

const Hero: React.FC = () => {
    const socialLinks = [
        { Icon: GithubIcon, href: "https://github.com/oumarsy97" },
        { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/oumarsy97/" },
        { Icon: TwitterIcon, href: "https://twitter.com/oumarsy97" },
    ];

    return (
        <section id="accueil" className="relative h-[100vh] min-h-[700px] flex items-center justify-center pt-20 overflow-hidden">
            {/* Soft Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
                    
                    {/* Status & Location */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-wrap items-center justify-center gap-6"
                    >
                        <div className="flex items-center gap-2 text-foreground/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                            <MapPin size={12} className="text-primary" />
                            Dakar, Sénégal / Remote
                        </div>
                        <div className="w-1 h-1 rounded-full bg-foreground/10 hidden md:block" />
                        <div className="flex items-center gap-2 text-foreground/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                            <Calendar size={12} className="text-primary" />
                            Disponible Janvier 2026
                        </div>
                    </motion.div>

                    {/* Main Headlines */}
                    <div className="space-y-6">
                        <motion.h1 
                            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-[-0.04em] leading-[0.95] text-foreground"
                        >
                            Software <br /> Engineering 
                            <span className="text-primary italic">.</span>
                        </motion.h1>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-xl md:text-2xl font-bold text-foreground/40 tracking-tight"
                        >
                            <TypeAnimation
                                sequence={[
                                    'Architecting Scalable Systems.',
                                    2000,
                                    'Building High-Performance Apps.',
                                    2000,
                                    'Full Stack Excellence.',
                                    2000,
                                ]}
                                speed={60}
                                repeat={Infinity}
                            />
                        </motion.div>
                    </div>

                    {/* Bio Paragraph */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-lg md:text-xl text-foreground/50 max-w-2xl font-medium leading-relaxed"
                    >
                        Ingénieur logiciel passionné par la conception d'architectures robustes 
                        et le développement d'interfaces modernes. Je transforme des visions 
                        complexes en produits digitaux performants.
                    </motion.p>

                    {/* Actions */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-col sm:flex-row items-center gap-8 pt-6"
                    >
                        <button 
                            onClick={() => {
                                const el = document.getElementById('projets');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group relative px-10 py-5 bg-foreground text-background rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-[1.02] transition-all flex items-center gap-3"
                        >
                            Voir mes travaux
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="flex items-center gap-1">
                            {socialLinks.map((link, idx) => (
                                <a 
                                    key={idx} 
                                    href={link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-4 text-foreground/30 hover:text-primary transition-colors"
                                >
                                    <link.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-foreground/20">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-foreground/20 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
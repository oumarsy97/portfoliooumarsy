import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
    };

    const menuItems = [
        { label: "Accueil", id: "accueil" },
        { label: "Expérience", id: "expérience" },
        { label: "Projets", id: "projets" },
        { label: "Compétences", id: "compétences" },
        { label: "Formations", id: "formations" },
        { label: "Contact", id: "contact" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 py-6 md:py-8">
            <div className="container mx-auto px-6 flex justify-center">
                <motion.nav
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`
                        flex items-center justify-between px-6 py-2.5 rounded-2xl
                        transition-all duration-500 border
                        ${scrolled 
                            ? "w-full max-w-2xl bg-background/80 backdrop-blur-xl border-foreground/5 shadow-sm" 
                            : "w-full max-w-5xl bg-transparent border-transparent"}
                    `}
                >
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center cursor-pointer group"
                        onClick={() => scrollToSection("accueil")}
                    >
                        <span className="text-base font-black tracking-tight text-foreground">
                            OUMAR<span className="text-slate-400 font-medium">.SY</span>
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all hover:text-primary text-foreground/40 hover:bg-foreground/5 rounded-lg"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-xl border border-foreground/5 hover:bg-foreground/5 transition-colors text-foreground/60"
                        >
                            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                        </button>

                        <button
                            className="lg:hidden p-2 rounded-xl border border-foreground/5 hover:bg-foreground/5"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                        
                        <button 
                            onClick={() => scrollToSection("contact")}
                            className="hidden md:block px-5 py-2 bg-foreground text-background rounded-xl text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all"
                        >
                            Contact
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-24 left-6 right-6 bg-background border border-foreground/5 p-8 rounded-[2rem] lg:hidden shadow-2xl z-50 shadow-foreground/5"
                    >
                        <nav className="flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-left py-3 px-4 rounded-xl hover:bg-foreground/5 transition-colors text-lg font-bold text-foreground/60 hover:text-foreground"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
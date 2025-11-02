import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/components/ui/navigation-menu";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const toggleMobileMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Fonction pour le défilement lisse
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={`
                ${theme === "dark" ? "bg-[#0F172A] text-[#E2E8F0]" : "bg-[#FFF7ED] text-[#0A192F]"} 
                fixed w-full top-0 z-50 shadow-md transition-colors duration-300
            `}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/" className="flex items-center">
                        <span className="mr-2 bg-gradient-to-r from-[#F97316] to-[#8B5CF6] bg-clip-text text-transparent">Oumar SY</span>
                    </a>
                </div>

                {/* Navigation Desktop */}
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList className="flex space-x-6 justify-end">
                        {["Accueil","Expérience", "Projets", "Compétences", "Contact"].map((item) => (
                            <NavigationMenuItem key={item}>
                                <NavigationMenuLink
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault(); // Empêche le comportement par défaut du lien
                                        scrollToSection(item.toLowerCase());
                                    }}
                                >
                                    {item}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Actions */}
                <div className="flex items-center space-x-4 relative">
                    {/* Bouton de basculement de thème */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-full border-[#F97316] hover:bg-[#F97316]/10"
                        aria-label="Changer de thème"
                    >
                        {theme === "light" ? <Sun className="text-[#F97316]" /> : <Moon className="text-[#06B6D4]" />}
                    </Button>

                    {/* Bouton de menu mobile */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="md:hidden rounded-full border-[#F97316] hover:bg-[#F97316]/10"
                        onClick={toggleMobileMenu}
                        aria-label="Ouvrir le menu"
                    >
                        <Menu />
                    </Button>

                    {/* Menu Mobile */}
                    {isMenuOpen && (
                        <div
                            className={`
                                absolute top-full right-0 w-64 mt-2
                                ${theme === "dark" ? "bg-[#0F172A] text-[#E2E8F0]" : "bg-[#FFF7ED] text-[#0A192F]"} 
                                shadow-md rounded-lg transition-all duration-300 z-50 border border-[#F97316]/20
                            `}
                        >
                            <nav className="flex flex-col p-4 space-y-4">
                                {["Accueil","Expérience", "Projets", "Compétences", "Contact"].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors block"
                                        onClick={(e) => {
                                            e.preventDefault(); // Empêche le comportement par défaut du lien
                                            scrollToSection(item.toLowerCase());
                                            setIsMenuOpen(false); // Ferme le menu mobile après un clic
                                        }}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
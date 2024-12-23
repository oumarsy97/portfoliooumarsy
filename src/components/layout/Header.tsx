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
                ${theme === "dark" ? "bg-[#2C3E50] text-[#CBD5E1]" : "bg-[#CBD5E1] text-[#2C3E50]"} 
                fixed w-full top-0 z-50 shadow-md transition-colors duration-300
            `}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/" className="flex items-center">
                        <span className="mr-2">Oumar SY</span>
                    </a>
                </div>

                {/* Navigation Desktop */}
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList className="flex space-x-6 justify-end">
                        {["Home","Experience", "Projects", "Skills", "Contact"].map((item) => (
                            <NavigationMenuItem key={item}>
                                <NavigationMenuLink
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-[#8C6A52] transition-colors"
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
                        className="rounded-full"
                        aria-label="Changer de thème"
                    >
                        {theme === "light" ? <Sun /> : <Moon />}
                    </Button>

                    {/* Bouton de menu mobile */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="md:hidden rounded-full"
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
                                ${theme === "dark" ? "bg-[#2C3E50] text-[#CBD5E1]" : "bg-[#CBD5E1] text-[#2C3E50]"} 
                                shadow-md rounded-lg transition-all duration-300 z-50
                            `}
                        >
                            <nav className="flex flex-col p-4 space-y-4">
                                {["Home","Experience", "Projects", "Skills", "Contact"].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-[#8C6A52] transition-colors block"
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

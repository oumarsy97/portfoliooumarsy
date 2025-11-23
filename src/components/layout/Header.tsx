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
        setIsMenuOpen(false);
    };

    const menuItems = [
        { label: "Accueil", id: "accueil" },
        { label: "Expérience", id: "expérience" },
        { label: "Projets", id: "projets" },
        { label: "Compétences", id: "compétences" },
        { label: "Formations", id: "formations" },
        { label: "Services", id: "services" },
        { label: "Disponibilité", id: "disponibilité" },
        { label: "Contact", id: "contact" }
    ];

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
                    <a href="/" className="flex items-center" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("accueil");
                    }}>
                        <span className="mr-2 bg-gradient-to-r from-[#F97316] to-[#8B5CF6] bg-clip-text text-transparent">Oumar SY</span>
                    </a>
                </div>

                {/* Navigation Desktop */}
                <NavigationMenu className="hidden lg:block">
                    <NavigationMenuList className="flex space-x-4 justify-end">
                        {menuItems.map((item) => (
                            <NavigationMenuItem key={item.id}>
                                <NavigationMenuLink
                                    href={`#${item.id}`}
                                    className="hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors text-sm"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                >
                                    {item.label}
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
                        className="lg:hidden rounded-full border-[#F97316] hover:bg-[#F97316]/10"
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
                                max-h-[80vh] overflow-y-auto
                            `}
                        >
                            <nav className="flex flex-col p-4 space-y-3">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors block py-2 px-3 rounded-lg hover:bg-[#F97316]/10"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.id);
                                        }}
                                    >
                                        {item.label}
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
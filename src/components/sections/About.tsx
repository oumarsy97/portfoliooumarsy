import React from 'react';
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/components/ui/tooltip";
import {
    Code,
    Server,
    Smartphone,
    Database,
    GitBranch
} from "lucide-react";

// About Section
export const AboutSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 py-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
                À Propos de Moi
            </h2>
            <Card className="max-w-4xl mx-auto">
                <CardContent className="p-6 md:p-10">
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                        Développeur fullstack rigoureux, spécialisé en technologies web et mobiles.
                        Autonome, créatif et orienté résultat, je conçois des solutions performantes
                        tout en m'assurant de leur évolutivité. Doté d'une grande capacité d'écoute
                        et d'un esprit collaboratif, je m'efforce de maintenir une communication fluide
                        au sein des équipes pour atteindre les objectifs communs.
                    </p>
                </CardContent>
            </Card>
        </motion.section>
    );
};

// Skills Section
export const SkillsSection = () => {
    const skillCategories = [
        {
            name: "Programmation",
            skills: ["Java", "TypeScript", "JavaScript", "PHP", "Python", "Dart"],
            icon: <Code className="w-10 h-10 text-primary" />
        },
        {
            name: "Frontend",
            skills: ["React JS", "Angular"],
            icon: <Smartphone className="w-10 h-10 text-primary" />
        },
        {
            name: "Backend",
            skills: [
                "Spring Boot",
                "Laravel",
                "Symfony",
                "Node.js (Nest, Express)",
                "Django"
            ],
            icon: <Server className="w-10 h-10 text-primary" />
        },
        {
            name: "Mobile",
            skills: ["Flutter", "React Native"],
            icon: <Smartphone className="w-10 h-10 text-primary" />
        },
        {
            name: "Bases de Données",
            skills: [
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Firebase",
                "Neon"
            ],
            icon: <Database className="w-10 h-10 text-primary" />
        },
        {
            name: "DevOps",
            skills: ["Git", "GitHub", "GitLab", "Docker"],
            icon: <GitBranch className="w-10 h-10 text-primary" />
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="container mx-auto px-4 py-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
                Mes Compétences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1
                        }}
                    >
                        <Card className="h-full hover:shadow-lg transition-all duration-300">
                            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                                {category.icon}
                                <CardTitle>{category.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(skill => (
                                        <TooltipProvider key={skill}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {skill} - Compétence maîtrisée
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
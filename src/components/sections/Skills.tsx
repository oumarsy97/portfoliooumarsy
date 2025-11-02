/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/components/ui/card';
import { Code, Layers, Database, Server, Smartphone, GitBranch, Users, Lightbulb, Target, MessageCircle, Clock, Brain } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const SkillCategory = ({ title, skills, icon: Icon, logoUrls }: any) => (
    <motion.div
        className="group relative min-w-[300px]"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
    >
        <Card
            className="border border-[#F97316]/20 dark:border-[#06B6D4]/20
                       bg-white/80 dark:bg-[#0F172A]/80 p-6
                       backdrop-blur-sm
                       hover:transform hover:translate-y-[-4px]
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-[#F97316]/20
                       dark:hover:shadow-[#06B6D4]/20 h-full"
        >
            <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-[#F97316] to-[#8B5CF6] text-white mr-4
                            group-hover:opacity-90
                            transition-all duration-300">
                    <Icon size={24}/>
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] dark:text-[#E2E8F0]">{title}</h3>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                    {skills.map((skill: string, idx: number) => (
                        <div key={idx}
                             className="flex flex-col items-center">
                            {logoUrls && logoUrls[idx] ? (
                                <div
                                    className="w-16 h-16 mb-2 relative overflow-hidden rounded-lg bg-white dark:bg-[#0F172A] p-2 border border-[#F97316]/10 dark:border-[#06B6D4]/10">
                                    <img
                                        src={logoUrls[idx]}
                                        alt={`${skill} logo`}
                                        className="w-full h-full object-contain transform transition-all duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ) : (
                                <div
                                    className="w-16 h-16 mb-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#F97316]/10 to-[#8B5CF6]/10">
                                    <span
                                        className="text-3xl text-[#F97316] dark:text-[#06B6D4]">{skill.charAt(0)}</span>
                                </div>
                            )}
                            <span
                                className="text-[#0A192F] dark:text-[#E2E8F0] mt-2 text-center text-sm">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    </motion.div>
);

const SoftSkillCard = ({ icon: Icon, title, description }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-sm p-6 rounded-xl
                   border border-[#F97316]/20 dark:border-[#06B6D4]/20
                   hover:shadow-lg hover:shadow-[#F97316]/20 dark:hover:shadow-[#06B6D4]/20
                   transition-all duration-300"
    >
        <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-4 rounded-full bg-gradient-to-r from-[#F97316] to-[#8B5CF6] text-white">
                <Icon size={32} />
            </div>
            <h4 className="text-lg font-bold text-[#0A192F] dark:text-[#E2E8F0]">{title}</h4>
            <p className="text-sm text-[#0A192F]/70 dark:text-[#E2E8F0]/70">{description}</p>
        </div>
    </motion.div>
);

const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Langages de Programmation",
            skills: ["Java", "TypeScript", "PHP", "Python", "Dart"],
            icon: Code,
            logoUrls: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
            ]
        },
        {
            title: "Développement Web",
            skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "TailwindCSS"],
            icon: Code,
            logoUrls: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            ]
        },
        {
            title: "Frameworks Frontend",
            skills: ["React JS", "Angular"],
            icon: Layers,
            logoUrls: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
            ]
        },
        {
            title: "Frameworks Backend",
            skills: ["Spring Boot", "NestJs","Laravel", "ExpressJS",  "Django","Symfony"],
            icon: Server,
            logoUrls: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg",
               "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg"

            ]
        },
        {
            title: "Développement Mobile",
            skills: ["Flutter", "React Native"],
            icon: Smartphone,
            logoUrls: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            ]
        },
        {
            title: "Outils de Déploiement",
            skills: ["Git/Github", "Gitlab", "Bitbucket", "Docker"],
            icon: GitBranch,
            logoUrls: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            ]
        },
        {
            title: "Bases de Données",
            skills: ["PostgreSQL", "MySQL", "Firebase", "MongoDB", "Prisma"],
            icon: Database,
            logoUrls: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"
            ]
        }
    ];

    const softSkills = [
        {
            icon: Users,
            title: "Travail d'équipe",
            description: "Collaboration efficace et communication claire au sein des équipes"
        },
        {
            icon: Lightbulb,
            title: "Créativité",
            description: "Approche innovante pour résoudre les problèmes complexes"
        },
        {
            icon: Target,
            title: "Orienté résultats",
            description: "Focus sur l'atteinte des objectifs et la livraison de qualité"
        },
        {
            icon: MessageCircle,
            title: "Communication",
            description: "Capacité d'écoute et expression claire des idées"
        },
        {
            icon: Clock,
            title: "Gestion du temps",
            description: "Organisation efficace et respect des délais"
        },
        {
            icon: Brain,
            title: "Apprentissage continu",
            description: "Passion pour l'acquisition de nouvelles compétences"
        }
    ];

    return (
        <motion.section
            className="py-16 space-y-12 bg-[#FFF7ED]/50 dark:bg-[#0A192F]/50"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold bg-gradient-to-r from-[#F97316] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent mb-12 text-center"
                    variants={fadeInUp}
                >
                    Mes Compétences
                </motion.h2>

                {/* Technical Skills - Vertical Scroll */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-[#0A192F] dark:text-[#E2E8F0] mb-6">
                        Compétences Techniques
                    </h3>
                    <div className="max-h-[600px] overflow-y-auto pr-4 space-y-6 custom-scrollbar">
                        {skillCategories.map((category, index) => (
                            <SkillCategory
                                key={index}
                                title={category.title}
                                skills={category.skills}
                                icon={category.icon}
                                logoUrls={category.logoUrls}
                            />
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-2xl font-bold text-[#0A192F] dark:text-[#E2E8F0] mb-6 text-center">
                        Compétences Comportementales
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {softSkills.map((skill, index) => (
                            <SoftSkillCard
                                key={index}
                                icon={skill.icon}
                                title={skill.title}
                                description={skill.description}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style >{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(249, 115, 22, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #F97316, #8B5CF6);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #F97316, #06B6D4);
                }
            `}</style>
        </motion.section>
    );
};

export default SkillsSection;
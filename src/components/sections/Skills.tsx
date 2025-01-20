import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/components/ui/card';
import { Code, Layers, Database, Server, Smartphone, GitBranch } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const SkillCategory = ({ title, skills, icon: Icon, logoUrls }: any) => (
    <motion.div
        className="group relative"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
    >
        <Card
            className="border border-[#06B6D4]/20 dark:border-[#22D3EE]/20
                       bg-[#F1F5F9] dark:bg-[#1E293B] p-6
                       backdrop-blur-sm
                       hover:transform hover:translate-y-[-4px]
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-[#06B6D4]/20
                       dark:hover:shadow-[#22D3EE]/20"
        >
            <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-[#06B6D4] dark:bg-[#22D3EE] text-white mr-4
                            group-hover:bg-[#06B6D4]/80 dark:group-hover:bg-[#22D3EE]/80
                            transition-all duration-300">
                    <Icon size={24}/>
                </div>
                <h3 className="text-xl font-bold text-[#334155] dark:text-[#E2E8F0]">{title}</h3>
            </div>

            <div className="space-y-4">
                <div className="flex gap-6"> {/* No scrolling, just inline flex */}
                    {skills.map((skill: string, idx: number) => (
                        <div key={idx}
                             className="flex flex-col items-center w-32"> {/* Fixed width for each skill */}
                            {logoUrls[idx] ? (
                                <div
                                    className="w-16 h-16 mb-2 relative overflow-hidden rounded-lg bg-white dark:bg-[#1E293B] p-2">
                                    <img
                                        src={logoUrls[idx]}
                                        alt={`${skill} logo`}
                                        className="w-full h-full object-contain transform transition-all duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ) : (
                                <div
                                    className="w-16 h-16 mb-2 flex items-center justify-center rounded-lg bg-[#F1F5F9] dark:bg-[#334155]">
                                    <span
                                        className="text-3xl text-[#06B6D4] dark:text-[#22D3EE]">{skill.charAt(0)}</span>
                                </div>
                            )}
                            <span
                                className="text-[#334155] dark:text-[#E2E8F0] mt-2 text-center">{skill}</span> {/* Centered text under the logo */}
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    </motion.div>
);

const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
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
            title: "Web Development",
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
            title: "Frontend Frameworks",
            skills: ["React JS", "Angular"],
            icon: Layers,
            logoUrls: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
            ]
        },
        {
            title: "Backend Frameworks",
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
            title: "Mobile Development",
            skills: ["Flutter", "React Native"],
            icon: Smartphone,
            logoUrls: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            ]
        },
        {
            title: "Deployment Tools",
            skills: ["Git/Github", "Gitlab", "Docker"],
            icon: GitBranch,
            logoUrls: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            ]
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MySQL", "Firebase", "MongoDB", "Prisma"],
            icon: Database,
            logoUrls: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" // Prisma logo
            ]
        }

    ];

    return (
        <motion.section
            className="py-16 space-y-12 bg-[#F1F5F9]/50 dark:bg-[#1E293B]/50"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4 ">
                <motion.h2
                    className="text-4xl font-bold text-[#334155] dark:text-[#E2E8F0] mb-6"
                    variants={fadeInUp}
                >
                    My Technical Skills
                </motion.h2>


                <div className="overflow-x-auto"> {/* Horizontal scroll for categories */}
                    <div className="flex gap-6 mb-6"> {/* Categories in a row */}
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
            </div>
        </motion.section>
    );
};

export default SkillsSection;

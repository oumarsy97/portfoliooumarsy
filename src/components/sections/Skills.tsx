import React from 'react';
import { Card } from '@/components/components/ui/card';
import {
    Code,
    Database,
    Server,
    Smartphone,
    GitBranch,
    Layers
} from 'lucide-react';
import { motion } from "framer-motion";

const SkillCategory = ({ title, skills, icon: Icon, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full"
        >
            <Card className="h-full bg-[#E6E9F0]/50 dark:bg-[#2C5364]/30 backdrop-blur-sm
                           border-[#6CA2BC]/20 dark:border-[#8EC5FC]/20
                           overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6CA2BC]/10 to-[#8EC5FC]/10
                              dark:from-[#2C5364]/20 dark:to-[#203A43]/20
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center mb-6"
                    >
                        <div className="p-3 rounded-lg bg-[#6CA2BC]/10 dark:bg-[#8EC5FC]/10 mr-4">
                            <Icon className="text-[#2C5364] dark:text-[#8EC5FC]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-[#2C5364] dark:text-[#8EC5FC]">{title}</h3>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-3">
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.1 + 0.3 }}
                                viewport={{ once: true }}
                                className="flex items-center text-sm text-[#2C5364]/80 dark:text-[#8EC5FC]/80"
                            >
                                <div className="w-2 h-2 bg-[#6CA2BC] dark:bg-[#8EC5FC] rounded-full mr-3
                                              transform transition-transform duration-300
                                              group-hover:scale-150" />
                                <span className="font-medium">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Java", "TypeScript/JavaScript", "PHP", "Python", "Dart"],
            icon: Code
        },
        {
            title: "Frontend Frameworks",
            skills: ["React JS", "Angular"],
            icon: Layers
        },
        {
            title: "Backend Frameworks",
            skills: [
                "Spring Boot",
                "Laravel",
                "Symfony",
                "Node.js (Nest, Express+Prisma)",
                "Django"
            ],
            icon: Server
        },
        {
            title: "Mobile Development",
            skills: ["Flutter", "React Native"],
            icon: Smartphone
        },
        {
            title: "Deployment Tools",
            skills: ["Git/Github", "Gitlab", "Docker"],
            icon: GitBranch
        },
        {
            title: "Databases",
            skills: [
                "SQL (MySQL, PostgreSQL, Neon)",
                "NoSQL (MongoDB, Firebase)"
            ],
            icon: Database
        }
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-[#2C5364] dark:text-[#8EC5FC] mb-4"
                >
                    My Technical Skills
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-24 h-1 bg-[#6CA2BC] dark:bg-[#8EC5FC] mx-auto rounded-full"
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <SkillCategory
                        key={index}
                        index={index}
                        title={category.title}
                        skills={category.skills}
                        icon={category.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
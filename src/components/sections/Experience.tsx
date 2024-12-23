import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/components/ui/card';
import {
    Calendar,
    MapPin
} from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const ExperienceSection = () => {
    const experiences = [
        {
            title: "Web & Mobile Development Intern",
            company: "Groupe Sonatel",
            location: "Dakar, Senegal",
            period: "January 2024 - Present",
            description: [
                "Development of innovative web and mobile applications",
                "Collaboration with cross-functional teams on major projects",
                "Implementation of modern development practices and technologies"
            ]
        },
        {
            title: "Student Fullstack Developer",
            company: "Sonatel Academy",
            location: "Dakar, Senegal",
            period: "febreary 2024 - December 2024",
            description: [
                "Developed multiple full-stack applications using modern technologies",
                "Led development teams as project team leader",
                "Implemented secure authentication and authorization systems",
                "Deployed applications using Docker and cloud platforms"
            ]
        },
        {
            title: "Web Developer Intern",
            company: "Webgram",
            location: "Dakar, Senegal",
            period: "July 2023 - December 2023",
            description: [
                "Developed security features including user authentication",
                "Created comprehensive technical documentation",
                "Collaborated with the development team on various projects"
            ]
        },
        {
            title: "Streaming & VOD Intern",
            company: "UADB Distance Learning Institute",
            location: "Bambey, Senegal",
            period: "January 2021 - May 2021",
            description: [
                "Implemented an online course streaming platform",
                "Collaborated with teachers for video content creation",
                "Organized live online events for students"
            ]
        }
    ];

    return (
        <motion.section
            className="py-16 space-y-12 bg-[#E6E9F0]/50 dark:bg-[#2C5364]/50"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-[#2C5364] dark:text-[#8EC5FC] mb-12"
                    variants={fadeInUp}
                >
                    Professional Experience
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                initial: { opacity: 0, x: -50 },
                                animate: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: index * 0.2
                                    }
                                }
                            }}
                        >
                            <Card className="border border-[#6CA2BC]/20 dark:border-[#8EC5FC]/20
                                         bg-[#E6E9F0] dark:bg-[#2C5364] p-6
                                         backdrop-blur-sm
                                         hover:transform hover:translate-y-[-4px]
                                         transition-all duration-300
                                         hover:shadow-lg hover:shadow-[#6CA2BC]/20
                                         dark:hover:shadow-[#8EC5FC]/20">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                                        <h3 className="text-xl font-bold text-[#2C5364] dark:text-[#8EC5FC] mb-2">
                                            {experience.title}
                                        </h3>
                                        <p className="text-[#6CA2BC] dark:text-[#8EC5FC]/80 font-semibold mb-2">
                                            {experience.company}
                                        </p>
                                    </div>
                                    <div className="space-y-2 text-[#2C5364]/80 dark:text-[#8EC5FC]/60">
                                        <div className="flex items-center">
                                            <Calendar size={16} className="mr-2" />
                                            <span>{experience.period}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin size={16} className="mr-2" />
                                            <span>{experience.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-2 text-[#2C5364]/90 dark:text-[#8EC5FC]/90">
                                    {experience.description.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-start"
                                            whileHover={{ x: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.div
                                                className="w-2 h-2 bg-[#6CA2BC] dark:bg-[#8EC5FC]
                                                          rounded-full mr-3 mt-2"
                                                whileHover={{ scale: 1.5 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ExperienceSection;
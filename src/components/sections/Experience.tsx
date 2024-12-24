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
            title: "Full-stack development learner",
            company: "Sonatel Academy",
            location: "Dakar, Senegal",
            period: "February 2024 - December 2024",
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
            className="py-16 space-y-12 bg-[#F1F5F9]/50 dark:bg-[#1E293B]/50"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-[#334155] dark:text-[#E2E8F0] mb-12"
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
                            <Card className="border border-[#06B6D4]/20 dark:border-[#22D3EE]/20
                                         bg-[#F1F5F9] dark:bg-[#1E293B] p-6
                                         backdrop-blur-sm
                                         hover:transform hover:translate-y-[-4px]
                                         transition-all duration-300
                                         hover:shadow-lg hover:shadow-[#06B6D4]/20
                                         dark:hover:shadow-[#22D3EE]/20">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                                        <h3 className="text-xl font-bold text-[#334155] dark:text-[#E2E8F0] mb-2">
                                            {experience.title}
                                        </h3>
                                        <p className="text-[#06B6D4] dark:text-[#22D3EE] font-semibold mb-2">
                                            {experience.company}
                                        </p>
                                    </div>
                                    <div className="space-y-2 text-[#334155]/80 dark:text-[#E2E8F0]/60">
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

                                <ul className="space-y-2 text-[#334155]/90 dark:text-[#E2E8F0]/90">
                                    {experience.description.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-start"
                                            whileHover={{ x: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.div
                                                className="w-2 h-2 bg-[#06B6D4] dark:bg-[#22D3EE]
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

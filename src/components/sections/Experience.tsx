import React from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    MapPin
} from 'lucide-react';
import { Card } from '../components/ui/card';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const ExperienceSection = () => {
    const experiences = [
        {
            title: "Développement Full-stack",
            company: "MuridPro",
            location: "Dakar, Sénégal",
            period: "Septembre 2025 - Présent",
            description: [
                "Développement et maintenance d'applications web pour Khassida et Coran",
                "Technologies utilisées : React, Flutter, NestJS, PostgreSQL",
                "Mise en œuvre de designs responsifs et garantie de compatibilité multi-plateforme",
                "Collaboration avec une équipe de développeurs pour livrer des logiciels de haute qualité"
            ]
        },
        {
            title: "Développement Full-stack",
            company: "Freelance",
            location: "À distance",
            period: "Septembre 2025 - Présent",
            description: [
                "Création d'applications web responsives et dynamiques pour les clients",
                "Technologies utilisées : React, Node.js, NestJS, PostgreSQL, MongoDB",
                "Garantie de compatibilité cross-browser et optimisation des performances",
                "Collaboration avec les clients pour recueillir les besoins et fournir des mises à jour"
            ]
        },
        {
            title: "Stagiaire Développement Full-stack",
            company: "Groupe Sonatel",
            location: "Dakar, Sénégal",
            period: "Janvier 2025 - Août 2025",
            description: [
                "Développement de plusieurs applications full-stack utilisant des technologies modernes",
                "Technologies utilisées : JHipster,Java Spring Boot, Angular, Docker, Jenkins, Kubernetes, Oracle Database",
                "Mise en place de systèmes d'authentification et d'autorisation sécurisés",
                "Déploiement d'applications utilisant Docker et des plateformes cloud"
            ]
        },
        {
            title: "Apprenant Développement Full-stack",
            company: "Sonatel Academy",
            location: "Dakar, Sénégal",
            period: "Février 2024 - Décembre 2024",
            description: [
                "Développement de plusieurs applications full-stack utilisant des technologies modernes",
                "Direction d'équipes de développement en tant que chef de projet",
                "Mise en place de systèmes d'authentification et d'autorisation sécurisés",
                "Déploiement d'applications utilisant Docker et des plateformes cloud"
            ]
        },
        {
            title: "Stagiaire Développeur Web",
            company: "Webgram",
            location: "Dakar, Sénégal",
            period: "Juillet 2023 - Décembre 2023",
            description: [
                "Développement de fonctionnalités de sécurité incluant l'authentification des utilisateurs",
                "Création de documentation technique complète",
                "Collaboration avec l'équipe de développement sur divers projets"
            ]
        },
        {
            title: "Stagiaire Streaming & VOD",
            company: "Institut d'Enseignement à Distance UADB",
            location: "Bambey, Sénégal",
            period: "Janvier 2021 - Mai 2021",
            description: [
                "Mise en place d'une plateforme de streaming de cours en ligne",
                "Collaboration avec les enseignants pour la création de contenu vidéo",
                "Organisation d'événements en ligne en direct pour les étudiants"
            ]
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
                    className="text-4xl font-bold bg-gradient-to-r from-[#F97316] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent mb-12"
                    variants={fadeInUp}
                >
                    Expérience Professionnelle
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
                            <Card className="border border-[#F97316]/20 dark:border-[#06B6D4]/20
                                         bg-white/80 dark:bg-[#0F172A]/80 p-6
                                         backdrop-blur-sm
                                         hover:transform hover:translate-y-[-4px]
                                         transition-all duration-300
                                         hover:shadow-lg hover:shadow-[#F97316]/20
                                         dark:hover:shadow-[#06B6D4]/20">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                                        <h3 className="text-xl font-bold text-[#0A192F] dark:text-[#E2E8F0] mb-2">
                                            {experience.title}
                                        </h3>
                                        <p className="text-[#F97316] dark:text-[#06B6D4] font-semibold mb-2">
                                            {experience.company}
                                        </p>
                                    </div>
                                    <div className="space-y-2 text-[#0A192F]/70 dark:text-[#E2E8F0]/60">
                                        <div className="flex items-center">
                                            <Calendar size={16} className="mr-2 text-[#F97316] dark:text-[#06B6D4]" />
                                            <span>{experience.period}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin size={16} className="mr-2 text-[#F97316] dark:text-[#06B6D4]" />
                                            <span>{experience.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-2 text-[#0A192F]/80 dark:text-[#E2E8F0]/90">
                                    {experience.description.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-start"
                                            whileHover={{ x: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.div
                                                className="w-2 h-2 bg-gradient-to-r from-[#F97316] to-[#8B5CF6]
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
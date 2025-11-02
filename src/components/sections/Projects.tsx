/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code,
    ExternalLink,
    Server,
    Globe,
    Layout,
    X,
    Github,
    Globe as WebIcon
} from 'lucide-react';

const projects = [
    {
        title: "Hackathon Musée des Civilisations Noire",
        description: "Développement d'une application web et mobile pour l'événement Acathon du Musée des Civilisations Noires. L'application fournit des informations sur l'événement, les horaires et des fonctionnalités interactives pour les participants.",
        fullDescription: "Projet complet développé lors du hackathon du Musée des Civilisations Noires. L'application comprend une partie web responsive et une application mobile Flutter, toutes deux connectées à une API NestJS robuste. Les utilisateurs peuvent consulter le programme, s'inscrire aux événements, recevoir des notifications et interagir avec d'autres participants.",
        technologies: ["React", "TypeScript", "NestJS", "Flutter", "PostgreSQL"],
        features: [
            "Interface web responsive avec React",
            "Application mobile Flutter cross-platform",
            "API REST avec NestJS",
            "Authentification et gestion des utilisateurs",
            "Système de notifications en temps réel",
            "Base de données PostgreSQL optimisée"
        ],
        backlink: "https://github.com/oumarsy97/mobilemcn.git",
        deployLink: "https://mcn-sable.vercel.app/",
        category: "FullStack",
        icon: <Globe className="w-10 h-10 text-[#F97316] dark:text-[#06B6D4]" />,
        date: "Octobre 2025",
        image: "/img9.png"
    },
    {
        title: "Mémoire de Fin d'Études - Bibliothèque Numérique",
        description: "Développement d'une bibliothèque numérique décentralisée utilisant la technologie blockchain pour garantir la sécurité et l'intégrité des données. Intégration d'un système de recommandation intelligent pour améliorer l'expérience utilisateur.",
        fullDescription: "Projet de fin d'études innovant combinant blockchain et intelligence artificielle. La bibliothèque numérique utilise la blockchain Ethereum pour stocker les métadonnées des livres de manière décentralisée et sécurisée. Le système de recommandation utilise des algorithmes de Machine Learning pour suggérer des livres personnalisés basés sur l'historique de lecture et les préférences des utilisateurs.",
        technologies: ["React", "TypeScript", "NestJS", "Flutter", "Blockchain", "Machine Learning", "MySQL", "Docker", "Flask", "Ganache", "Solidity", "Truffle", "IPFS"],
        features: [
            "Stockage décentralisé avec blockchain Ethereum",
            "Smart contracts en Solidity",
            "Système de recommandation basé sur ML",
            "Interface web et mobile",
            "Stockage de fichiers sur IPFS",
            "API backend avec NestJS et Flask",
            "Containerisation avec Docker"
        ],
        backlink: "https://github.com/oumarsy97/mobilememoire.git",
        category: "FullStack",
        icon: <Code className="w-10 h-10 text-[#F97316] dark:text-[#06B6D4]" />,
        date: "De Jan à Nov 2025",
        image: "/img10.png"
    },
    {
        title: "Portfolio Personnel",
        description: "Un portfolio personnel moderne et responsive construit avec React et TypeScript. Les fonctionnalités incluent une navigation fluide, un rendu de contenu dynamique et un design épuré utilisant les composants ChadCN UI.",
        fullDescription: "Portfolio professionnel présentant mes compétences, projets et expériences. Développé avec les dernières technologies React et TypeScript, avec un design moderne utilisant Framer Motion pour les animations et ChadCN UI pour les composants. Le site est entièrement responsive et optimisé pour les performances.",
        technologies: ["React", "TypeScript", "ChadCN UI", "Framer Motion", "Tailwind CSS"],
        features: [
            "Design moderne avec animations fluides",
            "Mode sombre/clair",
            "Navigation smooth scroll",
            "Sections interactives",
            "Optimisation SEO",
            "Performance optimale"
        ],
        backlink: "https://github.com/oumarsy97/portfoliooumarsy.git",
        deployLink: "https://oumarsydev.vercel.app/",
        category: "Web",
        icon: <Layout className="w-10 h-10 text-[#F97316] dark:text-[#06B6D4]" />,
        date: "Décembre 2024",
        image: "/img11.png"
    },
    {
        title: "Refonte Wave Sénégal",
        description: "Refonte complète de l'application mobile Wave Sénégal utilisant Flutter et Firebase. Amélioration de l'expérience utilisateur et ajout de fonctionnalités innovantes.",
        fullDescription: "Refonte complète de l'application Wave Sénégal avec amélioration de l'interface utilisateur et ajout de nouvelles fonctionnalités. Utilisation de Flutter pour le développement cross-platform et Firebase pour le backend et l'authentification.",
        technologies: ["Flutter", "Firebase", "Dart"],
        features: [
            "Interface utilisateur modernisée",
            "Authentification Firebase",
            "Gestion des transactions",
            "Notifications push",
            "Mode hors ligne",
            "Performance optimisée"
        ],
        backlink: "https://github.com/oumarsy97/monprojetflutter.git",
        category: "Mobile",
        icon: <ExternalLink className="w-10 h-10 text-[#F97316] dark:text-[#06B6D4]" />,
        date: "Novembre 2024",
        image: "img_1.png"
    },
    {
        title: "Système de Transfert Programmé Wave",
        description: "Développement d'une fonctionnalité de transfert périodique automatique sur la plateforme Wave Sénégal. Mise en place d'un système permettant la programmation de transferts.",
        fullDescription: "Système complet permettant aux utilisateurs de programmer des transferts automatiques périodiques. Backend développé avec NestJS et frontend avec Angular, incluant un système d'authentification robuste et une gestion complète des transactions programmées.",
        technologies: ["NestJS", "Angular", "PostgreSQL", "TypeORM"],
        features: [
            "Programmation de transferts récurrents",
            "Interface de gestion intuitive",
            "Notifications par email/SMS",
            "Historique des transactions",
            "Authentification sécurisée",
            "API REST complète"
        ],
        backlink: "https://github.com/oumarsy97/waveproject.git",
        deployLink: "https://angular-project-qoah-6lhisxag9-oumar-sys-projects.vercel.app/login",
        category: "Web",
        icon: <Server className="w-10 h-10 text-[#F97316] dark:text-[#06B6D4]" />,
        date: "Octobre 2024",
        image: "img_3.png"
    },
    {
        title: "Système de Gestion de Tailleur",
        description: "Application de gestion de tailleur développée avec React JS. Gestion d'équipe de développement et déploiement sur Vercel pour une accessibilité optimale.",
        fullDescription: "Application complète de gestion pour ateliers de couture. Permet la gestion des clients, commandes, mesures, stocks et paiements. Développée en équipe avec une méthodologie agile.",
        technologies: ["React JS", "Node.js", "MongoDB"],
        features: [
            "Gestion des clients et commandes",
            "Prise de mesures",
            "Suivi des paiements",
            "Gestion des stocks",
            "Rapports et statistiques",
            "Interface intuitive"
        ],
        backlink: "https://github.com/oumarsy97/reactProjectGroupe5.git",
        deployLink: "https://monapp-he8l09ymc-oumar-sys-projects.vercel.app/login",
        category: "Web",
        icon: <Code className="w-10 h-10 text-[#F97316] dark:text-[#06B6D4]" />,
        date: "Octobre 2024",
        image: "/img.png"
    },
    {
        title: "Système de Gestion Scolaire",
        description: "Système de gestion scolaire construit avec Java Spring Boot et Spring Security. Comprend l'authentification, le contrôle d'accès basé sur les rôles et le respect des principes SOLID.",
        fullDescription: "Application complète de gestion scolaire développée avec Spring Boot. Architecture robuste suivant les principes SOLID et les bonnes pratiques de développement. Déployée avec Docker pour faciliter l'installation et la maintenance.",
        technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "Docker"],
        features: [
            "Gestion des élèves et enseignants",
            "Système de notes et bulletins",
            "Gestion des emplois du temps",
            "Authentification multi-rôles",
            "API REST documentée",
            "Containerisation Docker"
        ],
        backlink: "https://github.com/oumarsy97/GestionEcoleSpring.git",
        category: "Backend",
        icon: <Server className="w-10 h-10 text-[#F97316] dark:text-[#06B6D4]" />,
        date: "Septembre 2024",
        image: "/swagger.png"
    },
    {
        title: "Réseau de Tailleurs",
        description: "Architecture backend robuste pour le réseau de tailleurs. Développement avec Node.js, Prisma et Neon Postgres. Gestion efficace de l'équipe de développement.",
        fullDescription: "Backend complet pour une plateforme de mise en relation entre tailleurs et clients. API REST développée avec Node.js et Prisma ORM, déployée sur une base de données Neon Postgres pour des performances optimales.",
        technologies: ["Node.js", "Prisma", "TypeScript", "PostgreSQL", "Neon"],
        features: [
            "API REST complète",
            "ORM Prisma pour la gestion de la BDD",
            "Authentification JWT",
            "Documentation Swagger",
            "Tests automatisés",
            "Base de données optimisée"
        ],
        backlink: "https://github.com/oumarsy97/projectPrisma.git",
        deployLink: "https://app.swaggerhub.com/apis-docs/OumarSy/groupe5apiprisma/1.0.0",
        category: "Backend",
        icon: <Globe className="w-10 h-10 text-[#F97316] dark:text-[#06B6D4]" />,
        date: "Juin 2024",
        image: "/img_5.png"
    }
];

const ProjectModal = ({ project, onClose }: any) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
    >
        <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#0F172A] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#F97316]/20 dark:border-[#06B6D4]/20 shadow-2xl"
        >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-[#0F172A] border-b border-[#F97316]/20 dark:border-[#06B6D4]/20 p-6 flex justify-between items-start z-10">
                <div className="flex items-center gap-4">
                    {project.icon}
                    <div>
                        <h2 className="text-2xl font-bold text-[#0A192F] dark:text-[#E2E8F0]">
                            {project.title}
                        </h2>
                        <p className="text-sm text-[#F97316] dark:text-[#06B6D4]">{project.date}</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-[#F97316]/10 dark:hover:bg-[#06B6D4]/10 transition-colors"
                >
                    <X className="w-6 h-6 text-[#0A192F] dark:text-[#E2E8F0]" />
                </button>
            </div>

            {/* Image */}
            <div className="w-full h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                    <h3 className="text-xl font-bold text-[#0A192F] dark:text-[#E2E8F0] mb-3">
                        Description
                    </h3>
                    <p className="text-[#0A192F]/70 dark:text-[#E2E8F0]/70 leading-relaxed">
                        {project.fullDescription}
                    </p>
                </div>

                {/* Features */}
                {project.features && (
                    <div>
                        <h3 className="text-xl font-bold text-[#0A192F] dark:text-[#E2E8F0] mb-3">
                            Fonctionnalités Principales
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-3">
                            {project.features.map((feature: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-gradient-to-r from-[#F97316] to-[#8B5CF6] rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-[#0A192F]/80 dark:text-[#E2E8F0]/80">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technologies */}
                <div>
                    <h3 className="text-xl font-bold text-[#0A192F] dark:text-[#E2E8F0] mb-3">
                        Technologies Utilisées
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, idx: number) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-gradient-to-r from-[#F97316]/10 to-[#8B5CF6]/10
                                         text-[#0A192F] dark:text-[#E2E8F0] rounded-full text-sm
                                         border border-[#F97316]/20 dark:border-[#06B6D4]/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                    {project.backlink && (
                        <a
                            href={project.backlink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F97316] to-[#8B5CF6]
                                     text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                            <Github className="w-5 h-5" />
                            Code Source
                        </a>
                    )}
                    {project.deployLink && (
                        <a
                            href={project.deployLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#0A192F]
                                     text-[#F97316] dark:text-[#06B6D4] rounded-full
                                     border-2 border-[#F97316] dark:border-[#06B6D4]
                                     hover:bg-[#F97316]/10 dark:hover:bg-[#06B6D4]/10 transition-colors"
                        >
                            <WebIcon className="w-5 h-5" />
                            Voir le Projet
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    </motion.div>
);

const ProjectsShowcase = () => {
    const [activeCategory, setActiveCategory] = useState("Tous");
    const [selectedProject, setSelectedProject] = useState(null);
    const categories = ["Tous", "Web", "Mobile", "Backend", "FullStack"];

    const filteredProjects = activeCategory === "Tous"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="container mx-auto max-w-6xl px-4 py-16 bg-gradient-to-br from-[#FFF7ED] to-[#FFEFD5] dark:from-[#0A192F] dark:to-[#0F172A]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#F97316] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
                    Mes Projets
                </h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-24 h-1 bg-gradient-to-r from-[#F97316] to-[#8B5CF6] mx-auto rounded-full"
                />
            </motion.div>

            <div className="flex justify-center mb-12 flex-wrap gap-4">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-2 rounded-full transition-all ${
                            activeCategory === category
                                ? 'bg-gradient-to-r from-[#F97316] to-[#8B5CF6] text-white'
                                : 'bg-white/50 dark:bg-[#0F172A]/50 text-[#0A192F] dark:text-[#E2E8F0] border border-[#F97316]/20 dark:border-[#06B6D4]/20 hover:bg-[#F97316]/10 dark:hover:bg-[#06B6D4]/10'
                        }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-sm
                         border border-[#F97316]/20 dark:border-[#06B6D4]/20
                         rounded-2xl shadow-lg overflow-hidden
                         hover:shadow-xl hover:shadow-[#F97316]/20 dark:hover:shadow-[#06B6D4]/20 
                         transition-all cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                {project.icon}
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-[#0A192F] dark:text-[#E2E8F0] line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[#F97316] dark:text-[#06B6D4]">
                                        {project.date}
                                    </p>
                                </div>
                            </div>

                            <p className="text-[#0A192F]/70 dark:text-[#E2E8F0]/80 mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-gradient-to-r from-[#F97316]/10 to-[#8B5CF6]/10
                                         text-[#0A192F] dark:text-[#E2E8F0] rounded-full text-xs border border-[#F97316]/20 dark:border-[#06B6D4]/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 3 && (
                                    <span className="px-3 py-1 text-[#F97316] dark:text-[#06B6D4] rounded-full text-xs">
                                        +{project.technologies.length - 3}
                                    </span>
                                )}
                            </div>

                            <button className="w-full py-2 bg-gradient-to-r from-[#F97316]/10 to-[#8B5CF6]/10
                                             text-[#F97316] dark:text-[#06B6D4] rounded-lg
                                             border border-[#F97316]/20 dark:border-[#06B6D4]/20
                                             hover:from-[#F97316]/20 hover:to-[#8B5CF6]/20
                                             transition-all font-medium">
                                Voir les détails
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectsShowcase;
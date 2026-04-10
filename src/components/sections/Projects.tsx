/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    Github,
    Globe as WebIcon,
    ArrowUpRight,
} from 'lucide-react';

const projects = [
    {
        title: "Travail Global V2",
        subtitle: "HR Tech & Recruitment",
        description: "Plateforme de recrutement internationale gérant l'intégralité du cycle de carrière.",
        fullDescription: "Refonte intégrale de la plateforme Travail Global. Développement d'un écosystème robuste avec un frontend React TS performant et un backend NestJS scalable, offrant une expérience utilisateur fluide et une gestion de données complexe.",
        technologies: ["React TS", "NestJS", "PostgreSQL", "Tailwind", "Firebase"],
        features: [
            "API REST robuste sous NestJS",
            "Dashboard candidat immersif",
            "Architecture découplée performante",
            "Optimisation SEO & UX"
        ],
        deployLink: "https://v2.travailglobal.com/",
        category: "FullStack",
        date: "2026",
        image: "/v2travailglobal.png"
    },
    {
        title: "MuridPro Mobile",
        subtitle: "Cross-Platform Ecosystem",
        description: "Application mobile de référence pour la culture mouride. Déployée sur tous les stores.",
        fullDescription: "Conception et développement intégral en solo de l'application MuridPro. De l'architecture technique complexe au déploiement final sur les stores. Une solution robuste gérant du contenu massif avec une expérience utilisateur fluide.",
        technologies: ["Flutter", "Dart", "Firebase", "NestJS", "PostgreSQL"],
        features: [
            "Streaming audio haute fidélité",
            "Mode hors-ligne performant",
            "Architecture 100% autonome",
            "Déploiement AppStore/PlayStore"
        ],
        appStoreLink: "https://apps.apple.com/sn/app/murid-pro-coran-xassida-adhan/id1580312251?l=fr-FR",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.khassida.muridpro",
        category: "Mobile",
        date: "2026",
        image: "/mobilemuridpro.png"
    },
    {
        title: "MuridPro Platform",
        subtitle: "Ecosystem & Architecture",
        description: "Plateforme web d'excellence. Architecture hautement scalable et SEO optimisé.",
        fullDescription: "Développement complet de la plateforme muridpro.com. Mise en place d'une architecture orientée contenu avec une performance exceptionnelle et une interface utilisateur raffinée.",
        technologies: ["React", "Next.js", "NestJS", "PostgreSQL", "Tailwind"],
        features: [
            "Architecture micro-services",
            "Gestion de contenu dynamique",
            "Performance Lighthouse > 95",
            "Intégration multi-services"
        ],
        deployLink: "https://muridpro.com/",
        category: "FullStack",
        date: "2025",
        image: "/muridproweb.png"
    },
    {
        title: "Hackathon MCN",
        subtitle: "Full-Stack Web & Mobile",
        description: "Application interactive pour le Musée des Civilisations Noires. Projet primé.",
        fullDescription: "Projet primé lors du hackathon MCN. Intégration complète : API REST performante, interface administration web sous React et application mobile Flutter fluide avec notifications push.",
        technologies: ["NestJS", "Flutter", "React", "PostgreSQL"],
        features: [
            "Notifications push en temps réel",
            "Dashboard d'administration dynamique",
            "Architecture micro-services simplifiée",
            "CI/CD avec GitHub Actions"
        ],
        backlink: "https://github.com/oumarsy97/mobilemcn.git",
        category: "FullStack",
        date: "2025",
        image: "/img9.png"
    },
    {
        title: "Blockchain Library",
        subtitle: "Decentralized System & AI",
        description: "Bibliothèque numérique décentralisée garantissant l'intégrité via Ethereum.",
        fullDescription: "Solution innovante combinant Smart Contracts (Solidity), stockage IPFS et algorithmes de recommandation Flask. Garantit la propriété intellectuelle et la résilience des données.",
        technologies: ["Solidity", "IPFS", "Flask", "React", "Truffle"],
        features: [
            "Smart Contracts audités",
            "Stockage distribué (IPFS)",
            "Système de recommandation hybride",
            "Interface de lecture immersive"
        ],
        backlink: "https://github.com/oumarsy97/mobilememoire.git",
        category: "FullStack",
        date: "2025",
        image: "/img10.png"
    },
    {
        title: "System Scolaire",
        subtitle: "Backend Architecture",
        description: "Architecture backend robuste pour la gestion d'établissements.",
        fullDescription: "Système complet gérant des milliers d'utilisateurs. Utilisation de Spring Security pour une protection granulaire et Docker pour une scalabilité simplifiée.",
        technologies: ["Java", "Spring Boot", "Docker", "MySQL"],
        features: [
            "RBAC (Role Based Access Control)",
            "Architecture hexagonal-ready",
            "Documentation OpenAPI/Swagger",
            "Monitoring Prometheus/Grafana"
        ],
        backlink: "https://github.com/oumarsy97/GestionEcoleSpring.git",
        category: "Backend",
        date: "2024",
        image: "/swagger.png"
    }
];

const ProjectModal = ({ project, onClose }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-background/90 backdrop-blur-xl"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl bg-background border border-foreground/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh]"
            >
                {/* Image Section */}
                <div className="md:w-1/2 bg-foreground/[0.02] border-r border-foreground/5 p-8 flex items-center justify-center">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-700"
                    />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-10 md:p-14 overflow-y-auto space-y-12">
                    <div className="flex justify-between items-start">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black tracking-tight leading-none text-foreground">{project.title}</h2>
                            <p className="text-primary font-bold text-xs tracking-widest uppercase">{project.subtitle}</p>
                        </div>
                        <button onClick={onClose} className="p-2 border border-foreground/5 rounded-xl text-foreground/40 hover:text-foreground hover:bg-foreground/5">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="space-y-10">
                        <p className="text-foreground/50 text-lg leading-relaxed font-medium">
                            {project.fullDescription}
                        </p>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Fonctionnalités</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.features.map((f: string, i: number) => (
                                        <div key={i} className="text-sm font-bold text-foreground/60 flex items-center gap-3 bg-foreground/[0.02] p-3 rounded-xl border border-foreground/5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Stack Technique</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((t: string, i: number) => (
                                        <span key={i} className="px-5 py-2 bg-foreground/5 rounded-xl text-[11px] font-black tracking-wider uppercase text-foreground/60">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        {project.backlink && (
                            <a href={project.backlink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-foreground text-background rounded-2xl flex items-center gap-2 font-black text-[10px] uppercase tracking-widest hover:opacity-90 transition-all">
                                <Github size={16} /> Code Source
                            </a>
                        )}
                        {project.deployLink && (
                            <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-foreground/10 rounded-2xl flex items-center gap-2 font-black text-[10px] uppercase tracking-widest hover:bg-foreground/5 transition-all text-foreground/60">
                                <WebIcon size={16} /> Site Live
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ProjectCard = ({ project, index, onClick }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={onClick}
            className="group cursor-pointer bg-background rounded-[2rem] border border-foreground/5 p-6 hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col h-full"
        >
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-foreground/[0.02] mb-8 relative">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-4 right-4 p-3 bg-background border border-foreground/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-sm shadow-foreground/5 transform translate-y-2 group-hover:translate-y-0 text-primary">
                    <ArrowUpRight size={18} />
                </div>
            </div>

            <div className="space-y-4 px-2 flex-grow flex flex-col">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{project.subtitle}</span>
                        <span className="text-[10px] font-bold text-foreground/20">{project.date}</span>
                    </div>
                    <h3 className="text-3xl font-black tracking-tight text-foreground transition-colors">{project.title}</h3>
                </div>
                <p className="text-base font-medium text-foreground/40 leading-relaxed line-clamp-2">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                    {project.technologies.slice(0, 3).map((t: string, i: number) => (
                        <span key={i} className="text-[9px] font-black uppercase tracking-widest text-foreground/20 border border-foreground/[0.05] px-3 py-1 rounded-lg">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsShowcase = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Web", "Mobile", "FullStack", "Backend"];
    
    const filteredProjects = filter === "All" 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="projets" className="relative z-10 section-padding border-t border-foreground/5">
            <div className="max-w-7xl mx-auto space-y-32">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.95] text-foreground">
                            Projets <br />
                            <span className="text-primary italic">Sélectionnés_</span>
                        </h2>
                        <p className="text-foreground/40 max-w-xl font-medium text-lg leading-relaxed">
                            Une approche méticuleuse du développement, alliant performance 
                            et excellence technique.
                        </p>
                    </motion.div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap items-center gap-2 p-1.5 bg-foreground/5 rounded-[1.5rem] w-fit border border-foreground/5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`
                                    px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all
                                    ${filter === cat 
                                        ? "bg-foreground text-background shadow-md" 
                                        : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"}
                                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsShowcase;
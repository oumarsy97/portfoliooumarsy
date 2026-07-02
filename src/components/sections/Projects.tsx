/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    Github,
    Globe as WebIcon,
    ArrowUpRight
} from 'lucide-react';

const projects = [
    {
        title: "TokTok SaaS",
        subtitle: "Solution de Gestion pour la Restauration",
        description: "Plateforme SaaS complète avec prises de commandes temps réel, écrans cuisine KDS et scanners de tickets QR Code.",
        fullDescription: "Conception et développement d'une plateforme SaaS destinée aux professionnels de la restauration. L'application digitalise l'ensemble du processus de gestion avec des interfaces optimisées pour chaque métier (Admin, Caissier, Cuisinier, Serveur). J'ai mis en place la prise de commande synchronisée en temps réel, le système d'affichage pour la cuisine (KDS), la gestion des tickets par scan QR Code, ainsi que les tableaux de bord analytiques.",
        technologies: ["React", "TypeScript", "Tailwind", "NestJS", "PostgreSQL", "Socket.io"],
        features: [
            "Synchronisation en temps réel (WebSockets)",
            "Écran Cuisine KDS dynamique",
            "Scanner de tickets QR Code intégré",
            "Tableaux de bord analytiques"
        ],
        deployLink: "https://toktoksn.com/business",
        category: "FullStack",
        date: "Mai — Juin 2026",
        image: "/toktok.png"
    },
    {
        title: "Global Travail",
        subtitle: "Plateforme de Recrutement & HR Tech",
        description: "Application de mise en relation candidats/employeurs. Gestion des candidatures et traitement de CV en ligne.",
        fullDescription: "Développement d'une plateforme complète de recrutement et de gestion des ressources humaines. Facilitation de la mise en relation avec une gestion fine des offres, des candidatures et du traitement automatisé de CV (lecture et parsing PDF). Intégration d'un système de paiement sécurisé, gestion cloud des fichiers, et authentification multicanale (Google OAuth, Firebase).",
        technologies: ["React TS", "NestJS", "PostgreSQL", "Tailwind", "Stripe", "Supabase"],
        features: [
            "Parsing automatisé de CV (PDF/Word)",
            "Chat Slack avec web socket et notifications",
            "Entretien vocal et vidéo avec l'IA",
            "Authentification multicanale OAuth",
            "Architecture découplée performante"
        ],
        deployLink: "https://globaltravail.com/",
        category: "FullStack",
        date: "Mars — Avril 2026",
        image: "/v2travailglobal.png"
    },
    {
        title: "MuridPro Mobile",
        subtitle: "Cross-Platform Ecosystem",
        description: "Application mobile de référence (Coran, Khassida, Adhan). Déployée sur App Store et Play Store.",
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
        date: "Jan — Mars 2026",
        image: "/mobilemuridpro.png"
    },
    {
        title: "MuridPro Platform",
        subtitle: "Ecosystem & Architecture",
        description: "Plateforme web d'excellence pour la culture mouride. Architecture hautement scalable et SEO optimisé.",
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
        date: "Oct — Déc 2025",
        image: "/muridproweb.png"
    },
    {
        title: "Hackathon MCN",
        subtitle: "Full-Stack Web & Mobile",
        description: "Application interactive pour le Musée des Civilisations Noires. Connecte les participants aux événements en temps réel via une architecture NestJS/Flutter.",
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
        date: "Oct 2025",
        image: "/img9.png"
    },
    {
        title: "Blockchain Library",
        subtitle: "Decentralized System & AI",
        description: "Bibliothèque numérique décentralisée garantissant l'intégrité des données via Ethereum et proposant des recommandations par IA.",
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
        title: "Modern Portfolio",
        subtitle: "Design & Performance",
        description: "Portfolio haute performance with une approche minimalist. Focus sur l'expérience utilisateur et les micro-animations de précision.",
        fullDescription: "Développement orienté performance utilisant les dernières avancées de Framer Motion. Architecture composant modulaire et optimisation Lighthouse à 100%.",
        technologies: ["React", "TypeScript", "Framer Motion", "Tailwind"],
        features: [
            "Performance Web Vitals optimisée",
            "Design system customisé",
            "Animations à 60fps",
            "Accessibilité (WCAG)"
        ],
        backlink: "https://github.com/oumarsy97/portfoliooumarsy.git",
        deployLink: "https://oumarsydev.vercel.app/",
        category: "Web",
        date: "Déc 2024",
        image: "/img11.png"
    },
    {
        title: "Money Flow Mobile",
        subtitle: "Fintech Refactoring",
        description: "Refonte d'une application de transfert d'argent. Optimisation des flux transactionnels et de la sécurité des données.",
        fullDescription: "Amélioration significative de l'UX transactionnelle. Intégration de biométrie et optimisation des temps de réponse API de 40%.",
        technologies: ["Flutter", "Firebase", "State Management"],
        features: [
            "Authentification biométrique",
            "Gestion d'état réactive",
            "Offline data persistence",
            "Analytics temps réel"
        ],
        backlink: "https://github.com/oumarsy97/monprojetflutter.git",
        category: "Mobile",
        date: "Nov 2024",
        image: "/img_1.png"
    },
    {
        title: "System Scolaire",
        subtitle: "Backend Architecture",
        description: "Architecture backend robuste pour la gestion d'établissements. Sécurité multi-niveaux et scalabilité horizontale.",
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
        date: "Sept 2024",
        image: "/swagger.png"
    }
];

const ProjectModal = ({ project, onClose }: any) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const isMobile = project.category === "Mobile";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 bg-background/95 backdrop-blur-3xl"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-6xl bg-background border border-foreground/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row h-full max-h-[85vh]"
            >
                {/* Image Section */}
                <div className={`relative ${isMobile ? 'md:w-[40%] bg-foreground/5' : 'md:w-1/2 bg-foreground/5'} overflow-hidden shrink-0 flex items-center justify-center`}>
                    <div className={`relative ${isMobile ? 'h-[90%] aspect-[9/19] rounded-[2.5rem] border-[8px] border-foreground/90 overflow-hidden shadow-2xl' : 'w-full h-full'}`}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale-0 transition-all duration-700"
                        />
                        {isMobile && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-foreground/90 rounded-b-2xl" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow p-8 md:p-12 overflow-y-auto space-y-10">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">{project.title}</h2>
                            <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase">{project.subtitle}</p>
                        </div>
                        <button onClick={onClose} className="p-3 hover:bg-foreground/5 rounded-full transition-all hover:scale-110 active:scale-90">
                            <X size={28} />
                        </button>
                    </div>

                    <div className="space-y-8">
                        <p className="text-foreground/70 text-lg leading-relaxed font-medium">
                            {project.fullDescription}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30">Fonctionnalités Clés</h4>
                                <ul className="space-y-3">
                                    {project.features.map((f: string, i: number) => (
                                        <li key={i} className="text-sm font-bold text-foreground/80 flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30">Stack Technique</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((t: string, i: number) => (
                                        <span key={i} className="px-4 py-1.5 bg-foreground/5 border border-foreground/5 rounded-xl text-[11px] font-black tracking-wider uppercase">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-8">
                        {project.backlink && (
                            <a href={project.backlink} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[160px] h-14 bg-foreground text-background rounded-2xl flex items-center justify-center gap-2 font-black text-sm hover:translate-y-[-2px] hover:shadow-lg transition-all active:translate-y-0">
                                <Github size={20} /> Code Source
                            </a>
                        )}
                        {project.deployLink && (
                            <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[160px] h-14 border-2 border-foreground/10 rounded-2xl flex items-center justify-center gap-2 font-black text-sm hover:bg-foreground/5 hover:translate-y-[-2px] transition-all active:translate-y-0">
                                <WebIcon size={20} /> Site Live
                            </a>
                        )}
                        {project.appStoreLink && (
                            <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[160px] h-14 bg-[#007AFF] text-white rounded-2xl flex items-center justify-center gap-2 font-black text-sm hover:translate-y-[-2px] hover:shadow-lg transition-all active:translate-y-0">
                                App Store
                            </a>
                        )}
                        {project.playStoreLink && (
                            <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[160px] h-14 bg-[#3DDC84] text-[#073042] rounded-2xl flex items-center justify-center gap-2 font-black text-sm hover:translate-y-[-2px] hover:shadow-lg transition-all active:translate-y-0">
                                Google Play
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
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            onClick={onClick}
            className="group cursor-pointer h-full flex flex-col"
        >
            <div className="relative rounded-2xl bg-foreground/5 border border-foreground/10 shrink-0 transition-all duration-500 aspect-video w-full overflow-hidden group-hover:border-foreground/20">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="pt-6 flex flex-col gap-3 flex-grow">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-1 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-foreground/50 text-sm font-medium">
                            {project.subtitle}
                        </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors shrink-0">
                        <ArrowUpRight size={18} />
                    </div>
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
        <section className="relative z-10 py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.8] mb-4">
                            SELECTED <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/40">WORKS</span>
                        </h2>
                        <p className="text-foreground/40 max-w-xl font-medium text-xl leading-relaxed">
                            Une immersion dans mes réalisations techniques les plus significatives, où l'ingénierie rencontre le design.
                        </p>
                    </motion.div>

                    {/* Filter Bar */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap items-center gap-2 p-2 bg-foreground/5 rounded-[2rem] w-fit shrink-0 border border-foreground/5"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`
                                    px-8 py-3 rounded-[1.2rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all
                                    ${filter === cat 
                                        ? "bg-foreground text-background shadow-2xl scale-105" 
                                        : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"}
                                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-24 items-start"
                >
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
                </motion.div>
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
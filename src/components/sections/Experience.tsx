import { motion } from 'framer-motion';
import {
    Building2,
    Calendar,
    MapPin
} from 'lucide-react';

const experiences = [
    {
        title: "Mobile Developer",
        company: "Xaamga",
        location: "Dakar, Sénégal / Remote",
        period: "Jan 2026 — Present",
        description: [
            "Développement d'une application innovante de gestion d'événements et billetterie NFC.",
            "Implémentation de systèmes de ticket en ligne, vouchers et paiements sécurisés.",
            "Optimisation de l'expérience utilisateur mobile et gestion des flux en temps réel."
        ]
    },
    {
        title: "Software Engineer",
        company: "MuridPro",
        location: "Dakar, Sénégal",
        period: "2025",
        description: [
            "Conception d'architectures scalables pour des plateformes de contenu massif.",
            "Optimisation des performances NestJS et Flutter pour une audience globale.",
            "Garantie de la qualité du code via des revues systématiques et tests automatisés."
        ]
    },
    {
        title: "Full-Stack Developer",
        company: "Freelance",
        location: "Remote",
        period: "2025",
        description: [
            "Accompagnement de startups dans le développement de MVP robustes.",
            "Mise en place de pipelines CI/CD et environnements cloud (AWS/Vercel).",
            "Expertise en React, Node.js et bases de données relationnelles."
        ]
    },
    {
        title: "Full-Stack Intern",
        company: "Groupe Sonatel",
        location: "Dakar, Sénégal",
        period: "Jan — Aug 2025",
        description: [
            "Migration de micro-services vers des architectures conteneurisées (K8s).",
            "Développement de modules critiques sous JHipster et Spring Boot.",
            "Gestion de larges volumes de données sous Oracle DB."
        ]
    },
    {
        title: "Development Fellow",
        company: "Sonatel Academy",
        location: "Dakar, Sénégal",
        period: "Feb — Dec 2024",
        description: [
            "Formation intensive aux standards industriels du développement moderne.",
            "Lead technique sur plusieurs projets de groupe (Scrum/Agile).",
            "Maîtrise de l'écosystème Docker et des déploiements cloud."
        ]
    }
];

interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
}

const ExperienceItem = ({ exp, index }: { exp: Experience, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="relative pl-12 pb-20 last:pb-0 group"
    >
        {/* Timeline Line */}
        <div className="absolute left-[6.5px] top-2 bottom-0 w-[1px] bg-foreground/[0.05] group-last:hidden" />
        
        {/* Timeline Circle */}
        <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background group-hover:scale-125 transition-transform duration-500 z-10" />

        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-primary">
                        <Calendar size={12} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{exp.period}</span>
                    </div>
                    <h3 className="text-3xl font-black tracking-tight text-foreground transition-colors">
                        {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-foreground/40 font-bold text-sm">
                        <Building2 size={14} />
                        {exp.company}
                        <span className="text-foreground/10 px-2">•</span>
                        <MapPin size={14} className="inline mr-1" />
                        {exp.location}
                    </div>
                </div>
            </div>

            <ul className="space-y-4 max-w-4xl">
                {exp.description.map((item: string, idx: number) => (
                    <li key={idx} className="text-base font-medium text-foreground/40 leading-relaxed flex items-start gap-4">
                        <div className="w-1.5 h-px bg-foreground/20 mt-3 shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

const ExperienceSection = () => {
    return (
        <section id="expérience" className="relative z-10 section-padding overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-32">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:sticky lg:top-40 h-fit"
                    >
                        <h2 className="text-5xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.95] text-foreground">
                            Parcours <br />
                            <span className="text-primary italic">Professionnel_</span>
                        </h2>
                        <p className="text-foreground/40 max-w-sm font-medium text-lg leading-relaxed">
                            Une trajectoire focalisée sur la construction de systèmes robustes 
                            et l'excellence technique.
                        </p>
                    </motion.div>

                    <div className="flex flex-col">
                        {experiences.map((exp, index) => (
                            <ExperienceItem key={index} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
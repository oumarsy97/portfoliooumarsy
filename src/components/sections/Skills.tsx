import { motion } from 'framer-motion';
import { 
    Database, 
    Globe, 
    Terminal, 
    Cpu, 
    Binary,
} from 'lucide-react';

const skills = [
    {
        category: "Architecture & Logic",
        icon: Cpu,
        items: ["NestJS", "Spring Boot", "System Design", "Microservices"],
    },
    {
        category: "Frontend Excellence",
        icon: Globe,
        items: ["React / Next.js", "Flutter", "TypeScript", "Tailwind CSS"],
    },
    {
        category: "Data & Scaling",
        icon: Database,
        items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    {
        category: "DevOps & Cloud",
        icon: Terminal,
        items: ["Docker", "Kubernetes", "AWS", "CI/CD Actions"],
    },
    {
        category: "Emerging Tech",
        icon: Binary,
        items: ["Solidity", "IPFS", "Python AI", "NFC Integration"],
    }
];

const SkillGroup = ({ skill, index }: any) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="group p-10 rounded-[2.5rem] bg-foreground/[0.02] border border-foreground/5 hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col h-full"
    >
        <div className="flex flex-col h-full gap-8">
            <div className={`w-14 h-14 rounded-2xl bg-background border border-foreground/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 shadow-sm shadow-foreground/5`}>
                <skill.icon size={28} strokeWidth={1.5} />
            </div>
            
            <div className="space-y-6">
                <h3 className="text-2xl font-black text-foreground tracking-tight">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                    {skill.items.map((item: string, idx: number) => (
                        <span 
                            key={idx}
                            className="px-5 py-2.5 rounded-xl bg-background border border-foreground/5 text-[11px] font-bold uppercase tracking-widest text-foreground/40 group-hover:text-foreground transition-all duration-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const SkillsSection = () => {
    return (
        <section id="compétences" className="relative z-10 section-padding border-t border-foreground/5">
            <div className="max-w-7xl mx-auto space-y-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Header Item */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 flex flex-col justify-center space-y-8 pr-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-5xl lg:text-[100px] lg:text-7xl font-black tracking-[-0.04em] leading-[0.95] text-foreground">
                                ADN <br />
                                <span className="text-primary italic">Technique_</span>
                            </h2>
                            <p className="text-foreground/40 max-w-sm font-medium text-lg leading-relaxed">
                                Un arsenal technologique forgé par la rigueur et l'innovation constante, 
                                focalisé sur la performance.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-px bg-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Full-Stack Mastery</span>
                        </div>
                    </motion.div>

                    {skills.map((skill, index) => (
                        <SkillGroup key={index} skill={skill} index={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
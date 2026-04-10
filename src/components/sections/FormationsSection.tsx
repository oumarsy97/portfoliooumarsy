/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    GraduationCap, 
    Award, 
    Mail,
    ArrowRight,
    CheckCircle,
    MapPin
} from 'lucide-react';

// Section Formations
export const FormationsSection = () => {
    const formations = [
        {
            type: "certification",
            icon: Award,
            title: "Web & Mobile Certification",
            institution: "Orange Digital Center",
            period: "2024",
            description: "Spécialisation avancée en développement cross-platform et architectures micro-services."
        },
        {
            type: "degree",
            icon: GraduationCap,
            title: "Master Information Systems",
            institution: "Université Alioune Diop",
            period: "2021 - 2023",
            description: "Focus sur l'architecture logicielle complexe et la gouvernance des SI."
        },
        {
            type: "degree",
            icon: GraduationCap,
            title: "Bachelor Web Development",
            institution: "Université Alioune Diop",
            period: "2018 - 2021",
            description: "Fondamentaux de l'ingénierie logicielle et conception de systèmes distribués."
        }
    ];

    return (
        <section id="formations" className="relative z-10 section-padding border-t border-foreground/5">
            <div className="max-w-7xl mx-auto space-y-32">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-5xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.95] text-foreground">
                            Parcours <br />
                            <span className="text-primary italic">Académique_</span>
                        </h2>
                        <p className="text-foreground/40 max-w-xl font-medium text-lg leading-relaxed">
                            Bases théoriques solides et certifications industrielles pour garantir 
                            une expertise de haut niveau.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {formations.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-8 p-10 bg-foreground/[0.02] border border-foreground/5 rounded-[2.5rem] hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-background border border-foreground/5 flex items-center justify-center text-primary shadow-sm shadow-foreground/5">
                                <f.icon size={28} strokeWidth={1.5} />
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">{f.period}</span>
                                <h3 className="text-2xl font-black tracking-tight text-foreground">{f.title}</h3>
                                <p className="text-sm font-bold text-foreground/40">{f.institution}</p>
                                <p className="text-base font-medium text-foreground/40 leading-relaxed pt-2">
                                    {f.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Section Contact
export const DisponibiliteSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSend = async (e: any) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const emailjs = (await import('@emailjs/browser')).default;
            await emailjs.send('service_estnux7', 'template_0pse3s9', {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'syoumar505@gmail.com'
            }, 'EoGB8tD49uMfzyIBM');
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="relative z-10 section-padding border-t border-foreground/5 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />
            
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    <div className="space-y-16">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="space-y-8"
                        >
                            <h2 className="text-5xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.95] text-foreground">
                                Ouvrons la <br />
                                <span className="text-primary italic">Discussion_</span>
                            </h2>
                            <p className="text-foreground/40 max-w-lg font-medium text-xl leading-relaxed">
                                Motivé par les défis techniques complexes et les produits innovants.
                                Réponse garantie sous 24h.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 group cursor-pointer"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-foreground/[0.03] border border-foreground/5 flex items-center justify-center text-foreground/30 group-hover:text-primary transition-all">
                                    <Mail size={24} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Email</p>
                                    <p className="text-xl font-bold text-foreground">syoumar505@gmail.com</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-center gap-6 group cursor-pointer"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-foreground/[0.03] border border-foreground/5 flex items-center justify-center text-foreground/30 group-hover:text-primary transition-all">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Base</p>
                                    <p className="text-xl font-bold text-foreground">Dakar, Sénégal / Remote</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-500/[0.03] border border-green-500/10 rounded-2xl">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-black uppercase tracking-widest text-green-500/60">Available for Senior Roles</span>
                        </div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="p-12 md:p-16 bg-background border border-foreground/5 rounded-[3rem] relative overflow-hidden shadow-2xl shadow-foreground/[0.01]"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center py-20 text-center space-y-8"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <CheckCircle size={32} />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-black tracking-tight text-foreground">TRANSMISSION RÉUSSIE_</h3>
                                        <p className="text-sm font-medium text-foreground/40 max-w-[280px]">
                                            Merci pour votre message. Je vous recontacterai rapidement.
                                        </p>
                                    </div>
                                    <button 
                                        onClick={() => setStatus('idle')}
                                        className="text-[10px] font-black uppercase tracking-widest text-primary border-b border-primary/20 hover:border-primary transition-all pb-1"
                                    >
                                        Nouveau message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form 
                                    key="form"
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    onSubmit={handleSend} 
                                    className="space-y-10"
                                >
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Votre Nom</label>
                                        <input 
                                            type="text" required placeholder="Ex: Jean Dupont"
                                            value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                                            className="w-full bg-transparent border-b border-foreground/10 py-4 font-bold text-lg focus:border-primary outline-none transition-all placeholder:text-foreground/5"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Votre Email</label>
                                        <input 
                                            type="email" required placeholder="jean@mail.com"
                                            value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                                            className="w-full bg-transparent border-b border-foreground/10 py-4 font-bold text-lg focus:border-primary outline-none transition-all placeholder:text-foreground/5"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Votre Projet</label>
                                        <textarea 
                                            rows={3} required placeholder="Décrivez brièvement votre besoin..."
                                            value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                                            className="w-full bg-transparent border-b border-foreground/10 py-4 font-bold text-lg focus:border-primary outline-none transition-all resize-none placeholder:text-foreground/5"
                                        />
                                    </div>
                                    <div className="pt-6">
                                        <button 
                                            type="submit" disabled={status === 'loading'}
                                            className="w-full h-16 bg-foreground text-background rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all disabled:opacity-50"
                                        >
                                            {status === 'loading' ? 'Envoi...' : 'Envoyer le Message'}
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
            
            <footer className="mt-40 py-12 border-t border-foreground/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-foreground/20 text-[10px] font-bold uppercase tracking-[0.4em]">
                    <p>© 2026 Oumar Sy — Software Engineer</p>
                    <p>Built with Care & Precision</p>
                </div>
            </footer>
        </section>
    );
};

export default function PortfolioSections() {
    return (
        <div className="relative">
            <FormationsSection />
            <DisponibiliteSection />
        </div>
    );
}
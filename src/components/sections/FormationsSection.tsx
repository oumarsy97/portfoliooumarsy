import React, { useState } from 'react';
import { Card } from '@/components/components/ui/card';
import { 
    GraduationCap, 
    Award, 
    Calendar,
    Code,
    Smartphone,
    Server,
    Globe,
    Shield,
    Zap,
    CheckCircle,
    Mail,
    Phone,
    Clock,
    MapPin,
    Send,
    AlertCircle
} from 'lucide-react';

// Section Formations & Certifications
export const FormationsSection = () => {
    const formations = [
        {
            type: "certification",
            icon: Award,
            title: "Certification en Développement Web & Mobile",
            institution: "Orange Digital Center",
            location: "Dakar, Sénégal",
            period: "2024",
            description: "Formation certifiante complète en développement web et mobile avec acquisition des bases en programmation, développement d'applications et maîtrise des outils modernes.",
            skills: ["React", "Angular", "NestJS", "Flutter", "Node.js", "Bases de données"],
            color: "from-orange-500 to-purple-600"
        },
        {
            type: "degree",
            icon: GraduationCap,
            title: "Master en Système d'Information",
            institution: "Université Alioune Diop",
            location: "Bambey, Sénégal",
            period: "2021 - 2023",
            description: "Spécialisation en développement logiciel avec des projets de développement web avancés et une expertise en architecture des systèmes d'information.",
            skills: ["Architecture logicielle", "Gestion de projet", "Développement avancé", "Systèmes distribués"],
            color: "from-cyan-500 to-purple-600"
        },
        {
            type: "degree",
            icon: GraduationCap,
            title: "Licence en Développement d'Application Web",
            institution: "Université Alioune Diop",
            location: "Bambey, Sénégal",
            period: "2018 - 2021",
            description: "Formation solide en programmation orientée objet, algorithmique et bases de données avancées.",
            skills: ["POO", "Algorithmique", "Bases de données", "Développement web"],
            color: "from-orange-500 to-cyan-500"
        }
    ];

    return (
        <section className="py-16 space-y-12 bg-orange-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent mb-12 text-center">
                    Formations & Certifications
                </h2>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {formations.map((formation, index) => (
                        <div key={index} className="opacity-0 animate-fade-in" style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}>
                            <Card className="border border-orange-200 dark:border-cyan-800 bg-white dark:bg-slate-800 p-6 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-orange-200 dark:hover:shadow-cyan-900">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className={`p-4 rounded-xl bg-gradient-to-br ${formation.color} text-white h-fit`}>
                                        <formation.icon size={32} />
                                    </div>
                                    
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                                                    {formation.title}
                                                </h3>
                                                <p className="text-orange-500 dark:text-cyan-400 font-semibold">
                                                    {formation.institution}
                                                </p>
                                            </div>
                                            <div className="text-sm text-slate-700 dark:text-slate-400 mt-2 md:mt-0">
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={16} />
                                                    {formation.period}
                                                </div>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <MapPin size={16} />
                                                    {formation.location}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                                            {formation.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {formation.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950 dark:to-purple-950 text-slate-900 dark:text-slate-100 rounded-full text-sm border border-orange-200 dark:border-cyan-800"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Section Services
export const ServicesSection = () => {
    const services = [
        {
            icon: Globe,
            title: "Développement Web",
            description: "Applications web modernes, responsives et performantes avec React, Angular, Next.js",
            features: ["Sites vitrine", "Applications web complexes", "E-commerce", "Progressive Web Apps"],
            price: "À partir de 500 000 FCFA"
        },
        {
            icon: Smartphone,
            title: "Développement Mobile",
            description: "Applications mobiles cross-platform iOS et Android avec Flutter et React Native",
            features: ["Apps natives", "Apps hybrides", "UI/UX moderne", "Intégrations API"],
            price: "À partir de 750 000 FCFA"
        },
        {
            icon: Server,
            title: "Développement Backend",
            description: "APIs REST et GraphQL robustes avec NestJS, Spring Boot, et architectures microservices",
            features: ["API REST/GraphQL", "Microservices", "Authentification", "Base de données"],
            price: "À partir de 400 000 FCFA"
        },
        {
            icon: Code,
            title: "Développement Full-Stack",
            description: "Solutions complètes de A à Z incluant frontend, backend et déploiement",
            features: ["Solution complète", "Architecture scalable", "CI/CD", "Maintenance"],
            price: "Sur devis"
        },
        {
            icon: Shield,
            title: "Blockchain & Sécurité",
            description: "Intégration blockchain, smart contracts et sécurisation d'applications",
            features: ["Smart contracts", "Intégration Web3", "Audit de sécurité", "IPFS"],
            price: "Sur devis"
        },
        {
            icon: Zap,
            title: "Optimisation & Maintenance",
            description: "Amélioration des performances, refactoring et maintenance d'applications existantes",
            features: ["Audit de code", "Optimisation", "Correction de bugs", "Mises à jour"],
            price: "À partir de 200 000 FCFA"
        }
    ];

    return (
        <section className="py-16 space-y-12 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
                    Mes Services
                </h2>
                <p className="text-center text-slate-700 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                    Je propose des solutions sur mesure pour vos projets de développement web et mobile
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="opacity-0 animate-fade-in hover:scale-105 transition-transform duration-300"
                            style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}
                        >
                            <Card className="border border-orange-200 dark:border-cyan-800 bg-white dark:bg-slate-800 p-6 h-full hover:shadow-xl hover:shadow-orange-200 dark:hover:shadow-cyan-900 transition-all duration-300">
                                <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 text-white w-fit mb-4">
                                    <service.icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-slate-700 dark:text-slate-400 mb-4 text-sm">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                            <CheckCircle size={16} className="text-orange-500 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 border-t border-orange-200 dark:border-cyan-800">
                                    <p className="text-orange-500 dark:text-cyan-400 font-bold">
                                        {service.price}
                                    </p>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-700 dark:text-slate-400 mb-6">
                        Vous avez un projet en tête ? Discutons-en !
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                    >
                        Demander un devis
                    </a>
                </div>
            </div>
        </section>
    );
};

// Section Disponibilité
export const DisponibiliteSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Initialiser EmailJS (à faire une seule fois au chargement de l'app normalement)
            const emailjs = (await import('@emailjs/browser')).default;
            
            // Remplacez ces valeurs par vos vraies clés EmailJS
            const SERVICE_ID = 'service_estnux7';
            const TEMPLATE_ID = 'template_0pse3s9';
            const PUBLIC_KEY = 'EoGB8tD49uMfzyIBM';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                project_type: formData.projectType,
                message: formData.message,
                to_email: 'syoumar505@gmail.com'
            };

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', projectType: '', message: '' });
            
            // Masquer le message de succès après 5 secondes
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
            
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            setSubmitStatus('error');
            
            // Masquer le message d'erreur après 5 secondes
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const availability = [
        {
            icon: Clock,
            title: "Horaires",
            content: "Lun - Ven : 9h - 18h",
            subContent: "Sam : 9h - 14h"
        },
        {
            icon: Calendar,
            title: "Disponibilité",
            content: "Immédiatement",
            subContent: "Pour projets freelance"
        },
        {
            icon: Zap,
            title: "Délai de réponse",
            content: "< 24 heures",
            subContent: "En moyenne"
        }
    ];

    return (
        <section id="contact" className="py-16 space-y-12 bg-orange-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent mb-12 text-center">
                    Disponibilité & Contact
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {availability.map((item, index) => (
                        <div key={index} className="opacity-0 animate-fade-in" style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}>
                            <Card className="border border-orange-200 dark:border-cyan-800 bg-white dark:bg-slate-800 p-6 text-center hover:shadow-lg hover:shadow-orange-200 dark:hover:shadow-cyan-900 transition-all duration-300">
                                <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white w-fit mx-auto mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-orange-500 dark:text-cyan-400 font-semibold">
                                    {item.content}
                                </p>
                                <p className="text-sm text-slate-700 dark:text-slate-400 mt-1">
                                    {item.subContent}
                                </p>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="opacity-0 animate-fade-in" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                    <Card className="border border-orange-200 dark:border-cyan-800 bg-white dark:bg-slate-800 p-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">
                            Demande de devis
                        </h3>

                        {/* Message de succès */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg flex items-start gap-3">
                                <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <p className="text-green-800 dark:text-green-200 font-semibold">Message envoyé avec succès !</p>
                                    <p className="text-green-700 dark:text-green-300 text-sm mt-1">Je vous répondrai dans les plus brefs délais.</p>
                                </div>
                            </div>
                        )}

                        {/* Message d'erreur */}
                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg flex items-start gap-3">
                                <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <p className="text-red-800 dark:text-red-200 font-semibold">Erreur lors de l'envoi</p>
                                    <p className="text-red-700 dark:text-red-300 text-sm mt-1">Veuillez réessayer ou me contacter directement par email.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-2 rounded-lg border border-orange-200 dark:border-cyan-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-2 rounded-lg border border-orange-200 dark:border-cyan-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="votre.email@exemple.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                                    Type de projet *
                                </label>
                                <select
                                    required
                                    value={formData.projectType}
                                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-2 rounded-lg border border-orange-200 dark:border-cyan-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <option value="">Sélectionnez un type</option>
                                    <option value="web">Développement Web</option>
                                    <option value="mobile">Développement Mobile</option>
                                    <option value="backend">Développement Backend</option>
                                    <option value="fullstack">Full-Stack</option>
                                    <option value="blockchain">Blockchain</option>
                                    <option value="maintenance">Maintenance/Optimisation</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                                    Décrivez votre projet *
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-2 rounded-lg border border-orange-200 dark:border-cyan-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Décrivez votre projet en détail..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Envoyer la demande
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-orange-200 dark:border-cyan-800">
                            <p className="text-center text-slate-700 dark:text-slate-400 mb-4">
                                Ou contactez-moi directement :
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="mailto:syoumar505@gmail.com"
                                    className="flex items-center justify-center gap-2 px-6 py-2 bg-white dark:bg-slate-900 text-orange-500 dark:text-cyan-400 border border-orange-500 dark:border-cyan-400 rounded-full hover:bg-orange-50 dark:hover:bg-cyan-950 transition-colors"
                                >
                                    <Mail size={18} />
                                    syoumar505@gmail.com
                                </a>
                                <a
                                    href="tel:+221781807229"
                                    className="flex items-center justify-center gap-2 px-6 py-2 bg-white dark:bg-slate-900 text-orange-500 dark:text-cyan-400 border border-orange-500 dark:border-cyan-400 rounded-full hover:bg-orange-50 dark:hover:bg-cyan-950 transition-colors"
                                >
                                    <Phone size={18} />
                                    +221 78 180 72 29
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            
            <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }
            `}</style>
        </section>
    );
};

// Composant principal pour la démo
export default function PortfolioSections() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            <FormationsSection />
            <ServicesSection />
            <DisponibiliteSection />
        </div>
    );
}
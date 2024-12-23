import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    ExternalLink,
    Server,
    Globe
} from 'lucide-react';

const projects = [
    {
        title: "Wave Senegal Redesign",
        description: "Complete redesign of the Wave Senegal mobile application using Flutter and Firebase. Improvement of user experience and addition of innovative features.",
        technologies: ["Flutter", "Firebase", "Mobile Development"],
        githubLink: "https://github.com/oumarsy97/monprojetflutter.git",
        category: "Mobile",
        icon: <ExternalLink className="w-10 h-10 text-[#6CA2BC] dark:text-[#8EC5FC]" />,
        date: "November 2024",
        image: "img_1.png",
        backlink: "https://github.com/oumarsy97/monprojetflutter.git",
    },
    {
        title: "Wave Scheduled Transfer System",
        description: "Development of an automatic periodic transfer feature on the Wave Senegal platform. Implementation of a system allowing transfer scheduling.",
        technologies: ["NestJS", "Angular", "Backend Development"],
        githubLink: "https://github.com/oumarsy97/angularProject.git",
        backlink: "https://github.com/oumarsy97/waveproject.git",
        deployLink: "https://angular-project-qoah-6lhisxag9-oumar-sys-projects.vercel.app/login",
        category: "Web",
        icon: <Server className="w-10 h-10 text-[#6CA2BC] dark:text-[#8EC5FC]" />,
        date: "October 2024",
        image: "img_3.png"
    },
    {
        title: "Tailor Management System",
        description: "Tailor management application developed with React JS. Development team management and deployment on Vercel for optimal accessibility.",
        technologies: ["React JS", "Frontend", "Project Management"],
        githubLink: "https://github.com/oumarsy97/reactProjectGroupe5.git",
        deployLink: "https://monapp-he8l09ymc-oumar-sys-projects.vercel.app/login",
        category: "Web",
        icon: <Code className="w-10 h-10 text-[#6CA2BC] dark:text-[#8EC5FC]" />,
        date: "October 2024",
        image: "/img.png"
    },
    {
        title: "School Management System",
        description: "School management system built with Java Spring Boot and Spring Security. Includes authentication, role-based access control, and adherence to SOLID principles to ensure maintainability and scalability.",
        technologies: ["Java", "Spring Boot", "Backend", "Docker"],
        backlink: "https://github.com/oumarsy97/GestionEcoleSpring.git",
        category: "Backend",
        icon: <Server className="w-10 h-10 text-[#6CA2BC] dark:text-[#8EC5FC]" />,
        date: "September 2024",
        image: "/swagger.png"
    },
    {
        title: "Tailors Network",
        description: "Robust backend architecture for the tailors network. Development with Node.js, Prisma, and Neon Postgres. Efficient development team management.",
        technologies: ["Node.js", "Prisma", "TypeScript", "Backend"],
        backlink: "https://github.com/oumarsy97/projectPrisma.git",
        deployLink: "https://app.swaggerhub.com/apis-docs/OumarSy/groupe5apiprisma/1.0.0",
        category: "Backend",
        icon: <Globe className="w-10 h-10 text-[#6CA2BC] dark:text-[#8EC5FC]" />,
        date: "June 2024",
        image: "/img_5.png"
    }
];

const ProjectsShowcase = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "Web", "Mobile", "Backend"];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="container mx-auto max-w-6xl px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-[#2C5364] dark:text-[#8EC5FC] mb-4">
                    My Projects
                </h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-24 h-1 bg-[#6CA2BC] dark:bg-[#8EC5FC] mx-auto rounded-full"
                />
            </motion.div>

            <div className="flex justify-center mb-12 space-x-4">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-2 rounded-full transition-all ${
                            activeCategory === category
                                ? 'bg-[#6CA2BC] dark:bg-[#8EC5FC] text-white'
                                : 'bg-[#E6E9F0]/50 dark:bg-[#2C5364]/30 text-[#2C5364] dark:text-[#8EC5FC]/80 hover:bg-[#6CA2BC]/20 dark:hover:bg-[#8EC5FC]/20'
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
                        className="bg-[#E6E9F0]/50 dark:bg-[#2C5364]/30 backdrop-blur-sm
                                 border border-[#6CA2BC]/20 dark:border-[#8EC5FC]/20
                                 rounded-2xl shadow-lg overflow-hidden
                                 hover:shadow-xl transition-all"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                {project.icon}
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-[#2C5364] dark:text-[#8EC5FC]">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[#2C5364]/60 dark:text-[#8EC5FC]/60">
                                        {project.date}
                                    </p>
                                </div>
                            </div>

                            <p className="text-[#2C5364]/80 dark:text-[#8EC5FC]/80 mb-4 h-24 overflow-hidden">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-[#6CA2BC]/10 dark:bg-[#8EC5FC]/10
                                                 text-[#2C5364] dark:text-[#8EC5FC] rounded-full text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex space-x-4">
                                {project.backlink && (
                                    <a
                                        href={project.backlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#2C5364]/60 dark:text-[#8EC5FC]/60
                                                 hover:text-[#6CA2BC] dark:hover:text-[#8EC5FC]"
                                    >
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                )}
                                {project.deployLink && (
                                    <a
                                        href={project.deployLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#2C5364]/60 dark:text-[#8EC5FC]/60
                                                 hover:text-[#6CA2BC] dark:hover:text-[#8EC5FC]"
                                    >
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsShowcase;
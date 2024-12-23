import React, { useEffect, useState } from 'react';
import { Card } from '@/components/components/ui/card';
import {
    Code,
    Database,
    Server,
    Smartphone,
    GitBranch,
    Layers
} from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon, index, logoUrls, show }) => {
    // Déterminer la direction de l'animation en fonction de l'index
    const isFromLeft = index % 2 === 0;
    const initialTransform = isFromLeft ? -100 : 100;

    return (
        <div className={`w-full transform transition-all duration-1000 
                        ${show ? 'translate-x-0 opacity-100' : `translate-x-[${initialTransform}%] opacity-0`}`}>
            <Card className="h-full bg-gradient-to-br from-[#E6E9F0]/50 to-[#6CA2BC]/30 dark:from-[#2C5364]/30 dark:to-[#203A43]/30
                           border-[#6CA2BC]/20 dark:border-[#8EC5FC]/20
                           overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6CA2BC]/10 to-[#8EC5FC]/10
                              dark:from-[#2C5364]/20 dark:to-[#203A43]/20
                              opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative p-6 z-10">
                    <div className="flex items-center mb-8">
                        <div className="p-3 rounded-lg bg-[#6CA2BC]/10 dark:bg-[#8EC5FC]/10 mr-4
                                    transform transition-all duration-300 group-hover:rotate-12">
                            <Icon className="text-[#2C5364] dark:text-[#8EC5FC]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-[#2C5364] dark:text-[#8EC5FC]">{title}</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {skills.map((skill, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col items-center p-3 rounded-lg 
                                         ${title === "Databases" && skill === "SQL" ?
                                    'bg-white/50 dark:bg-[#2C5364]/50 animate-pulse' :
                                    'bg-white/50 dark:bg-[#2C5364]/50'}
                                         transform transition-all duration-300 hover:scale-105`}
                            >
                                {logoUrls && logoUrls[idx] ? (
                                    <div className="w-12 h-12 mb-2 relative overflow-hidden rounded-lg
                                                  transform transition-all duration-300 group-hover:scale-110">
                                        <img
                                            src={logoUrls[idx]}
                                            alt={`${skill} logo`}
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-12 h-12 mb-2 flex items-center justify-center
                                                  bg-[#6CA2BC]/10 dark:bg-[#8EC5FC]/10 rounded-lg">
                                        <span className="text-2xl font-bold text-[#2C5364] dark:text-[#8EC5FC]">
                                            {skill.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                <span className="text-sm font-medium text-[#2C5364]/80 dark:text-[#8EC5FC]/80 text-center">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
};

const SkillsSection = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 5000); // Délai de 5 secondes

        return () => clearTimeout(timer);
    }, []);

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Java", "TypeScript", "PHP", "Python", "Dart"],
            icon: Code,
            logoUrls: [
                "https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png?f=webp",
                "https://media.graphassets.com/auto_image/compress/cache=expiry:max/resize=width:640/STChhjrScumkWbmwsni2",
                "https://www.tisdigitech.com/wp-content/uploads/2024/06/PHP-bg.png",
                "https://www.logiquetechno.com/wp-content/uploads/2022/12/logo-python.png",
                "https://download.logo.wine/logo/Dart_(programming_language)/Dart_(programming_language)-Logo.wine.png"
            ]
        },{
            title: "Web Development",
            skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "TailwindCSS"],
            icon: Code,
            logoUrls: [
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/typescript.svg",
                "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
            ]
        },
        {
            title: "Frontend Frameworks",
            skills: ["React JS", "Angular"],
            icon: Layers,
            logoUrls: [
                "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png",
                "https://www.mag-corp.com/wp-content/uploads/2021/08/angular.png"
            ]
        },
        {
            title: "Backend Frameworks",
            skills: [
                "Spring Boot",
                "Laravel",
                "Symfony",
                "Node.js",
                "NestJs",
                "Django"
            ],
            icon: Server,
            logoUrls: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2L_LUTlkNheoUGvjDaAILfnb9zn_2Rg9uFQ&s",
                "https://w7.pngwing.com/pngs/399/620/png-transparent-laravel-hd-logo-thumbnail.png",
                "https://kiboko.fr/wp-content/uploads/2021/06/symfony_black_01.png",
                "https://d1uxiwmpc9j4yg.cloudfront.net/images/all/71302-express.js-chrome-javascript-system-node.js-v8-runtime_1687631713.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/NestJS-logo-wordmark.svg/1200px-NestJS-logo-wordmark.svg.png",
                "https://e7.pngegg.com/pngimages/319/230/png-clipart-django-web-development-web-framework-python-web-application-asp-text-trademark.png"
            ]
        },
        {
            title: "Mobile Development",
            skills: ["Flutter", "React Native"],
            icon: Smartphone,
            logoUrls: [
                "https://mobivery.com/wp-content/uploads/2022/01/flutter-logo.png",
                "https://devtop.io/wp-content/uploads/2022/10/react-native-1.png"
            ]
        },
        {
            title: "Deployment Tools",
            skills: ["Git/Github", "Gitlab", "Docker"],
            icon: GitBranch,
            logoUrls: [
                "https://lthub.ubc.ca/files/2021/06/GitHub-Logo.png",
                "https://miro.medium.com/v2/resize:fit:1400/1*YjOtv5OOEP744YTdzBxWsw.png",
                "https://miro.medium.com/v2/resize:fit:1400/1*bZP17SmwRZihfAYDr5KBFg.png"
            ]
        },
        {
            title: "SQL Databases",
            skills: [
                "PostgreSQL",
                "MySQL",

            ],
            icon: Database,
            logoUrls: [
                "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
                "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
            ]
        },
        {
            title: "NoSQL Databases",
            skills: [
                "MongoDB",
                "Firebase",

            ],
            icon: Database,
            logoUrls: [
                "https://www.mongodb.com/assets/images/global/leaf.png",
                "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png",

            ]
        }
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#2C5364] dark:text-[#8EC5FC] mb-4
                             transform transition-all duration-500 hover:scale-105">
                    My Technical Skills
                </h2>
                <div className="w-24 h-1 bg-[#6CA2BC] dark:bg-[#8EC5FC] mx-auto rounded-full
                              transform transition-all duration-500 hover:w-32" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <SkillCategory
                        key={index}
                        index={index}
                        title={category.title}
                        skills={category.skills}
                        logoUrls={category.logoUrls}
                        icon={category.icon}
                        show={show}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
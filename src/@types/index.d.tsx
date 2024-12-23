// types/Skill.ts
import React from "react";

export interface Skill {
    name: string;
    icon: React.ComponentType;
    level: number;
}

// types/Project.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubLink?: string;
    demoLink?: string;
    category: 'Web' | 'Mobile' | 'Backend' | 'FullStack';
}

// types/Experience.ts
export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
    technologies: string[];
}
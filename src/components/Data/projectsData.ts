export type Project = {
    id: number;
    title: string;
    subtitle?: string;
    shortDescription: string;
    longDescription: string;
    technologies: string[];
    link?: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        shortDescription: "A personal portfolio built with React and Vite.",
        longDescription:
            "This portfolio showcases my work, skills, and experience. Built using React, TypeScript, and Vite for fast performance and modular development. It includes sections for About, Skills, Projects, Resume downloads, and Contact. Features a responsive design and a modal for project details.",
        technologies: ["React", "TypeScript", "Vite", "HTML & CSS"],
        link: "#"
    },
    {
        id: 2,
        title: "TRACCS",
        subtitle: "Taytay Response, Assistance, Community Coordination System",
        shortDescription: "A mobile and web-based community coordination app.",
        longDescription:
            "TRACCS is a system designed for community response and assistance coordination. It features a React web app and a Flutter mobile app for cross-platform usage. The app helps track requests, manage resources, and coordinate personnel efficiently.",
        technologies: ["Vite", "React", "Flutter", "NodeJS", "MongoDB"],
        link: "https://traccs-web-frontend.onrender.com"
    }
];

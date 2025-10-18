import React from "react";
import type { Project } from "../Data/projectsData";
import "./ProjectModal.css";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

// Map technology names to public folder icons
const techIcons: Record<string, string> = {
    React: "/icons/react-icon.svg",
    TypeScript: "/icons/ts-icon.svg",
    JavaScript: "/icons/js-icon.svg",
    Vite: "/icons/vite-icon.svg",
    NodeJS: "/icons/node-icon.svg",
    MongoDB: "/icons/mdb-icon.png",
    Flutter: "/icons/flutter-icon.svg",
    Squarespace: "/icons/ss-icon.png",
    "HTML & CSS": "/icons/html-icon.svg",
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Title & Subtitle */}
                <h2>{project.title}</h2>
                {project.subtitle && <h4>{project.subtitle}</h4>}

                {/* Long Description */}
                <p>{project.longDescription}</p>

                {/* Technologies */}
                <div className="tech-icons">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="tech-icon">
                            <img
                                src={techIcons[tech] || "/icons/default-icon.svg"}
                                alt={`${tech} icon`}
                                className="project-tech-icon"
                            />
                            <span>{tech}</span>
                        </span>
                    ))}
                </div>

                {/* Visit Project button if link exists */}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-project-button"
                    >
                        Visit Project
                    </a>
                )}

                {/* Close Button */}
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProjectModal;

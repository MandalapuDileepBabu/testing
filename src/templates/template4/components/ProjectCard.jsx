import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project, onSelect }) => {
    // Handle both 'desc' and 'description' field names from editor vs custom data
    const description = project.description || project.desc || '';

    // Handle tech as string ("React • CSS") or array
    const techList = Array.isArray(project.tech)
        ? project.tech
        : (project.tech ? project.tech.split('•').map(t => t.trim()).filter(Boolean) : []);

    const tags = project.tags || [];

    return (
        <motion.div
            className="t4-project-card"
            layout
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={() => onSelect(project)}
        >
            <div className="t4-card-image-container">
                {project.image ? (
                    <img src={project.image} alt={project.title} className="t4-card-image" />
                ) : (
                    <div className="t4-card-image-placeholder"></div>
                )}
            </div>

            <div className="t4-card-content-preview">
                <h3 className="t4-project-title">{project.title}</h3>

                {description && (
                    <p className="t4-project-description">{description}</p>
                )}

                {(techList.length > 0 || tags.length > 0) && (
                    <div className="t4-tech-stack">
                        {(techList.length > 0 ? techList : tags).map((item) => (
                            <span key={item} className="t4-tech-badge">{item}</span>
                        ))}
                    </div>
                )}

                <div className="t4-card-actions">
                    <div className="t4-link-buttons">
                        {(project.links?.code || project.github) && (
                            <a href={project.links?.code || project.github} target="_blank" rel="noopener noreferrer" className="t4-icon-link" title="View Code" onClick={(e) => e.stopPropagation()}>
                                <FaGithub size={18} />
                            </a>
                        )}
                        {(project.links?.live || project.live) && (
                            <a href={project.links?.live || project.live} target="_blank" rel="noopener noreferrer" className="t4-icon-link" title="Live Demo" onClick={(e) => e.stopPropagation()}>
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                    <button className="t4-btn-details">
                        Details <ChevronRight size={14} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

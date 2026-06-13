import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects({ data }) {
    const accentColor = data.accentColor || "#00eaff";
    const projects = data.projects || [];

    if (projects.length === 0) {
        return (
            <section className="t2-projects-section">
                <div className="container">
                    <div className="t2-projects-header">
                        <motion.h2
                            className="t2-section-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Featured <span style={{ color: accentColor }}>Projects</span>
                        </motion.h2>
                    </div>
                    <p style={{ color: '#888', textAlign: 'center', padding: '2rem' }}>
                        No projects yet — add them in the editor's Projects section.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="t2-projects-section">
            <div className="container">
                <div className="t2-projects-header">
                    <motion.h2
                        className="t2-section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Featured <span style={{ color: accentColor }}>Projects</span>
                    </motion.h2>
                </div>

                <div className="t2-projects-grid">
                    {projects.map((project, i) => {
                        const techList = project.tech ? project.tech.split('•').map(t => t.trim()).filter(Boolean) : [];
                        return (
                            <motion.div
                                className="t2-project-card"
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="t2-project-content">
                                    <span className="t2-project-tag" style={{ color: accentColor, border: `1px solid ${accentColor}4D` }}>
                                        Project {i + 1}
                                    </span>
                                    <h3>{project.title}</h3>
                                    <p>{project.desc || project.description}</p>
                                    {techList.length > 0 && (
                                        <div className="t2-project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                                            {techList.map((tech, idx) => (
                                                <span key={idx} style={{
                                                    fontSize: '0.75rem',
                                                    padding: '2px 8px',
                                                    border: `1px solid ${accentColor}55`,
                                                    borderRadius: '4px',
                                                    color: accentColor,
                                                    opacity: 0.8
                                                }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <div className="t2-project-links">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: accentColor }}>
                                                GitHub <span>→</span>
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: accentColor }}>
                                                Live Demo <span>→</span>
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: accentColor }}>
                                                View Project <span>→</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


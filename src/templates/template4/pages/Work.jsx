import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Work.css';

const Work = ({ data }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = data.projects || [];

    const openProjectModal = (project) => {
        setSelectedProject(project);
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
    };

    const scrollToProject = (index) => {
        const element = document.getElementById(`t4-project-${index}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="t4-work-page t4-container t4-page-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Page Header */}
                <div className="t4-work-header">
                    <h1 className="t4-heading-lg">Work</h1>
                    <p className="t4-section-description">
                        A selection of projects I've worked on — mapped dynamically from your portfolio data.
                    </p>
                </div>

                <div className="t4-work-layout">
                    {/* Left Column: Projects Grid */}
                    <div className="t4-projects-column">
                        {projects.length > 0 ? (
                            <div className="t4-projects-grid-2col">
                                {projects.map((project, index) => (
                                    <div key={index} id={`t4-project-${index}`}>
                                        <ProjectCard
                                            project={project}
                                            onSelect={openProjectModal}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="t4-empty-state">
                                No projects added yet. Add projects in the editor side panel.
                            </div>
                        )}
                    </div>

                    {/* Right Column: Sidebar List */}
                    {projects.length > 0 && (
                        <div className="t4-sidebar-column">
                            <div className="t4-project-list-sidebar">
                                <h3>Project List</h3>
                                <ul className="t4-project-list-nav">
                                    {projects.map((project, index) => (
                                        <li key={index} onClick={() => scrollToProject(index)}>
                                            <span className="t4-sidebar-project-title">{project.title}</span>
                                            <ChevronRight size={14} className="t4-sidebar-icon" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* Project Details Modal */}
                <Modal
                    isOpen={!!selectedProject}
                    onClose={closeProjectModal}
                    title={selectedProject ? selectedProject.title : ''}
                    className="t4-project-modal-large"
                >
                    {selectedProject && (
                        <div className="t4-project-modal-content">
                            <div className="t4-project-modal-header-section">
                                <div className="t4-project-modal-image-container">
                                    {selectedProject.image ? (
                                        <img src={selectedProject.image} alt={selectedProject.title} className="t4-project-modal-image" />
                                    ) : (
                                        <div className="t4-project-modal-image-placeholder"></div>
                                    )}
                                </div>
                                <div className="t4-project-modal-meta">
                                    <div className="t4-project-tags">
                                        {selectedProject.tags && selectedProject.tags.map(tag => (
                                            <span key={tag} className="t4-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="t4-link-buttons" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                        {(selectedProject.links?.code || selectedProject.github) && (
                                            <a href={selectedProject.links?.code || selectedProject.github} target="_blank" rel="noopener noreferrer" className="t4-btn t4-btn-outline t4-btn-sm" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                                View Code <FaGithub size={14} style={{ marginLeft: '0.4rem' }} />
                                            </a>
                                        )}
                                        {(selectedProject.links?.live || selectedProject.live) && (
                                            <a href={selectedProject.links?.live || selectedProject.live} target="_blank" rel="noopener noreferrer" className="t4-btn t4-btn-primary t4-btn-sm" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                                Live Demo <ExternalLink size={14} style={{ marginLeft: '0.4rem' }} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="t4-project-modal-body" style={{ marginTop: '1rem' }}>
                                <p className="t4-project-description-large">{selectedProject.description || selectedProject.desc}</p>

                                {(selectedProject.details || selectedProject.problemStatement || selectedProject.solution) && (
                                    <div className="t4-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                                        {(selectedProject.details?.problem || selectedProject.problemStatement) && (
                                            <div className="t4-detail-item">
                                                <h4>Problem</h4>
                                                <p>{selectedProject.details?.problem || selectedProject.problemStatement}</p>
                                            </div>
                                        )}
                                        {(selectedProject.details?.solution || selectedProject.solution) && (
                                            <div className="t4-detail-item">
                                                <h4>Solution</h4>
                                                <p>{selectedProject.details?.solution || selectedProject.solution}</p>
                                            </div>
                                        )}
                                        {selectedProject.details?.architecture && (
                                            <div className="t4-detail-item">
                                                <h4>Architecture</h4>
                                                <p>{selectedProject.details.architecture}</p>
                                            </div>
                                        )}
                                        {selectedProject.details?.challenges && (
                                            <div className="t4-detail-item">
                                                <h4>Challenges</h4>
                                                <p>{selectedProject.details.challenges}</p>
                                            </div>
                                        )}
                                        {selectedProject.details?.learnings && (
                                            <div className="t4-detail-item">
                                                <h4>Learnings</h4>
                                                <p>{selectedProject.details.learnings}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </Modal>
            </motion.div>
        </div>
    );
};

export default Work;

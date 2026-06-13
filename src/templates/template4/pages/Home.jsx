import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, User, ExternalLink, Code } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaJava } from 'react-icons/fa';
import {
    SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiVuedotjs,
    SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql,
    SiFlutter, SiKotlin, SiSwift, SiRuby, SiCplusplus, SiC, SiTypescript
} from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import './Home.css';

const skillIcons = {
    'python': SiPython,
    'python3': SiPython,
    'javascript': SiJavascript,
    'js': SiJavascript,
    'html': SiHtml5,
    'html5': SiHtml5,
    'css': SiCss3,
    'css3': SiCss3,
    'react': SiReact,
    'reactjs': SiReact,
    'react.js': SiReact,
    'vue': SiVuedotjs,
    'vuejs': SiVuedotjs,
    'vue.js': SiVuedotjs,
    'node': SiNodedotjs,
    'nodejs': SiNodedotjs,
    'node.js': SiNodedotjs,
    'express': SiExpress,
    'expressjs': SiExpress,
    'express.js': SiExpress,
    'mongodb': SiMongodb,
    'mongo': SiMongodb,
    'postgresql': SiPostgresql,
    'postgres': SiPostgresql,
    'mysql': SiMysql,
    'sql': SiMysql,
    'flutter': SiFlutter,
    'kotlin': SiKotlin,
    'swift': SiSwift,
    'ruby': SiRuby,
    'c++': SiCplusplus,
    'cpp': SiCplusplus,
    'c': SiC,
    'java': FaJava,
    'typescript': SiTypescript,
    'ts': SiTypescript
};

const getSkillIcon = (name) => {
    const key = name.toLowerCase().trim();
    return skillIcons[key] || Code;
};

const Home = ({ data, setActiveTab }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    const featuredProjects = (data.projects || []).slice(0, 2);
    const skillSnapshot = (data.skills || []).slice(0, 8);

    const openProjectModal = (project) => {
        setSelectedProject(project);
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="t4-home-page">
            {/* Hero Section */}
            <section className="t4-hero-section t4-container" style={{ paddingBottom: '3rem' }}>
                <motion.div
                    className="t4-hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="t4-hero-greeting">Hi, I'm</p>
                    <h1 className="t4-hero-name">{data.name || 'Your Name'}.</h1>
                    <h2 className="t4-hero-role">{data.role || 'Software Engineer'}</h2>
                    <p className="t4-hero-bio">
                        {data.bio || 'I build accessible, pixel-perfect, and performant web experiences.'}
                    </p>

                    <div className="t4-hero-actions">
                        <button onClick={() => setActiveTab('work')} className="t4-btn t4-btn-primary">
                            View Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </button>
                        {data.resumeLink ? (
                            <a href={data.resumeLink} target="_blank" rel="noopener noreferrer" className="t4-btn t4-btn-outline">
                                Download Resume <Download size={18} style={{ marginLeft: '8px' }} />
                            </a>
                        ) : (
                            <span className="t4-btn t4-btn-outline" style={{ opacity: 0.4, cursor: 'default' }}>
                                Download Resume <Download size={18} style={{ marginLeft: '8px' }} />
                            </span>
                        )}
                    </div>

                    <div className="t4-social-links" style={{ marginTop: '2rem' }}>
                        {data.github && (
                            <a href={data.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub size={24} />
                            </a>
                        )}
                        {data.linkedin && (
                            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={24} />
                            </a>
                        )}
                        {data.email && (
                            <a href={`mailto:${data.email}`} aria-label="Email">
                                <FaEnvelope size={24} />
                            </a>
                        )}
                    </div>

                    {data.stats && data.stats.length > 0 && (
                        <div className="t4-hero-stats" style={{
                            display: 'flex',
                            gap: '2rem',
                            marginTop: '2.5rem',
                            flexWrap: 'wrap'
                        }}>
                            {data.stats.slice(0, 3).map((stat, idx) => (
                                <div key={idx} className="t4-stat-item" style={{
                                    borderLeft: '2px solid var(--accent)',
                                    paddingLeft: '1rem'
                                }}>
                                    <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginTop: '0.25rem', letterSpacing: '0.05em' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>

                <motion.div
                    className="t4-hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="t4-hero-image-placeholder" style={{ padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {data.heroImage ? (
                            <img src={data.heroImage} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <>
                                <User size={120} strokeWidth={1} style={{ opacity: 0.5 }} />
                                <div className="t4-image-overlay"></div>
                            </>
                        )}
                    </div>
                </motion.div>
            </section>

            {/* Selected Projects */}
            {featuredProjects.length > 0 && (
                <section className="t4-section t4-container" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
                    <h2 className="t4-heading-md">Selected Projects</h2>
                    <div className="t4-projects-grid-preview">
                        {featuredProjects.map((project) => (
                            <ProjectCard
                                key={project.id || project.title}
                                project={project}
                                onSelect={openProjectModal}
                            />
                        ))}
                    </div>
                    <div className="t4-center-action" style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <button onClick={() => setActiveTab('work')} className="t4-btn t4-btn-outline">See All Projects</button>
                    </div>
                </section>
            )}

            {/* Skills Snapshot */}
            {skillSnapshot.length > 0 && (
                <section className="t4-section t4-container" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
                    <h2 className="t4-heading-md">Skills Snapshot</h2>
                    <div className="t4-skills-ticker-wrapper">
                        <div className="t4-skills-grid-mini">
                            {skillSnapshot.map((skill) => {
                                const name = typeof skill === 'string' ? skill : skill.name;
                                const IconComponent = getSkillIcon(name);
                                return (
                                    <div key={name} className="t4-skill-item-mini" title={name}>
                                        <IconComponent size={24} />
                                        <span>{name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="t4-section t4-container t4-cta-section">
                <h2 className="t4-heading-md">Let's Build Something Together</h2>
                <p>I'm currently looking for new opportunities.</p>
                <button onClick={() => setActiveTab('contact')} className="t4-btn t4-btn-primary">Get In Touch</button>
            </section>

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
                                <div className="t4-link-buttons" style={{ marginTop: '1rem' }}>
                                    {selectedProject.links?.code && (
                                        <a href={selectedProject.links.code} target="_blank" rel="noopener noreferrer" className="t4-btn t4-btn-outline t4-btn-sm" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                            View Code <FaGithub size={16} style={{ marginLeft: '0.5rem' }} />
                                        </a>
                                    )}
                                    {!selectedProject.links?.code && selectedProject.github && (
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="t4-btn t4-btn-outline t4-btn-sm" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                            View Code <FaGithub size={16} style={{ marginLeft: '0.5rem' }} />
                                        </a>
                                    )}
                                    {selectedProject.links?.live && (
                                        <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer" className="t4-btn t4-btn-primary t4-btn-sm" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginLeft: '0.5rem' }}>
                                            Live Demo <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                                        </a>
                                    )}
                                    {!selectedProject.links?.live && selectedProject.live && (
                                        <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="t4-btn t4-btn-primary t4-btn-sm" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginLeft: '0.5rem' }}>
                                            Live Demo <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="t4-project-modal-body" style={{ marginTop: '1.5rem' }}>
                            <p className="t4-project-description-large">{selectedProject.description || selectedProject.desc}</p>

                            {(selectedProject.details || selectedProject.problemStatement || selectedProject.solution) && (
                                <div className="t4-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
                                    {(selectedProject.details?.problem || selectedProject.problemStatement) && (
                                        <div className="t4-detail-item">
                                            <h4 style={{ color: 'var(--accent)', fontWeight: 600 }}>Problem</h4>
                                            <p style={{ color: 'var(--text-secondary)' }}>{selectedProject.details?.problem || selectedProject.problemStatement}</p>
                                        </div>
                                    )}
                                    {(selectedProject.details?.solution || selectedProject.solution) && (
                                        <div className="t4-detail-item">
                                            <h4 style={{ color: 'var(--accent)', fontWeight: 600 }}>Solution</h4>
                                            <p style={{ color: 'var(--text-secondary)' }}>{selectedProject.details?.solution || selectedProject.solution}</p>
                                        </div>
                                    )}
                                    {selectedProject.details?.architecture && (
                                        <div className="t4-detail-item">
                                            <h4 style={{ color: 'var(--accent)', fontWeight: 600 }}>Architecture</h4>
                                            <p style={{ color: 'var(--text-secondary)' }}>{selectedProject.details.architecture}</p>
                                        </div>
                                    )}
                                    {selectedProject.details?.challenges && (
                                        <div className="t4-detail-item">
                                            <h4 style={{ color: 'var(--accent)', fontWeight: 600 }}>Challenges</h4>
                                            <p style={{ color: 'var(--text-secondary)' }}>{selectedProject.details.challenges}</p>
                                        </div>
                                    )}
                                    {selectedProject.details?.learnings && (
                                        <div className="t4-detail-item">
                                            <h4 style={{ color: 'var(--accent)', fontWeight: 600 }}>Learnings</h4>
                                            <p style={{ color: 'var(--text-secondary)' }}>{selectedProject.details.learnings}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Home;

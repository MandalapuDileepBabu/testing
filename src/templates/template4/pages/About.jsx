import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Award, BookOpen, Coffee, Briefcase } from 'lucide-react';
import Modal from '../components/Modal';
import './About.css';

const About = ({ data }) => {
    const [selectedCert, setSelectedCert] = useState(null);

    const education = data.education || [];
    const experience = data.experience || [];
    const projects = data.projects || [];

    const openCertModal = (cert) => {
        setSelectedCert(cert);
    };

    const closeCertModal = () => {
        setSelectedCert(null);
    };

    return (
        <div className="t4-about-page t4-container t4-page-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="t4-about-header">
                    <h1 className="t4-heading-lg">About Me</h1>
                    <p className="t4-about-subtitle">{data.role || 'Software Engineer'}</p>
                </div>

                <div className="t4-about-content">
                    <div className="t4-about-text-column">
                        <div className="t4-about-text-section">
                            <p>
                                {data.bio || `Hello! I'm ${data.name || 'Your Name'}, a dedicated professional with a passion for building software that lives on the internet.`}
                            </p>
                        </div>

                        <div className="t4-about-stats-grid">
                            <div className="t4-stat-card">
                                <BookOpen size={32} className="t4-stat-icon" />
                                <h3>Education</h3>
                                <p>{education.length > 0 ? (education[0].degree || 'B.Tech') : 'B.Tech'}</p>
                            </div>
                            <div className="t4-stat-card">
                                <Coffee size={32} className="t4-stat-icon" />
                                <h3>Side Projects</h3>
                                <p>{projects.length > 0 ? `${projects.length}+ Built` : '0+ Built'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="t4-about-image-column">
                        <div className="t4-about-image-placeholder">
                            <User size={100} strokeWidth={1} style={{ opacity: 0.5 }} />
                        </div>
                    </div>
                </div>

                {/* Experience / Certifications Section */}
                {experience.length > 0 && (
                    <div className="t4-certifications-section">
                        <h2 className="t4-heading-md">Experience & Certifications</h2>
                        <div className="t4-cert-grid">
                            {experience.map((exp, idx) => (
                                <div
                                    key={idx}
                                    className="t4-cert-card-display"
                                    onClick={() => openCertModal(exp)}
                                >
                                    <div className="t4-cert-icon-wrapper">
                                        {exp.type === 'job' || exp.type === 'work' ? <Briefcase size={24} /> : <Award size={24} />}
                                    </div>
                                    <div className="t4-cert-card-details">
                                        <h4>{exp.title}</h4>
                                        <p>{exp.org || exp.company}{exp.time ? ` | ${exp.time}` : ''}</p>
                                        {exp.desc && <p style={{ fontSize: '0.8rem', marginTop: '4px' }}>{exp.desc}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education Qualifications Section */}
                {education.length > 0 && (
                    <div className="t4-education-section" style={{ marginBottom: '4rem' }}>
                        <h2 className="t4-heading-md">Education</h2>
                        <div className="t4-cert-grid">
                            {education.map((edu, idx) => (
                                <div key={idx} className="t4-cert-card-display" style={{ cursor: 'default' }}>
                                    <div className="t4-cert-icon-wrapper">
                                        <BookOpen size={24} />
                                    </div>
                                    <div className="t4-cert-card-details">
                                        <h4>{edu.degree}</h4>
                                        <p>{edu.institution}</p>
                                        <p style={{ fontSize: '0.8rem' }}>{edu.board} {edu.yop ? `| Class of ${edu.yop}` : ''} {edu.score ? `| Score: ${edu.score}` : ''}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Hobbies / Interests Section */}
                {data.hobbies && data.hobbies.length > 0 && (
                    <div className="t4-hobbies-section">
                        <h2 className="t4-heading-md">Interests</h2>
                        <ul className="t4-hobbies-list">
                            {data.hobbies.map((hobby, idx) => (
                                <li key={idx}>{hobby}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <Modal
                    isOpen={!!selectedCert}
                    onClose={closeCertModal}
                    title={selectedCert ? selectedCert.title : 'Details'}
                    className="t4-cert-modal-large"
                >
                    <div className="t4-cert-modal-content-simple">
                        <div className="t4-cert-placeholder">
                            <Award size={48} style={{ opacity: 0.5 }} />
                            <h4 style={{ margin: '1rem 0 0.5rem 0', color: 'var(--text-primary)' }}>{selectedCert ? (selectedCert.org || selectedCert.company) : ''}</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>{selectedCert ? selectedCert.time : ''}</p>
                            {selectedCert?.desc && (
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', padding: '0 2rem', textAlign: 'center', marginTop: '1rem' }}>
                                    {selectedCert.desc}
                                </p>
                            )}
                        </div>
                    </div>
                </Modal>
            </motion.div>
        </div>
    );
};

export default About;

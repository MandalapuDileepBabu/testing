import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact({ data }) {
    const accentColor = data.accentColor || "#00eaff";

    return (
        <section className="t2-contact-section">
            <div className="container">
                <div className="t2-contact-card" style={{ border: `1px solid ${accentColor}33` }}>
                    <div className="t2-contact-grid">
                        <div className="t2-contact-info">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                Let's <span style={{ color: accentColor }}>Connect</span>
                            </motion.h2>
                            <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>

                            <div className="t2-contact-links">
                                {data.email && (
                                    <div className="t2-contact-item">
                                        <span className="t2-label">Email</span>
                                        <a href={`mailto:${data.email}`}>{data.email}</a>
                                    </div>
                                )}
                                {data.linkedin && (
                                    <div className="t2-contact-item">
                                        <span className="t2-label">LinkedIn</span>
                                        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">View Profile</a>
                                    </div>
                                )}
                                {data.github && (
                                    <div className="t2-contact-item">
                                        <span className="t2-label">GitHub</span>
                                        <a href={data.github} target="_blank" rel="noopener noreferrer">View Repositories</a>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="t2-contact-form-area">
                            <div className="t2-glow" style={{ backgroundColor: accentColor }} />
                            <div className="t2-cta">
                                <h3>Start a Conversation</h3>
                                <p>Building something amazing starts with a single message.</p>
                                <button
                                    className="t2-btn-primary"
                                    style={{ backgroundColor: accentColor }}
                                    onClick={() => window.location.href = `mailto:${data.email}`}
                                >
                                    Send an Email
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

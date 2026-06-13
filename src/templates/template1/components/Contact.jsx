import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = ({ data }) => {
    const accentColor = data?.accentColor || "#1ec9a8";
    const name = data?.name || "Your Name";

    return (
        <div id="contact" className="contact-wrapper">
            <section className="contact-section">
                <h2 style={{ color: accentColor }}>Get In Touch</h2>
                <p className="contact-subtext">
                    Have a project in mind or just want to say hi? Feel free to reach out through any of the channels below.
                </p>

                <div className="contact-container">
                    {/* Email Card */}
                    <div className="contact-card">
                        <div className="icon-box" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
                            <FaEnvelope />
                        </div>
                        <h3>Email</h3>
                        <p>Send me an email directly</p>
                        <a href={`mailto:${data?.email}`} className="contact-link" style={{ color: accentColor }}>
                            {data?.email || "hello@example.com"}
                        </a>
                    </div>

                    {/* LinkedIn Card */}
                    {data?.linkedin && (
                        <div className="contact-card">
                            <div className="icon-box" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
                                <FaLinkedin />
                            </div>
                            <h3>LinkedIn</h3>
                            <p>Let's connect professionally</p>
                            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: accentColor }}>
                                View Profile
                            </a>
                        </div>
                    )}

                    {/* GitHub Card */}
                    {data?.github && (
                        <div className="contact-card">
                            <div className="icon-box" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
                                <FaGithub />
                            </div>
                            <h3>GitHub</h3>
                            <p>Check out my latest work</p>
                            <a href={data.github} target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: accentColor }}>
                                View Repositories
                            </a>
                        </div>
                    )}
                </div>
            </section>

            <footer className="template-footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        {name.split(' ')[0]}<span style={{ color: accentColor }}>.</span>
                    </div>
                    <div className="footer-socials">
                        {data?.email && <a href={`mailto:${data.email}`} className="social-icon"><FaEnvelope /></a>}
                        {data?.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>}
                        {data?.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>}
                    </div>
                </div>
                <div className="footer-bottom">
                    © {new Date().getFullYear()} {name}. Built with Aplora.
                </div>
            </footer>
        </div>
    );
};

export default Contact;

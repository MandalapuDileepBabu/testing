import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState({
        submitting: false,
        sent: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ submitting: true, sent: false, error: null });

        // EmailJS credentials from environment variables
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((response) => {
                setStatus({ submitting: false, sent: true, error: null });
                setFormData({ name: "", email: "", message: "" });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(prev => ({ ...prev, sent: false })), 5000);
            }, (err) => {
                setStatus({ submitting: false, sent: false, error: "Failed to send message. Please try again." });
                console.error("FAILED...", err);
            });
    };

    return (
        <div className="landing-footer-area">
            {/* Contact Section - Integrated Version */}
            <section className="contact-integrated" id="contact">
                <div className="section-container">
                    <div className="contact-flex">
                        <div className="contact-text-content">
                            <div className="contact-tag">CONTACT US</div>
                            <h2 className="contact-heading">Let's build <br /><span className="highlight">something great</span>.</h2>
                            <p className="contact-description">
                                Have questions about our templates or need help setting up your custom domain?
                                Our team is here to support your career journey.
                            </p>

                            <div className="contact-direct">
                                <div className="direct-item">
                                    <span className="label">EMAIL FOR SUPPORT</span>
                                    <a href="mailto:contact@aplora.xyz">contact@aplora.xyz</a>
                                </div>
                                <div className="direct-item">
                                    <span className="label">FOLLOW FOR UPDATES</span>
                                    <div className="social-pills">
                                        <a href="https://discord.gg/mvqEakqfYv">Discord</a>
                                        <a href="https://www.linkedin.com/company/aplora" target="_blank" rel="noopener noreferrer">LinkedIn</a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-box">
                            <div className="form-card">
                                <div className="form-header">
                                    <h3>Send us a message</h3>
                                    <p>Usually responds within 24 hours.</p>
                                </div>
                                <form className="minimal-form" onSubmit={handleSubmit}>
                                    <div className="field">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="field">
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="send-btn" disabled={status.submitting}>
                                        {status.submitting ? "Sending..." : "Get in touch"}
                                        {!status.submitting && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                                    </button>

                                    {status.sent && (
                                        <div style={{ marginTop: "15px", color: "#10b981", fontSize: "0.9rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "6px" }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            Message sent successfully!
                                        </div>
                                    )}

                                    {status.error && (
                                        <div style={{ marginTop: "15px", color: "#ef4444", fontSize: "0.9rem", fontWeight: "600" }}>
                                            {status.error}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern Ready Banner */}
            <section className="ready-to-start">
                <div className="section-container">
                    <div className="ready-glass-card">
                        <h2>Ready to launch your portfolio?</h2>
                        <p>Join thousands of professionals standing out with Aplora templates.</p>
                        <div className="ready-actions">
                            <Link to="/login">
                                <button className="btn btn-primary">Create Your Site</button>
                            </Link>
                            <a href="/#templates">
                                <button className="btn btn-secondary">See Templates</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Updated Footer */}
            <footer className="footer-modern">
                <div className="section-container">
                    <div className="f-top">
                        <div className="f-logo-area">
                            <div className="logo white">Aplora</div>
                            <p>Showcase your craft with the world's most intuitive portfolio builder.</p>
                        </div>
                        <div className="f-links">
                            <div className="f-nav-col">
                                <h6>Product</h6>
                                <a href="/#features">Features</a>
                                <a href="/#templates">Templates</a>
                            </div>
                            <div className="f-nav-col">
                                <h6>Platform</h6>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                                <Link to="/terms-and-conditions">Terms & Conditions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="f-bottom">
                        <span>© 2026 Aplora Inc. All rights reserved.</span>
                        <div className="f-social">
                            <a href="https://discord.gg/mvqEakqfYv" aria-label="Discord">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/aplora" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

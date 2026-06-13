import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ data }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 3000);
        }, 1500);
    };

    const socials = [
        data.github && { name: 'GitHub', url: data.github, icon: FaGithub },
        data.linkedin && { name: 'LinkedIn', url: data.linkedin, icon: FaLinkedin },
        data.twitter && { name: 'Twitter', url: data.twitter, icon: FaTwitter },
        data.email && { name: 'Email', url: `mailto:${data.email}`, icon: FaEnvelope }
    ].filter(Boolean);

    return (
        <div className="t4-contact-page t4-container t4-page-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="t4-contact-header">
                    <h1 className="t4-heading-lg">Contact Me</h1>
                    <p className="t4-contact-subtitle">Have a question or want to work together?</p>
                </div>

                <div className="t4-contact-content">
                    <div className="t4-contact-info">
                        <div className="t4-contact-card">
                            <h3>Contact Information</h3>
                            <div className="t4-info-item">
                                <Mail className="t4-info-icon" size={20} />
                                <a href={`mailto:${data.email || 'email@example.com'}`}>{data.email || 'email@example.com'}</a>
                            </div>
                            {data.phone && (
                                <div className="t4-info-item">
                                    <Phone className="t4-info-icon" size={20} />
                                    <span>{data.phone}</span>
                                </div>
                            )}
                            <div className="t4-info-item">
                                <MapPin className="t4-info-icon" size={20} />
                                <span>{data.location || 'Bangalore, India'}</span>
                            </div>
                        </div>

                        <div className="t4-socials-card">
                            <h3>Connect with me</h3>
                            <div className="t4-social-links-grid">
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="t4-social-link-item"
                                    >
                                        <social.icon size={20} />
                                        <span>{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="t4-contact-form-container">
                        <form className="t4-contact-form" onSubmit={handleSubmit}>
                            <div className="t4-form-group">
                                <label htmlFor="t4-name">Name</label>
                                <input
                                    type="text"
                                    id="t4-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="t4-form-group">
                                <label htmlFor="t4-email">Email</label>
                                <input
                                    type="email"
                                    id="t4-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="t4-form-group">
                                <label htmlFor="t4-message">Message</label>
                                <textarea
                                    id="t4-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your message..."
                                    rows="5"
                                ></textarea>
                            </div>
                            <button type="submit" className="t4-btn t4-btn-primary t4-submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                                    </>
                                )}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="t4-success-message">Message sent successfully!</p>
                            )}
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;

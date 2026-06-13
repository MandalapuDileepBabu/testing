import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import laptopImg from "../assets/b.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";

export default function Hero({ data }) {
    const roles = data.typingRoles && data.typingRoles.length > 0
        ? data.typingRoles
        : [data.role].filter(Boolean);

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [writing, setWriting] = useState(true);

    const accentColor = data.accentColor || "#00eaff";

    useEffect(() => {
        if (roleIndex >= roles.length && roles.length > 0) {
            setRoleIndex(0);
            setText("");
        }
    }, [roles.length, roleIndex]);

    useEffect(() => {
        if (roles.length === 0) {
            setText("");
            return;
        }

        const current = roles[roleIndex];
        if (!current) {
            setRoleIndex(0);
            return;
        }

        let timer;

        if (writing) {
            timer = setTimeout(() => {
                setText(current.slice(0, text.length + 1));
                if (text.length + 1 === current.length) {
                    setTimeout(() => setWriting(false), 1500);
                }
            }, 70);
        } else {
            timer = setTimeout(() => {
                setText(current.slice(0, text.length - 1));
                if (text.length <= 1) {
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                    setWriting(true);
                }
            }, 40);
        }

        return () => clearTimeout(timer);
    }, [text, writing, roleIndex, roles]);

    return (
        <section className="t2-hero-wrapper">
            {/* Background Decorations */}
            <div className="t2-bg-left"></div>
            <div className="t2-bg-right"></div>

            <div className="container">
                <div className="t2-hero">
                    <motion.div
                        className="t2-hero-left"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="t2-hero-title">
                            Hey, I am <span className="t2-name" style={{ color: accentColor }}>{data.name}</span>
                        </h1>

                        <h2 className="t2-typing-role">
                            {text}
                            <span className="t2-cursor" style={{ backgroundColor: accentColor }} />
                        </h2>

                        <p className="t2-hero-desc">
                            {data.bio}
                        </p>

                        <div className="t2-hero-actions">
                            <button
                                className="t2-btn-primary"
                                style={{ backgroundColor: accentColor, boxShadow: `0 0 20px ${accentColor}60` }}
                                onClick={() => data.resumeLink && window.open(data.resumeLink, '_blank')}
                            >
                                Download Resume
                            </button>
                            <button
                                className="t2-btn-outline"
                                style={{ borderColor: accentColor, color: accentColor }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Contact Me
                            </button>
                        </div>

                        <div className="t2-hero-social-links" style={{ display: 'flex', gap: '20px', marginTop: '25px', marginBottom: '15px', alignItems: 'center' }}>
                            {data.github && (
                                <a href={data.github} target="_blank" rel="noopener noreferrer" style={{ color: accentColor, fontSize: '1.8rem', transition: 'opacity 0.2s', display: 'inline-flex', alignItems: 'center' }} aria-label="GitHub">
                                    <FaGithub />
                                </a>
                            )}
                            {data.linkedin && (
                                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: accentColor, fontSize: '1.8rem', transition: 'opacity 0.2s', display: 'inline-flex', alignItems: 'center' }} aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                            )}
                        </div>

                        {/* STATS SECTION */}
                        <div className="t2-hero-stats">
                            {data.stats && data.stats.map((stat, i) => (
                                <div key={i} className="t2-stat">
                                    <span className="t2-s-label">{stat.label}</span>
                                    <span className="t2-s-value" style={{ color: accentColor }}>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="t2-hero-visual"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="t2-img-container">
                            <motion.img
                                src={laptopImg}
                                alt="Laptop"
                                animate={{
                                    y: [0, -15, 0],
                                    rotateY: [0, 5, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <div className="t2-visual-glow" style={{ backgroundColor: accentColor }} />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave decoration */}
            <div className="t2-hero-wave"></div>
        </section>
    );
}

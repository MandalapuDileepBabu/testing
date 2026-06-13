import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills({ data }) {
    const accentColor = data.accentColor || "#00eaff";
    const skills = data.skills || [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "CSS/SASS", level: 88 },
        { name: "Python", level: 80 },
        { name: "SQL", level: 75 },
    ];

    return (
        <section className="t2-skills-section">
            <div className="container">
                <div className="t2-skills-header">
                    <motion.h2
                        className="t2-section-title"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        My <span style={{ color: accentColor }}>Skills</span>
                    </motion.h2>
                </div>

                <div className="t2-skills-grid">
                    {skills.map((skill, i) => {
                        const name = typeof skill === 'string' ? skill : (skill.name || skill.category);
                        const level = typeof skill === 'string' ? 85 : (skill.level || 85);

                        return (
                            <motion.div
                                className="t2-skill-item"
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className="t2-skill-info">
                                    <span>{name}</span>
                                    <span>{level}%</span>
                                </div>
                                <div className="t2-skill-bar-bg">
                                    <motion.div
                                        className="t2-skill-bar-fill"
                                        style={{ backgroundColor: accentColor }}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${level}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

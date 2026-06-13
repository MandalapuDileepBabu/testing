import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const CARD_COLORS = ["#47c4d2", "#91faff", "#f48fb1", "#ffd54f", "#90caf9", "#a5d6a7"];

export default function About({ data }) {
    const accentColor = data.accentColor || "#00eaff";

    // Build about cards dynamically:
    // 1. If experience array has entries, use them as cards
    // 2. Otherwise show generic placeholder cards
    const buildAboutCards = () => {
        if (data.experience && data.experience.length > 0) {
            return data.experience.map((exp, i) => ({
                title: exp.title || `Role ${i + 1}`,
                desc: [exp.org, exp.time, exp.desc].filter(Boolean).join(' • '),
                color: CARD_COLORS[i % CARD_COLORS.length]
            }));
        }
        // Default instructional cards when no data
        return [
            { title: "Add Experience", desc: "Go to editor → Experience section and add your roles, companies, and descriptions.", color: "#47c4d2" },
            { title: "Add Skills", desc: "Your skills will show up in the Skills section below.", color: "#91faff" },
            { title: "Add Projects", desc: "Showcase your best work in the Projects section.", color: "#f48fb1" },
        ];
    };

    const aboutCards = buildAboutCards();

    return (
        <section className="t2-about-section">
            <div className="container">
                <div className="t2-about-header">
                    <motion.h2
                        className="t2-section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        About <span style={{ color: accentColor }}>Me</span>
                    </motion.h2>
                    <motion.p
                        className="t2-section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {data.bio || "Crafting digital excellence through code and creativity."}
                    </motion.p>
                </div>

                <div className="t2-bento-grid">
                    {aboutCards.map((item, i) => (
                        <motion.div
                            className="t2-bento-card"
                            key={i}
                            style={{ borderTop: `4px solid ${item.color}` }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                borderColor: accentColor,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


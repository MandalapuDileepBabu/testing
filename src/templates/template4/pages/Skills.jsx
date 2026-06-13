import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { FaJava } from 'react-icons/fa';
import {
    SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiVuedotjs,
    SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql,
    SiFlutter, SiKotlin, SiSwift, SiRuby, SiCplusplus, SiC, SiTypescript
} from 'react-icons/si';
import './Skills.css';

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

const categorizeSkills = (skillsArray) => {
    const categories = {
        'Programming Languages': [],
        'Web Development': [],
        'Mobile Development': [],
        'Cybersecurity': [],
        'Other Skills': []
    };

    (skillsArray || []).forEach(skill => {
        const name = typeof skill === 'string' ? skill : skill.name;
        const normalized = name.toLowerCase().trim();

        if (['c', 'c++', 'cpp', 'java', 'python', 'python3', 'typescript', 'ts', 'ruby', 'kotlin', 'swift'].includes(normalized)) {
            categories['Programming Languages'].push(skill);
        } else if (['html', 'html5', 'css', 'css3', 'js', 'javascript', 'react', 'react.js', 'reactjs', 'vue', 'vue.js', 'vuejs', 'mongodb', 'sql', 'mysql', 'postgresql', 'postgres', 'node', 'nodejs', 'node.js', 'express', 'express.js', 'expressjs', 'next.js', 'nextjs'].includes(normalized)) {
            categories['Web Development'].push(skill);
        } else if (['flutter', 'react native', 'android', 'ios'].includes(normalized)) {
            categories['Mobile Development'].push(skill);
        } else if (['wireshark', 'nmap', 'hydra', 'metasploit', 'burpsuite', 'owasp', 'cyber', 'security'].includes(normalized)) {
            categories['Cybersecurity'].push(skill);
        } else {
            categories['Other Skills'].push(skill);
        }
    });

    return Object.entries(categories).filter(([, items]) => items.length > 0);
};

const Skills = ({ data }) => {
    const categorized = categorizeSkills(data.skills || []);

    return (
        <div className="t4-skills-page t4-container t4-page-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Page Header */}
                <div className="t4-skills-header">
                    <h1 className="t4-heading-lg">Skills &amp; Expertise</h1>
                    <p className="t4-skills-description">
                        A breakdown of my technical toolkit, grouped by category.
                    </p>
                </div>

                <div className="t4-skills-content">
                    {categorized.length > 0 ? (
                        <div>
                            {categorized.map(([catName, skillList], catIdx) => (
                                <div key={catName} className="t4-skills-sub-group">
                                    <h3 className="t4-sub-group-title">{catName}</h3>
                                    <div className="t4-tech-skills-grid">
                                        {skillList.map((s, idx) => {
                                            const name = typeof s === 'string' ? s : s.name;
                                            const IconComponent = getSkillIcon(name);
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    className="t4-tech-skill-card-glow"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3, delay: (catIdx * 0.08) + (idx * 0.04) }}
                                                >
                                                    <div className="t4-tech-icon-container">
                                                        <IconComponent size={26} className="t4-skill-icon-glow" />
                                                    </div>
                                                    <span className="t4-tech-skill-name-glow">{name}</span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="t4-skills-empty">
                            No skills added yet. Add skills in the editor side panel.
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;

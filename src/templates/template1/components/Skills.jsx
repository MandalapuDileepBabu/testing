import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaCode } from "react-icons/fa";

const Skills = ({ data }) => {
  const accentColor = data?.accentColor || "#2a9d8f";
  const backgroundColor = data?.backgroundColor || "#05070d";

  // Default skills if none provided
  const defaultSkills = [
    { name: "HTML", icon: <FaHtml5 />, category: "Frontend" },
    { name: "CSS", icon: <FaCss3Alt />, category: "Frontend" },
    { name: "JavaScript", icon: <FaJsSquare />, category: "Frontend" },
    { name: "React", icon: <FaReact />, category: "Frontend" },
    { name: "Python", icon: <FaPython />, category: "Languages" },
    { name: "Node.js", icon: <FaJsSquare />, category: "Backend" },
  ];

  // Map user skills from editor
  const userSkills = (data?.skills || []).map(skill => {
    const name = typeof skill === 'string' ? skill : skill.name;
    return {
      name: name,
      icon: <FaCode />,
      category: "Custom"
    };
  });

  const allSkills = userSkills.length > 0 ? userSkills : defaultSkills;

  return (
    <section id="skills" className="skills-section" style={{ backgroundColor: backgroundColor }}>
      <h2 style={{ color: accentColor }}>My Skills</h2>
      <div className="skills-container" style={{ justifyContent: 'center' }}>
        {/* Skill Tree - Now centered without filters */}
        <div className="skills-grid">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-card highlighted"
              style={{
                borderColor: accentColor,
                color: accentColor
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

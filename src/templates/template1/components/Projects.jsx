import React, { useState } from "react";
import "./Projects.css";

const Projects = ({ data }) => {
  const accentColor = data?.accentColor || "#2a9d8f";
  const backgroundColor = data?.backgroundColor || "#05070d";

  const defaultProjects = [
    {
      title: "Plant Disease Detection",
      desc: "Deep learning based web app to identify plant leaf diseases using CNN.",
      tech: "Python • TensorFlow • React",
    },
    {
      title: "Library Management System",
      desc: "Role-based system for managing book borrowing, fines, and users.",
      tech: "React • Node • MySQL",
    }
  ];

  const projects = (data?.projects && data.projects.length > 0)
    ? data.projects
    : defaultProjects;

  const [start, setStart] = useState(0);
  const visible = projects.slice(start, start + 3);

  const nextProjects = () => {
    if (start + 1 < projects.length - 2) {
      setStart(start + 1);
    } else {
      setStart(0);
    }
  };

  // Helper for transparency
  const addAlpha = (hex, alpha) => {
    if (!hex) return 'transparent';
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <section id="projects" className="projects-section" style={{ backgroundColor: backgroundColor }}>
      <h2 style={{ color: accentColor }}>Projects</h2>

      <div className="projects-wrapper">
        <div className="projects-cards">
          {visible.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{
                borderColor: addAlpha(accentColor, 0.35),
                background: `linear-gradient(135deg, ${addAlpha(accentColor, 0.1)}, ${addAlpha(backgroundColor, 0.9)})`
              }}
            >
              <h3 style={{ color: accentColor }}>{project.title}</h3>
              <p>{project.desc}</p>
              <span style={{ color: accentColor, opacity: 0.9, fontWeight: '700' }}>{project.tech}</span>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="projects-next" onClick={nextProjects}>
            <span>Next</span>
            <div className="arrow" style={{ backgroundColor: accentColor }}>→</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

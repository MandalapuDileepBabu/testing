import React, { useState } from 'react';
import { Shield, X, ExternalLink, Award } from 'lucide-react';
import './Projects.css';

// SVG Github icon
const GithubIcon = ({ size = 18, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects({ data }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = data?.projects?.length > 0 ? data.projects.map((p, idx) => ({
    id: `project-${idx}`,
    title: p.title || `Project ${idx + 1}`,
    category: 'Development',
    platform: 'Web',
    desc: p.desc || p.description || 'No description provided.',
    problem: p.problem || 'Standard problem statement for this software solution.',
    solution: p.solution || 'Engineered using modern stacks to provide robust and responsive performance.',
    tags: p.tech ? p.tech.split('•').map(t => t.trim()) : ['React', 'CSS'],
    icon: <Shield className="proj-icon text-cyan" />,
    codeLink: p.github || '#',
    demoLink: p.live || '#'
  })) : [];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Work</h2>
          <p>A selection of projects I've worked on, ranging from web applications to Android apps.</p>
        </div>

        {projects.length > 0 ? (
          <div className="work-layout-grid">
            {/* Left Side: Project Cards */}
            <div className="project-cards-column">
              {projects.map((p) => (
                <div key={p.id} className="work-card glass-panel" onClick={() => setSelectedProject(p)} style={{ cursor: 'pointer' }}>
                  <div className="work-card-header">
                    <div className="icon-wrapper">{p.icon}</div>
                    <div className="work-category-tags">
                      <span className="badge category-badge">{p.category}</span>
                      <span className="badge platform-badge">{p.platform}</span>
                    </div>
                  </div>

                  <h3 className="work-title">{p.title}</h3>
                  <p className="work-desc">{p.desc}</p>

                  <div className="work-tech-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="work-card-footer">
                    <div className="work-links" style={{ display: 'flex', gap: '12px' }}>
                      <a href={p.codeLink} className="link-icon" title="View Code" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
                        <GithubIcon size={18} />
                      </a>
                      <a href={p.demoLink} className="link-icon" title="Live Demo" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <button className="details-link-btn" onClick={(e) => { e.stopPropagation(); setSelectedProject(p); }}>
                      Details &gt;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Sidebar List */}
            <div className="project-list-sidebar glass-panel">
              <h3 className="sidebar-title">Project List</h3>
              <ul className="sidebar-project-links">
                {projects.map((p) => (
                  <li key={p.id} className="sidebar-project-item">
                    <button className="sidebar-project-btn" onClick={() => setSelectedProject(p)}>
                      {p.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: '#888', padding: '40px 0' }}>
            No projects added yet. Add projects in the editor side panel.
          </div>
        )}
      </div>

      {/* Details Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            {/* Modal Image/Vector Area */}
            <div className="modal-visual-area">
              <div className="visual-graphic">
                <Award size={48} className="text-primary-color" />
                <span>{selectedProject.title} Schematic Diagram</span>
              </div>
            </div>

            {/* Modal Tags Line */}
            <div className="modal-tags-row">
              <div className="modal-category-badges">
                <span className="badge category-badge">{selectedProject.category}</span>
                <span className="badge platform-badge">{selectedProject.platform}</span>
              </div>

              <div className="modal-action-buttons">
                <a href={selectedProject.codeLink} className="modal-btn btn-secondary">
                  <GithubIcon size={16} /> View Code
                </a>
                <a href={selectedProject.demoLink} className="modal-btn btn-primary">
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="modal-description">{selectedProject.desc}</p>

            {/* Two-Column Problem & Solution */}
            {((selectedProject.problem || selectedProject.problemStatement) || (selectedProject.solution)) && (
              <div className="modal-details-columns">
                {(selectedProject.problem || selectedProject.problemStatement) && (
                  <div className="modal-col">
                    <h4>Problem</h4>
                    <p>{selectedProject.problem || selectedProject.problemStatement}</p>
                  </div>
                )}
                {selectedProject.solution && (
                  <div className="modal-col">
                    <h4>Solution</h4>
                    <p>{selectedProject.solution}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

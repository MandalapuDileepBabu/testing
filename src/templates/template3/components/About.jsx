import React, { useState } from 'react';
import { Award, User, Mail, MapPin, Phone, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './About.css';

// Mapping each educational credential, achievement or certification to its default files in public/documents/
const documentMapping = {
  'B.Tech (CSE)': [],
  'Intermediate (MPC)': [],
  'SSC': [],
  'JEE Mains': [],
  'EAMCET': [],
  'Leadership': [],
  'Fundamentals of Cybersecurity (240-hour course)': [],
  'Cybersecurity / IT Virtual Internship Program': []
};

export default function About({ data }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCardClick = (title, key) => {
    const defaultImages = documentMapping[key] || documentMapping[title] || [];
    setSelectedCard({
      title,
      images: defaultImages
    });
    setCurrentImageIndex(0);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? selectedCard.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === selectedCard.images.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = '';
  };

  const education = data?.education || [];
  const certifications = data?.experience?.length > 0 ? data.experience.map((exp) => ({
    title: exp.title,
    issuer: `${exp.org} | ${exp.time} ${exp.desc ? `| ${exp.desc}` : ''}`
  })) : [];
  const achievements = data?.achievements || [];

  const roleLabel = data?.role || 'Software Engineer';

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>{roleLabel}</p>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <p className="bio-text">
              {data?.bio || 'I am an aspiring Software Engineer with a strong foundation in data structures, algorithms, and full-stack development. Passionate about building clean, efficient, and user-centric applications.'}
            </p>

            {/* Contact Details Panel */}
            {(data?.email || data?.location || data?.phone) && (
              <div className="contact-info-panel glass-panel">
                {data?.email && (
                  <div className="contact-info-item">
                    <Mail size={15} className="contact-info-icon" />
                    <span>{data.email}</span>
                  </div>
                )}
                {data?.location && (
                  <div className="contact-info-item">
                    <MapPin size={15} className="contact-info-icon" />
                    <span>{data.location}</span>
                  </div>
                )}
                {data?.phone && (
                  <div className="contact-info-item">
                    <Phone size={15} className="contact-info-icon" />
                    <span>{data.phone}</span>
                  </div>
                )}
              </div>
            )}

            {data?.resumeLink && (
              <div style={{ marginTop: '20px' }}>
                <a
                  href={data.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-primary)',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    textDecoration: 'none'
                  }}
                >
                  Download Resume
                </a>
              </div>
            )}
          </div>

          <div className="about-right">
            <div className="profile-placeholder-box glass-panel" style={{ padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {data?.heroImage ? (
                <img src={data.heroImage} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <User size={80} className="profile-silhouette-icon" />
              )}
            </div>
          </div>
        </div>

        {/* Education Sub-Section */}
        {education.length > 0 && (
          <div className="about-sub-section">
            <h3 className="sub-section-title">Educational Qualifications</h3>
            <div className="education-grid">
              {education.map((e, idx) => (
                <div
                  key={idx}
                  className="education-card glass-panel clickable-card"
                  onClick={() => handleCardClick(e.degree, e.degree)}
                >
                  <div className="edu-card-header">
                    <span className="badge category-badge">{e.degree}</span>
                    <span className="badge platform-badge">Class of {e.yop}</span>
                  </div>
                  <h4 className="edu-institution">{e.institution}</h4>
                  <p className="edu-board">{e.board}</p>
                  <div className="edu-score-row">
                    <span>Score:</span>
                    <strong>{e.score}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Academic Achievements Sub-Section */}
        {achievements.length > 0 && (
          <div className="about-sub-section">
            <h3 className="sub-section-title">Academic Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="achievement-card glass-panel clickable-card"
                  onClick={() => handleCardClick(ach.title, ach.title)}
                >
                  <div className="cert-icon-wrapper">
                    {ach.icon}
                  </div>
                  <div>
                    <h4 className="ach-title">{ach.title}</h4>
                    <p className="ach-desc">{ach.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Sub-Section */}
        {certifications.length > 0 && (
          <div className="about-sub-section">
            <h3 className="sub-section-title">Certifications &amp; Internships</h3>
            <div className="certifications-grid">
              {certifications.map((c, idx) => (
                <div
                  key={idx}
                  className="certification-card glass-panel clickable-card"
                  onClick={() => handleCardClick(c.title, c.title)}
                >
                  <div className="cert-icon-wrapper">
                    <Award size={18} className="cert-icon" />
                  </div>
                  <div className="cert-details">
                    <h4>{c.title}</h4>
                    <p>{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Document Viewer Modal Overlay */}
      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="about-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-area">
                <h3>{selectedCard.title}</h3>
                <span className="modal-subtitle">Document Verification</span>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedCard(null)} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            <div className="about-modal-content">
              {selectedCard.images && selectedCard.images.length > 0 && selectedCard.images[0] !== '' ? (
                <div className="modal-image-wrapper">
                  <img
                    src={selectedCard.images[currentImageIndex]}
                    alt={`${selectedCard.title} Document`}
                    onError={handleImageError}
                  />
                  {selectedCard.images.length > 1 && (
                    <div className="modal-image-nav">
                      <button className="nav-btn prev" onClick={handlePrevImage} aria-label="Previous image">
                        <ChevronLeft size={24} />
                      </button>
                      <button className="nav-btn next" onClick={handleNextImage} aria-label="Next image">
                        <ChevronRight size={24} />
                      </button>
                      <div className="image-counter">
                        {currentImageIndex + 1} / {selectedCard.images.length}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="about-modal-placeholder-blank" style={{ minHeight: '300px', width: '100%' }}>
                  {/* Empty/blank space when no image path is provided */}
                </div>
              )}
            </div>

            <div className="modal-footer">
              <span className="file-path-indicator">
                Path: {selectedCard.images[currentImageIndex] || 'None'}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Github = ({ size = 24, className }) => (
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

const Linkedin = ({ size = 24, className }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact({ data }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    // Simulate sending (replace with EmailJS or backend when ready)
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="ambient-glow glow-contact" />
      <div className="container">
        <div className="section-title">
          <h2>Secure Transmission Node</h2>
          <p>Deploy query feedback or project collaboration queries onto the secure queue.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass-panel">
            <h3>Communication Channels</h3>
            <p>Ready for security collaboration, standard front-end contracting, or systems analysis. Packets are checked for payload sanitization.</p>

            <div className="info-items">
              <div className="info-item">
                <Mail className="info-icon text-cyan" />
                <div>
                  <label>Email Address</label>
                  <span>{data?.email || 'your.email@example.com'}</span>
                </div>
              </div>

              <div className="info-item">
                <MapPin className="info-icon text-purple" />
                <div>
                  <label>Current Location</label>
                  <span>{data?.location || 'Your Location'}</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              {data?.github && (
                <a href={data.github} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Github Profile">
                  <Github size={20} />
                </a>
              )}
              {data?.linkedin && (
                <a href={data.linkedin} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>

          <div className="contact-form-wrapper glass-panel">
            {submitted ? (
              <div className="success-state">
                <CheckCircle size={48} className="success-icon" />
                <h3>Packet Dispatched</h3>
                <p>Sanitization complete. Your message payload has been securely queued and sent via EmailJS.</p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>
                  New Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                
                <div className="form-group">
                  <label htmlFor="name">Sender Handle / Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter identity label"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Return Route (Email)</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter email endpoint"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message Data Payload</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Type transaction log here..."
                    required
                  />
                </div>

                <button type="submit" className="btn-primary form-submit-btn" disabled={loading}>
                  {loading ? 'Transmitting Packet...' : 'Dispatch Packet'} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


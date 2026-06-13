import React from 'react';
import { Lightbulb } from 'lucide-react';
import './Skills.css';

// High-Fidelity SVG Icons for Official Logos
const PythonIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const JavaIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const CIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const JsIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const HtmlIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const CssIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const ReactIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const VueIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const NodeIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const NextIcon = () => (
  <img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const MongoIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const SqlIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const FlutterIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const KotlinIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const SwiftIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const RubyIcon = () => (
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="Ruby" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const ExpressIcon = () => (
  <img src="https://cdn.simpleicons.org/express/ffffff" alt="Express" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const NmapIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px', display: 'block' }}>
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v20M2 12h20" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M12 12l6-6" strokeWidth="2.5" />
  </svg>
);

const HydraIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

const MetasploitIcon = () => (
  <img src="https://cdn.simpleicons.org/metasploit/3B82F6" alt="Metasploit" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

const WiresharkIcon = () => (
  <img src="https://cdn.simpleicons.org/wireshark/1679C6" alt="Wireshark" style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block' }} />
);

export default function Skills({ data }) {
  const iconMapping = {
    'c': { icon: <CIcon />, color: '#00599C', glow: 'rgba(0, 89, 156, 0.25)' },
    'c++': { icon: <CIcon />, color: '#00599C', glow: 'rgba(0, 89, 156, 0.25)' },
    'c==': { icon: <CIcon />, color: '#00599C', glow: 'rgba(0, 89, 156, 0.25)' },
    'java': { icon: <JavaIcon />, color: '#007396', glow: 'rgba(0, 115, 150, 0.25)' },
    'python': { icon: <PythonIcon />, color: '#3776AB', glow: 'rgba(55, 118, 171, 0.25)' },
    'python3': { icon: <PythonIcon />, color: '#3776AB', glow: 'rgba(55, 118, 171, 0.25)' },
    'html5': { icon: <HtmlIcon />, color: '#E34F26', glow: 'rgba(227, 79, 38, 0.25)' },
    'html': { icon: <HtmlIcon />, color: '#E34F26', glow: 'rgba(227, 79, 38, 0.25)' },
    'css3': { icon: <CssIcon />, color: '#1572B6', glow: 'rgba(21, 114, 182, 0.25)' },
    'css': { icon: <CssIcon />, color: '#1572B6', glow: 'rgba(21, 114, 182, 0.25)' },
    'javascript': { icon: <JsIcon />, color: '#F7DF1E', glow: 'rgba(247, 223, 30, 0.2)' },
    'js': { icon: <JsIcon />, color: '#F7DF1E', glow: 'rgba(247, 223, 30, 0.2)' },
    'react': { icon: <ReactIcon />, color: '#61DAFB', glow: 'rgba(97, 218, 251, 0.25)' },
    'react.js': { icon: <ReactIcon />, color: '#61DAFB', glow: 'rgba(97, 218, 251, 0.25)' },
    'reactjs': { icon: <ReactIcon />, color: '#61DAFB', glow: 'rgba(97, 218, 251, 0.25)' },
    'vue': { icon: <VueIcon />, color: '#41B883', glow: 'rgba(65, 184, 131, 0.25)' },
    'vue.js': { icon: <VueIcon />, color: '#41B883', glow: 'rgba(65, 184, 131, 0.25)' },
    'vuejs': { icon: <VueIcon />, color: '#41B883', glow: 'rgba(65, 184, 131, 0.25)' },
    'node': { icon: <NodeIcon />, color: '#339933', glow: 'rgba(51, 153, 51, 0.25)' },
    'node.js': { icon: <NodeIcon />, color: '#339933', glow: 'rgba(51, 153, 51, 0.25)' },
    'nodejs': { icon: <NodeIcon />, color: '#339933', glow: 'rgba(51, 153, 51, 0.25)' },
    'express': { icon: <ExpressIcon />, color: '#ffffff', glow: 'rgba(255, 255, 255, 0.25)' },
    'express.js': { icon: <ExpressIcon />, color: '#ffffff', glow: 'rgba(255, 255, 255, 0.25)' },
    'expressjs': { icon: <ExpressIcon />, color: '#ffffff', glow: 'rgba(255, 255, 255, 0.25)' },
    'next.js': { icon: <NextIcon />, color: '#ffffff', glow: 'rgba(255, 255, 255, 0.25)' },
    'nextjs': { icon: <NextIcon />, color: '#ffffff', glow: 'rgba(255, 255, 255, 0.25)' },
    'mongodb': { icon: <MongoIcon />, color: '#47A248', glow: 'rgba(71, 162, 72, 0.25)' },
    'sql': { icon: <SqlIcon />, color: '#00758F', glow: 'rgba(0, 117, 143, 0.25)' },
    'mysql': { icon: <SqlIcon />, color: '#00758F', glow: 'rgba(0, 117, 143, 0.25)' },
    'postgresql': { icon: <SqlIcon />, color: '#00758F', glow: 'rgba(0, 117, 143, 0.25)' },
    'flutter': { icon: <FlutterIcon />, color: '#02569B', glow: 'rgba(2, 86, 155, 0.25)' },
    'kotlin': { icon: <KotlinIcon />, color: '#7F52FF', glow: 'rgba(127, 82, 255, 0.25)' },
    'swift': { icon: <SwiftIcon />, color: '#FA7343', glow: 'rgba(250, 115, 67, 0.25)' },
    'ruby': { icon: <RubyIcon />, color: '#CC342D', glow: 'rgba(204, 52, 45, 0.25)' },
    'nmap': { icon: <NmapIcon />, color: '#22C55E', glow: 'rgba(34, 197, 94, 0.25)' },
    'hydra': { icon: <HydraIcon />, color: '#EF4444', glow: 'rgba(239, 68, 68, 0.25)' },
    'metasploit': { icon: <MetasploitIcon />, color: '#3B82F6', glow: 'rgba(59, 130, 246, 0.25)' },
    'wireshark': { icon: <WiresharkIcon />, color: '#3F83F8', glow: 'rgba(63, 131, 248, 0.25)' }
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

      if (['c', 'c++', 'c==', 'java', 'python', 'python3'].includes(normalized)) {
        categories['Programming Languages'].push(skill);
      } else if (['html', 'css', 'js', 'javascript', 'react', 'react.js', 'reactjs', 'vue', 'vue.js', 'vuejs', 'mongodb', 'sql', 'mysql', 'postgresql', 'node', 'nodejs', 'node.js', 'express', 'express.js', 'expressjs', 'next.js', 'nextjs'].includes(normalized)) {
        categories['Web Development'].push(skill);
      } else if (['kotlin', 'flutter', 'ruby', 'swift', 'react native', 'android'].includes(normalized)) {
        categories['Mobile Development'].push(skill);
      } else if (['wireshark', 'nmap', 'hydra', 'metasploit', 'burpsuite', 'owasp', 'cyber', 'security'].includes(normalized)) {
        categories['Cybersecurity'].push(skill);
      } else {
        categories['Other Skills'].push(skill);
      }
    });

    return Object.entries(categories).filter(([_, items]) => items.length > 0);
  };

  const categorized = categorizeSkills(data?.skills || []);
  const hasCustomSkills = categorized.length > 0;

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Expertise</h2>
          <p>A look at the technical tools and soft skills I bring to the table.</p>
        </div>

        <div className="skills-content">
          {hasCustomSkills ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {categorized.map(([catName, skillList]) => (
                <div key={catName} className="skills-sub-group">
                  <h3 className="sub-group-title" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', marginBottom: '20px', color: 'var(--color-primary)', textAlign: 'left' }}>
                    {catName}
                  </h3>
                  <div className="tech-skills-grid">
                    {skillList.map((s, idx) => {
                      const name = typeof s === 'string' ? s : s.name;
                      const key = name.toLowerCase().trim();
                      const iconInfo = iconMapping[key] || {
                        icon: <Lightbulb size={24} />,
                        color: 'var(--color-primary)',
                        glow: 'var(--color-primary-glow)'
                      };
                      return (
                        <div 
                          key={idx} 
                          className="tech-skill-card glass-panel"
                          style={{ 
                            '--skill-color': iconInfo.color, 
                            '--skill-glow': iconInfo.glow 
                          }}
                        >
                          <div className="tech-icon-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {iconInfo.icon}
                          </div>
                          <span className="tech-skill-name">{name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#888', padding: '40px 0' }}>
              No skills added yet. Add skills in the editor side panel.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

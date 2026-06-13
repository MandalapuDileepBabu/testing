import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";

const Experience = ({ data }) => {
  const itemsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const accentColor = data?.accentColor || "#1ec9a8";
  const backgroundColor = data?.backgroundColor || "#05070d";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [data?.experience]);

  const defaultTimeline = [
    {
      title: "Frontend Developer Intern",
      org: "XYZ Company",
      time: "2024 – Present",
      desc: "Building responsive UI components, improving UX, and working with React-based systems.",
      side: "left",
    },
    {
      title: "Web Development Projects",
      org: "Personal & Academic",
      time: "2023 – 2024",
      desc: "Developed multiple full-stack projects focusing on performance, accessibility, and clean UI.",
      side: "right",
    }
  ];

  const timeline = (data?.experience && data.experience.length > 0)
    ? data.experience.map((exp, i) => ({ ...exp, side: i % 2 === 0 ? 'left' : 'right' }))
    : defaultTimeline;

  const addAlpha = (hex, alpha) => {
    if (!hex) return 'transparent';
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <section id="experience" className="experience-section" style={{ backgroundColor: backgroundColor }}>
      <h2 style={{ color: accentColor }}>Experience & Journey</h2>

      <div className="timeline">
        {/* Dynamic Responsive Glowing Line */}
        <div className="dynamic-timeline-line" style={{
          position: 'absolute',
          left: isMobile ? '20px' : '50%',
          transform: isMobile ? 'none' : 'translateX(-50%)',
          width: '4px',
          height: '100%',
          background: `linear-gradient(to bottom, transparent, ${accentColor}, transparent)`,
          boxShadow: `0 0 20px ${addAlpha(accentColor, 0.6)}`,
          zIndex: 1
        }}></div>

        {timeline.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`timeline-item ${isMobile ? 'mobile-item' : item.side}`}
          >
            {/* Dynamic Responsive Dot */}
            <div className="dynamic-dot" style={{
              position: 'absolute',
              top: '30px',
              width: '14px',
              height: '14px',
              backgroundColor: accentColor,
              borderRadius: '50%',
              boxShadow: `0 0 15px ${addAlpha(accentColor, 0.8)}`,
              left: isMobile ? '13px' : (item.side === 'right' ? '-7px' : 'auto'),
              right: !isMobile && item.side === 'left' ? '-7px' : 'auto',
              zIndex: 2
            }}></div>

            <div className="timeline-content" style={{
              borderColor: addAlpha(accentColor, 0.35),
              background: `linear-gradient(135deg, ${addAlpha(accentColor, 0.08)}, ${addAlpha(backgroundColor, 0.9)})`,
              marginLeft: isMobile ? '20px' : '0'
            }}>
              <h3 style={{ color: accentColor }}>{item.title}</h3>
              <span className="timeline-org" style={{ color: accentColor }}>{item.org}</span>
              <span className="timeline-time">{item.time}</span>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

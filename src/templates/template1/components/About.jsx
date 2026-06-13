import React from "react";
import "./About.css";

const About = ({ data }) => {
  const name = data?.name || "Your Name";
  const accentColor = data?.accentColor || "#2a9d8f";
  const backgroundColor = data?.backgroundColor || "#05070d";

  return (
    <section id="about" className="about-section" style={{ backgroundColor: backgroundColor }}>
      <div className="about-content center">
        <div className="about-left">

          {/* Decorative top lines */}
          <div className="about-lines">
            <span style={{ backgroundColor: accentColor }}></span>
            <span style={{ backgroundColor: accentColor }}></span>
          </div>

          <h2 style={{ color: accentColor }}>About Me</h2>

          <p className="about-main-text">
            I'm <span style={{ color: accentColor }}>{name}</span>, an aspiring software engineer with a strong passion for
            <span style={{ color: accentColor }}> web development</span>, <span style={{ color: accentColor }}>UI/UX design</span>, and creating meaningful digital experiences.
          </p>

          <p className="about-sub-text">
            I love turning ideas into real-world applications, learning new technologies, and
            continuously improving my skills in programming and problem-solving.
          </p>

          <button
            className="btn-primary"
            style={{ backgroundColor: accentColor }}
            onClick={() => {
              if (data?.resumeLink) {
                window.open(data.resumeLink, '_blank');
              } else {
                alert("Please add your resume link in the 'Personal Info' section of the editor first!");
              }
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

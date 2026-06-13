import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Hero.css";

const Nav = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accentColor = data?.accentColor || "#1ec9a8";
  const backgroundColor = data?.backgroundColor || "#05070d";

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to add transparency to hex colors
  const addAlpha = (hex, alpha) => {
    if (!hex) return 'transparent';
    try {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } catch (e) {
      return hex;
    }
  };

  return (
    <nav className={`nav ${isOpen ? "active" : ""}`} style={{
      backgroundColor: addAlpha(backgroundColor, 0.95),
      borderColor: addAlpha(accentColor, 0.3)
    }}>
      <div className="logo" style={{ color: accentColor }}>
        {data?.name ? data.name.split(' ')[0] : 'The Portfolio'}
      </div>

      <button className="t1-hamburger" onClick={() => setIsOpen(!isOpen)} style={{ color: accentColor }}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={isOpen ? "active" : ""}>
        <li onClick={() => scrollToSection('home')}><span style={{ color: '#fff' }}>Home</span></li>
        <li onClick={() => scrollToSection('about')}><span style={{ color: '#fff' }}>About</span></li>
        <li onClick={() => scrollToSection('skills')}><span style={{ color: '#fff' }}>Skills</span></li>
        <li onClick={() => scrollToSection('projects')}><span style={{ color: '#fff' }}>Projects</span></li>
        <li onClick={() => scrollToSection('experience')}><span style={{ color: '#fff' }}>Journey</span></li>
        <li onClick={() => scrollToSection('contact')}><span style={{ color: '#fff' }}>Contact</span></li>
      </ul>
    </nav>
  );
};

export default Nav;

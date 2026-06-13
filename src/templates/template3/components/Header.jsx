import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import './Header.css';

export default function Header({ data, activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
          <Shield className="logo-icon text-primary-color" />
          <span>{data?.name || 'Your Name'}</span>
        </a>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a 
            href="#home" 
            className={activeTab === '#home' ? 'active' : ''} 
            onClick={(e) => handleNavClick(e, '#home')}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activeTab === '#about' ? 'active' : ''} 
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={activeTab === '#skills' ? 'active' : ''} 
            onClick={(e) => handleNavClick(e, '#skills')}
          >
            Skills
          </a>
          <a 
            href="#console" 
            className={activeTab === '#console' ? 'active' : ''} 
            onClick={(e) => handleNavClick(e, '#console')}
          >
            Console
          </a>
          <a 
            href="#projects" 
            className={activeTab === '#projects' ? 'active' : ''} 
            onClick={(e) => handleNavClick(e, '#projects')}
          >
            Work
          </a>
          <a 
            href="#contact" 
            className={activeTab === '#contact' ? 'active' : ''} 
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}


import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ data, activeTab, setActiveTab }) => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleNavClick = (tabId) => {
        setActiveTab(tabId);
        closeMenu();
    };

    return (
        <nav className="t4-navbar">
            <div className="t4-navbar-container container">
                <a href="#home" className="t4-navbar-logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                    {data?.name || 'Portfolio'}<span className="t4-accent">.</span>
                </a>

                <div className="t4-navbar-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <div className={`t4-navbar-links ${isMenuOpen ? 't4-active' : ''}`}>
                    <a href="#home" className={`t4-nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
                    <a href="#about" className={`t4-nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
                    <a href="#skills" className={`t4-nav-link ${activeTab === 'skills' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a>
                    <a href="#work" className={`t4-nav-link ${activeTab === 'work' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('work'); }}>Work</a>
                    <a href="#contact" className={`t4-nav-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>

                    <button className="t4-theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

export default function Nav({ data, theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const accentColor = data.accentColor || "#00eaff";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (href) => {
        setIsOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`t2-nav ${scrolled ? "scrolled" : ""} ${isOpen ? "menu-open" : ""}`}>
            <div className="container t2-nav-container">
                <div className="t2-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span style={{ color: accentColor }}>P</span>ortfolio
                </div>

                <ul className={`t2-nav-links ${isOpen ? "active" : ""}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(link.href);
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    {/* Theme toggle and CTA inside mobile menu */}
                    <li className="mobile-only-actions">
                        <button className="t2-theme-toggle" onClick={toggleTheme}>
                            {theme === 'dark' ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>}
                        </button>
                    </li>
                </ul>

                <div className="t2-nav-actions">
                    <button className="t2-theme-toggle desktop-only" onClick={toggleTheme}>
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                    <button
                        className="t2-nav-cta desktop-only"
                        style={{ backgroundColor: accentColor }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Hire Me
                    </button>

                    {/* Hamburger Button */}
                    <button className="t2-hamburger" onClick={toggleMenu} style={{ color: accentColor }}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </nav>
    );
}

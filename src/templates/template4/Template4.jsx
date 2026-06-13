import React, { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';
import './Template4.css';

const hexToRgba = (hex, alpha) => {
    let r = 0, g = 0, b = 0;
    if (!hex) return `rgba(0,0,0,${alpha})`;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Template4Content = ({ data }) => {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState('home');

    const sanitizeEmail = (email) => {
        return email || 'your.email@example.com';
    };

    const sanitizeLocation = (location) => {
        return location || 'Your Location';
    };

    const sanitizePhone = (phone) => {
        if (!phone) return null;
        const digits = phone.replace(/\D/g, '');
        if (digits.length < 7) return null;
        // Reject all-same-digit numbers like 11111111111, 00000000000, etc.
        if (/^(\d)\1+$/.test(digits)) return null;
        return phone;
    };

    // Default values if data is missing
    const portfolioData = {
        name: data?.name || 'Your Name',
        role: data?.role || 'Software Engineer',
        bio: data?.bio || 'Building modern web experiences with passion.',
        skills: data?.skills || [],
        projects: data?.projects || [],
        experience: data?.experience || [],
        stats: data?.stats || [
            { label: 'Projects Built', value: '10+' },
            { label: 'Domains Explored', value: '3+' },
            { label: 'Years of Learning', value: '2+' }
        ],
        email: sanitizeEmail(data?.email),
        phone: sanitizePhone(data?.phone),
        location: sanitizeLocation(data?.location),
        linkedin: data?.linkedin || '',
        github: data?.github || '',
        accentColorDark: data?.accentColorDark || data?.accentColor || '#64ffda',
        backgroundColorDark: data?.backgroundColorDark || data?.backgroundColor || '#0a192f',
        accentColorLight: data?.accentColorLight || data?.accentColor || '#b4860b',
        backgroundColorLight: data?.backgroundColorLight || '#fffbf2',
        resumeLink: data?.resumeLink || '',
        heroImage: data?.heroImage || ''
    };

    const currentAccent = theme === 'dark' ? portfolioData.accentColorDark : portfolioData.accentColorLight;
    const currentBg = theme === 'dark' ? portfolioData.backgroundColorDark : portfolioData.backgroundColorLight;

    portfolioData.accentColor = currentAccent;
    portfolioData.backgroundColor = currentBg;

    useEffect(() => {
        // Apply custom colors to CSS variables
        const root = document.querySelector('.template4-root');
        if (root) {
            root.style.setProperty('--accent', currentAccent);
            root.style.setProperty('--bg-primary', currentBg);
            root.style.setProperty('--accent-tint', hexToRgba(currentAccent, 0.1));
        }
    }, [currentAccent, currentBg]);

    const renderPage = () => {
        switch (activeTab) {
            case 'home':
                return <Home data={portfolioData} setActiveTab={setActiveTab} />;
            case 'about':
                return <About data={portfolioData} />;
            case 'skills':
                return <Skills data={portfolioData} />;
            case 'work':
                return <Work data={portfolioData} />;
            case 'contact':
                return <Contact data={portfolioData} />;
            default:
                return <Home data={portfolioData} setActiveTab={setActiveTab} />;
        }
    };

    return (
        <div className="template4-root" data-theme={theme}>
            <Navbar data={portfolioData} activeTab={activeTab} setActiveTab={setActiveTab} />
            <main>
                {renderPage()}
            </main>
        </div>
    );
};

const Template4 = (props) => (
    <ThemeProvider>
        <Template4Content {...props} />
    </ThemeProvider>
);

export default Template4;

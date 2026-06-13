import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './Template2.css';

const Template2 = ({ data }) => {
    const [theme, setTheme] = useState('dark');

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
        email: data?.email || '',
        linkedin: data?.linkedin || '',
        github: data?.github || '',
        accentColorDark: data?.accentColorDark || data?.accentColor || '#00eaff',
        backgroundColorDark: data?.backgroundColorDark || data?.backgroundColor || '#0d0f11',
        accentColorLight: data?.accentColorLight || data?.accentColor || '#0096c7',
        backgroundColorLight: data?.backgroundColorLight || '#f7fbfd',
        resumeLink: data?.resumeLink || ''
    };

    // To ensure compatibility with child components
    portfolioData.accentColor = theme === 'dark' ? portfolioData.accentColorDark : portfolioData.accentColorLight;
    portfolioData.backgroundColor = theme === 'dark' ? portfolioData.backgroundColorDark : portfolioData.backgroundColorLight;

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div
            className={`template2-root ${theme}-mode`}
            data-theme={theme}
            style={{
                '--accent-color': portfolioData.accentColor,
                '--user-bg': portfolioData.backgroundColor,
                backgroundColor: portfolioData.backgroundColor
            }}
        >
            <Nav data={portfolioData} theme={theme} toggleTheme={toggleTheme} />
            <main>
                <div id="home">
                    <Hero data={portfolioData} />
                </div>
                <div id="about">
                    <About data={portfolioData} />
                </div>
                <div id="contact">
                    <Contact data={portfolioData} />
                </div>
            </main>
            <Footer data={portfolioData} />
        </div>
    );
};

export default Template2;

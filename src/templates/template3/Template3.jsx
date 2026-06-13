import React, { useState } from 'react';
import HoneycombBackground from './components/HoneycombBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import CyberConsole from './components/CyberConsole';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './Template3.css';

export default function Template3({ data }) {
    const sanitizeEmail = (email) => {
        return email || 'your.email@example.com';
    };

    const sanitizeLocation = (location) => {
        return location || 'Your Location';
    };

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
        location: sanitizeLocation(data?.location),
        linkedin: data?.linkedin || '',
        github: data?.github || '',
        accentColor: data?.accentColor || '#10b981',
        backgroundColor: data?.backgroundColor || '#05070a',
        resumeLink: data?.resumeLink || '',
        heroImage: data?.heroImage || ''
    };

    const [activeTab, setActiveTab] = useState('#home');

    // Dynamic style applying accentColor and backgroundColor
    const rootStyle = {
        '--color-primary': portfolioData.accentColor,
        '--border-color': `${portfolioData.accentColor}1e`, // ~12% opacity
        '--border-color-hover': `${portfolioData.accentColor}4c`, // ~30% opacity
        '--bg-primary': portfolioData.backgroundColor,
        backgroundColor: portfolioData.backgroundColor,
        minHeight: '100vh',
        width: '100%',
        color: '#e2e8f0',
        position: 'relative',
        zIndex: 1
    };

    const renderPage = () => {
        switch (activeTab) {
            case '#home':
                return <Hero data={portfolioData} setActiveTab={setActiveTab} />;
            case '#about':
                return <About data={portfolioData} />;
            case '#skills':
                return <Skills data={portfolioData} />;
            case '#console':
                return (
                    <section style={{ minHeight: '85vh' }}>
                        <div className="container">
                            <div className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <h2>Security Audits & Decoder Console</h2>
                                <p>Explore real-time cryptographic encoders and interactive audits of major server security vulnerabilities.</p>
                            </div>
                            <CyberConsole data={portfolioData} />
                        </div>
                    </section>
                );
            case '#projects':
                return <Projects data={portfolioData} />;
            case '#contact':
                return <Contact data={portfolioData} />;
            default:
                return <Hero data={portfolioData} setActiveTab={setActiveTab} />;
        }
    };

    return (
        <div className="template3-root" style={rootStyle}>
            {/* Interactive Cyber Honeycomb Background Grid */}
            <HoneycombBackground data={portfolioData} />

            {/* Navigation Header */}
            <Header data={portfolioData} activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Routed Page Content */}
            <main style={{ minHeight: '85vh' }}>
                {renderPage()}
            </main>

            {/* Footer */}
            <footer style={{
                backgroundColor: 'transparent',
                borderTop: '1px solid var(--border-color)',
                padding: '30px 24px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 5
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '16px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600' }}>{portfolioData.name}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        © {new Date().getFullYear()} {portfolioData.name}. Built with React & Cyber CSS. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

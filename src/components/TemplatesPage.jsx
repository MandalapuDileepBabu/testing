import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './TemplatesPage.css';

import template1Img from '../assets/template1.png';
import template2Img from '../assets/template2.jpg';
import template3Img from '../assets/template3.png';
import template4Img from '../assets/template4.png';

const TEMPLATE_LIST = [
    {
        id: 1,
        name: "Aura Minimal",
        description: "A clean, high-contrast stencil design for minimalists.",
        category: "Designer",
        color: "#f5f5f5",
        accent: "#000",
        image: template1Img
    },
    {
        id: 2,
        name: "Neon Tech",
        description: "A futuristic tech-focused design with 3D elements and glowing accents.",
        category: "Developer",
        color: "#0d0f11",
        accent: "#00eaff",
        image: template2Img
    },
    {
        id: 3,
        name: "Sleek Card Deck",
        description: "A modern dark card deck template for sleek presentation.",
        category: "Designer",
        color: "#0b0c10",
        accent: "#3a86ff",
        image: template3Img
    },
    {
        id: 4,
        name: "Professional Portfolio",
        description: "A professional portfolio with certifications and advanced layout.",
        category: "Developer",
        color: "#0a192f",
        accent: "#64ffda",
        image: template4Img
    }
];

export default function TemplatesPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                // If no user, redirect to login
                navigate('/login');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error("Logout error", error);
        }
    };

    const handleSelect = (id) => {
        navigate(`/editor/${id}`);
    };

    if (!user) return null;

    return (
        <div className="templates-page-container">
            {/* Back Button */}
            <button onClick={() => navigate('/')} className="templates-back-btn" aria-label="Go back to home">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
            </button>

            {/* Minimal User Header */}
            <div className="templates-user-nav">
                <div className="user-greeting">
                    Hey, <span className="user-highlight">{user.displayName || user.email.split('@')[0]}</span>
                </div>
                <button onClick={handleLogout} className="minimal-logout-btn">
                    Logout
                </button>
            </div>

            <header className="templates-page-header">
                <span className="templates-tag">Select Template</span>
                <h1 className="templates-main-heading">Please select one</h1>
                <p className="templates-subheading">Choose a starting point for your new portfolio.</p>
            </header>

            <div className="templates-selection-grid">
                {TEMPLATE_LIST.map((template) => (
                    <div className="template-select-card" key={template.id} onClick={() => handleSelect(template.id)}>
                        <div className="template-visual-preview" style={{ backgroundColor: template.color, position: 'relative', overflow: 'hidden' }}>
                            <img src={template.image} alt={template.name} className="template-preview-image" />
                            <div className="selection-overlay">
                                <button className="select-template-btn">Use Template</button>
                            </div>
                        </div>
                        <div className="template-select-info">
                            <div className="info-top">
                                <h3>{template.name}</h3>
                                <span className="category-pill">{template.category}</span>
                            </div>
                            <p>{template.description}</p>
                        </div>
                    </div>
                ))}

                {/* Coming Soon Card */}
                <div className="template-select-card coming-soon">
                    <div className="template-visual-preview">
                        <div className="coming-soon-content">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            <span>More coming soon</span>
                        </div>
                    </div>
                    <div className="template-select-info">
                        <h3>Custom Design</h3>
                        <p>Request a custom template tailored specifically to your brand.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

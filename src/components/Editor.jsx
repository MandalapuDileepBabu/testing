import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './Editor.css';
import Template1 from '../templates/template1/Template1';
import Template2 from '../templates/template2/Template2';
import Template3 from '../templates/template3/Template3';
import Template4 from '../templates/template4/Template4';
import Editor1 from './Editor1';
import Editor2 from './Editor2';
import Editor3 from './Editor3';
import Editor4 from './Editor4';

const getTemplateDefaults = (id) => {
    switch (id) {
        case '1':
            return {
                accentColor: '#2a9d8f',
                backgroundColor: '#05070d',
                accentColorDark: '#64ffda',
                backgroundColorDark: '#0a192f',
                accentColorLight: '#b4860b',
                backgroundColorLight: '#fffbf2'
            };
        case '2':
            return {
                accentColor: '#00eaff',
                backgroundColor: '#0d0f11',
                accentColorDark: '#00eaff',
                backgroundColorDark: '#0d0f11',
                accentColorLight: '#0096c7',
                backgroundColorLight: '#f7fbfd'
            };
        case '3':
            return {
                accentColor: '#10b981',
                backgroundColor: '#05070a',
                accentColorDark: '#64ffda',
                backgroundColorDark: '#0a192f',
                accentColorLight: '#b4860b',
                backgroundColorLight: '#fffbf2'
            };
        case '4':
            return {
                accentColor: '#64ffda',
                backgroundColor: '#0a192f',
                accentColorDark: '#64ffda',
                backgroundColorDark: '#0a192f',
                accentColorLight: '#b4860b',
                backgroundColorLight: '#fffbf2'
            };
        default:
            return {
                accentColor: '#2a9d8f',
                backgroundColor: '#05070d',
                accentColorDark: '#64ffda',
                backgroundColorDark: '#0a192f',
                accentColorLight: '#b4860b',
                backgroundColorLight: '#fffbf2'
            };
    }
};

export default function Editor() {
    const { templateId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isPublished, setIsPublished] = useState(false);
    const [activeView, setActiveView] = useState('edit'); // 'edit' or 'preview' for mobile
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Form State (Dynamic based on template)
    const [formData, setFormData] = useState(() => {
        const defaults = getTemplateDefaults(templateId || '1');
        return {
            templateId: templateId || '1',
            name: '',
            role: '',
            bio: '',
            typingRoles: [],
            email: '',
            linkedin: '',
            github: '',
            skills: [],
            projects: [],
            experience: [],
            heroImage: '',
            resumeLink: '',
            certifications: [],
            stats: [
                { label: 'Projects Built', value: '10+' },
                { label: 'Domains Explored', value: '3+' },
                { label: 'Years of Learning', value: '2+' }
            ],
            ...defaults
        };
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);

                // Check template-specific published key first, then global key as fallback
                const savedData = localStorage.getItem(`published_${currentUser.uid}_${templateId}`) || localStorage.getItem(`published_${currentUser.uid}`);
                if (savedData) {
                    setIsPublished(true);
                    const parsedData = JSON.parse(savedData);
                    
                    const activeTid = templateId || parsedData.templateId || '1';
                    const activeDefaults = getTemplateDefaults(activeTid);
                    const savedTid = parsedData.templateId || '1';
                    const savedDefaults = getTemplateDefaults(savedTid);
                    
                    const globalDefs = {
                        accentColor: '#2a9d8f',
                        backgroundColor: '#05070d',
                        accentColorDark: '#64ffda',
                        backgroundColorDark: '#0a192f',
                        accentColorLight: '#b4860b',
                        backgroundColorLight: '#fffbf2'
                    };

                    const resolvedColors = {};
                    Object.keys(globalDefs).forEach(key => {
                        const val = parsedData[key];
                        if (val !== undefined) {
                            if (val === savedDefaults[key] || val === globalDefs[key]) {
                                resolvedColors[key] = activeDefaults[key];
                            } else {
                                resolvedColors[key] = val;
                            }
                        } else {
                            resolvedColors[key] = activeDefaults[key];
                        }
                    });

                    setFormData(prev => ({
                        ...prev,
                        ...parsedData,
                        ...resolvedColors,
                        templateId: activeTid,
                        // Convert old string array skills to object array if needed
                        skills: (parsedData.skills || []).map(s =>
                            typeof s === 'string' ? { name: s, level: 85 } : s
                        ),
                        typingRoles: parsedData.typingRoles || [],
                        projects: parsedData.projects || [],
                        experience: parsedData.experience || [],
                        certifications: parsedData.certifications || [],
                        stats: parsedData.stats || [
                            { label: 'Projects Built', value: '10+' },
                            { label: 'Domains Explored', value: '3+' },
                            { label: 'Years of Learning', value: '2+' }
                        ]
                    }));
                } else {
                    const activeTid = templateId || '1';
                    const activeDefaults = getTemplateDefaults(activeTid);
                    setFormData(prev => ({
                        ...prev,
                        ...activeDefaults,
                        name: currentUser.displayName || '',
                        email: currentUser.email || ''
                    }));
                }
            } else {
                navigate('/login');
            }
        });
        return () => unsubscribe();
    }, [navigate, templateId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // List Handlers
    const addListItem = (field, defaultValue) => {
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], defaultValue]
        }));
    };

    const removeListItem = (field, index) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    const updateListItem = (field, index, value) => {
        const newList = [...formData[field]];
        newList[index] = value;
        setFormData(prev => ({ ...prev, [field]: newList }));
    };

    const handlePublish = async () => {
        const dataToSave = { ...formData, templateId };
        localStorage.setItem(`published_${user.uid}`, JSON.stringify(dataToSave));
        localStorage.setItem(`published_${user.uid}_${templateId}`, JSON.stringify(dataToSave));
        setIsPublished(true);
    };

    const handleViewPortfolio = () => {
        const publishUrl = `/#/${user.uid}?template=${templateId}`;
        window.open(`${window.location.origin}${publishUrl}`, '_blank');
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete your published portfolio? This cannot be undone.")) {
            localStorage.removeItem(`published_${user.uid}`);
            localStorage.removeItem(`published_${user.uid}_${templateId}`);
            setIsPublished(false);
            alert("Published portfolio deleted.");
        }
    };

    const renderTemplate = () => {
        if (templateId === '1') {
            return <Template1 data={formData} />;
        }
        if (templateId === '2') {
            return <Template2 data={formData} />;
        }
        if (templateId === '3') {
            return <Template3 data={formData} />;
        }
        if (templateId === '4') {
            return <Template4 data={formData} />;
        }
        return <div className="template-mockup"><h1>Select a template</h1></div>;
    };

    const renderEditor = () => {
        const editorProps = { formData, handleChange, addListItem, removeListItem, updateListItem };
        if (templateId === '1') {
            return <Editor1 {...editorProps} />;
        }
        if (templateId === '2') {
            return <Editor2 {...editorProps} />;
        }
        if (templateId === '3') {
            return <Editor3 {...editorProps} />;
        }
        if (templateId === '4') {
            return <Editor4 {...editorProps} />;
        }
        return <Editor1 {...editorProps} />;
    };

    if (!user) return <div className="loading">Loading Editor...</div>;

    return (
        <div className={`editor-container ${activeView === 'preview' ? 'show-preview' : ''} ${isFullscreen ? 'fullscreen' : ''}`}>
            {/* View Toggle for Mobile */}
            <div className="mobile-view-toggle">
                <button
                    className={activeView === 'edit' ? 'active' : ''}
                    onClick={() => setActiveView('edit')}
                >
                    Edit
                </button>
                <button
                    className={activeView === 'preview' ? 'active' : ''}
                    onClick={() => setActiveView('preview')}
                >
                    Preview
                </button>
            </div>

            <div className="editor-sidebar">
                <div className="sidebar-header">
                    <h2>Edit Portfolio</h2>
                    <p>Customize and publish your site.</p>
                </div>

                <div className="editor-form">
                    {renderEditor()}
                </div>

                <div className="sidebar-footer">
                    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                className="publish-btn"
                                style={{ flex: 2 }}
                                onClick={handlePublish}
                            >
                                {isPublished ? '✓ Update Site' : 'Publish Site'}
                            </button>
                            {isPublished && (
                                <button
                                    className="delete-btn"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                        {isPublished && (
                            <button
                                className="view-portfolio-btn"
                                onClick={handleViewPortfolio}
                            >
                                👁 View My Portfolio
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="editor-preview">
                <div className="preview-browser-top">
                    <div className="dots">
                        <span></span><span></span><span></span>
                    </div>
                    <div className="address-bar">
                        {window.location.host}/#/{user?.uid}?template={templateId}
                    </div>
                    <button 
                        className="fullscreen-toggle-btn"
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Preview"}
                    >
                        {isFullscreen ? (
                            <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7"/></svg>
                                <span>Exit</span>
                            </>
                        ) : (
                            <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3M10 21V14H3M14 3v7h7"/></svg>
                                <span>Full Screen</span>
                            </>
                        )}
                    </button>
                </div>

                <div className="preview-content">
                    {renderTemplate()}
                </div>
            </div>
        </div>
    );
}

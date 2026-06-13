import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Template1 from '../templates/template1/Template1';
import Template2 from '../templates/template2/Template2';
import Template3 from '../templates/template3/Template3';
import Template4 from '../templates/template4/Template4';

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

export default function PublishedPage() {
    const { userId, email } = useParams();
    const [publishedData, setPublishedData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Parse templateId query param from hash string if present, otherwise standard query string
        const hashQuery = window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '';
        const searchParams = new URLSearchParams(hashQuery || window.location.search);
        const urlTemplateId = searchParams.get('template');
        
        const storageKey = urlTemplateId ? `published_${userId}_${urlTemplateId}` : `published_${userId}`;
        const savedData = localStorage.getItem(storageKey) || localStorage.getItem(`published_${userId}`);
        if (savedData) {
            const parsed = JSON.parse(savedData);
            
            const activeTid = urlTemplateId || parsed.templateId || '1';
            const activeDefaults = getTemplateDefaults(activeTid);
            const savedTid = parsed.templateId || '1';
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
                const val = parsed[key];
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

            setPublishedData({
                ...parsed,
                ...resolvedColors,
                templateId: activeTid,
                skills: (parsed.skills || []).map(s =>
                    typeof s === 'string' ? { name: s, level: 85 } : s
                ),
                typingRoles: parsed.typingRoles || [],
                projects: parsed.projects || [],
                experience: parsed.experience || [],
                stats: parsed.stats || [
                    { label: 'Projects Built', value: '10+' },
                    { label: 'Domains Explored', value: '3+' },
                    { label: 'Years of Learning', value: '2+' }
                ]
            });
        } else {
            // Fallback for demo when data is not found (public view without DB)
            const activeTid = urlTemplateId || '1';
            const activeDefaults = getTemplateDefaults(activeTid);
            setPublishedData({
                templateId: activeTid,
                name: 'Portfolio User',
                role: 'Published Developer',
                bio: 'This is a demo view. In a full version, this would load from a database.',
                email: '',
                ...activeDefaults,
                skills: [],
                projects: [],
                experience: [],
                stats: [
                    { label: 'Projects Built', value: '10+' },
                    { label: 'Domains Explored', value: '3+' },
                    { label: 'Years of Learning', value: '2+' }
                ]
            });
        }
        setLoading(false);
    }, [userId, email]);

    if (loading) return <div>Loading Portfolio...</div>;

    const tid = String(publishedData?.templateId || '1');

    return (
        <div className="published-page-wrapper">
            {tid === '1' && <Template1 data={publishedData} />}
            {tid === '2' && <Template2 data={publishedData} />}
            {tid === '3' && <Template3 data={publishedData} />}
            {tid === '4' && <Template4 data={publishedData} />}
        </div>
    );
}


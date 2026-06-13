import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function Template1({ data }) {
    const bgColor = data?.backgroundColor || '#05070d';

    return (
        <div className="template1-root" style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
            <Hero data={data} />
            <About data={data} />
            <Experience data={data} />
            <Contact data={data} />
        </div>
    );
}

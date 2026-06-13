import React from "react";
import "./Footer.css";

export default function Footer({ data }) {
    const accentColor = data.accentColor || "#00eaff";
    const currentYear = new Date().getFullYear();

    return (
        <footer className="t2-footer">
            <div className="container">
                <div className="t2-footer-content">
                    <div className="t2-footer-logo">
                        <span style={{ color: accentColor }}>P</span>ortfolio
                    </div>
                    <p className="t2-footer-bio">{data.bio}</p>
                    <div className="t2-footer-socials">
                        {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                        {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                    </div>
                    <div className="t2-footer-bottom">
                        <p>© {currentYear} {data.name}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

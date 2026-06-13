import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import heroDashboard from "../assets/hero-dashboard.png";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="home-container" id="home">
      <div className="hero-background">
        <div className="glow-c1"></div>
        <div className="glow-c2"></div>
      </div>

      <section className="hero">
        <div className="section-container">
          <div className="hero-layout">
            <div className="hero-content">
              <a href="https://discord.gg/mvqEakqfYv" target="_blank" rel="noopener noreferrer" className="announcement-pill">
                <span className="pill-tag">New</span>
                <span className="pill-text">Join our Discord Community</span>
                <svg className="pill-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>

              <h1 className="hero-title">
                Your Story, <br />
                <span className="accent-text">Perfectly</span> Presented.
              </h1>

              <p className="hero-subtitle">
                The ultimate platform for professionals to showcase their work.
                Build a stunning, high-converting portfolio in minutes, not days.
              </p>

              <div className="hero-cta-group">
                <Link to={isLoggedIn ? "/templates" : "/login"} className="btn-link-wrapper">
                  <button className="btn btn-primary btn-large">Start Building</button>
                </Link>
                <ScrollLink to="how-it-works" smooth={true} offset={-50} duration={500} className="btn-link-wrapper" style={{ cursor: 'pointer' }}>
                  <button className="btn btn-ghost">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    How it Works
                  </button>
                </ScrollLink>
              </div>

              <div className="hero-trust">
                <div className="trust-title">Built by the students </div>
                <div className="brand-strip">
                  <span>100+ users</span>
                  <span>3+ templates</span>

                </div>
              </div>
            </div>

            <div className="hero-visual-container">
              <div className="visual-frame">
                <img src={heroDashboard} alt="Aplora Dashboard Preview" className="hero-main-img" />
                <div className="glass-card floating-info">
                  <div className="info-icon">✨</div>
                  <div className="info-text">
                    <strong>Portfolio</strong>
                    <span>layout enabled</span>
                  </div>
                </div>
                <a href="https://discord.gg/mvqEakqfYv" target="_blank" rel="noopener noreferrer" className="glass-card floating-users" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="user-avatars">
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar-plus">+12</div>
                  </div>
                  <span>Join the community</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

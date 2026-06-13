import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./Temp.css";

import template1Img from "../assets/template1.png";
import template2Img from "../assets/template2.jpg";
import template3Img from "../assets/template3.png";

const templates = [
  { id: 1, name: "Aura Minimal", category: "Design", color: "#0d0f11", accent: "#000000", image: template1Img },
  { id: 2, name: "Neon Tech", category: "Development", color: "#0d0f11", accent: "#00eaff", image: template2Img },
  { id: 3, name: "Sleek Card Deck", category: "Designer", color: "#0b0c10", accent: "#3a86ff", image: template3Img },
];

export default function Templates() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="templates-section" id="templates">
      <div className="section-container">
        <div className="global-section-header">
          <h2 className="global-section-heading">Curated <span className="highlight">Templates</span></h2>
          <p className="global-section-subtitle">
            Choose from a collection of clean and modern portfolio templates designed for students,
            developers, and professionals.
          </p>
        </div>

        <div className="templates-grid">
          {templates.map((temp) => (
            <div className="template-card" key={temp.id}>
              <div className="template-preview" style={{ backgroundColor: temp.color, position: 'relative', overflow: 'hidden' }}>
                <img src={temp.image} alt={temp.name} className="template-preview-img" />

                <div className="preview-overlay">
                  <Link to={isLoggedIn ? `/editor/${temp.id}` : "/login"}>
                    <button className="btn btn-secondary">Try this</button>
                  </Link>
                </div>
              </div>
              <div className="template-info">
                <h3>{temp.name}</h3>
                <span>{temp.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="templates-footer">
          <p>Responsive • Customizable • Easy to Use</p>
          <Link to="/templates">
            <button className="btn btn-primary">Explore all templates</button>
          </Link>
        </div>
      </div>
    </section>
  );
}


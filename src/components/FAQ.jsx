import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
    {
        question: "Are the templates customizable?",
        answer: "Yes! Every template is fully customizable. You can change everything from colors and typography to the entire layout structure using our visual editor."
    },
    {
        question: "Will my portfolio work on all devices?",
        answer: "Absolutely. Every portfolio built with Aplora is automatically responsive and optimized for mobile, tablet, and desktop viewing."
    },
    {
        question: "Is this platform free to use?",
        answer: "We offer a generous free tier that allows you to build and preview your portfolio. For custom domains and advanced analytics, we have premium plans."
    },
    {
        question: "Do I need technical skills to use this website?",
        answer: "No coding or technical skills are required. Our intuitive drag-and-drop interface makes it easy for anyone to create a professional site."
    },
    {
        question: "What is Aplora and how to use it?",
        answer: "Aplora is a portfolio builder designed for professionals. To use it, simply choose a template, add your content, and click publish!"
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="section-container">
                <div className="faq-grid-container">
                    <div className="faq-intro-side">
                        <h2 className="global-section-heading">Frequently Asked <span className="highlight">Questions</span></h2>
                        <p className="global-section-subtitle">
                            Find answers to common questions about creating and managing your portfolio.
                        </p>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <span className="faq-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

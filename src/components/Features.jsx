import "./Features.css";

const features = [
    {
        title: "One-Click Generation",
        description: "Our AI-powered engine builds your base portfolio in seconds based on your profile.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
    },
    {
        title: "Live Preview",
        description: "See changes instantly as you edit. No more refreshing or waiting for builds.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
    },
    {
        title: "Premium Templates",
        description: "Choose from dozens of professionally designed layouts tailored for creatives.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
    },
    {
        title: "No Code Required",
        description: "Visual editing experience that anyone can use. Just drag, drop, and launch.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
    }
];

export default function Features() {
    return (
        <section className="features-section" id="features">
            <div className="section-container">
                <div className="global-section-header">
                    <h2 className="global-section-heading">Powerful Features to <span className="highlight">Build Fast</span></h2>
                    <p className="global-section-subtitle">
                        Everything you need to create a professional online portfolio effortlessly without technical hurdles.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, idx) => (
                        <div className="feature-card" key={idx}>
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

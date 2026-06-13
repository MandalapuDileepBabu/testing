import "./HowItWorks.css";

const steps = [
    {
        number: "01",
        title: "Choose Template",
        description: "Browse our collection of premium, professionally designed templates that match your personal brand.",
        side: "left"
    },
    {
        number: "02",
        title: "Customize Content",
        description: "Easily add your personal details, work experience, skills, and projects using our intuitive editor.",
        side: "right"
    },
    {
        number: "03",
        title: "Go Live",
        description: "Preview your portfolio in real-time and publish it to a custom URL with just one click.",
        side: "left"
    }
];

export default function HowItWorks() {
    return (
        <section className="how-it-works" id="how-it-works">
            <div className="section-container">
                <div className="global-section-header">
                    <h2 className="global-section-heading">How It <span className="highlight">Works</span></h2>
                    <p className="global-section-subtitle">
                        From sign-up to a live portfolio in just three simple steps.
                    </p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    <div className="steps-wrapper">
                        {steps.map((step, idx) => (
                            <div className={`step-item ${step.side}`} key={idx}>
                                <div className="step-card">
                                    <div className="step-number">{step.number}</div>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                </div>
                                <div className="step-dot"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

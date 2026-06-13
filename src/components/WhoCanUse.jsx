import "./WhoCanUse.css";
import starterImg from "../assets/starter.png";
import proImg from "../assets/pro.png";

export default function WhoCanUse() {
    return (
        <section className="who-can-use" id="who-can-use">
            <div className="section-container">
                <div className="global-section-header">
                    <h2 className="global-section-heading">Built for <span className="highlight">Everyone</span></h2>
                    <p className="global-section-subtitle">
                        Whether you're just starting your journey or leading the industry,
                        Aplora provides the tools to showcase your unique craft.
                    </p>
                </div>

                <div className="audience-wrapper">
                    <div className="audience-box">
                        <div className="audience-info">
                            <span className="audience-tag blue">Entry Level</span>
                            <h3 className="audience-category">Starting Out</h3>
                            <p className="audience-description">
                                Perfect for students and recent graduates looking to make a
                                powerful first impression in the job market.
                            </p>
                            <div className="tag-cloud">
                                <span className="pill-tag">Students</span>
                                <span className="pill-tag">Graduates</span>
                                <span className="pill-tag">Interns</span>
                            </div>
                        </div>
                        <div className="audience-visual">
                            <img src={starterImg} alt="Starting Out" className="audience-img" />
                            <div className="visual-glow blue"></div>
                        </div>
                    </div>

                    <div className="audience-box">
                        <div className="audience-info">
                            <span className="audience-tag purple">Experienced</span>
                            <h3 className="audience-category">Leveling Up</h3>
                            <p className="audience-description">
                                Designed for senior developers, designers, and freelancers
                                who need a sophisticated digital home for their high-end work.
                            </p>
                            <div className="tag-cloud">
                                <span className="pill-tag">Developers</span>
                                <span className="pill-tag">Designers</span>
                                <span className="pill-tag">Freelancers</span>
                            </div>
                        </div>
                        <div className="audience-visual">
                            <img src={proImg} alt="Leveling Up" className="audience-img" />
                            <div className="visual-glow purple"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

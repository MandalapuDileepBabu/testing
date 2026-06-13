import React from "react";
import { Link } from "react-router-dom";
import "./LegalPages.css";

export default function PrivacyPolicy() {
    const currentYear = new Date().getFullYear();
    const lastUpdated = "January 20, 2026";

    return (
        <div className="legal-page">
            <div className="legal-header">
                <Link to="/" className="back-link">← Back to Home</Link>
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: {lastUpdated}</p>
            </div>

            <div className="legal-content">
                <section>
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Aplora ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                    </p>
                    <p>
                        Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                    </p>
                </section>

                <section>
                    <h2>2. Information We Collect</h2>

                    <h3>2.1 Personal Information You Disclose to Us</h3>
                    <p>
                        We collect personal information that you voluntarily provide to us when you register on the Service, express an interest in obtaining information about us or our products and services, or otherwise contact us.
                    </p>
                    <p>
                        The personal information we collect may include:
                    </p>
                    <ul>
                        <li><strong>Name and Contact Data:</strong> Your first and last name, email address, and other similar contact data</li>
                        <li><strong>Credentials:</strong> Passwords, password hints, and similar security information used for authentication and account access</li>
                        <li><strong>Portfolio Content:</strong> Any information, text, graphics, photos, or other materials you upload to create your portfolio</li>
                        <li><strong>Payment Information:</strong> If applicable, payment card details and billing information (processed securely through third-party payment processors)</li>
                    </ul>

                    <h3>2.2 Information Automatically Collected</h3>
                    <p>
                        We automatically collect certain information when you visit, use, or navigate the Service. This information does not reveal your specific identity but may include:
                    </p>
                    <ul>
                        <li><strong>Log and Usage Data:</strong> Service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Service</li>
                        <li><strong>Device Data:</strong> Information about your computer, phone, tablet, or other device you use to access the Service</li>
                        <li><strong>Location Data:</strong> Information about your device's location, which can be either precise or imprecise</li>
                    </ul>

                    <h3>2.3 Information Collected Through Cookies and Similar Technologies</h3>
                    <p>
                        We use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
                    </p>
                </section>

                <section>
                    <h2>3. How We Use Your Information</h2>
                    <p>
                        We use personal information collected via our Service for a variety of business purposes described below:
                    </p>
                    <ul>
                        <li><strong>To facilitate account creation and authentication:</strong> We use your information to create and manage your user account</li>
                        <li><strong>To provide and maintain our Service:</strong> Including monitoring the usage of our Service</li>
                        <li><strong>To manage user accounts:</strong> We may use your information for the purposes of managing our relationship with you</li>
                        <li><strong>To send administrative information:</strong> Such as updates to our terms, conditions, and policies</li>
                        <li><strong>To protect our Services:</strong> We may use your information as part of our efforts to keep our Service safe and secure</li>
                        <li><strong>To enforce our terms and policies:</strong> For business purposes, to comply with legal requirements, or in connection with our contract</li>
                        <li><strong>To respond to legal requests:</strong> If required by law or in response to valid requests by public authorities</li>
                        <li><strong>For analytics and improvements:</strong> To understand how users interact with our Service and improve user experience</li>
                        <li><strong>To deliver targeted advertising:</strong> We may use your information to develop and display content and advertising tailored to your interests</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Google AdSense and Advertising</h2>
                    <p>
                        We use Google AdSense to display advertisements on our Service. Google AdSense is an advertising service provided by Google LLC.
                    </p>

                    <h3>4.1 How Google AdSense Works</h3>
                    <p>
                        Google AdSense uses "cookies" to help serve ads based on your prior visits to our website or other websites on the Internet. The use of advertising cookies enables Google and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
                    </p>

                    <h3>4.2 Your Choices Regarding Personalized Advertising</h3>
                    <p>
                        You may opt out of personalized advertising by visiting the following resources:
                    </p>
                    <ul>
                        <li><a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a></li>
                        <li><a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance (DAA) Consumer Choice Page</a></li>
                        <li><a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative (NAI) Opt-Out Page</a></li>
                    </ul>

                    <h3>4.3 Third-Party Advertising Partners</h3>
                    <p>
                        We may also work with other third-party advertising partners who use cookies and similar technologies to provide more relevant advertising about our services on our website and across the internet. These partners may collect information about your online activities over time and across different websites.
                    </p>
                </section>

                <section>
                    <h2>5. Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track activity on our Service and store certain information. Tracking technologies used include beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
                    </p>

                    <h3>5.1 Types of Cookies We Use</h3>
                    <ul>
                        <li><strong>Essential Cookies:</strong> Required for the operation of our Service. These include cookies that enable you to log into secure areas</li>
                        <li><strong>Analytics Cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our Service</li>
                        <li><strong>Functionality Cookies:</strong> Used to recognize you when you return to our Service and personalize content</li>
                        <li><strong>Advertising Cookies:</strong> Used to deliver advertisements more relevant to you and your interests</li>
                    </ul>

                    <h3>5.2 Managing Cookies</h3>
                    <p>
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    </p>
                </section>

                <section>
                    <h2>6. How We Share Your Information</h2>
                    <p>
                        We may process or share data based on the following legal basis:
                    </p>
                    <ul>
                        <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose</li>
                        <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests</li>
                        <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract</li>
                        <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law</li>
                    </ul>

                    <h3>6.1 Third-Party Service Providers</h3>
                    <p>
                        We may share your information with third-party service providers who perform services on our behalf, including:
                    </p>
                    <ul>
                        <li>Payment processing</li>
                        <li>Data analysis</li>
                        <li>Email delivery</li>
                        <li>Hosting services</li>
                        <li>Customer service</li>
                        <li>Marketing assistance</li>
                    </ul>
                </section>

                <section>
                    <h2>7. Data Retention</h2>
                    <p>
                        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.
                    </p>
                    <p>
                        When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible, we will securely store your personal information and isolate it from any further processing until deletion is possible.
                    </p>
                </section>

                <section>
                    <h2>8. Data Security</h2>
                    <p>
                        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                    </p>
                    <p>
                        We implement security measures including:
                    </p>
                    <ul>
                        <li>Encryption of data in transit and at rest</li>
                        <li>Regular security assessments</li>
                        <li>Access controls and authentication</li>
                        <li>Secure password storage</li>
                        <li>Regular backups</li>
                    </ul>
                </section>

                <section>
                    <h2>9. Your Privacy Rights</h2>
                    <p>
                        Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <ul>
                        <li><strong>Right to Access:</strong> You have the right to request copies of your personal information</li>
                        <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or incomplete</li>
                        <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal information, under certain conditions</li>
                        <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal information, under certain conditions</li>
                        <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal information, under certain conditions</li>
                        <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions</li>
                    </ul>
                    <p>
                        To exercise any of these rights, please contact us through our <Link to="/#contact">Contact page</Link>.
                    </p>
                </section>

                <section>
                    <h2>10. Children's Privacy</h2>
                    <p>
                        Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
                    </p>
                    <p>
                        If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.
                    </p>
                </section>

                <section>
                    <h2>11. International Data Transfers</h2>
                    <p>
                        Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                    </p>
                    <p>
                        We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.
                    </p>
                </section>

                <section>
                    <h2>12. Do Not Track Signals</h2>
                    <p>
                        Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals.
                    </p>
                </section>

                <section>
                    <h2>13. California Privacy Rights (CCPA)</h2>
                    <p>
                        If you are a California resident, you have specific rights regarding access to your personal information. California Civil Code Section 1798.83 permits users who are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes.
                    </p>
                </section>

                <section>
                    <h2>14. GDPR Compliance (European Users)</h2>
                    <p>
                        If you are located in the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.
                    </p>
                </section>

                <section>
                    <h2>15. Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
                    </p>
                    <p>
                        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                </section>

                <section>
                    <h2>16. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us through our <Link to="/#contact">Contact page</Link>.
                    </p>
                    <p>
                        We are committed to resolving complaints about your privacy and our collection or use of your personal information.
                    </p>
                </section>

                <div className="legal-footer">
                    <p>© {currentYear} Aplora. All rights reserved.</p>
                    <div className="legal-links">
                        <Link to="/terms-and-conditions">Terms and Conditions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

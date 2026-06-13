import React from "react";
import { Link } from "react-router-dom";
import "./LegalPages.css";

export default function TermsAndConditions() {
    const currentYear = new Date().getFullYear();
    const lastUpdated = "January 20, 2026";

    return (
        <div className="legal-page">
            <div className="legal-header">
                <Link to="/" className="back-link">← Back to Home</Link>
                <h1>Terms and Conditions</h1>
                <p className="last-updated">Last Updated: {lastUpdated}</p>
            </div>

            <div className="legal-content">
                <section>
                    <h2>1. Agreement to Terms</h2>
                    <p>
                        By accessing and using Aplora ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                </section>

                <section>
                    <h2>2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials on Aplora's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul>
                        <li>Modify or copy the materials</li>
                        <li>Use the materials for any commercial purpose or for any public display</li>
                        <li>Attempt to reverse engineer any software contained on Aplora's website</li>
                        <li>Remove any copyright or other proprietary notations from the materials</li>
                        <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                    </ul>
                    <p>
                        This license shall automatically terminate if you violate any of these restrictions and may be terminated by Aplora at any time.
                    </p>
                </section>

                <section>
                    <h2>3. User Accounts</h2>
                    <p>
                        When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>
                    <p>
                        You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.
                    </p>
                </section>

                <section>
                    <h2>4. Intellectual Property Rights</h2>
                    <p>
                        The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Aplora and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                    </p>
                    <p>
                        Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Aplora.
                    </p>
                </section>

                <section>
                    <h2>5. User-Generated Content</h2>
                    <p>
                        Our Service allows you to create, post, store, and share content, including but not limited to portfolio websites, text, graphics, and other materials ("User Content"). You retain all rights to your User Content.
                    </p>
                    <p>
                        By posting User Content on or through the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content solely for the purpose of operating and providing the Service.
                    </p>
                    <p>
                        You represent and warrant that:
                    </p>
                    <ul>
                        <li>You own or have the necessary rights to use and authorize us to use all User Content</li>
                        <li>Your User Content does not violate any third-party rights, including intellectual property rights</li>
                        <li>Your User Content does not contain any defamatory, obscene, or illegal material</li>
                    </ul>
                </section>

                <section>
                    <h2>6. Prohibited Uses</h2>
                    <p>
                        You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
                    </p>
                    <ul>
                        <li>In any way that violates any applicable national or international law or regulation</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
                        <li>To impersonate or attempt to impersonate Aplora, an Aplora employee, another user, or any other person or entity</li>
                        <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                        <li>To upload or transmit viruses or any other type of malicious code</li>
                    </ul>
                </section>

                <section>
                    <h2>7. Third-Party Services and Advertising</h2>
                    <p>
                        Our Service may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services, or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties.
                    </p>
                    <p>
                        <strong>Google AdSense:</strong> We use Google AdSense to display advertisements on our Service. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a>.
                    </p>
                </section>

                <section>
                    <h2>8. Disclaimer of Warranties</h2>
                    <p>
                        The materials on Aplora's website are provided on an 'as is' basis. Aplora makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                    <p>
                        Further, Aplora does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                    </p>
                </section>

                <section>
                    <h2>9. Limitation of Liability</h2>
                    <p>
                        In no event shall Aplora or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aplora's website, even if Aplora or an authorized representative has been notified orally or in writing of the possibility of such damage.
                    </p>
                </section>

                <section>
                    <h2>10. Indemnification</h2>
                    <p>
                        You agree to defend, indemnify, and hold harmless Aplora and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from:
                    </p>
                    <ul>
                        <li>Your use of and access to the Service</li>
                        <li>Your violation of any term of these Terms</li>
                        <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                        <li>Any claim that your User Content caused damage to a third party</li>
                    </ul>
                </section>

                <section>
                    <h2>11. Termination</h2>
                    <p>
                        We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                    </p>
                    <p>
                        If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
                    </p>
                    <p>
                        All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                    </p>
                </section>

                <section>
                    <h2>12. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </p>
                    <p>
                        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                    </p>
                </section>

                <section>
                    <h2>13. Changes to Terms</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                    <p>
                        By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                    </p>
                </section>

                <section>
                    <h2>14. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms and Conditions, please contact us through our <Link to="/#contact">Contact page</Link>.
                    </p>
                </section>

                <div className="legal-footer">
                    <p>© {currentYear} Aplora. All rights reserved.</p>
                    <div className="legal-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

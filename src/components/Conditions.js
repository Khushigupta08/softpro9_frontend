import './Policies.css';
import ScrollArrowButton from './ScrollArrowButton';

export default function Conditions() {
  return (
    <>
              <ScrollArrowButton />

    <div className="terms-container min-h-screen mt-5">
     {/* Header  */}
    <div className="terms-header bg-gradient-to-r from-blue-600 to-blue-500 text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-center">Terms-Conditions</h1>
            <p className="text-center mt-4 text-blue-100 text-lg">SoftPro9 IT Services - Your Agreement with Us</p>
            <div className="terms-divider mt-6"></div>
        </div>
    </div>

     {/* Main Content  */}
    <div className="max-w-4xl mx-auto px-6 py-8">
         {/* Effective Dates */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <div className="terms-highlight p-4 rounded-lg">
                <p className="text-gray-700"><strong>Effective Date:</strong> 01 October 2025</p>
                <p className="text-gray-700"><strong>Last Updated:</strong> 01 October 2025</p>
            </div>
        </div>

         {/* Introduction  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Introduction</h2>
            <div className="terms-accent p-4 rounded-lg">
                <p className="text-gray-700 mb-4">
                    Welcome to SoftPro9 IT Services ("SoftPro9," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of our websites, platforms, applications, and IT services, including but not limited to web and app development, digital marketing with AI, SAP consulting services, recruitment, and related technology solutions (collectively, the "Services").
                </p>
                <div className="terms-warning p-4 rounded-lg">
                    <p className="text-gray-700 font-semibold">
                        <strong>By using our Services, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree, you must discontinue use immediately.</strong>
                    </p>
                </div>
            </div>
        </div>

        {/* About SoftPro9  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">About SoftPro9</h2>
            <div className="terms-highlight p-4 rounded-lg">
                <p className="text-gray-700 mb-4">
                    SoftPro9 IT Services is a professional IT consulting and digital solutions company based in Bangalore, India, providing technology-driven services to global clients. These Terms establish the legal rights and obligations between you ("Client," "User," "Customer," or "You") and SoftPro9.
                </p>
                <p className="text-blue-700 font-semibold">
                    We strongly advise you to read these Terms carefully before engaging with our Services.
                </p>
            </div>
        </div>

         {/* Scope of Services  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Scope of Services</h2>
            <p className="text-gray-700 mb-4">SoftPro9 provides the following services:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
                <div className="terms-highlight p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3">Development Services</h3>
                    <ul className="space-y-2">
                        <li className="terms-list-item text-gray-700 text-sm">Advanced Web Development</li>
                        <li className="terms-list-item text-gray-700 text-sm">Mobile App Development</li>
                        <li className="terms-list-item text-gray-700 text-sm">Enterprise Applications</li>
                    </ul>
                </div>
                
                <div className="terms-highlight p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3">Digital Marketing</h3>
                    <ul className="space-y-2">
                        <li className="terms-list-item text-gray-700 text-sm">SEO, SEM, SMM</li>
                        <li className="terms-list-item text-gray-700 text-sm">Content Marketing</li>
                        <li className="terms-list-item text-gray-700 text-sm">AI-powered Analytics</li>
                    </ul>
                </div>
                
                <div className="terms-highlight p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3">SAP Consulting</h3>
                    <ul className="space-y-2">
                        <li className="terms-list-item text-gray-700 text-sm">SAP Implementation</li>
                        <li className="terms-list-item text-gray-700 text-sm">Migration & Support</li>
                        <li className="terms-list-item text-gray-700 text-sm">Specialized Modules</li>
                    </ul>
                </div>
                
                <div className="terms-highlight p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3">Other Services</h3>
                    <ul className="space-y-2">
                        <li className="terms-list-item text-gray-700 text-sm">Recruitment & Staffing</li>
                        <li className="terms-list-item text-gray-700 text-sm">Corporate IT Solutions</li>
                        <li className="terms-list-item text-gray-700 text-sm">Digital Transformation</li>
                    </ul>
                </div>
            </div>
            
            <div className="terms-accent p-3 rounded-lg mt-4">
                <p className="text-gray-600 text-sm italic">We may enhance, modify, or discontinue any services at our discretion.</p>
            </div>
        </div>

        {/* Eligibility  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Eligibility</h2>
            <div className="terms-success p-4 rounded-lg">
                <p className="text-gray-700 mb-4">By using our Services, you confirm that you:</p>
                <ul className="space-y-2">
                    <li className="terms-list-item text-gray-700">Are 18 years of age or older (or legal majority in your jurisdiction)</li>
                    <li className="terms-list-item text-gray-700">Have the authority to enter into legally binding agreements</li>
                    <li className="terms-list-item text-gray-700">Provide accurate and current information</li>
                    <li className="terms-list-item text-gray-700">If using Services on behalf of a business, you confirm you are authorized to bind the business to these Terms</li>
                </ul>
            </div>
        </div>

         {/* User Responsibilities  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">User Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="terms-success p-4 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-3">You Agree To:</h3>
                    <ul className="space-y-2">
                        <li className="terms-list-item text-gray-700 text-sm">Use our Services only for lawful purposes</li>
                        <li className="terms-list-item text-gray-700 text-sm">Provide correct, complete, and updated information</li>
                        <li className="terms-list-item text-gray-700 text-sm">Maintain confidentiality of account credentials</li>
                        <li className="terms-list-item text-gray-700 text-sm">Not engage in fraudulent, abusive, or harmful activities</li>
                        <li className="terms-list-item text-gray-700 text-sm">Comply with all applicable laws</li>
                    </ul>
                </div>
                
                <div className="terms-warning p-4 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-3">Prohibited Activities:</h3>
                    <ul className="space-y-2">
                        <li className="terms-list-item text-gray-700 text-sm">Unauthorized access to our systems</li>
                        <li className="terms-list-item text-gray-700 text-sm">Spreading spam, malware, or unlawful content</li>
                        <li className="terms-list-item text-gray-700 text-sm">Misusing, reselling, or exploiting Services</li>
                        <li className="terms-list-item text-gray-700 text-sm">Infringing intellectual property rights</li>
                        <li className="terms-list-item text-gray-700 text-sm">Disrupting service performance or security</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Account Registration  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Account Registration & Security</h2>
            <div className="terms-accent p-4 rounded-lg">
                <p className="text-gray-700 mb-4">Certain Services require account registration. You are responsible for:</p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="terms-highlight p-3 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2 text-sm">Security</h3>
                        <p className="text-gray-700 text-sm">Keeping login credentials secure</p>
                    </div>
                    <div className="terms-highlight p-3 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2 text-sm">Monitoring</h3>
                        <p className="text-gray-700 text-sm">Notifying us of unauthorized activity</p>
                    </div>
                    <div className="terms-highlight p-3 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2 text-sm">Accountability</h3>
                        <p className="text-gray-700 text-sm">All activities under your account</p>
                    </div>
                </div>
                <div className="terms-warning p-3 rounded-lg mt-4">
                    <p className="text-gray-700 text-sm">SoftPro9 reserves the right to suspend accounts for suspicious or unlawful use.</p>
                </div>
            </div>
        </div>

         {/* Payment Terms  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Payment Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="terms-highlight p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3">Payment Structure</h3>
                    <ul className="space-y-2">
                        <li className="terms-list-item text-gray-700 text-sm"><strong>Fees:</strong> Payable in advance or per milestones</li>
                        <li className="terms-list-item text-gray-700 text-sm"><strong>Invoices:</strong> Due within 7–30 days</li>
                        <li className="terms-list-item text-gray-700 text-sm"><strong>Taxes:</strong> Client responsibility</li>
                    </ul>
                </div>
                <div className="terms-warning p-4 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-3">Late Payment Policy</h3>
                    <ul className="space-y-2">
                        <li className="terms-list-item text-gray-700 text-sm">Service suspension possible</li>
                        <li className="terms-list-item text-gray-700 text-sm">Interest charges may apply</li>
                        <li className="terms-list-item text-gray-700 text-sm">Refunds per SoftPro9 policy</li>
                    </ul>
                </div>
            </div>
        </div>

         {/* Intellectual Property  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Intellectual Property Rights</h2>
            <div className="terms-accent p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="terms-highlight p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-3">SoftPro9 Ownership</h3>
                        <p className="text-gray-700 text-sm mb-2">All IP created by SoftPro9 remains our property until full payment:</p>
                        <ul className="space-y-1">
                            <li className="terms-list-item text-gray-700 text-xs">Code & Designs</li>
                            <li className="terms-list-item text-gray-700 text-xs">Strategies & Training Materials</li>
                            <li className="terms-list-item text-gray-700 text-xs">Proprietary Methodologies</li>
                        </ul>
                    </div>
                    <div className="terms-success p-4 rounded-lg">
                        <h3 className="font-semibold text-green-700 mb-3">Client Ownership</h3>
                        <p className="text-gray-700 text-sm mb-2">Clients retain ownership of:</p>
                        <ul className="space-y-1">
                            <li className="terms-list-item text-gray-700 text-xs">Their own data</li>
                            <li className="terms-list-item text-gray-700 text-xs">Trademarks & brand assets</li>
                            <li className="terms-list-item text-gray-700 text-xs">Pre-existing content</li>
                        </ul>
                    </div>
                </div>
                <div className="terms-warning p-3 rounded-lg mt-4">
                    <p className="text-gray-700 text-sm">Unauthorized use, copying, or resale of our proprietary assets is strictly prohibited.</p>
                </div>
            </div>
        </div>

         {/* Confidentiality  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Confidentiality</h2>
            <div className="terms-success p-4 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-3">Mutual Agreement</h3>
                <p className="text-gray-700 mb-4">Both SoftPro9 and clients agree to maintain confidentiality of business, financial, and technical information.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="terms-highlight p-3 rounded-lg">
                        <h4 className="font-semibold text-blue-700 text-sm mb-2">Protection</h4>
                        <p className="text-gray-700 text-xs">Confidential data will not be shared with third parties without prior consent</p>
                    </div>
                    <div className="terms-highlight p-3 rounded-lg">
                        <h4 className="font-semibold text-blue-700 text-sm mb-2">Duration</h4>
                        <p className="text-gray-700 text-xs">Confidentiality obligations survive termination of services</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Service Specific Terms  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Service-Specific Terms</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="terms-accent p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3">Recruitment Services</h3>
                    <ul className="space-y-2">
                        <li className="terms-list-item text-gray-700 text-sm">Candidates must provide accurate credentials</li>
                        <li className="terms-list-item text-gray-700 text-sm">Employers agree to use candidate data responsibly</li>
                        <li className="terms-list-item text-gray-700 text-sm">No guarantee of employment outcomes</li>
                        <li className="terms-list-item text-gray-700 text-sm">Background checks may be performed</li>
                    </ul>
                </div>
                <div className="terms-accent p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3">Digital Marketing</h3>
                    <ul className="space-y-2">
                        <li className="terms-list-item text-gray-700 text-sm">Marketing outcomes not guaranteed</li>
                        <li className="terms-list-item text-gray-700 text-sm">Clients must provide accurate brand inputs</li>
                        <li className="terms-list-item text-gray-700 text-sm">Advertising spend billed separately</li>
                        <li className="terms-list-item text-gray-700 text-sm">Results influenced by external factors</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Limitation of Liability  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Limitation of Liability</h2>
            <div className="terms-warning p-4 rounded-lg">
                <h3 className="font-semibold text-red-700 mb-3">To the maximum extent permitted by law:</h3>
                <ul className="space-y-3">
                    <li className="terms-list-item text-gray-700">SoftPro9 is not liable for indirect, incidental, or consequential damages</li>
                    <li className="terms-list-item text-gray-700">Our liability shall not exceed the amount paid for services in the last 12 months</li>
                    <li className="terms-list-item text-gray-700">We are not liable for data loss, security breaches, or external disruptions</li>
                </ul>
            </div>
        </div>

         {/* Dispute Resolution  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Dispute Resolution</h2>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="terms-success p-4 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-2 text-sm">Step 1: Negotiation</h3>
                    <p className="text-gray-700 text-sm">Both parties will first attempt amicable resolution</p>
                </div>
                <div className="terms-highlight p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-2 text-sm">Step 2: Arbitration</h3>
                    <p className="text-gray-700 text-sm">Arbitration in Bangalore under Arbitration Act, 1996</p>
                </div>
                <div className="terms-accent p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-2 text-sm">Jurisdiction</h3>
                    <p className="text-gray-700 text-sm">Courts in Bangalore, Karnataka, India have exclusive jurisdiction</p>
                </div>
            </div>
        </div>

         {/* Governing Law  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Governing Law & Updates</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="terms-highlight p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3">Governing Law</h3>
                    <p className="text-gray-700 text-sm">These Terms are governed by the laws of India, without regard to conflicts of law principles.</p>
                </div>
                <div className="terms-accent p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3">Modifications</h3>
                    <p className="text-gray-700 text-sm">SoftPro9 may update these Terms. Updates will be posted with a revised "Effective Date." Continued use means acceptance.</p>
                </div>
            </div>
        </div>

        {/* Contact Information  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="terms-heading text-2xl font-bold mb-4">Contact Us</h2>
            <div className="terms-accent p-6 rounded-lg">
                <p className="text-gray-700 mb-4">For any questions regarding these Terms, please contact us:</p>
                <div className="terms-highlight p-4 rounded-lg">
                    <div className="text-blue-700 font-semibold mb-3">SoftPro9 IT Services</div>
                    <div className="space-y-2 text-gray-700">
                        <p><strong>Address:</strong> No. 112, 2nd Floor, Koramangala, 7th Block, Bangalore – 560095, Karnataka, India</p>
                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="terms-success p-3 rounded-lg">
                                <p><strong>📧 Email:</strong><br/>legal@softpro9.com</p>
                            </div>
                            <div className="terms-success p-3 rounded-lg">
                                <p><strong>📞 Phone:</strong><br/>+91-98765-43210</p>
                            </div>
                            <div className="terms-success p-3 rounded-lg">
                                <p><strong>🌐 Website:</strong><br/>www.softpro9.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Important Notice  */}
        <div className="terms-section terms-card rounded-lg p-6 mb-8 transition-all duration-300">
            <div className="terms-warning p-6 rounded-lg text-center">
                <h3 className="font-semibold text-red-700 mb-3">Important Notice</h3>
                <p className="text-gray-700">These Terms constitute the entire agreement between you and SoftPro9. Please read carefully and contact us if you have any questions before using our services.</p>
            </div>
        </div>
    </div>

     {/* Footer  */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 text-center">
        <p className="text-blue-100">&copy; 2025 SoftPro9 IT Services. All rights reserved.</p>
        <p className="text-blue-200 text-sm mt-2">Terms & Conditions • Legal Agreement</p>
    </div>

    </div>
    </>
  )
}

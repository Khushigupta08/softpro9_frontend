import './Policies.css';
import { Helmet } from 'react-helmet-async';
import ScrollArrowButton from './ScrollArrowButton';

export default function Policy() {
  return (
    <>
              <ScrollArrowButton />

    <Helmet>
                <title>Privacy Policy - Softpro9</title>
                <meta name="description" content="Our privacy policies" />
            </Helmet>
    <div className="privacypolicy-container min-h-screen mt-5">    
        {/* Header  */}
        <div className="privacypolicy-header bg-gradient-to-r from-blue-600 to-blue-500 text-white py-10">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-center">Privacy-Policy</h1>
                <p className="text-center mt-4 text-blue-100 text-lg">SoftPro9 IT Services - Protecting Your Data with Care</p>
                <div className="privacypolicy-divider mt-6"></div>
            </div>
        </div>

        {/* Main Content  */}
        <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Effective Date  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <div className="privacypolicy-highlight p-4 rounded-lg">
                    <p className="text-gray-700"><strong>Effective Date:</strong> [Insert Date]</p>
                    <p className="text-gray-700"><strong>Last Updated:</strong> [Insert Date]</p>
                </div>
            </div>

            {/* Introduction  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">Introduction</h2>
                <div className="privacypolicy-accent p-4 rounded-lg">
                    <p className="text-gray-700 mb-4">
                        SoftPro9 IT Services ("SoftPro9," "we," "our," or "us") values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, share, and safeguard your information when you use our websites, applications, products, services, and solutions (collectively, the "Services").
                    </p>
                    <p className="text-gray-700">
                        <strong>By accessing or using our Services, you acknowledge that you have read, understood, and agree to this Privacy Policy.</strong>
                    </p>
                </div>
            </div>

            {/* About SoftPro9  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">About SoftPro9 IT Services</h2>
                <p className="text-gray-700 mb-4">
                    SoftPro9 IT Services is a global provider of IT solutions including advanced web and app development, digital marketing with AI, SAP consulting services, and recruitment. In the course of delivering these services, we may collect and process personal information from clients, employees, partners, vendors, and website visitors.
                </p>
                <div className="privacypolicy-highlight p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                        We recognize the importance of safeguarding data in an era where digital trust is essential. This Privacy Policy outlines our practices in compliance with applicable data protection laws, including:
                    </p>
                    <ul className="space-y-2">
                        <li className="privacypolicy-list-item text-gray-700">General Data Protection Regulation (GDPR) – EU Regulation (EU) 2016/679</li>
                        <li className="privacypolicy-list-item text-gray-700">California Consumer Privacy Act (CCPA)</li>
                        <li className="privacypolicy-list-item text-gray-700">India Digital Personal Data Protection Act (DPDPA), 2023</li>
                        <li className="privacypolicy-list-item text-gray-700">Other applicable international privacy and security regulations</li>
                    </ul>
                </div>
            </div>

            {/* Scope of Policy  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">Scope of Policy</h2>
                <p className="text-gray-700 mb-4">This Privacy Policy applies to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="privacypolicy-highlight p-4 rounded-lg">
                        <ul className="space-y-2">
                            <li className="privacypolicy-list-item text-gray-700">Visitors to our websites (e.g., softpro9.com)</li>
                            <li className="privacypolicy-list-item text-gray-700">Users of our web and mobile applications</li>
                            <li className="privacypolicy-list-item text-gray-700">Clients, partners, vendors, contractors, and employees</li>
                        </ul>
                    </div>
                    <div className="privacypolicy-highlight p-4 rounded-lg">
                        <ul className="space-y-2">
                            <li className="privacypolicy-list-item text-gray-700">Applicants engaging with us for recruitment or training opportunities</li>
                            <li className="privacypolicy-list-item text-gray-700">All digital marketing campaigns, including email, WhatsApp, and social media channels managed by SoftPro9</li>
                        </ul>
                    </div>
                </div>
                <p className="text-gray-600 mt-4 italic">It does not apply to third-party websites, platforms, or applications that may be linked to our Services.</p>
            </div>

            {/* Definitions  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">Definitions</h2>
                <p className="text-gray-700 mb-4">To ensure clarity, the following terms are used in this policy:</p>
                <div className="space-y-4">
                    <div className="privacypolicy-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2">Personal Data</h3>
                        <p className="text-gray-700">Any information relating to an identified or identifiable natural person (e.g., name, email address, phone number).</p>
                    </div>
                    <div className="privacypolicy-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2">Processing</h3>
                        <p className="text-gray-700">Any operation performed on data, including collection, storage, use, sharing, and deletion.</p>
                    </div>
                    <div className="privacypolicy-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2">Controller</h3>
                        <p className="text-gray-700">Entity that determines the purpose and means of processing personal data (SoftPro9 acts as a controller for most client and employee data).</p>
                    </div>
                </div>
            </div>

            {/* Information We Collect  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-6">We collect different categories of data to deliver our Services effectively:</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="privacypolicy-highlight p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-3">Personal Data</h3>
                        <ul className="space-y-2">
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Full name, contact details</li>
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Job title, company name</li>
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Billing and payment details</li>
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Login credentials</li>
                        </ul>
                    </div>
                    
                    <div className="privacypolicy-highlight p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-3">Non-Personal Data</h3>
                        <ul className="space-y-2">
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Browser type, OS, device info</li>
                            <li className="privacypolicy-list-item text-gray-700 text-sm">IP addresses and location</li>
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Usage data and patterns</li>
                        </ul>
                    </div>
                    
                    <div className="privacypolicy-highlight p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-3">Sensitive Information</h3>
                        <p className="text-gray-700 text-sm mb-2">Only where required:</p>
                        <ul className="space-y-2">
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Government-issued IDs</li>
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Bank account details</li>
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Professional qualifications</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* How We Collect Information  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">How We Collect Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="privacypolicy-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-3">Direct Interactions</h3>
                        <p className="text-gray-700 text-sm">Filling forms on our website, requesting proposals, applying for jobs, or contacting support.</p>
                    </div>
                    <div className="privacypolicy-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-3">Automated Technologies</h3>
                        <p className="text-gray-700 text-sm">Cookies, analytics tools, AI-driven behavior tracking.</p>
                    </div>
                    <div className="privacypolicy-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-3">Third-Party Sources</h3>
                        <p className="text-gray-700 text-sm">Recruitment portals, marketing partners, SAP partners, and business affiliates.</p>
                    </div>
                    <div className="privacypolicy-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-3">Employee Records</h3>
                        <p className="text-gray-700 text-sm">HR, payroll, and performance management systems.</p>
                    </div>
                </div>
            </div>

            {/* Purpose of Data Collection  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">Purpose of Data Collection & Use</h2>
                <p className="text-gray-700 mb-4">We process personal data for legitimate business purposes, including:</p>
                <div className="privacypolicy-highlight p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-3">
                            <li className="privacypolicy-list-item text-gray-700"><strong>Service Delivery</strong> – To provide IT consulting, development, and recruitment services.</li>
                            <li className="privacypolicy-list-item text-gray-700"><strong>Communication</strong> – To respond to inquiries, send updates, and manage client relationships.</li>
                            <li className="privacypolicy-list-item text-gray-700"><strong>Billing & Payments</strong> – To process transactions securely.</li>
                            <li className="privacypolicy-list-item text-gray-700"><strong>Marketing & Promotions</strong> – To share updates about SoftPro9's services and industry insights.</li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="privacypolicy-list-item text-gray-700"><strong>Recruitment & Employment</strong> – To evaluate candidates, manage HR processes, and maintain employee records.</li>
                            <li className="privacypolicy-list-item text-gray-700"><strong>Compliance</strong> – To adhere to legal, tax, and regulatory obligations.</li>
                            <li className="privacypolicy-list-item text-gray-700"><strong>Security & Fraud Prevention</strong> – To detect, investigate, and prevent malicious activities.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Legal Basis  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">Legal Basis for Processing Data</h2>
                <p className="text-gray-700 mb-4">Our processing of data is based on one or more of the following legal grounds:</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="privacypolicy-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2">Consent</h3>
                        <p className="text-gray-700 text-sm">Provided by users for marketing or communication.</p>
                    </div>
                    <div className="privacypolicy-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2">Contractual Necessity</h3>
                        <p className="text-gray-700 text-sm">To deliver agreed-upon services.</p>
                    </div>
                    <div className="privacypolicy-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2">Legal Obligations</h3>
                        <p className="text-gray-700 text-sm">To comply with statutory requirements.</p>
                    </div>
                    <div className="privacypolicy-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2">Legitimate Interests</h3>
                        <p className="text-gray-700 text-sm">For business operations, analytics, and improving services.</p>
                    </div>
                </div>
            </div>

            {/* Cookies & Tracking  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">Cookies & Tracking Technologies</h2>
                <div className="privacypolicy-highlight p-4 rounded-lg">
                    <p className="text-gray-700 mb-4">We use cookies and tracking tools for:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                            <li className="privacypolicy-list-item text-gray-700">Remembering user preferences</li>
                            <li className="privacypolicy-list-item text-gray-700">Analyzing website performance</li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="privacypolicy-list-item text-gray-700">Enabling secure login sessions</li>
                            <li className="privacypolicy-list-item text-gray-700">Targeted advertising campaigns</li>
                        </ul>
                    </div>
                    <p className="text-gray-600 mt-4 text-sm italic">Users can manage cookie preferences through browser settings or opt-out tools.</p>
                </div>
            </div>

            {/* Data Sharing  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">Sharing of Information</h2>
                <div className="privacypolicy-accent p-4 rounded-lg mb-4">
                    <p className="text-blue-700 font-semibold">We do not sell or rent personal data.</p>
                </div>
                <p className="text-gray-700 mb-4">However, we may share data with:</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="privacypolicy-highlight p-3 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2 text-sm">Service Providers</h3>
                        <p className="text-gray-700 text-sm">Payment processors, cloud hosting, marketing tools</p>
                    </div>
                    <div className="privacypolicy-highlight p-3 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2 text-sm">Business Partners</h3>
                        <p className="text-gray-700 text-sm">SAP alliances, digital agencies, recruiters</p>
                    </div>
                    <div className="privacypolicy-highlight p-3 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2 text-sm">Legal Authorities</h3>
                        <p className="text-gray-700 text-sm">When required by law or regulatory obligations</p>
                    </div>
                    <div className="privacypolicy-highlight p-3 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2 text-sm">Corporate Transactions</h3>
                        <p className="text-gray-700 text-sm">In the event of mergers, acquisitions, or restructuring</p>
                    </div>
                </div>
            </div>

            {/* Data Security  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">Data Security Measures</h2>
                <p className="text-gray-700 mb-4">We implement technical, administrative, and organizational safeguards, including:</p>
                <div className="privacypolicy-highlight p-4 rounded-lg">
                    <ul className="space-y-3">
                        <li className="privacypolicy-list-item text-gray-700">Encryption of sensitive data in transit and at rest</li>
                        <li className="privacypolicy-list-item text-gray-700">Multi-factor authentication for systems access</li>
                        <li className="privacypolicy-list-item text-gray-700">Regular vulnerability assessments and penetration tests</li>
                        <li className="privacypolicy-list-item text-gray-700">Employee training on cybersecurity best practices</li>
                    </ul>
                </div>
            </div>

            {/* User Rights  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">Depending on applicable law, users have the following rights:</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="privacypolicy-highlight p-4 rounded-lg">
                        <ul className="space-y-2">
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Right to access personal data</li>
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Right to rectify incorrect information</li>
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Right to erasure (Right to be Forgotten)</li>
                        </ul>
                    </div>
                    <div className="privacypolicy-highlight p-4 rounded-lg">
                        <ul className="space-y-2">
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Right to restrict processing</li>
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Right to data portability</li>
                            <li className="privacypolicy-list-item text-gray-700 text-sm">Right to object to marketing communications</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Contact Information  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <h2 className="privacypolicy-heading text-2xl font-bold mb-4">Contact Us</h2>
                <div className="privacypolicy-accent p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">If you have questions, requests, or concerns regarding this Privacy Policy or your personal data, please contact us:</p>
                    <div className="privacypolicy-highlight p-4 rounded-lg">
                        <div className="text-blue-700 font-semibold mb-2">SoftPro9 IT Services</div>
                        <div className="space-y-1 text-gray-700">
                            <p><strong>Address:</strong> [Insert Address]</p>
                            <p><strong>Email:</strong> [Insert Privacy Email]</p>
                            <p><strong>Phone:</strong> [Insert Contact Number]</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Updates Notice  */}
            <div className="privacypolicy-section privacypolicy-card rounded-lg p-6 mb-8 transition-all duration-300">
                <div className="privacypolicy-accent p-4 rounded-lg text-center">
                    <p className="text-blue-700 font-semibold mb-2">Policy Updates</p>
                    <p className="text-gray-700 text-sm">SoftPro9 reserves the right to update this Privacy Policy. Users will be notified via email, website notices, or account alerts.</p>
                </div>
            </div>
        </div>

        {/* Footer  */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 text-center">
            <p className="text-blue-100">&copy; 2024 SoftPro9 IT Services. All rights reserved.</p>
        </div>
    </div>

    </>
  )
}

import './Policies.css';
import React from 'react'
import ScrollArrowButton from './ScrollArrowButton';

export default function Refund_policy() {
  return (
    <>
              <ScrollArrowButton />

    <div className="refund-container min-h-screen mt-5">
         {/* Header  */}
    <div className="refund-header bg-gradient-to-r from-blue-600 to-blue-500 text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-center">Refund-Policy</h1>
            <p className="text-center mt-4 text-blue-100 text-lg">SoftPro9 IT Services - Fair & Transparent Refund Guidelines</p>
            <div className="refund-divider mt-6"></div>
        </div>
    </div>

     {/* Main Content  */}
    <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Effective Date  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <div className="refund-highlight p-4 rounded-lg">
                <p className="text-gray-700"><strong>Effective Date:</strong> 01 October 2025</p>
                <p className="text-gray-700"><strong>Last Updated:</strong> 01 October 2025</p>
            </div>
        </div>

        {/* Introduction  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Introduction</h2>
            <div className="refund-accent p-4 rounded-lg">
                <p className="text-gray-700 mb-4">
                    At SoftPro9 IT Services ("SoftPro9," "we," "our," "us"), we value the trust you place in us and aim to deliver high-quality IT solutions, consulting, and digital services. This Refund Policy explains the circumstances under which clients and users may request a refund, the procedures involved, and the terms governing refunds.
                </p>
                <div className="refund-warning p-4 rounded-lg">
                    <p className="text-gray-700 font-semibold">
                        <strong>By engaging with our Services, you acknowledge that you have read, understood, and agreed to this Refund Policy.</strong>
                    </p>
                </div>
            </div>
        </div>

         {/* Understanding IT Services  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Understanding IT Services Refunds</h2>
            <div className="refund-highlight p-4 rounded-lg">
                <p className="text-gray-700 mb-4">
                    Refunds in the IT services sector are complex, as our work involves a blend of consulting, labor, digital deliverables, and third-party costs. Unlike physical goods, services such as web/app development, SAP consulting, recruitment, and digital marketing cannot be "returned."
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="refund-eligible p-4 rounded-lg">
                        <h3 className="font-semibold text-green-700 mb-2">This Policy Outlines:</h3>
                        <ul className="space-y-1">
                            <li className="refund-list-item text-gray-700 text-sm">When refunds are applicable</li>
                            <li className="refund-list-item text-gray-700 text-sm">Eligibility criteria for refunds</li>
                            <li className="refund-list-item text-gray-700 text-sm">Step-by-step refund process</li>
                        </ul>
                    </div>
                    <div className="refund-accent p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2">Our Commitment:</h3>
                        <p className="text-gray-700 text-sm">Provide transparency while safeguarding both client and company interests.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Scope of Policy  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Scope of Refund Policy</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="refund-eligible p-4 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-3">✅ Policy Applies To:</h3>
                    <ul className="space-y-2">
                        <li className="refund-list-item text-gray-700 text-sm">Web Development & App Development</li>
                        <li className="refund-list-item text-gray-700 text-sm">Digital Marketing & AI-driven Campaigns</li>
                        <li className="refund-list-item text-gray-700 text-sm">SAP Consulting & Implementation</li>
                        <li className="refund-list-item text-gray-700 text-sm">Recruitment & Staffing Services</li>
                        <li className="refund-list-item text-gray-700 text-sm">Corporate IT Solutions</li>
                        <li className="refund-list-item text-gray-700 text-sm">Training Programs</li>
                    </ul>
                </div>
                
                <div className="refund-not-eligible p-4 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-3">❌ Does Not Apply To:</h3>
                    <ul className="space-y-2">
                        <li className="refund-list-item text-gray-700 text-sm">Free services, trials, or promotional offerings</li>
                        <li className="refund-list-item text-gray-700 text-sm">Third-party costs (Google Ads, hosting, licenses)</li>
                        <li className="refund-list-item text-gray-700 text-sm">Services purchased via resellers or partners</li>
                    </ul>
                </div>
            </div>
        </div>

         {/* Service-Wise Eligibility  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Service-Wise Refund Eligibility</h2>
            
             {/* Web & App Development  */}
            <div className="mb-6">
                <h3 className="font-semibold text-blue-700 mb-4 text-lg">🌐 Web & App Development Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="refund-eligible p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2 text-sm">Refunds May Be Considered If:</h4>
                        <ul className="space-y-1">
                            <li className="refund-list-item text-gray-700 text-xs">Project not started + cancellation within 7 days</li>
                            <li className="refund-list-item text-gray-700 text-xs">Work deviates substantially from agreed scope</li>
                            <li className="refund-list-item text-gray-700 text-xs">Severe delays caused solely by SoftPro9</li>
                        </ul>
                    </div>
                    <div className="refund-not-eligible p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2 text-sm">No Refund If:</h4>
                        <ul className="space-y-1">
                            <li className="refund-list-item text-gray-700 text-xs">Project is 30% or more complete</li>
                            <li className="refund-list-item text-gray-700 text-xs">Client requirements change after start</li>
                            <li className="refund-list-item text-gray-700 text-xs">Third-party integration failures</li>
                        </ul>
                    </div>
                </div>
            </div>

             {/* Digital Marketing  */}
            <div className="mb-6">
                <h3 className="font-semibold text-blue-700 mb-4 text-lg">📱 Digital Marketing & AI Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="refund-eligible p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2 text-sm">Refunds May Be Granted If:</h4>
                        <ul className="space-y-1">
                            <li className="refund-list-item text-gray-700 text-xs">Campaign has not yet been launched</li>
                            <li className="refund-list-item text-gray-700 text-xs">Duplicate billing or system error</li>
                        </ul>
                    </div>
                    <div className="refund-not-eligible p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2 text-sm">Not Applicable If:</h4>
                        <ul className="space-y-1">
                            <li className="refund-list-item text-gray-700 text-xs">Campaign performance doesn't meet expectations</li>
                            <li className="refund-list-item text-gray-700 text-xs">Client fails to provide timely content/approvals</li>
                            <li className="refund-list-item text-gray-700 text-xs">Third-party platform costs are billed</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* SAP Consulting  */}
            <div className="mb-6">
                <h3 className="font-semibold text-blue-700 mb-4 text-lg">⚙️ SAP Consulting & IT Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="refund-eligible p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2 text-sm">Refunds May Be Considered If:</h4>
                        <ul className="space-y-1">
                            <li className="refund-list-item text-gray-700 text-xs">Project has not yet commenced</li>
                            <li className="refund-list-item text-gray-700 text-xs">Incorrect billing or duplicate charges</li>
                        </ul>
                    </div>
                    <div className="refund-not-eligible p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2 text-sm">Not Available If:</h4>
                        <ul className="space-y-1">
                            <li className="refund-list-item text-gray-700 text-xs">Services have been rendered</li>
                            <li className="refund-list-item text-gray-700 text-xs">Issues due to client's IT infrastructure</li>
                        </ul>
                    </div>
                </div>
            </div>

             {/* Recruitment Services  */}
            <div className="mb-6">
                <h3 className="font-semibold text-blue-700 mb-4 text-lg">👥 Recruitment Services</h3>
                <div className="refund-accent p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold text-blue-700 mb-2 text-sm">Refund Eligibility:</h4>
                            <ul className="space-y-1">
                                <li className="refund-list-item text-gray-700 text-xs">Candidate leaves within replacement period</li>
                                <li className="refund-list-item text-gray-700 text-xs">As per explicit staffing contract terms</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-700 mb-2 text-sm">Not Applicable If:</h4>
                            <ul className="space-y-1">
                                <li className="refund-list-item text-gray-700 text-xs">Employer changes job description</li>
                                <li className="refund-list-item text-gray-700 text-xs">Subjective candidate rejection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         {/* Refund Process  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-6">Refund Request Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="refund-process-step p-4 rounded-lg pt-6" data-step="1">
                    <h3 className="font-semibold text-blue-700 mb-2">Submit Request</h3>
                    <p className="text-gray-700 text-sm">Send written request to billing@softpro9.com within applicable period</p>
                </div>
                
                <div className="refund-process-step p-4 rounded-lg pt-6" data-step="2">
                    <h3 className="font-semibold text-blue-700 mb-2">Provide Details</h3>
                    <p className="text-gray-700 text-sm">Include invoice number, service details, and reason for refund</p>
                </div>
                
                <div className="refund-process-step p-4 rounded-lg pt-6" data-step="3">
                    <h3 className="font-semibold text-blue-700 mb-2">Review Process</h3>
                    <p className="text-gray-700 text-sm">Our teams review within 7–10 business days</p>
                </div>
                
                <div className="refund-process-step p-4 rounded-lg pt-6" data-step="4">
                    <h3 className="font-semibold text-blue-700 mb-2">Decision</h3>
                    <p className="text-gray-700 text-sm">Formal written response with approval or rejection</p>
                </div>
                
                <div className="refund-process-step p-4 rounded-lg pt-6" data-step="5">
                    <h3 className="font-semibold text-blue-700 mb-2">Processing</h3>
                    <p className="text-gray-700 text-sm">Approved refunds processed within 15 business days</p>
                </div>
            </div>
        </div>

         {/* Timelines  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Refund Timelines</h2>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="refund-warning p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-700 mb-2">⏰ Prepaid Services</h3>
                    <p className="text-gray-700 text-sm">Refund requests must be made <strong>within 7 days</strong> of payment</p>
                </div>
                <div className="refund-warning p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-700 mb-2">🏗️ Project-Based</h3>
                    <p className="text-gray-700 text-sm">Refunds possible only <strong>before 30%</strong> of work is completed</p>
                </div>
                <div className="refund-warning p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-700 mb-2">🔄 Subscriptions</h3>
                    <p className="text-gray-700 text-sm">Refunds within <strong>14 days</strong> of purchase</p>
                </div>
            </div>
        </div>

        {/* Non-Refundable Items  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Non-Refundable Items</h2>
            <div className="refund-not-eligible p-4 rounded-lg">
                <h3 className="font-semibold text-red-700 mb-4">❌ The following are strictly non-refundable:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                        <li className="refund-list-item text-gray-700 text-sm">Domain registration, hosting, SSL certificates</li>
                        <li className="refund-list-item text-gray-700 text-sm">Third-party software licenses</li>
                        <li className="refund-list-item text-gray-700 text-sm">Paid advertisements on external platforms</li>
                    </ul>
                    <ul className="space-y-2">
                        <li className="refund-list-item text-gray-700 text-sm">Completed consulting hours</li>
                        <li className="refund-list-item text-gray-700 text-sm">Workshops or support tickets</li>
                        <li className="refund-list-item text-gray-700 text-sm">Customized deliverables</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Special Cases  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Exceptions & Special Cases</h2>
            <div className="refund-eligible p-4 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-4">✅ Refunds may be considered in special cases:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="refund-highlight p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2 text-sm">💳 Duplicate Payment</h4>
                        <p className="text-gray-700 text-xs">If a client is accidentally billed twice</p>
                    </div>
                    <div className="refund-highlight p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2 text-sm">🚨 Fraudulent Transaction</h4>
                        <p className="text-gray-700 text-xs">Payment made without authorization (verification required)</p>
                    </div>
                    <div className="refund-highlight p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2 text-sm">⚠️ System Error</h4>
                        <p className="text-gray-700 text-xs">Billing occurs due to technical glitch</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Partial Refunds  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Partial Refunds</h2>
            <div className="refund-accent p-4 rounded-lg">
                <p className="text-gray-700 mb-4">In some cases, partial refunds may be issued after deducting:</p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="refund-highlight p-3 rounded-lg text-center">
                        <p className="text-gray-700 text-sm"><strong>Administrative charges</strong></p>
                    </div>
                    <div className="refund-highlight p-3 rounded-lg text-center">
                        <p className="text-gray-700 text-sm"><strong>Third-party expenses</strong></p>
                    </div>
                    <div className="refund-highlight p-3 rounded-lg text-center">
                        <p className="text-gray-700 text-sm"><strong>Cost of work completed</strong></p>
                    </div>
                </div>
                <div className="refund-warning p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-700 mb-2">📝 Example:</h3>
                    <p className="text-gray-700 text-sm">If 50% of a web development project is complete and the client cancels, a refund may be issued after deducting costs equivalent to the work delivered.</p>
                </div>
            </div>
        </div>

        {/* Refund Modes  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Refund Processing Methods</h2>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="refund-eligible p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-green-700 mb-2">💳 Original Payment Method</h3>
                    <p className="text-gray-700 text-sm">Same method used for purchase (preferred)</p>
                </div>
                <div className="refund-accent p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-blue-700 mb-2">🏦 Bank Transfer</h3>
                    <p className="text-gray-700 text-sm">For special cases only</p>
                </div>
                <div className="refund-highlight p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-blue-700 mb-2">📄 Credit Note</h3>
                    <p className="text-gray-700 text-sm">On mutual agreement for future services</p>
                </div>
            </div>
        </div>

     {/* Dispute Resolution  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Dispute Resolution for Refunds</h2>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="refund-process-step p-4 rounded-lg pt-6" data-step="1">
                    <h3 className="font-semibold text-blue-700 mb-2">Escalation Review</h3>
                    <p className="text-gray-700 text-sm">Email legal@softpro9.com if you disagree with our decision</p>
                </div>
                
                <div className="refund-process-step p-4 rounded-lg pt-6" data-step="2">
                    <h3 className="font-semibold text-blue-700 mb-2">Arbitration</h3>
                    <p className="text-gray-700 text-sm">Settled in Bangalore under Arbitration Act, 1996</p>
                </div>
                
                <div className="refund-process-step p-4 rounded-lg pt-6" data-step="3">
                    <h3 className="font-semibold text-blue-700 mb-2">Jurisdiction</h3>
                    <p className="text-gray-700 text-sm">Courts in Bangalore, Karnataka have exclusive jurisdiction</p>
                </div>
            </div>
        </div>

         {/* Important Limitations  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Important Limitations</h2>
            <div className="refund-not-eligible p-4 rounded-lg">
                <h3 className="font-semibold text-red-700 mb-4">⚠️ Please Note:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                        <li className="refund-list-item text-gray-700 text-sm">Refunds limited to amount paid for services</li>
                        <li className="refund-list-item text-gray-700 text-sm">No liability for indirect losses or business disruptions</li>
                    </ul>
                    <ul className="space-y-2">
                        <li className="refund-list-item text-gray-700 text-sm">No refunds for consequential damages</li>
                        <li className="refund-list-item text-gray-700 text-sm">Force majeure events may prevent refunds</li>
                    </ul>
                </div>
            </div>
        </div>

         {/* Contact Information  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Contact Us for Refunds</h2>
            <div className="refund-accent p-6 rounded-lg">
                <p className="text-gray-700 mb-4">For refund-related queries, please contact us:</p>
                <div className="refund-highlight p-4 rounded-lg">
                    <div className="text-blue-700 font-semibold mb-3">SoftPro9 IT Services</div>
                    <div className="space-y-2 text-gray-700 mb-4">
                        <p><strong>Address:</strong> No. 112, 2nd Floor, Koramangala, 7th Block, Bangalore – 560095, Karnataka, India</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="refund-eligible p-3 rounded-lg text-center">
                            <p className="text-sm"><strong>📧 Billing:</strong><br/>billing@softpro9.com</p>
                        </div>
                        <div className="refund-warning p-3 rounded-lg text-center">
                            <p className="text-sm"><strong>⚖️ Legal:</strong><br/>legal@softpro9.com</p>
                        </div>
                        <div className="refund-accent p-3 rounded-lg text-center">
                            <p className="text-sm"><strong>📞 Phone:</strong><br/>+91-98765-43210</p>
                        </div>
                        <div className="refund-highlight p-3 rounded-lg text-center">
                            <p className="text-sm"><strong>🌐 Website:</strong><br/>www.softpro9.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         {/* Policy Updates  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <h2 className="refund-heading text-2xl font-bold mb-4">Policy Updates & Governing Law</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="refund-accent p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3">📝 Policy Updates</h3>
                    <p className="text-gray-700 text-sm">SoftPro9 reserves the right to update this Refund Policy at any time. Updates will be posted on our website with the effective date. Continued use of Services constitutes acceptance of the updated policy.</p>
                </div>
                <div className="refund-highlight p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3">⚖️ Governing Law</h3>
                    <p className="text-gray-700 text-sm">This Refund Policy shall be governed by and construed in accordance with the laws of India.</p>
                </div>
            </div>
        </div>

        {/* Final Notice  */}
        <div className="refund-section refund-card rounded-lg p-6 mb-8 transition-all duration-300">
            <div className="refund-warning p-6 rounded-lg text-center">
                <h3 className="font-semibold text-amber-700 mb-3">📋 Important Reminder</h3>
                <p className="text-gray-700 mb-3">This Refund Policy is an integral part of our Terms & Conditions. Please review both documents carefully before engaging our services.</p>
                <div className="refund-highlight p-4 rounded-lg">
                    <p className="text-blue-700 font-semibold text-sm">Our goal is to provide fair and transparent refund guidelines while maintaining the quality of our services. We appreciate your understanding of the complexities involved in IT service delivery.</p>
                </div>
            </div>
        </div>
    </div>

     {/* Footer  */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 text-center">
        <p className="text-blue-100">&copy; 2025 SoftPro9 IT Services. All rights reserved.</p>
        <p className="text-blue-200 text-sm mt-2">Refund Policy • Fair & Transparent Guidelines</p>
    </div>
    </div>
    </>
  )
}

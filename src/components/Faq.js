import React, { useState } from 'react';
import ScrollArrowButton from './ScrollArrowButton';

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const searchFAQ = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const faqData = [
    {
      section: 'general',
      title: 'General Company FAQs',
      items: [
        {
          question: 'What services does SoftPro9 provide?',
          answer: (
            <div>
              <p className="mb-3">SoftPro9 offers a wide portfolio of IT solutions:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Advanced Web and App Development</li>
                <li>Digital Marketing & AI-powered Campaigns</li>
                <li>SAP Consulting, Implementation & Recruitment</li>
                <li>Corporate IT Solutions</li>
                <li>Training and Workforce Enablement</li>
              </ul>
            </div>
          )
        },
        {
          question: 'Do you charge job seekers?',
          answer: 'No. SoftPro9 charges only employers/companies for recruitment services.'
        },
        {
          question: 'How do I contact SoftPro9 support?',
          answer: (
            <ul className="space-y-2">
              <li>📧 <strong>support@softpro9.com</strong> (primary support channel)</li>
              <li>📧 <strong>escalations@softpro9.com</strong> (for urgent unresolved issues)</li>
              <li>📞 <strong>+91-98765-43210</strong> (support hotline, Mon–Sat, 9 AM–7 PM IST)</li>
              <li>🌐 <strong>Support Portal:</strong> www.softpro9.com/support</li>
            </ul>
          )
        },
        {
          question: 'Where is SoftPro9 located?',
          answer: 'Our headquarters are in Bangalore, Karnataka, India, with support capabilities serving clients globally.'
        }
      ]
    },
    {
      section: 'billing',
      title: 'Account & Billing FAQs',
      items: [
        {
          question: 'How do I create an account with SoftPro9?',
          answer: 'Visit softpro9.com/register, provide basic details, and verify via email. Corporate clients receive a dedicated Account Manager.'
        },
        {
          question: 'What payment methods are accepted?',
          answer: (
            <ul className="list-disc list-inside space-y-1">
              <li>Bank Transfers</li>
              <li>UPI / Net Banking (India)</li>
              <li>Debit & Credit Cards (Visa, MasterCard, AmEx)</li>
              <li>PayPal & Stripe (for international clients)</li>
            </ul>
          )
        },
        {
          question: 'Do you provide invoices and GST receipts?',
          answer: 'Yes. All transactions come with a tax-compliant invoice. Indian clients receive GST invoices.'
        }
      ]
    },
    {
      section: 'development',
      title: 'Web & App Development FAQs',
      items: [
        {
          question: 'How long does a website or app project take?',
          answer: (
            <ul className="space-y-1">
              <li><strong>Simple Websites:</strong> 2–4 weeks</li>
              <li><strong>Corporate Sites:</strong> 6–8 weeks</li>
              <li><strong>Mobile Apps:</strong> 8–16 weeks (depending on complexity)</li>
            </ul>
          )
        },
        {
          question: 'What technologies do you use?',
          answer: (
            <ul className="space-y-1">
              <li><strong>Web:</strong> React, Node.js, PHP, MySQL</li>
              <li><strong>Mobile:</strong> Flutter, React Native, iOS/Android native</li>
              <li><strong>Cloud:</strong> AWS, Azure, Google Cloud</li>
            </ul>
          )
        }
      ]
    },
    {
      section: 'marketing',
      title: 'Digital Marketing & AI Services FAQs',
      items: [
        {
          question: 'Do you guarantee results?',
          answer: 'No agency can guarantee exact numbers. However, we use data-driven strategies to maximize ROI and provide transparent reporting.'
        },
        {
          question: 'Which platforms do you cover?',
          answer: (
            <ul className="list-disc list-inside space-y-1">
              <li>Google (SEO + Ads)</li>
              <li>Meta (Facebook & Instagram Ads)</li>
              <li>LinkedIn Marketing</li>
              <li>YouTube Campaigns</li>
              <li>WhatsApp Marketing</li>
              <li>Email Automation</li>
            </ul>
          )
        }
      ]
    },
    {
      section: 'sap',
      title: 'SAP Consulting & Implementation FAQs',
      items: [
        {
          question: 'What SAP services do you offer?',
          answer: (
            <ul className="list-disc list-inside space-y-1">
              <li>SAP S/4HANA Implementation</li>
              <li>SAP MM, SD, FI/CO, HR modules</li>
              <li>SAP Consulting & Staffing</li>
              <li>SAP Support & Maintenance</li>
            </ul>
          )
        }
      ]
    },
    {
      section: 'recruitment',
      title: 'Recruitment & Staffing FAQs',
      items: [
        {
          question: 'What industries do you recruit for?',
          answer: (
            <ul className="list-disc list-inside space-y-1">
              <li>IT & Software Development</li>
              <li>SAP & ERP</li>
              <li>Digital Marketing</li>
              <li>Corporate Roles & Support Functions</li>
            </ul>
          )
        }
      ]
    },
    {
      section: 'training',
      title: 'Training & Learning Support FAQs',
      items: [
        {
          question: 'What training does SoftPro9 offer?',
          answer: 'We provide corporate training in SAP, Digital Marketing, Web Technologies, and AI Tools.'
        },
        {
          question: 'Do you offer online training?',
          answer: 'Yes. Both live instructor-led and self-paced modules are available.'
        }
      ]
    },
    {
      section: 'technical',
      title: 'Technical Support & Troubleshooting FAQs',
      items: [
        {
          question: 'How do I raise a support ticket?',
          answer: 'Login to softpro9.com/support → Select "Raise a Ticket" → Provide details → Track status online.'
        },
        {
          question: 'Do you provide 24/7 technical support?',
          answer: 'Yes, but only for clients under premium SLA contracts.'
        }
      ]
    },
    {
      section: 'security',
      title: 'Security, Data Privacy & Compliance FAQs',
      items: [
        {
          question: 'How do you protect client data?',
          answer: (
            <ul className="list-disc list-inside space-y-1">
              <li>NDA agreements with employees & contractors</li>
              <li>Encryption protocols for data in transit & at rest</li>
              <li>GDPR & Indian IT Act compliance</li>
            </ul>
          )
        }
      ]
    },
    {
      section: 'refunds',
      title: 'Refunds, Cancellations & Escalation FAQs',
      items: [
        {
          question: 'How do I request a refund?',
          answer: 'Send an email to billing@softpro9.com with invoice details. See our Refund Policy for conditions.'
        }
      ]
    }
  ];

  const navigationItems = [
    { id: 'faq-general', label: 'General Company' },
    { id: 'faq-billing', label: 'Account & Billing' },
    { id: 'faq-development', label: 'Web & App Development' },
    { id: 'faq-marketing', label: 'Digital Marketing & AI' },
    { id: 'faq-sap', label: 'SAP Consulting' },
    { id: 'faq-recruitment', label: 'Recruitment & Staffing' },
    { id: 'faq-training', label: 'Training & Learning' },
    { id: 'faq-technical', label: 'Technical Support' },
    { id: 'faq-security', label: 'Security & Privacy' },
    { id: 'faq-refunds', label: 'Refunds & Escalation' }
  ];

  const caseStudies = [
    {
      title: 'Case 1: Marketing Campaign Cancellation',
      description: 'A client cancels a digital marketing campaign before launch → Full refund of SoftPro9 service fees (excluding ad spend).',
      color: 'border-blue-500'
    },
    {
      title: 'Case 2: Recruitment Replacement',
      description: 'A recruited candidate leaves within 30 days → Free replacement under staffing policy.',
      color: 'border-green-500'
    },
    {
      title: 'Case 3: Post-Launch Website Issues',
      description: 'A website has post-launch bugs → Free bug-fix support covered under warranty.',
      color: 'border-orange-500'
    },
    {
      title: 'Case 4: SEO Results Dispute',
      description: 'A client disputes SEO results → No refund (as outcomes depend on external search algorithms).',
      color: 'border-red-500'
    },
    {
      title: 'Case 5: Critical System Downtime',
      description: 'A critical SAP system downtime → Priority SLA-based resolution within 1 hour.',
      color: 'border-purple-500'
    }
  ];

  const filteredFAQData = faqData.map(section => ({
    ...section,
    items: section.items.filter(item => {
      const questionMatch = item.question.toLowerCase().includes(searchTerm);
      const answerMatch = typeof item.answer === 'string' 
        ? item.answer.toLowerCase().includes(searchTerm)
        : false;
      return questionMatch || answerMatch;
    })
  })).filter(section => section.items.length > 0);

  return (
    <>
              <ScrollArrowButton />

    <div className="bg-gray-50 min-h-screen mt-5">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Support-FAQ</h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Comprehensive support guide for all SoftPro9 IT Services. Find quick answers to common questions and get the help you need.
          </p>
          <div className="text-center mt-6">
            <span className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
              Last Updated: 01 October 2025
            </span>
          </div>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search FAQs..." 
                className="w-full px-4 py-3 pl-10 pr-4 text-gray-900 bg-white bg-opacity-90 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                value={searchTerm}
                onChange={(e) => searchFAQ(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <nav className="sticky top-5 bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">FAQ Categories</h2>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-3 py-2 rounded-md text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {(searchTerm ? filteredFAQData : faqData).map((section, sectionIndex) => (
              <section
                key={section.section}
                id={`faq-${section.section}`}
                className="bg-white rounded-lg p-6 mb-8 pl-10 border-l-4 border-blue-500 hover:border-blue-700 hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-blue-600 mb-6">{section.title}</h2>
                
                {section.items.map((item, itemIndex) => {
                  const faqIndex = `${sectionIndex}-${itemIndex}`;
                  return (
                    <div key={itemIndex} className="border-b border-gray-200 py-4 hover:bg-gray-50 transition-colors duration-200">
                      <div 
                        className="flex justify-between items-center cursor-pointer hover:text-blue-700 transition-colors duration-200"
                        onClick={() => toggleFAQ(faqIndex)}
                      >
                        <span className="font-medium text-gray-800">{item.question}</span>
                        <span className={`text-blue-500 text-xl font-bold transition-transform duration-300 ${openFAQ === faqIndex ? 'rotate-45' : ''}`}>
                          {openFAQ === faqIndex ? '×' : '+'}
                        </span>
                      </div>
                      <div className={`mt-3 overflow-hidden transition-all duration-300 ease-out ${openFAQ === faqIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="text-gray-600 pb-4">
                          {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>
            ))}

            {/* Special Scenarios Section */}
            <section id="faq-scenarios" className="bg-white rounded-lg p-6 mb-8 pl-10 border-l-4 border-blue-500 hover:border-blue-700 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-semibold text-blue-600 mb-6">Special Scenarios & Case Studies</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                {caseStudies.map((caseStudy, index) => (
                  <div key={index} className={`border-l-4 ${caseStudy.color} pl-4`}>
                    <h4 className="font-semibold text-gray-800 mb-2">{caseStudy.title}</h4>
                    <p className="text-gray-600">{caseStudy.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Support Card */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Still Have Questions?</h2>
              <p className="text-gray-700 mb-6">Can't find what you're looking for? Our support team is here to help you 24/7.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-blue-600 font-semibold mb-2">📧 Email Support</div>
                  <div className="text-sm text-gray-600">support@softpro9.com</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-blue-600 font-semibold mb-2">📞 Phone Support</div>
                  <div className="text-sm text-gray-600">+91-98765-43210</div>
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 SoftPro9 IT Services. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Last Updated: 01 October 2025 | Version 2.0</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Faq;
// import React from 'react'
import './style.css';

export default function Digitalmarketing() {
      // Smooth scroll handler
  const handleScroll = () => {
    const section = document.querySelector(".service_Marketing-contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! We will contact you soon.");
  };
  return (
    <>
        {/* Hero Section  */}
    <section class="service_Marketing-hero service_Marketing-gradient text-white py-20 px-4">
        <div class="max-w-6xl mx-auto text-center">
            <div class="service_Marketing-hero-content">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 service_Marketing-float">
                    Smarter, AI-Powered Digital Marketing for <span class="text-blue-200">Faster Growth</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                    Leverage data-driven strategies, advanced tools, and AI automation to scale your business with precision and speed.
                </p>
                <button class="service_Marketing-cta-btn bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get a Free Strategy Call
                </button>
            </div>
        </div>
    </section>

     {/* Introduction Section  */}
    <section class="service_Marketing-intro py-16 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-800 mb-6">AI-Driven Digital Marketing Excellence</h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                    SoftPro9 combines cutting-edge AI technology with proven marketing strategies to deliver exceptional results. 
                    Our advanced approach ensures smarter decisions, higher ROI, and sustainable growth.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="service_Marketing-benefit-card text-center p-6">
                    <div class="service_Marketing-icon-circle bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span class="text-2xl text-primary-blue">📈</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">More Traffic</h3>
                    <p class="text-gray-600">AI-optimized campaigns that drive qualified visitors to your website</p>
                </div>
                
                <div class="service_Marketing-benefit-card text-center p-6">
                    <div class="service_Marketing-icon-circle bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span class="text-2xl text-primary-blue">🎯</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">Higher Conversions</h3>
                    <p class="text-gray-600">Personalized experiences that turn visitors into customers</p>
                </div>
                
                <div class="service_Marketing-benefit-card text-center p-6">
                    <div class="service_Marketing-icon-circle bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span class="text-2xl text-primary-blue">🧠</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">Smarter Decisions</h3>
                    <p class="text-gray-600">Data-driven insights powered by advanced analytics and automation</p>
                </div>
            </div>
        </div>
    </section>

    {/* Our Digital Marketing Services  */}
    <section class="service_Marketing-services py-20 px-4 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Digital Marketing Services</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Comprehensive solutions powered by AI and advanced technologies to accelerate your business growth
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 mb-12">
                 {/* SEO Service  */}
                <div class="service_Marketing-service-card bg-white rounded-xl p-8 shadow-lg service_Marketing-card-hover transition-all duration-300">
                    <div class="service_Marketing-service-header mb-6">
                        <div class="flex items-center mb-4">
                            <span class="text-3xl mr-4">🔍</span>
                            <h3 class="text-2xl font-bold text-gray-800">Search Engine Optimization (SEO)</h3>
                        </div>
                    </div>
                    <ul class="service_Marketing-feature-list space-y-3">
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            AI-driven keyword research and strategy
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Advanced On-page & Technical SEO
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Strategic Link Building & Authority Growth
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Local SEO optimization
                        </li>
                    </ul>
                </div>

                {/* Social Media Marketing  */}
                <div class="service_Marketing-service-card bg-white rounded-xl p-8 shadow-lg service_Marketing-card-hover transition-all duration-300">
                    <div class="service_Marketing-service-header mb-6">
                        <div class="flex items-center mb-4">
                            <span class="text-3xl mr-4">📱</span>
                            <h3 class="text-2xl font-bold text-gray-800">Social Media Marketing (SMM)</h3>
                        </div>
                    </div>
                    <ul class="service_Marketing-feature-list space-y-3">
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            AI-optimized campaigns across all platforms
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Strategic Influencer Marketing
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Community Building & Engagement
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Facebook, Instagram, LinkedIn, Twitter management
                        </li>
                    </ul>
                </div>

                 {/* Paid Advertising  */}
                <div class="service_Marketing-service-card bg-white rounded-xl p-8 shadow-lg service_Marketing-card-hover transition-all duration-300">
                    <div class="service_Marketing-service-header mb-6">
                        <div class="flex items-center mb-4">
                            <span class="text-3xl mr-4">💰</span>
                            <h3 class="text-2xl font-bold text-gray-800">Paid Advertising (PPC & SEM)</h3>
                        </div>
                    </div>
                    <ul class="service_Marketing-feature-list space-y-3">
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Google Ads (Search, Display, Shopping)
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Social Media Ads (Meta, LinkedIn, YouTube)
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            AI-powered Ad Optimization
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Real-time performance monitoring
                        </li>
                    </ul>
                </div>

                 {/* Content Marketing  */}
                <div class="service_Marketing-service-card bg-white rounded-xl p-8 shadow-lg service_Marketing-card-hover transition-all duration-300">
                    <div class="service_Marketing-service-header mb-6">
                        <div class="flex items-center mb-4">
                            <span class="text-3xl mr-4">📝</span>
                            <h3 class="text-2xl font-bold text-gray-800">Content & Creative Marketing</h3>
                        </div>
                    </div>
                    <ul class="service_Marketing-feature-list space-y-3">
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            AI-generated Blogs & Articles
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Infographics & Video Marketing
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            AI-personalized Content Recommendations
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Content strategy & planning
                        </li>
                    </ul>
                </div>
            </div>

            {/* Email & WhatsApp Marketing  */}
            <div class="grid lg:grid-cols-2 gap-8">
                <div class="service_Marketing-service-card bg-white rounded-xl p-8 shadow-lg service_Marketing-card-hover transition-all duration-300">
                    <div class="service_Marketing-service-header mb-6">
                        <div class="flex items-center mb-4">
                            <span class="text-3xl mr-4">📧</span>
                            <h3 class="text-2xl font-bold text-gray-800">Email & WhatsApp Marketing</h3>
                        </div>
                    </div>
                    <ul class="service_Marketing-feature-list space-y-3">
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Automated Email Workflows
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            Personalized Campaign Design
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            WhatsApp Marketing Bots
                        </li>
                        <li class="flex items-center text-gray-700">
                            <span class="text-primary-blue mr-3">✓</span>
                            AI Chat Assistants
                        </li>
                    </ul>
                </div>

                <div class="service_Marketing-service-card bg-primary-blue rounded-xl p-8 shadow-lg service_Marketing-card-hover transition-all duration-300 text-black">
                    <div class="service_Marketing-service-header mb-6">
                        <div class="flex items-center mb-4">
                            <span class="text-3xl mr-4">🤖</span>
                            <h3 class="text-2xl font-bold">AI-Powered Marketing Solutions</h3>
                        </div>
                    </div>
                    <ul class="service_Marketing-feature-list space-y-3">
                        <li class="flex items-center">
                            <span class="text-yellow-300 mr-3">✓</span>
                            Predictive Analytics for Campaigns
                        </li>
                        <li class="flex items-center">
                            <span class="text-yellow-300 mr-3">✓</span>
                            AI-based Customer Segmentation
                        </li>
                        <li class="flex items-center">
                            <span class="text-yellow-300 mr-3">✓</span>
                            Marketing Automation Tools
                        </li>
                        <li class="flex items-center">
                            <span class="text-yellow-300 mr-3">✓</span>
                            Chatbots & Conversational AI
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Our Process Section  */}
    <section class="service_Marketing-process py-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Digital Marketing Process</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    A systematic approach powered by AI and data analytics to ensure maximum ROI
                </p>
            </div>

            <div class="service_Marketing-process-steps space-y-8">
                <div class="service_Marketing-step flex items-center md:items-start">
                    <div class="service_Marketing-step-number bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">1</div>
                    <div class="service_Marketing-step-content">
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">Research & Strategy</h3>
                        <p class="text-gray-600 text-lg">Deep analysis of your audience, competition, and business goals to create a winning strategy</p>
                    </div>
                </div>

                <div class="service_Marketing-step flex items-center md:items-start">
                    <div class="service_Marketing-step-number bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">2</div>
                    <div class="service_Marketing-step-content">
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">AI-driven Campaign Planning</h3>
                        <p class="text-gray-600 text-lg">Leverage artificial intelligence for data-backed decision-making and optimal resource allocation</p>
                    </div>
                </div>

                <div class="service_Marketing-step flex items-center md:items-start">
                    <div class="service_Marketing-step-number bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">3</div>
                    <div class="service_Marketing-step-content">
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">Execution</h3>
                        <p class="text-gray-600 text-lg">Launch coordinated multi-channel campaigns across all relevant platforms simultaneously</p>
                    </div>
                </div>

                <div class="service_Marketing-step flex items-center md:items-start">
                    <div class="service_Marketing-step-number bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">4</div>
                    <div class="service_Marketing-step-content">
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">Optimization</h3>
                        <p class="text-gray-600 text-lg">Continuous improvement using AI insights and real-time performance data</p>
                    </div>
                </div>

                <div class="service_Marketing-step flex items-center md:items-start">
                    <div class="service_Marketing-step-number bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">5</div>
                    <div class="service_Marketing-step-content">
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">Reporting & Analytics</h3>
                        <p class="text-gray-600 text-lg">Transparent performance reports with detailed ROI analysis and actionable insights</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Why Choose SoftPro9 --> */}
    <section class="service_Marketing-why-choose py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Why Choose SoftPro9 for Digital Marketing?</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Leading the industry with innovative solutions and proven results
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="service_Marketing-advantage-card bg-white p-8 rounded-xl shadow-lg text-center service_Marketing-card-hover transition-all duration-300">
                    <div class="service_Marketing-advantage-icon text-4xl mb-4">🚀</div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">AI-powered Tools</h3>
                    <p class="text-gray-600">Advanced artificial intelligence for smarter campaigns and better results</p>
                </div>

                <div class="service_Marketing-advantage-card bg-white p-8 rounded-xl shadow-lg text-center service_Marketing-card-hover transition-all duration-300">
                    <div class="service_Marketing-advantage-icon text-4xl mb-4">🎯</div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">End-to-End Solutions</h3>
                    <p class="text-gray-600">Complete marketing ecosystem from SEO to automation under one roof</p>
                </div>

                <div class="service_Marketing-advantage-card bg-white p-8 rounded-xl shadow-lg text-center service_Marketing-card-hover transition-all duration-300">
                    <div class="service_Marketing-advantage-icon text-4xl mb-4">📊</div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Transparent Reporting</h3>
                    <p class="text-gray-600">Clear, measurable ROI with detailed performance analytics</p>
                </div>

                <div class="service_Marketing-advantage-card bg-white p-8 rounded-xl shadow-lg text-center service_Marketing-card-hover transition-all duration-300">
                    <div class="service_Marketing-advantage-icon text-4xl mb-4">🏭</div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Industry-Specific</h3>
                    <p class="text-gray-600">Customized strategies tailored to your industry and business model</p>
                </div>

                <div class="service_Marketing-advantage-card bg-white p-8 rounded-xl shadow-lg text-center service_Marketing-card-hover transition-all duration-300">
                    <div class="service_Marketing-advantage-icon text-4xl mb-4">👥</div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Expert Team</h3>
                    <p class="text-gray-600">Certified marketing professionals with proven track records</p>
                </div>

                <div class="service_Marketing-advantage-card bg-white p-8 rounded-xl shadow-lg text-center service_Marketing-card-hover transition-all duration-300">
                    <div class="service_Marketing-advantage-icon text-4xl mb-4">⚡</div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Fast Results</h3>
                    <p class="text-gray-600">Accelerated growth through optimized processes and automation</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Call-to-Action Section --> */}
    <section class="service_Marketing-cta service_Marketing-gradient text-white py-20 px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Business with AI-Driven Marketing?</h2>
            <p class="text-xl mb-10 text-blue-100">
                Get a comprehensive marketing audit and personalized strategy consultation absolutely free
            </p>
            
            <div class="service_Marketing-cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
                <button class="service_Marketing-cta-primary bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Request a Free Marketing Audit
                </button>
                
                <button class="service_Marketing-cta-secondary border-2 border-white hover:bg-white hover:text-blue-900 text-blue-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                    Talk to an Expert
                </button>
            </div>
        </div>
    </section>

    {/* <!-- FAQs Section --> */}
    <section class="service_Marketing-faqs py-20 px-4 bg-white">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <p class="text-lg text-gray-600">
                    Get answers to common questions about our AI-powered digital marketing services
                </p>
            </div>

            <div class="service_Marketing-faq-container space-y-6">
                <div class="service_Marketing-faq-item bg-gray-50 rounded-lg p-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">How does AI improve digital marketing?</h3>
                    <p class="text-gray-600">AI enhances digital marketing by analyzing vast amounts of data to identify patterns, predict customer behavior, optimize ad spend, personalize content, and automate repetitive tasks. This leads to better targeting, higher conversion rates, and improved ROI.</p>
                </div>

                <div class="service_Marketing-faq-item bg-gray-50 rounded-lg p-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">Do you provide complete end-to-end digital marketing services?</h3>
                    <p class="text-gray-600">Yes, we offer comprehensive digital marketing solutions including SEO, social media marketing, PPC advertising, content marketing, email marketing, WhatsApp marketing, and AI-powered automation tools - all integrated for maximum effectiveness.</p>
                </div>

                <div class="service_Marketing-faq-item bg-gray-50 rounded-lg p-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">How long does it take to see results?</h3>
                    <p class="text-gray-600">Results vary by service: PPC campaigns can show immediate traffic, social media engagement improves within 2-4 weeks, while SEO typically shows significant results in 3-6 months. Our AI optimization accelerates these timelines compared to traditional methods.</p>
                </div>

                <div class="service_Marketing-faq-item bg-gray-50 rounded-lg p-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">Can you run both organic and paid campaigns together?</h3>
                    <p class="text-gray-600">Absolutely! We recommend integrated campaigns combining organic SEO, social media, and content marketing with strategic paid advertising. This holistic approach maximizes visibility, credibility, and conversions across all channels.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section class="service_Marketing-contact py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Get Started Today</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Ready to transform your digital presence? Contact our experts for a personalized consultation
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12">
                 {/* Contact Form  */}
                <div class="service_Marketing-contact-form bg-white rounded-xl p-8 shadow-lg">
                    <h3 class="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                    <form class="space-y-6" onSubmit={handleSubmit}>
                        <div class="service_Marketing-form-group">
                            <input type="text" placeholder="Your Full Name" class="service_Marketing-input w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"/>
                        </div>
                        <div class="service_Marketing-form-group">
                            <input type="email" placeholder="Your Email Address" class="service_Marketing-input w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"/>
                        </div>
                        <div class="service_Marketing-form-group">
                            <input type="tel" placeholder="Your Phone Number" class="service_Marketing-input w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"/>
                        </div>
                        <div class="service_Marketing-form-group">
                            <select class="service_Marketing-select w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent">
                                <option>Service Interested In</option>
                                <option>SEO Services</option>
                                <option>Social Media Marketing</option>
                                <option>PPC Advertising</option>
                                <option>Content Marketing</option>
                                <option>Email Marketing</option>
                                <option>AI Marketing Solutions</option>
                                <option>Complete Digital Marketing</option>
                            </select>
                        </div>
                        <button type="submit" class="service_Marketing-submit-btn bg-primary-blue hover:bg-dark-blue text-white font-bold py-4 px-8 rounded-lg w-full transition-all duration-300">
                            Send Message
                        </button>
                    </form>
                </div>

                  {/* Contact Information  */}
                <div class="service_Marketing-contact-info">
                    <h3 class="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
                    
                    <div class="service_Marketing-contact-details space-y-6">
                        <div class="service_Marketing-contact-item flex items-center">
                            <div class="service_Marketing-contact-icon bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <span class="text-xl">📧</span>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">Email</h4>
                                <p class="text-gray-600">marketing@softpro9.com</p>
                            </div>
                        </div>

                        <div class="service_Marketing-contact-item flex items-center">
                            <div class="service_Marketing-contact-icon bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <span class="text-xl">💬</span>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">WhatsApp</h4>
                                <p class="text-gray-600">+91 9876543210</p>
                            </div>
                        </div>

                        <div class="service_Marketing-contact-item flex items-center">
                            <div class="service_Marketing-contact-icon bg-primary-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <span class="text-xl">📍</span>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">Office Address</h4>
                                <p class="text-gray-600">Jaipur, Rajasthan, India</p>
                            </div>
                        </div>
                    </div>

                    <div class="service_Marketing-social-links mt-8">
                        <h4 class="font-semibold text-gray-800 mb-4">Follow Us</h4>
                        <div class="flex space-x-4">
                            <a href="#" class="service_Marketing-social-link bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                                <span class="text-sm">f</span>
                            </a>
                            <a href="#" class="service_Marketing-social-link bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                                <span class="text-sm">t</span>
                            </a>
                            <a href="#" class="service_Marketing-social-link bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                                <span class="text-sm">in</span>
                            </a>
                            <a href="#" class="service_Marketing-social-link bg-pink-500 hover:bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                                <span class="text-sm">ig</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

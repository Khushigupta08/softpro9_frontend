import React from 'react'
import './style.css';
import ScrollArrowButton from './ScrollArrowButton';

export default function Service() {
  return (
    <>
              <ScrollArrowButton />

    <div className="bg-gray-50">
          {/* Hero Section  */}
            <section className="servicespage-gradient-bg text-white py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SoftPro9 Services – Empowering Businesses with Technology, AI & Expertise</h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-5xl mx-auto leading-relaxed text-blue-100">
                            At SoftPro9, we don't just provide services—we create transformational experiences for businesses. With expertise in Advanced Web & App Development, Digital Marketing with AI, SAP Consulting Services, and Recruitment Solutions, we help organizations achieve measurable growth.
                        </p>
                        <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
                            Whether you are a startup aiming to scale or an enterprise optimizing digital operations, SoftPro9 is your trusted partner in growth.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="servicespage-card-hover bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                            <div className="servicespage-stat-number text-5xl font-bold text-white mb-3">500+</div>
                            <h3 className="text-xl font-semibold mb-2">Businesses Served</h3>
                            <p className="text-blue-200">Tailored digital and consulting solutions</p>
                        </div>
                        <div className="servicespage-card-hover bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                            <div className="servicespage-stat-number text-5xl font-bold text-white mb-3">1,000+</div>
                            <h3 className="text-xl font-semibold mb-2">Successful Placements</h3>
                            <p className="text-blue-200">In leading organizations worldwide</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction About SoftPro9  */}
            <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold servicespage-text-gradient mb-6">
                    About SoftPro9 - More Than a Consulting Company
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    SoftPro9 is more than a consulting company—we are a business enabler. For years, we've been at the forefront of digital transformation, SAP consulting, IT solutions, and workforce development.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Mission  */}
                    <div className="servicespage-card-hover servicespage-feature-box rounded-2xl p-8 text-center bg-white shadow">
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                        🎯
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                    <p className="text-gray-600">Bridge the gap between business challenges and technology-driven solutions with measurable ROI</p>
                    </div>

                    {/* Focus  */}
                    <div className="servicespage-card-hover servicespage-feature-box rounded-2xl p-8 text-center bg-white shadow">
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                        🚀
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Focus</h3>
                    <p className="text-gray-600">Helping businesses adopt scalable, future-ready strategies with end-to-end support from consulting to recruitment</p>
                    </div>

                    {/* Results  */}
                    <div className="servicespage-card-hover servicespage-feature-box rounded-2xl p-8 text-center bg-white shadow">
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                        📊
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Results</h3>
                    <p className="text-gray-600">Success isn't measured in words—it's measured in the results we create for our clients</p>
                    </div>
                </div>

                {/* Deliver  */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center shadow">
                    <h3 className="text-2xl font-bold servicespage-text-gradient mb-4">What We Deliver</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3 justify-center">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                        <span className="text-gray-700 font-medium">Scalable Future-Ready Strategies</span>
                    </div>
                    <div className="flex items-center space-x-3 justify-center">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                        <span className="text-gray-700 font-medium">End-to-End Business Support</span>
                    </div>
                    <div className="flex items-center space-x-3 justify-center">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                        <span className="text-gray-700 font-medium">Measurable ROI & Business Impact</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Advanced Web & App Development  */}
            <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                     {/* Left  */}
                    <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Advanced Web & App Development</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        In today's digital-first world, your website or app is more than just an online presence—it's your brand's identity and growth engine. At SoftPro9, we specialize in creating scalable, secure, and user-friendly digital platforms that drive engagement and revenue.
                    </p>
                    <div className="space-y-6">
                         {/* Web  */}
                        <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            🌐
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-lg mb-2">Custom Web Development</h4>
                            <p className="text-gray-600">From corporate websites to e-commerce platforms with modern frameworks and responsive design</p>
                        </div>
                        </div>
                         {/* Mobile  */}
                        <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            📱
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-lg mb-2">Mobile App Development</h4>
                            <p className="text-gray-600">iOS, Android, and cross-platform solutions with Flutter, React Native for seamless user experience</p>
                        </div>
                        </div>
                        {/* Enterprise  */}
                        <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            🖥
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-lg mb-2">Enterprise Solutions</h4>
                            <p className="text-gray-600">CRM, ERP, and SaaS-based applications tailored for business efficiency</p>
                        </div>
                        </div>
                         {/* Cloud  */}
                        <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            ☁
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-lg mb-2">Cloud-Ready Development</h4>
                            <p className="text-gray-600">Scalable apps hosted on AWS, Azure, or Google Cloud with auto-scaling capabilities</p>
                        </div>
                        </div>
                    </div>
                    </div>
                     {/* Right  */}
                    <div className="servicespage-card-hover bg-white rounded-3xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold servicespage-text-gradient mb-8">Why Businesses Choose Us</h3>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">✓</div>
                        <span className="text-gray-700 font-medium">UI/UX focused, ensuring seamless user experiences</span>
                        </div>
                        <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">✓</div>
                        <span className="text-gray-700 font-medium">Secure development with data privacy and compliance</span>
                        </div>
                        <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">✓</div>
                        <span className="text-gray-700 font-medium">Agile methodology for faster delivery and flexibility</span>
                        </div>
                        <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">✓</div>
                        <span className="text-gray-700 font-medium">Post-launch support with updates and maintenance</span>
                        </div>
                    </div>
                    <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                        <h4 className="font-bold text-green-800 mb-2 flex items-center">🏥 Success Case Study</h4>
                        <p className="text-green-700">A healthcare startup built a telemedicine app with us and acquired <strong>10,000+ users in the first quarter</strong></p>
                    </div>
                    </div>
                </div>
                <div className="bg-blue-600 text-white rounded-2xl p-8 text-center mt-12">
                    <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Ideas?</h3>
                    <p className="text-blue-100 text-lg">With SoftPro9, your ideas transform into digital solutions that scale with your business</p>
                </div>
                </div>
            </div>
            </section>

            {/* Digital Marketing with AI  */}
            <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold servicespage-text-gradient mb-6">Digital Marketing with AI</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    Digital marketing is no longer about guesswork—it's about data, automation, and AI-driven insights. At SoftPro9, we combine marketing expertise with Generative AI tools to deliver campaigns that convert.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left  */}
                    <div className="servicespage-card-hover bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 text-white">
                    <h3 className="text-3xl font-bold mb-8">AI-Powered Marketing Services</h3>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/10 rounded-xl p-6 servicespage-hover-scale transition">
                        🔍
                        <h4 className="font-bold text-lg mb-2">SEO & Content Optimization</h4>
                        <p className="text-blue-100 text-sm">AI-driven keyword research & smart content strategies</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 servicespage-hover-scale transition">
                        📢
                        <h4 className="font-bold text-lg mb-2">Social Media Marketing</h4>
                        <p className="text-blue-100 text-sm">Automated posting, sentiment analysis, engagement tracking</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 servicespage-hover-scale transition">
                        🎯
                        <h4 className="font-bold text-lg mb-2">Performance Marketing</h4>
                        <p className="text-blue-100 text-sm">AI-based bidding strategies to maximize ROI</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 servicespage-hover-scale transition">
                        📧
                        <h4 className="font-bold text-lg mb-2">Email & WhatsApp</h4>
                        <p className="text-blue-100 text-sm">Personalized automation powered by AI</p>
                        </div>
                    </div>
                    <div className="mt-8 bg-white/10 rounded-xl p-6">
                        📊
                        <h4 className="font-bold text-xl mb-3">Predictive Analytics</h4>
                        <p className="text-blue-100">Insights to forecast customer behavior and optimize marketing spend with data-driven decisions</p>
                    </div>
                    </div>

                     {/* Right  */}
                    <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-8">The SoftPro9 Marketing Advantage</h3>
                    <div className="space-y-6">
                        <div className="servicespage-card-hover bg-blue-50 rounded-xl p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">🔄</div>
                            <div>
                            <h4 className="font-bold text-lg text-gray-800">Continuous Post-Go-Live Support</h4>
                            <p className="text-gray-600">Long-term partnership for system optimization</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                        <h4 className="font-bold text-green-800 mb-2 flex items-center">🛍 Marketing Success Story</h4>
                        <p className="text-green-700">A retail brand saw a <strong>65% increase in online sales within six months</strong> through AI-powered campaigns</p>
                    </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Lead the Digital Race?</h3>
                    <p className="text-blue-100 text-lg">With us, your brand doesn't just grow—it leads the digital marketing revolution</p>
                </div>
                </div>
            </div>
            </section>

            {/* SAP Consulting Services  */}
            <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-6">SAP Consulting Services</h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                    SAP is the backbone of enterprise digital transformation. At SoftPro9, we deliver end-to-end SAP consulting services that empower organizations to optimize operations, streamline processes, and build future-ready systems.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                     {/* Card 1  */}
                    <div className="servicespage-card-hover bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    ⚙
                    <h3 className="text-2xl font-bold mb-4">SAP Implementation & Migration</h3>
                    <p className="text-gray-300 mb-6 text-lg">Complete S/4HANA, FICO, MM, SD, PP, ABAP, and module implementations</p>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center space-x-3">✓ System analysis and strategic planning</li>
                        <li className="flex items-center space-x-3">✓ Data migration strategies and execution</li>
                        <li className="flex items-center space-x-3">✓ Custom development and integrations</li>
                    </ul>
                    </div>

                     {/* Card 2  */}
                    <div className="servicespage-card-hover bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    🏭
                    <h3 className="text-2xl font-bold mb-4">Business Process Optimization</h3>
                    <p className="text-gray-300 mb-6 text-lg">Supply chain, finance, HR, and logistics improvements with automation</p>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center space-x-3">✓ Business process reengineering</li>
                        <li className="flex items-center space-x-3">✓ Workflow automation and optimization</li>
                        <li className="flex items-center space-x-3">✓ Performance monitoring and analytics</li>
                    </ul>
                    </div>

                    {/* Card 3  */}
                    <div className="servicespage-card-hover bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    🔧
                    <h3 className="text-2xl font-bold mb-4">Support & Maintenance</h3>
                    <p className="text-gray-300 mb-6 text-lg">Continuous system monitoring, upgrades, and technical support</p>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center space-x-3">✓ 24/7 system monitoring and alerts</li>
                        <li className="flex items-center space-x-3">✓ Regular updates, patches, and upgrades</li>
                        <li className="flex items-center space-x-3">✓ User training and ongoing support</li>
                    </ul>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 inline-block">
                    <h3 className="text-2xl font-bold mb-4">SAP Made Simple & Strategic</h3>
                    <p className="text-green-100 text-lg">With SoftPro9, SAP becomes less complex and more strategic for your business growth</p>
                    </div>
                </div>
                </div>
            </div>
            </section>

           {/* Recruitment Solutions  */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold servicespage-text-gradient mb-6">Recruitment Solutions</h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                Talent is the foundation of business success. At SoftPro9, we help companies build strong, future-ready teams with our specialized recruitment services.
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Recruitment Services</h3>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="servicespage-card-hover bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                        <div className="text-4xl mb-4">🎯</div>
                                        <h4 className="font-bold text-gray-800 text-lg mb-3">IT & Non-IT Hiring</h4>
                                        <p className="text-gray-600 mb-4">Pre-screened candidates for technical and business roles across all industries</p>
                                        <ul className="text-gray-500 text-sm space-y-1">
                                            <li>• Software developers & engineers</li>
                                            <li>• Business analysts & managers</li>
                                            <li>• Sales & marketing professionals</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="servicespage-card-hover bg-green-50 rounded-2xl p-6 border border-green-100">
                                        <div className="text-4xl mb-4">👨‍💻</div>
                                        <h4 className="font-bold text-gray-800 text-lg mb-3">Specialized SAP & Digital Marketing</h4>
                                        <p className="text-gray-600 mb-4">Access to niche talent pools with specific expertise</p>
                                        <ul className="text-gray-500 text-sm space-y-1">
                                            <li>• SAP functional & technical consultants</li>
                                            <li>• Digital marketing specialists</li>
                                            <li>• AI & automation experts</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="servicespage-card-hover bg-purple-50 rounded-2xl p-6 border border-purple-100">
                                        <div className="text-4xl mb-4">🤝</div>
                                        <h4 className="font-bold text-gray-800 text-lg mb-3">Flexible Hiring Models</h4>
                                        <p className="text-gray-600 mb-4">Contract, permanent & bulk hiring for all business sizes</p>
                                        <ul className="text-gray-500 text-sm space-y-1">
                                            <li>• Contract-to-hire options</li>
                                            <li>• Permanent placements</li>
                                            <li>• Bulk recruitment drives</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="servicespage-card-hover bg-orange-50 rounded-2xl p-6 border border-orange-100">
                                        <div className="text-4xl mb-4">🧑‍🎓</div>
                                        <h4 className="font-bold text-gray-800 text-lg mb-3">Campus-to-Corporate Programs</h4>
                                        <p className="text-gray-600 mb-4">Helping businesses access young, trained talent from top institutions</p>
                                        <ul className="text-gray-500 text-sm space-y-1">
                                            <li>• Fresh graduate programs</li>
                                            <li>• Internship to employment</li>
                                            <li>• Campus recruitment drives</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="servicespage-card-hover bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 text-white">
                                <h3 className="text-3xl font-bold mb-8">Why Companies Trust Our Recruitment</h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                            <span className="text-2xl">⚡</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">60% Faster Hiring Cycles</h4>
                                            <p className="text-blue-100">Reduced recruitment time with pre-vetted candidates</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                            <span className="text-2xl">🎯</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">Industry-Ready Candidates</h4>
                                            <p className="text-blue-100">Hands-on exposure and practical experience</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                            <span className="text-2xl">🛡</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">Quality-Focused Approach</h4>
                                            <p className="text-blue-100">Replacement guarantees and quality assurance</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                            <span className="text-2xl">📚</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">Integrated Upskilling</h4>
                                            <p className="text-blue-100">Recruitment integrated with training support</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 bg-white/10 rounded-2xl p-6">
                                    <h4 className="font-bold text-xl mb-3 flex items-center">
                                        <span className="text-2xl mr-2">💼</span>
                                        Recruitment Success Story
                                    </h4>
                                    <p className="text-blue-100 text-lg">An IT services company filled <strong>15 SAP and marketing roles within 45 days</strong>, thanks to SoftPro9 recruitment services</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-bold mb-4">Transform Hiring Challenges into Competitive Advantage</h3>
                            <p className="text-green-100 text-lg">With us, hiring is no longer a challenge—it's your competitive advantage for building dream teams</p>
                        </div>
                    </div>
                </div>
            </section>

          {/* Why Choose SoftPro9  */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold servicespage-text-gradient mb-6">Why Choose SoftPro9?</h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                SoftPro9 isn't just a service provider—we are a long-term growth partner committed to your success with proven results and comprehensive solutions.
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
                            <div className="servicespage-card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center">
                                <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                    🏢
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Complete Solutions Under One Roof</h3>
                                <p className="text-gray-600 mb-6">Web development, mobile apps, digital marketing, SAP consulting, and recruitment—all integrated seamlessly for maximum efficiency.</p>
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <p className="text-blue-800 text-sm font-medium">One partner, all solutions, unified strategy</p>
                                </div>
                            </div>
                            
                            <div className="servicespage-card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center">
                                <div className="w-20 h-20 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                    🎓
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Certified Experts & Proven Expertise</h3>
                                <p className="text-gray-600 mb-6">Our consultants and recruiters bring years of hands-on experience with industry certifications and deep domain knowledge.</p>
                                <div className="bg-green-50 rounded-lg p-4">
                                    <p className="text-green-800 text-sm font-medium">Expertise that delivers real results</p>
                                </div>
                            </div>
                            
                            <div className="servicespage-card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center">
                                <div className="w-20 h-20 bg-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                    🚀
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Proven Results & Business Impact</h3>
                                <p className="text-gray-600 mb-6">Businesses consistently report 30–65% growth improvements across various metrics after partnering with us.</p>
                                <div className="bg-purple-50 rounded-lg p-4">
                                    <p className="text-purple-800 text-sm font-medium">Measurable growth, guaranteed impact</p>
                                </div>
                            </div>
                            
                            <div className="servicespage-card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center">
                                <div className="w-20 h-20 bg-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                    🎯
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Hands-On Business-Focused Approach</h3>
                                <p className="text-gray-600 mb-6">Real projects, detailed case studies, and business-focused delivery with practical solutions that work in the real world.</p>
                                <div className="bg-orange-50 rounded-lg p-4">
                                    <p className="text-orange-800 text-sm font-medium">Practical solutions, real-world results</p>
                                </div>
                            </div>
                            
                            <div className="servicespage-card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center">
                                <div className="w-20 h-20 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                    🔄
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Flexible Engagement Models</h3>
                                <p className="text-gray-600 mb-6">Choose from project-based, retainer, or long-term partnership models that align with your business needs and budget.</p>
                                <div className="bg-indigo-50 rounded-lg p-4">
                                    <p className="text-indigo-800 text-sm font-medium">Your terms, our expertise</p>
                                </div>
                            </div>
                            
                            <div className="servicespage-card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center">
                                <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                    🤖
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Future-Ready Technology Integration</h3>
                                <p className="text-gray-600 mb-6">AI, cloud computing, and automation are at the core of all our solutions, ensuring your business stays ahead.</p>
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <p className="text-blue-800 text-sm font-medium">Technology that scales with your growth</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 text-center">
                            <h3 className="text-3xl font-bold mb-6">Ready to Experience the SoftPro9 Difference?</h3>
                            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                                Join 500+ businesses who have transformed their operations and achieved measurable growth with our integrated solutions.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white/10 rounded-xl p-6">
                                    <div className="text-3xl font-bold mb-2">500+</div>
                                    <p className="text-blue-200">Businesses Transformed</p>
                                </div>
                                <div className="bg-white/10 rounded-xl p-6">
                                    <div className="text-3xl font-bold mb-2">65%</div>
                                    <p className="text-blue-200">Average Growth Increase</p>
                                </div>
                                <div className="bg-white/10 rounded-xl p-6">
                                    <div className="text-3xl font-bold mb-2">1000+</div>
                                    <p className="text-blue-200">Successful Placements</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         {/* Client Success Stories & Testimonials  */}
            <section className="py-16 bg-blue-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6">Client Success Stories & Testimonials</h2>
                            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                                Real results from real businesses we've transformed across industries with our comprehensive solutions.
                            </p>
                        </div>
                        
                         {/* Testimonials  */}
                        <div className="grid lg:grid-cols-2 gap-8 mb-16">
                            <div className="servicespage-testimonial-bg servicespage-card-hover rounded-2xl p-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 font-bold text-lg">RK</span>
                                    </div>
                                    <div>
                                        <div className="text-4xl text-blue-600 mb-4">"</div>
                                        <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                                            SoftPro9 transformed our digital presence completely. Their AI-driven campaigns gave us incredible results with a 65% increase in online sales. The team's expertise in digital marketing automation saved us countless hours while delivering better results than we ever imagined.
                                        </p>
                                        <div className="border-t pt-4">
                                            <h4 className="font-bold text-gray-800 text-lg">Ravi Kumar</h4>
                                            <p className="text-gray-600">CEO, Retail Brand</p>
                                            <p className="text-blue-600 text-sm font-medium">65% Sales Growth Achievement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="servicespage-testimonial-bg servicespage-card-hover rounded-2xl p-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-green-600 font-bold text-lg">AS</span>
                                    </div>
                                    <div>
                                        <div className="text-4xl text-green-600 mb-4">"</div>
                                        <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                                            The SAP consulting team at SoftPro9 optimized our operations like never before. We achieved 40% better inventory management and 25% cost reduction within months. Their transparent approach and continuous support made the entire transformation seamless.
                                        </p>
                                        <div className="border-t pt-4">
                                            <h4 className="font-bold text-gray-800 text-lg">Anita Sharma</h4>
                                            <p className="text-gray-600">HR Head, Manufacturing Firm</p>
                                            <p className="text-green-600 text-sm font-medium">40% Inventory Optimization</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                         {/* Success Stories Grid  */}
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                            <div className="servicespage-card-hover bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">🛍</div>
                                <h4 className="text-white font-bold text-lg mb-2">Retail Brand Success</h4>
                                <div className="text-3xl font-bold text-green-300 mb-2">65%</div>
                                <p className="text-blue-100 text-sm">Online sales boost with AI-powered digital marketing campaigns</p>
                            </div>
                            
                            <div className="servicespage-card-hover bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">🏭</div>
                                <h4 className="text-white font-bold text-lg mb-2">Manufacturing Optimization</h4>
                                <div className="text-3xl font-bold text-green-300 mb-2">40%</div>
                                <p className="text-blue-100 text-sm">Better inventory control achieved through SAP implementation</p>
                            </div>
                            
                            <div className="servicespage-card-hover bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">📱</div>
                                <h4 className="text-white font-bold text-lg mb-2">Healthcare App Success</h4>
                                <div className="text-3xl font-bold text-green-300 mb-2">10K+</div>
                                <p className="text-blue-100 text-sm">Users acquired in first quarter through telemedicine app</p>
                            </div>
                            
                            <div className="servicespage-card-hover bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">💼</div>
                                <h4 className="text-white font-bold text-lg mb-2">Fast IT Recruitment</h4>
                                <div className="text-3xl font-bold text-green-300 mb-2">45</div>
                                <p className="text-blue-100 text-sm">Days to fill 15 specialized SAP and marketing roles</p>
                            </div>
                        </div>
                        
                        <div className="text-center mt-12">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-block">
                                <h3 className="text-2xl font-bold text-white mb-4">Join Our Success Stories</h3>
                                <p className="text-blue-100 text-lg">Become the next business transformation case study with SoftPro9's proven solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          {/* Engagement Models & Process  */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold servicespage-text-gradient mb-6">Engagement Models & Our Transparent Process</h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                We offer flexible engagement models and follow a transparent, agile process that ensures consistent results and complete client satisfaction throughout the project lifecycle.
                            </p>
                        </div>
                        
                         {/* Our Process  */}
                        <div className="mb-20">
                            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our 6-Step Success Process</h3>
                            <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-6">
                                <div className="servicespage-process-line servicespage-card-hover bg-blue-50 rounded-2xl p-6 text-center relative">
                                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                                    <h4 className="font-bold text-gray-800 mb-2">Requirement Analysis</h4>
                                    <p className="text-gray-600 text-sm">Deep dive into your business needs, challenges, and objectives</p>
                                </div>
                                
                                <div className="servicespage-process-line servicespage-card-hover bg-green-50 rounded-2xl p-6 text-center relative">
                                    <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                                    <h4 className="font-bold text-gray-800 mb-2">Customized Strategy</h4>
                                    <p className="text-gray-600 text-sm">Tailored proposal with clear scope, timeline, and deliverables</p>
                                </div>
                                
                                <div className="servicespage-process-line servicespage-card-hover bg-purple-50 rounded-2xl p-6 text-center relative">
                                    <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                                    <h4 className="font-bold text-gray-800 mb-2">Solution Design</h4>
                                    <p className="text-gray-600 text-sm">Detailed planning and architecture design for optimal results</p>
                                </div>
                                
                                <div className="servicespage-process-line servicespage-card-hover bg-orange-50 rounded-2xl p-6 text-center relative">
                                    <div className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                                    <h4 className="font-bold text-gray-800 mb-2">Execution & Implementation</h4>
                                    <p className="text-gray-600 text-sm">Agile development and implementation with regular updates</p>
                                </div>
                                
                                <div className="servicespage-process-line servicespage-card-hover bg-indigo-50 rounded-2xl p-6 text-center relative">
                                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">5</div>
                                    <h4 className="font-bold text-gray-800 mb-2">Monitoring & Optimization</h4>
                                    <p className="text-gray-600 text-sm">Continuous monitoring and performance optimization</p>
                                </div>
                                
                                <div className="servicespage-process-line servicespage-card-hover bg-red-50 rounded-2xl p-6 text-center relative">
                                    <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">6</div>
                                    <h4 className="font-bold text-gray-800 mb-2">Delivery & Support</h4>
                                    <p className="text-gray-600 text-sm">Final delivery with comprehensive ongoing support</p>
                                </div>
                            </div>
                        </div>
                        
                         {/* Engagement Models  */}
                        <div>
                            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Flexible Engagement Models</h3>
                            <div className="grid lg:grid-cols-3 gap-8">
                                <div className="servicespage-card-hover bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-100">
                                    <div className="text-5xl mb-6 text-center">📋</div>
                                    <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">Project-Based</h4>
                                    <p className="text-gray-600 mb-6 text-center">Defined scope with clear timelines and fixed deliverables for specific business requirements</p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                            <span className="text-gray-700">Specific deliverables and milestones</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                            <span className="text-gray-700">Milestone-based payment structure</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6 bg-blue-100 rounded-lg p-4">
                                        <p className="text-blue-800 text-sm font-medium">Best for: One-time projects, specific implementations</p>
                                    </div>
                                </div>
                                
                                <div className="servicespage-card-hover bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-100">
                                    <div className="text-5xl mb-6 text-center">🔄</div>
                                    <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">Retainer Model</h4>
                                    <p className="text-gray-600 mb-6 text-center">Ongoing support and continuous optimization with dedicated resources for your business</p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                            <span className="text-gray-700">Monthly commitment and predictable costs</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                            <span className="text-gray-700">Priority support and faster response</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                            <span className="text-gray-700">Flexible scope adjustments</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6 bg-green-100 rounded-lg p-4">
                                        <p className="text-green-800 text-sm font-medium">Best for: Ongoing marketing, maintenance, support</p>
                                    </div>
                                </div>
                                
                                <div className="servicespage-card-hover bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-100">
                                    <div className="text-5xl mb-6 text-center">🤝</div>
                                    <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">Strategic Partnership</h4>
                                    <p className="text-gray-600 mb-6 text-center">Long-term collaboration across multiple services with shared growth objectives</p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                            <span className="text-gray-700">Strategic business partnership</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                            <span className="text-gray-700">Multiple service integration</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                            <span className="text-gray-700">Shared growth and success metrics</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6 bg-purple-100 rounded-lg p-4">
                                        <p className="text-purple-800 text-sm font-medium">Best for: Enterprise clients, long-term growth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-16">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 inline-block">
                                <h3 className="text-2xl font-bold mb-4">Ready to Choose Your Engagement Model?</h3>
                                <p className="text-blue-100 text-lg mb-6">Our transparent and agile process ensures consistent results and client satisfaction across all models</p>
                                <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg servicespage-hover-scale transition-transform duration-300">
                                    📞 Discuss Your Requirements
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          {/* Get Started Section  */}
            <section className="py-20 servicespage-gradient-bg text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-5xl font-bold mb-8">Get Started with SoftPro9 Today</h2>
                        <p className="text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                            Your journey toward growth, innovation, and success begins here. Transform your business with the perfect blend of technology, AI expertise, and human intelligence.
                        </p>
                        
                        <div className="grid lg:grid-cols-2 gap-12 mb-16">
                            <div className="servicespage-card-hover bg-white/10 backdrop-blur-sm rounded-3xl p-10">
                                <div className="text-6xl mb-6">🏢</div>
                                <h3 className="text-3xl font-bold mb-6">For Businesses</h3>
                                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                    Launch innovative projects, optimize SAP systems, or accelerate your digital presence with our comprehensive, integrated solutions designed for measurable growth.
                                </p>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-4 justify-center">
                                        <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
                                        <span className="text-blue-100">Custom web & mobile app development</span>
                                    </div>
                                    <div className="flex items-center space-x-4 justify-center">
                                        <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
                                        <span className="text-blue-100">AI-powered marketing campaigns & automation</span>
                                    </div>
                                    <div className="flex items-center space-x-4 justify-center">
                                        <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
                                        <span className="text-blue-100">SAP implementation & business optimization</span>
                                    </div>
                                </div>
                                
                                <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl servicespage-hover-scale transition-all duration-300 text-lg">
                                    🚀 Start Your Project
                                </button>
                            </div>
                            
                            <div className="servicespage-card-hover bg-white/10 backdrop-blur-sm rounded-3xl p-10">
                                <div className="text-6xl mb-6">👥</div>
                                <h3 className="text-3xl font-bold mb-6">For Companies</h3>
                                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                    Build strong, future-ready teams with our specialized recruitment solutions, talent acquisition expertise, and comprehensive workforce development programs.
                                </p>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-4 justify-center">
                                        <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
                                        <span className="text-blue-100">IT & specialized technical hiring</span>
                                    </div>
                                    <div className="flex items-center space-x-4 justify-center">
                                        <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
                            <span className="text-blue-100">SAP & digital marketing talent acquisition </span>
                            </div>
                                    <div className="flex items-center space-x-4 justify-center">
                                        <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
                                        <span className="text-blue-100">Flexible recruitment models & bulk hiring</span>
                                    </div>
                                </div>
                                
                                <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl servicespage-hover-scale transition-all duration-300 text-lg">
                                    👔 Find Top Talent
                                </button>
                            </div>
                        </div>
                        
                         {/* Final CTA  */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
                            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
                            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
                                Contact SoftPro9 today and take the first step toward measurable growth, digital transformation, and sustainable success.
                            </p>
                            
                            <div className="flex flex-wrap justify-center gap-6 mb-8">
                                <button className="servicespage-hover-scale bg-white text-blue-600 font-bold px-10 py-4 rounded-xl transition-transform duration-300 text-lg">
                                    📞 Get Free Consultation
                                </button>
                                <button className="servicespage-hover-scale border-2 border-white text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:bg-white hover:text-blue-600 text-lg">
                                    📈 View Our Portfolio
                                </button>
                                <button className="servicespage-hover-scale border-2 border-white text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:bg-white hover:text-blue-600 text-lg">
                                    💬 Schedule a Meeting
                                </button>
                            </div>
                            
                            <div className="border-t border-white/20 pt-8">
                                <p className="text-blue-200 text-lg font-medium italic mb-4">
                                    "With SoftPro9, success isn't a dream—it's a well-planned, measurable outcome."
                                </p>
                                <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">500+</div>
                                        <p className="text-blue-200 text-sm">Businesses Served</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">65%</div>
                                        <p className="text-blue-200 text-sm">Average Growth</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">1000+</div>
                                        <p className="text-blue-200 text-sm">Successful Placements</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
     
    
     

     
      



     
     
      


    </>
  )
}

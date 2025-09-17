// import React from 'react'
import './style.css';
import { Code , Database , Users, Clock , Award ,Briefcase,ArrowUpRight} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
     {/* Hero Section  */}
        <section className="gradient-bg pt-20 pb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="slide-in">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Empowering Businesses With 
                            <span className="block text-blue-200">Technology, Innovation & AI</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-xl">
                            Trusted IT partner for SAP Services, Web & App Development, and AI-driven Digital Marketing. 
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg pulse-blue">
                                Explore Services
                            </button>
                            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg pulse-blue">
                                Talk to an Expert
                            </button>
                        </div>
                    </div>
                    <div className="floating-animation">
                        <div className="glass-effect rounded-3xl p-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">10K+</div>
                                    <div className="text-blue-200">Students Trained</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">95%</div>
                                    <div className="text-blue-200">Placement Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">50+</div>
                                    <div className="text-blue-200">Industry Partners</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">8+</div>
                                    <div className="text-blue-200">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

     {/* About SoftPro9 Section  */}
        <section class="home-about-section py-20  bg-blue-50">
        <div class="container mx-auto px-6 text-center">
            <div class="home-about-content max-w-4xl mx-auto">
                <h1 class="home-about-title text-5xl md:text-6xl font-bold text-black mb-6">
                    Welcome to <span class="home-brand-name text-blue-600">SoftPro9</span>
                </h1>
                {/* <!-- Who We Are, What We Do, Our Vision Cards --> */}
                <div class="home-about-cards grid md:grid-cols-3 gap-8 mb-12">
                    <div class="home-who-card bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                        <div class="home-who-icon bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                            </svg>
                        </div>
                        <h3 class="home-who-title text-xl font-semibold text-blck mb-3">Who We Are</h3>
                        <p class="home-who-description text-black-100 text-sm leading-relaxed">
                            We are a leading technology solutions provider with 10+ years of expertise, serving 100+ clients globally with cutting-edge digital innovations.
                        </p>
                    </div>

                    <div class="home-what-card bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                        <div class="home-what-icon bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                            </svg>
                        </div>
                        <h3 class="home-what-title text-xl font-semibold text-black mb-3">What We Do</h3>
                        <p class="home-what-description text-black-100 text-sm leading-relaxed">
                            We specialize in digital transformation, innovative software development, AI solutions, and comprehensive training programs for modern businesses.
                        </p>
                    </div>

                    <div class="home-vision-card bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                        <div class="home-vision-icon bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                        </div>
                        <h3 class="home-vision-title text-xl font-semibold text-black mb-3">Our Vision</h3>
                        <p class="home-vision-description text-black-100 text-sm leading-relaxed">
                            To empower businesses worldwide through technology excellence and strategic innovation, creating a digitally transformed future for all industries.
                        </p>
                    </div>
                </div>
                <div class="home-stats-container flex flex-wrap justify-center gap-8 mb-10">
                    <div class="home-stat-item bg-blue-200 backdrop-blur-sm rounded-lg p-4 text-black">
                        <div class="home-stat-number text-2xl font-bold">100+</div>
                        <div class="home-stat-label">Clients</div>
                    </div>
                    <div class="home-stat-item bg-blue-200 backdrop-blur-sm rounded-lg p-4 text-black">
                        <div class="home-stat-number text-2xl font-bold">10+</div>
                        <div class="home-stat-label">Years Expertise</div>
                    </div>
                    <div class="home-stat-item bg-blue-200 backdrop-blur-sm rounded-lg p-4 text-black">
                        <div class="home-stat-number text-2xl font-bold">Global</div>
                        <div class="home-stat-label">Reach</div>
                    </div>
                </div>
                <Link to='/about'><button class="home-about-cta bg-blue-500 hover:bg-blue-400 text-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                    Learn More About Us
                </button></Link>
            </div>
        </div>
       </section>
 
     {/* Our Core services  */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our comprehensive range of industry-focused courses designed to accelerate your career growth</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Web Development  */}
                        <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-start space-x-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <Code className="h-10 w-10 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Web & App DEvelopment</h3>
                                    <p className="text-gray-600 mb-4">Scalable, secure,and AI-powered dogital solutions</p>
                                    <div className="flex items-center justify-between mb-4">
                                        {/* <div className="text-3xl font-bold text-blue-600">₹15,999</div>
                                        <div className="text-sm text-gray-500">6 Months Program</div> */}
                                    </div>
                                    <Link to='/web'><button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                                        Explore Development
                                    </button></Link>
                                </div>
                            </div>
                        </div>

                    {/* SAP Training  */}
                        <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-start space-x-6">
                                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Database className="h-10 w-10 text-blue-600"/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">SAP Services</h3>
                                    <p className="text-gray-600 mb-4">Implementation ,Migration,Consulting, Support & Training</p>
                                    <div className="flex items-center justify-between mb-4">
                                        {/* <div className="text-3xl font-bold text-purple-600">₹25,999</div>
                                        <div className="text-sm text-gray-500">4 Months Program</div> */}
                                    </div>
                                    <Link to='/sap'><button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                                        Explore SAP Services
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                        {/* Digital Marketing  */}
                        <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-start space-x-6">
                                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Database className="h-10 w-10 text-blue-600"/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Marketing With AI</h3>
                                    <p className="text-gray-600 mb-4">Smarter campaigns with AI-driven strategies &  automation</p>
                                    <div className="flex items-center justify-between mb-4">
                                        {/* <div className="text-3xl font-bold text-purple-600">₹25,999</div>
                                        <div className="text-sm text-gray-500">4 Months Program</div> */}
                                    </div>
                                    <Link to='/digital'><button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                                        Explore SAP Marketing
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                </div>

                
            </div>
        </section>

     {/* Why Choose Us  */}
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SoftPro9?</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">We provide industry-relevant training with practical experience and guaranteed placement assistance</p>
                </div>
                
                <div className="grid md:grid-cols-5 gap-8">
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                            <Users className="h-10 w-10 text-blue-600"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">AI & Emerging Tech Experts</h3>
                    </div>
                    
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                            <Clock className="h-10 w-10 text-green-600"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">End-to-End IT Solutions</h3>
                    </div>
                    
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                            <Award className="h-10 w-10 text-purple-600"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Specific Strategies</h3>
                    </div>
                    
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                            <Briefcase className="h-10 w-10 text-orange-600"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Support & Maintenance</h3>
                        
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                            <ArrowUpRight className="h-10 w-10 text-orange-600"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Measurable ROI & Proven Results</h3>
                        
                    </div>
                </div>
            </div>
        </section>

     {/* Featured Case Studies Section  */}
    <section class="home-casestudies-section py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="home-casestudies-header text-center mb-16">
                <h2 class="home-casestudies-title text-4xl font-bold text-blue-900 mb-4">
                    Featured Success Stories
                </h2>
                <p class="home-casestudies-subtitle text-xl text-gray-600">
                    Discover how we've transformed businesses across industries
                </p>
            </div>
            
            <div class="home-casestudies-grid grid md:grid-cols-3 gap-8">
                <div class="home-case-card bg-white rounded-xl p-8 home-card-shadow home-hover-transform">
                    <div class="home-case-icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h3 class="home-case-title text-2xl font-semibold text-blue-900 mb-4">E-commerce Revolution</h3>
                    <p class="home-case-description text-gray-600 mb-6">
                        Increased client's sales by 200% using AI-driven marketing automation and personalized customer experiences.
                    </p>
                    <div class="home-case-outcome bg-blue-50 p-4 rounded-lg">
                        <span class="home-outcome-label text-blue-600 font-medium">Result: 200% Sales Increase</span>
                    </div>
                </div>

                <div class="home-case-card bg-white rounded-xl p-8 home-card-shadow home-hover-transform">
                    <div class="home-case-icon bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                    </div>
                    <h3 class="home-case-title text-2xl font-semibold text-blue-900 mb-4">Digital Transformation</h3>
                    <p class="home-case-description text-gray-600 mb-6">
                        Streamlined operations for Fortune 500 company, reducing costs by 40% through cloud migration and automation.
                    </p>
                    <div class="home-case-outcome bg-green-50 p-4 rounded-lg">
                        <span class="home-outcome-label text-green-600 font-medium">Result: 40% Cost Reduction</span>
                    </div>
                </div>

                <div class="home-case-card bg-white rounded-xl p-8 home-card-shadow home-hover-transform">
                    <div class="home-case-icon bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                        </svg>
                    </div>
                    <h3 class="home-case-title text-2xl font-semibold text-blue-900 mb-4">AI Integration</h3>
                    <p class="home-case-description text-gray-600 mb-6">
                        Enhanced productivity by 150% through custom AI solutions and intelligent workflow automation systems.
                    </p>
                    <div class="home-case-outcome bg-purple-50 p-4 rounded-lg">
                        <span class="home-outcome-label text-purple-600 font-medium">Result: 150% Productivity Boost</span>
                    </div>
                </div>
            </div>

            <div class="home-casestudies-cta text-center mt-12">
                <button class="home-cases-btn bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300">
                    View All Case Studies
                </button>
            </div>
        </div>
    </section>

     
      {/* Testimonials & Client Logos Section  */}
    <section class="home-testimonials-section py-20 bg-blue-50">
        <div class="container mx-auto px-6">
            <div class="home-testimonials-header text-center mb-16">
                <h2 class="home-testimonials-title text-4xl font-bold text-blue-900 mb-4">
                    What Our Clients Say
                </h2>
                <p class="home-testimonials-subtitle text-xl text-gray-600">
                    Trusted by leading companies worldwide
                </p>
            </div>

              {/* Client Testimonials  */}
            <div class="home-testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div class="home-testimonial-card bg-white rounded-xl p-8 home-card-shadow home-hover-transform">
                    <div class="home-quote-icon text-blue-300 text-4xl mb-4">"</div>
                    <p class="home-testimonial-text text-gray-700 mb-6 italic">
                        "SoftPro9 transformed our entire digital infrastructure. Their expertise in AI implementation helped us achieve unprecedented growth."
                    </p>
                    <div class="home-testimonial-author">
                        <div class="home-author-name font-semibold text-blue-900">Sarah Johnson</div>
                        <div class="home-author-position text-gray-600">CEO, TechVision Inc</div>
                    </div>
                </div>

                <div class="home-testimonial-card bg-white rounded-xl p-8 home-card-shadow home-hover-transform">
                    <div class="home-quote-icon text-blue-300 text-4xl mb-4">"</div>
                    <p class="home-testimonial-text text-gray-700 mb-6 italic">
                        "Outstanding training programs! Our team's productivity increased significantly after the Full Stack Development course."
                    </p>
                    <div class="home-testimonial-author">
                        <div class="home-author-name font-semibold text-blue-900">Michael Chen</div>
                        <div class="home-author-position text-gray-600">CTO, InnovateLab</div>
                    </div>
                </div>

                <div class="home-testimonial-card bg-white rounded-xl p-8 home-card-shadow home-hover-transform">
                    <div class="home-quote-icon text-blue-300 text-4xl mb-4">"</div>
                    <p class="home-testimonial-text text-gray-700 mb-6 italic">
                        "Professional, reliable, and results-driven. SoftPro9 delivered beyond our expectations on every project."
                    </p>
                    <div class="home-testimonial-author">
                        <div class="home-author-name font-semibold text-blue-900">Emily Rodriguez</div>
                        <div class="home-author-position text-gray-600">Director, GlobalTech Solutions</div>
                    </div>
                </div>
            </div>

              {/* Client Logos  */}
            <div class="home-clients-section">
                <h3 class="home-clients-title text-2xl font-semibold text-center text-blue-900 mb-8">
                    Trusted by Industry Leaders
                </h3>
                <div class="home-clients-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                    <div class="home-client-logo bg-white rounded-lg p-4 home-card-shadow flex items-center justify-center h-20">
                        <span class="home-logo-text font-bold text-blue-600">TechCorp</span>
                    </div>
                    <div class="home-client-logo bg-white rounded-lg p-4 home-card-shadow flex items-center justify-center h-20">
                        <span class="home-logo-text font-bold text-purple-600">InnovateX</span>
                    </div>
                    <div class="home-client-logo bg-white rounded-lg p-4 home-card-shadow flex items-center justify-center h-20">
                        <span class="home-logo-text font-bold text-green-600">FutureTech</span>
                    </div>
                    <div class="home-client-logo bg-white rounded-lg p-4 home-card-shadow flex items-center justify-center h-20">
                        <span class="home-logo-text font-bold text-red-600">NextGen</span>
                    </div>
                    <div class="home-client-logo bg-white rounded-lg p-4 home-card-shadow flex items-center justify-center h-20">
                        <span class="home-logo-text font-bold text-indigo-600">SmartSys</span>
                    </div>
                    <div class="home-client-logo bg-white rounded-lg p-4 home-card-shadow flex items-center justify-center h-20">
                        <span class="home-logo-text font-bold text-yellow-600">ProTech</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Blog/Insights Section  */}
    <section class="home-blog-section py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="home-blog-header text-center mb-16">
                <h2 class="home-blog-title text-4xl font-bold text-blue-900 mb-4">
                    Latest Insights & Articles
                </h2>
                <p class="home-blog-subtitle text-xl text-gray-600">
                    Stay updated with industry trends and expert perspectives
                </p>
            </div>

            <div class="home-blog-grid grid md:grid-cols-3 gap-8">
                <article class="home-blog-card bg-white border border-gray-200 rounded-xl overflow-hidden home-card-shadow home-hover-transform">
                    <div class="home-blog-image bg-gradient-to-r from-blue-400 to-blue-600 h-48 flex items-center justify-center">
                        <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12a1 1 0 102 0V7a1 1 0 10-2 0v5zM6 7a1 1 0 112 0v5a1 1 0 11-2 0V7zM13 7a1 1 0 112 0v5a1 1 0 11-2 0V7z"/>
                        </svg>
                    </div>
                    <div class="home-blog-content p-6">
                        <div class="home-blog-meta text-sm text-blue-600 mb-2">AI Technology • Jan 15, 2025</div>
                        <h3 class="home-blog-post-title text-xl font-semibold text-blue-900 mb-3">
                            The Future of AI in Business Automation
                        </h3>
                        <p class="home-blog-excerpt text-gray-600 mb-4">
                            Explore how artificial intelligence is revolutionizing business processes and driving unprecedented efficiency gains across industries.
                        </p>
                        <div class="home-blog-author flex items-center">
                            <div class="home-author-avatar bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                                <span class="home-avatar-initial text-blue-600 font-semibold">JS</span>
                            </div>
                            <div class="home-author-info ml-3">
                                <div class="home-author-name text-sm font-medium text-gray-900">John Smith</div>
                                <div class="home-author-role text-xs text-gray-600">AI Expert</div>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="home-blog-card bg-white border border-gray-200 rounded-xl overflow-hidden home-card-shadow home-hover-transform">
                    <div class="home-blog-image bg-gradient-to-r from-purple-400 to-purple-600 h-48 flex items-center justify-center">
                        <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                        </svg>
                    </div>
                    <div class="home-blog-content p-6">
                        <div class="home-blog-meta text-sm text-purple-600 mb-2">Digital Marketing • Jan 12, 2025</div>
                        <h3 class="home-blog-post-title text-xl font-semibold text-blue-900 mb-3">
                            Data-Driven Marketing Strategies for 2025
                        </h3>
                        <p class="home-blog-excerpt text-gray-600 mb-4">
                            Discover the latest data-driven marketing techniques that are helping businesses achieve better ROI and customer engagement.
                        </p>
                        <div class="home-blog-author flex items-center">
                            <div class="home-author-avatar bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center">
                                <span class="home-avatar-initial text-purple-600 font-semibold">MD</span>
                            </div>
                            <div class="home-author-info ml-3">
                                <div class="home-author-name text-sm font-medium text-gray-900">Maria Davis</div>
                                <div class="home-author-role text-xs text-gray-600">Marketing Director</div>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="home-blog-card bg-white border border-gray-200 rounded-xl overflow-hidden home-card-shadow home-hover-transform">
                    <div class="home-blog-image bg-gradient-to-r from-green-400 to-green-600 h-48 flex items-center justify-center">
                        <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                        </svg>
                    </div>
                    <div class="home-blog-content p-6">
                        <div class="home-blog-meta text-sm text-green-600 mb-2">Development • Jan 10, 2025</div>
                        <h3 class="home-blog-post-title text-xl font-semibold text-blue-900 mb-3">
                            Cloud Migration Best Practices
                        </h3>
                        <p class="home-blog-excerpt text-gray-600 mb-4">
                            Learn essential strategies and best practices for successful cloud migration projects that minimize risk and maximize benefits.
                        </p>
                        <div class="home-blog-author flex items-center">
                            <div class="home-author-avatar bg-green-100 w-10 h-10 rounded-full flex items-center justify-center">
                                <span class="home-avatar-initial text-green-600 font-semibold">RT</span>
                            </div>
                            <div class="home-author-info ml-3">
                                <div class="home-author-name text-sm font-medium text-gray-900">Robert Taylor</div>
                                <div class="home-author-role text-xs text-gray-600">Cloud Architect</div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="home-blog-cta text-center mt-12">
                <Link to='/blogs'><button class="home-insights-btn bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300">
                    Read More Insights
                </button></Link>
            </div>
        </div>
    </section>

    {/* Call-to-Action Section */}
    <section class="home-cta-section py-20 home-gradient-bg relative overflow-hidden">
        <div class="home-cta-pattern absolute inset-0 opacity-10">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
        </div>
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="home-cta-content text-center max-w-4xl mx-auto">
                <h2 class="home-cta-headline text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Let's Build the <span class="home-highlight-text text-blue-200">Future</span> of Your Business Together
                </h2>
                <p class="home-cta-description text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                    Ready to transform your business with cutting-edge technology solutions? Our experts are here to help you achieve your digital transformation goals.
                </p>
                
                <div class="home-cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="home-primary-cta bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-base transition-all duration-300 transform hover:scale-105 cta-pulse-animation shadow-lg">
                        Request a Free Consultation
                    </button>
                    <button class="home-secondary-cta bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-8 py-3 rounded-full text-base transition-all duration-300 shadow-lg">
                        Get a Quote
                    </button>
                </div>

                <div class="home-cta-features mt-12 grid md:grid-cols-3 gap-8">
                    <div class="home-feature-item text-center">
                        <div class="home-feature-icon bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-400 transition-colors duration-300">
                            <svg class="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                        </div>
                        <div class="home-feature-text text-white">
                            <div class="home-feature-title font-semibold mb-2">Free Consultation</div>
                            <div class="home-feature-description text-blue-100">No commitment required</div>
                        </div>
                    </div>

                    <div class="home-feature-item text-center">
                        <div class="home-feature-icon bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-400 transition-colors duration-300">
                            <svg class="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                            </svg>
                        </div>
                        <div class="home-feature-text text-white">
                            <div class="home-feature-title font-semibold mb-2">24/7 Support</div>
                            <div class="home-feature-description text-blue-100">Always here to help</div>
                        </div>
                    </div>

                    <div class="home-feature-item text-center">
                        <div class="home-feature-icon bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-400 transition-colors duration-300">
                            <svg class="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                            </svg>
                        </div>
                        <div class="home-feature-text text-white">
                            <div class="home-feature-title font-semibold mb-2">Expert Team</div>
                            <div class="home-feature-description text-blue-100">Certified professionals</div>
                        </div>
                    </div>
                </div>

                <div class="home-contact-info mt-12 text-center">
                    <p class="home-contact-text text-blue-100 mb-4">
                        Or call us directly at <span class="home-phone-number text-blue-200 font-semibold">+91 9876543210</span>
                    </p>
                    <div class="home-business-hours text-sm text-blue-200">
                        Available Monday - Friday, 9:00 AM - 6:00 PM EST
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

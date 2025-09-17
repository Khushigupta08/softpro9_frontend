import React from 'react'
import { useEffect } from "react";
import './style.css';

export default function Web() {
    //smooth scroll for CTA buttons
  useEffect(() => {
    const handleClick = () => {
      document.querySelector(".serviceweb-contact-form")?.scrollIntoView({
        behavior: "smooth",
      });
    };

    const buttons = document.querySelectorAll(
      ".serviceweb-cta-btn, .serviceweb-cta-secondary, .serviceweb-cta-primary"
    );
    buttons.forEach((btn) => btn.addEventListener("click", handleClick));

    // cleanup
    return () => {
      buttons.forEach((btn) => btn.removeEventListener("click", handleClick));
    };
  }, []);

  // Toggle FAQ
  const toggleFAQ = (e) => {
    const element = e.currentTarget;
    const answer = element.nextElementSibling;
    const icon = element.querySelector("i");

    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      icon.classList.add("rotate-180");
    } else {
      answer.classList.add("hidden");
      icon.classList.remove("rotate-180");
    }
  };

  return (
    <>
      {/* Hero Section  */}
    <section className="serviceweb-gradient-bg text-white py-20">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Building Next-Gen <span className="text-blue-200">Web & Mobile</span> Solutions
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                    Scalable, secure, and user-friendly applications tailored to your business needs.
                </p>
                <button className="serviceweb-cta-btn bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg">
                    <i className="fas fa-phone-alt mr-2"></i>Get a Free Consultation
                </button>
            </div>
        </div>
    </section>

      {/* Introduction Section  */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Advanced Technology Expertise</h2>
                <div className="text-lg text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
                    <p className="mb-4">
                        SoftPro9 specializes in cutting-edge web and mobile development using the latest technologies including 
                        <span className="text-blue-600 font-semibold">MERN Stack</span>, 
                        <span className="text-blue-600 font-semibold">MEAN Stack</span>, 
                        <span className="text-blue-600 font-semibold">Cloud-Native Architecture</span>, 
                        <span className="text-blue-600 font-semibold">AI Integration</span>, 
                        and <span className="text-blue-600 font-semibold">Progressive Web Apps</span>.
                    </p>
                    <p>
                        We serve diverse industries including Retail, Education, Healthcare, Manufacturing, and more with tailored digital solutions that drive business growth and innovation.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="serviceweb-tech-badge text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="serviceweb-tech-icon-wrapper bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                            <i className="fab fa-react text-blue-600 text-2xl"></i>
                        </div>
                        <p className="text-sm font-semibold text-gray-800">React/MERN</p>
                        <p className="text-xs text-gray-500 mt-1">Modern Stack</p>
                    </div>
                    <div className="serviceweb-tech-badge text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="serviceweb-tech-icon-wrapper bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                            <i className="fab fa-angular text-blue-600 text-2xl"></i>
                        </div>
                        <p className="text-sm font-semibold text-gray-800">Angular/MEAN</p>
                        <p className="text-xs text-gray-500 mt-1">Enterprise Grade</p>
                    </div>
                    <div className="serviceweb-tech-badge text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="serviceweb-tech-icon-wrapper bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                            <i className="fas fa-cloud text-blue-600 text-2xl"></i>
                        </div>
                        <p className="text-sm font-semibold text-gray-800">Cloud-Native</p>
                        <p className="text-xs text-gray-500 mt-1">Scalable Solutions</p>
                    </div>
                    <div className="serviceweb-tech-badge text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="serviceweb-tech-icon-wrapper bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                            <i className="fas fa-robot text-blue-600 text-2xl"></i>
                        </div>
                        <p className="text-sm font-semibold text-gray-800">AI Integration</p>
                        <p className="text-xs text-gray-500 mt-1">Smart Features</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Main Services Section  */}
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Development Services</h2>
                <p className="text-lg text-gray-600">Comprehensive solutions for modern digital needs</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                  {/* Web Development  */}
                <div className="serviceweb-service-card bg-white rounded-2xl p-8 serviceweb-card-hover">
                    <div className="flex items-center mb-6">
                        <div className="serviceweb-icon-wrapper bg-blue-100 p-4 rounded-full mr-4">
                            <i className="fas fa-laptop-code text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Web Development</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            Custom Website Development
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            E-commerce Solutions
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            CMS Development (WordPress, Headless CMS)
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            Enterprise Web Portals
                        </li>
                    </ul>
                </div>

                  {/* Mobile App Development  */}
                <div className="serviceweb-service-card bg-white rounded-2xl p-8 serviceweb-card-hover">
                    <div className="flex items-center mb-6">
                        <div className="serviceweb-icon-wrapper bg-blue-100 p-4 rounded-full mr-4">
                            <i className="fas fa-mobile-alt text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Mobile App Development</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            Native Apps (iOS, Android)
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            Cross-Platform Apps (Flutter, React Native)
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            Progressive Web Apps (PWAs)
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            Mobile App UI/UX Design
                        </li>
                    </ul>
                </div>

                 {/* Full Stack Development  */}
                <div className="serviceweb-service-card bg-white rounded-2xl p-8 serviceweb-card-hover">
                    <div className="flex items-center mb-6">
                        <div className="serviceweb-icon-wrapper bg-blue-100 p-4 rounded-full mr-4">
                            <i className="fas fa-layer-group text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Full Stack Development</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            MERN & MEAN Stack Development
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            API Development & Integration
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            Microservices Architecture
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            Cloud-Native Development
                        </li>
                    </ul>
                </div>

                 {/* Emerging Technologies  */}
                <div className="serviceweb-service-card bg-white rounded-2xl p-8 serviceweb-card-hover">
                    <div className="flex items-center mb-6">
                        <div className="serviceweb-icon-wrapper bg-blue-100 p-4 rounded-full mr-4">
                            <i className="fas fa-rocket text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Emerging Technology Solutions</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            AI-powered Web & App Solutions
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            IoT-Enabled Applications
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            Blockchain Integration
                        </li>
                        <li className="flex items-center text-gray-700">
                            <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                            AR/VR App Development
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

      {/* Development Process  */}
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Development Process</h2>
                <p className="text-lg text-gray-600">Transparent workflow for successful project delivery</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
                <div className="serviceweb-process-step text-center">
                    <div className="serviceweb-process-icon bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Discovery & Strategy</h4>
                    <p className="text-sm text-gray-600">Understanding client needs & goals</p>
                </div>

                <div className="serviceweb-process-step text-center">
                    <div className="serviceweb-process-icon bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Design & Prototyping</h4>
                    <p className="text-sm text-gray-600">Wireframes, UI/UX design</p>
                </div>

                <div className="serviceweb-process-step text-center">
                    <div className="serviceweb-process-icon bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Development</h4>
                    <p className="text-sm text-gray-600">Scalable coding with modern frameworks</p>
                </div>

                <div className="serviceweb-process-step text-center">
                    <div className="serviceweb-process-icon bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Testing & QA</h4>
                    <p className="text-sm text-gray-600">Ensuring security, performance & usability</p>
                </div>

                <div className="serviceweb-process-step text-center">
                    <div className="serviceweb-process-icon bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">5</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Deployment</h4>
                    <p className="text-sm text-gray-600">Cloud / On-premise setup</p>
                </div>

                <div className="serviceweb-process-step text-center">
                    <div className="serviceweb-process-icon bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">6</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Maintenance & Support</h4>
                    <p className="text-sm text-gray-600">Ongoing updates, enhancements</p>
                </div>
            </div>
        </div>
    </section>

       {/* Why Choose SoftPro9  */}
    <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose SoftPro9?</h2>
                    <p className="text-lg text-gray-600">Your trusted partner for digital transformation</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="serviceweb-feature-card text-center p-6 bg-white rounded-xl serviceweb-card-hover">
                        <div className="serviceweb-feature-icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-cogs text-blue-600 text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Latest Technologies</h4>
                        <p className="text-gray-600">Expertise in cutting-edge frameworks & technologies</p>
                    </div>

                    <div className="serviceweb-feature-card text-center p-6 bg-white rounded-xl serviceweb-card-hover">
                        <div className="serviceweb-feature-icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-brain text-blue-600 text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">AI-Driven Development</h4>
                        <p className="text-gray-600">AI-driven insights & automation in development</p>
                    </div>

                    <div className="serviceweb-feature-card text-center p-6 bg-white rounded-xl serviceweb-card-hover">
                        <div className="serviceweb-feature-icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Scalable & Secure</h4>
                        <p className="text-gray-600">Cloud-native solutions built for scale and security</p>
                    </div>

                    <div className="serviceweb-feature-card text-center p-6 bg-white rounded-xl serviceweb-card-hover">
                        <div className="serviceweb-feature-icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-industry text-blue-600 text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Cross-Industry Expertise</h4>
                        <p className="text-gray-600">Deep understanding of diverse industry requirements</p>
                    </div>

                    <div className="serviceweb-feature-card text-center p-6 bg-white rounded-xl serviceweb-card-hover">
                        <div className="serviceweb-feature-icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-rocket text-blue-600 text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Agile Methodology</h4>
                        <p className="text-gray-600">Faster delivery with agile development practices</p>
                    </div>

                    <div className="serviceweb-feature-card text-center p-6 bg-white rounded-xl serviceweb-card-hover">
                        <div className="serviceweb-feature-icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-headset text-blue-600 text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">24/7 Support</h4>
                        <p className="text-gray-600">Continuous support and maintenance services</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Portfolio Section  */}
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Success Stories</h2>
                <p className="text-lg text-gray-600">Projects that showcase our expertise</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="serviceweb-portfolio-card bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 serviceweb-card-hover">
                    <div className="serviceweb-portfolio-icon text-blue-600 text-4xl mb-4">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">E-commerce Platform</h4>
                    <p className="text-gray-600 mb-4">Built a scalable e-commerce solution serving 100k+ users with AI-powered recommendations</p>
                    <div className="serviceweb-tech-tags flex flex-wrap gap-2">
                        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">React</span>
                        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">Node.js</span>
                        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">AWS</span>
                    </div>
                </div>

                <div className="serviceweb-portfolio-card bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 serviceweb-card-hover">
                    <div className="serviceweb-portfolio-icon text-blue-600 text-4xl mb-4">
                        <i className="fas fa-graduation-cap"></i>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Education Portal</h4>
                    <p className="text-gray-600 mb-4">Developed comprehensive learning management system with real-time collaboration features</p>
                    <div className="serviceweb-tech-tags flex flex-wrap gap-2">
                        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">Angular</span>
                        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">MongoDB</span>
                        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">Socket.io</span>
                    </div>
                </div>

                <div className="serviceweb-portfolio-card bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 serviceweb-card-hover">
                    <div className="serviceweb-portfolio-icon text-blue-600 text-4xl mb-4">
                        <i className="fas fa-heartbeat"></i>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Healthcare App</h4>
                    <p className="text-gray-600 mb-4">Created secure patient management system with IoT integration and AI diagnostics</p>
                    <div className="serviceweb-tech-tags flex flex-wrap gap-2">
                        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">React Native</span>
                        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">Python</span>
                        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs">TensorFlow</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* CTA Section  */}
    <section className="py-20 serviceweb-gradient-bg text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Next Digital Solution?</h2>
            <p className="text-xl mb-8 text-blue-100">Let's transform your ideas into powerful web and mobile applications</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="serviceweb-cta-secondary bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300">
                    <i className="fas fa-play mr-2"></i>Request a Demo
                </button>
                <button className="serviceweb-cta-primary bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-900 transition duration-300 border-2 border-blue-800">
                    <i className="fas fa-quote-left mr-2"></i>Get a Free Quote
                </button>
            </div>
        </div>
    </section>

     {/* FAQs Section  */}
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">Get answers to common development questions</p>
                </div>

                <div className="space-y-6">
                    <div className="serviceweb-faq-item bg-white p-6 rounded-xl">
                        <button className="serviceweb-faq-question w-full text-left flex justify-between items-center" onClick={toggleFAQ}>
                            <h4 className="text-lg font-semibold text-gray-800">What technologies do you use for web & app development?</h4>
                            <i className="fas fa-chevron-down text-blue-600 transition-transform duration-300"></i>
                        </button>
                        <div className="serviceweb-faq-answer hidden mt-4 text-gray-600">
                            <p>We specialize in modern technologies including MERN (MongoDB, Express, React, Node.js), MEAN (MongoDB, Express, Angular, Node.js), Flutter, React Native, and cloud-native solutions on AWS, Azure, and Google Cloud.</p>
                        </div>
                    </div>

                    <div className="serviceweb-faq-item bg-white p-6 rounded-xl">
                        <button className="serviceweb-faq-question w-full text-left flex justify-between items-center" onClick={toggleFAQ}>
                            <h4 className="text-lg font-semibold text-gray-800">Do you provide cross-platform app development?</h4>
                            <i className="fas fa-chevron-down text-blue-600 transition-transform duration-300"></i>
                        </button>
                        <div className="serviceweb-faq-answer hidden mt-4 text-gray-600">
                            <p>Yes, we offer cross-platform development using Flutter and React Native, allowing you to reach both iOS and Android users with a single codebase, reducing development time and costs.</p>
                        </div>
                    </div>

                    <div className="serviceweb-faq-item bg-white p-6 rounded-xl">
                        <button className="serviceweb-faq-question w-full text-left flex justify-between items-center" onClick={toggleFAQ}>
                            <h4 className="text-lg font-semibold text-gray-800">How do you ensure app security & scalability?</h4>
                            <i className="fas fa-chevron-down text-blue-600 transition-transform duration-300"></i>
                        </button>
                        <div className="serviceweb-faq-answer hidden mt-4 text-gray-600">
                            <p>We implement industry-standard security practices including data encryption, secure APIs, authentication protocols, and regular security audits. For scalability, we use cloud-native architecture, microservices, and load balancing.</p>
                        </div>
                    </div>

                    <div className="serviceweb-faq-item bg-white p-6 rounded-xl">
                        <button className="serviceweb-faq-question w-full text-left flex justify-between items-center" onClick={toggleFAQ}>
                            <h4 className="text-lg font-semibold text-gray-800">Can you integrate AI, IoT, or blockchain into my project?</h4>
                            <i className="fas fa-chevron-down text-blue-600 transition-transform duration-300"></i>
                        </button>
                        <div className="serviceweb-faq-answer hidden mt-4 text-gray-600">
                            <p>Absolutely! We specialize in emerging technologies including AI/ML integration using TensorFlow and PyTorch, IoT connectivity solutions, and blockchain development for various use cases including smart contracts and decentralized applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Contact Section  */}
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Start Your Project</h2>
                    <p className="text-lg text-gray-600">Get in touch with our development experts</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                     {/* Contact Form  */}
                    <div className="serviceweb-contact-form">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                    <input type="text" className="serviceweb-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your full name"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                    <input type="email" className="serviceweb-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com"/>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <input type="tel" className="serviceweb-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+91 12345 67890"/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                                <select className="serviceweb-select w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option>Select project type</option>
                                    <option>Web Development</option>
                                    <option>Mobile App Development</option>
                                    <option>Full Stack Development</option>
                                    <option>E-commerce Solution</option>
                                    <option>AI/ML Integration</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Project Requirements *</label>
                                <textarea rows="4" className="serviceweb-textarea w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project requirements, goals, and timeline..."></textarea>
                            </div>

                            <button type="submit" className="serviceweb-submit-btn w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                                <i className="fas fa-paper-plane mr-2"></i>Send Project Details
                            </button>
                        </form>
                    </div>

                    {/* Contact Info  */}
                    <div className="serviceweb-contact-info">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl h-full">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                            
                            <div className="space-y-6">
                                <div className="serviceweb-contact-item flex items-start">
                                    <div className="serviceweb-contact-icon bg-blue-600 text-white p-3 rounded-full mr-4 mt-1">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Office Address</h4>
                                        <p className="text-gray-600">Jaipur, Rajasthan, India</p>
                                        <p className="text-gray-600">Tech Hub, Software Development Center</p>
                                    </div>
                                </div>

                                <div className="serviceweb-contact-item flex items-start">
                                    <div className="serviceweb-contact-icon bg-blue-600 text-white p-3 rounded-full mr-4 mt-1">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Phone & WhatsApp</h4>
                                        <p className="text-gray-600">+91 12345 67890</p>
                                        <p className="text-blue-600 text-sm">Available 24/7 for urgent projects</p>
                                    </div>
                                </div>

                                <div className="serviceweb-contact-item flex items-start">
                                    <div className="serviceweb-contact-icon bg-blue-600 text-white p-3 rounded-full mr-4 mt-1">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                                        <p className="text-gray-600">info@softpro9.com</p>
                                        <p className="text-gray-600">projects@softpro9.com</p>
                                    </div>
                                </div>

                                <div className="serviceweb-contact-item flex items-start">
                                    <div className="serviceweb-contact-icon bg-blue-600 text-white p-3 rounded-full mr-4 mt-1">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                                        <p className="text-gray-600">Mon - Fri: 9:00 AM - 7:00 PM</p>
                                        <p className="text-gray-600">Sat: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="serviceweb-social-links mt-8 pt-6 border-t border-blue-200">
                                <h4 className="font-semibold text-gray-800 mb-4">Connect With Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="serviceweb-social-icon bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="serviceweb-social-icon bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="serviceweb-social-icon bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="#" className="serviceweb-social-icon bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

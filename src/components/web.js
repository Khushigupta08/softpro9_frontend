import React from 'react'
import './style.css';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import ScrollArrowButton from './ScrollArrowButton';
import ConsultationFormModal from "./ConsultationFormModal";
import { useState, useEffect } from "react";


export default function Web() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showConsultationModal, setShowConsultationModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalFormType, setModalFormType] = useState('consultation'); // or 'quote'
    const CheckIcon = () => (
        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
    );

    
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
              <ScrollArrowButton />

    <Helmet>
                <title>Web Services - Softpro9</title>
                <meta name="description" content="Our web development services" />
        </Helmet>
      {/* Hero Section  */}
    <section className="serviceweb-gradient-bg text-white py-20">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Building Next-Gen <span className="mt-2">Web & Mobile</span> Solutions
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                    Scalable, secure, and user-friendly applications tailored to your business needs.
                </p>
                <button 
                onClick={() => {
                    setModalFormType('consultation');
                    setShowModal(true);
                    }}
                className="serviceweb-cta-btn bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg">
                   Get a Free Consultation
                </button>
            </div>
        </div>
    </section>
    {/* consultation modal */}
            <ConsultationFormModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                formType={modalFormType}
                />

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

    {/* Pricing Section */}
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Web & App Development Packages
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From simple websites to complex web applications and mobile apps. Choose the perfect development solution for your business needs.
                    </p>
                </div>

                {/* Pricing Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    
                    {/* Basic Website Package */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:scale-105 hover:border-gray-300 transition-all duration-300 cursor-pointer group">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">🌐</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Website</h3>
                            <p className="text-gray-600 leading-relaxed">Perfect for startups and small businesses looking to establish online presence.</p>
                        </div>
                        
                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Responsive Design (Mobile & Desktop)</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Up to 5 Pages (Home, About, Services, Contact)</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Contact Form & Google Maps Integration</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Basic SEO Optimization</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">SSL Certificate & Domain Setup</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">3 Months Free Support</span>
                            </div>
                        </div>
                        
                        {/* Price */}
                        <div className="text-center mb-8">
                            <span className="text-4xl font-bold text-gray-900">₹25,000</span>
                            <span className="text-gray-600"> - ₹45,000</span>
                        </div>
                        
                        {/* CTA Button */}
                        <button className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg">
                            Get Started
                        </button>
                    </div>
                    
                    {/* Full-Stack Web App (Most Popular) */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-500 relative transform scale-105 hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer group">
                        {/* Most Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                Most Popular
                            </span>
                        </div>
                        
                        <div className="text-center mb-6 mt-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Full-Stack Web App</h3>
                            <p className="text-gray-600 leading-relaxed">Complete web application with custom features and database integration.</p>
                        </div>
                        
                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Custom Web Application (React/Next.js)</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Backend API Development (Node.js/Python)</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Database Design & Integration</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">User Authentication & Authorization</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Admin Panel & Dashboard</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Payment Gateway Integration</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Cloud Hosting & Deployment</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">6 Months Support & Maintenance</span>
                            </div>
                        </div>
                        
                        {/* Price */}
                        <div className="text-center mb-8">
                            <span className="text-4xl font-bold text-blue-600">₹1,50,000</span>
                            <span className="text-gray-600"> - ₹5,00,000</span>
                        </div>
                        
                        {/* CTA Button */}
                        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg">
                            Choose Professional
                        </button>
                    </div>
                    
                    {/* Mobile App Development */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:scale-105 hover:border-gray-300 transition-all duration-300 cursor-pointer group">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Mobile App Development</h3>
                            <p className="text-gray-600 leading-relaxed">Native iOS & Android apps or Cross-platform solutions with React Native.</p>
                        </div>
                        
                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Cross-Platform App (React Native/Flutter)</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">iOS & Android Compatible</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Push Notifications & Offline Support</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">API Integration & Database Sync</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">App Store & Play Store Submission</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">In-App Purchases & Analytics</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Security & Performance Optimization</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">1 Year Support & Updates</span>
                            </div>
                        </div>
                        
                        {/* Price */}
                        <div className="text-center mb-8">
                            <span className="text-4xl font-bold text-gray-900">₹2,50,000</span>
                            <span className="text-gray-600"> - ₹8,00,000</span>
                        </div>
                        
                        {/* CTA Button */}
                        <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-purple-700 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg">
                            Request Quote
                        </button>
                    </div>
                </div>

                {/* Additional Features Section */}
                <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                        Additional Services & Add-ons
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <span className="text-3xl mb-2 block">🤖</span>
                            <h4 className="font-semibold text-gray-900 mb-2">AI Integration</h4>
                            <p className="text-sm text-gray-600">ChatGPT, Machine Learning APIs</p>
                            <p className="font-bold text-blue-600 mt-2">From ₹50,000</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <span className="text-3xl mb-2 block">🛒</span>
                            <h4 className="font-semibold text-gray-900 mb-2">E-commerce</h4>
                            <p className="text-sm text-gray-600">Full online store setup</p>
                            <p className="font-bold text-blue-600 mt-2">From ₹75,000</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <span className="text-3xl mb-2 block">☁️</span>
                            <h4 className="font-semibold text-gray-900 mb-2">Cloud Migration</h4>
                            <p className="text-sm text-gray-600">AWS, Azure, Google Cloud</p>
                            <p className="font-bold text-blue-600 mt-2">From ₹25,000</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <span className="text-3xl mb-2 block">🔒</span>
                            <h4 className="font-semibold text-gray-900 mb-2">Security Audit</h4>
                            <p className="text-sm text-gray-600">Penetration testing & fixes</p>
                            <p className="font-bold text-blue-600 mt-2">From ₹30,000</p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">
                        Have a custom project in mind? Let's discuss your technical requirements and timeline.
                    </p>
                    <div className="space-x-4">
                        
                        <Link to='/about'><button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                            View Portfolio
                        </button></Link>
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
                
                <button 
                onClick={() => {
                    setModalFormType('quote');
                    setShowModal(true);
                    }}
                className="serviceweb-cta-primary bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-900 transition duration-300 border-2 border-blue-800">
                    Get a Free Quote
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

   
    </>
  )
}

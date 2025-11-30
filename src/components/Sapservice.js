import React from 'react'
import './style.css';
import { Helmet } from 'react-helmet-async';
import ScrollArrowButton from './ScrollArrowButton';
import ConsultationFormModal from "./ConsultationFormModal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Sapservice() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showConsultationModal, setShowConsultationModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalFormType, setModalFormType] = useState('consultation'); // or 'quote'
    const CheckIcon = () => (
        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
    );

   
 const handleschedule = () => {
    alert(
      "Schedule a Consultation"
    );
  };


  return (
    <>
              <ScrollArrowButton />

    <Helmet>
                    <title>SAP Services - Softpro9</title>
                    <meta name="description" content="SAP consulting services" />
    </Helmet>
    <div className='bg-white text-gray-800'>
     {/* Hero Section  */}
    <section className="serviceSAP-hero-gradient text-white py-20">
        <div className="container mx-auto px-6 text-center">
            <h1 className="serviceSAP-main-title text-5xl font-bold mb-6">Transform Your Business with End-to-End SAP Solutions</h1>
            <p className="serviceSAP-hero-subtitle text-xl mb-8 max-w-3xl mx-auto">Accelerate your digital transformation journey with our comprehensive SAP implementation, migration, consulting, support, and training services.</p>
            
            <div className="serviceSAP-highlights-grid grid grid-cols-2 md:grid-cols-5 gap-4 mb-10 max-w-4xl mx-auto">
                <div className="serviceSAP-highlight-item bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="serviceSAP-highlight-icon text-2xl mb-2">🚀</div>
                    <span className="serviceSAP-highlight-text font-semibold">Implementation</span>
                </div>
                <div className="serviceSAP-highlight-item bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="serviceSAP-highlight-icon text-2xl mb-2">🔄</div>
                    <span className="serviceSAP-highlight-text font-semibold">Migration</span>
                </div>
                <div className="serviceSAP-highlight-item bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="serviceSAP-highlight-icon text-2xl mb-2">💡</div>
                    <span className="serviceSAP-highlight-text font-semibold">Consulting</span>
                </div>
                <div className="serviceSAP-highlight-item bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="serviceSAP-highlight-icon text-2xl mb-2">🛠️</div>
                    <span className="serviceSAP-highlight-text font-semibold">Support</span>
                </div>
                <div className="serviceSAP-highlight-item bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="serviceSAP-highlight-icon text-2xl mb-2">📚</div>
                    <span className="serviceSAP-highlight-text font-semibold">Training</span>
                </div>
            </div>
            
            <button
            onClick={() => {
                    setModalFormType('consultation');
                    setShowModal(true);
                    }} 
            className="serviceweb-cta-btn bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg" >
                Get a Free Consultation
            </button>
        </div>
    </section>
    {/* consultation modal */}
            <ConsultationFormModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                formType={modalFormType}
                />

     {/* SAP Implementation Section  */}
    <section className="serviceSAP-implementation-section py-16 serviceSAP-section-bg-1">
        <div className="container mx-auto px-6">
            <div className="serviceSAP-section-header text-center mb-12">
                <h2 className="serviceSAP-section-title text-4xl font-bold text-blue-800 mb-4">SAP Implementation</h2>
                <p className="serviceSAP-section-desc text-gray-600 max-w-2xl mx-auto">Deploy robust SAP solutions tailored to your business needs with our expert implementation services.</p>
            </div>
            
            <div className="serviceSAP-impl-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="serviceSAP-impl-card bg-white rounded-xl shadow-lg p-6 serviceSAP-card-hover">
                    <div className="serviceSAP-icon-circle w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-2xl font-bold">S4</span>
                    </div>
                    <h3 className="serviceSAP-card-title text-xl font-bold mb-3 text-blue-800">SAP S/4HANA Implementation</h3>
                    <p className="serviceSAP-card-desc text-gray-600">Next-generation ERP implementation for real-time business operations.</p>
                </div>
                
                <div className="serviceSAP-impl-card bg-white rounded-xl shadow-lg p-6 serviceSAP-card-hover">
                    <div className="serviceSAP-icon-circle w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-2xl font-bold">B1</span>
                    </div>
                    <h3 className="serviceSAP-card-title text-xl font-bold mb-3 text-blue-800">SAP Business One Implementation</h3>
                    <p className="serviceSAP-card-desc text-gray-600">Complete ERP solution designed for small and medium businesses.</p>
                </div>
                
                <div className="serviceSAP-impl-card bg-white rounded-xl shadow-lg p-6 serviceSAP-card-hover">
                    <div className="serviceSAP-icon-circle w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-2xl font-bold">BD</span>
                    </div>
                    <h3 className="serviceSAP-card-title text-xl font-bold mb-3 text-blue-800">SAP Business ByDesign</h3>
                    <p className="serviceSAP-card-desc text-gray-600">Cloud-based ERP for growing businesses with integrated processes.</p>
                </div>
                
                <div className="serviceSAP-impl-card bg-white rounded-xl shadow-lg p-6 serviceSAP-card-hover">
                    <div className="serviceSAP-icon-circle w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-2xl">☁️</span>
                    </div>
                    <h3 className="serviceSAP-card-title text-xl font-bold mb-3 text-blue-800">SAP Cloud Solutions</h3>
                    <p className="serviceSAP-card-desc text-gray-600">Scalable cloud implementations for modern digital enterprises.</p>
                </div>
            </div>
        </div>
    </section>

     {/* SAP Migration & Upgrade Section  */}
    <section className="serviceSAP-migration-section py-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="serviceSAP-section-header text-center mb-12">
                <h2 className="serviceSAP-section-title text-4xl font-bold text-blue-800 mb-4">SAP Migration & Upgrade</h2>
                <p className="serviceSAP-section-desc text-gray-600 max-w-2xl mx-auto">Seamlessly migrate and upgrade your SAP landscape with minimal business disruption.</p>
            </div>
            
            <div className="serviceSAP-migration-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="serviceSAP-migration-card bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-blue-500">
                    <h3 className="serviceSAP-migration-title text-2xl font-bold mb-4 text-blue-800">ECC to S/4HANA Migration</h3>
                    <ul className="serviceSAP-migration-list space-y-2 text-gray-700">
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span>System Assessment</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span>Migration Planning</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span>Data Conversion</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span>Go-Live Support</li>
                    </ul>
                </div>
                
                <div className="serviceSAP-migration-card bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 border-l-4 border-indigo-500">
                    <h3 className="serviceSAP-migration-title text-2xl font-bold mb-4 text-indigo-800">System Conversion (Brownfield)</h3>
                    <ul className="serviceSAP-migration-list space-y-2 text-gray-700">
                        <li className="flex items-center"><span className="text-indigo-500 mr-2">✓</span>In-place Conversion</li>
                        <li className="flex items-center"><span className="text-indigo-500 mr-2">✓</span>Code Remediation</li>
                        <li className="flex items-center"><span className="text-indigo-500 mr-2">✓</span>Testing & Validation</li>
                        <li className="flex items-center"><span className="text-indigo-500 mr-2">✓</span>Training & Support</li>
                    </ul>
                </div>
                
                <div className="serviceSAP-migration-card bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 border-l-4 border-cyan-500">
                    <h3 className="serviceSAP-migration-title text-2xl font-bold mb-4 text-cyan-800">New Implementation (Greenfield)</h3>
                    <ul className="serviceSAP-migration-list space-y-2 text-gray-700">
                        <li className="flex items-center"><span className="text-cyan-500 mr-2">✓</span>Fresh Implementation</li>
                        <li className="flex items-center"><span className="text-cyan-500 mr-2">✓</span>Best Practices</li>
                        <li className="flex items-center"><span className="text-cyan-500 mr-2">✓</span>Modern Architecture</li>
                        <li className="flex items-center"><span className="text-cyan-500 mr-2">✓</span>Optimized Processes</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

     {/* SAP Consulting Section  */}
    <section className="serviceSAP-consulting-section py-16 serviceSAP-section-bg-2">
        <div className="container mx-auto px-6">
            <div className="serviceSAP-section-header text-center mb-12">
                <h2 className="serviceSAP-section-title text-4xl font-bold text-blue-800 mb-4">SAP Consulting</h2>
                <p className="serviceSAP-section-desc text-gray-600 max-w-2xl mx-auto">Expert guidance to optimize your SAP landscape and maximize business value.</p>
            </div>
            
            <div className="serviceSAP-consulting-content grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="serviceSAP-functional-consulting">
                    <h3 className="serviceSAP-consulting-subtitle text-3xl font-bold mb-6 text-blue-700">Functional Consulting</h3>
                    <div className="serviceSAP-functional-modules grid grid-cols-2 gap-4">
                        <div className="serviceSAP-module-item bg-white rounded-lg p-4 shadow-md">
                            <span className="serviceSAP-module-name font-semibold text-blue-600">MM - Materials Management</span>
                        </div>
                        <div className="serviceSAP-module-item bg-white rounded-lg p-4 shadow-md">
                            <span className="serviceSAP-module-name font-semibold text-blue-600">SD - Sales & Distribution</span>
                        </div>
                        <div className="serviceSAP-module-item bg-white rounded-lg p-4 shadow-md">
                            <span className="serviceSAP-module-name font-semibold text-blue-600">PP - Production Planning</span>
                        </div>
                        <div className="serviceSAP-module-item bg-white rounded-lg p-4 shadow-md">
                            <span className="serviceSAP-module-name font-semibold text-blue-600">FI - Financial Accounting</span>
                        </div>
                        <div className="serviceSAP-module-item bg-white rounded-lg p-4 shadow-md">
                            <span className="serviceSAP-module-name font-semibold text-blue-600">CO - Controlling</span>
                        </div>
                        <div className="serviceSAP-module-item bg-white rounded-lg p-4 shadow-md">
                            <span className="serviceSAP-module-name font-semibold text-blue-600">HCM - Human Capital</span>
                        </div>
                    </div>
                </div>
                
                <div className="serviceSAP-technical-consulting">
                    <h3 className="serviceSAP-consulting-subtitle text-3xl font-bold mb-6 text-blue-700">Technical Consulting</h3>
                    <div className="serviceSAP-tech-services space-y-4">
                        <div className="serviceSAP-tech-item bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                            <h4 className="serviceSAP-tech-title font-bold text-lg mb-2">ABAP Development</h4>
                            <p className="serviceSAP-tech-desc text-gray-600">Custom development and enhancement services</p>
                        </div>
                        <div className="serviceSAP-tech-item bg-white rounded-lg p-6 shadow-md border-l-4 border-indigo-500">
                            <h4 className="serviceSAP-tech-title font-bold text-lg mb-2">BASIS Administration</h4>
                            <p className="serviceSAP-tech-desc text-gray-600">System administration and performance tuning</p>
                        </div>
                        <div className="serviceSAP-tech-item bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500">
                            <h4 className="serviceSAP-tech-title font-bold text-lg mb-2">Security Management</h4>
                            <p className="serviceSAP-tech-desc text-gray-600">Authorization and compliance management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* SAP Integration Section  */}
    <section className="serviceSAP-integration-section py-16 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="serviceSAP-section-header text-center mb-12">
                <h2 className="serviceSAP-section-title text-4xl font-bold text-blue-800 mb-4">SAP Integration</h2>
                <p className="serviceSAP-section-desc text-gray-600 max-w-2xl mx-auto">Connect SAP with your existing systems for seamless data flow and unified operations.</p>
            </div>
            
            <div className="serviceSAP-integration-options grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="serviceSAP-integration-card bg-white rounded-xl shadow-lg p-8">
                    <div className="serviceSAP-integration-header flex items-center mb-6">
                        <div className="serviceSAP-integration-icon bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                            <span className="text-blue-600 text-xl">🔗</span>
                        </div>
                        <h3 className="serviceSAP-integration-title text-2xl font-bold text-blue-800">Third-party Integrations</h3>
                    </div>
                    <ul className="serviceSAP-integration-list space-y-3">
                        <li className="flex items-center text-gray-700"><span className="text-blue-500 mr-3">●</span>CRM Systems Integration</li>
                        <li className="flex items-center text-gray-700"><span className="text-blue-500 mr-3">●</span>E-commerce Platforms</li>
                        <li className="flex items-center text-gray-700"><span className="text-blue-500 mr-3">●</span>Payment Gateways</li>
                        <li className="flex items-center text-gray-700"><span className="text-blue-500 mr-3">●</span>Legacy System Migration</li>
                    </ul>
                </div>
                
                <div className="serviceSAP-integration-card bg-white rounded-xl shadow-lg p-8">
                    <div className="serviceSAP-integration-header flex items-center mb-6">
                        <div className="serviceSAP-integration-icon bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                            <span className="text-indigo-600 text-xl">☁️</span>
                        </div>
                        <h3 className="serviceSAP-integration-title text-2xl font-bold text-indigo-800">Cloud Platform Integration</h3>
                    </div>
                    <ul className="serviceSAP-integration-list space-y-3">
                        <li className="flex items-center text-gray-700"><span className="text-indigo-500 mr-3">●</span>SAP Cloud Platform (CPI)</li>
                        <li className="flex items-center text-gray-700"><span className="text-indigo-500 mr-3">●</span>Middleware Solutions</li>
                        <li className="flex items-center text-gray-700"><span className="text-indigo-500 mr-3">●</span>API Management</li>
                        <li className="flex items-center text-gray-700"><span className="text-indigo-500 mr-3">●</span>IoT & Analytics Integration</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

      {/* SAP Support & Managed Services  */}
    <section className="serviceSAP-support-section py-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="serviceSAP-section-header text-center mb-12">
                <h2 className="serviceSAP-section-title text-4xl font-bold text-blue-800 mb-4">SAP Support & Managed Services</h2>
                <p className="serviceSAP-section-desc text-gray-600 max-w-2xl mx-auto">24/7 support and proactive management to ensure optimal SAP system performance.</p>
            </div>
            
            <div className="serviceSAP-support-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="serviceSAP-support-card bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6 serviceSAP-card-hover">
                    <h3 className="serviceSAP-support-title text-xl font-bold mb-4">Application Management Services (AMS)</h3>
                    <ul className="serviceSAP-support-features space-y-2 text-blue-100">
                        <li>• Incident Management</li>
                        <li>• Change Management</li>
                        <li>• Performance Monitoring</li>
                        <li>• User Support</li>
                    </ul>
                </div>
                
                <div className="serviceSAP-support-card bg-gradient-to-br from-indigo-600 to-indigo-800 text-white rounded-xl p-6 serviceSAP-card-hover">
                    <h3 className="serviceSAP-support-title text-xl font-bold mb-4">BASIS Administration & Security</h3>
                    <ul className="serviceSAP-support-features space-y-2 text-indigo-100">
                        <li>• System Administration</li>
                        <li>• Security Management</li>
                        <li>• Transport Management</li>
                        <li>• Patch Management</li>
                    </ul>
                </div>
                
                <div className="serviceSAP-support-card bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-xl p-6 serviceSAP-card-hover">
                    <h3 className="serviceSAP-support-title text-xl font-bold mb-4">Continuous Improvements</h3>
                    <ul className="serviceSAP-support-features space-y-2 text-purple-100">
                        <li>• Process Optimization</li>
                        <li>• Enhancement Development</li>
                        <li>• Best Practice Implementation</li>
                        <li>• Innovation Services</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

     {/* SAP Analytics & Reporting  */}
    <section className="serviceSAP-analytics-section py-16 serviceSAP-section-bg-1">
        <div className="container mx-auto px-6">
            <div className="serviceSAP-section-header text-center mb-12">
                <h2 className="serviceSAP-section-title text-4xl font-bold text-blue-800 mb-4">SAP Analytics & Reporting</h2>
                <p className="serviceSAP-section-desc text-gray-600 max-w-2xl mx-auto">Transform data into actionable insights with advanced SAP analytics solutions.</p>
            </div>
            
            <div className="serviceSAP-analytics-showcase grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="serviceSAP-analytics-content">
                    <div className="serviceSAP-analytics-tools space-y-6">
                        <div className="serviceSAP-tool-item flex items-center p-4 bg-white rounded-lg shadow-md">
                            <div className="serviceSAP-tool-icon bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <span className="text-blue-600 font-bold">BO</span>
                            </div>
                            <div>
                                <h4 className="serviceSAP-tool-name font-bold text-lg">SAP BusinessObjects (BOBJ)</h4>
                                <p className="serviceSAP-tool-desc text-gray-600">Comprehensive business intelligence platform</p>
                            </div>
                        </div>
                        
                        <div className="serviceSAP-tool-item flex items-center p-4 bg-white rounded-lg shadow-md">
                            <div className="serviceSAP-tool-icon bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <span className="text-indigo-600 font-bold">BW</span>
                            </div>
                            <div>
                                <h4 className="serviceSAP-tool-name font-bold text-lg">SAP BW/4HANA</h4>
                                <p className="serviceSAP-tool-desc text-gray-600">Next-gen data warehouse solution</p>
                            </div>
                        </div>
                        
                        <div className="serviceSAP-tool-item flex items-center p-4 bg-white rounded-lg shadow-md">
                            <div className="serviceSAP-tool-icon bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <span className="text-cyan-600 font-bold">SAC</span>
                            </div>
                            <div>
                                <h4 className="serviceSAP-tool-name font-bold text-lg">SAP Analytics Cloud (SAC)</h4>
                                <p className="serviceSAP-tool-desc text-gray-600">Cloud-based analytics and planning</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="serviceSAP-analytics-visual">
                    <div className="serviceSAP-dashboard-mockup bg-white rounded-xl shadow-xl p-6">
                        <div className="serviceSAP-dashboard-header flex justify-between items-center mb-6">
                            <h3 className="serviceSAP-dashboard-title text-xl font-bold text-gray-800">SAP Fiori Dashboard</h3>
                            <div className="serviceSAP-dashboard-controls flex space-x-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                        </div>
                        <div className="serviceSAP-chart-grid grid grid-cols-2 gap-4">
                            <div className="serviceSAP-chart-item bg-blue-50 rounded-lg p-4 h-24 flex items-center justify-center">
                                <span className="serviceSAP-chart-label text-blue-600 font-semibold">Sales Analytics</span>
                            </div>
                            <div className="serviceSAP-chart-item bg-green-50 rounded-lg p-4 h-24 flex items-center justify-center">
                                <span className="serviceSAP-chart-label text-green-600 font-semibold">Financial KPIs</span>
                            </div>
                            <div className="serviceSAP-chart-item bg-purple-50 rounded-lg p-4 h-24 flex items-center justify-center">
                                <span className="serviceSAP-chart-label text-purple-600 font-semibold">Inventory Data</span>
                            </div>
                            <div className="serviceSAP-chart-item bg-orange-50 rounded-lg p-4 h-24 flex items-center justify-center">
                                <span className="serviceSAP-chart-label text-orange-600 font-semibold">HR Metrics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* SAP Cloud Solutions  */}
    <section className="serviceSAP-cloud-section py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
            <div className="serviceSAP-section-header text-center mb-12">
                <h2 className="serviceSAP-section-title text-4xl font-bold mb-4">SAP Cloud Solutions</h2>
                <p className="serviceSAP-section-desc text-blue-100 max-w-2xl mx-auto">Leverage the power of SAP cloud applications to modernize your business processes.</p>
            </div>
            
            <div className="serviceSAP-cloud-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="serviceSAP-cloud-card bg-white/10 backdrop-blur-sm rounded-xl p-6 serviceSAP-card-hover">
                    <div className="serviceSAP-cloud-icon text-4xl mb-4">👥</div>
                    <h3 className="serviceSAP-cloud-title text-xl font-bold mb-3">SAP SuccessFactors</h3>
                    <p className="serviceSAP-cloud-desc text-blue-100 mb-4">Comprehensive HR management in the cloud</p>
                    <div className="serviceSAP-cloud-features text-sm text-blue-200">
                        <div>• Supplier Management</div>
                        <div>• Contract Management</div>
                        <div>• Spend Analysis</div>
                    </div>
                </div>
                
                <div className="serviceSAP-cloud-card bg-white/10 backdrop-blur-sm rounded-xl p-6 serviceSAP-card-hover">
                    <div className="serviceSAP-cloud-icon text-4xl mb-4">✈️</div>
                    <h3 className="serviceSAP-cloud-title text-xl font-bold mb-3">SAP Concur</h3>
                    <p className="serviceSAP-cloud-desc text-blue-100 mb-4">Travel and expense management</p>
                    <div className="serviceSAP-cloud-features text-sm text-blue-200">
                        <div>• Expense Reporting</div>
                        <div>• Travel Booking</div>
                        <div>• Invoice Management</div>
                    </div>
                </div>
                
                <div className="serviceSAP-cloud-card bg-white/10 backdrop-blur-sm rounded-xl p-6 serviceSAP-card-hover">
                    <div className="serviceSAP-cloud-icon text-4xl mb-4">💼</div>
                    <h3 className="serviceSAP-cloud-title text-xl font-bold mb-3">SAP CX</h3>
                    <p className="serviceSAP-cloud-desc text-blue-100 mb-4">Customer experience solutions</p>
                    <div className="serviceSAP-cloud-features text-sm text-blue-200">
                        <div>• Sales Cloud</div>
                        <div>• Service Cloud</div>
                        <div>• Marketing Cloud</div>
                    </div>
                </div>
                
                <div className="serviceSAP-cloud-card bg-white/10 backdrop-blur-sm rounded-xl p-6 serviceSAP-card-hover">
                    <div className="serviceSAP-cloud-icon text-4xl mb-4">⚡</div>
                    <h3 className="serviceSAP-cloud-title text-xl font-bold mb-3">SAP Fieldglass</h3>
                    <p className="serviceSAP-cloud-desc text-blue-100 mb-4">Workforce management solutions</p>
                    <div className="serviceSAP-cloud-features text-sm text-blue-200">
                        <div>• Vendor Management</div>
                        <div>• Contingent Workforce</div>
                        <div>• Services Procurement</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Industry-Specific SAP Solutions  */}
    <section className="serviceSAP-industry-section py-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="serviceSAP-section-header text-center mb-12">
                <h2 className="serviceSAP-section-title text-4xl font-bold text-blue-800 mb-4">Industry-Specific SAP Solutions</h2>
                <p className="serviceSAP-section-desc text-gray-600 max-w-2xl mx-auto">Tailored SAP implementations designed for your industry's unique requirements.</p>
            </div>
            
            <div className="serviceSAP-industry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="serviceSAP-industry-card group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 serviceSAP-card-hover border-2 border-blue-200">
                    <div className="serviceSAP-industry-icon text-5xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                    <h3 className="serviceSAP-industry-title text-2xl font-bold mb-4 text-blue-800">Manufacturing</h3>
                    <ul className="serviceSAP-industry-features space-y-2 text-gray-700">
                        <li>• Production Planning & Control</li>
                        <li>• Quality Management</li>
                        <li>• Supply Chain Optimization</li>
                        <li>• Asset Management</li>
                    </ul>
                </div>
                
                <div className="serviceSAP-industry-card group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 serviceSAP-card-hover border-2 border-green-200">
                    <div className="serviceSAP-industry-icon text-5xl mb-4 group-hover:scale-110 transition-transform">🛍️</div>
                    <h3 className="serviceSAP-industry-title text-2xl font-bold mb-4 text-green-800">Retail & E-commerce</h3>
                    <ul className="serviceSAP-industry-features space-y-2 text-gray-700">
                        <li>• Omnichannel Commerce</li>
                        <li>• Inventory Management</li>
                        <li>• Customer Analytics</li>
                        <li>• Point of Sale Integration</li>
                    </ul>
                </div>
                
                <div className="serviceSAP-industry-card group bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 serviceSAP-card-hover border-2 border-red-200">
                    <div className="serviceSAP-industry-icon text-5xl mb-4 group-hover:scale-110 transition-transform">🏥</div>
                    <h3 className="serviceSAP-industry-title text-2xl font-bold mb-4 text-red-800">Healthcare</h3>
                    <ul className="serviceSAP-industry-features space-y-2 text-gray-700">
                        <li>• Patient Management</li>
                        <li>• Medical Device Integration</li>
                        <li>• Regulatory Compliance</li>
                        <li>• Healthcare Analytics</li>
                    </ul>
                </div>
                
                <div className="serviceSAP-industry-card group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 serviceSAP-card-hover border-2 border-purple-200">
                    <div className="serviceSAP-industry-icon text-5xl mb-4 group-hover:scale-110 transition-transform">🏦</div>
                    <h3 className="serviceSAP-industry-title text-2xl font-bold mb-4 text-purple-800">Banking & Finance</h3>
                    <ul className="serviceSAP-industry-features space-y-2 text-gray-700">
                        <li>• Risk Management</li>
                        <li>• Regulatory Reporting</li>
                        <li>• Customer Onboarding</li>
                        <li>• Digital Banking</li>
                    </ul>
                </div>
                
                <div className="serviceSAP-industry-card group bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 serviceSAP-card-hover border-2 border-orange-200">
                    <div className="serviceSAP-industry-icon text-5xl mb-4 group-hover:scale-110 transition-transform">🚗</div>
                    <h3 className="serviceSAP-industry-title text-2xl font-bold mb-4 text-orange-800">Automotive</h3>
                    <ul className="serviceSAP-industry-features space-y-2 text-gray-700">
                        <li>• Vehicle Lifecycle Management</li>
                        <li>• Dealer Management</li>
                        <li>• Parts & Service</li>
                        <li>• Connected Vehicle Data</li>
                    </ul>
                </div>
                
                <div className="serviceSAP-industry-card group bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 serviceSAP-card-hover border-2 border-indigo-200">
                    <div className="serviceSAP-industry-icon text-5xl mb-4 group-hover:scale-110 transition-transform">🚚</div>
                    <h3 className="serviceSAP-industry-title text-2xl font-bold mb-4 text-indigo-800">Logistics & Supply Chain</h3>
                    <ul className="serviceSAP-industry-features space-y-2 text-gray-700">
                        <li>• Warehouse Management</li>
                        <li>• Transportation Management</li>
                        <li>• Track & Trace</li>
                        <li>• Demand Planning</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

     {/* Specialized SAP Services  */}
    <section className="serviceSAP-specialized-section py-16 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="container mx-auto px-6">
    <div className="serviceSAP-section-header text-center mb-12">
      <h2 className="serviceSAP-section-title text-4xl font-bold text-blue-800 mb-4">
        Specialized SAP Services
      </h2>
      <p className="serviceSAP-section-desc text-gray-600 max-w-2xl mx-auto">
        Advanced SAP services to enhance security, performance, and automation capabilities.
      </p>
    </div>
    
    <div className="serviceSAP-specialized-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 - Custom Development */}
      <div className="serviceSAP-specialized-card bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
        <div className="serviceSAP-specialized-header flex items-center mb-4">
          <div className="serviceSAP-specialized-icon bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-blue-600 text-xl">💻</span>
          </div>
          <h3 className="serviceSAP-specialized-title text-xl font-bold text-blue-800">
            Custom Development
          </h3>
        </div>
        <p className="serviceSAP-specialized-desc text-gray-600 mb-4 flex-grow">
          ABAP, UI5, and Fiori development services
        </p>
        <div className="serviceSAP-specialized-tags flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">ABAP</span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">UI5</span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Fiori</span>
        </div>
      </div>
      
      {/* Card 2 - SAP GRC */}
      <div className="serviceSAP-specialized-card bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
        <div className="serviceSAP-specialized-header flex items-center mb-4">
          <div className="serviceSAP-specialized-icon bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-purple-600 text-xl">🔐</span>
          </div>
          <h3 className="serviceSAP-specialized-title text-xl font-bold text-purple-800">
            SAP GRC
          </h3>
        </div>
        <p className="serviceSAP-specialized-desc text-gray-600 mb-4 flex-grow">
          Governance, Risk & Compliance solutions
        </p>
        <div className="serviceSAP-specialized-tags flex flex-wrap gap-2">
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Access Control</span>
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Risk Management</span>
        </div>
      </div>
      
      {/* Card 3 - Performance Optimization */}
      <div className="serviceSAP-specialized-card bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
        <div className="serviceSAP-specialized-header flex items-center mb-4">
          <div className="serviceSAP-specialized-icon bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-green-600 text-xl">🚀</span>
          </div>
          <h3 className="serviceSAP-specialized-title text-xl font-bold text-green-800">
            Performance Optimization
          </h3>
        </div>
        <p className="serviceSAP-specialized-desc text-gray-600 mb-4 flex-grow">
          System tuning and performance enhancement
        </p>
        <div className="serviceSAP-specialized-tags flex flex-wrap gap-2">
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">System Tuning</span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Code Optimization</span>
        </div>
      </div>
      
      {/* Card 4 - SAP Testing Services */}
      <div className="serviceSAP-specialized-card bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
        <div className="serviceSAP-specialized-header flex items-center mb-4">
          <div className="serviceSAP-specialized-icon bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-orange-600 text-xl">🧪</span>
          </div>
          <h3 className="serviceSAP-specialized-title text-xl font-bold text-orange-800">
            SAP Testing Services
          </h3>
        </div>
        <p className="serviceSAP-specialized-desc text-gray-600 mb-4 flex-grow">
          Comprehensive testing and quality assurance
        </p>
        <div className="serviceSAP-specialized-tags flex flex-wrap gap-2">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Automated Testing</span>
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">UAT Support</span>
        </div>
      </div>
      
      {/* Card 5 - SAP RPA */}
      <div className="serviceSAP-specialized-card bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
        <div className="serviceSAP-specialized-header flex items-center mb-4">
          <div className="serviceSAP-specialized-icon bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-red-600 text-xl">🤖</span>
          </div>
          <h3 className="serviceSAP-specialized-title text-xl font-bold text-red-800">
            SAP RPA
          </h3>
        </div>
        <p className="serviceSAP-specialized-desc text-gray-600 mb-4 flex-grow">
          Robotic Process Automation solutions
        </p>
        <div className="serviceSAP-specialized-tags flex flex-wrap gap-2">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Process Automation</span>
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Bot Development</span>
        </div>
      </div>
      
      {/* Feature Highlight Box */}
      <div className="serviceSAP-highlight-box bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center h-full">
        <h3 className="serviceSAP-highlight-title text-2xl font-bold mb-3">
          Ready to Transform Your Business?
        </h3>
        <p className="serviceSAP-highlight-text mb-6">
          Let our SAP experts help you unlock the full potential of your enterprise systems.
        </p>
        <Link to='/courselist'><button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 self-start">
          Get Started →
        </button></Link>
      </div>
    </div>
  </div>
</section>

    {/* Pricing Section */}
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        SAP Solutions & Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Complete SAP implementation, migration, training, and support services. Transform your business operations with enterprise-grade SAP solutions.
                    </p>
                </div>

                {/* Pricing Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    
                    {/* SAP Training & Consulting */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:scale-105 hover:border-gray-300 transition-all duration-300 cursor-pointer group">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">SAP Training & Consulting</h3>
                            <p className="text-gray-600 leading-relaxed">Professional SAP training programs and expert consulting services.</p>
                        </div>
                        
                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">SAP FICO Training (40+ Hours)</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">SAP MM/SD Module Training</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">SAP S/4HANA Overview</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Hands-on Practice Sessions</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Real-world Case Studies</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Certification Preparation</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Job Placement Assistance</span>
                            </div>
                        </div>
                        
                        {/* Price */}
                        <div className="text-center mb-8">
                            <span className="text-4xl font-bold text-gray-900">₹45,000</span>
                            <span className="text-gray-600"> - ₹85,000</span>
                        </div>
                        
                        {/* CTA Button */}
                        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg">
                            Enroll Now
                        </button>
                    </div>
                    
                    {/* SAP Implementation (Most Popular) */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-500 relative transform scale-105 hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer group">
                        {/* Most Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                Most Popular
                            </span>
                        </div>
                        
                        <div className="text-center mb-6 mt-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">🏗️</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">SAP Implementation</h3>
                            <p className="text-gray-600 leading-relaxed">Complete SAP system implementation with custom configuration and integration.</p>
                        </div>
                        
                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">SAP S/4HANA Implementation</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Business Process Analysis & Design</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Custom Module Configuration</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Data Migration & Integration</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">User Training & Documentation</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Go-Live Support & Testing</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Post-Implementation Support (6 months)</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Performance Optimization</span>
                            </div>
                        </div>
                        
                        {/* Price */}
                        <div className="text-center mb-8">
                            <span className="text-4xl font-bold text-purple-600">₹15,00,000</span>
                            <span className="text-gray-600"> - ₹50,00,000</span>
                        </div>
                        
                        {/* CTA Button */}
                        <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg">
                            Get Implementation Quote
                        </button>
                    </div>
                    
                    {/* SAP Migration & Support */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:scale-105 hover:border-gray-300 transition-all duration-300 cursor-pointer group">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">🔄</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">SAP Migration & Support</h3>
                            <p className="text-gray-600 leading-relaxed">Seamless SAP system migration and ongoing technical support services.</p>
                        </div>
                        
                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">SAP ECC to S/4HANA Migration</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">System Assessment & Planning</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Data Cleanup & Validation</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Cloud Migration Services</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">24/7 Technical Support</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">System Monitoring & Maintenance</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Regular Updates & Patches</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckIcon />
                                <span className="text-gray-700">Emergency Issue Resolution</span>
                            </div>
                        </div>
                        
                        {/* Price */}
                        <div className="text-center mb-8">
                            <span className="text-4xl font-bold text-gray-900">₹8,00,000</span>
                            <span className="text-gray-600"> - ₹25,00,000</span>
                        </div>
                        
                        {/* CTA Button */}
                        <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-orange-700 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg">
                            Plan Migration
                        </button>
                    </div>
                </div>

                {/* SAP Modules Section */}
                <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                        SAP Modules We Specialize In
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <span className="text-3xl mb-2 block">💰</span>
                            <h4 className="font-semibold text-gray-900 mb-2">SAP FICO</h4>
                            <p className="text-sm text-gray-600">Financial Accounting & Controlling</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <span className="text-3xl mb-2 block">📦</span>
                            <h4 className="font-semibold text-gray-900 mb-2">SAP MM</h4>
                            <p className="text-sm text-gray-600">Materials Management</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <span className="text-3xl mb-2 block">🛍️</span>
                            <h4 className="font-semibold text-gray-900 mb-2">SAP SD</h4>
                            <p className="text-sm text-gray-600">Sales & Distribution</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <span className="text-3xl mb-2 block">👥</span>
                            <h4 className="font-semibold text-gray-900 mb-2">SAP HR</h4>
                            <p className="text-sm text-gray-600">Human Resources</p>
                        </div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Our SAP Certifications & Expertise</h3>
                    <p className="text-blue-100 mb-6">
                        Our team holds official SAP certifications and has 10+ years of enterprise implementation experience
                    </p>
                    <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🏆</span>
                            <span className="font-semibold">SAP Certified</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">✅</span>
                            <span className="font-semibold">100+ Implementations</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">⚡</span>
                            <span className="font-semibold">S/4HANA Experts</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🌟</span>
                            <span className="font-semibold">99% Success Rate</span>
                        </div>
                    </div>
                </div>

                
            </div>
    </section>

     {/* Final CTA Section  */}
    <section className="serviceSAP-final-cta py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white text-center">
        <div className="container mx-auto px-6">
            <div className="serviceSAP-cta-content max-w-4xl mx-auto">
                <h2 className="serviceSAP-cta-title text-4xl md:text-5xl font-bold mb-6">Ready to Accelerate Your SAP Journey?</h2>
                <p className="serviceSAP-cta-subtitle text-xl mb-8 text-blue-100">Join hundreds of businesses who have transformed their operations with our expert SAP services. Get started with a free consultation today.</p>
                
                <div className="serviceSAP-cta-stats grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="serviceSAP-stat-item">
                        <div className="serviceSAP-stat-number text-3xl font-bold mb-2">500+</div>
                        <div className="serviceSAP-stat-label text-blue-200">Successful Implementations</div>
                    </div>
                    <div className="serviceSAP-stat-item">
                        <div className="serviceSAP-stat-number text-3xl font-bold mb-2">15+</div>
                        <div className="serviceSAP-stat-label text-blue-200">Years of Experience</div>
                    </div>
                    <div className="serviceSAP-stat-item">
                        <div className="serviceSAP-stat-number text-3xl font-bold mb-2">24/7</div>
                        <div className="serviceSAP-stat-label text-blue-200">Support Available</div>
                    </div>
                </div>
                
                <div className="serviceSAP-cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                    onClick={() => {
                    setModalFormType('quote');
                    setShowModal(true);
                    }}
                    className="serviceSAP-secondary-cta bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition duration-300">
                        Get A Quote
                    </button>
                    
                </div>
            </div>
        </div>
    </section>

    </div>
    </>
  )
}

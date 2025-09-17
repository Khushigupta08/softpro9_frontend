import React from 'react'
import './style.css';

export default function Sapservice() {
      // CTA button click handler
  const handleCTA = () => {
    alert(
      "Get Free SAP Consultation"
    );
  };
 const handleschedule = () => {
    alert(
      "Schedule a Consultation"
    );
  };


  return (
    <>
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
            
            <button className="serviceSAP-cta-button bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition duration-300 serviceSAP-pulse" onClick={handleCTA}>
                Get a Free SAP Consultation
            </button>
        </div>
    </section>

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
    <section className="serviceSAP-specialized-section py-16 serviceSAP-section-bg-2">
        <div className="container mx-auto px-6">
            <div className="serviceSAP-section-header text-center mb-12">
                <h2 className="serviceSAP-section-title text-4xl font-bold text-blue-800 mb-4">Specialized SAP Services</h2>
                <p className="serviceSAP-section-desc text-gray-600 max-w-2xl mx-auto">Advanced SAP services to enhance security, performance, and automation capabilities.</p>
            </div>
            
            <div className="serviceSAP-specialized-content grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="serviceSAP-specialized-left">
                    <div className="serviceSAP-specialized-cards space-y-6">
                        <div className="serviceSAP-specialized-card bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                            <div className="serviceSAP-specialized-header flex items-center mb-4">
                                <div className="serviceSAP-specialized-icon bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-blue-600 text-xl">💻</span>
                                </div>
                                <h3 className="serviceSAP-specialized-title text-xl font-bold text-blue-800">Custom Development</h3>
                            </div>
                            <p className="serviceSAP-specialized-desc text-gray-600 mb-3">ABAP, UI5, and Fiori development services</p>
                            <div className="serviceSAP-specialized-tags flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">ABAP</span>
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">UI5</span>
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Fiori</span>
                            </div>
                        </div>
                        
                        <div className="serviceSAP-specialized-card bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                            <div className="serviceSAP-specialized-header flex items-center mb-4">
                                <div className="serviceSAP-specialized-icon bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-purple-600 text-xl">🔐</span>
                                </div>
                                <h3 className="serviceSAP-specialized-title text-xl font-bold text-purple-800">SAP GRC</h3>
                            </div>
                            <p className="serviceSAP-specialized-desc text-gray-600 mb-3">Governance, Risk & Compliance solutions</p>
                            <div className="serviceSAP-specialized-tags flex flex-wrap gap-2">
                                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Access Control</span>
                                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Risk Management</span>
                            </div>
                        </div>
                        
                        <div className="serviceSAP-specialized-card bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                            <div className="serviceSAP-specialized-header flex items-center mb-4">
                                <div className="serviceSAP-specialized-icon bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-green-600 text-xl">🚀</span>
                                </div>
                                <h3 className="serviceSAP-specialized-title text-xl font-bold text-green-800">Performance Optimization</h3>
                            </div>
                            <p className="serviceSAP-specialized-desc text-gray-600 mb-3">System tuning and performance enhancement</p>
                            <div className="serviceSAP-specialized-tags flex flex-wrap gap-2">
                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">System Tuning</span>
                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Code Optimization</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="serviceSAP-specialized-right">
                    <div className="serviceSAP-specialized-cards space-y-6">
                        <div className="serviceSAP-specialized-card bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                            <div className="serviceSAP-specialized-header flex items-center mb-4">
                                <div className="serviceSAP-specialized-icon bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-orange-600 text-xl">🧪</span>
                                </div>
                                <h3 className="serviceSAP-specialized-title text-xl font-bold text-orange-800">SAP Testing Services</h3>
                            </div>
                            <p className="serviceSAP-specialized-desc text-gray-600 mb-3">Comprehensive testing and quality assurance</p>
                            <div className="serviceSAP-specialized-tags flex flex-wrap gap-2">
                                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Automated Testing</span>
                                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">UAT Support</span>
                            </div>
                        </div>
                        
                        <div className="serviceSAP-specialized-card bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                            <div className="serviceSAP-specialized-header flex items-center mb-4">
                                <div className="serviceSAP-specialized-icon bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-red-600 text-xl">🤖</span>
                                </div>
                                <h3 className="serviceSAP-specialized-title text-xl font-bold text-red-800">SAP RPA</h3>
                            </div>
                            <p className="serviceSAP-specialized-desc text-gray-600 mb-3">Robotic Process Automation solutions</p>
                            <div className="serviceSAP-specialized-tags flex flex-wrap gap-2">
                                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Process Automation</span>
                                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Bot Development</span>
                            </div>
                        </div>
                        
                          {/* Feature Highlight Box  */}
                        <div className="serviceSAP-highlight-box bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
                            <h3 className="serviceSAP-highlight-title text-xl font-bold mb-3">Ready to Transform Your Business?</h3>
                            <p className="serviceSAP-highlight-text mb-4">Let our SAP experts help you unlock the full potential of your enterprise systems.</p>
                            <button className="serviceSAP-highlight-cta bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300" onClick={handleschedule}>
                                Schedule a Consultation
                            </button>
                        </div>
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
                    <button className="serviceSAP-primary-cta bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition duration-300 serviceSAP-pulse" onClick={handleCTA}>
                        Get Free SAP Consultation
                    </button>
                    <button className="serviceSAP-secondary-cta border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-800 transition duration-300">
                        View Case Studies
                    </button>
                </div>
            </div>
        </div>
    </section>

    </div>
    </>
  )
}

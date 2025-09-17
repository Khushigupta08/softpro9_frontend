// import React from 'react'
import './style.css';

export default function Industries() {
  return (
    <>
     {/* Hero Section  */}
    <section className="industries-gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 industries-floating">
                    Industries We <span className="text-blue-200">Transform</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                    Empowering businesses across diverse sectors with cutting-edge SAP solutions, 
                    innovative applications, and AI-driven digital marketing strategies
                </p>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div className="industries-icon-pulse text-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🏭</span>
                        </div>
                        <p className="text-sm font-medium">Manufacturing</p>
                    </div>
                    <div className="industries-icon-pulse text-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🛒</span>
                        </div>
                        <p className="text-sm font-medium">Retail & E-commerce</p>
                    </div>
                    <div className="industries-icon-pulse text-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🏥</span>
                        </div>
                        <p className="text-sm font-medium">Healthcare</p>
                    </div>
                    <div className="industries-icon-pulse text-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">💰</span>
                        </div>
                        <p className="text-sm font-medium">Banking & Finance</p>
                    </div>
                    <div className="industries-icon-pulse text-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🚚</span>
                        </div>
                        <p className="text-sm font-medium">Logistics</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Manufacturing Section  */}
    <section id="industries-manufacturing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 industries-manufacturing-bg rounded-full flex items-center justify-center mr-4">
                            <span className="text-3xl">🏭</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800">Manufacturing Excellence</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        In the competitive manufacturing industry, efficiency, cost optimization, and supply chain visibility are critical. 
                        At SoftPro9, we deliver tailored SAP solutions, next-gen applications, and AI-driven digital marketing to help 
                        manufacturers embrace Industry 4.0 and achieve operational excellence.
                    </p>
                    
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Key Challenges</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center p-3 bg-red-50 rounded-lg">
                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Complex supply chain management</span>
                            </div>
                            <div className="flex items-center p-3 bg-red-50 rounded-lg">
                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Demand forecasting issues</span>
                            </div>
                            <div className="flex items-center p-3 bg-red-50 rounded-lg">
                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">High operational costs</span>
                            </div>
                            <div className="flex items-center p-3 bg-red-50 rounded-lg">
                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Limited digital engagement</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="industries-card-hover rounded-2xl p-8 text-white industries-manufacturing-bg">
                    <h3 className="text-2xl font-bold mb-6">Our Manufacturing Solutions</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">SAP</span>
                            <div>
                                <h4 className="font-semibold">SAP for Manufacturing</h4>
                                <p className="text-blue-100 text-sm">Production planning, materials management, and quality control with S/4HANA</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">DEV</span>
                            <div>
                                <h4 className="font-semibold">Web & App Development</h4>
                                <p className="text-blue-100 text-sm">ERP portals, vendor apps, IoT-enabled monitoring systems</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">AI</span>
                            <div>
                                <h4 className="font-semibold">Digital Marketing with AI</h4>
                                <p className="text-blue-100 text-sm">B2B lead generation, product marketing, and predictive analytics</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <h4 className="font-bold mb-4">Key Benefits</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Reduced costs</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Real-time visibility</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">AI insights</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Market presence</span>
                            </div>
                        </div>
                    </div>
                    
                    <button className="mt-6 bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                        Talk to Our Manufacturing Experts →
                    </button>
                </div>
            </div>
        </div>
    </section>

      {/* Retail & E-commerce Section  */}
    <section id="industries-retail" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="industries-card-hover rounded-2xl p-8 text-white industries-retail-bg order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-6">Retail & E-commerce Solutions</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">SAP</span>
                            <div>
                                <h4 className="font-semibold">SAP for Retail</h4>
                                <p className="text-blue-100 text-sm">Real-time inventory, POS, and sales analytics</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">DEV</span>
                            <div>
                                <h4 className="font-semibold">E-commerce Development</h4>
                                <p className="text-blue-100 text-sm">Online stores, mobile shopping apps, secure payment gateways</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">AI</span>
                            <div>
                                <h4 className="font-semibold">AI-powered Digital Marketing</h4>
                                <p className="text-blue-100 text-sm">Personalized ads, abandoned cart recovery, chatbots</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <h4 className="font-bold mb-4">Key Benefits</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Customer loyalty</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Omnichannel integration</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Higher conversions</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Global scalability</span>
                            </div>
                        </div>
                    </div>
                    
                    <button className="mt-6 bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                        Grow Your Retail Business →
                    </button>
                </div>
                
                <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 industries-retail-bg rounded-full flex items-center justify-center mr-4">
                            <span className="text-3xl">🛒</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800">Retail & E-commerce</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Retail and e-commerce thrive on customer experience and agility. SoftPro9 provides SAP retail solutions, 
                        custom e-commerce platforms, and AI-driven marketing campaigns to boost sales and customer loyalty.
                    </p>
                    
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Challenges</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Omnichannel sales management</span>
                            </div>
                            <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Personalized engagement</span>
                            </div>
                            <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Data-driven marketing</span>
                            </div>
                            <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Payment & logistics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Healthcare Section  */}
    <section id="industries-healthcare" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 industries-healthcare-bg rounded-full flex items-center justify-center mr-4">
                            <span className="text-3xl">🏥</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800">Healthcare Innovation</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Healthcare organizations need secure, efficient, and patient-centric solutions. SoftPro9 empowers hospitals, 
                        clinics, and healthcare startups with SAP systems, telemedicine apps, and AI-driven engagement tools.
                    </p>
                    
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Challenges</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center p-3 bg-green-50 rounded-lg">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Patient data compliance</span>
                            </div>
                            <div className="flex items-center p-3 bg-green-50 rounded-lg">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Telemedicine needs</span>
                            </div>
                            <div className="flex items-center p-3 bg-green-50 rounded-lg">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Patient engagement</span>
                            </div>
                            <div className="flex items-center p-3 bg-green-50 rounded-lg">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Operational inefficiencies</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="industries-card-hover rounded-2xl p-8 text-white industries-healthcare-bg">
                    <h3 className="text-2xl font-bold mb-6">Healthcare Solutions</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">SAP</span>
                            <div>
                                <h4 className="font-semibold">SAP for Healthcare</h4>
                                <p className="text-blue-100 text-sm">Patient records, compliance management, and resource planning</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">DEV</span>
                            <div>
                                <h4 className="font-semibold">Healthcare App Development</h4>
                                <p className="text-blue-100 text-sm">Telemedicine, e-pharmacy, and appointment systems</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">AI</span>
                            <div>
                                <h4 className="font-semibold">AI Marketing</h4>
                                <p className="text-blue-100 text-sm">Patient awareness campaigns, engagement chatbots, predictive analytics</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <h4 className="font-bold mb-4">Key Benefits</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Better patient care</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Regulatory compliance</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Scalable platforms</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Patient engagement</span>
                            </div>
                        </div>
                    </div>
                    
                    <button className="mt-6 bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                        Transform Healthcare Services →
                    </button>
                </div>
            </div>
        </div>
    </section>

      {/* Banking & Finance Section  */}
    <section id="industries-finance" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="industries-card-hover rounded-2xl p-8 text-white industries-finance-bg order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-6">Banking & Finance Solutions</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">SAP</span>
                            <div>
                                <h4 className="font-semibold">SAP for Finance</h4>
                                <p className="text-blue-100 text-sm">Real-time financial reporting, compliance, and risk management</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">DEV</span>
                            <div>
                                <h4 className="font-semibold">Fintech App Development</h4>
                                <p className="text-blue-100 text-sm">Secure mobile banking, wallets, and investment apps</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">AI</span>
                            <div>
                                <h4 className="font-semibold">AI-powered Digital Marketing</h4>
                                <p className="text-blue-100 text-sm">Customer segmentation, loan/insurance lead generation, personalized campaigns</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <h4 className="font-bold mb-4">Key Benefits</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Enhanced security</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Customer trust</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Fraud prevention</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Customer retention</span>
                            </div>
                        </div>
                    </div>
                    
                    <button className="mt-6 bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                        Partner for Banking Solutions →
                    </button>
                </div>
                
                <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 industries-finance-bg rounded-full flex items-center justify-center mr-4">
                            <span className="text-3xl">💰</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800">Banking & Finance</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        In finance, security, compliance, and innovation are non-negotiable. SoftPro9 offers SAP finance solutions, 
                        fintech app development, and AI-based fraud detection and marketing strategies.
                    </p>
                    
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Challenges</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Global compliance</span>
                            </div>
                            <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Fraud & cybersecurity</span>
                            </div>
                            <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Digital banking UX</span>
                            </div>
                            <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Data-driven decisions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Logistics & Supply Chain Section  */}
    <section id="industries-logistics" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 industries-logistics-bg rounded-full flex items-center justify-center mr-4">
                            <span className="text-3xl">🚚</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800">Logistics & Supply Chain</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        For logistics, speed and accuracy drive success. SoftPro9 helps companies optimize operations with SAP logistics solutions, 
                        fleet management apps, and AI-driven route optimization.
                    </p>
                    
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Challenges</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Route & fleet management</span>
                            </div>
                            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Inventory tracking</span>
                            </div>
                            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Rising operational costs</span>
                            </div>
                            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                                <span className="text-gray-700">Real-time tracking</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="industries-card-hover rounded-2xl p-8 text-white industries-logistics-bg">
                    <h3 className="text-2xl font-bold mb-6">Logistics Solutions</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">SAP</span>
                            <div>
                                <h4 className="font-semibold">SAP for Logistics</h4>
                                <p className="text-blue-100 text-sm">Warehouse, fleet, and order management</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">DEV</span>
                            <div>
                                <h4 className="font-semibold">App Development</h4>
                                <p className="text-blue-100 text-sm">Fleet tracking apps, customer delivery portals</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="industries-solution-badge mr-4">AI</span>
                            <div>
                                <h4 className="font-semibold">AI-powered Optimization</h4>
                                <p className="text-blue-100 text-sm">Route planning, predictive maintenance, and cost-saving insights</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <h4 className="font-bold mb-4">Key Benefits</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Reduced costs</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Real-time tracking</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Optimized operations</span>
                            </div>
                            <div className="industries-benefit-item p-3 rounded bg-white bg-opacity-20">
                                <span className="text-green-200 mr-2">✅</span>
                                <span className="text-sm text-blue-800">Customer satisfaction</span>
                            </div>
                        </div>
                    </div>
                    
                    <button className="mt-6 bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                        Optimize Your Logistics →
                    </button>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Call to Action Section --> */}
    <section className="industries-gradient-bg text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="industries-floating">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Transform Your Industry?
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    Join hundreds of businesses across these industries who have already transformed 
                    their operations with SoftPro9's innovative solutions.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors">
                        Schedule a Consultation
                    </button>
                    <button className="border-2 border-white text-blue-100 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors">
                        View Our Portfolio
                    </button>
                </div>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-200 mb-2">500+</div>
                    <p className="text-blue-100">Projects Delivered</p>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-200 mb-2">100+</div>
                    <p className="text-blue-100">Happy Clients</p>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-200 mb-2">5+</div>
                    <p className="text-blue-100">Years Experience</p>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-200 mb-2">24/7</div>
                    <p className="text-blue-100">Support</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Industries Quick Navigation --> */}
    <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Explore Our Industry Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <a href="#industries-manufacturing" className="industries-quick-nav group">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform group-hover:scale-105">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                            <span className="text-xl">🏭</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Manufacturing</h4>
                        <p className="text-sm text-gray-600">Industry 4.0 Solutions</p>
                    </div>
                </a>
                
                <a href="#industries-retail" className="industries-quick-nav group">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform group-hover:scale-105">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                            <span className="text-xl">🛒</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Retail</h4>
                        <p className="text-sm text-gray-600">E-commerce Excellence</p>
                    </div>
                </a>
                
                <a href="#industries-healthcare" className="industries-quick-nav group">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform group-hover:scale-105">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                            <span className="text-xl">🏥</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Healthcare</h4>
                        <p className="text-sm text-gray-600">Digital Health Solutions</p>
                    </div>
                </a>
                
                <a href="#industries-finance" className="industries-quick-nav group">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform group-hover:scale-105">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                            <span className="text-xl">💰</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Finance</h4>
                        <p className="text-sm text-gray-600">Fintech Innovation</p>
                    </div>
                </a>
                
                <a href="#industries-logistics" className="industries-quick-nav group">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform group-hover:scale-105">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                            <span className="text-xl">🚚</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Logistics</h4>
                        <p className="text-sm text-gray-600">Smart Supply Chain</p>
                    </div>
                </a>
            </div>
        </div>
    </section>

    </>
  )
}

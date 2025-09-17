import React from 'react'

export default function Service() {
  return (
    <>
      {/* Hero Section  */}
    <section className="hero-section !relative !bg-gradient-to-br !from-indigo-900 !via-purple-900 !to-pink-800 !text-white !py-20 !overflow-hidden">
        <div className="!absolute !inset-0 !bg-black !opacity-20"></div>
        <div className="!absolute !inset-0">
            <div className="floating-circle floating-circle-1 !absolute !top-10 !left-10 !w-72 !h-72 !bg-blue-500 !rounded-full !mix-blend-multiply !filter !blur-xl !opacity-20"></div>
            <div className="floating-circle floating-circle-2 !absolute !top-40 !right-10 !w-72 !h-72 !bg-purple-500 !rounded-full !mix-blend-multiply !filter !blur-xl !opacity-20"></div>
            <div className="floating-circle floating-circle-3 !absolute !bottom-10 !left-1/2 !w-72 !h-72 !bg-pink-500 !rounded-full !mix-blend-multiply !filter !blur-xl !opacity-20"></div>
        </div>
        
        <div className="!relative container !mx-auto !px-6 !text-center">
            <div className="hero-content !transition-all !duration-1000">
                <h1 className="!text-5xl md:!text-7xl !font-bold !mb-6 !bg-gradient-to-r !from-white !to-gray-300 !bg-clip-text !text-transparent">
                    Complete Digital Solutions
                </h1>
                <p className="!text-xl md:!text-2xl !mb-8 !text-gray-200 !max-w-3xl !mx-auto">
                    Web Development • Digital Marketing • Software Solutions
                </p>
                <p className="!text-lg !mb-12 !text-gray-300 !max-w-4xl !mx-auto">
                    Transform your business with our comprehensive suite of digital services. From stunning websites to powerful marketing campaigns and custom software solutions.
                </p>
                
                <div className="!flex !flex-col sm:!flex-row !gap-4 !justify-center !items-center">
                    <button className="btn btn-primary !bg-gradient-to-r !from-blue-500 !to-purple-600 hover:!from-blue-600 hover:!to-purple-700 !text-white !px-8 !py-4 !rounded-full !font-semibold !text-lg !transition-all !duration-300 !transform hover:!scale-105 !shadow-lg !border-0">
                        Get Started Today
                    </button>
                    <button className="btn btn-outline-light !border-2 !border-white !text-white hover:!bg-white hover:!text-gray-900 !px-8 !py-4 !rounded-full !font-semibold !text-lg !transition-all !duration-300">
                        View Our Work
                    </button>
                </div>
            </div>
        </div>
    </section>

      {/* Services Overview  */}
    <section className="!py-20 !bg-white">
        <div className="container !mx-auto !px-6">
            <div className="!text-center !mb-16">
                <h2 className="!text-4xl md:!text-5xl !font-bold !text-gray-900 !mb-6">
                    Our <span className="!bg-gradient-to-r !from-blue-600 !to-purple-600 !bg-clip-text !text-transparent">Services</span>
                </h2>
                <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
                    We offer a complete range of digital services to help your business thrive in the digital age
                </p>
            </div>

            <div className="row g-4 !mb-16">
                <div className="col-md-4">
                    <div className="service-card !relative !p-8 !rounded-2xl !cursor-pointer !transition-all !duration-300 !transform hover:!scale-105 !bg-white !shadow-lg hover:!shadow-xl !border !border-gray-200 active" data-service="0">
                        <div className="!inline-flex !p-4 !rounded-xl !bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white !mb-6">
                            <i className="fas fa-code !text-2xl"></i>
                        </div>
                        <h3 className="!text-2xl !font-bold !text-gray-900 !mb-2">Web Development</h3>
                        <p className="!text-lg !text-blue-600 !font-semibold !mb-4">Modern & Responsive Websites</p>
                        <p className="!text-gray-600 !mb-6">Create stunning, fast, and user-friendly websites that drive results for your business.</p>
                        <div className="!space-y-2">
                            <div className="!flex !items-center !space-x-2">
                                <div className="!w-2 !h-2 !bg-blue-500 !rounded-full"></div>
                                <span className="!text-sm !text-gray-700">Responsive Design</span>
                            </div>
                            <div className="!flex !items-center !space-x-2">
                                <div className="!w-2 !h-2 !bg-blue-500 !rounded-full"></div>
                                <span className="!text-sm !text-gray-700">SEO Optimized</span>
                            </div>
                            <div className="!flex !items-center !space-x-2">
                                <div className="!w-2 !h-2 !bg-blue-500 !rounded-full"></div>
                                <span className="!text-sm !text-gray-700">Fast Loading</span>
                            </div>
                        </div>
                        <div className="active-indicator !absolute !top-4 !right-4 !hidden">
                            <div className="!w-3 !h-3 !bg-blue-500 !rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-card !relative !p-8 !rounded-2xl !cursor-pointer !transition-all !duration-300 !transform hover:!scale-105 !bg-white !shadow-lg hover:!shadow-xl !border !border-gray-200" data-service="1">
                        <div className="!inline-flex !p-4 !rounded-xl !bg-gradient-to-r !from-green-500 !to-teal-600 !text-white !mb-6">
                            <i className="fas fa-bullhorn !text-2xl"></i>
                        </div>
                        <h3 className="!text-2xl !font-bold !text-gray-900 !mb-2">Digital Marketing</h3>
                        <p className="!text-lg !text-blue-600 !font-semibold !mb-4">Grow Your Online Presence</p>
                        <p className="!text-gray-600 !mb-6">Boost your brand visibility and reach your target audience with our comprehensive digital marketing strategies.</p>
                        <div className="!space-y-2">
                            <div className="!flex !items-center !space-x-2">
                                <div className="!w-2 !h-2 !bg-blue-500 !rounded-full"></div>
                                <span className="!text-sm !text-gray-700">Social Media Marketing</span>
                            </div>
                            <div className="!flex !items-center !space-x-2">
                                <div className="!w-2 !h-2 !bg-blue-500 !rounded-full"></div>
                                <span className="!text-sm !text-gray-700">Google Ads Management</span>
                            </div>
                            <div className="!flex !items-center !space-x-2">
                                <div className="!w-2 !h-2 !bg-blue-500 !rounded-full"></div>
                                <span className="!text-sm !text-gray-700">Content Marketing</span>
                            </div>
                        </div>
                        <div className="active-indicator !absolute !top-4 !right-4 !hidden">
                            <div className="!w-3 !h-3 !bg-blue-500 !rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-card !relative !p-8 !rounded-2xl !cursor-pointer !transition-all !duration-300 !transform hover:!scale-105 !bg-white !shadow-lg hover:!shadow-xl !border !border-gray-200" data-service="2">
                        <div className="!inline-flex !p-4 !rounded-xl !bg-gradient-to-r !from-orange-500 !to-red-600 !text-white !mb-6">
                            <i className="fas fa-microchip !text-2xl"></i>
                        </div>
                        <h3 className="!text-2xl !font-bold !text-gray-900 !mb-2">Software Solutions</h3>
                        <p className="!text-lg !text-blue-600 !font-semibold !mb-4">Custom Software Development</p>
                        <p className="!text-gray-600 !mb-6">Build powerful, scalable software solutions tailored to your specific business needs and requirements.</p>
                        <div className="!space-y-2">
                            <div className="!flex !items-center !space-x-2">
                                <div className="!w-2 !h-2 !bg-blue-500 !rounded-full"></div>
                                <span className="!text-sm !text-gray-700">Custom Applications</span>
                            </div>
                            <div className="!flex !items-center !space-x-2">
                                <div className="!w-2 !h-2 !bg-blue-500 !rounded-full"></div>
                                <span className="!text-sm !text-gray-700">API Development</span>
                            </div>
                            <div className="!flex !items-center !space-x-2">
                                <div className="!w-2 !h-2 !bg-blue-500 !rounded-full"></div>
                                <span className="!text-sm !text-gray-700">Database Design</span>
                            </div>
                        </div>
                        <div className="active-indicator !absolute !top-4 !right-4 !hidden">
                            <div className="!w-3 !h-3 !bg-blue-500 !rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

              {/* Detailed Service View   */}
            <div className="!bg-gray-50 !rounded-3xl !p-8 md:!p-12">
                <div className="row !items-center">
                    <div className="col-md-6">
                        <div id="service-detail-icon" className="!inline-flex !p-4 !rounded-2xl !bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white !mb-6">
                            <i className="fas fa-code !text-3xl"></i>
                        </div>
                        <h3 id="service-detail-title" className="!text-3xl !font-bold !text-gray-900 !mb-4">Web Development</h3>
                        <p id="service-detail-description" className="!text-lg !text-gray-600 !mb-6">Create stunning, fast, and user-friendly websites that drive results for your business.</p>
                        <div id="service-detail-features" className="row">
                            <div className="col-6 !mb-4">
                                <div className="!flex !items-center !space-x-2">
                                    <i className="fas fa-check-circle !text-green-500"></i>
                                    <span className="!text-gray-700">Responsive Design</span>
                                </div>
                            </div>
                            <div className="col-6 !mb-4">
                                <div className="!flex !items-center !space-x-2">
                                    <i className="fas fa-check-circle !text-green-500"></i>
                                    <span className="!text-gray-700">SEO Optimized</span>
                                </div>
                            </div>
                            <div className="col-6 !mb-4">
                                <div className="!flex !items-center !space-x-2">
                                    <i className="fas fa-check-circle !text-green-500"></i>
                                    <span className="!text-gray-700">Fast Loading</span>
                                </div>
                            </div>
                            <div className="col-6 !mb-4">
                                <div className="!flex !items-center !space-x-2">
                                    <i className="fas fa-check-circle !text-green-500"></i>
                                    <span className="!text-gray-700">Mobile First</span>
                                </div>
                            </div>
                            <div className="col-6 !mb-4">
                                <div className="!flex !items-center !space-x-2">
                                    <i className="fas fa-check-circle !text-green-500"></i>
                                    <span className="!text-gray-700">Custom Development</span>
                                </div>
                            </div>
                            <div className="col-6 !mb-4">
                                <div className="!flex !items-center !space-x-2">
                                    <i className="fas fa-check-circle !text-green-500"></i>
                                    <span className="!text-gray-700">E-commerce Solutions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="!text-xl !font-semibold !text-gray-900 !mb-4">Technologies We Use</h4>
                        <div id="service-detail-technologies" className="row g-3">
                            <div className="col-6">
                                <div className="!bg-white !p-3 !rounded-lg !shadow-sm !border !text-center">
                                    <span className="!text-gray-700 !font-medium">React</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="!bg-white !p-3 !rounded-lg !shadow-sm !border !text-center">
                                    <span className="!text-gray-700 !font-medium">Next.js</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="!bg-white !p-3 !rounded-lg !shadow-sm !border !text-center">
                                    <span className="!text-gray-700 !font-medium">Node.js</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="!bg-white !p-3 !rounded-lg !shadow-sm !border !text-center">
                                    <span className="!text-gray-700 !font-medium">MongoDB</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="!bg-white !p-3 !rounded-lg !shadow-sm !border !text-center">
                                    <span className="!text-gray-700 !font-medium">TypeScript</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="!bg-white !p-3 !rounded-lg !shadow-sm !border !text-center">
                                    <span className="!text-gray-700 !font-medium">Tailwind CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Features Section  */}
    <section className="!py-20 !bg-gray-50">
        <div className="container !mx-auto !px-6">
            <div className="!text-center !mb-16">
                <h2 className="!text-4xl md:!text-5xl !font-bold !text-gray-900 !mb-6">
                    Why Choose <span className="!bg-gradient-to-r !from-blue-600 !to-purple-600 !bg-clip-text !text-transparent">Us?</span>
                </h2>
                <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
                    We combine expertise, innovation, and dedication to deliver exceptional results
                </p>
            </div>

            <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                    <div className="!bg-white !p-8 !rounded-2xl !shadow-lg hover:!shadow-xl !transition-all !duration-300 !transform hover:!scale-105 !border !border-gray-100">
                        <div className="!inline-flex !p-4 !rounded-xl !bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white !mb-6">
                            <i className="fas fa-users !text-2xl"></i>
                        </div>
                        <h3 className="!text-xl !font-bold !text-gray-900 !mb-4">Expert Team</h3>
                        <p className="!text-gray-600">Skilled professionals with years of experience in their respective fields</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="!bg-white !p-8 !rounded-2xl !shadow-lg hover:!shadow-xl !transition-all !duration-300 !transform hover:!scale-105 !border !border-gray-100">
                        <div className="!inline-flex !p-4 !rounded-xl !bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white !mb-6">
                            <i className="fas fa-bolt !text-2xl"></i>
                        </div>
                        <h3 className="!text-xl !font-bold !text-gray-900 !mb-4">Fast Delivery</h3>
                        <p className="!text-gray-600">Quick turnaround times without compromising on quality</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="!bg-white !p-8 !rounded-2xl !shadow-lg hover:!shadow-xl !transition-all !duration-300 !transform hover:!scale-105 !border !border-gray-100">
                        <div className="!inline-flex !p-4 !rounded-xl !bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white !mb-6">
                            <i className="fas fa-shield-alt !text-2xl"></i>
                        </div>
                        <h3 className="!text-xl !font-bold !text-gray-900 !mb-4">Reliable Support</h3>
                        <p className="!text-gray-600">24/7 support and maintenance to keep your business running smoothly</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="!bg-white !p-8 !rounded-2xl !shadow-lg hover:!shadow-xl !transition-all !duration-300 !transform hover:!scale-105 !border !border-gray-100">
                        <div className="!inline-flex !p-4 !rounded-xl !bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white !mb-6">
                            <i className="fas fa-globe !text-2xl"></i>
                        </div>
                        <h3 className="!text-xl !font-bold !text-gray-900 !mb-4">Global Reach</h3>
                        <p className="!text-gray-600">Serving clients worldwide with localized solutions</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Process Section  */}
    <section className="!py-20 !bg-white">
        <div className="container !mx-auto !px-6">
            <div className="!text-center !mb-16">
                <h2 className="!text-4xl md:!text-5xl !font-bold !text-gray-900 !mb-6">
                    Our <span className="!bg-gradient-to-r !from-blue-600 !to-purple-600 !bg-clip-text !text-transparent">Process</span>
                </h2>
                <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
                    A proven methodology that ensures successful project delivery every time
                </p>
            </div>

            <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                    <div className="!text-center">
                        <div className="!relative !mb-6">
                            <div className="!w-16 !h-16 !bg-gradient-to-r !from-blue-500 !to-purple-600 !rounded-full !flex !items-center !justify-center !text-white !text-2xl !font-bold !mx-auto">
                                1
                            </div>
                            <div className="process-line d-none d-lg-block !absolute !top-8 !left-full !w-full !h-0.5 !bg-gradient-to-r !from-blue-500 !to-purple-600 !transform !-translate-y-1/2"></div>
                        </div>
                        <h3 className="!text-xl !font-bold !text-gray-900 !mb-4">Discovery & Planning</h3>
                        <p className="!text-gray-600">We analyze your requirements and create a comprehensive strategy for your project.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="!text-center">
                        <div className="!relative !mb-6">
                            <div className="!w-16 !h-16 !bg-gradient-to-r !from-blue-500 !to-purple-600 !rounded-full !flex !items-center !justify-center !text-white !text-2xl !font-bold !mx-auto">
                                2
                            </div>
                            <div className="process-line d-none d-lg-block !absolute !top-8 !left-full !w-full !h-0.5 !bg-gradient-to-r !from-blue-500 !to-purple-600 !transform !-translate-y-1/2"></div>
                        </div>
                        <h3 className="!text-xl !font-bold !text-gray-900 !mb-4">Design & Development</h3>
                        <p className="!text-gray-600">Our team creates stunning designs and develops robust solutions using latest technologies.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="!text-center">
                        <div className="!relative !mb-6">
                            <div className="!w-16 !h-16 !bg-gradient-to-r !from-blue-500 !to-purple-600 !rounded-full !flex !items-center !justify-center !text-white !text-2xl !font-bold !mx-auto">
                                3
                            </div>
                            <div className="process-line d-none d-lg-block !absolute !top-8 !left-full !w-full !h-0.5 !bg-gradient-to-r !from-blue-500 !to-purple-600 !transform !-translate-y-1/2"></div>
                        </div>
                        <h3 className="!text-xl !font-bold !text-gray-900 !mb-4">Testing & Optimization</h3>
                        <p className="!text-gray-600">Rigorous testing ensures everything works perfectly before launch.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="!text-center">
                        <div className="!relative !mb-6">
                            <div className="!w-16 !h-16 !bg-gradient-to-r !from-blue-500 !to-purple-600 !rounded-full !flex !items-center !justify-center !text-white !text-2xl !font-bold !mx-auto">
                                4
                            </div>
                        </div>
                        <h3 className="!text-xl !font-bold !text-gray-900 !mb-4">Launch & Support</h3>
                        <p className="!text-gray-600">We launch your project and provide ongoing support to ensure continued success.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Testimonials  */}
    <section className="!py-20 !bg-gray-50">
        <div className="container !mx-auto !px-6">
            <div className="!text-center !mb-16">
                <h2 className="!text-4xl md:!text-5xl !font-bold !text-gray-900 !mb-6">
                    Client <span className="!bg-gradient-to-r !from-blue-600 !to-purple-600 !bg-clip-text !text-transparent">Testimonials</span>
                </h2>
                <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
                    Don't just take our word for it - hear what our clients have to say
                </p>
            </div>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="!bg-white !p-8 !rounded-2xl !shadow-lg hover:!shadow-xl !transition-all !duration-300 !border !border-gray-100">
                        <div className="!flex !items-center !mb-4">
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                        </div>
                        <p className="!text-gray-600 !mb-6 !italic">"Exceptional web development service! Our website looks amazing and performs perfectly across all devices."</p>
                        <div>
                            <h4 className="!font-bold !text-gray-900">Sarah Johnson</h4>
                            <p className="!text-blue-600">TechStart Inc.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="!bg-white !p-8 !rounded-2xl !shadow-lg hover:!shadow-xl !transition-all !duration-300 !border !border-gray-100">
                        <div className="!flex !items-center !mb-4">
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                        </div>
                        <p className="!text-gray-600 !mb-6 !italic">"Their digital marketing strategies increased our online presence by 300%. Highly recommended!"</p>
                        <div>
                            <h4 className="!font-bold !text-gray-900">Mike Chen</h4>
                            <p className="!text-blue-600">GrowthCorp</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="!bg-white !p-8 !rounded-2xl !shadow-lg hover:!shadow-xl !transition-all !duration-300 !border !border-gray-100">
                        <div className="!flex !items-center !mb-4">
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                            <i className="fas fa-star !text-yellow-400"></i>
                        </div>
                        <p className="!text-gray-600 !mb-6 !italic">"The custom software solution they built for us streamlined our entire workflow. Outstanding work!"</p>
                        <div>
                            <h4 className="!font-bold !text-gray-900">Emily Davis</h4>
                            <p className="!text-blue-600">InnovateLab</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Pricing  */}
    <section className="!py-20 !bg-white">
        <div className="container !mx-auto !px-6">
            <div className="!text-center !mb-16">
                <h2 className="!text-4xl md:!text-5xl !font-bold !text-gray-900 !mb-6">
                    Choose Your <span className="!bg-gradient-to-r !from-blue-600 !to-purple-600 !bg-clip-text !text-transparent">Package</span>
                </h2>
                <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
                    Flexible pricing options to suit businesses of all sizes
                </p>
            </div>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="!relative !p-8 !rounded-2xl !transition-all !duration-300 !transform hover:!scale-105 !bg-white !shadow-lg hover:!shadow-xl !border !border-gray-200">
                        <div className="!text-center !mb-8">
                            <h3 className="!text-2xl !font-bold !mb-2 !text-gray-900">Starter</h3>
                            <div className="!text-4xl !font-bold !mb-2 !text-gray-900">$999</div>
                            <p className="!text-gray-600">per project</p>
                            <p className="!mt-4 !text-gray-600">Perfect for small businesses getting started</p>
                        </div>
                        <div className="!space-y-4 !mb-8">
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-500"></i>
                                <span className="!text-gray-700">Basic Website (5 pages)</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-500"></i>
                                <span className="!text-gray-700">Social Media Setup</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-500"></i>
                                <span className="!text-gray-700">Basic SEO</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-500"></i>
                                <span className="!text-gray-700">Mobile Responsive</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-500"></i>
                                <span className="!text-gray-700">1 Month Support</span>
                            </div>
                        </div>
                        <button className="btn !w-full !py-4 !rounded-xl !font-semibold !text-lg !transition-all !duration-300 !flex !items-center !justify-center !space-x-2 !bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white hover:!from-blue-600 hover:!to-purple-700 !border-0">
                            <span>Get Started</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="!relative !p-8 !rounded-2xl !transition-all !duration-300 !transform hover:!scale-105 !bg-gradient-to-br !from-blue-500 !to-purple-600 !text-white !shadow-2xl">
                        <div className="!absolute !-top-4 !left-1/2 !transform !-translate-x-1/2">
                            <span className="!bg-yellow-400 !text-gray-900 !px-4 !py-2 !rounded-full !text-sm !font-bold">
                                Most Popular
                            </span>
                        </div>
                        <div className="!text-center !mb-8">
                            <h3 className="!text-2xl !font-bold !mb-2 !text-white">Professional</h3>
                            <div className="!text-4xl !font-bold !mb-2 !text-white">$2,499</div>
                            <p className="!text-blue-100">per project</p>
                            <p className="!mt-4 !text-blue-100">Ideal for growing businesses</p>
                        </div>
                        <div className="!space-y-4 !mb-8">
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-300"></i>
                                <span className="!text-white">Advanced Website (10+ pages)</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-300"></i>
                                <span className="!text-white">Digital Marketing Campaign</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-300"></i>
                                <span className="!text-white">Custom Software Module</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-300"></i>
                                <span className="!text-white">Advanced SEO</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-300"></i>
                                <span className="!text-white">3 Months Support</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-300"></i>
                                <span className="!text-white">Analytics Dashboard</span>
                            </div>
                        </div>
                        <button className="btn !w-full !py-4 !rounded-xl !font-semibold !text-lg !transition-all !duration-300 !flex !items-center !justify-center !space-x-2 !bg-white !text-blue-600 hover:!bg-gray-100 !border-0">
                            <span>Get Started</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="!relative !p-8 !rounded-2xl !transition-all !duration-300 !transform hover:!scale-105 !bg-white !shadow-lg hover:!shadow-xl !border !border-gray-200">
                        <div className="!text-center !mb-8">
                            <h3 className="!text-2xl !font-bold !mb-2 !text-gray-900">Enterprise</h3>
                            <div className="!text-4xl !font-bold !mb-2 !text-gray-900">$4,999</div>
                            <p className="!text-gray-600">per project</p>
                            <p className="!mt-4 !text-gray-600">Complete solution for large businesses</p>
                        </div>
                        <div className="!space-y-4 !mb-8">
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-500"></i>
                                <span className="!text-gray-700">Full-Scale Web Application</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-500"></i>
                                <span className="!text-gray-700">Comprehensive Marketing Strategy</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-500"></i>
                                <span className="!text-gray-700">Custom Software Solution</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-500"></i>
                                <span className="!text-gray-700">Advanced Analytics</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-500"></i>
                                <span className="!text-gray-700">6 Months Support</span>
                            </div>
                            <div className="!flex !items-center !space-x-3">
                                <i className="fas fa-check-circle !text-green-500"></i>
                                <span className="!text-gray-700">Priority Support</span>
                            </div>
                        </div>
                        <button className="btn !w-full !py-4 !rounded-xl !font-semibold !text-lg !transition-all !duration-300 !flex !items-center !justify-center !space-x-2 !bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white hover:!from-blue-600 hover:!to-purple-700 !border-0">
                            <span>Get Started</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Stats Section  */}
    <section className="!py-20 !bg-gradient-to-r !from-blue-600 !to-purple-600 !text-white">
        <div className="container !mx-auto !px-6">
            <div className="row g-4 !text-center">
                <div className="col-md-3">
                    <div className="!text-4xl md:!text-5xl !font-bold !mb-2">500+</div>
                    <div className="!text-lg !text-blue-100">Projects Completed</div>
                </div>
                <div className="col-md-3">
                    <div className="!text-4xl md:!text-5xl !font-bold !mb-2">98%</div>
                    <div className="!text-lg !text-blue-100">Client Satisfaction</div>
                </div>
                <div className="col-md-3">
                    <div className="!text-4xl md:!text-5xl !font-bold !mb-2">50+</div>
                    <div className="!text-lg !text-blue-100">Team Members</div>
                </div>
                <div className="col-md-3">
                    <div className="!text-4xl md:!text-5xl !font-bold !mb-2">24/7</div>
                    <div className="!text-lg !text-blue-100">Support Available</div>
                </div>
            </div>
        </div>
    </section>

     {/* CTA Section  */}
    <section className="!py-20 !bg-gray-900 !text-white">
        <div className="container !mx-auto !px-6 !text-center">
            <h2 className="!text-4xl md:!text-5xl !font-bold !mb-6">
                Ready to Transform Your Business?
            </h2>
            <p className="!text-xl !text-gray-300 !mb-8 !max-w-3xl !mx-auto">
                Let's discuss your project and create something amazing together. Get in touch with our team today.
            </p>
            <div className="!flex !flex-col sm:!flex-row !gap-4 !justify-center">
                <button className="btn !bg-gradient-to-r !from-blue-500 !to-purple-600 hover:!from-blue-600 hover:!to-purple-700 !text-white !px-8 !py-4 !rounded-full !font-semibold !text-lg !transition-all !duration-300 !transform hover:!scale-105 !shadow-lg !border-0">
                    Start Your Project
                </button>
                <button className="btn btn-outline-light !border-2 !border-white !text-white hover:!bg-white hover:!text-gray-900 !px-8 !py-4 !rounded-full !font-semibold !text-lg !transition-all !duration-300">
                    Schedule a Call
                </button>
            </div>
        </div>
    </section>



     
     
      


    </>
  )
}

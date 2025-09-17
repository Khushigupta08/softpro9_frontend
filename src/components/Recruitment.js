
export default function Recruitment() {
  return (
    <>
    {/* Hero Image Section */}
<section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80 z-10"></div>
    <img 
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        alt="Professional recruitment team discussing strategy" 
        className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Find Your Perfect Match
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl">
                Connecting Top Talent with Leading Companies
            </p>
        </div>
    </div>
</section>

    {/* Hero Section  */}
    <section className="recruitment-gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Smart Recruitment Solutions for a Smarter Workforce
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                    At SoftPro9 IT Services, we believe that the success of every business begins with the right people. Talent drives innovation, accelerates growth, and builds resilience in a rapidly evolving business landscape.
                </p>
                <p className="text-lg mb-8 max-w-3xl mx-auto opacity-80">
                    Whether you are a startup looking to build your first team, a mid-sized company scaling operations, or an enterprise seeking specialized professionals, our recruitment services are designed to help you find the perfect match.
                </p>
                <p className="text-base mb-8 max-w-4xl mx-auto opacity-75">
                    We go beyond traditional hiring by combining industry expertise, advanced technologies, and AI-driven recruitment strategies to deliver faster, more reliable, and more cost-effective talent solutions. With SoftPro9 Recruitment Services, you don't just fill a vacancy — you gain a long-term partner in building a stronger workforce.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
                        Hire Talent Today
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    </section>

    {/* Philosophy Section */}
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Recruitment Philosophy</h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4">
                    Recruitment is no longer about posting jobs and waiting for candidates. It's about strategic talent acquisition, understanding business goals, and matching them with the right skills, culture fit, and aspirations.
                </p>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    At SoftPro9, we approach recruitment as a consultative process that ensures alignment between organizational needs and candidate potential.
                </p>
            </div>
            
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">We stand by three pillars of recruitment:</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="recruitment-card-hover bg-white p-8 rounded-xl shadow-md text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Precision</h3>
                    <p className="text-gray-600">Delivering candidates who meet both skill and cultural fit.</p>
                </div>
                
                <div className="recruitment-card-hover bg-white p-8 rounded-xl shadow-md text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Speed</h3>
                    <p className="text-gray-600">Leveraging AI and smart sourcing tools to reduce hiring cycles.</p>
                </div>
                
                <div className="recruitment-card-hover bg-white p-8 rounded-xl shadow-md text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
                    <p className="text-gray-600">Ensuring placements last and contribute to long-term success.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Services Section  */}
    <section className="py-16 recruitment-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive Recruitment Services We Offer</h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    SoftPro9 provides end-to-end recruitment solutions tailored to modern business needs. Our service portfolio covers a wide range of hiring models to support every stage of your talent journey.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="recruitment-service-card bg-white p-8 rounded-xl shadow-md border-2 border-gray-100 transition duration-300">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Permanent Staffing</h3>
                    </div>
                    <p className="text-gray-600">Hiring for long-term roles is one of the most critical aspects of organizational success. We specialize in connecting businesses with highly skilled professionals who are aligned with their culture and vision. Whether it's IT, finance, marketing, or leadership roles, our permanent staffing solutions ensure you invest in people who will stay and grow with your company.</p>
                </div>

                <div className="recruitment-service-card bg-white p-8 rounded-xl shadow-md border-2 border-gray-100 transition duration-300">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Contract Staffing</h3>
                    </div>
                    <p className="text-gray-600">In today's project-driven world, flexibility matters. Our contract staffing solutions allow businesses to scale up or down quickly without compromising quality. From short-term projects to specialized tasks, we provide access to experts who can hit the ground running.</p>
                </div>

                <div className="recruitment-service-card bg-white p-8 rounded-xl shadow-md border-2 border-gray-100 transition duration-300">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Executive Search</h3>
                    </div>
                    <p className="text-gray-600">Leadership defines direction. Our executive search services focus on identifying visionary leaders for senior and niche roles. Using a discreet and rigorous process, we help organizations hire executives who can drive innovation, lead teams, and deliver impact.</p>
                </div>

                <div className="recruitment-service-card bg-white p-8 rounded-xl shadow-md border-2 border-gray-100 transition duration-300">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Campus Recruitment</h3>
                    </div>
                    <p className="text-gray-600">Fresh talent brings energy, innovation, and adaptability. Our campus recruitment programs help companies tap into emerging talent pools by collaborating with top universities and institutions. We manage everything from campus drives to onboarding, ensuring your organization gets the best young minds.</p>
                </div>

                <div className="recruitment-service-card bg-white p-8 rounded-xl shadow-md border-2 border-gray-100 transition duration-300">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Recruitment Process Outsourcing (RPO)</h3>
                    </div>
                    <p className="text-gray-600">For businesses looking to delegate their entire recruitment function, we provide full-scale RPO services. From job postings, sourcing, and assessments to interviews and onboarding, we act as an extension of your HR team — ensuring efficiency, scalability, and cost savings.</p>
                </div>

                <div className="recruitment-service-card bg-white p-8 rounded-xl shadow-md border-2 border-gray-100 transition duration-300">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Specialized Hiring</h3>
                    </div>
                    <p className="text-gray-600">With deep expertise in IT, SAP, Digital Marketing, and Web & App Development, we provide specialized recruitment services for industries where niche skills are critical. Our recruiters understand the technical requirements and market dynamics, making the hiring process precise and effective.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Process Section  */}
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Recruitment Process</h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                    To ensure consistency and quality, SoftPro9 follows a structured 6-step recruitment process:
                </p>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    This proven methodology ensures higher retention rates, lower hiring costs, and reduced time-to-fill positions.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="recruitment-process-step">
                    <div className="bg-blue-50 p-8 rounded-xl">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">1</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Requirement Analysis</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Understand the client's business, goals, and talent needs</li>
                            <li>• Identify skills, qualifications, and cultural requirements</li>
                        </ul>
                    </div>
                </div>

                <div className="recruitment-process-step">
                    <div className="bg-blue-50 p-8 rounded-xl">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">2</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Talent Sourcing</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Use AI-driven platforms, professional networks, and internal databases</li>
                            <li>• Leverage job portals, LinkedIn, and referral systems for broader reach</li>
                        </ul>
                    </div>
                </div>

                <div className="recruitment-process-step">
                    <div className="bg-blue-50 p-8 rounded-xl">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">3</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Screening & Shortlisting</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Detailed assessment of resumes, skills, and career background</li>
                            <li>• Shortlisting candidates who meet both technical and cultural requirements</li>
                        </ul>
                    </div>
                </div>

                <div className="recruitment-process-step">
                    <div className="bg-blue-50 p-8 rounded-xl">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">4</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Interviews & Evaluations</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Multi-layered screening, including technical and HR interviews</li>
                            <li>• Personality and cultural fit assessments (optional)</li>
                        </ul>
                    </div>
                </div>

                <div className="recruitment-process-step">
                    <div className="bg-blue-50 p-8 rounded-xl">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">5</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Selection & Offer Management</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Facilitate negotiations and ensure a smooth offer rollout</li>
                            <li>• Provide transparency to both employers and candidates</li>
                        </ul>
                    </div>
                </div>

                <div className="recruitment-process-step">
                    <div className="bg-blue-50 p-8 rounded-xl">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">6</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Onboarding & Post-Placement Support</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Assist candidates during transition</li>
                            <li>• Ensure employers and employees achieve long-term satisfaction</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose Us Section  */}
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose SoftPro9 Recruitment Services?</h2>
                <p className="text-lg text-gray-600">We understand that companies have choices when it comes to recruitment partners. Here's why SoftPro9 stands out:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1 text-xl">✅</div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">AI-Powered Sourcing</h3>
                            <p className="text-gray-600">Faster, data-driven, and more accurate candidate matching.</p>
                        </div>
                    </div>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1 text-xl">✅</div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Industry Expertise</h3>
                            <p className="text-gray-600">Recruitment specialists with in-depth knowledge of IT, SAP, Digital, and Multiple Industries.</p>
                        </div>
                    </div>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1 text-xl">✅</div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Global Reach</h3>
                            <p className="text-gray-600">Ability to source both local and international talent.</p>
                        </div>
                    </div>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1 text-xl">✅</div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Customizable Solutions</h3>
                            <p className="text-gray-600">Flexible models for startups, SMEs, and enterprises.</p>
                        </div>
                    </div>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1 text-xl">✅</div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Speed & Efficiency</h3>
                            <p className="text-gray-600">Reduced hiring time without compromising quality.</p>
                        </div>
                    </div>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1 text-xl">✅</div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Long-Term Partnerships</h3>
                            <p className="text-gray-600">We focus on retention and employee growth, not just placements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Industries Section  */}
    <section className="py-16 recruitment-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
                <p className="text-lg text-gray-600 mb-6">SoftPro9's recruitment services cater to diverse industries:</p>
                <p className="text-lg text-gray-600">Our industry-specific recruiters ensure that every candidate we recommend has the technical skills and industry knowledge to excel.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">Information Technology & Software</h3>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">SAP & Enterprise Solutions</h3>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v3m0 0v8a1 1 0 001 1h3m-4 0V9a1 1 0 011-1h3m0 0h8m-8 0V6a1 1 0 011-1h8a1 1 0 011 1v3m0 0v8a1 1 0 01-1 1h-3"></path>
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">Digital Marketing & Creative</h3>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">Banking, Finance & Insurance</h3>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">Manufacturing & Supply Chain</h3>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">Healthcare & Life Sciences</h3>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">Education & Training</h3>
                </div>

                <div className="recruitment-card-hover bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">Retail & E-Commerce</h3>
                </div>
            </div>
        </div>
    </section>

    {/* For Employers & Candidates Section  */}
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* For Employers  */}
                <div className="recruitment-card-hover bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">For Employers</h2>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Build Your Dream Team</h3>
                    <p className="text-gray-700 mb-6">
                        Hiring challenges like skill gaps, high turnover, and long hiring cycles can hold businesses back. With SoftPro9 Recruitment Services, you gain a strategic hiring partner who ensures:
                    </p>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            Access to pre-vetted candidates
                        </li>
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            Reduced time-to-hire
                        </li>
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            High-quality candidates aligned with your goals
                        </li>
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            Full support from requirement to onboarding
                        </li>
                    </ul>
                    <p className="text-gray-700 mb-8">
                        Whether you need a full-time employee, a contractor, or an executive leader, SoftPro9 delivers talent that powers business success.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                        Hire Talent Today
                    </button>
                </div>

                 {/* For Candidates  */}
                <div className="recruitment-card-hover bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">For Candidates</h2>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Find Your Next Big Opportunity</h3>
                    <p className="text-gray-700 mb-6">
                        At SoftPro9, recruitment isn't just about filling jobs; it's about building careers. We support candidates in finding opportunities that align with their skills, goals, and aspirations.
                    </p>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                            Explore roles across IT, SAP, Digital Marketing, App Development, Finance, and more
                        </li>
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                            Gain access to top employers and exciting projects
                        </li>
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                            Receive guidance on interviews, resumes, and skill development
                        </li>
                        <li className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                            Join a growing community of professionals who trust SoftPro9 to accelerate their careers
                        </li>
                    </ul>
                    <p className="text-gray-700 mb-8">
                        Your journey doesn't end with placement — we support you in career growth and development.
                    </p>
                    <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    </section>

     {/* Success Stories Section  */}
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
                <p className="text-lg text-gray-600">Our success stories highlight how strategic recruitment fuels business growth and innovation.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="recruitment-card-hover bg-white p-8 rounded-xl shadow-md">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">IT Startup Scaling to Enterprise</h3>
                    <p className="text-gray-600">Helped a Bangalore-based startup scale from 15 to 150 employees in under 12 months, enabling rapid growth and market expansion.</p>
                </div>

                <div className="recruitment-card-hover bg-white p-8 rounded-xl shadow-md">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Leadership Hiring</h3>
                    <p className="text-gray-600">Recruited a senior SAP architect for a global manufacturing firm, enabling successful SAP S/4HANA migration and digital transformation.</p>
                </div>

                <div className="recruitment-card-hover bg-white p-8 rounded-xl shadow-md">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Campus Drive Excellence</h3>
                    <p className="text-gray-600">Conducted nationwide campus drives for a multinational company, successfully onboarding 200+ fresh graduates across multiple locations.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Testimonials Section  */}
    <section className="py-16 recruitment-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Testimonials</h2>
                <p className="text-lg text-gray-600">Don't just take our word for it - hear from the companies and candidates we've helped succeed.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="recruitment-testimonial-card p-8 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400 text-lg">
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>
                    <p className="text-gray-700 italic mb-6">"SoftPro9 transformed our hiring process. We were struggling to find specialized SAP consultants, and within weeks, they provided us with top-tier professionals."</p>
                    <div className="border-t pt-4">
                        <p className="font-semibold text-gray-900">HR Director</p>
                        <p className="text-gray-600">Manufacturing Firm</p>
                    </div>
                </div>

                <div className="recruitment-testimonial-card p-8 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400 text-lg">
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>
                    <p className="text-gray-700 italic mb-6">"The transparency and efficiency of SoftPro9's recruitment team are unmatched. Their contract staffing solutions helped us scale project teams quickly."</p>
                    <div className="border-t pt-4">
                        <p className="font-semibold text-gray-900">Project Manager</p>
                        <p className="text-gray-600">IT Company</p>
                    </div>
                </div>

                <div className="recruitment-testimonial-card p-8 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400 text-lg">
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>
                    <p className="text-gray-700 italic mb-6">"As a candidate, I felt supported at every step. The SoftPro9 team guided me through interviews and helped me land a role that perfectly matched my skills."</p>
                    <div className="border-t pt-4">
                        <p className="font-semibold text-gray-900">Digital Marketing Specialist</p>
                        <p className="text-gray-600">Job Seeker</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* FAQ Section  */}
    <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">FAQ – Recruitment Services</h2>
                <p className="text-lg text-gray-600">Get answers to common questions about our recruitment services.</p>
            </div>

            <div className="space-y-6">
                <div className="recruitment-card-hover bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Q1: Do you provide recruitment services for startups?</h3>
                    <p className="text-gray-700">Yes, we offer tailored solutions for startups, including flexible and cost-effective hiring options designed to support growing businesses.</p>
                </div>

                <div className="recruitment-card-hover bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Q2: Can you hire for international roles?</h3>
                    <p className="text-gray-700">Absolutely. With our global network and AI-driven sourcing capabilities, we connect businesses with talent across borders and time zones.</p>
                </div>

                <div className="recruitment-card-hover bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Q3: How fast can you fill a position?</h3>
                    <p className="text-gray-700">Depending on the role complexity, most positions are filled within 2–4 weeks. Specialized roles may take longer, but our process ensures both quality and speed.</p>
                </div>

                <div className="recruitment-card-hover bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Q4: Do you support candidates after placement?</h3>
                    <p className="text-gray-700">Yes, we provide comprehensive post-placement support to ensure smooth onboarding and long-term success for both candidates and employers.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Call to Action Section  */}
    <section className="py-20 recruitment-gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Call-to-Action – Let's Build the Future Together</h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                    Are you looking for the right talent to power your business? Or are you a candidate searching for your next big opportunity?
                </p>
                <p className="text-lg mb-8 max-w-3xl mx-auto opacity-80">
                    With SoftPro9 Recruitment Services, you can rely on a partner who combines technology, expertise, and human touch to make recruitment seamless.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">👉 For Employers:</h3>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
                            Hire Talent Today
                        </button>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">👉 For Job Seekers:</h3>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Conclusion Section  */}
    <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Conclusion</h2>
            <p className="text-lg mb-6 opacity-90">
                Recruitment is more than a transaction — it's about creating partnerships, building futures, and enabling growth. At SoftPro9 IT Services, our recruitment services are designed to empower both businesses and professionals to thrive in a digital-first world.
            </p>
            <p className="text-lg opacity-90">
                From permanent and contract staffing to executive search, RPO, and specialized hiring, we are your one-stop recruitment partner. With us, you don't just fill positions — you build teams that deliver excellence.
            </p>
        </div>
    </section>
    </>
  )
}



import { useEffect } from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale, faChartLine, faLightbulb, faUser} from "@fortawesome/free-solid-svg-icons";


export default function Carrer() {
      useEffect(() => {
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.8;
    }

    function handleScrollAnimation() {
      const elements = document.querySelectorAll(".fade-in-up");
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add("active");
        }
      });
    }

    function animateCounters() {
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"));
        let current = 0;
        const increment = target / 100;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        updateCounter();
      });
    }

    window.addEventListener("scroll", handleScrollAnimation);
    window.addEventListener("load", animateCounters);

    handleScrollAnimation();
    animateCounters();

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
      window.removeEventListener("load", animateCounters);
    };
  }, []);

  return (
    <>
    {/* Hero Section  */}
    <section className="hero-careers">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="hero-content fade-in-up">
                        <h1 className="hero-title">Build<span style={{color:"#ffd89b;"}}> Your Career</span> with Softpro9 IT Services</h1>
                        <p className="hero-subtitle">Shape the future of technology with us.</p>
                        <div className="cta-buttons">
                            <a href="#open-positions" className="btn-primary-custom">
                                <i className="fas fa-briefcase me-2"></i>View Open Positions
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hero-visual fade-in-up">
                        <div style={{textAlign: "center",fontSize: "15rem",color: "rgba(255,255,255,0.1)"}}>
                            <i className="fas fa-rocket"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Why Work with us */}
        <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="section-titles fade-in-up">
            Why Work With Us
          </h2>
          <p className="section-subtitles fade-in-up">
            Join us and grow your career with a team that values innovation, culture, and excellence.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Perks List */}
          <div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 text-lg">Growth opportunities for your career</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 text-lg">Work on innovative technologies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 text-lg">Strong company culture & collaboration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 text-lg">Flexible work environment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 text-lg">AI-driven projects & cutting-edge solutions</span>
              </li>
            </ul>
          </div>

          {/* Right - Team Image */}
          <div className="flex justify-center">
            <img
            src="/images/career_image.avif"
            alt="Happy employees team working together"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover h-80"
            />
        </div>
        </div>
      </div>
        </section>
    {/* Company Culture Section  */}
    <section id="company-culture" className="culture-section">
        <div className="container">
            <h2 className="section-titles fade-in-up text-white">Life at Softpro9</h2>
            <p className="section-subtitles fade-in-up text-white">Discover what makes our workplace extraordinary and why top talents choose to grow with us.</p>
            
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="culture-card fade-in-up">
                        <div className="culture-icon">
                            <FontAwesomeIcon icon={faLightbulb}/>
                            
                        </div>
                        <h3 className="culture-title">Innovation-driven Culture</h3>
                        <p className="culture-description">We encourage creative thinking and provide the freedom to experiment with cutting-edge technologies. Your innovative ideas are not just heard - they're implemented.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="culture-card fade-in-up">
                        <div className="culture-icon">
                            <FontAwesomeIcon icon={faChartLine}/>
                            
                        </div>
                        <h3 className="culture-title">Collaborative Environment</h3>
                        <p className="culture-description">Structured learning paths, mentorship programs, and opportunities to lead projects. We invest in your growth because your success is our success.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="culture-card fade-in-up">
                        <div className="culture-icon">
                            <FontAwesomeIcon icon={faBalanceScale}/>
                            
                        </div>
                        <h3 className="culture-title">Continuous Learning</h3>
                        <p className="culture-description">Flexible working hours, remote work options, and a supportive environment that values your personal time and well-being.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md">
                    <div className="culture-card fade-in-up">
                        <div className="culture-icon">
                            <FontAwesomeIcon icon={faUser}/>
                            
                        </div>
                        <h3 className="culture-title">Celebrations & Team Activities</h3>
                        <p className="culture-description">Work alongside passionate professionals who share knowledge freely and support each other's growth in a positive, inclusive environment.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    {/* Job Openings Section  */}
    <section id="open-positions" className="jobs-section">
        <div className="container">
            <h2 className="section-titles fade-in-up">Current Job Openings</h2>
            <p className="section-subtitles fade-in-up">Join our talented team and be part of exciting projects that shape the digital future.</p>
            
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="job-card fade-in-up">
                        <h3 className="job-title">Senior Full Stack Developer</h3>
                        <span className="job-department">Development Team</span>
                        <p className="job-description">Lead the development of scalable web applications using modern technologies. Work on challenging projects that serve thousands of users globally.</p>
                        <div className="job-requirements">
                            <h6>Key Requirements:</h6>
                            <ul>
                                <li>5+ years experience in React/Node.js</li>
                                <li>Strong knowledge of databases (MySQL, MongoDB)</li>
                                <li>Experience with cloud platforms (AWS/Azure)</li>
                                <li>Leadership and mentoring skills</li>
                            </ul>
                        </div>
                        <Link to="/" className="apply-btn" onclick="applyForJob('Senior Full Stack Developer')">
                            <i className="fas fa-paper-plane me-2"></i>Apply Now
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="job-card fade-in-up">
                        <h3 className="job-title">Digital Marketing Specialist</h3>
                        <span className="job-department">Marketing Team</span>
                        <p className="job-description">Drive digital marketing campaigns, SEO strategies, and social media presence. Help brands achieve exceptional online visibility and growth.</p>
                        <div className="job-requirements">
                            <h6>Key Requirements:</h6>
                            <ul>
                                <li>3+ years in digital marketing</li>
                                <li>Google Ads & Facebook Ads expertise</li>
                                <li>SEO/SEM knowledge</li>
                                <li>Analytics and reporting skills</li>
                            </ul>
                        </div>
                        <Link to="/" className="apply-btn" onclick="applyForJob('Digital Marketing Specialist')">
                            <i className="fas fa-paper-plane me-2"></i>Apply Now
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="job-card fade-in-up">
                        <h3 className="job-title">UI/UX Designer</h3>
                        <span className="job-department">Design Team</span>
                        <p className="job-description">Create beautiful, intuitive user experiences that delight customers. Work on diverse projects from mobile apps to enterprise software.</p>
                        <div className="job-requirements">
                            <h6>Key Requirements:</h6>
                            <ul>
                                <li>4+ years in UI/UX design</li>
                                <li>Proficiency in Figma, Adobe XD</li>
                                <li>User research and testing experience</li>
                                <li>Portfolio of successful projects</li>
                            </ul>
                        </div>
                        <Link to="/" className="apply-btn" onclick="applyForJob('UI/UX Designer')">
                            <i className="fas fa-paper-plane me-2"></i>Apply Now
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="job-card fade-in-up">
                        <h3 className="job-title">Training Specialist</h3>
                        <span className="job-department">SoftPro9 Academy</span>
                        <p className="job-description">Shape the next generation of developers through our academy programs. Deliver high-quality training in web development and software engineering.</p>
                        <div className="job-requirements">
                            <h6>Key Requirements:</h6>
                            <ul>
                                <li>5+ years software development experience</li>
                                <li>Teaching or training background</li>
                                <li>Expertise in multiple programming languages</li>
                                <li>Excellent communication skills</li>
                            </ul>
                        </div>
                        <Link to="/" className="apply-btn" onclick="applyForJob('Training Specialist')">
                            <i className="fas fa-paper-plane me-2"></i>Apply Now
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    {/* Internship and graduate programms */}
    <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
              {/* Header  */}
            <div className="text-center mb-16 intern-fade-in">
                <div className="inline-block p-3 bg-blue-600 rounded-full mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                </div>
                <h2 className="section-titles fade-in-up">
                    Internship & Graduate Programs
                </h2>
                <p className="section-subtitles fade-in-up">
                    Perfect launchpad for freshers! Join our comprehensive programs designed to accelerate your career in tech
                </p>
            </div>

             {/* Main Content Cards  */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
                 {/* Real Projects Card  */}
                <div className="intern-card-hover intern-float-animation bg-white border-2 border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 hover:rotate-6 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
                        Real Projects
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Work on cutting-edge projects that impact millions of users. Build production-ready solutions and contribute to meaningful products from day one.
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold">
                        <span>Hands-on experience</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </div>
                </div>

               {/* Mentorship Card  */}
                <div className="intern-card-hover intern-float-animation intern-float-delay-1 bg-white border-2 border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 hover:rotate-6 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
                        Expert Mentorship
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Learn from industry veterans and senior engineers. Get personalized guidance, code reviews, and career advice to accelerate your professional growth.
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold">
                        <span>1-on-1 guidance</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </div>
                </div>

                 {/* Full-time Placement Card  */}
                <div className="intern-card-hover intern-float-animation intern-float-delay-2 bg-white border-2 border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 hover:rotate-6 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
                        Full-time Placement
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Outstanding performers get fast-tracked to permanent roles. Turn your internship into a thriving career with competitive packages and growth opportunities.
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold">
                        <span>Career acceleration</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </div>
                </div>
            </div>

             {/* Call to Action */}
            <div className="text-center">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 max-w-4xl mx-auto shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        Ready to Start Your Tech Journey?
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg">
                        Join thousands of successful graduates who launched their careers with us
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="intern-btn-hover px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg">
                            Apply for Internship
                        </button>
                        <button className="intern-btn-hover px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-full transition-all duration-300">
                            View Graduate Programs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Employee */}
       <section className="py-20 px-4 sm:px-6 lg:px-8" style={{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}>
        <div className="max-w-7xl mx-auto">
              {/* Header  */}
            <div className="text-center mb-16 growth-fade-in">
                <div className="inline-block p-3 bg-blue-600 rounded-full mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                </div>
                <h2 className="section-titles fade-in-up text-white">
                    Employee Growth & Future Path
                </h2>
                <p className="section-subtitles fade-in-up text-white">
                    Unlock your potential with comprehensive training programs, certifications, and clear career advancement opportunities
                </p>
            </div>

             {/* Training Programs  */}
            <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-800 text-center mb-12 text-white">Training Programs</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {/* SAP Training  */}
                    <div className="growth-card-hover growth-float-animation bg-white border-2 border-blue-100 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 growth-icon-hover transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">SAP Training</h4>
                        <p className="text-gray-600 text-sm">Master enterprise-level SAP solutions and modules</p>
                    </div>

                      {/* AI Training  */}
                    <div className="growth-card-hover growth-float-animation growth-float-delay-1 bg-white border-2 border-blue-100 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 growth-icon-hover transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">AI Training</h4>
                        <p className="text-gray-600 text-sm">Explore machine learning, deep learning & AI technologies</p>
                    </div>

                      {/* Full Stack Training  */}
                    <div className="growth-card-hover growth-float-animation growth-float-delay-2 bg-white border-2 border-blue-100 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 growth-icon-hover transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Full Stack</h4>
                        <p className="text-gray-600 text-sm">Complete web development from frontend to backend</p>
                    </div>

                     {/* Digital Marketing Training  */}
                    <div className="growth-card-hover growth-float-animation bg-white border-2 border-blue-100 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500" style={{animationDelay: "1.5s"}}>
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 growth-icon-hover transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Digital Marketing</h4>
                        <p className="text-gray-600 text-sm">SEO, SEM, social media & digital marketing strategies</p>
                    </div>
                </div>
            </div>

              {/* Growth Opportunities  */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
                 {/* Certifications Support  */}
                <div className="growth-card-hover bg-white border-2 border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-4 growth-icon-hover transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                            Certifications Support
                        </h3>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Industry-recognized certification programs
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Financial support for exam fees
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Study materials and resources provided
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Dedicated time allocation for preparation
                        </li>
                    </ul>
                </div>

                  {/* Career Advancement  */}
                <div className="growth-card-hover bg-white border-2 border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-4 growth-icon-hover transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                            Career Advancement
                        </h3>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Clear promotion pathways and criteria
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Leadership development programs
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Cross-functional project opportunities
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Performance-based salary increments
                        </li>
                    </ul>
                </div>
            </div>

              {/* Call to Action  */}
            <div className="text-center">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 max-w-4xl mx-auto shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        Invest in Your Future Today
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg">
                        Join a company that believes in your growth and provides the tools to succeed
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="growth-btn-hover px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg">
                            Explore Career Paths
                        </button>
                        <Link to='/academy'><button className="growth-btn-hover px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-full transition-all duration-300">
                            View Training Programs
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
       </section>
    
    {/* Our Hiring Process Section  */}
    <section className="process-section">
        <div className="container">
            <h2 className="section-titles fade-in-up">Our Hiring Process</h2>
            <p className="section-subtitles fade-in-up">Our streamlined hiring process ensures we find the right fit while respecting your time.</p>
            
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="process-step fade-in-up">
                        <div className="step-number">1</div>
                        <h3 className="step-title">Apply Online</h3>
                        <p className="step-description">Submit your application through our career portal with your resume and cover letter.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="process-step fade-in-up">
                        <div className="step-number">2</div>
                        <h3 className="step-title">Initial Screening</h3>
                        <p className="step-description">Our HR team reviews your application and conducts a brief phone/video screening call.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="process-step fade-in-up">
                        <div className="step-number">3</div>
                        <h3 className="step-title">Assessment</h3>
                        <p className="step-description">Meet with our technical team for role-specific discussions and skill assessments.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="process-step fade-in-up">
                        <div className="step-number">4</div>
                        <h3 className="step-title">Technical Interview</h3>
                        <p className="step-description">Meet with our technical team for role-specific discussions and skill assessments.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="process-step fade-in-up">
                        <div className="step-number">5</div>
                        <h3 className="step-title">Other</h3>
                        <p className="step-description">Final interview with leadership team followed by offer letter and onboarding.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Contact Section  */}
    <section className="contact-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-info">
                        <h2 className="section-titles fade-in-up" style={{color: "white"}}>Ready to grow with Us?</h2>
                        <p className="section-subtitles fade-in-up" style={{color: "rgba(255,255,255,0.8)"}}>Have questions about our opportunities? We'd love to hear from you!</p>
                        
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact-item fade-in-up">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <h4>Email Us</h4>
                                    <p>careers@softpro9.com</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-item fade-in-up">
                                    <div className="contact-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <h4>Call Us</h4>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-item fade-in-up">
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <h4>Visit Us</h4>
                                    <p>Malviya Nagar, Jaipur</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-5">
                            <a href="mailto:careers@softpro9.com" className="btn-primary-custom">
                                <i className="fas fa-paper-plane me-2"></i>Submit Your Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Application Modal  */}
    <div className="modal fade" id="applicationModal" tabindex="-1" aria-labelledby="applicationModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="applicationModalLabel">Apply for Position</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form id="applicationForm">
                        <div className="mb-3">
                            <label htmlFor="applicantName" className="form-label">Full Name *</label>
                            <input type="text" className="form-control" id="applicantName" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="applicantEmail" className="form-label">Email Address *</label>
                            <input type="email" className="form-control" id="applicantEmail" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="applicantPhone" className="form-label">Phone Number *</label>
                            <input type="tel" className="form-control" id="applicantPhone" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="applicantPosition" className="form-label">Position Applied For</label>
                            <input type="text" className="form-control" id="applicantPosition" readonly/>
                        </div>
                        <div className="mb-3">
                            <label for="applicantExperience" className="form-label">Years of Experience</label>
                            <select class="form-control" id="applicantExperience">
                                <option>0-1 years</option>
                                <option>2-3 years</option>
                                <option>4-5 years</option>
                                <option>6-8 years</option>
                                <option>9+ years</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="applicantResume" className="form-label">Resume/CV *</label>
                            <input type="file" class="form-control" id="applicantResume" accept=".pdf,.doc,.docx" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="applicantCoverLetter" className="form-label">Why do you want to join SoftPro9?</label>
                            <textarea className="form-control" id="applicantCoverLetter" rows="4" placeholder="Tell us about your motivation and what you can bring to our team..."></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" onClick="submitApplication()">Submit Application</button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

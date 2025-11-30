// import React from 'react'
import './style.css';
import { Users, Clock , Award ,Briefcase,ArrowUpRight, MapPin,ArrowRight,TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import 'react-quill-new/dist/quill.snow.css';
import { Helmet } from 'react-helmet-async';
import ConsultationFormModal from "./ConsultationFormModal";
import ScrollArrowButton from './ScrollArrowButton';
import { buildApiUrl, getApiConfig } from "../utils/apiConfig";


function FeaturedLocationsWidget() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    loadLocations();
  }, []);

  const loadLocations = async () => {
    try {
      const response = await fetch(buildApiUrl('/api/locations?isActive=true'), getApiConfig());
      const data = await response.json();
      if (data.success) {
        setLocations(data.data.slice(0, 8)); // Only 8 locations
      }
    } catch (error) {
      console.error('Error loading locations:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
      </div>
    );
  }

  if (locations.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {locations.map((location) => (
        <Link
          key={location.slug}
          to={`/location/${location.slug}`}
          onClick={() => window.scrollTo(0, 0)}
          className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-indigo-300 transform hover:-translate-y-2 relative"
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
            <div className="flex items-center gap-2 text-white mb-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">{location.location}</span>
            </div>
            <h3 className="text-white font-bold text-lg line-clamp-2 group-hover:text-indigo-100 transition-colors">
              {location.course}
            </h3>
          </div>

          {/* Card Body */}
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {location.description}
            </p>

            {/* Stats */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="h-4 w-4 text-indigo-600" />
                <span>{location.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4 text-indigo-600" />
                <span>{location.mode}</span>
              </div>
            </div>

            {/* Category Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full">
                {location.category}
              </span>
              <ArrowRight className="h-5 w-5 text-indigo-600 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* SAP Badge */}
          {location.isSAP && (
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded shadow-lg">
                SAP
              </span>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
            const [blogs, setBlogs] = useState([]);
            const [activeCategory] = useState("all");
            const [expandedServices, setExpandedServices] = useState({});
            const [mobileOpen, setMobileOpen] = useState(false);
            const [showConsultationModal, setShowConsultationModal] = useState(false);
            const [showModal, setShowModal] = useState(false);
            const [modalFormType, setModalFormType] = useState('consultation'); // or 'quote'


    const toggleService = (key) => {
        setExpandedServices(prev => ({ ...prev, [key]: !prev[key] }));
    };


  useEffect(() => {
    axios
      .get(buildApiUrl("/api/blogs"))
      .then((res) => {
        // Sort by createdAt descending agar available ho, warna as is le lo
        const sorted = res.data.sort((a, b) => {
          if (a.createdAt && b.createdAt)
            return new Date(b.createdAt) - new Date(a.createdAt);
          return 0;
        });
        // only 3 latest blogs
        setBlogs(sorted.slice(0, 3));
      })
      .catch(console.error);
  }, []);

   useEffect(() => {
    setMobileOpen(false);
    
  });

// Filter blogs by category
  const filteredCards = blogs.filter(
    (card) => activeCategory === "all" || card.category === activeCategory
  );
  // Title ko slug me convert karne ka function
  const slugify = (text) =>
    encodeURIComponent(
      text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")
    );
// react-quill
  function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}
  return (
    <>
          <ScrollArrowButton />

        <Helmet>
                {/* Primary Meta Tags */}
                <title>Home - SoftPro9 Academy | Technology Training & Services</title>
                <meta name="description" content="SoftPro9 Academy — industry-focused technology training, SAP services, web & app development, and AI-driven digital marketing. Join 10K+ learners." />
                <meta name="keywords" content="SoftPro9, tech training, SAP services, web development, AI courses, digital marketing, online courses" />
                <link rel="canonical" href={window.location.origin + window.location.pathname} />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="SoftPro9 Academy — Technology Training & Services" />
                <meta property="og:description" content="Industry-focused training, SAP services, and AI-powered digital solutions. Enroll in career-ready courses and accelerate your growth." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.origin + window.location.pathname} />
                <meta property="og:image" content={window.location.origin + '/images/about_softpro_image1.avif'} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SoftPro9 Academy — Technology Training & Services" />
                <meta name="twitter:description" content="Industry-focused training, SAP services, and AI-powered digital solutions. Enroll in career-ready courses and accelerate your growth." />
                <meta name="twitter:image" content={window.location.origin + '/images/about_softpro_image1.avif'} />

                {/* JSON-LD Organization */}
                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "SoftPro9 Academy",
                        "url": "${window.location.origin}",
                        "logo": "${window.location.origin}/logo192.png",
                        "sameAs": [
                            "https://facebook.com/softpro9",
                            "https://instagram.com/softpro9",
                            "https://linkedin.com/company/softpro9"
                        ],
                        "contactPoint": [{
                            "@type": "ContactPoint",
                            "telephone": "+91 9535451414",
                            "contactType": "customer service",
                            "areaServed": "IN"
                        }]
                    }`}
                </script>
            </Helmet>
            {/* Hero Section  */}
            <section className="gradient-bg pt-20 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="slide-in">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                Empowering Businesses With 
                                <span className="block">Technology, Innovation & AI</span>
                            </h1>
                            <p className="text-xl text-white/90 mb-8 max-w-xl">
                                Trusted IT partner for SAP Services, Web & App Development, and AI-driven Digital Marketing. 
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/service">
                                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg pulse-blue">
                                        Explore Services
                                    </button>
                                </Link>
                                <button
                                    onClick={() => {
                                    setModalFormType('consultation');
                                    setShowModal(true);
                                    }}
                                    className='bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg pulse-blue'
                                 >
                                    Get a Free Consultation
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
            {/* consultation modal */}
            <ConsultationFormModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                formType={modalFormType}
                />


     {/* About SoftPro9 */}
        <section className="home-about-section py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
            <div className="home-about-content max-w-6xl mx-auto">
                <h2 className="home-about-title text-5xl md:text-6xl font-bold text-black mb-6">
                    Welcome to <span className="home-brand-name text-blue-600">SoftPro9</span>
                </h2>
                {/* Cards with Stats below each card - Equal heights for all cards */}
                <div className="home-about-cards grid md:grid-cols-3 gap-8 mb-10">
                    {/* Who We Are + 100+ Clients */}
                    <div className="flex flex-col gap-4">
                        <div className="home-who-card bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col h-full">
                            <div className="home-who-icon bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                                </svg>
                            </div>
                            <h3 className="home-who-title text-xl font-semibold text-black mb-3">Who We Are</h3>
                            <p className="home-who-description text-black-100 text-sm leading-relaxed text-justify flex-grow">
                                We are a leading technology solutions provider with 10+ years of expertise, serving 100+ clients globally with cutting-edge digital innovations.
                            </p>
                        </div>
                        <div className="home-stat-item bg-blue-200 backdrop-blur-sm rounded-lg p-4 text-black">
                            <div className="home-stat-number text-2xl font-bold">100+</div>
                            <div className="home-stat-label">Clients</div>
                        </div>
                    </div>

                    {/* What We Do + 10+ Years Expertise */}
                    <div className="flex flex-col gap-4">
                        <div className="home-what-card bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col h-full">
                            <div className="home-what-icon bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                </svg>
                            </div>
                            <h3 className="home-what-title text-xl font-semibold text-black mb-3">What We Do</h3>
                            <p className="home-what-description text-black-100 text-sm leading-relaxed text-justify flex-grow">
                                We specialize in digital transformation, innovative software development, AI solutions, and comprehensive training programs for modern businesses.
                            </p>
                        </div>
                        <div className="home-stat-item bg-blue-200 backdrop-blur-sm rounded-lg p-4 text-black">
                            <div className="home-stat-number text-2xl font-bold">10+</div>
                            <div className="home-stat-label">Years Expertise</div>
                        </div>
                    </div>

                    {/* Our Vision + Global Reach */}
                    <div className="flex flex-col gap-4">
                        <div className="home-vision-card bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col h-full">
                            <div className="home-vision-icon bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            </div>
                            <h3 className="home-vision-title text-xl font-semibold text-black mb-3">Our Vision</h3>
                            <p className="home-vision-description text-black-100 text-sm leading-relaxed text-justify flex-grow">
                                To empower businesses worldwide through technology excellence and strategic innovation, creating a digitally transformed future for all industries.
                            </p>
                        </div>
                        <div className="home-stat-item bg-blue-200 backdrop-blur-sm rounded-lg p-4 text-black">
                            <div className="home-stat-number text-2xl font-bold">Global</div>
                            <div className="home-stat-label">Reach</div>
                        </div>
                    </div>
                </div>

                <Link to='/about'><button className="home-about-cta bg-blue-500 hover:bg-blue-400 text-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                    Learn More About Us
                </button></Link>
            </div>
        </div>
        </section>
 
     {/* Our Core services */}
       <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our comprehensive range of industry-focused services designed to accelerate your business growth</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Web Development */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col">
                <div className="relative">
                    <img 
                        src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                        alt="Web Development" 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        Web & App Development
                    </h3>
                    <div className="flex-grow">
                        <p className={`text-gray-600 mb-4 leading-relaxed core-desc ${expandedServices['web'] ? 'expanded' : 'collapsed'}`}>
                            Scalable, secure, and AI-powered digital solutions that drive business growth
                        </p>
                        <button onClick={() => toggleService('web')} className="text-sm font-medium text-blue-600 hover:underline mb-4">
                            {expandedServices['web'] ? 'Show less' : 'Show more'}
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium whitespace-nowrap">React</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium whitespace-nowrap">Node.js</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium whitespace-nowrap">AI</span>
                    </div>
                    <Link to="/web"><button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105">
                        Explore Development
                    </button></Link>
                </div>
            </div>

            {/* SAP Services */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col">
                <div className="relative">
                    <img 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                        alt="SAP Services" 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        SAP Services
                    </h3>
                    <div className="flex-grow">
                        <p className={`text-gray-600 mb-4 leading-relaxed core-desc ${expandedServices['sap'] ? 'expanded' : 'collapsed'}`}>
                            Implementation, Migration, Consulting, Support & Training solutions
                        </p>
                        <button onClick={() => toggleService('sap')} className="text-sm font-medium text-purple-600 hover:underline mb-4">
                            {expandedServices['sap'] ? 'Show less' : 'Show more'}
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full font-medium whitespace-nowrap">S/4HANA</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full font-medium whitespace-nowrap">FICO</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full font-medium whitespace-nowrap">MM</span>
                    </div>
                    <Link to="/sap"><button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105">
                        Explore SAP Services
                    </button></Link>
                </div>
            </div>

            {/* Digital Marketing */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col">
                <div className="relative">
                    <img 
                        src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                        alt="Digital Marketing with AI" 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        Digital Marketing With AI
                    </h3>
                    <div className="flex-grow">
                        <p className={`text-gray-600 mb-4 leading-relaxed core-desc ${expandedServices['marketing'] ? 'expanded' : 'collapsed'}`}>
                            Smarter campaigns with AI-driven strategies & automation
                        </p>
                        <button onClick={() => toggleService('marketing')} className="text-sm font-medium text-green-600 hover:underline mb-4">
                            {expandedServices['marketing'] ? 'Show less' : 'Show more'}
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full font-medium whitespace-nowrap">SEO</span>
                        <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full font-medium whitespace-nowrap">PPC</span>
                        <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full font-medium whitespace-nowrap">AI Tools</span>
                    </div>
                    <Link to="/digital"><button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105">
                        Explore Marketing
                    </button></Link>
                </div>
            </div>

            {/* Recruitment */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col">
                <div className="relative">
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                        alt="Recruitment Services" 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        Recruitment
                    </h3>
                    <div className="flex-grow">
                        <p className={`text-gray-600 mb-4 leading-relaxed core-desc ${expandedServices['recruitment'] ? 'expanded' : 'collapsed'}`}>
                            Expert talent acquisition and staffing solutions for your business needs
                        </p>
                        <button onClick={() => toggleService('recruitment')} className="text-sm font-medium text-orange-600 hover:underline mb-4">
                            {expandedServices['recruitment'] ? 'Show less' : 'Show more'}
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full font-medium whitespace-nowrap">IT Hiring</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full font-medium whitespace-nowrap">Staffing</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full font-medium whitespace-nowrap">HR</span>
                    </div>
                    <Link to="/recruitment"><button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-xl hover:from-orange-700 hover:to-orange-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105">
                        Explore Recruitment
                    </button></Link>
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

     
    {/* Testimonials & Client Logos Section */}
    <section className="home-testimonials-section py-20 bg-blue-50">
        <div className="container mx-auto px-6">
            <div className="home-testimonials-header text-center mb-16">
                <h2 className="home-testimonials-title text-4xl font-bold text-blue-900 mb-4">
                    What Our Clients Say
                </h2>
                <p className="home-testimonials-subtitle text-xl text-gray-600">
                    Trusted by leading companies worldwide
                </p>
            </div>

              {/* Client Testimonials  */}
            <div className="home-testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="home-testimonial-card bg-white rounded-xl p-8 home-card-shadow home-hover-transform">
                    <div className="home-quote-icon text-blue-300 text-4xl mb-4">"</div>
                    <p className="home-testimonial-text text-gray-700 mb-6 italic">
                        "SoftPro9 transformed our entire digital infrastructure. Their expertise in AI implementation helped us achieve unprecedented growth."
                    </p>
                    <div className="home-testimonial-author">
                        <div className="home-author-name font-semibold text-blue-900">Sarah Johnson</div>
                        <div className="home-author-position text-gray-600">CEO, TechVision Inc</div>
                    </div>
                </div>

                <div className="home-testimonial-card bg-white rounded-xl p-8 home-card-shadow home-hover-transform">
                    <div className="home-quote-icon text-blue-300 text-4xl mb-4">"</div>
                    <p className="home-testimonial-text text-gray-700 mb-6 italic">
                        "Outstanding training programs! Our team's productivity increased significantly after the Full Stack Development course."
                    </p>
                    <div className="home-testimonial-author">
                        <div className="home-author-name font-semibold text-blue-900">Michael Chen</div>
                        <div className="home-author-position text-gray-600">CTO, InnovateLab</div>
                    </div>
                </div>

                <div className="home-testimonial-card bg-white rounded-xl p-8 home-card-shadow home-hover-transform">
                    <div className="home-quote-icon text-blue-300 text-4xl mb-4">"</div>
                    <p className="home-testimonial-text text-gray-700 mb-6 italic">
                        "Professional, reliable, and results-driven. SoftPro9 delivered beyond our expectations on every project."
                    </p>
                    <div className="home-testimonial-author">
                        <div className="home-author-name font-semibold text-blue-900">Emily Rodriguez</div>
                        <div className="home-author-position text-gray-600">Director, GlobalTech Solutions</div>
                    </div>
                </div>
            </div>

              {/* CHANGE 3: Client Logos - replaced text with actual logo designs */}
            <div className="home-clients-section">
                <h3 className="home-clients-title text-2xl font-semibold text-center text-blue-900 mb-8">
                    Trusted by Industry Leaders
                </h3>
                <div className="home-clients-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {/* TechCorp Logo */}
                    <div className="home-client-logo bg-white rounded-lg p-6 home-card-shadow flex items-center justify-center h-24 hover:shadow-xl transition-shadow">
                        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none">
                            <rect x="10" y="10" width="20" height="20" fill="#2563eb" rx="4"/>
                            <rect x="35" y="10" width="20" height="20" fill="#3b82f6" rx="4"/>
                            <text x="60" y="25" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1e40af">TechCorp</text>
                        </svg>
                    </div>
                    
                    {/* InnovateX Logo */}
                    <div className="home-client-logo bg-white rounded-lg p-6 home-card-shadow flex items-center justify-center h-24 hover:shadow-xl transition-shadow">
                        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none">
                            <circle cx="20" cy="20" r="8" fill="#7c3aed"/>
                            <path d="M28 20 L36 12 L36 28 Z" fill="#8b5cf6"/>
                            <text x="42" y="25" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#6d28d9">InnovateX</text>
                        </svg>
                    </div>
                    
                    {/* FutureTech Logo */}
                    <div className="home-client-logo bg-white rounded-lg p-6 home-card-shadow flex items-center justify-center h-24 hover:shadow-xl transition-shadow">
                        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none">
                            <polygon points="15,10 25,10 20,25" fill="#059669"/>
                            <polygon points="25,15 35,15 30,30" fill="#10b981"/>
                            <text x="40" y="25" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#047857">FutureTech</text>
                        </svg>
                    </div>
                    
                    {/* NextGen Logo */}
                    <div className="home-client-logo bg-white rounded-lg p-6 home-card-shadow flex items-center justify-center h-24 hover:shadow-xl transition-shadow">
                        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none">
                            <path d="M15 10 L25 20 L15 30 Z" fill="#dc2626"/>
                            <path d="M25 10 L35 20 L25 30 Z" fill="#ef4444"/>
                            <text x="40" y="25" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#b91c1c">NextGen</text>
                        </svg>
                    </div>
                    
                    {/* SmartSys Logo */}
                    <div className="home-client-logo bg-white rounded-lg p-6 home-card-shadow flex items-center justify-center h-24 hover:shadow-xl transition-shadow">
                        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none">
                            <rect x="12" y="12" width="16" height="16" fill="#4f46e5" rx="2"/>
                            <circle cx="35" cy="20" r="6" fill="#6366f1"/>
                            <text x="45" y="25" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#4338ca">SmartSys</text>
                        </svg>
                    </div>
                    
                    {/* ProTech Logo */}
                    <div className="home-client-logo bg-white rounded-lg p-6 home-card-shadow flex items-center justify-center h-24 hover:shadow-xl transition-shadow">
                        <svg className="w-full h-12" viewBox="0 0 120 40" fill="none">
                            <circle cx="20" cy="20" r="10" stroke="#ca8a04" strokeWidth="3" fill="none"/>
                            <circle cx="20" cy="20" r="4" fill="#eab308"/>
                            <text x="35" y="25" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#a16207">ProTech</text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* Blog/Insights Section  */}
    <section className="home-blog-section py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="home-blog-header text-center mb-16">
            <h2 className="home-blog-title text-4xl font-bold text-blue-900 mb-4">
                Latest Insights & Articles
            </h2>
            <p className="home-blog-subtitle text-xl text-gray-600">
                Stay updated with industry trends and expert perspectives
            </p>
            </div>

            <main className="">
            <div className="home-blog-grid grid md:grid-cols-3 gap-8">
                {filteredCards.map((card, idx) => {
                    const imageSrc = card.imgUrl
                        ? card.imgUrl
                        : card.imgFile
                        ? `${buildApiUrl('/uploads')}/${card.imgFile}`
                        : "";

                    const rawHtml = card.content || card.excerpt || "";
                    const plainText = stripHtml(rawHtml);
                    const excerptText =
                        plainText.length > 100 ? plainText.substring(0, 100) + "..." : plainText;

    return (
                    <Link key={idx} to={`/blogs/${card.slug}`} className="h-full block">
                        <article
                            className="home-blog-card bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
                        >
                            {imageSrc && (
                                <div className="home-blog-image bg-gradient-to-r from-blue-400 to-blue-600 h-48 flex items-center justify-center overflow-hidden relative">
                                    <img
                                        src={imageSrc}
                                        alt={card.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {card.tag && (
                                        <span
                                            className="absolute top-3 left-3 text-xs font-bold text-white px-2 py-1 rounded-full shadow-lg"
                                            style={{ backgroundColor: card.color || "#3b82f6" }}
                                        >
                                            {card.tag}
                                        </span>
                                    )}
                                </div>
                            )}

                            <div className="home-blog-content p-6 flex-1 flex flex-col">
                                <h3 className="home-blog-post-title text-xl font-semibold text-blue-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {card.title}
                                </h3>

                                <p className="home-blog-excerpt text-gray-600 mb-4 flex-1">
                                    {excerptText}
                                </p>

                                <div className="home-blog-author flex items-center mb-2 mt-auto">
                                    <div className="home-author-avatar bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                                        <span className="home-avatar-initial text-blue-600 font-semibold text-lg">
                                            {card.author?.[0]?.toUpperCase() || "A"}
                                        </span>
                                    </div>

                                    <div className="home-author-info ml-3">
                                        <div className="home-author-name text-sm font-medium text-gray-900">
                                            By {card.author || "Admin"}
                                        </div>
                                        {card.role && (
                                            <div className="home-author-role text-xs text-gray-600">
                                                {card.role}
                                            </div>
                                        )}
                                    </div>

                                    <div className="ml-auto text-xs text-gray-500">
                                        {card.createdAt?.slice(0, 10) || "Aug 27, 2025"}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Link>
                );
                 })}

            </div>

            {/* Load More */}
            <div className="home-blog-cta text-center mt-12">
                <Link to="/blogs">
                <button className="home-insights-btn bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300">
                    Read More Insight
                </button>
                </Link>
            </div>
            </main>
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
                    Let's Build the <span class="">Future</span> of Your Business Together
                </h2>
                <p class="home-cta-description text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                    Ready to transform your business with cutting-edge technology solutions? Our experts are here to help you achieve your digital transformation goals.
                </p>
                
                <div class="home-cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to='/contact'><button class="home-primary-cta bg-blue-500 hover:bg-blue-600 border-2 border-white text-white font-semibold px-8 py-3 rounded-full text-base transition-all duration-300 transform hover:scale-105 cta-pulse-animation shadow-lg">
                        Get in touch with us
                    </button></Link>
                          <button
                            onClick={() => {
                            setModalFormType('quote');
                            setShowModal(true);
                            }}
                            className='home-secondary-cta bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-8 py-3 rounded-full text-base transition-all duration-300 shadow-lg'
                         >
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

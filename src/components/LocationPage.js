import { MapPin, Phone, Mail, Clock, CheckCircle, Users, Award, TrendingUp, ArrowRight, GraduationCap, BookOpen, Target, Briefcase, Star, ChevronDown, Calendar, Trophy, Zap, Shield, DollarSign, Building2, Search, Play, X } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';
import ScrollArrowButton from './ScrollArrowButton';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Default image for locations without related courses
const DEFAULT_LOCATION_IMAGE = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80";

function isTitleRelated(locationTitle, courseTitle) {
  if (!locationTitle || !courseTitle) return false;
  const l = locationTitle.toLowerCase().trim();
  const c = courseTitle.toLowerCase().trim();
  
  // More flexible matching
  const locationWords = l.split(/\s+/);
  const courseWords = c.split(/\s+/);
  
  // Check if main keywords match
  const matches = locationWords.some(word => 
    word.length > 3 && courseWords.some(cWord => 
      cWord.includes(word) || word.includes(cWord)
    )
  );
  
  return matches || l.includes(c) || c.includes(l);
}

export default function LocationPage({ course }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [content, setContent] = useState(null);
  const [relatedLocations, setRelatedLocations] = useState([]);
  const [relatedCourse, setRelatedCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadLocationData();
  }, [slug]);

  const loadLocationData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/locations/${slug}`);
      const result = await response.json();
      
      if (result.success) {
        setData(result.data);
        
        if (result.data.content_data) {
          setContent(result.data.content_data);
        }
        
        // Fetch related course based on location title
        if (result.data.title) {
          await fetchRelatedCourse(result.data.title);
        }
        
        const relatedResponse = await fetch(`${API_URL}/api/locations/${slug}/related`);
        const relatedResult = await relatedResponse.json();
        
        if (relatedResult.success) {
          setRelatedLocations(relatedResult.data);
        }
      } else {
        setData(null);
      }
    } catch (error) {
      console.error('Error loading location:', error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedCourse = async (locationTitle) => {
    try {
      const coursesResponse = await fetch(`${API_URL}/api/courses`);
      const coursesResult = await coursesResponse.json();
      
      if (coursesResult && Array.isArray(coursesResult)) {
        const matchedCourse = coursesResult.find(c => 
          isTitleRelated(locationTitle, c.title)
        );
        
        if (matchedCourse) {
          setRelatedCourse(matchedCourse);
        }
      }
    } catch (error) {
      console.error('Error fetching related course:', error);
    }
  };

  const handleEnrollClick = () => {
    if (relatedCourse && relatedCourse.slug) {
      navigate(`/course/${relatedCourse.slug}`);
    } else {
      // If no related course, show contact modal
      setShowContactModal(true);
    }
  };


  const handleVideoClick = () => {
    if (relatedCourse && relatedCourse.video) {
      setShowVideoModal(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-indigo-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p className="text-gray-600 font-medium">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we don't have training at this location yet.</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const filteredFAQs = content?.faqs ? content.faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <>
              <ScrollArrowButton />

                    <Helmet>
        <title>{data.metaTitle || data.title}</title>
        <meta name="description" content={data.metaDescription || data.description} />
        {data.metaKeywords && <meta name="keywords" content={data.metaKeywords} />}
        
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={data.metaTitle || data.title} />
        <meta property="og:description" content={data.metaDescription || data.description} />
        <meta property="og:image" content={relatedCourse?.image || DEFAULT_LOCATION_IMAGE} />
        <meta property="og:image:secure_url" content={relatedCourse?.image || DEFAULT_LOCATION_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={data.title} />
        <meta property="og:site_name" content="SoftPro9 - Professional Training Institute" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:title" content={data.metaTitle || data.title} />
        <meta name="twitter:description" content={data.metaDescription || data.description} />
        <meta name="twitter:image" content={relatedCourse?.image || DEFAULT_LOCATION_IMAGE} />
        <meta name="twitter:image:alt" content={data.title} />
        
        {/* Additional SEO */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SoftPro9" />
      </Helmet>


      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .animate-on-scroll {
            opacity: 0;
          }
          .gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .glass-effect {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          .pulse-glow {
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
            50% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
          }
          .video-thumbnail {
            position: relative;
            cursor: pointer;
            border-radius: 12px;
            overflow: hidden;
            background: #000;
          }
          .video-thumbnail img {
            width: 100%;
            height: auto;
            display: block;
            opacity: 0.8;
            transition: opacity 0.3s;
          }
          .video-thumbnail:hover img {
            opacity: 1;
          }
          .play-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            background: rgba(99, 102, 241, 0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
          }
          .video-thumbnail:hover .play-overlay {
            background: rgba(99, 102, 241, 1);
            transform: translate(-50%, -50%) scale(1.1);
          }
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
          }
          .modal-content {
            background: white;
            border-radius: 16px;
            padding: 24px;
            max-width: 900px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
          }
          .modal-close {
            position: absolute;
            top: 16px;
            right: 16px;
            background: rgba(0, 0, 0, 0.1);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background 0.3s;
          }
          .modal-close:hover {
            background: rgba(0, 0, 0, 0.2);
          }
          .video-wrapper {
            width: 100%;
            aspect-ratio: 16/9;
            background: #000;
            border-radius: 8px;
            overflow: hidden;
          }
          .video-wrapper video {
            width: 100%;
            height: 100%;
          }
        `}</style>

        {/* Floating CTA Bar */}
        {scrolled && (
          <div className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-lg py-3 px-4 transform transition-transform duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{data.title}</p>
                  <p className="text-xs text-gray-600">{data.location}</p>
                </div>
              </div>
              <button 
                onClick={handleEnrollClick}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all pulse-glow"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}

        {/* Hero Section with Video/Image */}
        <div ref={heroRef} className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4 animate-on-scroll">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium">{data.location}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-extrabold mb-5 animate-on-scroll leading-tight">
                  {content?.hero?.headline || data.title}
                </h1>
                <h2 className="text-xl text-indigo-100 mb-5 animate-on-scroll font-light leading-relaxed">
                  {content?.hero?.subheadline || data.description}
                </h2>
                {content?.hero?.tagline && (
                  <p className="text-base text-indigo-200 mb-6 animate-on-scroll leading-relaxed">
                    {content.hero.tagline}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-3 mb-6 animate-on-scroll">
                  {content?.hero?.uspHighlights && content.hero.uspHighlights.length > 0 ? (
                    content.hero.uspHighlights.slice(0, 3).map((usp, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full hover:bg-white/30 transition-all text-sm">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-medium">{usp}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full hover:bg-white/30 transition-all text-sm">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-medium">15,000+ Alumni</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full hover:bg-white/30 transition-all text-sm">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-medium">100% Placement</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full hover:bg-white/30 transition-all text-sm">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-medium">Live Projects</span>
                      </div>
                    </>
                  )}
                </div>

                {content?.hero?.stats && (
                  <p className="text-sm text-indigo-200 mb-8 animate-on-scroll flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    {content.hero.stats}
                  </p>
                )}

                <div className="flex flex-wrap gap-4 animate-on-scroll">
                  <button 
                    onClick={handleEnrollClick}
                    className="group px-7 py-3.5 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300 shadow-2xl flex items-center gap-2 text-base hover-lift"
                  >
                    <BookOpen className="h-5 w-5" />
                    {relatedCourse ? 'Start Learning Today' : 'Get Course Details'}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                </div>
              </div>

              {/* Video/Image Section */}
              <div className="animate-on-scroll">
                {relatedCourse && relatedCourse.video ? (
                  <div 
                    className="video-thumbnail relative"
                    onClick={handleVideoClick}
                    style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
                  >
                    <img 
                      src={relatedCourse.image || DEFAULT_LOCATION_IMAGE} 
                      alt={data.title}
                      className="w-full h-auto object-cover"
                      style={{ minHeight: '350px', maxHeight: '400px' }}
                    />
                    <div className="play-overlay">
                      <Play className="h-12 w-12 text-white ml-1" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-semibold text-center">
                        Click to watch course preview
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl overflow-hidden shadow-2xl relative" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
                    <img 
                      src={DEFAULT_LOCATION_IMAGE}
                      alt={data.title}
                      className="w-full h-auto object-cover"
                      style={{ minHeight: '350px', maxHeight: '400px' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-semibold text-center">
                        Professional training environment
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Course Info Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll">
            {[
              { icon: Clock, title: "Duration", value: data.duration, gradient: "from-indigo-500 to-purple-500" },
              { icon: Users, title: "Training Mode", value: data.mode, gradient: "from-purple-500 to-pink-500" },
              { icon: DollarSign, title: "Investment", value: data.fees, gradient: "from-pink-500 to-red-500" }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl shadow-2xl p-8 hover-lift cursor-pointer overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-2xl font-extrabold gradient-text">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Introduction */}
              {content?.introduction?.content && (
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll hover-lift">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-12 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
                    <h2 className="text-4xl font-extrabold gradient-text">
                      {content.introduction.title || 'Introduction'}
                    </h2>
                  </div>
                  <div 
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: content.introduction.content }}
                  />
                </div>
              )}

              {/* Course Highlights */}
              {data.highlights && data.highlights.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    What You'll Master
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.highlights.map((highlight, index) => (
                      <div 
                        key={index} 
                        className="group relative overflow-hidden p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300 hover-lift border border-indigo-100"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 ">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                          <p className="text-gray-800 font-semibold leading-relaxed">{highlight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose */}
              <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white animate-on-scroll">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
                    <Target className="h-8 w-8" />
                    {content?.whyChoose?.title || `Why Choose SoftPro9 in ${data.location}?`}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content?.whyChoose?.points && content.whyChoose.points.length > 0 ? (
                      content.whyChoose.points.map((point, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all hover-lift">
                          <div className="text-5xl mb-4">{point.icon}</div>
                          <p className="font-bold text-xl mb-2">{point.title}</p>
                          <p className="text-indigo-100">{point.description}</p>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all hover-lift">
                          <div className="text-5xl mb-4">🎓</div>
                          <p className="font-bold text-xl mb-2">Expert Trainers</p>
                          <p className="text-indigo-100">10+ years industry experience</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all hover-lift">
                          <div className="text-5xl mb-4">💼</div>
                          <p className="font-bold text-xl mb-2">Job Guarantee</p>
                          <p className="text-indigo-100">100% placement assistance</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all hover-lift">
                          <div className="text-5xl mb-4">🏆</div>
                          <p className="font-bold text-xl mb-2">Certified Program</p>
                          <p className="text-indigo-100">Industry recognized training</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all hover-lift">
                          <div className="text-5xl mb-4">🚀</div>
                          <p className="font-bold text-xl mb-2">Career Support</p>
                          <p className="text-indigo-100">Resume building & interview prep</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Modules */}
              {content?.modules && content.modules.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll">
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-indigo-600" />
                    Complete Course Curriculum
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {content.modules && Array.isArray(content.modules) ? content.modules.map((module, idx) => (
                      module && (
                      <button
                        key={idx}
                        onClick={() => setActiveModule(idx)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                          activeModule === idx
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {module?.category || 'Module'}
                      </button>
                      )
                    )) : null}
                  </div>

                  <div className="space-y-6">
                    {content.modules && content.modules[activeModule] && Array.isArray(content.modules[activeModule].items) ? content.modules[activeModule].items.map((item, itemIdx) => (
                      item && (
                      <div key={itemIdx} className="group bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all hover-lift border-l-4 border-indigo-600">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                            {itemIdx + 1}
                          </span>
                          {item?.title || 'Item'}
                        </h4>
                        <p className="text-gray-700 mb-4">{item?.description || ''}</p>
                        {item?.topics && Array.isArray(item.topics) && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.topics.map((topic, topicIdx) => (
                              <span key={topicIdx} className="px-4 py-2 bg-white text-indigo-700 text-sm rounded-full font-medium shadow-sm">
                                {topic}
                              </span>
                            ))}
                          </div>
                        )}
                        {item?.project && (
                          <div className="bg-purple-100 border-l-4 border-purple-600 p-4 rounded-r-lg">
                            <p className="text-purple-800 font-semibold flex items-center gap-2">
                              <Trophy className="h-5 w-5" />
                              Project: {item.project}
                            </p>
                          </div>
                        )}
                      </div>
                      )
                    )) : null}
                  </div>
                </div>
              )}

              {/* Training Modes */}
              {content?.trainingModes && content.trainingModes.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll">
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Flexible Learning Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.trainingModes.map((mode, idx) => (
                      mode && (
                      <div key={idx} className="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-xl transition-all hover-lift border-2 border-transparent hover:border-indigo-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Zap className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-lg mb-2">{mode?.mode || 'Training Mode'}</p>
                            <p className="text-gray-600">{mode?.description || ''}</p>
                          </div>
                        </div>
                      </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {content?.certifications && (
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll">
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
                    <Award className="h-8 w-8 text-indigo-600" />
                    Get Certified & Recognized
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-bold text-gray-900 mb-4 text-lg">Certifications You'll Earn:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {content.certifications.types && content.certifications.types.map((cert, idx) => (
                          <div key={idx} className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-300 hover:shadow-lg transition-all hover-lift">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                                <Award className="h-6 w-6 text-white" />
                              </div>
                              <p className="font-bold text-gray-900">{cert}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {content.certifications.examFormat && (
                      <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
                        <p className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-blue-600" />
                          Exam Format Details:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-1">Mode</p>
                            <p className="font-bold text-gray-900">{content.certifications.examFormat.mode}</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-1">Duration</p>
                            <p className="font-bold text-gray-900">{content.certifications.examFormat.duration}</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-1">Assessment</p>
                            <p className="font-bold text-gray-900">{content.certifications.examFormat.assessment}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Career Roadmap */}
              {content?.careerRoadmap && content.careerRoadmap.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll">
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Your Career Journey</h3>
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-purple-600"></div>
                    <div className="space-y-8">
                      {content.careerRoadmap.map((roadmap, idx) => (
                        roadmap && (
                        <div key={idx} className="relative pl-16 group">
                          <div className="absolute left-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                            {idx + 1}
                          </div>
                          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all hover-lift">
                            <p className="text-sm font-semibold text-indigo-600 mb-1">{roadmap?.level || 'Level'}</p>
                            <p className="text-2xl font-bold text-gray-900 mb-2">{roadmap?.role || 'Role'}</p>
                            <p className="text-gray-600">{roadmap?.skills || ''}</p>
                          </div>
                        </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Why Now */}
              {content?.whyNow && (
                <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white animate-on-scroll">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Zap className="h-8 w-8" />
                      <h3 className="text-3xl font-extrabold">{content.whyNow.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {content.whyNow.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-black/40 transition-colors">
                          <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                          <p className="font-semibold text-white">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Alumni Success */}
              {content?.alumniSuccess && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border-l-4 border-green-600 animate-on-scroll">
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                    <Trophy className="h-8 w-8 text-green-600" />
                    Success Stories
                  </h3>
                  <p className="text-gray-700 mb-8 text-lg">{content.alumniSuccess.description}</p>
                  {content.alumniSuccess.testimonials && content.alumniSuccess.testimonials.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {content.alumniSuccess.testimonials.map((testimonial, idx) => (
                        testimonial && (
                        <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover-lift">
                          <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial?.text || ''}"</p>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {testimonial?.author?.charAt(0) || 'A'}
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">{testimonial?.author || 'Alumni'}</p>
                              <p className="text-sm text-gray-600">{testimonial?.role || ''}</p>
                            </div>
                          </div>
                        </div>
                        )
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* FAQs */}
              {content?.faqs && content.faqs.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll">
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Your Questions Answered</h3>
                  
                  <div className="mb-6 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-4">
                    {filteredFAQs.map((faq, idx) => (
                      <div key={idx} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-colors">
                        <button
                          onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-indigo-50 hover:from-indigo-50 hover:to-purple-50 transition-all text-left"
                        >
                          <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                          <ChevronDown className={`h-5 w-5 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${openFAQ === idx ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFAQ === idx ? 'max-h-96' : 'max-h-0'}`}>
                          <p className="p-5 text-gray-600 leading-relaxed bg-white">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparison Table */}
              {content?.comparisonTable && (
                <div className="bg-white rounded-2xl shadow-xl p-8 overflow-hidden animate-on-scroll">
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-6">{content.comparisonTable.title}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                          {content.comparisonTable.columns && content.comparisonTable.columns.map((col, idx) => (
                            <th key={idx} className="px-6 py-4 text-left font-bold text-lg first:rounded-tl-xl last:rounded-tr-xl">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {content.comparisonTable.rows && Array.isArray(content.comparisonTable.rows) && content.comparisonTable.rows.map((row, rowIdx) => (
                          row && (
                          <tr key={rowIdx} className={`${rowIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-indigo-50 transition-colors`}>
                            {row.values && Array.isArray(row.values) && row.values.map((value, colIdx) => (
                              <td key={colIdx} className="px-6 py-4 border-b border-gray-200 font-medium text-gray-700">
                                {value || ''}
                              </td>
                            ))}
                          </tr>
                          )
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Career Opportunities */}
              {/* Career Opportunities - UPDATED WITH LOGOS */}
{content?.careerOpportunities && (
  <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll">
    <h3 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
      <Briefcase className="h-8 w-8 text-indigo-600" />
      Career Growth & Opportunities
    </h3>
    
    <div className="space-y-8">
      {content.careerOpportunities.jobRoles && (
        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-2">
            <Target className="h-6 w-6 text-indigo-600" />
            High-Demand Job Roles:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {content.careerOpportunities.jobRoles && Array.isArray(content.careerOpportunities.jobRoles) && content.careerOpportunities.jobRoles.map((role, index) => (
              role && (
              <div key={index} className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 hover:shadow-lg transition-all hover-lift text-center border-2 border-transparent hover:border-indigo-300">
                <p className="font-bold text-gray-900">{role || 'Role'}</p>
              </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* 🆕 UPDATED: Top Hiring Companies with Logos */}
        {(data.company_logos && data.company_logos.length > 0) || content.careerOpportunities.topCompanies ? (
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-2">
              <Building2 className="h-6 w-6 text-indigo-600" />
              Top Hiring Companies:
            </h4>
            
            {/* Show uploaded company logos if available */}
            {data.company_logos && data.company_logos.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {data.company_logos.map((company, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover-lift border-2 border-gray-100 hover:border-indigo-300"
                    title={company.name}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      {company.logo ? (
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className="w-20 h-20 object-contain rounded-lg"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : null}
                      {(!company.logo || company.logo === '') && (
                        <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Building2 className="h-10 w-10 text-indigo-600" />
                        </div>
                      )}
                      <p className="font-bold text-gray-900 text-sm leading-tight">
                        {company.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Fallback: Show text-based companies if no logos uploaded */
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {content.careerOpportunities.topCompanies.split(',').map((company, idx) => {
                  const trimmedCompany = company.trim();
                  return (
                    <div key={idx} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover-lift border-2 border-gray-100 hover:border-indigo-300">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Building2 className="h-8 w-8 text-indigo-600" />
                        </div>
                        <p className="font-bold text-gray-900 text-sm leading-tight">
                          {trimmedCompany}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : null}

      {content.careerOpportunities.salaryRanges && (
        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-indigo-600" />
            Salary Expectations:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { level: 'Freshers', salary: content.careerOpportunities.salaryRanges.freshers, icon: '🌱', colors: 'from-green-500 to-emerald-600 border-green-200' },
              { level: 'Mid-Level', salary: content.careerOpportunities.salaryRanges.midLevel, icon: '🚀', colors: 'from-blue-500 to-cyan-600 border-blue-200' },
              { level: 'Senior Level', salary: content.careerOpportunities.salaryRanges.senior, icon: '👑', colors: 'from-purple-500 to-pink-600 border-purple-200' }
            ].map((item, idx) => (
              <div key={idx} className={`relative overflow-hidden bg-gradient-to-br ${item.colors} bg-opacity-10 rounded-xl p-6 hover:shadow-xl transition-all hover-lift border-2`}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-sm font-semibold text-gray-600 mb-2">{item.level}</p>
                <p className="text-3xl font-extrabold text-gray-900">{item.salary}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
)}


              {/* Enrollment Steps */}
              {content?.enrollmentSteps && content.enrollmentSteps.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll">
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Start Your Journey in Easy Steps</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {content.enrollmentSteps.map((step, idx) => (
                      step && (
                      <div key={idx} className="relative group">
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all hover-lift text-center h-full flex flex-col items-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-3 group-hover:scale-110 transition-transform">
                            {idx + 1}
                          </div>
                          {idx < content.enrollmentSteps.length - 1 && (
                            <ArrowRight className="h-6 w-6 text-indigo-600 mb-3 hidden md:block" />
                          )}
                          <p className="text-gray-800 font-semibold">{step || 'Step'}</p>
                        </div>
                      </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Mid Page CTA */}
              {content?.midPageCta && (
                <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-10 text-center text-white animate-on-scroll">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                  </div>
                  <div className="relative z-10">
                    <div className="inline-block bg-yellow-400 text-indigo-900 px-4 py-2 rounded-full font-bold text-sm mb-4 pulse-glow">
                      LIMITED TIME OFFER ⚡
                    </div>
                    <h3 className="text-4xl font-extrabold mb-6">{content.midPageCta.headline}</h3>
                    {content.midPageCta.points && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
                        {content.midPageCta.points.map((point, idx) => (
                          <div key={idx} className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md rounded-xl p-4">
                            <CheckCircle className="h-6 w-6 flex-shrink-0" />
                            <p className="font-semibold text-lg">{point}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-wrap justify-center gap-4">
                      <button 
                        onClick={handleEnrollClick}
                        className="px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-2xl hover-lift"
                      >
                        Enroll Now & Save
                      </button>
                      
                    </div>
                  </div>
                </div>
              )}

              {/* Conclusion */}
              {content?.conclusion && (
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll">
                  <h3 className="text-3xl font-extrabold gradient-text mb-6">{content.conclusion.title}</h3>
                  <div 
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: content.conclusion.content }}
                  />
                </div>
              )}

              {/* Final CTA */}
              <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-10 text-center text-white animate-on-scroll">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-extrabold mb-4">🎯 Ready to Transform Your Career?</h3>
                  <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                    Join 15,000+ professionals who transformed their careers with SoftPro9. Get certified and land your dream job in {data.location.split(',')[0]}'s top companies.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={handleEnrollClick}
                      className="group px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover-lift"
                    >
                      Enroll with SoftPro9
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Related Training Locations */}
              {relatedLocations.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-4 animate-on-scroll">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-indigo-600" />
                    Related Programs
                  </h3>
                  <div className="space-y-3">
                    {relatedLocations.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/location/${loc.slug}`}
                        className="block group"
                      >
                        <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:shadow-lg transition-all hover-lift border-2 border-transparent hover:border-indigo-300">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
                                {loc.course}
                              </p>
                              <p className="text-xs text-gray-600 flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {loc.location}
                              </p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-96 animate-on-scroll">
                <h3 className="text-xl font-bold text-gray-900 mb-6">📞 Get in Touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: 'Location', value: data.location, color: 'indigo' },
                    { icon: Phone, label: 'Phone', value: '+91 98765-43210', href: 'tel:+919876543210', color: 'purple' },
                    { icon: Mail, label: 'Email', value: 'info@softpro9.com', href: 'mailto:info@softpro9.com', color: 'pink' },
                    { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM-7PM', color: 'blue' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className={`w-10 h-10 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className={`text-${item.color}-600 hover:text-${item.color}-700 text-sm font-medium`}>
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && relatedCourse && relatedCourse.video && (
        <div className="modal-overlay" onClick={() => setShowVideoModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowVideoModal(false)}>
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Preview</h2>
            <div className="video-wrapper">
              <video controls autoPlay src={relatedCourse.video} />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 mb-4">Like what you see? Enroll now to access the full course!</p>
              <button 
                onClick={() => {
                  setShowVideoModal(false);
                  handleEnrollClick();
                }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContactModal(false)}>
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Course Information</h2>
            <p className="text-gray-600 mb-6">
              We're excited about your interest! Our team will contact you shortly with detailed course information.
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Our team will contact you shortly.');
              setShowContactModal(false);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="+91 98765-43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    rows="3"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Submit Request
                </button>
                
              </div>
            </form>
          </div>
        </div>
      )}
      
      <Footer showSAPLocations={data?.isSAP || false} />
    </>
  );
}
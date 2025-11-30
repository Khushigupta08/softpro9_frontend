import './style.css';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import ScrollArrowButton from './ScrollArrowButton';

export default function Academy() {
      const [trainings, setTrainings] = useState([]);
      const [currentSlide, setCurrentSlide] = useState(0);
      const [expandedCards, setExpandedCards] = useState({});
      const sliderRef = useRef(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [userFormData, setUserFormData] = useState({ name: "", email: "", phone: "", message: "", expertDateTime:""});
      const [postAction, setPostAction] = useState(null);
      const [date, setDate] = useState('');
      const [time, setTime] = useState('');
      const [period, setPeriod] = useState('AM');
      const [formattedDateTime, setFormattedDateTime] = useState('');


      // Mobile scroll helpers: scroll by one card width
      const scrollNextMobile = () => {
        const el = sliderRef.current;
        if (!el) return;
        const card = el.querySelector('.flex-shrink-0');
        const cardWidth = (card && card.clientWidth) ? card.clientWidth : el.clientWidth;
        const gap = 16; // match CSS gap on mobile
        el.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
      };

      const scrollPrevMobile = () => {
        const el = sliderRef.current;
        if (!el) return;
        const card = el.querySelector('.flex-shrink-0');
        const cardWidth = (card && card.clientWidth) ? card.clientWidth : el.clientWidth;
        const gap = 16;
        el.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
      };

const nextSlide = () => {
  setCurrentSlide((prev) => {
    const maxSlide = trainings.length - 3; 
    return prev < maxSlide ? prev + 1 : prev; 
  });
};

const prevSlide = () => {
  setCurrentSlide((prev) => {
    return prev > 0 ? prev - 1 : prev; // Ek card peeche jao
  });
};

const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const openModalForExpert = () => {
    setPostAction("expert");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // prevent background scrolling when modal is open
  useEffect(() => {
    try {
      if (isModalOpen) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    } catch (e) {}
    return () => { try { document.body.classList.remove('modal-open'); } catch (e) {} };
  }, [isModalOpen]);

  const handleInputChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (postAction === "expert") {
        // For expert requests - separate endpoint
        await axios.post('http://localhost:5000/api/expert-requests', {
        name: userFormData.name,
        email: userFormData.email,
        phone: userFormData.phone,
        message: userFormData.message,
        expertDateTime: userFormData.expertDateTime,
      });


        alert("Thank you! Our expert will contact you soon.");
      }
      
      setIsModalOpen(false);
      setUserFormData({ name: "", email: "", phone: "", message: "", expertDateTime:""});
    } catch {
      alert("Failed to submit, try again.");
    }
  };

  // Create Google Calendar link for expert consultation
  const createExpertCalendarLink = () => {
    try {
      const { expertDate, expertTime, name = "", email = "", message = "" } = userFormData || {};
      if (!expertDate || !expertTime) return null;
      
      const startLocal = new Date(`${expertDate}T${expertTime}:00`);
      if (isNaN(startLocal.getTime())) return null;
      const endLocal = new Date(startLocal.getTime() + 60 * 60 * 1000); // 1 hour duration

      const toCalendarFormat = (d) => d.toISOString().replace(/-|:|\.\d{3}/g, '');

      const startStr = toCalendarFormat(startLocal);
      const endStr = toCalendarFormat(endLocal);

      const title = `Expert Consultation — SoftPro9 Academy`;
      const details = `Expert Consultation Session\nName: ${name}\nEmail: ${email}\nNotes: ${message}`;

      const base = 'https://www.google.com/calendar/render';
      const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: title,
        dates: `${startStr}/${endStr}`,
        details: details,
        location: '',
      });
      return `${base}?${params.toString()}`;
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/trainings") // ✅ backend API
      .then((res) => res.json())
      .then((data) => setTrainings(data))
      .catch((err) => console.error("Error fetching trainings:", err));
  }, []);

  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/batches")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch batches");
        }
        return res.json();
      })
      .then((data) => {
        setBatches(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading batches...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  const convertTo24Hour = (time12h, period) => {
    if (!time12h) return '';
    
    let [hours, minutes] = time12h.split(':');
    hours = parseInt(hours);
    
    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }
    
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  };

  // Generate time options for dropdown (12-hour format)
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 1; hour <= 12; hour++) {
      for (let min of ['00', '15', '30', '45']) {
        times.push(`${hour}:${min}`);
      }
    }
    return times;
  };

  // Generate date options (next 30 days)
  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      const dateStr = date.toLocaleDateString('en-IN', { 
        day: '2-digit', 
        month: 'short',
        year: 'numeric'
      });
      const value = date.toISOString().split('T')[0]; // YYYY-MM-DD format
      
      dates.push({ label: `${dayName}, ${dateStr}`, value });
    }
    return dates;
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    updateFormattedDateTime(e.target.value, time, period);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    updateFormattedDateTime(date, e.target.value, period);
  };

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
    updateFormattedDateTime(date, time, newPeriod);
  };

  const updateFormattedDateTime = (selectedDate, selectedTime, selectedPeriod) => {
    if (selectedDate && selectedTime) {
      const time24 = convertTo24Hour(selectedTime, selectedPeriod);
      // Format: YYYY-MM-DDTHH:MM (ISO format without seconds - compatible with Python datetime)
      const formatted = `${selectedDate}T${time24}`;
      setFormattedDateTime(formatted);
    }
  };

  const dateOptions = generateDateOptions();
  const timeOptions = generateTimeOptions();

return (
    <>
              <ScrollArrowButton />

    <Helmet>
            <title>Academy - Softpro9</title>
            <meta name="description" content="Explore our academy programs" />
    </Helmet>
   {/* Hero Section  */}
      <section className="academy-gradient relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="academy-highlight-hero bg-clip-text text-white">SoftPro9</span>{' '}
                <span className="block mt-2">Academy</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-blue-100">
                Empowering Careers with Future-Ready Skills through Industry-focused Training
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center  items-center">
                <Link to="/courselist">
                  <button className="academy-btn bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">Explore Courses</button>
                </Link>
                <button className="academy-btn border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300" onClick={(e) => { e.preventDefault(); openModalForExpert(); }}>Talk to an expert</button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Students learning technology"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />

                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">100% Placement</div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-8 left-8 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Talk to Expert */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto" onClick={closeModal}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors" onClick={closeModal}>
              ×
            </button>
            
            <div className="grid md:grid-cols-5 gap-0 overflow-hidden rounded-2xl">
              {/* Left side - Image */}
              <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="text-white mb-6">
                    <div className="text-4xl mb-4">🎓</div>
                    <h3 className="text-2xl font-bold mb-3">Talk to Our Expert</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Get personalized guidance for your career goals
                    </p>
                  </div>
                  <div className="space-y-4 text-white text-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-xl">✓</div>
                      <div>Free Career Counseling</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-xl">✓</div>
                      <div>Course Recommendations</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-xl">✓</div>
                      <div>Industry Insights</div>
                    </div>
                  </div>
                </div>
              </div>

             {/* Right side - Form */}
            <div className="md:col-span-3 p-8 max-h-[80vh] overflow-y-auto rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Schedule Consultation
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Fill in your details and pick your preferred time
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Your Full Name"
                    value={userFormData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Email Address"
                    value={userFormData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Phone Number"
                    value={userFormData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Preferred Date & Time
                  </label>
                  
                  {/* Date Dropdown */}
                  <select
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      updateFormattedDateTime(e.target.value, time, period);
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  >
                    <option value="">Choose a date...</option>
                    {generateDateOptions().map(opt => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  
                  {/* Time Dropdown */}
                  <div className="flex gap-3 mt-2">
                    <select
                      value={time}
                      onChange={(e) => {
                        setTime(e.target.value);
                        updateFormattedDateTime(date, e.target.value, period);
                      }}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer"
                      required
                    >
                      <option value="">Choose time...</option>
                      {generateTimeOptions().map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    
                    {/* AM/PM Toggle */}
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        type="button"
                        onClick={() => {
                          setPeriod('AM');
                          updateFormattedDateTime(date, time, 'AM');
                        }}
                        className={`px-6 py-2 rounded-md font-semibold transition-all ${
                          period === 'AM' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-800'
                        }`}
                      >
                        AM
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setPeriod('PM');
                          updateFormattedDateTime(date, time, 'PM');
                        }}
                        className={`px-6 py-2 rounded-md font-semibold transition-all ${
                          period === 'PM' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-800'
                        }`}
                      >
                        PM
                      </button>
                    </div>
                  </div>

                  {/* Hidden input or state to submit formattedDateTime */}
                  <input
                    type="hidden"
                    name="expertDateTime"
                    value={formattedDateTime}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Any specific questions or requirements? (Optional)"
                    value={userFormData.message}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
                    onClick={() => {
                      const link = createExpertCalendarLink();
                      if (!link) {
                        alert('Please select preferred date and time before adding to Google Calendar.');
                        return;
                      }
                      try {
                        window.open(link, '_blank', 'noopener,noreferrer');
                      } catch (e) {
                        window.open(link, '_blank');
                      }
                    }}
                  >
                    📅 Add to Calendar
                  </button>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>

            </div>
          </div>
        </div>
      )}


     {/* Stats Section  */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="academy-stats text-center p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                    <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="academy-stats text-center p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-gray-600">Placement Rate</div>
                </div>
                <div className="academy-stats text-center p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Corporate Partners</div>
                </div>
                <div className="academy-stats text-center p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-gray-600">Learning Support</div>
                </div>
            </div>
        </div>
    </section>


    {/* Why Choose Us Section  */}
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose <span className="academy-highlight">SoftPro9</span> Academy?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">We are committed to creating career-ready professionals with skills that matter in the digital age</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">🏆</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Industry-recognized Training</h3>
                    <p className="text-gray-600">Designed by experts with years of IT consulting, implementation, and digital strategy experience.</p>
                </div>
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">🤖</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">AI-Powered Learning</h3>
                    <p className="text-gray-600">Courses integrated with the latest AI tools, automation platforms, and real-world case studies.</p>
                </div>
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">💼</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Hands-On Projects</h3>
                    <p className="text-gray-600">Work on real-time client case studies and live projects, not just classNameroom examples.</p>
                </div>
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">🎯</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Placement & Career Support</h3>
                    <p className="text-gray-600">Dedicated career guidance, mock interviews, and corporate hiring connections.</p>
                </div>
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">🌍</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Relevance</h3>
                    <p className="text-gray-600">Programs aligned with international standards, making you career-ready worldwide.</p>
                </div>
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">⏰</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Flexible Learning</h3>
                    <p className="text-gray-600">Instructor-led, self-paced, and blended learning models to suit your schedule.</p>
                </div>
            </div>
        </div>
    </section>

      {/* Core Training Programs  */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Core Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized training in high-demand areas of technology and business
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Slider Wrapper */}
          <div className="overflow-hidden academy-slider" ref={sliderRef}>
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6 academy-track"
              style={{
                transform: `translateX(-${currentSlide * 384}px)`, // 360px + 24px gap
              }}
            >
              {trainings.map(training => (
                <div
                  key={training.id}
                  className="flex-shrink-0"
                  style={{ width: '360px' }}
                >
                  {/* Card with Fixed Height */}
                  <div 
                    className="flex flex-col transition-transform duration-300 hover:-translate-y-2 border-t-4 border-transparent hover:shadow-xl rounded-lg overflow-hidden bg-white shadow-md"
                    style={{ 
                      height: '600px',
                      borderTopColor: training.color 
                    }}
                  >
                    {/* Header - Fixed Height */}
                    <div 
                      className="p-6 flex-shrink-0"
                      style={{ backgroundColor: training.color, minHeight: '140px' }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">{training.title}</h3>
                      <p className="text-white">{training.subtitle}</p>
                    </div>

                    {/* Content Area - Scrollable */}
                    <div className="flex-1 overflow-hidden flex flex-col">
                      <div className="p-6 flex-1 overflow-y-auto">
                        {/* Modules Section */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-3">Modules:</h4>
                          {(() => {
                            const modulesArray = Array.isArray(training.modules) 
                              ? training.modules 
                              : training.modules.split(',');
                            const showExpandButton = modulesArray.length > 4;
                            
                            return (
                              <>
                                <div className={`relative ${!expandedCards[training.id] && showExpandButton ? 'max-h-32 overflow-hidden' : ''}`}>
                                  <ul className="space-y-2 text-sm text-gray-600">
                                    {modulesArray.map((mod, i) => (
                                      <li key={i} className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>{mod.trim()}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  {!expandedCards[training.id] && showExpandButton && (
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                                  )}
                                </div>
                                {showExpandButton && (
                                  <button
                                    onClick={() => toggleExpand(training.id)}
                                    className="text-sm mt-2 font-medium hover:underline"
                                    style={{ color: training.color }}
                                  >
                                    {expandedCards[training.id] ? '- Show Less' : '+ Show More'}
                                  </button>
                                )}
                              </>
                            );
                          })()}
                        </div>

                        {/* Career Path */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Career Path:</h4>
                          <p className="text-sm text-gray-600">{training.careerPath}</p>
                        </div>
                      </div>

                      {/* Button - Fixed at Bottom */}
                      <div className="p-6 pt-0 flex-shrink-0">
                        <button 
                          className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: training.color }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {trainings.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="academy-nav-btn absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
              >
                <ChevronLeft size={24} className="text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide >= trainings.length - 3}
                className="academy-nav-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
              >
                <ChevronRight size={24} className="text-gray-800" />
              </button>

              {/* Mobile arrows */}
              <button
                onClick={scrollPrevMobile}
                aria-label="Previous"
                className="academy-mobile-arrow absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 shadow-md rounded-full p-2 z-20 md:hidden"
              >
                <ChevronLeft size={20} className="text-gray-800" />
              </button>
              <button
                onClick={scrollNextMobile}
                aria-label="Next"
                className="academy-mobile-arrow absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 shadow-md rounded-full p-2 z-20 md:hidden"
              >
                <ChevronRight size={20} className="text-gray-800" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {trainings.length > 3 && (
            <div className="academy-dots flex justify-center gap-2 mt-8">
               {Array.from({ length: Math.max(0, trainings.length - 2) }).map((_, index) => (                
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? 'w-8 bg-blue-600'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
</section>



     {/* Learning Approach  */}
    <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Learning Approach</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">What makes us different - where theory meets practice</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">1</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Interactive Learning</h3>
                    <p className="text-sm text-gray-600">Engaging sessions with corporate consulting experience</p>
                </div>
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">2</div>
                    <h3 className="font-semibold text-gray-800 mb-2">AI-Integrated</h3>
                    <p className="text-sm text-gray-600">Every program blends modern AI-powered tools</p>
                </div>
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">3</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Real Projects</h3>
                    <p className="text-sm text-gray-600">Work on case studies & live projects from companies</p>
                </div>
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">4</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Mentorship</h3>
                    <p className="text-sm text-gray-600">Direct interaction with industry experts</p>
                </div>
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">5</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Career Support</h3>
                    <p className="text-sm text-gray-600">100% placement assistance and guidance</p>
                </div>
            </div>
        </div>
    </section>

    {/* Success Stories  */}
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
                    <p className="text-xl text-gray-600">Hear from our learners who transformed their careers</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* SAP Success Story */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 group-hover:scale-110 transition-transform duration-300">
                                <img 
                                    src="https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
                                    alt="Ananya S. - SAP Consultant" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800 text-lg">Ananya S.</div>
                                <div className="text-sm text-blue-600 font-medium">SAP MM Consultant</div>
                                <div className="flex text-yellow-400 text-sm mt-1">
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="text-6xl text-blue-100 absolute -top-2 -left-2">"</div>
                            <p className="text-gray-600 italic leading-relaxed relative z-10">
                                <span className="font-semibold text-blue-600">SoftPro9</span> Academy helped me switch my career to SAP MM Consultant. Within 4 months of training, I got my first corporate offer with 80% salary hike!
                            </p>
                        </div>
                        <div className="mt-6 flex items-center text-sm text-gray-500">
                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-medium">Career Switch Success</span>
                        </div>
                    </div>

                    {/* Digital Marketing Success Story */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 group-hover:scale-110 transition-transform duration-300">
                                <img 
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
                                    alt="Ravi K. - Business Owner" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800 text-lg">Ravi K.</div>
                                <div className="text-sm text-purple-600 font-medium">Business Owner</div>
                                <div className="flex text-yellow-400 text-sm mt-1">
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="text-6xl text-purple-100 absolute -top-2 -left-2">"</div>
                            <p className="text-gray-600 italic leading-relaxed relative z-10">
                                The Digital Marketing with AI course was a game-changer. I scaled my business leads by 3X in 6 months and my revenue doubled!
                            </p>
                        </div>
                        <div className="mt-6 flex items-center text-sm text-gray-500">
                            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium">3X Lead Growth</span>
                        </div>
                    </div>

                    {/* Web Development Success Story */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 group-hover:scale-110 transition-transform duration-300">
                                <img 
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
                                    alt="Priya M. - Junior Developer" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800 text-lg">Priya M.</div>
                                <div className="text-sm text-green-600 font-medium">Full-Stack Developer</div>
                                <div className="flex text-yellow-400 text-sm mt-1">
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="text-6xl text-green-100 absolute -top-2 -left-2">"</div>
                            <p className="text-gray-600 italic leading-relaxed relative z-10">
                                As a fresher with zero coding background, the Full-Stack training gave me confidence. Today, I work as a developer in a promising startup!
                            </p>
                        </div>
                        <div className="mt-6 flex items-center text-sm text-gray-500">
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">Zero to Hero</span>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="group hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-gray-600 font-medium">Success Stories</div>
                        </div>
                        <div className="group hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                            <div className="text-gray-600 font-medium">Job Placement Rate</div>
                        </div>
                        <div className="group hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
                            <div className="text-gray-600 font-medium">Average Rating</div>
                        </div>
                        <div className="group hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl font-bold text-orange-600 mb-2">60%</div>
                            <div className="text-gray-600 font-medium">Avg. Salary Hike</div>
                        </div>
                    </div>
                </div>

            </div>
    </section>

     {/* Upcoming Batches  */}
        <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Batches</h2>
          <p className="text-xl text-gray-600">
            Secure your spot in our next training sessions
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {batches.map((batch) => (
            <div
              key={batch.id}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{batch.title}</h3>
              <div className="text-blue-600 font-semibold mb-4">
                Next Batch: {new Date(batch.nextBatchDate).toLocaleDateString()}
              </div>
              <button className="academy-btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Corporate Training  */}
    <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Corporate Training & Partnerships</h2>
                <p className="text-xl max-w-3xl mx-auto">Customized training solutions for businesses looking to upskill their workforce</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="p-6">
                    <div className="text-3xl mb-4">🏢</div>
                    <h3 className="font-semibold mb-2">Onsite & Online Training</h3>
                    <p className="text-sm text-blue-100">Flexible delivery options</p>
                </div>
                <div className="p-6">
                    <div className="text-3xl mb-4">📝</div>
                    <h3 className="font-semibold mb-2">Tailor-made Curriculum</h3>
                    <p className="text-sm text-blue-100">Company-specific requirements</p>
                </div>
                <div className="p-6">
                    <div className="text-3xl mb-4">👥</div>
                    <h3 className="font-semibold mb-2">Employee Upskilling</h3>
                    <p className="text-sm text-blue-100">Workforce development programs</p>
                </div>
                <div className="p-6">
                    <div className="text-3xl mb-4">🚀</div>
                    <h3 className="font-semibold mb-2">Digital Transformation</h3>
                    <p className="text-sm text-blue-100">Leadership workshops</p>
                </div>
            </div>
        </div>
    </section>

    {/* Why SoftPro9 Academy is the Right Choice  */}
    <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Why <span className="text-blue-600 font-extrabold">SoftPro9</span> Academy is the Right Choice for You</h2>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                        <div className="text-3xl">🌍</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Global perspective with local training expertise.</h3>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                        <div className="text-3xl">💡</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Blending traditional learning with AI-powered innovation.</h3>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                        <div className="text-3xl">🚀</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">1000+ Students Trained and Placed across top MNCs.</h3>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                        <div className="text-3xl">🏆</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Trusted by corporates, startups, and professionals.</h3>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <div className="inline-block bg-blue-600 text-white rounded-full px-8 py-4 shadow-lg">
                        <p className="text-xl font-bold">
                            Our motto is simple: <span className="text-cyan-300">Never Stop Learning</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Call to Action  */}
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Take the First Step Today!</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Your career transformation starts with a single step. Master the future of technology and business with <span className="" style={{fontWeight:'500px'}}>SoftPro9</span> Academy.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to='/courselist'><button className="academy-btn bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100">
                    Explore Courses
                </button></Link>
                <Link to='/contact'><button className="academy-btn bg-transparent border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700">
                    Send us a Message
                </button></Link>
            </div>
            <div className="mt-8 text-sm text-blue-100">
                <p>At <span className="">SoftPro9</span> Academy, we are not just trainers. We are career partners, here to ensure your success.</p>
            </div>
        </div>
    </section>

    </>
  )
}

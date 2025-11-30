import React, { useState } from 'react';
import { GraduationCap, TrendingUp, Users, Award, Briefcase, BookOpen, DollarSign, MapPin, CheckCircle, Phone, Mail, Globe, ArrowRight, Download, Calendar, Target, Zap, Heart } from 'lucide-react';
import ScrollArrowButton from './ScrollArrowButton';
import { buildApiUrl, getApiConfig } from '../utils/apiConfig';


export default function Franchise() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    interested: 'yes'
  });


const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validation
  if (!formData.name || !formData.mobile || !formData.email || !formData.city) {
    alert('Please fill all required fields');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Phone validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(formData.mobile)) {
    alert('Mobile number must be 10 digits');
    return;

  }

  try {
    const response = await fetch(buildApiUrl('/api/franchise/submit'), {
      method: 'POST',
      ...getApiConfig(),
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert('🎉 Thank you for your franchise application! We will contact you within 48 hours.');
      
      // Reset form
      setFormData({
        name: '',
        mobile: '',
        email: '',
        city: '',
        interested: 'yes'
      });
    } else {
      alert(data.message || 'Failed to submit application. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Failed to submit application. Please try again.');
  }
};
  const scrollToForm = () => {
    const formSection = document.getElementById('contact');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

  return (
    <>
      <ScrollArrowButton />

      <div className="bg-white">
      
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Become a SoftPro9 Franchise Partner
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Launch a high-growth EdTech & Career Training Business in Your City
                </p>
                <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                  <button 
                    onClick={scrollToForm}
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 flex items-center transition-all"
                  >
                    Apply for Franchise <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              
                {/* Hero Stats */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">20+</div>
                    <div className="text-blue-200 text-sm">Job-Ready Programs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-blue-200 text-sm">Placement Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">High ROI</div>
                    <div className="text-blue-200 text-sm">Low Investment</div>
                  </div>
                </div>
              </div>
            
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                    alt="Team collaboration" 
                    className="rounded-lg w-full"
                  />
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Comprehensive Training Support</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Multiple Revenue Streams</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>National Brand Recognition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The Future of Education & Skills in India
              </h2>
              <p className="text-xl text-gray-600">
                You're entering a fast-growing, future-proof industry
              </p>
            </div>
          
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">30M+</h3>
                <p className="text-gray-600 text-sm">Digitally skilled professionals needed</p>
              </div>
            
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">$10B+</h3>
                <p className="text-gray-600 text-sm">EdTech industry projection in India</p>
              </div>
            
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">60%</h3>
                <p className="text-gray-600 text-sm">Graduates need upskilling</p>
              </div>
            
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Skill India</h3>
                <p className="text-gray-600 text-sm">Government support & focus</p>
              </div>
            </div>
          </div>
        </section>

        {/* About SoftPro9 */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                  alt="SoftPro9 Training" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  About SoftPro<span className="text-blue-600">9</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  India's leading professional training & career development company focused on preparing students and professionals for high-growth careers in technology and business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Industry-Aligned Training</h4>
                      <p className="text-gray-600">Corporate-grade curriculum with real-world projects</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Placement Support Ecosystem</h4>
                      <p className="text-gray-600">Dedicated team, job drives & internship programs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Hybrid Learning Model</h4>
                      <p className="text-gray-600">LMS + Online + Offline integrated system</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SoftPro9 Franchise */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Partner With SoftPro9?
              </h2>
              <p className="text-xl text-gray-600">
                Build a respected, profitable, and future-proof education business
              </p>
            </div>
          
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">High-Demand Programs</h3>
                <p className="text-gray-600">SAP, Full Stack, Digital Marketing, Python & emerging technologies</p>
              </div>
            
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Placement Support System</h3>
                <p className="text-gray-600">Dedicated placement team, job drives & internship coordination</p>
              </div>
            
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Corporate-Grade Training</h3>
                <p className="text-gray-600">Industry-aligned curriculum with practical project exposure</p>
              </div>
            
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast ROI, Scalable Business</h3>
                <p className="text-gray-600">Low investment with break-even in few months in active markets</p>
              </div>
            
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">LMS + Hybrid Learning</h3>
                <p className="text-gray-600">Digital marketing systems, online curriculum & automation support</p>
              </div>
            
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Full Franchise Support</h3>
                <p className="text-gray-600">From setup to operations, admissions to placements - we guide you</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Programs You Can Offer
              </h2>
              <p className="text-xl text-gray-600">
                Designed for employment, business readiness & skill mastery
              </p>
            </div>
          
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Technology Career Programs</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    SAP Functional & Technical Tracks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Full Stack MERN Developer
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Python with Automation & AI
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Cloud Computing Basics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    ERP & Business Process Training
                  </li>
                </ul>
              </div>
            
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Digital Marketing Programs</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Digital Marketing Master Certification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    SEO, SEM & Social Media
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    AI-powered Marketing Tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Performance Ads & Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Content Marketing Strategy
                  </li>
                </ul>
              </div>
            
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Job-Ready Skill Programs</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Communication Skills Training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Interview Skills & Resume Mastery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Corporate Etiquette & Workplace Skills
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Personality Development
                  </li>
                </ul>
              </div>
            
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Bootcamps & Workshops</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    10-day Career Training Modules
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Weekend Tech Bootcamps
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Real-time Projects & Hackathons
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Campus Programs & Seminars
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Streams */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Multiple Revenue Streams
              </h2>
              <p className="text-xl text-gray-600">
                Low investment | Fast growth | Multi-channel revenue
              </p>
            </div>
          
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Student Training Programs</h3>
                <p className="text-gray-600 mb-4">SAP, Digital Marketing, Full Stack, Python & more certification courses</p>
                <div className="text-3xl font-bold text-blue-600">40-60%</div>
                <div className="text-sm text-gray-500">Primary Revenue</div>
              </div>
            
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Corporate Training</h3>
                <p className="text-gray-600 mb-4">Workforce training & employee upskilling for local companies</p>
                <div className="text-3xl font-bold text-purple-600">25-35%</div>
                <div className="text-sm text-gray-500">B2B Revenue</div>
              </div>
            
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Placement & Events</h3>
                <p className="text-gray-600 mb-4">Talent sourcing, internship coordination, workshops & bootcamps</p>
                <div className="text-3xl font-bold text-green-600">15-25%</div>
                <div className="text-sm text-gray-500">Additional Revenue</div>
              </div>
            </div>
          </div>
        </section>

        {/* Franchise Support */}
        <section id="support" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                360° Franchise Support System
              </h2>
              <p className="text-xl text-gray-600">
                We guide you from setup to success
              </p>
            </div>
          
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">1</div>
                  <h3 className="font-bold text-lg">Pre-Launch Support</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Centre setup guidance</li>
                  <li>• Branding & visual identity</li>
                  <li>• Team training & onboarding</li>
                  <li>• Territory research & strategy</li>
                </ul>
              </div>
            
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">2</div>
                  <h3 className="font-bold text-lg">Operational Support</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Daily operations SOPs</li>
                  <li>• LMS & tech tools access</li>
                  <li>• Trainer onboarding</li>
                  <li>• Academic calendar planning</li>
                </ul>
              </div>
            
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">3</div>
                  <h3 className="font-bold text-lg">Sales & Marketing</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Marketing toolkit</li>
                  <li>• Lead generation support</li>
                  <li>• Social media & ads</li>
                  <li>• Counselling & sales training</li>
                </ul>
              </div>
            
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">4</div>
                  <h3 className="font-bold text-lg">Academic Support</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Structured curriculum</li>
                  <li>• Study materials</li>
                  <li>• Guest faculty sessions</li>
                  <li>• Industry certifications</li>
                </ul>
              </div>
            
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">5</div>
                  <h3 className="font-bold text-lg">Placement Support</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Placement drives</li>
                  <li>• Interview prep & resume</li>
                  <li>• Internship assistance</li>
                  <li>• Company tie-ups</li>
                </ul>
              </div>
            
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">6</div>
                  <h3 className="font-bold text-lg">Ongoing Support</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Performance reviews</li>
                  <li>• Business consultation</li>
                  <li>• Course updates</li>
                  <li>• Corporate synergy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal Partner */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Who Can Become a SoftPro9 Partner?
              </h2>
              <p className="text-xl text-blue-100">
                With passion & commitment — we help you build success
              </p>
            </div>
          
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-opacity-15 transition-all">
                <div className="bg-white bg-opacity-25 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-bold mb-2">Entrepreneurs</h3>
                <p className="text-sm text-blue-100">Startup aspirants & business investors</p>
              </div>
            
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-opacity-15 transition-all">
                <div className="bg-white bg-opacity-25 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <GraduationCap className="w-10 h-10 text-white"  strokeWidth={2} />
                </div>
                <h3 className="font-bold mb-2">Education Owners</h3>
                <p className="text-sm text-blue-100">Coaching or training centre owners</p>
              </div>
            
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-opacity-15 transition-all">
                <div className="bg-white bg-opacity-25 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Briefcase className="w-10 h-10 text-white"  strokeWidth={2} />
                </div>
                <h3 className="font-bold mb-2">HR Professionals</h3>
                <p className="text-sm text-blue-100">Corporate HRs & trainers</p>
              </div>
            
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-opacity-15 transition-all">
                <div className="bg-white bg-opacity-25 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="w-10 h-10 text-white"  strokeWidth={2} />
                </div>
                <h3 className="font-bold mb-2">Tech Professionals</h3>
                <p className="text-sm text-blue-100">IT professionals & consultants</p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
              <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      Locations Open for Franchise
                    </h2>
                    <p className="text-xl text-gray-600">
                      Exclusive city-wise franchise rights available. Apply early to secure your region.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    {['Mysuru', 'Bengaluru', 'Mangaluru', 'Hubli', 'Belgaum', 'Tumkur', 'Udupi', 'Dharwad', 
                      'Hyderabad', 'Kochi', 'Chennai', 'Coimbatore', 'Pune', 'Mumbai', 'Ahmedabad', 'Delhi NCR',
                      'Guntur', 'Vijayawada', 'Jaipur', 'Lucknow'].map((city, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center">
                        <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="font-medium text-gray-800">{city}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-12">
                    <button 
                    onClick={scrollToForm}
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700">
                      Check Availability in Your City
                    </button>
                  </div>
                </div>
              </section>

    {/* How It Works */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple process from application to launch
          </p>
        </div>
      
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200"></div>
        
          <div className="grid md:grid-cols-6 gap-8 relative">
            {[
              { icon: <CheckCircle />, title: 'Apply Online', desc: 'Fill franchise application' },
              { icon: <Phone />, title: 'Discussion', desc: 'Business briefing call' },
              { icon: <Award />, title: 'MoU & Onboarding', desc: 'Agreement & training' },
              { icon: <Zap />, title: 'Setup Support', desc: 'Centre setup guidance' },
              { icon: <Calendar />, title: 'Launch', desc: 'Start admissions' },
              { icon: <TrendingUp />, title: 'Growth & Scale', desc: 'Expand your business' }
            ].map((step, idx) => (
              <div key={idx} className="text-center relative">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg z-10 relative">
                  {React.cloneElement(step.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our students and corporate partners
          </p>
        </div>
      
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                A
              </div>
              <div>
                <h4 className="font-bold">Aarav S.</h4>
                <div className="text-yellow-500 text-sm">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "SoftPro9 gave me the best SAP functional training & helped me get placed in a top MNC. The practical approach and placement support were outstanding."
            </p>
            <div className="mt-4 text-sm text-gray-500">SAP Student</div>
          </div>
        
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl mr-4">
                P
              </div>
              <div>
                <h4 className="font-bold">Priya M.</h4>
                <div className="text-yellow-500 text-sm">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Loved their Full Stack program — live projects, coding practice & job support were fantastic. I switched my career successfully."
            </p>
            <div className="mt-4 text-sm text-gray-500">Career Switch Professional</div>
          </div>
        
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mr-4">
                R
              </div>
              <div>
                <h4 className="font-bold">Rajesh K.</h4>
                <div className="text-yellow-500 text-sm">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "SoftPro9 helped our corporate workforce upgrade digital skills. Great delivery and very professional team!"
            </p>
            <div className="mt-4 text-sm text-gray-500">HR / Corporate Client</div>
          </div>
        </div>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why SoftPro9 Franchise Wins
          </h2>
        </div>
      
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <tr>
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-center">Traditional Institute</th>
                <th className="p-4 text-center bg-blue-800">SoftPro9 Franchise</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium">Curriculum</td>
                <td className="p-4 text-center text-red-600">No structured curriculum</td>
                <td className="p-4 text-center text-green-600 bg-blue-50 font-semibold">Corporate-grade curriculum</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium">Job Support</td>
                <td className="p-4 text-center text-red-600">Uncertain job support</td>
                <td className="p-4 text-center text-green-600 bg-blue-50 font-semibold">Strong internship + placement cell</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium">Faculty</td>
                <td className="p-4 text-center text-red-600">Local trainers only</td>
                <td className="p-4 text-center text-green-600 bg-blue-50 font-semibold">Centralized + verified faculty panel</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium">Branding</td>
                <td className="p-4 text-center text-red-600">Generic branding</td>
                <td className="p-4 text-center text-green-600 bg-blue-50 font-semibold">National brand with proven systems</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium">Operations</td>
                <td className="p-4 text-center text-red-600">Manual operations</td>
                <td className="p-4 text-center text-green-600 bg-blue-50 font-semibold">LMS + digital learning ecosystem</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium">Growth</td>
                <td className="p-4 text-center text-red-600">Slow growth</td>
                <td className="p-4 text-center text-green-600 bg-blue-50 font-semibold">Fast-scale hybrid EdTech model</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Start Your Own Career Training Business?
        </h2>
        <p className="text-xl mb-12 text-blue-100">
          Join India's fast-growing skill development network. Lead your city. Build careers. Earn with purpose.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={scrollToForm}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 flex items-center transition-all"
          >
            Apply Now <ArrowRight className="ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to lead your city's digital education revolution? Contact us today to learn more about franchise opportunities.
            </p>
          
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Head Office</h4>
                  <p className="text-gray-600">NK Urs Road, Mysore, Karnataka</p>
                </div>
              </div>
            
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 9535451414</p>
                </div>
              </div>
            
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">franchise@softpro9.com</p>
                </div>
              </div>
            
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Website</h4>
                  <p className="text-gray-600">https://softpro9.com</p>
                </div>
              </div>
            </div>
          
            <div className="mt-8">
              <p className="text-2xl font-bold text-blue-600 italic">Never Stop Learning!</p>
            </div>
          </div>
        
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Franchise Application</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>
            
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your mobile number"
                />
              </div>
            
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                />
              </div>
            
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City / Location *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your city"
                />
              </div>
            
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interested in Franchise?</label>
                <select
                  name="interested"
                  value={formData.interested}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center"
              >
                Submit Franchise Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  
  </div>
</>
);
}
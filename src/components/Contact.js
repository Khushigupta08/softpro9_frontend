import React, { useState } from 'react';
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Linkedin, Instagram, Facebook, Youtube, Twitter, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import ScrollArrowButton from './ScrollArrowButton';

export default function Contact() {
  // API URL from environment variable
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  
  // Google Map Embed URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2!2d76.6390000!3d12.2958000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMysuru!5e0!3m2!1sen!2sin!4v1234567890000";
  
  // State management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SAP',
    message: ''
  });
  
  const [formMsg, setFormMsg] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Frontend validation
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must not exceed 100 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !/^[0-9+\-() ]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 5000) {
      newErrors.message = 'Message must not exceed 5000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      setFormMsg({ type: 'error', text: 'Please fix the errors above' });
      setTimeout(() => setFormMsg({ type: '', text: '' }), 5000);
      return;
    }

    setLoading(true);
    setFormMsg({ type: '', text: '' });

    try {
      // Submit form - NO reCAPTCHA
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim() || undefined,
        service: formData.service,
        message: formData.message.trim()
      };

      const response = await axios.post(
        `${API_URL}/api/messages`, 
        payload,
        {
          timeout: 10000,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.success) {
        setFormMsg({ 
          type: 'success', 
          text: 'Thank you for contacting us! We\'ll get back to you soon.' 
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'SAP',
          message: ''
        });
        
        // Clear message after 8 seconds
        setTimeout(() => setFormMsg({ type: '', text: '' }), 8000);
      }

    } catch (error) {
      console.error('Contact form submission error:', error);
      
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please check your connection and try again.';
      } else if (!error.response) {
        errorMessage = 'Network error. Please check your internet connection.';
      }
      
      setFormMsg({ type: 'error', text: errorMessage });
      setTimeout(() => setFormMsg({ type: '', text: '' }), 8000);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ScrollArrowButton />

      <Helmet>
        <title>Contact Us - SoftPro9 IT Services | Get in Touch</title>
        <meta name="description" content="Contact SoftPro9 IT Services for SAP solutions, web development, app development, and digital marketing services. Located in Mysore and Bangalore." />
        <meta name="keywords" content="contact SoftPro9, IT services Mysore, SAP solutions, web development, app development, digital marketing, contact us" />
        <link rel="canonical" href={window.location.origin + window.location.pathname} />
        
        <meta property="og:title" content="Contact SoftPro9 IT Services" />
        <meta property="og:description" content="Get in touch for training, services, and partnerships. Contact SoftPro9 today." />
        <meta property="og:url" content={window.location.origin + window.location.pathname} />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SoftPro9 IT Services",
            "image": `${window.location.origin}/images/about_softpro_image1.avif`,
            "telephone": "+91 9535451414",
            "email": "contact@softpro9.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "#123, ABC Business Park",
              "addressLocality": "Mysore",
              "addressRegion": "Karnataka",
              "postalCode": "570001",
              "addressCountry": "IN"
            },
            "url": window.location.origin,
            "priceRange": "$$",
            "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-13:00"
          })}
        </script>
      </Helmet>

      <div className="relative bg-gradient-to-br from-[#e9f0fb] to-[#f7f4fa] min-h-screen py-16 flex items-center justify-center mt-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden bg-white">
            
            {/* Left: Visual & Info Panel */}
            <div className="lg:w-1/2 p-10 flex flex-col justify-center bg-gradient-to-br from-indigo-100/80 to-white">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
                Let's Connect and Grow Together
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                At SoftPro9 IT Services, we believe that every great partnership begins with a conversation. 
                Whether you're looking for innovative SAP solutions, cutting-edge web & app development, 
                advanced digital marketing powered by AI, or simply guidance on the right tech strategy – 
                our team is here to help.
              </p>

              <div className="space-y-3 mb-8">
                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 8a16 16 0 0 0 13 13l2-2a2 2 0 0 0-.6-3.2l-2.3-1a2 2 0 0 0-2.3.3l-1.7 1.4a12 12 0 0 1-6-6l1.4-1.7a2 2 0 0 0 .3-2.3l-1-2.3A2 2 0 0 0 5 3l-2 2z"/>
                    </svg>
                  </span>
                  <a href="tel:+919535451414" className="font-medium text-gray-700 hover:text-blue-600">
                    +91 9535451414
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16v16H4V4zm16 0l-8 8-8-8"/>
                    </svg>
                  </span>
                  <a href="mailto:contact@softpro9.com" className="font-medium text-gray-700 hover:text-blue-600">
                    contact@softpro9.com
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 4.55 6.39 11.54 6.73 11.93a1 1 0 0 0 1.54 0C12.61 20.54 19 13.55 19 9c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                    </svg>
                  </span>
                  <span className="font-medium text-gray-700">Mysore, Karnataka, India</span>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.61 6.01L0 24l6.21-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.87 0-3.68-.5-5.27-1.44l-.38-.23-3.68.97.98-3.59-.25-.37A9.96 9.96 0 0 1 2 12C2 6.48 6.48 2 12 2c2.66 0 5.16 1.04 7.04 2.92A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.36-7.44c-.29-.15-1.71-.85-1.98-.95s-.46-.15-.65.15-.75.95-.92 1.15-.34.22-.63.07a8.2 8.2 0 0 1-2.41-1.49 9.05 9.05 0 0 1-1.68-2.09c-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.65-1.56-.9-2.14-.24-.58-.49-.5-.65-.51h-.56c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.46 1.07 2.86 1.22 3.05c.15.2 2.1 3.2 5.07 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.71-.7 1.95-1.38.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.56-.35z"/>
                    </svg>
                  </span>
                  <a
                    href="https://wa.me/919535451414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-md transition"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:w-1/2 bg-white p-10 flex items-center justify-center">
              <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6" noValidate>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Have a question or project idea? Fill out the form below, and our experts will get back to you at the earliest
                  </p>
                </div>

                {/* Name & Email Row */}
                <div className="md:flex md:space-x-4">
                  <div className="flex-1 mb-4 md:mb-0">
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength="100"
                      required
                      disabled={loading}
                      className={`w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-400 transition ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      aria-label="Full Name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="flex-1">
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength="255"
                      required
                      disabled={loading}
                      className={`w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-400 transition ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      aria-label="Email Address"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="20"
                    disabled={loading}
                    placeholder="+91 9876543210"
                    className={`w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-400 transition ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-label="Phone Number"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block mb-1 text-sm font-medium text-gray-700">
                    Service of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className={`w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 transition ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-label="Service of Interest"
                    aria-required="true"
                  >
                    <option value="SAP">SAP</option>
                    <option value="Web & App Development">Web & App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                    <span className="text-gray-400 text-xs ml-2">
                      ({formData.message.length}/5000)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    maxLength="5000"
                    required
                    disabled={loading}
                    className={`w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-400 transition resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-label="Message"
                    aria-required="true"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg flex items-center justify-center ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'
                  }`}
                  aria-label="Send Message"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Form Message */}
                {formMsg.text && (
                  <div
                    className={`text-center p-3 rounded-lg ${
                      formMsg.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                    role="alert"
                  >
                    {formMsg.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* Extra Content - Locations */}
      <section className="w-full bg-white">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Our Locations
            </motion.h2>
            <p className="mt-3 text-blue-100 max-w-2xl">
              Visit us at our Head Office in Mysore or our Branch Office in Bangalore. 
              Find business hours, map, and quick links below.
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Location Cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2 grid gap-6 md:grid-cols-2"
            >
              {/* Head Office */}
              <div className="rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex p-2 rounded-xl bg-blue-50 text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-800">Head Office – Mysore</h3>
                  </div>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    <span className="block">📍 #123, ABC Business Park, Mysore – 570001, Karnataka</span>
                  </p>
                </div>
              </div>

              {/* Branch Office */}
              <div className="rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex p-2 rounded-xl bg-blue-50 text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-800">Branch Office – Bangalore</h3>
                  </div>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    <span className="block">📍 #456, Tech Hub Tower, Bangalore – 560045, Karnataka</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-blue-100 bg-blue-50/60 shadow-sm"
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex p-2 rounded-xl bg-white text-blue-700 border border-blue-100">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-800">Business Hours</h3>
                </div>
                <div className="mt-4 text-gray-800">
                  <p>Monday – Friday: <span className="font-medium">9:00 AM – 6:00 PM</span></p>
                  <p className="mt-1">Saturday: <span className="font-medium">9:00 AM – 1:00 PM</span></p>
                  <p className="mt-1">Sunday: <span className="font-medium">Closed</span></p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-sm">
              <div className="bg-blue-600 text-white px-4 py-3 text-sm sm:text-base font-medium">
                📌 Find us easily with Google Maps integration below
              </div>
              <div className="aspect-[16/9] w-full">
                <iframe
                  title="SoftPro9 Locations Map"
                  src={mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800">Stay Connected</h3>
              <p className="text-gray-600 mt-1">
                Follow us for the latest updates, insights, and career opportunities:
              </p>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                <a
                  href="https://linkedin.com/company/softpro9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition"
                  aria-label="Visit our LinkedIn page"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="https://instagram.com/softpro9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a
                  href="https://facebook.com/softpro9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
                <a
                  href="https://youtube.com/@softpro9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition"
                  aria-label="Visit our YouTube channel"
                >
                  <Youtube className="h-4 w-4" /> YouTube
                </a>
                <a
                  href="https://twitter.com/softpro9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition"
                  aria-label="Visit our Twitter page"
                >
                  <Twitter className="h-4 w-4" /> X (Twitter)
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="rounded-2xl border border-blue-100 bg-blue-600 text-white p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Explore More with SoftPro9</h3>
                  <p className="text-blue-100 mt-1">
                    Looking for a career or want to explore our services? Jump right in.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link to="/carrer">
                    <button className="inline-flex items-center gap-2 rounded-2xl bg-white text-blue-700 px-4 py-2 font-medium shadow-sm hover:shadow transition">
                      Visit Our Careers Page <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                  <Link to="/service">
                    <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 text-white px-4 py-2 font-medium shadow-sm hover:bg-blue-500/90 transition border border-white/20">
                      View Our Service Portfolio <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
import React, { useState } from 'react';
import { Star, Award, Shield } from 'lucide-react';

const ConsultationFormModal = ({ isOpen, onClose, formType = 'consultation' }) => {
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    serviceInterest: '',
    otherService: '',
    requirementDescription: '',
    cityCountry: '',
    companyName: '',
    website: '',
    roleDesignation: '',
    reason: '',
    consultationMode: '',
    hearAboutUs: '',
    agreeToReceiveCommunication: false
  });

  const [errors, setErrors] = useState({});

  const countryCodes = [
    { value: '+91', label: '🇮🇳 +91' },
    { value: '+1', label: '🇺🇸 +1' },
    { value: '+44', label: '🇬🇧 +44' },
    { value: '+61', label: '🇦🇺 +61' },
    { value: '+971', label: '🇦🇪 +971' }
  ];

  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'web_development', label: 'Web Development' },
    { value: 'digital_marketing', label: 'Digital Marketing' },
    { value: 'hr_services', label: 'HR Services' },
    { value: 'sap_services', label: 'SAP Services' },
    { value: 'others', label: 'Others' }
  ];

  const consultationModes = [
    { value: '', label: 'Select consultation mode' },
    { value: 'Call', label: 'Phone Call' },
    { value: 'WhatsApp', label: 'WhatsApp' },
    { value: 'Zoom/Google Meet', label: 'Zoom / Google Meet' },
    { value: 'In-person', label: 'In-person (for nearby locations)' }
  ];

  const hearAboutUsOptions = [
    { value: '', label: 'Select an option' },
    { value: 'Google', label: 'Google' },
    { value: 'Instagram', label: 'Instagram' },
    { value: 'Referral', label: 'Referral' },
    { value: 'Others', label: 'Others' }
  ];

  const showToastMessage = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.serviceInterest) newErrors.serviceInterest = 'Please select a service';
    if (formData.serviceInterest === 'others' && !formData.otherService.trim()) {
      newErrors.otherService = 'Please specify the service';
    }
    if (!formData.requirementDescription.trim()) newErrors.requirementDescription = 'Please describe your requirements';
    if (!formData.cityCountry.trim()) newErrors.cityCountry = 'City and Country are required';
    if (!formData.reason) newErrors.reason = 'Please select what you\'re looking for';
    if (!formData.consultationMode) newErrors.consultationMode = 'Please select a consultation mode';
    if (!formData.agreeToReceiveCommunication) {
      newErrors.agreeToReceiveCommunication = 'Please agree to receive communication';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const onSubmit = async () => {
    if (!validateForm()) {
      showToastMessage('Please fill in all required fields', 'error');
      return;
    }

    try {
      setLoading(true);

      const submissionData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        countryCode: formData.countryCode,
        serviceInterest: formData.serviceInterest,
        otherService: formData.otherService,
        requirementDescription: formData.requirementDescription,
        cityCountry: formData.cityCountry,
        companyName: formData.companyName,
        website: formData.website,
        roleDesignation: formData.roleDesignation,
        reason: formData.reason,
        consultationMode: formData.consultationMode,
        hearAboutUs: formData.hearAboutUs,
        preferredDateTime: preferredDate || null
      };

      console.log('Submitting data:', submissionData);

      const response = await fetch('http://localhost:5000/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      console.log('Response status:', response.status);

      const responseData = await response.json();
      console.log('Full Response data:', JSON.stringify(responseData, null, 2));

      if (!response.ok) {
        console.error('Backend Error Message:', responseData.message);
        console.error('Backend Error:', responseData.error);
        throw new Error(responseData.message || responseData.error || 'Submission failed');
      }

      showToastMessage('Thank you for reaching out! Our team will contact you within 24 hours.', 'success');

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        serviceInterest: '',
        otherService: '',
        requirementDescription: '',
        cityCountry: '',
        companyName: '',
        website: '',
        roleDesignation: '',
        reason: '',
        consultationMode: '',
        hearAboutUs: '',
        agreeToReceiveCommunication: false
      });
      setRecaptchaToken('');
      setPreferredDate('');

      setTimeout(() => onClose(), 3000);
    } catch (error) {
      console.error('Detailed error:', error);

      if (error.message === 'Failed to fetch') {
        showToastMessage('Cannot connect to server. Please check if backend is running on port 5000.', 'error');
      } else {
        showToastMessage(error.message || 'Error submitting form. Please try again.', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-80" onClick={onClose} >
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex" onClick={(e) => e.stopPropagation()}>

            {/* Left Sidebar - Testimonials & Awards */}
            <div className="hidden lg:block w-80 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-8 overflow-y-auto">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Client Testimonial */}
              <div className="mb-8">
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="text-3xl">"</span>
                  Client's
                </h3>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs text-gray-300">
                      <div className="font-semibold text-white">National Security</div>
                      <div>Foundation</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      G
                    </div>
                    <div className="text-xs text-gray-300">
                      <div className="font-semibold text-white">Google</div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs italic leading-relaxed mb-3">
                    "I am really glad to say that vervelogic is one of the best ecommerce development companies, and their SEO services helps us to top ranking in search engine and increase our online business."
                  </p>

                  <div className="border-t border-white/20 pt-3">
                    <p className="text-white font-semibold text-sm">JITENDRA KUMAR SINGH</p>
                    <p className="text-gray-400 text-xs">SEO Project</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">ISO</div>
                    <div className="text-gray-400 text-xs">9001:2008</div>
                    <div className="text-gray-500 text-xs">REGISTERED</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded px-3 py-2">
                    <div className="text-xs text-gray-300 mb-1">Google</div>
                    <div className="text-white font-semibold text-sm">AdWords</div>
                    <div className="text-gray-400 text-xs">Certified</div>
                  </div>
                </div>
              </div>

              {/* Awards Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <h3 className="text-white font-bold text-sm uppercase tracking-wide">
                    Awards and Recognition
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    { year: '2022', title: 'INDIA', subtitle: 'Corporate Branding Company' },
                    { year: '2022', title: 'INDIA', subtitle: 'Top Logo Design Company' },
                    { year: '2022', title: 'INDIA', subtitle: 'Top Branding Company' }
                  ].map((award, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center border-2 border-slate-500">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">{award.title}</div>
                        <div className="text-gray-300 text-xs">{award.subtitle}</div>
                        <div className="text-gray-400 text-xs mt-1">{award.year}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-green-500/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center gap-2 border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-semibold">We are online!</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 overflow-y-auto">
              {/* Mobile Close Button */}
              <button
                onClick={onClose}
                className="lg:hidden absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-6">
                <h2 className="text-2xl font-bold text-white">
                  {formType === 'quote' ? 'Request a Quote' : 'Get a Free Consultation'}
                </h2>

                <p className="text-blue-100 text-sm mt-1">
                  Fill out the form below and we'll contact you very shortly.
                </p>
              </div>

              <div className="px-6 py-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-28 border border-gray-300 rounded-lg shadow-sm px-2 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {countryCodes.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="flex-1 border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="requirementDescription"
                    value={formData.requirementDescription}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your project requirements..."
                    className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  ></textarea>
                  {errors.requirementDescription && (
                    <p className="mt-1 text-sm text-red-600">{errors.requirementDescription}</p>
                  )}
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    {serviceOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  {errors.serviceInterest && (
                    <p className="mt-1 text-sm text-red-600">{errors.serviceInterest}</p>
                  )}
                </div>

                {formData.serviceInterest === 'others' && (
                  <div>
                    <input
                      type="text"
                      name="otherService"
                      value={formData.otherService}
                      onChange={handleChange}
                      placeholder="Specify your service"
                      className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                    {errors.otherService && (
                      <p className="mt-1 text-sm text-red-600">{errors.otherService}</p>
                    )}
                  </div>
                )}

                {/* Collapsible Additional Fields */}
                <details className="border border-gray-200 rounded-lg p-4">
                  <summary className="cursor-pointer font-medium text-gray-700 hover:text-blue-600">
                    Additional Information (Optional)
                  </summary>
                  <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Website"
                        className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <input
                      type="text"
                      name="roleDesignation"
                      value={formData.roleDesignation}
                      onChange={handleChange}
                      placeholder="Your Role/Designation"
                      className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      name="cityCountry"
                      value={formData.cityCountry}
                      onChange={handleChange}
                      placeholder="City, Country"
                      className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </details>

                {/* Looking For */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Are you looking for: <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="reason"
                        value="Business Service/Project"
                        checked={formData.reason === 'Business Service/Project'}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Business Service / Project</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="reason"
                        value="Partnership/Collaboration"
                        checked={formData.reason === 'Partnership/Collaboration'}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Partnership / Collaboration</span>
                    </label>
                  </div>
                  {errors.reason && (
                    <p className="mt-1 text-sm text-red-600">{errors.reason}</p>
                  )}
                </div>

                {/* Consultation Mode & Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Consultation Mode <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="consultationMode"
                      value={formData.consultationMode}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {consultationModes.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    {errors.consultationMode && (
                      <p className="mt-1 text-sm text-red-600">{errors.consultationMode}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min={new Date().toISOString().slice(0, 16)}
                    />
                  </div>
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    How did you hear about us?
                  </label>
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {hearAboutUsOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                {/* Consent Checkbox */}
                <div className="border-t pt-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToReceiveCommunication"
                      checked={formData.agreeToReceiveCommunication}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 mt-1"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      I agree to receive communication from SoftPro9 regarding my inquiry. <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.agreeToReceiveCommunication && (
                    <p className="mt-1 text-sm text-red-600">{errors.agreeToReceiveCommunication}</p>
                  )}
                </div>

                {/* Security Badge */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">100% Security of your information</p>
                    <p className="text-xs text-blue-700 mt-1">All information you provide will be kept strictly confidential and only used to prepare your quote.</p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={onSubmit}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold rounded-lg px-6 py-3.5 shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      {formType === 'quote' ? 'GET A QUOTE' : 'SUBMIT YOUR REQUEST'}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-[60] animate-slideIn">
          <div className={`rounded-lg shadow-2xl p-4 ${toastType === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white max-w-md`}>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                {toastType === 'success' ? (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                )}
              </svg>
              <p className="font-medium">{toastMessage}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ConsultationFormModal;
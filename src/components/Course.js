import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendar, faCertificate, faChalkboardTeacher, faChartLine, faChevronDown, faChevronRight, faClock, faCloud, faDatabase, faDownload, faGraduationCap, faLaptop, faLaptopCode, faMobileAndroid, faPlay, faRupeeSign, faStar, faUser, faUserTie, faVideo, faTimes, faCheckCircle, faLock, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import './Course.css';
import PaymentModal from './PaymentModal';
import AuthModal from '../pages/AuthModal';
import { useAuth } from '../authContext';
import eventBus from '../utils/eventBus';
import { useParams, useNavigate } from "react-router-dom";
import he from 'he';
import jsPDF from "jspdf";
import 'react-quill-new/dist/quill.snow.css';
import ScrollArrowButton from './ScrollArrowButton';

export default function Course() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userFormData, setUserFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [postAction, setPostAction] = useState(null);
  const [videoCanPlay, setVideoCanPlay] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingEnroll, setPendingEnroll] = useState(false);
  const { isAuthenticated } = useAuth();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [expandedModules, setExpandedModules] = useState({});
  const [expandedVideoModules, setExpandedVideoModules] = useState({});
  const [courseVideos, setCourseVideos] = useState([]);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [period, setPeriod] = useState('AM');
  const [formattedDateTime, setFormattedDateTime] = useState('');
  const [activeTabPerModule, setActiveTabPerModule] = useState({});

  
  const openModalForVideo = () => {
    setPostAction("video");
    setIsModalOpen(true);
  };

  const openModalForDownload = () => {
    setPostAction("syllabus");
    setIsModalOpen(true);
  };

  const openModalForDemo = () => {
    console.log('openModalForDemo called');
    setPostAction("demo");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  const handleEnrollClick = () => {
    if (!isAuthenticated) {
      setPendingEnroll(true);
      setShowAuthModal(true);
      return;
    }
    setShowPaymentModal(true);
  };

  useEffect(() => {
    if (isAuthenticated && pendingEnroll) {
      setShowAuthModal(false);
      setShowPaymentModal(true);
      setPendingEnroll(false);
    }
  }, [isAuthenticated, pendingEnroll]);

  useEffect(() => {
    const fetchMyEnrollments = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token || !course) return;
        const res = await axios.get('http://localhost:5000/api/enrollments/student', { headers: { Authorization: `Bearer ${token}` } });
        const enrolledIds = new Set((res.data || []).map(c => Number(c.id)));
        setIsEnrolled(enrolledIds.has(Number(course.id)));
      } catch (e) {}
    };
    fetchMyEnrollments();
  }, [isAuthenticated, course]);

  useEffect(() => {
    const handler = (payload) => {
      if (payload && payload.courseId && Number(payload.courseId) === Number(course?.id)) {
        setIsEnrolled(true);
      }
    };
    try { eventBus.on('enrollment:changed', handler); } catch (e) {}
    return () => { try { eventBus.off('enrollment:changed', handler); } catch (e) {} };
  }, [course]);

  const handleInputChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        courseId: course.id,
        type: postAction,
        ...userFormData,
      };
      
      // Add demo datetime if available
      if (postAction === "demo" && formattedDateTime) {
        payload.demoDateTime = formattedDateTime;
      }
      
      await axios.post("http://localhost:5000/api/access-requests", payload);
      
      setIsModalOpen(false);
      setUserFormData({ name: "", email: "", phone: "", message: "" });
      setDate('');
      setTime('');
      setPeriod('AM');
      setFormattedDateTime('');
      
      if(postAction === "video") {
        setVideoCanPlay(true);
      } else if(postAction === "syllabus") {
        generatePDF(course.syllabus);
      }
    } catch {
      alert("Failed to submit, try again.");
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/slug/${slug}`)
      .then(res => setCourse(res.data))
      .catch(() => alert("Failed to load course details"));
  }, [slug]);

  const toggleSyllabus = (idx) => {
    setExpandedModules(prev => ({ ...prev, [idx]: !prev[idx] }));
    setActiveTabPerModule(prev => ({ ...prev, [idx]: 'syllabus' }));
  };

  const toggleVideoModule = (idx) => {
    setExpandedVideoModules(prev => ({ ...prev, [idx]: !prev[idx] }));
    setActiveTabPerModule(prev => ({ ...prev, [idx]: 'videos' }));
  };

  const toggleModule = (idx) => {
    setExpandedModules(prev => ({ ...prev, [idx]: !prev[idx] }));
    if (!activeTabPerModule[idx]) {
      setActiveTabPerModule(prev => ({ ...prev, [idx]: 'syllabus' }));
    }
  };

  const switchTab = (idx, tab) => {
    setActiveTabPerModule(prev => ({ ...prev, [idx]: tab }));
  };

  useEffect(() => {
    if (course) {
      axios.get(`http://localhost:5000/api/courses/${course.id}/videos`)
        .then(res => setCourseVideos(res.data))
        .catch(() => setCourseVideos([]));
    }
  }, [course]);

  // Fetch related courses when main course loads
  useEffect(() => {
    if (!course?.id) return;
    axios
      .get(`http://localhost:5000/api/courses/${course.id}/related?limit=3`)
      .then(res => setRelatedCourses(res.data))
      .catch(err => {
        console.error('Error fetching related courses:', err);
        setRelatedCourses([]);
      });
  }, [course]);

  if (!course) return <p>Loading...</p>;

  const courseDescription = (course.subtitle || course.description || '').replace(/<[^>]*>?/gm, '').slice(0, 160);

  const countdownHoursLeft = (() => {
    if (!course.discountEndTime) return 0;
    const endTime = new Date(course.discountEndTime);
    const now = new Date();
    const diffMs = endTime - now;
    return diffMs > 0 ? Math.floor(diffMs / (1000 * 60 * 60)) : 0;
  })();

  const GST_PERCENT = 18;
  const basePrice = course.discountPrice || course.price;
  const gstAmount = Math.round(basePrice * GST_PERCENT / 100);
  const totalPrice = basePrice + gstAmount;

  const generatePDF = (syllabus) => {
    try {
      const doc = new jsPDF();
      let y = 20; // Start position
      const pageHeight = doc.internal.pageSize.height;
      const marginBottom = 20;
      
      // Add title
      doc.setFontSize(18);
      doc.setFont(undefined, 'bold');
      doc.text(course.title || 'Course Syllabus', 10, y);
      y += 15;
      
      syllabus.forEach((module, index) => {
        // Check if we need a new page for module title
        if (y > pageHeight - marginBottom) {
          doc.addPage();
          y = 20;
        }
        
        // Module title
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        const moduleTitle = `${index + 1}. ${module.module}`;
        doc.text(moduleTitle, 10, y);
        y += 8;
        
        // Topics
        doc.setFontSize(11);
        doc.setFont(undefined, 'normal');
        
        module.topics.forEach((topic, i) => {
          // Check if we need a new page for topic
          if (y > pageHeight - marginBottom) {
            doc.addPage();
            y = 20;
          }
          
          const topicText = `   • ${topic}`;
          
          // Handle long topics - split into multiple lines
          const lines = doc.splitTextToSize(topicText, 180);
          lines.forEach(line => {
            if (y > pageHeight - marginBottom) {
              doc.addPage();
              y = 20;
            }
            doc.text(line, 10, y);
            y += 6;
          });
        });
        
        y += 5; // Space between modules
      });
      
      doc.save(`${course.slug || 'course'}-syllabus.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };
  
  const iconMap = {
    star: faStar,
    database: faDatabase,
    cloud: faCloud,
  };

  const safeHTML = he.decode(course.description)
    .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');

  const createGoogleCalendarLink = () => {
    try {
      const { name = "", email = "", message = "" } = userFormData || {};
      
      // Use state variables instead of userFormData fields
      if (!date || !time) return null;
      
      const time24 = convertTo24Hour(time, period);
      const startLocal = new Date(`${date}T${time24}:00`);
      
      if (isNaN(startLocal.getTime())) return null;
      
      const endLocal = new Date(startLocal.getTime() + 60 * 60 * 1000);
      const toCalendarFormat = (d) => d.toISOString().replace(/-|:|\.\d{3}/g, '');
      const startStr = toCalendarFormat(startLocal);
      const endStr = toCalendarFormat(endLocal);
      const title = `${course.title} — Demo Session`;
      const details = `Demo for ${course.title}\nName: ${name}\nEmail: ${email}\nNotes: ${message}`;
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
      console.error('Error creating calendar link:', e);
      return null;
    }
  };

    // Convert 12-hour time to 24-hour format for backend
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
        <title>{course.title} | SoftPro9 Academy</title>
        <meta name="description" content={courseDescription} />
        <meta name="keywords" content={course.metaKeywords || `${course.title} || ''}, SoftPro9 courses`} />
        <link rel="canonical" href={window.location.origin + window.location.pathname} />
        <meta property="og:title" content={`${course.title} | SoftPro9 Academy`} />
        <meta property="og:description" content={courseDescription} />
        <meta property="og:type" content="course" />
        <meta property="og:url" content={window.location.origin + window.location.pathname} />
        <meta property="og:image" content={course.image || (window.location.origin + '/images/about_softpro_image1.avif')} />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "${course.title.replace(/"/g, '\\"')}",
            "description": "${courseDescription.replace(/"/g, '\\"')}",
            "provider": {
              "@type": "Organization",
              "name": "SoftPro9 Academy",
              "sameAs": "${window.location.origin}"
            }
          }`}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="hero mt-5 mb-5">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2">
          <div className="floating-icon">
            <i className="fab fa-node-js"></i>
          </div>
        </div>
        <div className="floating-element">
          <div className="floating-icon">
            <FontAwesomeIcon icon={faDatabase}/>
          </div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="job-ready-badge">
              <FontAwesomeIcon icon={faStar}/> Job Ready Program
            </div>
            <h1>{course.title}</h1>
            <p className="hero-subtitle">{course.subtitle}</p>
            <p className="hero-description">
              Master modern web development with hands-on projects and industry-expert mentorship. 
              Build real-world applications and launch your career as a skilled Full Stack Developer 
              with comprehensive training in frontend, backend, and database technologies.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">
                  <FontAwesomeIcon icon={faStar}/><span style={{color:"white"}}>4.9</span>
                </div>
                <div className="stat-label">(28,500+ Reviews)</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <FontAwesomeIcon icon={faUser} /><span style={{color:"white"}}>35K+</span>
                </div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <FontAwesomeIcon icon={faChalkboardTeacher}/><span style={{color:"white"}}>20+</span>
                </div>
                <div className="stat-label">Expert Mentors</div>
              </div>
            </div>

            <div className="cta-buttons">
              <button type="button" className="btn-primary" onClick={(e) => { e.preventDefault(); openModalForDemo(); }}>
                <FontAwesomeIcon icon={faPlay}/> Book a Demo Now
              </button>
              <button className="btn-secondary" onClick={(e) => {e.preventDefault(); openModalForDownload();}}>
                <FontAwesomeIcon icon={faDownload}/> Download Curriculum
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="video-preview">
              <h3>Watch Course Preview</h3>
              <p>Get a glimpse of our comprehensive curriculum and teaching methodology</p>

              {videoCanPlay ? (
                <video 
                  controls 
                  src={course.video} 
                  width="100%"
                  onError={(e) => {
                    console.error('Video failed to load:', e);
                    setVideoCanPlay(false);
                    alert('Failed to load video. Please try again later.');
                  }}
                />
              ) : (
                <div className="play-button" onClick={openModalForVideo} style={{ cursor: "pointer" }}>
                  <FontAwesomeIcon icon={faPlay} />
                </div>
              )}

              <div className="video-stats">
                <div className="video-stat">
                  <div className="video-stat-number">
                    <FontAwesomeIcon icon={faStar} /> 75,000+
                  </div>
                  <div className="video-stat-label">Jobs Available</div>
                </div>
                <div className="video-stat">
                  <div className="video-stat-number">
                    <FontAwesomeIcon icon={faRupeeSign} />28 LPA
                  </div>
                  <div className="video-stat-label">Maximum Salary</div>
                </div>
              </div>

              <div className="course-preview-features">
                <div className="preview-feature">
                  <FontAwesomeIcon icon={faVideo} />
                  <span>100+ Hours Training</span>
                </div>
                <div className="preview-feature">
                  <FontAwesomeIcon icon={faLaptopCode} />
                  <span>Live Projects</span>
                </div>
                <div className="preview-feature">
                  <FontAwesomeIcon icon={faCertificate} />
                  <span>Industry Certificate</span>
                </div>
                <div className="preview-feature">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span>Job Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {isModalOpen && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content-split" onClick={e => e.stopPropagation()}>
          {/* Left Side - Image/Visual */}
          <div className="modal-left-side">
            <div className="modal-visual-content">
              <div className="modal-icon-wrapper">
                <FontAwesomeIcon icon={faGraduationCap} className="modal-main-icon" />
              </div>
              <h3 className="modal-side-title">
                {postAction === "demo" ? "Book A Demo" : "Get Started Today"}
              </h3>
              <p className="modal-side-subtitle">
                {postAction === "demo" 
                  ? "Get personalized guidance for your career goals" 
                  : "Fill in your details and pick your preferred time"}
              </p>
              
              <div className="modal-benefits-list">
                <div className="modal-benefit-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="benefit-check" />
                  <span>{postAction === "demo" ? "Free Career Counseling" : "Instant Access"}</span>
                </div>
                <div className="modal-benefit-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="benefit-check" />
                  <span>{postAction === "demo" ? "Course Recommendations" : "Quality Content"}</span>
                </div>
                <div className="modal-benefit-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="benefit-check" />
                  <span>{postAction === "demo" ? "Industry Insights" : "Expert Support"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="modal-right-side">
            <button className="modal-close-new" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <h2 className="modal-form-title">
              {postAction === "video"
                ? "Get Free Course Preview"
                : postAction === "syllabus"
                ? "Download Syllabus"
                : postAction === "demo"
                ? "Schedule Demo"
                : "Request Access"}
            </h2>
            
            <p className="modal-form-subtitle">
              {postAction === "demo"
                ? "Fill in your details and pick your preferred time"
                : "Please provide your information below"}
            </p>

            <form onSubmit={handleSubmit} className="modal-form-new">
              <div className="form-group-new">
                <input
                  type="text"
                  name="name"
                  className="form-input-new"
                  placeholder="Your Full Name"
                  value={userFormData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group-new">
                <input
                  type="email"
                  name="email"
                  className="form-input-new"
                  placeholder="Email Address"
                  value={userFormData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group-new">
                <input
                  type="tel"
                  name="phone"
                  className="form-input-new"
                  placeholder="Phone Number"
                  value={userFormData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {postAction === "demo" && (
                <>
                  <div className="form-group-new">
                    <label className="form-label-new">Preferred Date & Time</label>
                    
                    <select
                      value={date}
                      onChange={handleDateChange}
                      className="form-input-new"
                      required
                    >
                      <option value="">Choose a date...</option>
                      {generateDateOptions().map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>

                    <div className="time-selector-wrapper">
                      <select
                        value={time}
                        onChange={handleTimeChange}
                        className="form-input-new time-input"
                        required
                      >
                        <option value="">Choose time...</option>
                        {generateTimeOptions().map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>

                      <div className="period-toggle">
                        <button
                          type="button"
                          onClick={() => handlePeriodChange('AM')}
                          className={`period-btn ${period === 'AM' ? 'active' : ''}`}
                        >
                          AM
                        </button>
                        <button
                          type="button"
                          onClick={() => handlePeriodChange('PM')}
                          className={`period-btn ${period === 'PM' ? 'active' : ''}`}
                        >
                          PM
                        </button>
                      </div>
                    </div>

                    <input type="hidden" name="demoDateTime" value={formattedDateTime} />
                  </div>
                </>
              )}

              <div className="form-group-new">
                <textarea
                  name="message"
                  className="form-input-new form-textarea-new"
                  placeholder="Any specific questions or requirements? (Optional)"
                  value={userFormData.message}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn-new">
                {postAction === "video" ? (
                  <>
                    <FontAwesomeIcon icon={faPlay} /> Watch Preview Now
                  </>
                ) : postAction === "syllabus" ? (
                  <>
                    <FontAwesomeIcon icon={faDownload} /> Download Syllabus
                  </>
                ) : postAction === "demo" ? (
                  <>Schedule Consultation</>
                ) : (
                  <>Submit Request</>
                )}
              </button>

              {postAction === "demo" && date && time && (
                <button
                  type="button"
                  className="calendar-btn-new"
                  onClick={() => {
                    const link = createGoogleCalendarLink();
                    if (link) {
                      window.open(link, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faCalendar} /> Add to Google Calendar
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    )}



      {/* Course Details Section  */}
      <section className="course-details">
        <div className="course-container-redesigned">
          <div className="course-main-redesigned">
            {/* Course Overview */}
            <div className="course-overview">
              <h2 className="section-title">Course Overview</h2>
              <div className="ql-editor overview-text" style={{whiteSpace: "pre-wrap"}} dangerouslySetInnerHTML={{ __html: safeHTML }}/>
            </div>

            {/* What You'll Learn */}
            <div className="learning-section">
              <h2 className="section-title">What You'll Learn</h2>
              <div className="learning-grid-redesigned">
                {Array.isArray(course.learn) && course.learn.map((item, i) => (
                  <div className="learning-item-redesigned" key={i}>
                    <div className="learning-icon-redesigned">
                      <FontAwesomeIcon icon={iconMap[item.icon] || faStar} />
                    </div>
                    <div className="learning-content-redesigned">
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Syllabus & Videos - Unified Accordion with Tabs */}
            <div className="course-syllabus-videos-unified">
              <h2 className="section-title">Course Syllabus & Videos</h2>
              
              <div className="course-stats-overview">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={faGraduationCap}/>
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{course.syllabus?.length || 0}</div>
                    <div className="stat-label">Modules</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={faCheckCircle}/>
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">
                      {course.syllabus?.reduce((acc, m) => acc + (m.topics?.length || 0), 0) || 0}
                    </div>
                    <div className="stat-label">Topics</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={faVideo}/>
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{courseVideos.length}</div>
                    <div className="stat-label">Videos</div>
                  </div>
                </div>
              </div>

              <div className="unified-accordion-wrapper">
                {course.syllabus && Array.isArray(course.syllabus) && course.syllabus.length > 0 ? (
                  course.syllabus.map((module, index) => (
                    <div key={index} className={`unified-accordion-item ${expandedModules[index] ? 'expanded' : ''}`}>
                      <div
                        className="unified-accordion-header"
                        onClick={() => toggleModule(index)}
                      >
                        <div className="unified-header-content">
                          <div className="unified-module-info">
                            <span className="unified-module-number">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="unified-module-details">
                              <h3 className="unified-module-title">{module.module}</h3>
                              <span className="unified-counts">
                                {module.topics?.length || 0} Topics • {courseVideos.filter(v => v.moduleName === module.module).length} Videos
                              </span>
                            </div>
                          </div>
                          <FontAwesomeIcon 
                            icon={faChevronDown} 
                            className={`unified-chevron ${expandedModules[index] ? 'rotated' : ''}`}
                          />
                        </div>
                      </div>

                      {expandedModules[index] && (
                        <>
                          {/* Tab Navigation */}
                          <div className="unified-tabs-navigation">
                            <button
                              className={`tab-button ${(activeTabPerModule[index] || 'syllabus') === 'syllabus' ? 'active' : ''}`}
                              onClick={() => switchTab(index, 'syllabus')}
                            >
                              <FontAwesomeIcon icon={faCheckCircle} />
                              <span>Syllabus ({module.topics?.length || 0})</span>
                            </button>
                            <button
                              className={`tab-button ${activeTabPerModule[index] === 'videos' ? 'active' : ''}`}
                              onClick={() => switchTab(index, 'videos')}
                            >
                              <FontAwesomeIcon icon={faPlay} />
                              <span>Videos ({courseVideos.filter(v => v.moduleName === module.module).length})</span>
                            </button>
                          </div>

                          {/* Tab Content - Syllabus */}
                          {(activeTabPerModule[index] || 'syllabus') === 'syllabus' && (
                            <div className="unified-tab-content syllabus-tab">
                              {Array.isArray(module.topics) && module.topics.length > 0 ? (
                                <ul className="unified-topics-list">
                                  {module.topics.map((topic, tIdx) => (
                                    <li key={tIdx} className="unified-topic-item">
                                      <FontAwesomeIcon icon={faCheckCircle} className="unified-check-icon" />
                                      <span className="topic-number">{String(tIdx + 1).padStart(2, '0')}.</span>
                                      <span className="topic-text">{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="unified-empty-state">No topics added for this module.</p>
                              )}
                            </div>
                          )}

                          {/* Tab Content - Videos */}
                          {activeTabPerModule[index] === 'videos' && (
                            <div className="unified-tab-content videos-tab">
                              {module.topics?.map((topic, tIdx) => {
                                const topicVideos = courseVideos.filter(v =>
                                  v.moduleName === module.module && v.topicName === topic
                                );
                                
                                if (topicVideos.length === 0) return null;
                                
                                return (
                                  <div key={tIdx} className="unified-topic-videos">
                                    <h4 className="unified-videos-topic-heading">
                                      <FontAwesomeIcon icon={faChevronRight} className="topic-arrow" />
                                      {topic}
                                    </h4>
                                    <div className="video-items-list">
                                      {topicVideos.map(video => (
                                        <div key={video.id} className="video-item-card">
                                          <div className="video-item-header">
                                            <div className="video-left">
                                              <FontAwesomeIcon 
                                                icon={video.locked ? faLock : faPlayCircle} 
                                                className={`video-item-icon ${video.locked ? 'locked' : 'unlocked'}`}
                                              />
                                              <span className="video-item-name">{video.title}</span>
                                            </div>
                                            {video.locked && (
                                              <span className="video-locked-badge">
                                                <FontAwesomeIcon icon={faLock} /> Locked
                                              </span>
                                            )}
                                          </div>
                                          {!video.locked && video.video_url && (
                                            <div className="video-item-player-wrapper">
                                              <video 
                                                controls 
                                                className="video-item-player"
                                                src={video.video_url}
                                              />
                                            </div>
                                          )}
                                          {video.locked && (
                                            <div className="video-item-locked">
                                              <FontAwesomeIcon icon={faLock} />
                                              <p>Enroll in this course to unlock this video</p>
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                              {courseVideos.filter(v => v.moduleName === module.module).length === 0 && (
                                <p className="unified-empty-state">No videos available for this module.</p>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No syllabus available.</p>
                )}
              </div>
            </div>
            </div>

          {/* Sidebar*/}
          <div className="course-sidebar-redesigned">
            {/* Pricing Card */}
            <div className="pricing-card-sticky">
              <div className="pricing-header">
                <div className="price-main">₹{course.discountPrice || course.price}</div>
                {course.discountPrice && (
                  <div className="price-details">
                    <span className="original-price">₹{course.price}</span>
                    <span className="discount-badge">Save ₹{course.price - course.discountPrice}</span>
                  </div>
                )}
              </div>
  
              {countdownHoursLeft > 0 && (
                <div className="countdown-alert">
                  <FontAwesomeIcon icon={faClock} /> {countdownHoursLeft} hours left at this price!
                </div>
              )}
  
              <div className="price-breakdown">
                <div className="price-row">
                  <span>Base Price</span>
                  <span>₹{basePrice}</span>
                </div>
                <div className="price-row">
                  <span>GST (18%)</span>
                  <span>₹{gstAmount}</span>
                </div>
                <div className="price-row total">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>

              {isEnrolled ? (
                <button className="enroll-btn enrolled" disabled>
                  <FontAwesomeIcon icon={faGraduationCap} /> Enrolled
                </button>
              ) : (
                <button className="enroll-btn" onClick={handleEnrollClick}>
                  <FontAwesomeIcon icon={faGraduationCap} /> Enroll Now
                </button>
              )}

              <button className="download-btn-sidebar" onClick={(e) => {e.preventDefault(); openModalForDownload();}}>
                <FontAwesomeIcon icon={faDownload}/> Download Curriculum
              </button>

              {/* Course Info */}
              <div className="course-info-sidebar">
                <h4>Course Details</h4>
                <div className="info-item-sidebar">
                  <FontAwesomeIcon icon={faClock} className="info-icon-sidebar" />
                  <div>
                    <strong>Duration</strong>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="info-item-sidebar">
                  <FontAwesomeIcon icon={faLaptop} className="info-icon-sidebar" />
                  <div>
                    <strong>Mode</strong>
                    <span>{Array.isArray(course.mode) ? course.mode.join(", ") : course.mode}</span>
                  </div>
                </div>
                <div className="info-item-sidebar">
                  <FontAwesomeIcon icon={faUser} className="info-icon-sidebar" />
                  <div>
                    <strong>Instructor</strong>
                    <span>{course.instructor}</span>
                  </div>
                </div>
                <div className="info-item-sidebar">
                  <FontAwesomeIcon icon={faCalendar} className="info-icon-sidebar" />
                  <div>
                    <strong>Next Batch</strong>
                    <span>{course.nextBatch}</span>
                  </div>
                </div>
              </div>

              {/* Course Features */}
              <div className="features-sidebar">
                <h4>Course Features</h4>
                <div className="features-list-sidebar">
                  {Array.isArray(course.features) && course.features.map((feature, idx) => (
                    <div key={idx} className="feature-item-sidebar">
                      <FontAwesomeIcon icon={faCheckCircle} className="feature-check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div className="instructor-card-sidebar">
                <div className="instructor-avatar-sidebar">
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
                <h4 className="instructor-name-sidebar">{course.instructor}</h4>
                <p className="instructor-bio-sidebar">{course.instructorBio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="companies">
        <div className="companies-container">
          <h2>Our learners work at top companies worldwide</h2>
          <div className="companies-grid">
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <text x="10" y="14" fill="#4285f4" fontFamily="Product Sans, Arial" fontSize="11" fontWeight="700">G</text>
                <text x="18" y="14" fill="#ea4335" fontFamily="Product Sans, Arial" fontSize="11" fontWeight="700">o</text>
                <text x="26" y="14" fill="#fbbc04" fontFamily="Product Sans, Arial" fontSize="11" fontWeight="700">o</text>
                <text x="34" y="14" fill="#4285f4" fontFamily="Product Sans, Arial" fontSize="11" fontWeight="700">g</text>
                <text x="41" y="14" fill="#34a853" fontFamily="Product Sans, Arial" fontSize="11" fontWeight="700">l</text>
                <text x="45" y="14" fill="#ea4335" fontFamily="Product Sans, Arial" fontSize="11" fontWeight="700">e</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <rect x="10" y="10" width="10" height="10" fill="#f25022"/>
                <rect x="21" y="10" width="10" height="10" fill="#7fba00"/>
                <rect x="10" y="21" width="10" height="10" fill="#00a4ef"/>
                <rect x="21" y="21" width="10" height="10" fill="#ffb900"/>
                <text x="36" y="23" fill="#5e5e5e" fontFamily="Segoe UI, Arial" fontSize="12" fontWeight="600">Microsoft</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <path d="M30 25c-3 2-7 3-10 3-5 0-9-2-12-5 8 0 15-2 22-4v6z" fill="#FF9900"/>
                <path d="M32 18c-2-3-5-5-9-5-5 0-9 4-9 9s4 9 9 9c2 0 4-1 6-2" fill="#232F3E" stroke="#232F3E" strokeWidth="0.5"/>
                <text x="38" y="23" fill="#232F3E" fontFamily="Amazon Ember, Arial" fontSize="13" fontWeight="700">amazon</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <circle cx="15" cy="20" r="7" fill="#0081FB"/>
                <path d="M22 13v14l12-7z" fill="url(#metaGrad)"/>
                <defs>
                  <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0081FB"/>
                    <stop offset="100%" stopColor="#0064E0"/>
                  </linearGradient>
                </defs>
                <text x="40" y="23" fill="#0081FB" fontFamily="Helvetica, Arial" fontSize="14" fontWeight="700">Meta</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <path d="M10 12h5v16h-5z M17 12h5v16h-5z M24 12h5v16h-5z" fill="#E50914"/>
                <text x="35" y="23" fill="#E50914" fontFamily="Netflix Sans, Arial" fontSize="14" fontWeight="700">NETFLIX</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <path d="M10 10v20l10-10z" fill="#FF0000"/>
                <path d="M20 10v20l-10-10z" fill="#FF3366"/>
                <text x="26" y="23" fill="#FF0000" fontFamily="Adobe Clean, Arial" fontSize="13" fontWeight="700">Adobe</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <circle cx="20" cy="20" r="10" fill="#1DB954"/>
                <circle cx="15" cy="18" r="2" fill="#191414"/>
                <circle cx="20" cy="18" r="2" fill="#191414"/>
                <circle cx="25" cy="18" r="2" fill="#191414"/>
                <path d="M13 22c2 2 5 2 7 0" stroke="#191414" strokeWidth="1.5" fill="none"/>
                <text x="35" y="23" fill="#1DB954" fontFamily="Circular, Arial" fontSize="13" fontWeight="700">Spotify</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <rect x="10" y="12" width="18" height="16" rx="2" fill="#000000"/>
                <rect x="12" y="18" width="14" height="2" fill="#FFFFFF"/>
                <text x="32" y="23" fill="#000000" fontFamily="Uber Move, Arial" fontSize="14" fontWeight="700">Uber</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {showPaymentModal && (
        <PaymentModal
          course={course}
          amount={totalPrice}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={(res) => {
            try { setVideoCanPlay(true); } catch (e) {}
            alert('Enrollment successful!');
          }}
        />
      )}

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} initialMode="login" />
      )}

      {/* Related Courses */}
      <section className="related-courses">
        <div className="related-container">
          <h2 className="section-title" style={{textAlign: "center"}}>Related Courses</h2>
          <p style={{textAlign: "center", color: "#666", fontSize: "1.1rem", marginBottom: "2rem"}}>Explore other popular courses similar to this program.</p>
          
          {relatedCourses.length === 0 ? (
            <p style={{textAlign: "center", color: "#888"}}>No related courses found.</p>
          ) : (
            <div className="courses-grid">
              {relatedCourses.map((c) => {
                const descText = (c.subtitle || c.description || '')
                  .replace(/<[^>]*>?/gm, '')
                  .replace(/&nbsp;/g, ' ')
                  .replace(/\s+/g, ' ')
                  .trim()
                  .slice(0, 200);
                
                return (
                  <div key={c.id} className="course-card">
                    <div className="course-card-header">
                      <div className="course-icon">
                        <FontAwesomeIcon icon={faLaptopCode} />
                      </div>
                      <h3>{c.title}</h3>
                    </div>

                    <p className="course-card-description" style={{
                      color: '#666',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      margin: '1rem 0',
                      minHeight: '4.8em',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {descText || 'Enhance your skills with this comprehensive course designed for modern professionals. Learn practical techniques and gain hands-on experience.'}
                    </p>

                    <div className="course-card-meta">
                      <div className="course-rating">
                        {c.rating ? (
                          <>
                            <FontAwesomeIcon icon={faStar} style={{color: "#ffa500"}} />
                            <span>{c.rating}</span>
                            <span style={{color: '#999'}}>({c.studentsCount || 0})</span>
                          </>
                        ) : (
                          <span style={{color: '#999'}}>No ratings yet</span>
                        )}
                      </div>
                      
                      <p className="course-card-subtitle">
                        {c.category} {c.level && `• ${c.level}`}
                      </p>
                    </div>

                    <div className="course-card-footer">
                      <div className="course-card-price">₹{c.discountPrice || c.price}</div>
                      <button
                        className="view-course-btn"
                        onClick={() => navigate(`/course/${c.slug}`)}
                      >
                        View Course
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
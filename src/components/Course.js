import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendar,  faCertificate, faChalkboardTeacher, faChartLine, faChevronDown, faClock, faCloud, faDatabase, faDownload, faGraduationCap, faHeadset, faLaptop, faLaptopCode, faMobileAndroid, faPlay, faRupeeSign, faServer, faStar, faUser, faUserTie, faVideo, faTimes } from "@fortawesome/free-solid-svg-icons";
import './Course.css';

export default function Course() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const toggleSyllabus = (element) => {
    const content = element.parentElement.querySelector('.syllabus-content');
    const icon = element.querySelector('svg');
    
    if (content.style.display === 'block') {
      content.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';
    } else {
      content.style.display = 'block';
      icon.style.transform = 'rotate(180deg)';
    }
  };

  return (
    <>
      
      {/* Hero Section */}
      <section className="hero mt-5 mb-5">
        {/* Floating Elements */}
        <div className="floating-element floating-1">
          <div className="floating-icon">
            <i className="fab fa-react"></i>
          </div>
        </div>
        <div className="floating-element floating-2">
          <div className="floating-icon">
            <i className="fab fa-node-js"></i>
          </div>
        </div>
        <div className="floating-element floating-3">
          <div className="floating-icon">
            <FontAwesomeIcon icon={faDatabase}/>
          </div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="job-ready-badge">
              <FontAwesomeIcon icon={faStar}/> Job Ready Program
            </div>
            <h1>Full Stack Web Development Mastery Program</h1>
            <p className="hero-subtitle">Complete Full Stack Developer Course</p>
            <p className="hero-description">
              Master modern web development with hands-on projects and industry-expert mentorship. 
              Build real-world applications and launch your career as a skilled Full Stack Developer 
              with comprehensive training in frontend, backend, and database technologies.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">
                  <FontAwesomeIcon icon={faStar}/> 4.9
                </div>
                <div className="stat-label">(28,500+ Reviews)</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <FontAwesomeIcon icon={faUser}/> 35K+
                </div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <FontAwesomeIcon icon={faChalkboardTeacher}/> 20+
                </div>
                <div className="stat-label">Expert Mentors</div>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="#demo" className="btn-primary">
                <FontAwesomeIcon icon={faPlay}/> Book a Demo Now
              </a>
              <a href="#curriculum" className="btn-secondary">
                <FontAwesomeIcon icon={faDownload}/> Download Curriculum
              </a>
            </div>
          </div>

          <div className="hero-visual">
            {/* Video Preview Section */}
            <div className="video-preview">
              <h3>Watch Course Preview</h3>
              <p>Get a glimpse of our comprehensive curriculum and teaching methodology</p>
              
              <div className="play-button" onClick={handleVideoClick}>
                <FontAwesomeIcon icon={faPlay}/>
              </div>

              <div className="video-stats">
                <div className="video-stat">
                  <div className="video-stat-number">
                    <FontAwesomeIcon icon={faStar}/> 75,000+
                  </div>
                  <div className="video-stat-label">Jobs Available</div>
                </div>
                <div className="video-stat">
                  <div className="video-stat-number">
                    <FontAwesomeIcon icon={faRupeeSign}/> ₹28 LPA
                  </div>
                  <div className="video-stat-label">Maximum Salary</div>
                </div>
              </div>

              <div className="course-preview-features">
                <div className="preview-feature">
                  <FontAwesomeIcon icon={faVideo}/>
                  <span>100+ Hours Training</span>
                </div>
                <div className="preview-feature">
                  <FontAwesomeIcon icon={faLaptopCode}/>
                  <span>Live Projects</span>
                </div>
                <div className="preview-feature">
                  <FontAwesomeIcon icon={faCertificate}/>
                  <span>Industry Certificate</span>
                </div>
                <div className="preview-feature">
                  <FontAwesomeIcon icon={faBriefcase}/>
                  <span>Job Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes}/>
            </button>
            <h2 className="modal-title">Get Free Course Preview</h2>
            <p style={{textAlign: 'center', marginBottom: '1.5rem', color: '#666'}}>
              Fill in your details to watch the complete course preview and get exclusive content access
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Any specific questions or requirements? (Optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <FontAwesomeIcon icon={faPlay}/> Watch Preview Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Course Details Section */}
      <section className="course-details">
        <div className="course-container">
          <div className="course-main">
            {/* Course Overview */}
            <div className="course-overview">
              <h2 className="section-title">Course Overview</h2>
              <p className="overview-text">
                Our comprehensive Full Stack Web Development training program is designed to provide you with in-depth 
                knowledge of modern web technologies. This course covers all major functionalities of Full Stack development 
                including Frontend, Backend, Database design, APIs, Authentication, and deployment strategies.
              </p>
              <p className="overview-text">
                With hands-on training on the latest frameworks and tools, real-time project experience, and dedicated 
                placement assistance, this course prepares you for a successful career as a Full Stack Web Developer.
              </p>
            </div>

            {/* Course Syllabus */}
            <div className="course-syllabus">
              <h2 className="section-title">Course Syllabus</h2>
              
              <div className="syllabus-item">
                <div className="syllabus-header" onClick={(e) => toggleSyllabus(e.currentTarget)}>
                  <span className="syllabus-title">Module 1: Frontend Fundamentals (HTML, CSS, JavaScript)</span>
                  <FontAwesomeIcon icon={faChevronDown}/>
                </div>
                <div className="syllabus-content">
                  <p>Master the building blocks of web development with HTML5, CSS3, and modern JavaScript ES6+. Learn responsive design, CSS Grid, Flexbox, and DOM manipulation.</p>
                </div>
              </div>

              <div className="syllabus-item">
                <div className="syllabus-header" onClick={(e) => toggleSyllabus(e.currentTarget)}>
                  <span className="syllabus-title">Module 2: React.js & Modern Frontend</span>
                  <FontAwesomeIcon icon={faChevronDown}/>
                </div>
                <div className="syllabus-content">
                  <p>Build dynamic user interfaces with React.js, learn hooks, state management, routing, and modern development practices with Vite and TypeScript.</p>
                </div>
              </div>

              <div className="syllabus-item">
                <div className="syllabus-header" onClick={(e) => toggleSyllabus(e.currentTarget)}>
                  <span className="syllabus-title">Module 3: Backend Development (Node.js & Express)</span>
                  <FontAwesomeIcon icon={faChevronDown}/>
                </div>
                <div className="syllabus-content">
                  <p>Create robust server-side applications with Node.js and Express.js. Learn API development, middleware, authentication, and security best practices.</p>
                </div>
              </div>

              <div className="syllabus-item">
                <div className="syllabus-header" onClick={(e) => toggleSyllabus(e.currentTarget)}>
                  <span className="syllabus-title">Module 4: Database Management (MongoDB & SQL)</span>
                  <FontAwesomeIcon icon={faChevronDown}/>
                </div>
                <div className="syllabus-content">
                  <p>Master both SQL and NoSQL databases. Learn MongoDB, Mongoose, PostgreSQL, database design, queries, and optimization techniques.</p>
                </div>
              </div>

              <div className="syllabus-item">
                <div className="syllabus-header" onClick={(e) => toggleSyllabus(e.currentTarget)}>
                  <span className="syllabus-title">Module 5: Full Stack Integration & Deployment</span>
                  <FontAwesomeIcon icon={faChevronDown}/>
                </div>
                <div className="syllabus-content">
                  <p>Connect frontend and backend, implement authentication, deploy applications on cloud platforms like AWS, Heroku, and Vercel.</p>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="what-learn">
              <h2 className="section-title">What You'll Learn</h2>
              
              <div className="learning-grid">
                <div className="learning-item">
                  <div className="learning-icon">
                    <FontAwesomeIcon icon={faStar}/>
                  </div>
                  <div className="learning-content">
                    <h3>Frontend Mastery</h3>
                    <p>Master modern frontend technologies including React, Vue.js, HTML5, CSS3, and JavaScript ES6+ with responsive design principles.</p>
                  </div>
                </div>

                <div className="learning-item">
                  <div className="learning-icon">
                    <FontAwesomeIcon icon={faServer}/>
                  </div>
                  <div className="learning-content">
                    <h3>Backend Development</h3>
                    <p>Build scalable server-side applications with Node.js, Express.js, and learn API development, authentication, and security.</p>
                  </div>
                </div>

                <div className="learning-item">
                  <div className="learning-icon">
                    <FontAwesomeIcon icon={faDatabase}/>
                  </div>
                  <div className="learning-content">
                    <h3>Database Management</h3>
                    <p>Work with both SQL and NoSQL databases, learn MongoDB, PostgreSQL, and master database design and optimization.</p>
                  </div>
                </div>

                <div className="learning-item">
                  <div className="learning-icon">
                    <FontAwesomeIcon icon={faCloud}/>
                  </div>
                  <div className="learning-content">
                    <h3>Cloud Deployment</h3>
                    <p>Deploy applications on cloud platforms, learn CI/CD, Docker, and modern DevOps practices for production environments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="course-sidebar">
            {/* Pricing Card */}
            <div className="pricing-card">
              <div className="price">₹25,999</div>
              <div className="original-price">₹35,999</div>
              <div className="discount">Save ₹10,000</div>

              {/* Course Info */}
              <div className="course-info">
                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faClock}/>
                  </div>
                  <div>
                    <strong>Duration:</strong><br/>
                    6 Months
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faLaptop}/>
                  </div>
                  <div>
                    <strong>Mode:</strong><br/>
                    Online/Offline
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faUser}/>
                  </div>
                  <div>
                    <strong>Batch Size:</strong><br/>
                    Max 20 Students
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faCalendar}/>
                  </div>
                  <div>
                    <strong>Next Batch:</strong><br/>
                    15th Sept 2025
                  </div>
                </div>
              </div>

              <button className="enroll-btn" onClick={() => alert('Enrollment process started!')}>
                <FontAwesomeIcon icon={faGraduationCap}/> Enroll Now
              </button>

              <button className="download-btn" onClick={() => alert('Syllabus download started!')}>
                <FontAwesomeIcon icon={faDownload}/> Download Syllabus
              </button>
            </div>

            {/* Course Features */}
            <div className="pricing-card">
              <h3 style={{marginBottom: "1.5rem"}}>Course Features</h3>
              <div className="features-grid" style={{gridTemplateColumns: "1fr"}}>
                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faPlay}/>
                  </div>
                  <span>100+ Hours of Training</span>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faUser}/>
                  </div>
                  <span>Expert Industry Trainers</span>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faLaptopCode}/>
                  </div>
                  <span>Live Project Experience</span>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faCertificate}/>
                  </div>
                  <span>Industry Certificate</span>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faBriefcase}/>
                  </div>
                  <span>Job Placement Support</span>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faHeadset}/>
                  </div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Instructor */}
            <div className="instructor-card">
              <div className="instructor-avatar">
                <FontAwesomeIcon icon={faUserTie}/>
              </div>
              <h3 className="instructor-name">Rajesh Kumar</h3>
              <p className="instructor-title">Senior Full Stack Developer</p>
              <p className="instructor-experience">
                12+ years experience in Full Stack development across various industries. 
                Former Senior Developer at Google and Microsoft.
              </p>
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
                <text x="60" y="25" textAnchor="middle" fill="#4285f4" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Google</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <text x="60" y="25" textAnchor="middle" fill="#00a1f1" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Microsoft</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <text x="60" y="25" textAnchor="middle" fill="#ff9900" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Amazon</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <text x="60" y="25" textAnchor="middle" fill="#1877f2" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Meta</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <text x="60" y="25" textAnchor="middle" fill="#e50914" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Netflix</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <text x="60" y="25" textAnchor="middle" fill="#ff0000" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Adobe</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <text x="60" y="25" textAnchor="middle" fill="#1ed760" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Spotify</text>
              </svg>
            </div>
            <div className="company-logo">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <text x="60" y="25" textAnchor="middle" fill="#000000" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Uber</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="related-courses">
        <div className="related-container">
          <h2 className="section-title" style={{textAlign: "center"}}>Related Courses</h2>
          <p style={{textAlign: "center", color: "#666", fontSize: "1.1rem", marginBottom: "2rem"}}>Explore other popular courses</p>
          
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-card-header">
                <div className="course-icon">
                  <i className="fab fa-python"></i>
                </div>
                <div>
                  <h3>Python Full Stack Development</h3>
                  <div className="course-rating">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <span>4.8 (2,450)</span>
                  </div>
                </div>
              </div>
              <p style={{color: "#666", marginBottom: "1rem"}}>Master Django, Flask, PostgreSQL, and modern Python web development with hands-on projects.</p>
              <div className="course-card-price">₹18,999</div>
              <button className="view-course-btn">View Course</button>
            </div>

            <div className="course-card">
              <div className="course-card-header">
                <div className="course-icon">
                  <FontAwesomeIcon icon={faMobileAndroid}/>
                </div>
                <div>
                  <h3>Mobile App Development</h3>
                  <div className="course-rating">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <span>4.7 (1,890)</span>
                  </div>
                </div>
              </div>
              <p style={{color: "#666", marginBottom: "1rem"}}>Build native iOS and Android apps using React Native and Flutter with backend integration.</p>
              <div className="course-card-price">₹22,999</div>
              <button className="view-course-btn">View Course</button>
            </div>

            <div className="course-card">
              <div className="course-card-header">
                <div className="course-icon">
                  <FontAwesomeIcon icon={faChartLine}/>
                </div>
                <div>
                  <h3>Data Science & Analytics</h3>
                  <div className="course-rating">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <span>4.9 (3,200)</span>
                  </div>
                </div>
              </div>
              <p style={{color: "#666", marginBottom: "1rem"}}>Learn Python, R, Machine Learning, AI, and data visualization with real industry projects.</p>
              <div className="course-card-price">₹28,999</div>
              <button className="view-course-btn">View Course</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
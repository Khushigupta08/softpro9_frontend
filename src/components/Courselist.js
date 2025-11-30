import { BarChart3, Clock, Code2, Heart, PlayCircle, Search, User, Star, List } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../authContext";
import AuthModal from "../pages/AuthModal";
import PaymentModal from "./PaymentModal";
import eventBus from '../utils/eventBus';
import axios from "axios";
import EnrollmentFormModal from './EnrollmentFormModal';
import 'react-quill-new/dist/quill.snow.css';
import he from 'he';
import { Helmet } from 'react-helmet-async';
import ScrollArrowButton from './ScrollArrowButton';

export default function Courselist() {
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingCourse, setPendingCourse] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentCourse, setPaymentCourse] = useState(null);
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [enrollmentPendingCourse, setEnrollmentPendingCourse] = useState(null);
  const [enrolledIds, setEnrolledIds] = useState(new Set());
  const [savedIds, setSavedIds] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(6);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchSaved();
      // if there is a pending course action (user clicked like while logged out), perform it now
      if (pendingCourse) {
        toggleSave(pendingCourse);
        setPendingCourse(null);
        setShowAuthModal(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  // fetch current student's enrolled courses
  const fetchEnrollments = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const res = await axios.get('http://localhost:5000/api/enrollments/student', { headers: { Authorization: `Bearer ${token}` } });
      const ids = new Set((res.data || []).map(c => Number(c.id)));
      setEnrolledIds(ids);
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchEnrollments();
  }, [isAuthenticated]);

  // listen for enrollment changes (from PaymentModal)
  useEffect(() => {
    const handler = (payload) => {
      if (payload && payload.courseId) {
        setEnrolledIds(prev => new Set([...prev, Number(payload.courseId)]));
      }
      // refresh server-side list too
      fetchEnrollments();
    };
    try { eventBus.on('enrollment:changed', handler); } catch (e) {}
    return () => { try { eventBus.off('enrollment:changed', handler); } catch (e) {} };
  }, []);

  // if user logged in after clicking enroll, open payment modal for that pending course
  useEffect(() => {
    if (isAuthenticated && pendingCourse && paymentCourse == null) {
      // if pendingCourse is not a save action but an enroll action, we use a reserved object shape
      if (pendingCourse && pendingCourse._enroll) {
        setPaymentCourse(pendingCourse.course);
        setShowPaymentModal(true);
        setPendingCourse(null);
      }
    }
  }, [isAuthenticated, pendingCourse, paymentCourse]);

  const fetchSaved = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const res = await axios.get('http://localhost:5000/student/saved-courses', { headers: { Authorization: `Bearer ${token}` } });
      const ids = new Set((res.data || []).map(c => Number(c.id)));
      setSavedIds(ids);
    } catch (err) {
      // ignore
    }
  };

  const toggleSave = async (courseId) => {
    // if not logged in, open modal and set pending
    if (!isAuthenticated) {
      setPendingCourse(courseId);
      setShowAuthModal(true);
      return;
    }

    try {
      // optimistic UI
      setSavedIds(prev => {
        const next = new Set(prev);
        if (next.has(courseId)) next.delete(courseId); else next.add(courseId);
        return next;
      });

      const token = localStorage.getItem('token');
      const res = await axios.post(`http://localhost:5000/student/saved-courses/${courseId}`, {}, { headers: { Authorization: `Bearer ${token}` } });

      // reflect server result (in case of mismatch)
      if (res.data && typeof res.data.saved === 'boolean') {
        setSavedIds(prev => {
          const next = new Set(prev);
          if (res.data.saved) next.add(courseId); else next.delete(courseId);
          return next;
        });
      }
    } catch (err) {
      // revert optimistic
      setSavedIds(prev => {
        const next = new Set(prev);
        if (next.has(courseId)) next.delete(courseId); else next.add(courseId);
        return next;
      });
      alert('Failed to save course. Please try again.');
    }
  };

  const fetchCourses = async () => {
    try {
      console.log("🔍 Fetching courses...");
      const res = await axios.get("http://localhost:5000/api/courses");
      console.log("✅ Courses fetched:", res.data);
      console.log("📊 Count:", res.data.length);
      setCourses(res.data);
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Failed to load courses: " + err.message);
    }
  };

  const handleEnrollNow = (course) => {
    if (!isAuthenticated) {
      setPendingCourse({ _enroll: true, course });
      setShowAuthModal(true);
      return;
    }
    // check if enrollment form already filled
    (async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/student/auth/me', { headers: { Authorization: `Bearer ${token}` } });
        const user = res.data;
        if (user && user.enrollmentFormFilled) {
          setPaymentCourse(course);
          setShowPaymentModal(true);
        } else {
          // show form first, then payment
          setEnrollmentPendingCourse(course);
          setShowEnrollmentForm(true);
        }
      } catch (err) {
        // fallback: show payment if profile cannot be fetched
        setPaymentCourse(course);
        setShowPaymentModal(true);
      }
    })();
  };

  // Filter courses by category tab and search query
  const filteredCourses = courses.filter(course => {
    // Category filter - make it case-insensitive and flexible
    let categoryMatch = true;
    if (activeTab !== "all") {
      const courseCategory = (course.category || "").toLowerCase().trim();
      const activeCategory = activeTab.toLowerCase().trim();
      
      // Check for exact match or partial match
      categoryMatch = courseCategory === activeCategory || 
                     courseCategory.includes(activeCategory) ||
                     activeCategory.includes(courseCategory);
    }
    
    // Search filter
    if (searchQuery.trim() === "") return categoryMatch;
    
    const query = searchQuery.toLowerCase();
    const titleMatch = (course.title || "").toLowerCase().includes(query);
    const subtitleMatch = (course.subtitle || "").toLowerCase().includes(query);
    const categoryNameMatch = (course.category || "").toLowerCase().includes(query);
    const instructorMatch = (course.instructor || "").toLowerCase().includes(query);
    
    // Decode and strip HTML from description for search
    const decodedDesc = he.decode(course.description || "");
    const plainDesc = stripHtml(decodedDesc);
    const descMatch = plainDesc.toLowerCase().includes(query);
    
    return categoryMatch && (titleMatch || subtitleMatch || categoryNameMatch || instructorMatch || descMatch);
  });

  // Slice to show only displayCount courses
  const displayedCourses = filteredCourses.slice(0, displayCount);
  const hasMore = filteredCourses.length > displayCount;

  // Helper to truncate description to 100 chars safely (plain text)
  function stripHtml(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }

  return (
    <>
              <ScrollArrowButton />

      <Helmet>
        <title>Courses - SoftPro9 Academy | Explore Our Programs</title>
        <meta name="description" content="Browse career-ready courses at SoftPro9 Academy covering web development, data science, mobile apps, and more." />
        <meta name="keywords" content="SoftPro9 courses, online courses, web development course, data science course" />
        <link rel="canonical" href={window.location.origin + window.location.pathname} />
        <meta property="og:title" content="SoftPro9 Academy Courses" />
        <meta property="og:description" content="Browse career-ready courses at SoftPro9 Academy covering web development, data science, mobile apps, and more." />
        <meta property="og:image" content={window.location.origin + '/images/about_softpro_image1.avif'} />
      </Helmet>
      {/* Hero Section  */}
      <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Courses</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Choose from our comprehensive collection of industry-focused courses designed to accelerate your career growth
          </p>
          {/* Search Bar  */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              id="searchInput"
              placeholder="Search courses, skills, or technologies..."
              className="w-full px-6 py-4 text-gray-900 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(6); // Reset to 6 when search changes
              }}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Filters & Course Grid  */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {[
              { id: "all", label: "All Courses" },
              { id: "web", label: "Web Development" },
              { id: "mobile", label: "Mobile Development" },
              { id: "data", label: "Data Science" },
              { id: "design", label: "UI/UX Design" },
              { id: "marketing", label: "Marketing" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setDisplayCount(6); // Reset to 6 when tab changes
                }}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 border hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {activeTab === "all"
                  ? "All Courses"
                  : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Courses`}
              </h2>
              <p className="text-gray-600">Showing courses</p>
            </div>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Sort by: Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
              <div className="flex border border-gray-300 rounded-lg">
                <button className="p-2 hover:bg-gray-100 border-r bg-purple-100">
                  <i data-lucide="grid-3x3" className="w-5 h-5"></i>
                </button>
                <button className="p-2 hover:bg-gray-100">
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCourses.length === 0 && (
              <p className="text-center col-span-full text-gray-500">
                {searchQuery ? "No courses found matching your search" : "No courses to display"}
              </p>
            )}

            {displayedCourses.map(course => {
              // get safe truncated description text
              const decodedHtml = he.decode(course.description || "");
              const plainDesc = stripHtml(decodedHtml);
              const truncatedDesc = plainDesc.length > 100 ? plainDesc.substring(0, 100) + "..." : plainDesc;
                
              return (
                <Link
                  key={course.id}
                  to={`/course/${course.slug}`}
                  className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="relative">
                    {/* Show image if available, otherwise show blue placeholder with title */}
                    { (course.backgroundImageUrl && course.backgroundImageUrl !== "null" && course.backgroundImageUrl.trim() !== "") || (course.backgroundImageFile && course.backgroundImageFile !== "null" && course.backgroundImageFile.trim() !== "") ? (
                      <div
                        className="course-banner-image"
                        style={{
                          backgroundImage: course.backgroundImageUrl && course.backgroundImageUrl.trim() !== "" ? `url(${course.backgroundImageUrl})` : `url(${("http://localhost:5000/" + course.backgroundImageFile).replace(/\\/g, "/")})`,
                          height: 192
                        }}
                      />
                    ) : (
                      <div className="course-banner-placeholder" style={{height: 192}}>
                        <h4 className="course-banner-title">{course.title}</h4>
                      </div>
                    )}

                    <button
                      className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-50"
                      onClick={e => {e.preventDefault(); e.stopPropagation(); toggleSave(course.id);}}
                      aria-label={savedIds.has(course.id) ? 'Unsave course' : 'Save course'}
                    >
                      <Heart className={`w-5 h-5 ${savedIds.has(course.id) ? 'text-red-500' : 'text-gray-600'}`} />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-purple-600 mb-2">
                      <Code2 className="w-4 h-4" />
                      <span>{course.category.charAt(0).toUpperCase() + course.category.slice(1)}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{course.subtitle || course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{truncatedDesc}</p>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {course.duration}</span>
                      <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {course.instructor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-yellow-400">
                        {[...Array(Math.round(course.rating))].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                        <span className="text-gray-600 text-sm ml-1">({course.studentsCount || 0})</span>
                      </div>
                      <span className="font-bold text-purple-600">₹{course.discountPrice || course.price}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        className="flex items-center text-purple-600 hover:text-purple-700"
                        onClick={e => {e.preventDefault(); e.stopPropagation();}}
                      >
                        <PlayCircle className="w-4 h-4 mr-1" /> Preview
                      </button>
                      {enrolledIds.has(Number(course.id)) ? (
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg cursor-not-allowed" disabled>
                          Enrolled
                        </button>
                      ) : (
                        <button
                          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                          onClick={e => {e.preventDefault(); e.stopPropagation(); handleEnrollNow(course);}}
                        >
                          Enroll Now
                        </button>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          {hasMore && (
            <button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => setDisplayCount(prev => prev + 6)}
            >
              Load More Courses
            </button>
          )}
          <p className="text-gray-500 mt-4">
            Showing <span>{displayedCourses.length}</span> of <span>{filteredCourses.length}</span> courses
          </p>
        </div>
      </div>
    </section>

    {showAuthModal && (
      <AuthModal onClose={() => setShowAuthModal(false)} initialMode="login" />
    )}

    {showEnrollmentForm && enrollmentPendingCourse && (
      <EnrollmentFormModal
        onClose={() => { setShowEnrollmentForm(false); setEnrollmentPendingCourse(null); }}
        onSubmitted={(user) => {
          // after successful submission, open payment modal for pending course
          setShowEnrollmentForm(false);
          setPaymentCourse(enrollmentPendingCourse);
          setShowPaymentModal(true);
          setEnrollmentPendingCourse(null);
        }}
      />
    )}

    {showPaymentModal && paymentCourse && (
      <PaymentModal
        course={paymentCourse}
        amount={Math.round((paymentCourse.discountPrice || paymentCourse.price) * 1.18)}
        onClose={() => setShowPaymentModal(false)}
        onSuccess={() => {
          alert('Enrollment successful!');
          setShowPaymentModal(false);
        }}
      />
    )}

      {/* Newsletter Section  */}
    <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with New Courses</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Get notified when we launch new courses and exclusive offers. Join 10,000+ learners already subscribed.
            </p>
            <div className="max-w-md mx-auto flex">
                <input type="email" id="newsletterEmail" placeholder="Enter your email address" 
                       className="flex-1 px-6 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-300"/>
                <button id="subscribeBtn" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-r-lg font-semibold transition-colors">
                    Subscribe
                </button>
            </div>
        </div>
    </section>

    </>
  )
}
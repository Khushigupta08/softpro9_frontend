import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import logo from "../assets/SoftPro9-Main-Logo-1.png";

// ✅ Footer Locations Widget with SAP/Non-SAP separation
function FooterLocationsWidget({ showSAPLocations = false }) {
  const [nonSAPLocations, setNonSAPLocations] = useState([]);
  const [sapLocations, setSAPLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLocations();
  }, []);

  const loadLocations = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/locations?isActive=true');
      const data = await response.json();
      
      if (data.success) {
        // Separate SAP and Non-SAP locations, max 8 each
        const nonSAP = data.data.filter(loc => !loc.isSAP).slice(0, 8);
        const sap = data.data.filter(loc => loc.isSAP).slice(0, 8);
        
        setNonSAPLocations(nonSAP);
        setSAPLocations(sap);
      }
    } catch (error) {
      console.error('Error loading footer locations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="text-gray-400 text-sm">Loading locations...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* NON-SAP Training Locations - Show on ALL pages */}
      {nonSAPLocations.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="font-semibold mb-4 text-lg">Our Training Locations</h4>
          <div className="text-gray-400 text-sm leading-relaxed">
            {nonSAPLocations.map((location, index) => (
              <span key={location.slug}>
                <Link 
                  to={`/location/${location.slug}`} 
                  onClick={handleLinkClick} 
                  className="hover:text-white transition-colors"
                >
                  {location.course} in {location.location.split(',')[0]}
                </Link>
                {index < nonSAPLocations.length - 1 && <span className="mx-2">|</span>}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* SAP Training Locations - Show ONLY on SAP pages */}
      {showSAPLocations && sapLocations.length > 0 && (
        <div className="pt-8 border-t border-gray-800">
          <h4 className="font-semibold mb-4 text-lg">Our SAP Training Locations</h4>
          <div className="text-gray-400 text-sm leading-relaxed">
            {sapLocations.map((location, index) => (
              <span key={location.slug}>
                <Link 
                  to={`/location/${location.slug}`} 
                  onClick={handleLinkClick} 
                  className="hover:text-white transition-colors"
                >
                  {location.course} in {location.location.split(',')[0]}
                </Link>
                {index < sapLocations.length - 1 && <span className="mx-2">|</span>}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ✅ NEW: Popular Courses Row Widget
function FooterCoursesWidget() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      // Fetch courses from API - returns array directly
      const response = await fetch('http://localhost:5000/api/courses');
      const data = await response.json();
      
      // API returns array directly
      if (Array.isArray(data)) {
        setCourses(data.slice(0, 6)); // Max 6 courses
      }
    } catch (error) {
      console.error('Error loading footer courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="pt-8 border-t border-gray-800">
        <div className="text-gray-400 text-sm">Loading courses...</div>
      </div>
    );
  }

  if (courses.length === 0) return null;

  return (
    <div className="pt-8 border-t border-gray-800">
      <h4 className="font-semibold mb-4 text-lg">Our Popular Courses</h4>
      <div className="text-gray-400 text-sm leading-relaxed">
        {courses.map((course, index) => (
          <span key={course.slug}>
            <Link 
              to={`/course/${course.slug}`} 
              onClick={handleLinkClick} 
              className="hover:text-white transition-colors"
            >
              {course.title}
            </Link>
            {index < courses.length - 1 && <span className="mx-2">|</span>}
          </span>
        ))}
      </div>
     
    </div>
  );
}

// ✅ NEW: Latest Blogs Column Widget
function FooterBlogsWidget() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      // Fetch latest 6 blogs - API returns array directly
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      
      // API returns array directly, not wrapped in success object
      if (Array.isArray(data)) {
        setBlogs(data.slice(0, 6)); // Max 6 blogs
      }
    } catch (error) {
      console.error('Error loading footer blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div>
        <h4 className="font-semibold mb-6 text-lg">Latest Blogs</h4>
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <h4 className="font-semibold mb-6 text-lg text-center">Latest Blogs</h4>
      <ul className="space-y-3 text-gray-400 text-center">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <li key={blog.slug}>
              <Link 
                to={`/blogs/${blog.slug}`} 
                onClick={handleLinkClick} 
                className="hover:text-white transition-colors duration-300 text-sm line-clamp-2 block"
              >
                {blog.title}
              </Link>
            </li>
          ))
        ) : (
          <li className="text-sm">No blogs available</li>
        )}
        {blogs.length > 0 && (
          <li>
            <Link 
              to="/blogs" 
              onClick={handleLinkClick} 
              className="hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              View All Blogs →
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

// ✅ Main Footer Component
export default function Footer({ showSAPLocations = false }) {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      e.target.reset();
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to='/' onClick={handleLinkClick}>
                <img 
                  src={logo} 
                  alt="SoftPro9 Academy Logo" 
                  className="h-16 sm:h-20 md:h-24 w-auto mb-4"
                />
              </Link>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Leading professional training institute providing industry-relevant courses with 100% placement assistance. Transform your career with us!
              </p>
              <div className="flex space-x-4">
                <Link to="#" aria-label="Facebook" className="group">
                  <Facebook className="h-6 w-6 text-gray-400 group-hover:text-blue-400 cursor-pointer transition-colors duration-300"/>
                </Link>
                <Link to="#" aria-label="YouTube" className="group">
                  <Youtube className="h-6 w-6 text-gray-400 group-hover:text-red-400 cursor-pointer transition-colors duration-300"/>
                </Link>
                <Link to="#" aria-label="LinkedIn" className="group">
                  <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-blue-600 cursor-pointer transition-colors duration-300"/>
                </Link>
                <Link to="#" aria-label="Instagram" className="group">
                  <Instagram className="h-6 w-6 text-gray-400 group-hover:text-pink-400 cursor-pointer transition-colors duration-300"/>
                </Link>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg text-center">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-center">
                <li>
                  <Link to="/about" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                    About Us
                  </Link>
                </li>
                
                <li>
                  <Link to="/academy" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                    Training
                  </Link>
                </li>
                <li>
                  <Link to="/carrer" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/franchise" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                    Franchise
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* ✅ REPLACED: Latest Blogs (Instead of Popular Courses) */}
            <FooterBlogsWidget />
            
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-6 text-lg text-center">Our Services</h4>
              <ul className="space-y-3 text-gray-400 text-center">
                <li>
                  <Link to="/web" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/digital" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/sap" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                    SAP Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/recruitment" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                    Recruitment
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* ✅ NEW: Popular Courses Row */}
          <FooterCoursesWidget />

          {/* ✅ Dynamic Training Locations Section with SAP control */}
          <FooterLocationsWidget showSAPLocations={showSAPLocations} />
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                <p>&copy; 2025 SoftPro9. All rights reserved.</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <Link to="/policy" onClick={handleLinkClick} className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <span>|</span>
                  <Link to="/conditions" onClick={handleLinkClick} className="hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="w-full lg:w-auto">
                <h3 className="text-white font-semibold mb-3">Subscribe to our Newsletter</h3>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <div className="flex rounded-lg border border-gray-600 bg-white overflow-hidden min-w-0 sm:min-w-80">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-2.5 outline-none text-gray-900 placeholder-gray-500 text-sm"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2.5 text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
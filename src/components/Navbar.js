import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import './style.css';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const navbarRef = useRef(null);
  const location = useLocation(); // Add this for page change detection

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdowns({});
  }, [location.pathname]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        mobileOpen
      ) {
        setMobileOpen(false);
        setMobileDropdowns({});
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

  // Close on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileDropdowns({});
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile dropdown toggle
  const toggleMobileDropdown = (id) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Handle mobile link click
  const handleMobileLinkClick = () => {
    setMobileOpen(false);
    setMobileDropdowns({});
  };

  return (
    <nav
      ref={navbarRef}
      id="navbar"
      className={`fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "navbar-scrolled shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to='/' onClick={handleMobileLinkClick}>
              <h1><img src={logo} alt="SoftPro9 Academy Logo" className="h-10 sm:h-12 object-contain"/></h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <Link to="/" className="nav-link px-3 py-2 text-sm font-medium">
              Home
            </Link>
            

            {/* Services Dropdown */}
            <div className="relative dropdown-parent">
              <button className="nav-link flex items-center px-3 py-2 text-sm font-medium">Services
                <svg className="ml-1 h-4 w-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {/* service dropdown */}
              <div className="dropdown absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-black/10 border border-gray-100">
                <div className="py-2">
                  <Link to="/sap" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">SAP Solutions</div>
                    <div className="text-xs text-gray-500 mt-1">Custom websites & applications</div>
                  </Link>

                  <Link to="/web" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">Web & App Development</div>
                    <div className="text-xs text-gray-500 mt-1">SEO, Social Media & PPC</div>
                  </Link>
                  <Link to="/digital" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">Digital Marketing</div>
                    <div className="text-xs text-gray-500 mt-1">Enterprise software development</div>
                  </Link>
                  <Link to="/recruitment" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">Recruitment</div>
                    <div className="text-xs text-gray-500 mt-1">Explore New Opportunities</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Support Dropdown */}
            <div className="relative dropdown-parent">
              <button className="nav-link flex items-center px-3 py-2 text-sm font-medium">Support
                <svg className="ml-1 h-4 w-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {/* support dropdown */}
              <div className="dropdown absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-black/10 border border-gray-100">
                <div className="py-2">
                  <Link to="/sap" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">Privacy Policy</div>
                  </Link>

                  <Link to="/web" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">Tersms & Conditions</div>
                  </Link>
                  <Link to="/digital" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">Refund Policy</div>
                  </Link>
                  <Link to="/recruitment" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">FAQ</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/academy" className="nav-link px-3 py-2 text-sm font-medium">
              Softpro9 Academy
            </Link>

            {/* our company dropdown */}
            <div className="relative dropdown-parent">
              <button className="nav-link flex items-center px-3 py-2 text-sm font-medium">Our Company
                <svg className="ml-1 h-4 w-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {/* Our company dropdown */}
              <div className="dropdown absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-black/10 border border-gray-100">
                <div className="py-2">
                  <Link to="/about" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">About</div>
                  </Link>
                  <Link to="/industry" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">Industries</div>
                  </Link>

                  <Link to="/carrer" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">Careers</div>
                  </Link>
                  <Link to="/contact" className="dropdown-item block px-6 py-3 text-sm">
                    <div className="font-medium">Contact us</div>
                  </Link>
                </div>
              </div>
            </div>

            
            
            <Link to="/blogs" className="nav-link px-3 py-2 text-sm font-medium">
              Blogs
            </Link>
          </div>

          {/* Get a free consultation */}
          <div className="hidden lg:block ml-4">
            <button className="bg-gradient-to-r from-indigo-600 to-blue-300 text-white px-6 py-2 rounded-lg text-sm font-medium">
              Get a free consultation
            </button>
          </div>

          {/* Login */}
          <div className="hidden lg:block ml-4">
            <button className="bg-gradient-to-r from-indigo-600 to-blue-300 text-white px-6 py-2 rounded-lg text-sm font-medium">
              Student Login
            </button>
          </div>

          {/* Mobile menu btn */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg max-h-screen overflow-y-auto"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium" onClick={handleMobileLinkClick}>
              Home
            </Link>
            
            {/* Mobile Services */}
            <div className="py-1">
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="mobile-dropdown-btn w-full flex justify-between items-center px-3 py-2 text-base font-medium"
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    mobileDropdowns["services"] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {mobileDropdowns["services"] && (
                <div className="pl-6 space-y-1 mt-1">
                  <Link to="/sap" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    SAP Solutions
                  </Link>
                  <Link to="/web" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    Web & App Development
                  </Link>
                  <Link to="/digital" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    Digital Marketing
                  </Link>
                  <Link to="/recruitment" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    Recruitment
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Support */}
            <div className="py-1">
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="mobile-dropdown-btn w-full flex justify-between items-center px-3 py-2 text-base font-medium"
              >
                Support
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    mobileDropdowns["services"] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {mobileDropdowns["services"] && (
                <div className="pl-6 space-y-1 mt-1">
                  <Link to="" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    Privacy Policy
                  </Link>
                  <Link to="" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    Terms & Conditions
                  </Link>
                  <Link to="" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    Refund Policy
                  </Link>
                  <Link to="" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    FAQ
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/academy" className="block px-3 py-2 text-base font-medium" onClick={handleMobileLinkClick}>
              Softpro9 Academy
            </Link>

            {/* Mobile Company - Fixed: Used different key for dropdown */}
            <div className="py-1">
              <button
                onClick={() => toggleMobileDropdown("company")}
                className="mobile-dropdown-btn w-full flex justify-between items-center px-3 py-2 text-base font-medium"
              >
                Our Company
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    mobileDropdowns["company"] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {mobileDropdowns["company"] && (
                <div className="pl-6 space-y-1 mt-1">
                  <Link to="/about" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    About
                  </Link>
                  <Link to="/industry" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    Industries
                  </Link>
                  <Link to="/carrer" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    Career
                  </Link>
                  <Link to="/contact" className="block px-3 py-2 text-sm" onClick={handleMobileLinkClick}>
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blogs" className="block px-3 py-2 text-base font-medium" onClick={handleMobileLinkClick}>
              Blogs
            </Link>
            
            {/* Get a free consultation */}
            <button className="bg-gradient-to-r from-indigo-600 to-blue-300 text-white px-6 py-2 rounded-lg text-sm font-medium">
              Get a free consultation
            </button>&nbsp;&nbsp;

          {/* Login */}
            <button className="bg-gradient-to-r from-indigo-600 to-blue-300 text-white px-6 py-2 rounded-lg text-sm font-medium">
              Student Login
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
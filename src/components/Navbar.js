import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import './style.css';
import logo from "../assets/SoftPro9-Main-Logo-1.png";

import { useAuth } from "../authContext";
import AuthModal from "../pages/AuthModal";
import ConsultationFormModal from "./ConsultationFormModal";

console.log('AuthModal:', AuthModal);
console.log('ConsultationFormModal:', ConsultationFormModal);
console.log('useAuth:', useAuth);


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("login"); // 'login' or 'register'
  const [openDropdown, setOpenDropdown] = useState(null);
  const navbarRef = useRef(null);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  // Check if current page should show login button
  const showLoginButton = location.pathname.startsWith('/academy') || 
                          location.pathname.startsWith('/courslist') || 
                          location.pathname.startsWith('/course');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdowns({});
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        if (mobileOpen) {
          setMobileOpen(false);
          setMobileDropdowns({});
        }
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

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

  const toggleMobileDropdown = (id) => {
    setMobileDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
    setMobileDropdowns({});
  };

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const openLoginModal = () => {
    setAuthModalMode("login");
    setShowAuthModal(true);
  };

  return (
    <>
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
              <Link to="/" onClick={handleMobileLinkClick} aria-label="SoftPro9 Academy Home">
                <div className="flex items-center">
                  <img 
                    src={logo} 
                    alt="SoftPro9 Academy Logo" 
                    className="h-14 w-auto sm:h-16 md:h-20" 
                    style={{ minWidth: '150px', maxWidth: '250px' }}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              <Link to="/" className="nav-link px-3 py-2 text-sm font-medium" style={{ border: 'none' }}>
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative dropdown-parent">
                <button 
                  className="nav-link flex items-center px-3 py-2 text-sm font-medium"
                  onClick={() => handleDropdownToggle('services')}
                  style={{ border: 'none' }}
                >
                  Services
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'services' && (
                  <div className="dropdown absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-black/10 border border-gray-100">
                    <div className="py-2">
                      <Link to="/sap" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">SAP Solutions</div>
                        <div className="text-xs text-gray-500 mt-1">Custom websites & applications</div>
                      </Link>
                      <Link to="/web" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">Web & App Development</div>
                        <div className="text-xs text-gray-500 mt-1">SEO, Social Media & PPC</div>
                      </Link>
                      <Link to="/digital" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">Digital Marketing</div>
                        <div className="text-xs text-gray-500 mt-1">Enterprise software development</div>
                      </Link>
                      <Link to="/recruitment" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">Recruitment</div>
                        <div className="text-xs text-gray-500 mt-1">Explore New Opportunities</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Support Dropdown */}
              <div className="relative dropdown-parent">
                <button 
                  className="nav-link flex items-center px-3 py-2 text-sm font-medium"
                  onClick={() => handleDropdownToggle('support')}
                  style={{ border: 'none' }}
                >
                  Support
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === 'support' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'support' && (
                  <div className="dropdown absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-black/10 border border-gray-100">
                    <div className="py-2">
                      <Link to="/policy" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">Privacy Policy</div>
                      </Link>
                      <Link to="/conditions" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">Terms & Conditions</div>
                      </Link>
                      <Link to="/refund" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">Refund Policy</div>
                      </Link>
                      <Link to="/faq" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">FAQ</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/academy" className="nav-link px-3 py-2 text-sm font-medium" style={{ border: 'none' }}>
                Softpro9 Academy
              </Link>

              <Link to="/franchise" className="nav-link px-3 py-2 text-sm font-medium" style={{ border: 'none' }}>
                Franchise
              </Link>

              {/* Our company dropdown */}
              <div className="relative dropdown-parent">
                <button 
                  className="nav-link flex items-center px-3 py-2 text-sm font-medium"
                  onClick={() => handleDropdownToggle('company')}
                  style={{ border: 'none' }}
                >
                  Our Company
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === 'company' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'company' && (
                  <div className="dropdown absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-black/10 border border-gray-100">
                    <div className="py-2">
                      <Link to="/about" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">About</div>
                      </Link>
                      <Link to="/industry" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">Industries</div>
                      </Link>
                      <Link to="/carrer" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">Career</div>
                      </Link>
                      <Link to="/contact" className="dropdown-item block px-6 py-3 text-sm" onClick={closeDropdown}>
                        <div className="font-medium">Contact Us</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/blogs" className="nav-link px-3 py-2 text-sm font-medium" style={{ border: 'none' }}>
                Blogs
              </Link>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              {/* Show consultation button only if NOT on login button pages */}
              {!showLoginButton && (
                <button 
                  onClick={() => setShowConsultationModal(true)}
                  className="bg-gradient-to-r from-indigo-600 to-blue-300 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                >
                  Get a free consultation
                </button>
              )}

              {/* Show login/dashboard buttons only on specific pages */}
              {showLoginButton && (
                !isAuthenticated ? (
                  <button
                    className="bg-gradient-to-r from-indigo-600 to-blue-300 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                    onClick={openLoginModal}
                  >
                    Student Login
                  </button>
                ) : (
                  <>
                    <Link to="/dashboard" className="nav-link px-3 py-2 text-sm font-medium" style={{ border: 'none' }}>
                      Dashboard
                    </Link>
                    <button
                      className="bg-gradient-to-r from-indigo-600 to-blue-300 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </>
                )
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-200 mt-2">
              <div className="pt-4 space-y-1">
                <Link
                  to="/"
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={handleMobileLinkClick}
                >
                  Home
                </Link>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown('services')}
                    className="w-full flex justify-between items-center px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    Services
                    <svg
                      className={`h-5 w-5 transition-transform ${mobileDropdowns.services ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdowns.services && (
                    <div className="pl-4 space-y-1">
                      <Link to="/sap" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        SAP Solutions
                      </Link>
                      <Link to="/web" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        Web & App Development
                      </Link>
                      <Link to="/digital" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        Digital Marketing
                      </Link>
                      <Link to="/recruitment" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        Recruitment
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Support Dropdown */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown('support')}
                    className="w-full flex justify-between items-center px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    Support
                    <svg
                      className={`h-5 w-5 transition-transform ${mobileDropdowns.support ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdowns.support && (
                    <div className="pl-4 space-y-1">
                      <Link to="/policy" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        Privacy Policy
                      </Link>
                      <Link to="/conditions" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        Terms & Conditions
                      </Link>
                      <Link to="/refund" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        Refund Policy
                      </Link>
                      <Link to="/faq" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        FAQ
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/academy"
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={handleMobileLinkClick}
                >
                  Softpro9 Academy
                </Link>

                <Link
                  to="/franchise"
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={handleMobileLinkClick}
                >
                  Franchise
                </Link>

                {/* Mobile Our Company Dropdown */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown('company')}
                    className="w-full flex justify-between items-center px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    Our Company
                    <svg
                      className={`h-5 w-5 transition-transform ${mobileDropdowns.company ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdowns.company && (
                    <div className="pl-4 space-y-1">
                      <Link to="/about" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        About
                      </Link>
                      <Link to="/industry" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        Industries
                      </Link>
                      <Link to="/carrer" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        Career
                      </Link>
                      <Link to="/contact" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md" onClick={handleMobileLinkClick}>
                        Contact Us
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/blogs"
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={handleMobileLinkClick}
                >
                  Blogs
                </Link>

                {/* Mobile Buttons */}
                <div className="pt-4 px-4 space-y-3">
                  {/* Show consultation button only if NOT on login button pages */}
                  {!showLoginButton && (
                    <button 
                      onClick={() => {
                        setShowConsultationModal(true);
                        setMobileOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-indigo-600 to-blue-300 text-white px-6 py-3 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                    >
                      Get a free consultation
                    </button>
                  )}

                  {/* Show login/dashboard buttons only on specific pages */}
                  {showLoginButton && (
                    !isAuthenticated ? (
                      <button
                        className="w-full bg-gradient-to-r from-indigo-600 to-blue-300 text-white px-6 py-3 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                        onClick={() => {
                          openLoginModal();
                          setMobileOpen(false);
                        }}
                      >
                        Student Login
                      </button>
                    ) : (
                      <>
                        <Link
                          to="/dashboard"
                          className="block w-full text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                          onClick={handleMobileLinkClick}
                        >
                          Dashboard
                        </Link>
                        <button
                          className="w-full bg-gradient-to-r from-indigo-600 to-blue-300 text-white px-6 py-3 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                          onClick={() => {
                            logout();
                            setMobileOpen(false);
                          }}
                        >
                          Logout
                        </button>
                      </>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Auth Modal (login/register toggle) */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} initialMode={authModalMode} switchToRegister={() => { setAuthModalMode('register'); setShowAuthModal(true); }} switchToLogin={() => { setAuthModalMode('login'); setShowAuthModal(true); }} />
      )}

      {/* Consultation Form Modal */}
      {showConsultationModal && (
        <ConsultationFormModal isOpen={showConsultationModal} onClose={() => setShowConsultationModal(false)} />
      )}
    </>
  );
};

export default Navbar;
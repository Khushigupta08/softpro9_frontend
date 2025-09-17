import {Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.svg";

export default function Footer() {
  const location = useLocation();

  // Scroll to top on link click (same fix as navbar)
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  // Newsletter subscription handler
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      // Add your subscription logic here
      alert(`Thank you for subscribing with ${email}!`);
      e.target.reset();
    }
  };

  return (
    <>
    <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="lg:col-span-1">
                    <Link to='/' onClick={handleLinkClick}>
                        <img src={logo} alt="SoftPro9 Academy Logo" className="h-10 sm:h-12 object-contain mb-4"/>
                    </Link>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                        Leading professional training institute providing industry-relevant courses with 100% placement assistance. Transform your career with us!
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" className="group">
                            <Facebook className="h-6 w-6 text-gray-400 group-hover:text-blue-400 cursor-pointer transition-colors duration-300"/>
                        </a>
                        <a href="#" aria-label="YouTube" className="group">
                            <Youtube className="h-6 w-6 text-gray-400 group-hover:text-red-400 cursor-pointer transition-colors duration-300"/>
                        </a>
                        <a href="#" aria-label="LinkedIn" className="group">
                            <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-blue-600 cursor-pointer transition-colors duration-300"/>
                        </a>
                        <a href="#" aria-label="Instagram" className="group">
                            <Instagram className="h-6 w-6 text-gray-400 group-hover:text-pink-400 cursor-pointer transition-colors duration-300"/>
                        </a>
                    </div>
                </div>
                
                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li>
                            <Link to="/about" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/web" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                                Services
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
                            <Link to="/blogs" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                
                {/* Popular Courses */}
                <div>
                    <h4 className="font-semibold mb-6 text-lg">Popular Courses</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li>
                            <Link to="/web" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                                Full Stack Development
                            </Link>
                        </li>
                        <li>
                            <Link to="/sap" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                                SAP S/4 HANA Finance
                            </Link>
                        </li>
                        <li>
                            <Link to="/digital" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                                Digital Marketing
                            </Link>
                        </li>
                        <li>
                            <Link to="/academy" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm">
                                Professional Branding
                            </Link>
                        </li>
                        <li>
                            <Link to="/academy" onClick={handleLinkClick} className="hover:text-white transition-colors duration-300 text-sm font-medium">
                                View All Courses →
                            </Link>
                        </li>
                    </ul>
                </div>
                
                {/* Contact Info */}
                <div>
                    <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex items-start">
                            <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5 flex-shrink-0"/>
                            <span className="text-sm">Mysore, Karnataka, India</span>
                        </li>
                        <li className="flex items-center">
                            <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0"/>
                            <a href="tel:+919876543210" className="hover:text-white transition-colors text-sm">
                                +91 9876543210
                            </a>
                        </li>
                        <li className="flex items-center">
                            <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0"/>
                            <a href="mailto:info@softpro.com" className="hover:text-white transition-colors text-sm">
                                info@softpro.com
                            </a>
                        </li>
                        <li className="flex items-center">
                            <Clock className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0"/>
                            <span className="text-sm">Mon-Sat: 9AM-7PM</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* Bottom Section */}
            <div className="border-t border-gray-800 mt-12 pt-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    {/* Copyright */}
                    <div className="text-gray-400 text-sm">
                        <p>&copy; 2025 SoftPro. All rights reserved.</p>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <Link to="/privacy" onClick={handleLinkClick} className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <span>|</span>
                            <Link to="/terms" onClick={handleLinkClick} className="hover:text-white transition-colors">
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
  )
}
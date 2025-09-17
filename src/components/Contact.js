// import React from 'react'
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Linkedin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";


export default function Contact() {

// === Google Map Embed (Replace with your embed URL) ===
// Example: https://www.google.com/maps/embed?pb=...
const mapEmbedUrl =
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.000000000!2d76.6390000!3d12.2958000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMysuru!5e0!3m2!1sen!2sin!4v0000000000000";
  return (
    <>
    <div className="relative bg-gradient-to-br from-[#e9f0fb] to-[#f7f4fa] min-h-screen py-16 flex items-center justify-center mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden bg-white">
           {/* Left: Visual & Info Panel  */}
          <div className="lg:w-1/2 p-10 flex flex-col justify-center bg-gradient-to-br from-indigo-100/80 to-white">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Let's Connect and Grow Together</h1>
            <p className="text-lg text-gray-600 mb-6">At SoftPro9 IT Services, we believe that every great partnership begins with a conversation. Whether you’re looking for innovative SAP solutions, cutting-edge web & app development, advanced digital marketing powered by AI, or simply guidance on the right tech strategy – our team is here to help.</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                    {/* Phone Icon  */}
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M3 8a16 16 0 0 0 13 13l2-2a2 2 0 0 0-.6-3.2l-2.3-1a2 2 0 0 0-2.3.3l-1.7 1.4a12 12 0 0 1-6-6l1.4-1.7a2 2 0 0 0 .3-2.3l-1-2.3A2 2 0 0 0 5 3l-2 2z"/>
                  </svg>
                </span>
                <span className="font-medium text-gray-700">+91 9535451414</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                    {/* Email Icon  */}
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4V4zm16 0l-8 8-8-8"/>
                  </svg>
                </span>
                <span className="font-medium text-gray-700">contact@softPro9.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                   {/* Address Icon  */}
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 4.55 6.39 11.54 6.73 11.93a1 1 0 0 0 1.54 0C12.61 20.54 19 13.55 19 9c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </span>
                <span className="font-medium text-gray-700">Mysore, Karnataka , India</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                  {/* WhatsApp Icon */}
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.61 6.01L0 24l6.21-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.87 0-3.68-.5-5.27-1.44l-.38-.23-3.68.97.98-3.59-.25-.37A9.96 9.96 0 0 1 2 12C2 6.48 6.48 2 12 2c2.66 0 5.16 1.04 7.04 2.92A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.36-7.44c-.29-.15-1.71-.85-1.98-.95s-.46-.15-.65.15-.75.95-.92 1.15-.34.22-.63.07a8.2 8.2 0 0 1-2.41-1.49 9.05 9.05 0 0 1-1.68-2.09c-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.65-1.56-.9-2.14-.24-.58-.49-.5-.65-.51h-.56c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.46 1.07 2.86 1.22 3.05c.15.2 2.1 3.2 5.07 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.71-.7 1.95-1.38.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.56-.35z"/>
                  </svg>
                </span>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-md transition"
                >
                  Chat with us instantly
                </a>
              </div>

            </div>
            <div className="flex space-x-2 mt-5">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-500 text-xs rounded-lg font-semibold">Mon-Sat: 9am-7pm</span>
              <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs rounded-lg font-semibold">Avg Response: 1 hr</span>
            </div>
          </div>
             {/* Right: Contact Form  */}
          <div className="lg:w-1/2 bg-white p-10 flex items-center justify-center">
            <form className="w-full max-w-md mx-auto space-y-6" autocomplete="off" id="contactForm">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mt-1">Have a question or project idea? Fill out the form below , and our experts will get back to you at the earliest</p>
              </div>
              <div className="md:flex md:space-x-4">
                <div className="flex-1 mb-4 md:mb-0">
                  <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 transition" />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 transition" />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" name="phone" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 transition" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Service of Interest</label>
                <select required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 transition">
                    <option value="tech">SAP</option>
                    <option value="offers">Web & App Development</option>
                    <option value="events">Digital Marketing</option>
                    <option value="events">Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows="4" required class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 transition resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg">
                Send Message
              </button>
              <div className="text-center">
                <span id="formMsg" className="text-green-600 text-sm hidden">Thank you! We'll reply soon.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* extra content */}
    <section className="w-full bg-white">
     {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.5 }}className="text-3xl sm:text-4xl font-bold tracking-tight">
         Our Locations
        </motion.h1>
        <p className="mt-3 text-blue-100 max-w-2xl">
        Visit us at our Head Office in Mysore or our Branch Office in Bangalore. Find business hours,
        map, and quick links below.
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
        <h2 className="text-xl font-semibold text-blue-800">Head Office – Mysore</h2>
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
        <h2 className="text-xl font-semibold text-blue-800">Branch Office – Bangalore</h2>
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed">
        <span className="block">📍 #456, Tech Hub Tower, Bangalore – 560045, Karnataka</span>
        </p>
        </div>
        </div>
   </motion.div>
       {/* Business Hours */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-2xl border border-blue-100 bg-blue-50/60 shadow-sm">
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
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-8">
          <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-sm">
          <div className="bg-blue-600 text-white px-4 py-3 text-sm sm:text-base font-medium">
          📌 Find us easily with Google Maps integration below
          </div>
          <div className="aspect-[16/9] w-full">
          <iframe title="SoftPro9 Locations Map" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"style={{ border: 0 }}allowFullScreen/>
          </div>
          </div>
        </motion.div>
        {/* Social Links */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-10">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-blue-800">Stay Connected</h3>
          <p className="text-gray-600 mt-1">Follow us for the latest updates, insights, and career opportunities:</p>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          <button className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100">
          <Linkedin className="h-4 w-4" /> LinkedIn
          </button>
          <button className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100">
          <Instagram className="h-4 w-4" /> Instagram
          </button>
          <button className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100">
          <Facebook className="h-4 w-4" /> Facebook
          </button>
          <button className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100">
          <Youtube className="h-4 w-4" /> YouTube
          </button>
          <button className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100">
          <Twitter className="h-4 w-4" /> X (Twitter)
          </button>
          </div>
          </div>
        </motion.div>
        {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}className="mt-8">
            <div className="rounded-2xl border border-blue-100 bg-blue-600 text-white p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
              <h3 className="text-xl font-semibold">Explore More with SoftPro9</h3>
              <p className="text-blue-100 mt-1">
              Looking for a career or want to explore our services? Jump right in.
              </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
              <Link to="/carrer"><button className="inline-flex items-center gap-2 rounded-2xl bg-white text-blue-700 px-4 py-2 font-medium shadow-sm hover:shadow transition">
              Visit Our Careers Page <ArrowRight className="h-4 w-4" />
              </button></Link>
              <Link to="/service"><button className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 text-white px-4 py-2 font-medium shadow-sm hover:bg-blue-500/90 transition border border-white/20">
              View Our Service Portfolio <ArrowRight className="h-4 w-4" />
              </button></Link>
              </div>
              </div>
            </div>
         </motion.div>
      </div>
   </section>
    </>
  )
}

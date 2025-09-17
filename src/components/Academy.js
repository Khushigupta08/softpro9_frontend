import './style.css';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Academy() {
    
return (
    <>
   {/* Hero Section  */}
    <section className="academy-gradient relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="academy-wave">
            <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
            </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="academy-highlight">SoftPro9</span> Academy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Empowering Careers with Future-Ready Skills through Industry-focused Training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to='/courselist'><button className="academy-btn bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100">
                    Explore Courses
                </button></Link>
                <button className="academy-btn border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600">
                    Free Consultation
                </button>
            </div>
        </div>
    </section>

     {/* Stats Section  */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="academy-stats text-center p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                    <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="academy-stats text-center p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-gray-600">Placement Rate</div>
                </div>
                <div className="academy-stats text-center p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Corporate Partners</div>
                </div>
                <div className="academy-stats text-center p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-gray-600">Learning Support</div>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose Us Section  */}
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose <span className="academy-highlight">SoftPro9</span> Academy?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">We are committed to creating career-ready professionals with skills that matter in the digital age</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">🏆</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Industry-recognized Training</h3>
                    <p className="text-gray-600">Designed by experts with years of IT consulting, implementation, and digital strategy experience.</p>
                </div>
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">🤖</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">AI-Powered Learning</h3>
                    <p className="text-gray-600">Courses integrated with the latest AI tools, automation platforms, and real-world case studies.</p>
                </div>
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">💼</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Hands-On Projects</h3>
                    <p className="text-gray-600">Work on real-time client case studies and live projects, not just classNameroom examples.</p>
                </div>
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">🎯</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Placement & Career Support</h3>
                    <p className="text-gray-600">Dedicated career guidance, mock interviews, and corporate hiring connections.</p>
                </div>
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">🌍</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Relevance</h3>
                    <p className="text-gray-600">Programs aligned with international standards, making you career-ready worldwide.</p>
                </div>
                <div className="academy-card bg-white p-8 rounded-xl shadow-md">
                    <div className="academy-feature-icon">⏰</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Flexible Learning</h3>
                    <p className="text-gray-600">Instructor-led, self-paced, and blended learning models to suit your schedule.</p>
                </div>
            </div>
        </div>
    </section>

     {/* Core Training Programs  */}
    <section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Our Core Training Programs
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Specialized training in three high-demand areas of technology and
        business
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* SAP Training */}
      <div className="academy-course-card transition-transform duration-300 hover:-translate-y-2 border-t-4 border-transparent hover:border-blue-600">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            SAP Training & Consulting
          </h3>
          <p className="text-blue-100">Enterprise Digital Transformation</p>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">
              Popular Modules:
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• SAP S/4HANA MM (Materials Management)</li>
              <li>• SAP S/4HANA FI (Finance)</li>
              <li>• SAP S/4HANA SD (Sales & Distribution)</li>
              <li>• SAP S/4HANA PP (Production Planning)</li>
              <li>• SAP Success Factors</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Career Path:</h4>
            <p className="text-sm text-gray-600">
              SAP Consultant, Business Analyst, ERP Manager, Solution Architect
            </p>
          </div>
          <Link to='/courselist'><button className="academy-btn w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Learn More
          </button></Link>
        </div>
      </div>

      {/* Web Development */}
      <div className="academy-course-card transition-transform duration-300 hover:-translate-y-2 border-t-4 border-transparent hover:border-blue-600">
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Web & App Development
          </h3>
          <p className="text-green-100">Advanced Technologies</p>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">
              Training Tracks:
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Full-Stack Development (MERN/MEAN)</li>
              <li>• Frontend Development (React, Angular)</li>
              <li>• Mobile App Development (Flutter)</li>
              <li>• Cloud-Native Development (AWS, Azure)</li>
              <li>• DevOps & CI/CD Pipeline</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Career Path:</h4>
            <p className="text-sm text-gray-600">
              Web Developer, Mobile App Developer, Cloud Engineer, Full-Stack
              Architect
            </p>
          </div>
          <Link to='/courselist'><button className="academy-btn w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
            Learn More
          </button></Link>
        </div>
      </div>

      {/* Digital Marketing */}
      <div className="academy-course-card transition-transform duration-300 hover:-translate-y-2 border-t-4 border-transparent hover:border-blue-600">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Digital Marketing with AI
          </h3>
          <p className="text-purple-100">Generative AI Integration</p>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">
              Course Modules:
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Search Engine Optimization (SEO)</li>
              <li>• Social Media Marketing (SMM)</li>
              <li>• Content Creation with AI</li>
              <li>• Email & WhatsApp Marketing</li>
              <li>• Data Analytics & Intelligence</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Career Path:</h4>
            <p className="text-sm text-gray-600">
              Digital Marketing Specialist, AI Marketing Strategist, SEO Manager
            </p>
          </div>
          <Link to='/courselist'><button className="academy-btn w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
            Learn More
          </button></Link>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* Learning Approach  */}
    <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Learning Approach</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">What makes us different - where theory meets practice</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">1</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Interactive Learning</h3>
                    <p className="text-sm text-gray-600">Engaging sessions with corporate consulting experience</p>
                </div>
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">2</div>
                    <h3 className="font-semibold text-gray-800 mb-2">AI-Integrated</h3>
                    <p className="text-sm text-gray-600">Every program blends modern AI-powered tools</p>
                </div>
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">3</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Real Projects</h3>
                    <p className="text-sm text-gray-600">Work on case studies & live projects from companies</p>
                </div>
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">4</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Mentorship</h3>
                    <p className="text-sm text-gray-600">Direct interaction with industry experts</p>
                </div>
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">5</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Career Support</h3>
                    <p className="text-sm text-gray-600">100% placement assistance and guidance</p>
                </div>
            </div>
        </div>
    </section>

    {/* Success Stories  */}
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
                <p className="text-xl text-gray-600">Hear from our learners who transformed their careers</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="academy-testimonial p-8">
                    <div className="text-4xl text-blue-600 mb-4">⭐</div>
                    <p className="text-gray-600 mb-6 italic">"<span className="academy-highlight">SoftPro9</span> Academy helped me switch my career to SAP MM Consultant. Within 4 months of training, I got my first corporate offer!"</p>
                    <div className="font-semibold text-gray-800">- Ananya S.</div>
                    <div className="text-sm text-gray-500">SAP Consultant</div>
                </div>
                <div className="academy-testimonial p-8">
                    <div className="text-4xl text-blue-600 mb-4">⭐</div>
                    <p className="text-gray-600 mb-6 italic">"The Digital Marketing with AI course was a game-changer. I scaled my business leads by 3X in 6 months."</p>
                    <div className="font-semibold text-gray-800">- Ravi K.</div>
                    <div className="text-sm text-gray-500">Business Owner</div>
                </div>
                <div className="academy-testimonial p-8">
                    <div className="text-4xl text-blue-600 mb-4">⭐</div>
                    <p className="text-gray-600 mb-6 italic">"As a fresher with zero coding background, the Full-Stack training gave me confidence. Today, I work as a developer in a startup."</p>
                    <div className="font-semibold text-gray-800">- Priya M.</div>
                    <div className="text-sm text-gray-500">Junior Developer</div>
                </div>
            </div>
        </div>
    </section>

     {/* Upcoming Batches  */}
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Batches</h2>
                <p className="text-xl text-gray-600">Secure your spot in our next training sessions</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">SAP S/4HANA MM & FICO</h3>
                    <div className="text-blue-600 font-semibold mb-4">Next Batch: September 10, 2025</div>
                    <button className="academy-btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Enroll Now
                    </button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">MERN Stack Development</h3>
                    <div className="text-blue-600 font-semibold mb-4">Next Batch: September 15, 2025</div>
                    <button className="academy-btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Enroll Now
                    </button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Marketing with AI</h3>
                    <div className="text-blue-600 font-semibold mb-4">Next Batch: September 20, 2025</div>
                    <button className="academy-btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    </section>

    {/* Corporate Training  */}
    <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Corporate Training & Partnerships</h2>
                <p className="text-xl max-w-3xl mx-auto">Customized training solutions for businesses looking to upskill their workforce</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="p-6">
                    <div className="text-3xl mb-4">🏢</div>
                    <h3 className="font-semibold mb-2">Onsite & Online Training</h3>
                    <p className="text-sm text-blue-100">Flexible delivery options</p>
                </div>
                <div className="p-6">
                    <div className="text-3xl mb-4">📝</div>
                    <h3 className="font-semibold mb-2">Tailor-made Curriculum</h3>
                    <p className="text-sm text-blue-100">Company-specific requirements</p>
                </div>
                <div className="p-6">
                    <div className="text-3xl mb-4">👥</div>
                    <h3 className="font-semibold mb-2">Employee Upskilling</h3>
                    <p className="text-sm text-blue-100">Workforce development programs</p>
                </div>
                <div className="p-6">
                    <div className="text-3xl mb-4">🚀</div>
                    <h3 className="font-semibold mb-2">Digital Transformation</h3>
                    <p className="text-sm text-blue-100">Leadership workshops</p>
                </div>
            </div>
        </div>
    </section>

    {/* Why SoftPro9 Academy is the Right Choice  */}
    <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Why <span className="text-blue-600 font-extrabold">SoftPro9</span> Academy is the Right Choice for You</h2>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                        <div className="text-3xl">🌍</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Global perspective with local training expertise.</h3>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                        <div className="text-3xl">💡</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Blending traditional learning with AI-powered innovation.</h3>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                        <div className="text-3xl">🚀</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">1000+ Students Trained and Placed across top MNCs.</h3>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                        <div className="text-3xl">🏆</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Trusted by corporates, startups, and professionals.</h3>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <div className="inline-block bg-blue-600 text-white rounded-full px-8 py-4 shadow-lg">
                        <p className="text-xl font-bold">
                            Our motto is simple: <span className="text-cyan-300">Learn. Apply. Grow.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Call to Action  */}
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Take the First Step Today!</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Your career transformation starts with a single step. Master the future of technology and business with <span className="academy-highlight">SoftPro9</span> Academy.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to='/courselist'><button className="academy-btn bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100">
                    Explore Courses
                </button></Link>
                <button className="academy-btn bg-transparent border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700">
                    Request Free Consultation
                </button>
            </div>
            <div className="mt-8 text-sm text-blue-100">
                <p>At <span className="academy-highlight">SoftPro9</span> Academy, we are not just trainers. We are career partners, here to ensure your success.</p>
            </div>
        </div>
    </section>

    </>
  )
}

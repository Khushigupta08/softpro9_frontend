import {BarChart3, Clock, Code2, Heart, Megaphone, Palette, PlayCircle, Search, Server, Smartphone, User, Users, Star, List} from "lucide-react";
import { Link } from "react-router-dom";

export default function Courselist() {

  return (
    <>
     {/* Hero Section  */}
    <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Courses</h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Choose from our comprehensive collection of industry-focused courses designed to accelerate your career growth
            </p>
             {/* Search Bar  */}
            <div className="max-w-2xl mx-auto relative">
                <input type="text" id="searchInput" placeholder="Search courses, skills, or technologies..." 
                       className="w-full px-6 py-4 text-gray-900 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-purple-300"/>
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg">
                    <Search className="w-5 h-5"/>
                </button>
            </div>
        </div>
    </section>

      {/* Filters & Course Grid  */}
    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Filter Tabs  */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <button className="filter-btn active px-6 py-2 rounded-full font-medium transition-colors" data-category="all">All Courses</button>
                <button className="filter-btn px-6 py-2 rounded-full font-medium transition-colors" data-category="web">Web Development</button>
                <button className="filter-btn px-6 py-2 rounded-full font-medium transition-colors" data-category="mobile">Mobile Development</button>
                <button className="filter-btn px-6 py-2 rounded-full font-medium transition-colors" data-category="data">Data Science</button>
                <button className="filter-btn px-6 py-2 rounded-full font-medium transition-colors" data-category="design">UI/UX Design</button>
                <button className="filter-btn px-6 py-2 rounded-full font-medium transition-colors" data-category="marketing">Marketing</button>
            </div>

              {/* Results Header  */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900" id="categoryTitle">All Courses</h2>
                    <p className="text-gray-600" id="courseCount">Showing 6 courses</p>
                </div>
                <div className="flex items-center space-x-4">
                    <select id="sortSelect" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option value="popular">Sort by: Popular</option>
                        <option value="newest">Sort by: Newest</option>
                        <option value="price-low">Sort by: Price: Low to High</option>
                        <option value="price-high">Sort by: Price: High to Low</option>
                        <option value="rating">Sort by: Rating</option>
                    </select>
                    <div className="flex border border-gray-300 rounded-lg">
                        <button id="gridView" className="p-2 hover:bg-gray-100 border-r bg-purple-100">
                            <i data-lucide="grid-3x3" className="w-5 h-5"></i>
                        </button>
                        <button id="listView" className="p-2 hover:bg-gray-100">
                            <List className="w-5 h-5"/>
                        </button>
                    </div>
                </div>
            </div>

              {/* Course Grid  */}
            <div id="courseGrid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Course Card 1 - Web Development  */}
                <Link to='/course'><div className="course-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border transform hover:-translate-y-2" 
                     data-category="web" data-rating="4.8" data-price="2999" data-students="1234">
                    <div className="relative">
                        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            <div className="text-white text-center">
                                <Code2 className="w-16 h-16 mx-auto mb-2"/>
                                <h4 className="text-xl font-bold">Full Stack Web</h4>
                            </div>
                        </div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">BESTSELLER</span>
                        </div>
                        <div className="absolute top-4 right-4">
                            <button className="wishlist-btn bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                                <Heart className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">Web Development</span>
                            <div className="ml-auto flex items-center">
                                <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                                <span className="ml-1 text-sm font-medium">4.8</span>
                                <span className="ml-1 text-sm text-gray-500">(245)</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Complete Full Stack Web Development</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 10+ real-world projects and get job-ready.</p>
                        
                        <div className="flex items-center mb-4 text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1"/>
                            <span className="mr-4">40 hours</span>
                            <User className="w-4 h-4 mr-1"/>
                            <span className="mr-4">1,234 students</span>
                            <PlayCircle className="w-4 h-4 mr-1"/>
                            <span>120 lessons</span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">R</div>
                                <div className="ml-2">
                                    <p className="text-sm font-medium">Rajesh Kumar</p>
                                    <p className="text-xs text-gray-500">Senior Developer</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-2xl font-bold text-purple-600">₹2,999</span>
                                <span className="text-gray-500 line-through ml-2">₹4,999</span>
                            </div>&nbsp;
                            <button className="enroll-btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div></Link>

                  {/* Course Card 2 - Mobile Development  */}
                <Link to='/course'><div className="course-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border transform hover:-translate-y-2" 
                     data-category="mobile" data-rating="4.9" data-price="3499" data-students="456">
                    <div className="relative">
                        <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                            <div className="text-white text-center">
                                <Smartphone className="w-16 h-16 mx-auto mb-2"/>
                                <h4 className="text-xl font-bold">React Native</h4>
                            </div>
                        </div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
                        </div>
                        <div className="absolute top-4 right-4">
                            <button className="wishlist-btn bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                                <Heart className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">Mobile Development</span>
                            <div className="ml-auto flex items-center">
                                <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                                <span className="ml-1 text-sm font-medium">4.9</span>
                                <span className="ml-1 text-sm text-gray-500">(89)</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">React Native Mobile App Development</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">Build cross-platform mobile apps with React Native. Learn navigation, state management, and API integration.</p>
                        
                        <div className="flex items-center mb-4 text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1"/>
                            <span className="mr-4">35 hours</span>
                            <User className="w-4 h-4 mr-1"/>
                            <span className="mr-4">456 students</span>
                            <PlayCircle className="w-4 h-4 mr-1"/>
                            <span>95 lessons</span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">P</div>
                                <div className="ml-2">
                                    <p className="text-sm font-medium">Priya Sharma</p>
                                    <p className="text-xs text-gray-500">Mobile Expert</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-2xl font-bold text-purple-600">₹3,499</span>
                                <span className="text-gray-500 line-through ml-2">₹5,999</span>
                            </div>&nbsp;
                            <button className="enroll-btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div></Link>

                 {/* Course Card 3 - Data Science  */}
                <Link to='/course'><div className="course-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border transform hover:-translate-y-2" 
                     data-category="data" data-rating="4.7" data-price="4499" data-students="789">
                    <div className="relative">
                        <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                            <div className="text-white text-center">
                                <BarChart3 className="w-16 h-16 mx-auto mb-2"/>
                                <h4 className="text-xl font-bold">Data Science</h4>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4">
                            <button className="wishlist-btn bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                                <Heart className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">Data Science</span>
                            <div className="ml-auto flex items-center">
                                <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                                <span className="ml-1 text-sm font-medium">4.7</span>
                                <span className="ml-1 text-sm text-gray-500">(167)</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Python Data Science & Machine Learning</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">Master Python, Pandas, NumPy, Matplotlib, and Scikit-learn. Build ML models and data visualizations.</p>
                        
                        <div className="flex items-center mb-4 text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1"/>
                            <span className="mr-4">45 hours</span>
                            <User className="w-4 h-4 mr-1"/>
                            <span className="mr-4">789 students</span>
                            <PlayCircle className="w-4 h-4 mr-1"/>
                            <span>150 lessons</span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
                                <div className="ml-2">
                                    <p className="text-sm font-medium">Dr. Amit Singh</p>
                                    <p className="text-xs text-gray-500">Data Scientist</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-2xl font-bold text-purple-600">₹4,499</span>
                                <span className="text-gray-500 line-through ml-2">₹7,999</span>
                            </div>&nbsp;
                            <button className="enroll-btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div></Link>

                 {/* Course Card 4 - UI/UX Design  */}
                <Link to='/course'><div className="course-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border transform hover:-translate-y-2" 
                     data-category="design" data-rating="4.6" data-price="2499" data-students="567">
                    <div className="relative">
                        <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                            <div className="text-white text-center">
                                <Palette className="w-16 h-16 mx-auto mb-2"/>
                                <h4 className="text-xl font-bold">UI/UX Design</h4>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4">
                            <button className="wishlist-btn bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                                <Heart className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded text-xs font-medium">UI/UX Design</span>
                            <div className="ml-auto flex items-center">
                                <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                                <span className="ml-1 text-sm font-medium">4.6</span>
                                <span className="ml-1 text-sm text-gray-500">(203)</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Complete UI/UX Design MasterclassName</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">Learn Figma, Adobe XD, user research, wireframing, prototyping, and design systems. Build a portfolio.</p>
                        
                        <div className="flex items-center mb-4 text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1"/>
                            <span className="mr-4">30 hours</span>
                            <User className="w-4 h-4 mr-1"/>
                            <span className="mr-4">567 students</span>
                            <PlayCircle className="w-4 h-4 mr-1"/>
                            <span>80 lessons</span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">N</div>
                                <div className="ml-2">
                                    <p className="text-sm font-medium">Neha Gupta</p>
                                    <p className="text-xs text-gray-500">UX Designer</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-2xl font-bold text-purple-600">₹2,499</span>
                                <span className="text-gray-500 line-through ml-2">₹3,999</span>
                            </div>&nbsp;
                            <button className="enroll-btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div></Link>

                  {/* Course Card 5 - Backend  */}
                <Link to='/course'><div className="course-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border transform hover:-translate-y-2" 
                     data-category="web" data-rating="4.8" data-price="3299" data-students="345">
                    <div className="relative">
                        <div className="h-48 bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
                            <div className="text-white text-center">
                                <Server className="w-16 h-16 mx-auto mb-2"/>
                                <h4 className="text-xl font-bold">Node.js Backend</h4>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4">
                            <button className="wishlist-btn bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                                <Heart className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded text-xs font-medium">Backend Development</span>
                            <div className="ml-auto flex items-center">
                                <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                                <span className="ml-1 text-sm font-medium">4.8</span>
                                <span className="ml-1 text-sm text-gray-500">(134)</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Node.js Backend Development</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">Master Node.js, Express.js, MongoDB, authentication, APIs, and deployment. Build scalable backends.</p>
                        
                        <div className="flex items-center mb-4 text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1"/>
                            <span className="mr-4">38 hours</span>
                            <User className="w-4 h-4 mr-1"/>
                            <span className="mr-4">345 students</span>
                            <PlayCircle className="w-4 h-4 mr-1"/>
                            <span>110 lessons</span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
                                <div className="ml-2">
                                    <p className="text-sm font-medium">Arjun Patel</p>
                                    <p className="text-xs text-gray-500">Backend Expert</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-2xl font-bold text-purple-600">₹3,299</span>
                                <span className="text-gray-500 line-through ml-2">₹4,999</span>
                            </div>&nbsp;
                            <button className="enroll-btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div></Link>

                 {/* Course Card 6 - Marketing  */}
                <Link to='/course'><div className="course-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border transform hover:-translate-y-2" 
                     data-category="marketing" data-rating="4.5" data-price="1999" data-students="1123">
                    <div className="relative">
                        <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
                            <div className="text-white text-center">
                                <Megaphone className="w-16 h-16 mx-auto mb-2"/>
                                <h4 className="text-xl font-bold">Digital Marketing</h4>
                            </div>
                        </div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">HOT</span>
                        </div>
                        <div className="absolute top-4 right-4">
                            <button className="wishlist-btn bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                                <Heart className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-2">
                            <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs font-medium">Digital Marketing</span>
                            <div className="ml-auto flex items-center">
                                <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                                <span className="ml-1 text-sm font-medium">4.5</span>
                                <span className="ml-1 text-sm text-gray-500">(298)</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Complete Digital Marketing Course</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">Learn SEO, Google Ads, Facebook Ads, email marketing, content strategy, and analytics. Grow businesses online.</p>
                        
                        <div className="flex items-center mb-4 text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1"/>
                            <span className="mr-4">25 hours</span>
                            <Users className="w-4 h-4 mr-1"/>
                            <span className="mr-4">1,123 students</span>
                            <PlayCircle className="w-4 h-4 mr-1"/>
                            <span>60 lessons</span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
                                <div className="ml-2">
                                    <p className="text-sm font-medium">Sonia Kapoor</p>
                                    <p className="text-xs text-gray-500">Marketing Expert</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-2xl font-bold text-purple-600">₹1,999</span>
                                <span className="text-gray-500 line-through ml-2">₹2,999</span>
                            </div>&nbsp;
                            <button className="enroll-btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div></Link>
            </div>

              {/* Load More Button  */}
            <div className="text-center mt-12">
                <button id="loadMoreBtn" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Load More Courses
                </button>
                <p className="text-gray-500 mt-4">Showing <span id="currentCount">6</span> of <span id="totalCount">6</span> courses</p>
            </div>
        </div>
    </section>

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

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'react-quill-new/dist/quill.snow.css';
import { Helmet } from 'react-helmet-async';
import ScrollArrowButton from './ScrollArrowButton';
import { buildApiUrl } from '../utils/apiConfig';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  useEffect(() => {
    fetch(buildApiUrl("/api/blogs"))
      .then(res => res.json())
      .then(data => {
        console.log("Blogs from API:", data);
        setBlogs(data);
      })
      .catch(console.error);
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
    // Smooth scroll to blog section
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribeMessage("✅ Successfully subscribed!");
      setEmail("");
      setTimeout(() => setSubscribeMessage(""), 3000);
    } else {
      setSubscribeMessage("❌ Please enter a valid email");
      setTimeout(() => setSubscribeMessage(""), 3000);
    }
  };

  // Filter blogs by tag
  const filteredCards = blogs.filter((card) => {
    if (activeCategory === "all") return true;
    
    const categoryTagMap = {
      "sap": ["SAP", "SAP Services", "ERP"],
      "web": ["Web Development", "App Development", "Development", "Web & App"],
      "ai": ["AI", "Digital Marketing", "Marketing", "AI & Marketing"],
      "industry": ["Industry Insights", "Industry", "Insights"],
      "news": ["Company News", "News", "Updates"]
    };
    
    const tagsForCategory = categoryTagMap[activeCategory] || [];
    return tagsForCategory.some(tag => 
      card.tag && card.tag.toLowerCase().includes(tag.toLowerCase())
    );
  });

  // Calculate category counts
  const getCategoryCount = (category) => {
    if (category === "all") return blogs.length;
    const categoryTagMap = {
      "sap": ["SAP", "SAP Services", "ERP"],
      "web": ["Web Development", "App Development", "Development", "Web & App"],
      "ai": ["AI", "Digital Marketing", "Marketing", "AI & Marketing"],
      "industry": ["Industry Insights", "Industry", "Insights"]
    };
    const tagsForCategory = categoryTagMap[category] || [];
    return blogs.filter(blog => 
      tagsForCategory.some(tag => 
        blog.tag && blog.tag.toLowerCase().includes(tag.toLowerCase())
      )
    ).length;
  };

  const visibleBlogs = filteredCards.slice(0, visibleCount);
  const hasMore = filteredCards.length > visibleCount;

  function stripHtml(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }

  return (
    <>
      <ScrollArrowButton />

      <Helmet>
        <title>Blog - SoftPro9 Academy | Insights & Articles</title>
        <meta name="description" content="Read the latest insights, tutorials, and industry articles from SoftPro9 Academy — covering SAP, web development, AI, and digital marketing." />
        <meta name="keywords" content="SoftPro9 blog, tech articles, SAP tutorials, web development blog, AI marketing" />
        <link rel="canonical" href={window.location.origin + window.location.pathname} />

        <meta property="og:title" content="SoftPro9 Academy Blog" />
        <meta property="og:description" content="Insights, tutorials, and industry perspectives from SoftPro9 Academy." />
        <meta property="og:image" content={window.location.origin + '/images/about_softpro_image1.avif'} />
        <meta property="og:url" content={window.location.origin + window.location.pathname} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SoftPro9 Academy Blog" />
        <meta name="twitter:description" content="Insights, tutorials, and industry perspectives from SoftPro9 Academy." />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SoftPro9 Academy Blog",
            "description": "Insights, tutorials, and industry perspectives from SoftPro9 Academy.",
            "url": "${window.location.origin + window.location.pathname}"
          }`}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">

          {/* Featured Section */}
          <section className="mb-16 mt-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group bg-gradient-to-r from-blue-600 to-indigo-600">
              <div className="absolute inset-0 bg-black/20"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Featured Blog Post" 
                className="w-full h-[32rem] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-4xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-blue-500 text-black text-sm font-bold px-4 py-2 rounded-full">
                    ⭐ Featured
                  </span>
                  <span className="text-blue-200 text-sm">5 min read</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  The Future of Digital Marketing with Generative AI
                </h2>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
                  Discover how AI is revolutionizing marketing strategies, from content creation to customer personalization. Stay ahead of the curve with cutting-edge insights.
                </p>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { key: "all", label: "All Articles", icon: "📚" },
                  { key: "sap", label: "SAP Services", icon: "⚙️" },
                  { key: "web", label: "Web & App Development", icon: "💻" },
                  { key: "ai", label: "AI & Digital Marketing", icon: "🤖" },
                  { key: "industry", label: "Industry Insights", icon: "📊" },
                  { key: "news", label: "Company News", icon: "📢" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => handleFilter(tab.key)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeCategory === tab.key
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="flex flex-col xl:flex-row gap-12">
            {/* Blog Cards */}
            <main className="w-full xl:w-3/4">
              {filteredCards.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📭</div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try selecting a different category</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {visibleBlogs.map((card, idx) => {
                      const imageSrc = card.imgUrl
                        ? card.imgUrl
                        : card.imgFile
                        ? `http://localhost:5000/uploads/${card.imgFile}`
                        : "https://via.placeholder.com/800x400?text=No+Image";
                       
                      const rawHtml = card.content || card.excerpt || "";
                      const plainText = stripHtml(rawHtml);
                      const excerptText = plainText.length > 100 ? plainText.substring(0, 100) + "..." : plainText;

                      return (
                        <article
                          key={idx}
                          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group border border-gray-100"
                        >
                          <div className="relative overflow-hidden">
                            <img
                              src={imageSrc}
                              alt={card.title}
                              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <span
                                className="text-xs font-bold text-white px-3 py-1 rounded-full shadow-lg"
                                style={{ backgroundColor: card.color || "#3b82f6" }}
                              >
                                {card.tag}
                              </span>
                            </div>
                          </div>

                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {card.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                              {excerptText}
                            </p>

                            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                  {card.createdBy ? card.createdBy.charAt(0).toUpperCase() : "A"}
                                </div>
                                <span>By {card.createdBy || "Admin"}</span>
                              </div>
                              <span>
                                {card.createdAt 
                                  ? new Date(card.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) 
                                  : "Aug 27, 2025"}
                              </span>
                            </div>

                            <Link to={`/blogs/${card.slug}`}>
                              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                                Read More →
                              </button>
                            </Link>
                          </div>
                        </article>
                      );
                    })}
                  </div>

                  {/* Load More Button */}
                  {hasMore && (
                    <div className="text-center mt-12">
                      <button 
                        onClick={handleLoadMore}
                        className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-600  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Load More Articles
                      </button>
                      <p className="text-gray-500 text-sm mt-4">
                        Showing {visibleBlogs.length} of {filteredCards.length} articles
                      </p>
                    </div>
                  )}
                </>
              )}
            </main>

            {/* Sidebar */}
            <aside className="w-full xl:w-1/4 space-y-8">
              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">📧</div>
                  <h4 className="text-2xl font-bold mb-2">Stay Updated!</h4>
                  <p className="text-blue-100 text-sm">Get the latest tech insights delivered to your inbox.</p>
                </div>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com" 
                    className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Subscribe Now 🚀
                  </button>
                  {subscribeMessage && (
                    <p className="text-center text-sm text-white font-semibold">
                      {subscribeMessage}
                    </p>
                  )}
                </form>
              </div>

              {/* Categories */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  📁 Categories
                </h4>
                <div className="space-y-3">
                  {[
                    { key: "sap", name: "SAP Services", color: "blue" },
                    { key: "web", name: "Web Development", color: "emerald" },
                    { key: "ai", name: "AI & Marketing", color: "purple" },
                    { key: "industry", name: "Industry News", color: "amber" },
                  ].map((category, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleFilter(category.key)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                        activeCategory === category.key
                          ? 'bg-blue-100 border-2 border-blue-500'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium text-gray-700">{category.name}</span>
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {getCategoryCount(category.key)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white shadow-xl">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  🌟 Follow Us
                </h4>
                <p className="text-gray-300 text-sm mb-6">Connect with us on social media for daily updates!</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "LinkedIn", icon: "💼", color: "bg-blue-600", link: "https://www.linkedin.com/company/softpro9" },
                    { name: "Twitter", icon: "🐦", color: "bg-sky-500", link: "https://x.com/softpro9" },
                    { name: "Facebook", icon: "📘", color: "bg-blue-700", link: "https://www.facebook.com/softpro9" },
                    { name: "Instagram", icon: "📸", color: "bg-pink-600", link: "https://www.instagram.com/softpro9_its/" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 p-3 ${social.color} rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <span>{social.icon}</span>
                      <span className="text-sm font-semibold">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* CTA */}
          <section className="mt-20 py-16 px-8 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                Don't miss out on the latest technology trends and insights. Join thousands of professionals who trust our expertise.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full sm:flex-1 px-6 py-4 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
                  required
                />
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Started Now →
                </button>
              </form>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
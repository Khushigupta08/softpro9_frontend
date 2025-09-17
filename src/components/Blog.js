import { useState } from 'react'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleFilter = (category) => {
    setActiveCategory(category);
  };

  const blogCards = [
    { category: "sap", title: "5 Ways SAP S/4HANA Can Transform Your Business Operations", tag: "SAP Services", color: "blue", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", excerpt: "Discover how SAP S/4HANA can revolutionize your business processes with real-time analytics and intelligent automation." },
    { category: "web", title: "Choosing the Right Tech Stack for Modern Web Applications", tag: "Web & App", color: "emerald", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop", excerpt: "A comprehensive guide to selecting the perfect technology stack for your next web development project." },
    { category: "ai", title: "AI-Powered SEO: The New Frontier in Digital Marketing", tag: "Digital Marketing & AI", color: "purple", img: "https://images.unsplash.com/photo-1620712943543-95fc69614534?q=80&w=1932&auto=format&fit=crop", excerpt: "Explore how artificial intelligence is transforming SEO strategies and driving better search results." },
    { category: "news", title: "SoftPro9 Celebrates 5 Years of Innovation Excellence", tag: "Company News", color: "rose", img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop", excerpt: "Join us as we celebrate five years of delivering cutting-edge technology solutions to businesses worldwide." },
    { category: "industry", title: "Top 10 Tech Trends to Watch in 2025 and Beyond", tag: "Industry Insights", color: "amber", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop", excerpt: "Stay ahead of the curve with these emerging technology trends that will shape the future of business." },
    { category: "web", title: "The Rise of Progressive Web Apps: A Complete Guide", tag: "Web & App", color: "emerald", img: "https://images.unsplash.com/photo-1559028006-448665bd7c24?q=80&w=2070&auto=format&fit=crop", excerpt: "Learn how Progressive Web Apps are bridging the gap between web and mobile applications." },
    { category: "ai", title: "Machine Learning in Business: Practical Applications", tag: "Digital Marketing & AI", color: "purple", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop", excerpt: "Discover real-world applications of machine learning that can transform your business operations." },
    { category: "sap", title: "SAP Cloud Migration: Best Practices and Strategies", tag: "SAP Services", color: "blue", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop", excerpt: "A step-by-step guide to successfully migrating your SAP systems to the cloud infrastructure." },
    { category: "industry", title: "Cybersecurity Trends Every Business Should Know", tag: "Industry Insights", color: "amber", img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2070&auto=format&fit=crop", excerpt: "Protect your business with these essential cybersecurity trends and best practices for 2025." }
  ];

  const filteredCards = blogCards.filter((card) => activeCategory === "all" || card.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center py-8 mb-12">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SoftPro9
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
              Insights & Updates
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 hover:border-blue-300">
              Newsletter
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </header>

        {/* Featured Section */}
        <section className="mb-16">
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
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Read Full Article →
              </button>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {filteredCards.map((card, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-bold text-white bg-${card.color}-600 px-3 py-1 rounded-full shadow-lg`}>
                        {card.tag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {card.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          A
                        </div>
                        <span>By Admin</span>
                      </div>
                      <span>Aug 27, 2025</span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Load More Articles
              </button>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="w-full xl:w-1/4 space-y-8">
            {/* Newsletter Widget */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white shadow-xl">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">📧</div>
                <h4 className="text-2xl font-bold mb-2">Stay Updated!</h4>
                <p className="text-blue-100 text-sm">Get the latest tech insights delivered to your inbox.</p>
              </div>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button 
                  type="button" 
                  className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Subscribe Now 🚀
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                🔥 Trending Posts
              </h4>
              <ul className="space-y-5">
                {blogCards.slice(0, 4).map((post, idx) => (
                  <li key={idx} className="flex gap-4 group cursor-pointer">
                    <img 
                      src={post.img} 
                      className="w-16 h-16 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300 shadow-md" 
                      alt="trending post"
                    />
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h5>
                      <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                📁 Categories
              </h4>
              <div className="space-y-3">
                {[
                  { name: "SAP Services", count: "12", color: "blue" },
                  { name: "Web Development", count: "18", color: "emerald" },
                  { name: "AI & Marketing", count: "9", color: "purple" },
                  { name: "Industry News", count: "15", color: "amber" },
                ].map((category, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <span className="font-medium text-gray-700">{category.name}</span>
                    <span className={`bg-${category.color}-100 text-${category.color}-600 text-xs font-bold px-2 py-1 rounded-full`}>
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Follow */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                🌟 Follow Us
              </h4>
              <p className="text-gray-300 text-sm mb-6">Connect with us on social media for daily updates!</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "LinkedIn", icon: "💼", color: "blue-600" },
                  { name: "Twitter", icon: "🐦", color: "sky-500" },
                  { name: "Facebook", icon: "📘", color: "blue-700" },
                  { name: "GitHub", icon: "⚡", color: "gray-700" },
                ].map((social, idx) => (
                  <button
                    key={idx}
                    className={`flex items-center justify-center gap-2 p-3 bg-${social.color} rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <span>{social.icon}</span>
                    <span className="text-sm font-semibold">{social.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* CTA Section */}
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
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-1 px-6 py-4 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
              />
              <button className="w-full sm:w-auto bg-blue-200 text-gray-900 font-bold py-4 px-8 rounded-2xl hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started Now →
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
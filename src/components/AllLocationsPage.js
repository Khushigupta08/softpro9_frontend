import { MapPin, Search, Filter, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const API_URL = 'http://localhost:5000';

export default function AllLocationsPage() {
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadData();
  }, []);

  useEffect(() => {
    filterLocations();
  }, [searchQuery, selectedCategory, selectedCity, locations]);

  const loadData = async () => {
    try {
      const [locationsRes, categoriesRes] = await Promise.all([
        fetch(`${API_URL}/api/locations?isActive=true`),
        fetch(`${API_URL}/api/locations/categories/list`)
      ]);

      const locationsData = await locationsRes.json();
      const categoriesData = await categoriesRes.json();

      if (locationsData.success) {
        setLocations(locationsData.data);
        setFilteredLocations(locationsData.data);
        
        // Extract unique cities
        const uniqueCities = [...new Set(locationsData.data.map(loc => 
          loc.location.split(',')[0].trim()
        ))].sort();
        setCities(uniqueCities);
      }

      if (categoriesData.success) {
        setCategories(categoriesData.data);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterLocations = () => {
    let filtered = [...locations];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(loc =>
        loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(loc => loc.category === selectedCategory);
    }

    // City filter
    if (selectedCity !== 'all') {
      filtered = filtered.filter(loc => 
        loc.location.toLowerCase().includes(selectedCity.toLowerCase())
      );
    }

    setFilteredLocations(filtered);
  };

  const groupedByCategory = {};
  filteredLocations.forEach(loc => {
    if (!groupedByCategory[loc.category]) {
      groupedByCategory[loc.category] = [];
    }
    groupedByCategory[loc.category].push(loc);
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading locations...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>All Training Locations | SoftPro9 - Find Training Near You</title>
        <meta name="description" content="Explore SoftPro9 training locations across India. Find SAP, Digital Marketing, Data Science, Full Stack Development courses near you." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Training Near You
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl">
              SoftPro9 operates across {cities.length}+ cities in India. 
              Discover world-class training programs in your city.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by course, city, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-4 flex-wrap">
              <Filter className="h-5 w-5 text-gray-600" />
              
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>

              {/* Results Count */}
              <span className="ml-auto text-sm text-gray-600">
                {filteredLocations.length} locations found
              </span>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredLocations.length === 0 ? (
            <div className="text-center py-20">
              <MapPin className="h-20 w-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No locations found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedCity('all');
                }}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            Object.keys(groupedByCategory).map(category => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">
                    {category}
                  </span>
                  <span className="text-gray-400 text-lg">
                    ({groupedByCategory[category].length})
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedByCategory[category].map(location => (
                    <Link
                      key={location.slug}
                      to={`/location/${location.slug}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-indigo-300 transform hover:-translate-y-1"
                    >
                      {/* Header */}
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5">
                        <div className="flex items-center gap-2 text-white mb-3">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm font-medium">{location.location}</span>
                        </div>
                        <h3 className="text-white font-bold text-xl line-clamp-2 group-hover:text-indigo-100 transition-colors">
                          {location.course}
                        </h3>
                      </div>

                      {/* Body */}
                      <div className="p-5">
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {location.description}
                        </p>

                        {/* Stats */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4 text-indigo-600" />
                            <span>{location.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="h-4 w-4 text-indigo-600" />
                            <span>{location.mode}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <TrendingUp className="h-4 w-4 text-indigo-600" />
                            <span className="font-semibold">{location.fees}</span>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-indigo-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Details
                            <ArrowRight className="h-4 w-4" />
                          </span>
                          {location.isSAP && (
                            <span className="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded">
                              SAP
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
import { MapPin, Search, Filter, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { buildApiUrl } from '../utils/apiConfig';

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
      const locationsRes = await fetch(buildApiUrl('/api/locations?isActive=true'));
      const locationsData = await locationsRes.json();

      if (locationsData.success) {
        setLocations(locationsData.data);
        setFilteredLocations(locationsData.data);
        
        const uniqueCities = [...new Set(locationsData.data.map(loc => 
          loc.location.split(',')[0].trim()
        ))].sort();
        setCities(uniqueCities);

        const uniqueCategories = [...new Set(locationsData.data.map(loc => loc.category))].sort();
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error('Error loading locations:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterLocations = () => {
    let filtered = locations;

    if (searchQuery) {
      filtered = filtered.filter(loc =>
        loc.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(loc => loc.category === selectedCategory);
    }

    if (selectedCity !== 'all') {
      filtered = filtered.filter(loc => loc.location.split(',')[0].trim() === selectedCity);
    }

    setFilteredLocations(filtered);
  };

  if (loading) return <div className="text-center py-12">Loading locations...</div>;

  return (
    <>
      <Helmet>
        <title>All Training Locations - SoftPro9 Academy</title>
        <meta name="description" content="Find training locations near you" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Training Locations</h1>
        
        {/* Search and Filters */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Cities</option>
            {cities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        {/* Results */}
        {filteredLocations.length === 0 ? (
          <div className="text-center text-gray-600 py-12">No locations found</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map(location => (
              <Link
                key={location.slug}
                to={`/location/${location.slug}`}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-semibold">{location.location}</span>
                </div>
                <h3 className="font-bold mb-2">{location.course}</h3>
                <p className="text-sm text-gray-600 mb-3">{location.description?.slice(0, 100)}...</p>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {location.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" /> {location.mode}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

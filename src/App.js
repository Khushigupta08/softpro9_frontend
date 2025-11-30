import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Academy from './components/Academy';
import Contact from './components/Contact';
import Service from './components/Service';
import Carrer from './components/Carrer';
import Course from './components/Course';
import Courselist from './components/Courselist';
import Industries from './components/Industries';
import Footer from './components/Footer';
import FooterSAPLocations from './components/FooterSAPLocations';
import Web from './components/web';
import Sapservice from './components/Sapservice';
import Digitalmarketing from './components/Digitalmarketing';
import Blog from './components/Blog';
import Recruitment from './components/Recruitment';
import Policy from './components/Policy';
import RefundPolicy from './components/RefundPolicy';
import Faq from './components/Faq';
import BlogDetail from './components/BlogDetail';
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from './components/Dashboard';
import OAuthCallback from './components/OAuthCallback';
import { AuthProvider } from './authContext';
import Dummy from './components/dummy';
import EmailVerification from './components/EmailVerification';
import Conditions from './components/Conditions';
import ConsultationFormModal from "./components/ConsultationFormModal";
import LocationPage from './components/LocationPage'; // NEW: Import LocationPage
import Franchise from './components/Franchise';
import AllLocationsPage from './components/AllLocationsPage';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminProtectedRoute from './admin/AdminProtectedRoute';

import './App.css';

// Conditional Footer Component
function ConditionalFooter() {
  const location = useLocation();
  
  // ✅ Location pages handle their own footer
  if (location.pathname.startsWith('/location/')) {
    return null; // Don't show footer, LocationPage will handle it
  }
  
  // SAP related pages - show Footer with SAP locations
  const sapPages = ['/sap'];
  const isSAPPage = sapPages.some(page => location.pathname.startsWith(page));
  
  // Render appropriate footer for other pages
  return <Footer showSAPLocations={isSAPPage} />;
}

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/service" element={<Service />} />
            <Route path="/course/:slug" element={<Course />} />
            <Route path="/courselist" element={<Courselist />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/franchise" element={<Franchise />} />


            {/* our company routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industry" element={<Industries />} />
            <Route path="/carrer" element={<Carrer />} />

            {/* service routes */}
            <Route path="/web" element={<Web />} />
            <Route path="/sap" element={<Sapservice />} />
            <Route path="/digital" element={<Digitalmarketing />} />
            <Route path="/recruitment" element={<Recruitment />} />

            {/* privacy routes */}
            <Route path="/policy" element={<Policy />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/faq" element={<Faq />} />

            {/* OAuth callback route */}
            <Route path="/auth-callback" element={<OAuthCallback />} />
            <Route path="/verify-email" element={<EmailVerification />} />
            
            {/* NEW: Dynamic Location Route - single page for all locations */}
            <Route path="/location/:slug" element={<LocationPage />} />
            <Route path="/all-locations" element={<AllLocationsPage />} />


            {/* after login route */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Admin Panel Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              }
            />
          </Routes>

          {/* Conditional Footer - automatically switches based on page */}
          <ConditionalFooter />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
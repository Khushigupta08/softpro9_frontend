import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../authContext";
import { BookOpen, CreditCard, Calendar, FileText, Settings, LogOut, User, TrendingUp, Award, Clock } from "lucide-react";
import ScrollArrowButton from './ScrollArrowButton';
import { buildApiUrl } from "../utils/apiConfig";

const Sidebar = ({ active, setActive }) => {
  const items = [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "courses", label: "Enrolled Courses", icon: BookOpen },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "attendance", label: "Attendance", icon: Calendar },
    { id: "classes", label: "Class Records", icon: FileText },
    { id: "settings", label: "Account", icon: Settings },
  ];

  return (
    <aside className="w-full md:w-64 bg-white rounded-xl shadow-sm p-4 mt-3">
      <nav className="space-y-1">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium flex items-center gap-3 ${
                active === it.id 
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md" 
                  : "text-gray-700 hover:bg-gray-50 hover:translate-x-1"
              }`}
            >
              <Icon size={18} />
              {it.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

const Overview = ({ profile, enrolledCount, savedCourses }) => (
  <div className="mt-5">
    <div className="mt-5">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-4">Learning Overview</h2>
      <p className="text-gray-500 mt-1">Track your learning journey</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
          <div className="text-sm font-medium text-gray-600">Student Profile</div>
        </div>
        <div className="mt-2 text-xl font-bold text-gray-800">{profile?.username || profile?.email}</div>
        <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
          <Clock size={12} />
          Joined {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : "-"}
        </div>
      </div>

      <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <BookOpen size={20} className="text-white" />
          </div>
          <div className="text-sm font-medium text-gray-600">Enrolled Courses</div>
        </div>
        <div className="mt-2 text-4xl font-bold text-purple-600">{enrolledCount}</div>
        <div className="text-xs text-gray-500 mt-1">Active enrollments</div>
      </div>

      <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
            <Award size={20} className="text-white" />
          </div>
          <div className="text-sm font-medium text-gray-600">Overall Progress</div>
        </div>
        <div className="mt-2 text-4xl font-bold text-green-600">—</div>
        <div className="text-xs text-gray-500 mt-1">Coming soon</div>
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Saved / Liked Courses</h3>
      <div className="p-4 bg-white rounded-xl border">
        {(!savedCourses || savedCourses.length === 0) ? (
          <p className="text-sm text-gray-500">You haven't saved any courses yet.</p>
        ) : (
          <ul className="space-y-2">
            {savedCourses.slice(0,6).map(sc => (
              <li key={sc.id} className="flex justify-between items-center">
                <div className="text-sm text-gray-700">{sc.title}</div>
                <div className="text-xs text-gray-400">{new Date(sc.createdAt || sc.updatedAt || Date.now()).toLocaleDateString()}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

const EnrolledCourses = ({ courses }) => {
  if (!courses) return null;
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Your Courses</h3>
        <p className="text-gray-500 mt-1">Continue your learning journey</p>
      </div>
      
      {courses.length === 0 ? (
        <div className="p-10 bg-white rounded-xl border-2 border-dashed border-gray-200 text-center">
          <BookOpen size={48} className="mx-auto text-gray-300 mb-3" />
          <p className="text-gray-600 font-medium">You are not enrolled in any courses yet.</p>
          <p className="text-sm text-gray-400 mt-1">Start exploring courses to begin your journey</p>
        </div>
      ) : (
        <div className="space-y-4">
          {courses.map((c) => (
            <div key={c.id} className="group p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative">
                    <img 
                      src={c.backgroundImageUrl || '/images/about_softpro_image1.avif'} 
                      alt={c.title} 
                      className="w-24 h-16 object-cover rounded-lg shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors">{c.title}</div>
                    <div className="text-sm text-gray-500 mt-1 line-clamp-2">{c.shortDescription || (c.description && c.description.slice(0, 120))}</div>
                  </div>
                </div>
                
                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-right">
                  <div className="bg-indigo-50 px-3 py-1.5 rounded-lg">
                    <div className="text-xs text-indigo-600 font-medium">Enrolled</div>
                    <div className="font-semibold text-sm text-gray-800">{new Date(c.enrolledAt).toLocaleDateString()}</div>
                  </div>
                  <div className="bg-purple-50 px-3 py-1.5 rounded-lg">
                    <div className="text-xs text-purple-600 font-medium">Progress</div>
                    <div className="font-semibold text-sm text-gray-800">{c.progressPct ?? 0}%</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [active, setActive] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(user || null);
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [savedCourses, setSavedCourses] = useState([]);

  const fetchRef = useRef(async () => {});

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      setError(null);
      try {
        let profileData = null;
        try {
          const me = await axios.get(buildApiUrl("/student/auth/me"));
          profileData = me.data;
          setProfile(profileData);
        } catch (err) {
          console.warn("/student/auth/me failed", err?.response?.data || err.message);
        }

        const [coursesRes, requestsRes] = await Promise.all([
          axios.get(buildApiUrl("/api/courses")),
          axios.get(buildApiUrl("/api/access-requests")),
        ]);

        const allCourses = Array.isArray(coursesRes.data) ? coursesRes.data : [];
        const allRequests = Array.isArray(requestsRes.data) ? requestsRes.data : [];

        const email = profileData?.email || profile?.email;
        const myRequests = allRequests.filter((r) => r.email && email && r.email.toLowerCase() === email.toLowerCase());

        const myCourseIds = new Set(myRequests.map((r) => Number(r.courseId)));
        const myCourses = allCourses
          .filter((c) => myCourseIds.has(Number(c.id)))
          .map((c) => {
            const req = myRequests.find((r) => Number(r.courseId) === Number(c.id));
            return {
              ...c,
              enrolledAt: req?.createdAt || new Date().toISOString(),
              progressPct: 0,
            };
          });

        setCourses(allCourses);
        setEnrolledCourses(myCourses);
        // fetch saved courses for this student (if authenticated)
        try {
          const token = localStorage.getItem('token');
          const headers = token ? { Authorization: `Bearer ${token}` } : {};
          const savedRes = await axios.get(buildApiUrl("/student/saved-courses"), { headers });
          setSavedCourses(Array.isArray(savedRes.data) ? savedRes.data : []);
        } catch (err) {
          // ignore if not authenticated or endpoint fails
        }
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || err.message || "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchRef.current = doFetch;
    fetchRef.current();

    let bc;
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        bc = new BroadcastChannel('softpro9_channel');
        bc.onmessage = (ev) => {
          if (ev?.data && fetchRef.current) fetchRef.current();
        };
      }
    } catch (e) {}

    const onStorage = (ev) => {
      if (!ev) return;
      if (ev.key && (ev.key.includes('student-registered') || ev.key.includes('access-request'))) {
        if (fetchRef.current) fetchRef.current();
      }
    };
    window.addEventListener('storage', onStorage);

    const onVisibility = () => {
      if (!document.hidden && fetchRef.current) fetchRef.current();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const interval = setInterval(() => { if (fetchRef.current) fetchRef.current(); }, 30000);

    return () => {
      try { if (bc) bc.close(); } catch (e) {}
      window.removeEventListener('storage', onStorage);
      document.removeEventListener('visibilitychange', onVisibility);
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[70vh] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h3>
          <p className="text-red-600 mb-6">{error}</p>
          <button 
            onClick={() => fetchRef.current && fetchRef.current()} 
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    <ScrollArrowButton />

    <div className="min-h-[70vh] bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-4">
              <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {(profile?.username || profile?.email || "S").charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800">{profile?.username || profile?.email}</div>
                    <div className="text-xs text-gray-500 truncate">{profile?.email}</div>
                  </div>
                </div>
                <button 
                  onClick={logout} 
                  className="w-full text-sm py-2.5 px-4 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>

              <Sidebar active={active} setActive={setActive} />
            </div>
          </div>

          <main className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              {active === 'overview' && <Overview profile={profile} enrolledCount={enrolledCourses.length} savedCourses={savedCourses} />}
              {active === 'courses' && <EnrolledCourses courses={enrolledCourses} />}

              {active === 'payments' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Payments</h2>
                    <p className="text-gray-500 mt-1">View your payment history</p>
                  </div>
                  <div className="p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-200 text-center">
                    <CreditCard size={48} className="mx-auto text-gray-300 mb-3" />
                    <p className="text-gray-600 font-medium">No payment records found.</p>
                  </div>
                </div>
              )}

              {active === 'attendance' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Attendance</h2>
                    <p className="text-gray-500 mt-1">Track your attendance records</p>
                  </div>
                  <div className="p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-200 text-center">
                    <Calendar size={48} className="mx-auto text-gray-300 mb-3" />
                    <p className="text-gray-600 font-medium">Attendance tracking is not enabled yet.</p>
                  </div>
                </div>
              )}

              {active === 'classes' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Class Records</h2>
                    <p className="text-gray-500 mt-1">View your class history</p>
                  </div>
                  <div className="p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-200 text-center">
                    <FileText size={48} className="mx-auto text-gray-300 mb-3" />
                    <p className="text-gray-600 font-medium">No class records to show.</p>
                  </div>
                </div>
              )}

              {active === 'settings' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Account Settings</h2>
                    <p className="text-gray-500 mt-1">Manage your account preferences</p>
                  </div>
                  <div className="p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-200 text-center">
                    <Settings size={48} className="mx-auto text-gray-300 mb-3" />
                    <p className="text-gray-600 font-medium">Profile settings will appear here.</p>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
import React, { useState } from "react";

const AuthModal = ({ onClose, initialMode = "login", switchToRegister, switchToLogin }) => {
  const [mode, setMode] = useState(initialMode);
  const [form, setForm] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState("");

  // Mock auth functions - replace with real useAuth hook
  const login = async (credentials) => {
    console.log("Login:", credentials);
  };

  const register = async (userData) => {
    console.log("Register:", userData);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (mode === "login") {
        await login({ email: form.email, password: form.password });
        onClose();
      } else {
        await register({ username: form.username, email: form.email, mobile: form.mobile, password: form.password });
        setMode("login");
      }
    } catch (err) {
      setError(err.message || (mode === "login" ? "Invalid credentials" : "Registration failed"));
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/student/auth/google";
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-pink-900/95  flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl relative overflow-hidden flex max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        {/* Left Side - Image/Illustration Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full"></div>
          </div>
          <div className="relative z-10 text-white space-y-8 text-center">
            <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">Welcome to Learning Hub</h1>
              <p className="text-lg text-white/90 leading-relaxed">Unlock your potential with personalized learning experiences tailored just for you</p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="bg-white/10  rounded-xl p-4">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="bg-white/10  rounded-xl p-4">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm text-white/80">Courses</div>
              </div>
              <div className="bg-white/10  rounded-xl p-4">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm text-white/80">Success</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section (Scrollable) */}
        <div className="w-full lg:w-1/2 flex flex-col relative">
          <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-all duration-200 hover:rotate-90 transform z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="overflow-y-auto flex-1 p-8 lg:p-12">
            <div className="text-center mb-8 pt-4">
              <div className="inline-block p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {mode === "login" ? "Welcome To Softpro9!" : "Create Account"}
              </h2>
              <p className="text-gray-500 text-sm">{mode === "login" ? "Login to continue your learning journey" : "Join thousands of learners today"}</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 rounded-lg text-red-700 text-sm flex items-start gap-3 shadow-sm">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-5">
              {mode === "register" && (
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <input
                    name="username"
                    placeholder="Full Name"
                    value={form.username}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("username")}
                    required
                    className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl transition-all duration-300 outline-none bg-gray-50 ${
                      focusedField === "username" ? "border-indigo-500 bg-white shadow-lg shadow-indigo-100 scale-[1.02]" : "border-gray-200 hover:border-gray-300 hover:bg-white"
                    }`}
                  />
                </div>
              )}

              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}

                  required
                  className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl transition-all duration-300 outline-none bg-gray-50 ${
                    focusedField === "email" ? "border-indigo-500 bg-white shadow-lg shadow-indigo-100 scale-[1.02]" : "border-gray-200 hover:border-gray-300 hover:bg-white"
                  }`}
                />
              </div>

              {mode === "register" && (
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <input
                    name="mobile"
                    placeholder="Mobile Number"
                    value={form.mobile}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("mobile")}
                    required
                    className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl transition-all duration-300 outline-none bg-gray-50 ${
                      focusedField === "mobile" ? "border-indigo-500 bg-white shadow-lg shadow-indigo-100 scale-[1.02]" : "border-gray-200 hover:border-gray-300 hover:bg-white"
                    }`}
                  />
                </div>
              )}

              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("password")}
                  required
                  className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl transition-all duration-300 outline-none bg-gray-50 ${
                    focusedField === "password" ? "border-indigo-500 bg-white shadow-lg shadow-indigo-100 scale-[1.02]" : "border-gray-200 hover:border-gray-300 hover:bg-white"
                  }`}
                />
              </div>

              <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-6 relative overflow-hidden group">
                <span className="relative z-10">{mode === "login" ? "Login to Account" : "Create Account"}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Resend Verification Section */}
            {mode === "login" && (
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-gray-900 mb-2">Need to verify your email?</p>
                      <p className="text-sm text-gray-600 mb-4">
                        {!form.email ? "Enter your email address above first" : "Click below to receive a new verification link"}
                      </p>
                      <button
                        onClick={async () => {
                          if (!form.email) {
                            setError("Please enter your email address first.");
                            return;
                          }
                          try {
                            const res = await fetch("http://localhost:5000/student/auth/resend-verification", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ email: form.email }),
                            });
                            const data = await res.json();
                            if (res.ok) {
                              setError(data.message || "Verification email resent. Please check your inbox.");
                            } else {
                              setError(data.message || "Failed to resend verification email.");
                            }
                          } catch (error) {
                            setError("Error sending request. Please try again.");
                          }
                        }}
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600 transition-all text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                        Resend Verification Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">OR CONTINUE WITH</span>
              </div>
            </div>

            <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md group">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="mt-8 text-center pb-4">
              {mode === "login" ? (
                <p className="text-gray-600 text-sm">
                  Don't have an account? 
                  <button onClick={() => { setMode('register'); if (switchToRegister) switchToRegister(); }} className="ml-1 text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-colors">
                    Sign up free
                  </button>
                </p>
              ) : (
                <p className="text-gray-600 text-sm">
                  Already have an account? 
                  <button onClick={() => { setMode('login'); if (switchToLogin) switchToLogin(); }} className="ml-1 text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-colors">
                    Login here
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
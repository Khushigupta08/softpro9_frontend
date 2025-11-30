import React, { useState } from "react";
import { useAuth } from "../authContext";
import { buildApiUrl } from "../utils/apiConfig";

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
  const { login, register } = useAuth();

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
        const result = await register({ 
          username: form.username, 
          email: form.email, 
          mobile: form.mobile, 
          password: form.password 
        });
        if (result.emailStatus !== 'failed') {
          setMode("login");
        } else {
          setError(`Registration successful but verification email could not be sent. Please use resend verification after logging in.`);
        }
      }
    } catch (err) {
      setError(err.message || (mode === "login" ? "Invalid credentials" : "Registration failed"));
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = buildApiUrl("/student/auth/google");
  };

  return (
    <div 
      className="inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-modalFadeIn" 
      style={{ overflowY: 'auto' }}
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative my-8 animate-modalSlideUp">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl"></div>
          <button
            onClick={onClose}
            className="absolute right-4 top-6 text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:rotate-90 transform transition-transform z-10 bg-white rounded-full p-1 shadow-md"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8 pt-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {mode === "login" ? "Welcome Back" : "Create Account"}
              </h2>
              <p className="text-gray-500 text-sm">
                {mode === "login" ? "Login to continue your journey" : "Join our community today"}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r text-red-700 text-sm animate-modalShake">
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "register" && (
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    placeholder="Full Name"
                    value={form.username}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("username")}
                    onBlur={() => setFocusedField("")}
                    required
                    style={{ paddingLeft: "40px" }}
                    className={`w-full px-5 py-3 border-2 rounded-lg transition-all duration-200 outline-none ${
                      focusedField === "username" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  />
                  <svg
                    className={`w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${
                      focusedField === "username" ? "text-blue-500" : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  required
                  style={{ paddingLeft: "40px" }}
                  className={`w-full px-5 py-3 border-2 rounded-lg transition-all duration-200 outline-none ${
                    focusedField === "email" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                />
                <svg
                  className={`w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${
                    focusedField === "email" ? "text-blue-500" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              {mode === "register" && (
                <div className="relative">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={form.mobile}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("mobile")}
                    onBlur={() => setFocusedField("")}
                    required
                    style={{ paddingLeft: "40px" }}
                    className={`w-full px-5 py-3 border-2 rounded-lg transition-all duration-200 outline-none ${
                      focusedField === "mobile" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  />
                  <svg
                    className={`w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${
                      focusedField === "mobile" ? "text-blue-500" : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              )}

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField("")}
                  required
                  style={{ paddingLeft: "40px" }}
                  className={`w-full px-5 py-3 border-2 rounded-lg transition-all duration-200 outline-none ${
                    focusedField === "password" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                />
                <svg
                  className={`w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${
                    focusedField === "password" ? "text-blue-500" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl mt-6"
              >
                {mode === "login" ? "Login" : "Register"}
              </button>
            </form>

            <div className="relative my-6 pt-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR CONTINUE WITH</span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Gmail
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                {mode === "login" 
                  ? "New user? " 
                  : "Already have an account? "
                }
                <button
                  onClick={() => {
                    if (mode === "login") {
                      setMode("register");
                      switchToRegister?.();
                    } else {
                      setMode("login");
                      switchToLogin?.();
                    }
                  }}
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
                >
                  {mode === "login" ? "Register here" : "Login here"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

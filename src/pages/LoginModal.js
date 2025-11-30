import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";
import { buildApiUrl } from "../utils/apiConfig";

const LoginModal = ({ onClose, switchToRegister }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const [resendMsg, setResendMsg] = useState("");
  const { login } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('success'); // 'success', 'error', 'expired'

  useEffect(() => {
    // Check URL parameters for verification status
    const verified = searchParams.get('verified');
    const message = searchParams.get('message');

    if (verified && message) {
      setPopupMessage(decodeURIComponent(message));
      setPopupType(verified);
      setShowPopup(true);

      // Clean URL after showing popup (remove query params)
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 100);

      // Auto-hide popup after 5 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    }
  }, [searchParams, navigate]);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResendMsg("");
    try {
      await login({ email: form.email, password: form.password });
      onClose();
    } catch (err) {
      const errorMessage = err.message || "Invalid credentials";
      setError(errorMessage);
      // Show resend message if the error indicates unverified account
      if (errorMessage.toLowerCase().includes("not verified") || errorMessage.toLowerCase().includes("verify")) {
        setResendMsg("Click 'Resend Verification Email' below to get a new verification link.");
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = buildApiUrl("/student/auth/google");
  };

  const handleResendVerification = async () => {
    setResendMsg("");
    if (!form.email) {
      setResendMsg("Please enter your email to resend verification.");
      return;
    }
    try {
      const res = await fetch(buildApiUrl("/student/auth/resend-verification"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });
      const data = await res.json();
      if (res.ok) {
        setResendMsg(data.message || "Verification email resent. Please check your inbox.");
      } else {
        setResendMsg(data.message || "Failed to resend verification email.");
      }
    } catch (error) {
      setResendMsg("Error sending request. Please try again.");
    }
  };

  return (
    <>
      {/* Verification Popup */}
      {showPopup && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4 animate-fadeIn" 
          onClick={closePopup}
          style={{ overflowY: 'auto' }}
        >
          <div 
            className={`bg-white rounded-xl shadow-2xl max-w-md w-[90%] p-10 text-center relative my-auto animate-slideUp ${
              popupType === 'success' ? 'border-t-4 border-green-500' : 'border-t-4 border-red-500'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button for popup */}
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:rotate-90 transform transition-transform z-10 bg-white rounded-full p-1 shadow-sm"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-5 mt-2 animate-scaleIn">
              {popupType === 'success' && (
                <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#10b981" />
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {(popupType === 'error' || popupType === 'expired') && (
                <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#ef4444" />
                  <path d="M15 9l-6 6M9 9l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${popupType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {popupType === 'success' ? 'Verification Successful!' : 'Verification Failed'}
            </h3>
            <p className="text-gray-600 text-base mb-6 leading-relaxed">{popupMessage}</p>
            <button 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
              onClick={closePopup}
            >
              Continue to Login
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
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
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                <p className="text-gray-500 text-sm">Login to continue your journey</p>
              </div>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r text-red-700 text-sm animate-modalShake">
                  <p>{error}</p>
                  {error.toLowerCase().includes("not verified") && (
                    <p className="mt-2 text-sm font-medium text-red-800">
                      Please use the verification button below to receive a new verification link.
                    </p>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className={`w-full px-5 py-3  border-2 rounded-lg transition-all duration-200 outline-none ${
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
                  Login
                </button>
              </form>

              {/* Resend Verification Button - Always Visible */}
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-3">Need to verify your email?</p>
                  <button
                    onClick={handleResendVerification}
                    className="w-full py-4 px-6 mb-3 inline-flex justify-center items-center gap-3 rounded-lg bg-yellow-100 border-2 border-yellow-300 text-yellow-800 hover:bg-yellow-200 hover:border-yellow-400 transition-all text-base font-semibold shadow-sm hover:shadow-md transform hover:scale-[1.02]"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Resend Verification Email
                  </button>
                  {!form.email ? (
                    <p className="text-sm text-gray-600">Enter your email address above first</p>
                  ) : (
                    <p className="text-sm text-gray-600">Click to get a new verification link</p>
                  )}
                </div>
                {resendMsg && (
                  <div className="mt-3 text-center p-3 rounded bg-green-50 border border-green-200">
                    <p className="text-sm text-green-700">{resendMsg}</p>
                  </div>
                )}
              </div>

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
                  New user?{" "}
                  <button
                    onClick={switchToRegister}
                    className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
                  >
                    Register here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;


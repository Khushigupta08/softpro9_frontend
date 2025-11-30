import React, { useState, useEffect } from "react";
import { useAuth } from "../authContext";

const RegisterModal = ({ onClose, switchToLogin }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const { register } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // add reCAPTCHA token if configured
      const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
      let recaptchaToken = null;
      if (siteKey && window.grecaptcha) {
        await window.grecaptcha.ready();
        recaptchaToken = await window.grecaptcha.execute(siteKey, { action: 'register' });
      }
      const result = await register({ ...form, recaptchaToken });
      if (result.emailStatus === 'failed') {
        // Show warning but don't prevent registration completion
        setError(`Registration successful but verification email could not be sent: ${result.emailError || 'Unknown error'}. Please use the resend verification option after logging in.`);
        // Give user time to read the message before closing
        setTimeout(() => {
          onClose();
          switchToLogin();
        }, 3000);
      } else {
        onClose();
        switchToLogin();
      }
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/student/auth/google";
  };

  useEffect(() => {
    // prevent background scrolling while modal is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden animate-modalSlideUp">

      {/* Left Image Section */}
      <div className="hidden md:block relative">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          className="w-full h-full object-cover"
          alt="signup"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold drop-shadow">Join Our Community</h3>
          <p className="text-sm opacity-90">Create your account & start learning</p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="relative p-8 bg-white max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-all hover:rotate-90"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6 mt-6">
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-500 text-sm">Join us and start your journey</p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            name="username"
            placeholder="Full Name"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        {/* OR Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 transition"
        >
          <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" className="w-5" alt="google" />
          Continue with Google
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <button onClick={switchToLogin} className="text-blue-600 font-semibold">
              Login here
            </button>
          </p>
        </div>

      </div>
    </div>
  </div>

  );
};

export default RegisterModal;

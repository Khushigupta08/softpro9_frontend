import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
// Dynamically load Google reCAPTCHA script when site key is provided
const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
if (RECAPTCHA_SITE_KEY && typeof window !== 'undefined') {
  const s = document.createElement('script');
  s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
}
root.render(
  <React.StrictMode>
    <HelmetProvider>      {/* ✅ wrap your App inside HelmetProvider */}
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();

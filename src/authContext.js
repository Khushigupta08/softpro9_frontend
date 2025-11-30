import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import eventBus from "./utils/eventBus";
import { buildApiUrl } from "./utils/apiConfig";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize from localStorage token and load profile
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get(buildApiUrl("/student/auth/me"))
        .then((res) => {
          setUser(res.data || null);
        })
        .catch(() => {
          localStorage.removeItem("token");
          delete axios.defaults.headers.common["Authorization"];
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const register = async (formData) => {
    try {
      console.log('Sending registration request:', formData);
      const response = await axios.post(buildApiUrl("/student/auth/register"), formData);
      
      // Emit registration success event
      eventBus.emit('registration-success', {
        user: response.data.user,
        timestamp: new Date().toISOString()
      });
      
      // Also emit student registered event for admin panel
      eventBus.emit('student-registered', {
        student: response.data.user,
        timestamp: new Date().toISOString()
      });

      // Cross-tab / cross-origin notification: write to localStorage and use BroadcastChannel
      try {
        const payload = JSON.stringify({ type: 'student-registered', student: response.data.user, timestamp: new Date().toISOString() });
        // localStorage trigger (other tabs will receive storage event)
        localStorage.setItem('student-registered', payload);
        // Also write a wiggle key to ensure storage event fires even if same payload repeats
        localStorage.setItem('student-registered-ts', Date.now().toString());
      } catch (err) {
        // ignore localStorage failures (e.g., private mode)
        console.warn('Could not write student-registered to localStorage', err);
      }

      try {
        if (typeof BroadcastChannel !== 'undefined') {
          const bc = new BroadcastChannel('softpro9_channel');
          bc.postMessage({ type: 'student-registered', student: response.data.user, timestamp: new Date().toISOString() });
          // close channel after use to avoid leaks
          try { bc.close(); } catch (e) { /* ignore */ }
        }
      } catch (err) {
        // ignore BroadcastChannel failures
        console.warn('BroadcastChannel post failed', err);
      }
      
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  };

  const login = async (formData) => {
    try {
      const response = await axios.post(buildApiUrl("/student/auth/login"), formData);
      setUser(response.data.user || null);
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  const isAuthenticated = !!user;

  // Handle token coming from OAuth callback
  const completeOAuth = async (token) => {
    if (!token) return;
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const res = await axios.get(buildApiUrl("/student/auth/me"));
      const userData = res.data || null;
      setUser(userData);
      
      // Emit OAuth registration success event if this is a new user
      if (userData) {
        eventBus.emit('registration-success', {
          user: userData,
          timestamp: new Date().toISOString(),
          method: 'oauth'
        });
        
        // Also emit student registered event for admin panel
        eventBus.emit('student-registered', {
          student: userData,
          timestamp: new Date().toISOString(),
          method: 'oauth'
        });

        // Cross-tab notify via localStorage and BroadcastChannel
        try {
          const payload = JSON.stringify({ type: 'student-registered', student: userData, timestamp: new Date().toISOString(), method: 'oauth' });
          localStorage.setItem('student-registered', payload);
          localStorage.setItem('student-registered-ts', Date.now().toString());
        } catch (err) {
          console.warn('Could not write student-registered to localStorage', err);
        }

        try {
          if (typeof BroadcastChannel !== 'undefined') {
            const bc = new BroadcastChannel('softpro9_channel');
            bc.postMessage({ type: 'student-registered', student: userData, timestamp: new Date().toISOString(), method: 'oauth' });
            try { bc.close(); } catch (e) { /* ignore */ }
          }
        } catch (err) {
          console.warn('BroadcastChannel post failed', err);
        }
      }
    } catch (e) {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      throw e;
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, isAuthenticated, loading, completeOAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

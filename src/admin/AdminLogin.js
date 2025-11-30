import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    try {
      const data = await api.post('/admin/login', { username, password });
      // expected { token }
      const token = data.token || data?.data?.token;
      if (!token) throw new Error('No token returned');
      localStorage.setItem('softpro9_admin_token', token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: '40px auto', padding: 20 }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

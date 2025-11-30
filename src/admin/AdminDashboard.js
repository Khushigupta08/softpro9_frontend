import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const token = localStorage.getItem('softpro9_admin_token');
        const res = await api.get('/admin/data', { headers: { Authorization: `Bearer ${token}` } });
        setData(res);
      } catch (err) {
        setError(err.message || 'Failed to fetch admin data');
      }
    }
    load();
  }, []);

  function logout() {
    localStorage.removeItem('softpro9_admin_token');
    window.location.href = '/admin';
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <button onClick={logout}>Logout</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {data ? (
        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

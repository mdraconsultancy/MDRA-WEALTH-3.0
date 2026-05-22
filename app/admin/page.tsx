'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Search, Download, LogOut, RefreshCw, Lock } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface Client {
  id: string;
  name: string;
  age: number;
  contactNumber: string;
  email: string | null;
  financialGoal: string;
  monthlyInvestment: number;
  investmentDuration: number;
  riskProfile: string;
  fundCategory: string;
  projectedValue: number | null;
  createdAt: string;
}

export default function AdminPage() {
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Data states
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const fetchClients = useCallback(async () => {
    setLoading(true);
    setError('');
    const pw = sessionStorage.getItem('mdra-admin-pw') ?? '';
    try {
      const res = await fetch('/api/admin/clients', {
        headers: { 'x-admin-password': pw },
      });
      
      if (res.status === 401) {
        setLoginError('Incorrect password. Please try again.');
        setIsAuthenticated(false);
        sessionStorage.removeItem('mdra-admin-pw');
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError('Failed to load clients. Please refresh.');
        return;
      }
      const data = await res.json();
      setClients(data.clients ?? []);
      setIsAuthenticated(true);
    } catch {
      setError('Network error. Please refresh.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Check for existing login on mount
  useEffect(() => {
    const storedPw = sessionStorage.getItem('mdra-admin-pw');
    if (storedPw) {
      fetchClients();
    } else {
      setLoading(false);
    }
  }, [fetchClients]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    sessionStorage.setItem('mdra-admin-pw', passwordInput);
    fetchClients();
  };

  const handleLogout = () => {
    sessionStorage.removeItem('mdra-admin-pw');
    setIsAuthenticated(false);
    setPasswordInput('');
  };

  const filtered = useMemo(() => {
    if (!search.trim()) return clients;
    const q = search.toLowerCase();
    return clients.filter(
      (c) => c.name.toLowerCase().includes(q) || c.contactNumber.includes(q)
    );
  }, [clients, search]);

  const downloadCSV = () => {
    const headers = [
      '#', 'Name', 'Age', 'Contact', 'Email', 'Goal',
      'Monthly (Rs)', 'Duration (mo)', 'Risk', 'Fund', 'Projected Value', 'Submitted At',
    ];
    const rows = filtered.map((c, i) => [
      i + 1,
      c.name,
      c.age,
      c.contactNumber,
      c.email ?? '',
      c.financialGoal,
      c.monthlyInvestment,
      c.investmentDuration,
      c.riskProfile,
      c.fundCategory,
      c.projectedValue ?? '',
      new Date(c.createdAt).toLocaleString('en-IN'),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mdra-clients-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated && !loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100 text-center">
          <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock size={32} className="text-brand-navy" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-brand-navy mb-2">Admin Access</h1>
          <p className="text-gray-500 mb-8 text-sm">Enter your administrative password to view client leads.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter password..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold text-center tracking-widest"
              autoFocus
            />
            {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
            <button
              type="submit"
              disabled={!passwordInput}
              className="w-full py-3 rounded-xl bg-brand-navy text-white font-semibold hover:bg-brand-gold transition-colors disabled:opacity-50"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- DASHBOARD SCREEN ---
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-brand-navy px-6 py-4 flex items-center justify-between shadow-md">
        <div className="text-white font-bold tracking-wider font-heading">MDRA WEALTH</div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchClients}
            aria-label="Refresh data"
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <RefreshCw size={16} aria-hidden="true" />
          </button>
          <button
            onClick={handleLogout}
            aria-label="Logout from admin"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm"
          >
            <LogOut size={14} aria-hidden="true" /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-heading text-2xl font-bold text-brand-navy">Client Submissions</h1>
            <p className="text-sm text-gray-500 mt-1">
              Showing {filtered.length} of {clients.length} client{clients.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name or phone..."
                aria-label="Search clients by name or phone"
                className="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
            </div>
            <button
              onClick={downloadCSV}
              disabled={filtered.length === 0}
              aria-label="Download clients as CSV"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-gold text-white text-sm font-medium hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              <Download size={14} aria-hidden="true" /> CSV
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 mb-6 text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" aria-label="Loading" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium">
              {search ? 'No matching clients found.' : 'No submissions yet.'}
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    {['#', 'Name', 'Age', 'Contact', 'Email', 'Goal', 'Monthly ₹', 'Duration', 'Risk', 'Fund', 'Projected', 'Submitted'].map(
                      (h) => (
                        <th key={h} scope="col" className="px-4 py-3 text-left text-xs font-semibold whitespace-nowrap">
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((client, i) => (
                    <tr key={client.id} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-light/50'}>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{i + 1}</td>
                      <td className="px-4 py-3 font-medium text-brand-navy whitespace-nowrap">{client.name}</td>
                      <td className="px-4 py-3 text-gray-600">{client.age}</td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                        <a
                          href={`https://wa.me/91${client.contactNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-gold transition-colors"
                          aria-label={`Open WhatsApp chat with ${client.name}`}
                        >
                          {client.contactNumber}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                        {client.email ? (
                          <a href={`mailto:${client.email}`} className="hover:text-brand-gold transition-colors">
                            {client.email}
                          </a>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{client.financialGoal}</td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                        ₹{client.monthlyInvestment.toLocaleString('en-IN')}
                      </td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{client.investmentDuration} mo</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${
                            client.riskProfile === 'aggressive'
                              ? 'bg-red-50 text-red-600'
                              : client.riskProfile === 'moderate'
                              ? 'bg-yellow-50 text-yellow-600'
                              : 'bg-green-50 text-green-600'
                          }`}
                        >
                          {client.riskProfile}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{client.fundCategory}</td>
                      <td className="px-4 py-3 text-brand-gold font-semibold whitespace-nowrap">
                        {client.projectedValue ? formatCurrency(client.projectedValue) : '—'}
                      </td>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap text-xs">
                        {new Date(client.createdAt).toLocaleDateString('en-IN', {
                          day: '2-digit', month: 'short', year: 'numeric',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

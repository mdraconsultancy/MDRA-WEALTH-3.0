'use client';

// TODO: For production scale, replace this simple password gate
// with NextAuth.js or Clerk for proper authentication.

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Lock, Eye, EyeOff } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem('mdra-admin-token');
    if (token === 'authenticated') setAuthed(true);
    setChecking(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/clients', {
        headers: { 'x-admin-password': password },
      });
      if (res.ok) {
        sessionStorage.setItem('mdra-admin-token', 'authenticated');
        sessionStorage.setItem('mdra-admin-pw', password);
        setAuthed(true);
      } else {
        setError('Incorrect password. Please try again.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" aria-label="Loading" />
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
          <div className="flex justify-center mb-6">
            <Image src="/logo-light.png" alt="MDRA Wealth Admin" width={140} height={40} className="h-10 w-auto" />
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex items-center justify-center">
              <Lock size={22} className="text-brand-navy" aria-hidden="true" />
            </div>
          </div>
          <h1 className="font-heading text-xl font-bold text-brand-navy text-center mb-2">Admin Dashboard</h1>
          <p className="text-sm text-gray-400 text-center mb-6">Enter your admin password to continue.</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                aria-label="Admin password"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                required
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShow((v) => !v)}
                aria-label={show ? 'Hide password' : 'Show password'}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {show ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
              </button>
            </div>
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 rounded-xl bg-brand-navy text-white font-semibold text-sm hover:bg-brand-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Verifying...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

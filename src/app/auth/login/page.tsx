'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      // Here you would typically make an API call to your authentication endpoint
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Redirect to dashboard or home page after successful login
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full space-y-8 p-8 rounded-2xl shadow-lg bg-gradient-to-b from-cyan-400 via-blue-500 to-blue-800">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white">
            Welcome Back
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-4">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-xl relative block w-full px-4 py-3 bg-white/10 border-0 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:z-10 backdrop-blur-sm"
                placeholder="Email"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-xl relative block w-full px-4 py-3 bg-white/10 border-0 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:z-10 backdrop-blur-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-200"
              >
                Show
              </button>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <a href="#" className="font-medium text-white hover:text-gray-200">
                Forgot Password?
              </a>
            </div>
          </div>

          {error && (
            <div className="text-red-300 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 rounded-xl text-white text-lg font-semibold bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
            >
              Sign In
            </button>
          </div>

          <div className="text-center text-white">
            <p>Don't have an account? <a href="#" className="text-orange-400 hover:text-orange-300">Sign Up</a></p>
          </div>

          <div className="text-center text-white/60 text-sm">
            Version 1.0.0
          </div>
        </form>
      </div>
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LcFIiArAAAAAJGf0NK2hn2GMdSsofWtAp9QVrBj';
const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://your-domain.com';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!captchaToken) {
      setError('Please complete the reCAPTCHA');
      return;
    }

    try {
      // Include captchaToken in your API request
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      router.push('/dashboard');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white space-y-4">
      {/* Cybersure Box */}
      <div className="max-w-md w-full p-4 rounded-xl bg-orange-50">
        <div className="flex items-center space-x-3">
          <div className="text-teal-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <div className="text-gray-700 font-semibold">Security Check</div>
            <div className="text-gray-500 text-sm">Verify you're on our official website:</div>
            <div className="flex items-center space-x-2 mt-2 bg-white px-3 py-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4" />
              </svg>
              <span className="text-gray-700 font-medium">{APP_DOMAIN}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Login Box */}
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

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
              theme="dark"
            />
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
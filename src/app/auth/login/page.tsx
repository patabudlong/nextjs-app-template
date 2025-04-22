'use client';

import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 
                         flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white text-xl font-semibold">D</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-8 border border-slate-700/50">
          <h1 className="text-2xl text-white font-medium tracking-wide text-center mb-2">Welcome Back</h1>
          <p className="text-slate-400 text-center mb-8">Please sign in to continue</p>

          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-slate-900/50 rounded-lg border border-slate-700/50
                         text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50
                         focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-slate-900/50 rounded-lg border border-slate-700/50
                           text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50
                           focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400
                           hover:text-slate-300 text-sm font-medium transition-colors"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-700 bg-slate-900/50 
                           text-blue-500 focus:ring-blue-500/50 focus:ring-offset-0
                           focus:ring-offset-slate-900"
                />
                <span className="text-sm text-slate-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot Password?
              </a>
            </div>

            {/* reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                theme="dark"
                className="transform scale-90 -mx-4"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-400
                       text-white font-medium rounded-lg shadow-lg shadow-blue-500/20
                       hover:shadow-blue-500/40 transition-all"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-slate-400 bg-slate-800/50">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 px-4
                               bg-slate-900/50 rounded-lg border border-slate-700/50
                               text-white hover:bg-slate-900/80 transition-colors">
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4
                               bg-slate-900/50 rounded-lg border border-slate-700/50
                               text-white hover:bg-slate-900/80 transition-colors">
                <span>GitHub</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="mt-8 text-center text-slate-400">
              Don't have an account?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300">
                Sign Up
              </a>
            </p>
          </form>
        </div>

        {/* Security Badge */}
        <div className="mt-8 bg-slate-800/50 backdrop-blur-xl rounded-lg p-4 border border-slate-700/50
                       flex items-center gap-4">
          <div className="p-2 bg-slate-900/50 rounded-lg text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-medium">Secure Login</h3>
            <p className="text-slate-400 text-sm">Your connection is encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
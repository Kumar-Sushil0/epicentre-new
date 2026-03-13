'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '../context/AdminAuthContext';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const { adminLogin } = useAdminAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const result = await adminLogin(email, password);

        if (result === 'success') {
            router.push('/admin/dashboard');
        } else {
            setError('Invalid admin credentials');
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-earth-950 via-earth-900 to-earth-800 flex items-center justify-center">
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-gold-500/30 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md mx-4">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        The Silent Club
                    </h1>
                    <p className="text-earth-300 text-sm uppercase tracking-widest">Admin Portal</p>
                </div>

                {/* Glass Card */}
                <div className="relative backdrop-blur-xl bg-earth-900/40 border border-gold-500/20 rounded-2xl p-8 shadow-2xl">
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-2xl blur opacity-30" />

                    <div className="relative">
                        <h2 className="text-2xl font-semibold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Welcome Back
                        </h2>

                        {error && (
                            <div className="mb-4 rounded-lg border border-red-500/40 bg-red-900/40 px-4 py-2 text-sm text-red-100">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-earth-300 uppercase tracking-wide">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/60">
                                        mail
                                    </span>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-earth-800/50 border border-gold-500/30 rounded-xl pl-12 pr-4 py-3.5 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                                        placeholder="admin@thesilent.club"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-medium text-earth-300 uppercase tracking-wide">
                                    Password
                                </label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/60">
                                        lock
                                    </span>
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-earth-800/50 border border-gold-500/30 rounded-xl pl-12 pr-12 py-3.5 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-500/60 hover:text-gold-500 transition-colors"
                                    >
                                        <span className="material-symbols-outlined">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-gold-500/30 bg-earth-800/50 text-gold-500 focus:ring-gold-500/20"
                                    />
                                    <span className="text-earth-300 group-hover:text-earth-100 transition-colors">Remember me</span>
                                </label>
                                <Link href="#" className="text-gold-500 hover:text-gold-400 transition-colors">
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full relative group overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isLoading ? (
                                        <>
                                            <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                            Signing in...
                                        </>
                                    ) : (
                                        <>
                                            Sign In
                                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                                arrow_forward
                                            </span>
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Note */}
                <p className="text-center text-earth-500 text-xs mt-6">
                    The Silent Club · Internal admin access only
                </p>
            </div>
        </div>
    );
}

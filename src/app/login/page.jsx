"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", { email, password });
    };

    return (
        <div className="relative min-h-screen w-full bg-[#0d47a1] flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-hidden font-sans">

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT COLUMN: Hero / Visual Showcase */}
                <div className="text-white space-y-8 flex flex-col justify-between h-full">
                    {/* Logo & Headline Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <div
                                className="w-7 h-7 bg-[#ccff00] inline-block"
                                style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%, 30% 50%)" }}
                            />
                            <span className="text-2xl font-extrabold tracking-tight">ByteSpace</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Sign in with ease</h2>
                        <p className="text-blue-100/80 text-sm sm:text-base max-w-md leading-relaxed">
                            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
                        </p>
                    </div>

                    {/* Cards & 3D Elements Area */}
                    <div className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center mt-6">

                        {/* Top Left Yellow Torus/Ring Accent */}
                        <div className="absolute top-2 left-6 z-20 w-16 h-16 border-[12px] border-[#ccff00] rounded-full rotate-[-25deg] shadow-lg pointer-events-none" />

                        {/* Bottom Left Cone Accent */}
                        <div
                            className="absolute bottom-2 left-2 z-30 w-20 h-24 bg-[#ccff00] shadow-xl pointer-events-none"
                            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                        />

                        {/* Back Card: Build Digital */}
                        <div className="absolute top-12 left-8 w-[260px] sm:w-[280px] bg-white rounded-2xl p-4 text-gray-900 shadow-xl opacity-90 rotate-[-6deg]">
                            <div className="relative w-full h-28 bg-gray-200 rounded-xl mb-3 overflow-hidden">
                                <span className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded-full">
                                    17 Lessons
                                </span>
                            </div>
                            <h4 className="font-bold text-sm">Build Digital</h4>
                            <p className="text-xs text-blue-600">by purepearl studio</p>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">📊 Beginner</span>
                                <span className="font-bold text-sm text-blue-600">$25 <span className="text-[10px] text-gray-400 font-normal">/lifetime</span></span>
                            </div>
                        </div>

                        {/* Front Main Card: the Power of Big Data */}
                        <div className="absolute top-0 right-4 sm:right-8 w-[280px] sm:w-[320px] bg-white rounded-2xl p-4 text-gray-900 shadow-2xl z-20">
                            <div className="relative w-full h-32 bg-gray-900 rounded-xl mb-3 overflow-hidden p-2 flex flex-col justify-between">
                                <div className="flex gap-1">
                                    <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">17 Lessons</span>
                                    <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">2 hours 16 mins</span>
                                    <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">59 Comments</span>
                                </div>
                                {/* Fake Chart Graphic */}
                                <div className="w-full h-12 flex items-end gap-1 px-1">
                                    {[40, 70, 45, 90, 60, 80, 100, 65, 85, 40].map((h, idx) => (
                                        <div key={idx} className="flex-1 bg-cyan-400/80 rounded-t-sm" style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-base text-gray-900">the Power of Big Data</h3>
                                <span className="text-xs font-semibold flex items-center gap-1 text-gray-700">4.5 <span className="text-lime-500">★</span></span>
                            </div>
                            <p className="text-xs text-blue-600 mb-3">by purepearl studio</p>

                            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">📊 Beginner</span>
                                    {/* Avatar stack */}
                                    <div className="flex -space-x-1 overflow-hidden">
                                        <div className="inline-block h-5 w-5 rounded-full ring-1 ring-white bg-amber-400" />
                                        <div className="inline-block h-5 w-5 rounded-full ring-1 ring-white bg-blue-400" />
                                        <div className="inline-block h-5 w-5 rounded-full ring-1 ring-white bg-emerald-400" />
                                        <div className="flex items-center justify-center h-5 w-5 rounded-full ring-1 ring-white bg-black text-[9px] text-white font-bold">26+</div>
                                    </div>
                                </div>
                                <span className="font-bold text-sm text-blue-600">$25 <span className="text-[10px] text-gray-400 font-normal">/lifetime</span></span>
                            </div>
                        </div>

                        {/* Bottom Floating Badge: Happy Students */}
                        <div className="absolute bottom-4 right-12 z-30 bg-[#ccff00] text-black rounded-2xl p-3 shadow-xl flex flex-col gap-2 w-52 rotate-[3deg]">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-xs">Happy Students</span>
                                <span className="text-[10px] font-bold bg-black/10 px-1.5 py-0.5 rounded">4.5 (240) ★</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex -space-x-1.5 overflow-hidden">
                                    <div className="w-6 h-6 rounded-full bg-gray-800 border border-white" />
                                    <div className="w-6 h-6 rounded-full bg-gray-600 border border-white" />
                                    <div className="w-6 h-6 rounded-full bg-gray-400 border border-white" />
                                    <div className="w-6 h-6 rounded-full bg-gray-700 border border-white" />
                                    <div className="w-6 h-6 rounded-full bg-black text-white text-[9px] flex items-center justify-center font-bold border border-white">2K+</div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Right White Zigzag Ribbon */}
                        <div className="absolute bottom-8 right-0 z-20 w-16 h-20 border-r-8 border-b-8 border-white/90 rotate-[20deg] pointer-events-none opacity-80" />

                    </div>
                </div>

                {/* RIGHT COLUMN: Sign In Form Box */}
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl max-w-md w-full mx-auto">
                    <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Sign In</span>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 mb-8">
                        Welcome Back
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Field */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="designer@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-semibold px-8 py-2.5 rounded-full text-sm transition-all duration-200 transform hover:scale-105 shadow-sm"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <span className="relative z-10 bg-white px-4 text-xs text-gray-400">
                            or
                        </span>
                    </div>

                    {/* Social Logins */}
                    <div className="flex justify-center items-center gap-4">
                        <button
                            type="button"
                            className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                            </svg>
                        </button>
                    </div>

                    {/* Footer Text */}
                    <div className="text-center mt-8 text-xs text-gray-500">
                        New user?{" "}
                        <Link href="/register" className="text-blue-600 font-medium hover:underline">
                            Create an account
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}
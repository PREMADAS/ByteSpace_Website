"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registering user:", { fullName, email, password });
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

                {/* LEFT COLUMN: Visual Showcase */}
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

                        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Sign up and come in</h2>
                        <p className="text-blue-100/80 text-sm sm:text-base max-w-md leading-relaxed">
                            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
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
                                {/* Chart Graphic */}
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

                        {/* Bottom Right White Ribbon Accent */}
                        <div className="absolute bottom-8 right-0 z-20 w-16 h-20 border-r-8 border-b-8 border-white/90 rotate-[20deg] pointer-events-none opacity-80" />

                    </div>
                </div>

                {/* RIGHT COLUMN: Register Form Box */}
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl max-w-md w-full mx-auto">
                    <span className="text-xs font-semibold text-blue-600 tracking-wide">
                        Create an Account
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 mb-8 leading-tight">
                        Welcome to <br /> ByteSpace
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Full Name Field */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                Full Name
                            </label>
                            <input
                                type="text"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Jamie Davis"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                            />
                        </div>

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
                                Continue
                            </button>
                        </div>
                    </form>

                    {/* Footer Text */}
                    <div className="text-center mt-12 text-xs text-gray-500">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 font-medium hover:underline">
                            Login
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}
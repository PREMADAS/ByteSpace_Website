"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white text-gray-700 py-12 px-6 sm:px-12 lg:px-20 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">

                    {/* Brand & Newsletter Section (Spans 2 columns on large screens) */}
                    <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-[#ccff00] clip-path-logo inline-block"
                                style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%, 30% 50%)' }} />
                            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                                ByteSpace
                            </span>
                        </div>

                        {/* Subtitle */}
                        <p className="text-sm text-gray-600 max-w-sm">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>

                        {/* Newsletter Input Form */}
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 pt-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full sm:w-64 px-5 py-2.5 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200"
                            >
                                Search
                            </button>
                        </form>

                        {/* Disclaimer */}
                        <p className="text-xs text-gray-500 leading-relaxed max-w-xs pt-1">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div className="space-y-3 text-sm">
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-black transition-colors">Featured Courses</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Featured Categories</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Business</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">IT</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Design</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="space-y-3 text-sm">
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-black transition-colors">Development</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Marketing</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Photography</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Finance</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Sport</a></li>
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div className="space-y-3 text-sm">
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-black transition-colors">Become a Creator</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Affiliate Program</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Help</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Legal & Copyright Bar */}
                <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>@ 2023 ByteSpace. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-black transition-colors">Cookies Settings</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
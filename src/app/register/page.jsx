"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const shapes = [
    { src: "/H1.png", pos: "left-[11.8%] top-[34%] w-[6%] rotate-[-20deg]", z: "z-20" },
    { src: "/M4.png", pos: "left-[8.5%] top-[70.5%] w-[7%]", z: "z-30" },
    { src: "/Frame (1).png", pos: "left-[35.2%] top-[63.8%] w-[7.7%]", z: "z-30" },
];

const avatars = [1, 2, 3, 4].map((n) => `/images/I-${n}.png`);

const pill = "rounded-full bg-black/25 px-[0.9cqw] py-[0.3cqw] text-[length:0.9cqw] text-white backdrop-blur-sm";
const level = "rounded-[0.6cqw] border border-gray-200 bg-gray-50 px-[1cqw] py-[0.5cqw] text-[length:0.95cqw] text-gray-600";

export default function RegisterPage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registering user:", { fullName, email, password });
    };

    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0033ee] p-4 font-sans lg:p-0">
            {/* Grid */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px)`,
                    backgroundSize: "max(60px, 8.3vw) max(60px, 8.3vw)",
                }}
            />

            {/* Stage */}
            <div className="relative w-full max-w-[1200px] lg:aspect-[844/607] lg:[container-type:inline-size]">
                {/* Logo */}
                <Image
                    src="/L1.png"
                    alt="ByteSpace"
                    width={40}
                    height={40}
                    className="mb-6 h-auto w-9 lg:absolute lg:left-[8.4%] lg:top-[4.1%] lg:mb-0 lg:w-[2.4%]"
                />

                {/* Left text */}
                <div className="mb-8 text-white lg:absolute lg:left-[8.4%] lg:top-[11.9%] lg:mb-0 lg:w-[32%]">
                    <h2 className="text-2xl font-semibold lg:text-[length:1.54cqw]">Sign up and come in</h2>
                    <p className="mt-2 text-sm leading-relaxed lg:mt-[1cqw] lg:text-[length:1.3cqw] lg:leading-[2.13cqw]">
                        The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
                    </p>
                </div>

                {/* Left illustration (desktop only) */}
                <div className="hidden lg:block">
                    {/* Back card */}
                    <div className="absolute left-[8.4%] top-[38.7%] z-10 h-[36.7%] w-[26%] rounded-[1.4cqw] bg-white p-[1.1cqw]">
                        <div className="relative h-[13.4cqw] overflow-hidden rounded-[1cqw]">
                            <Image src="/F2.jpg" alt="" fill className="object-cover" />
                            <div className="absolute inset-x-0 bottom-0 flex p-[0.8cqw]">
                                <span className={pill}>17 Lessons</span>
                            </div>
                        </div>
                        <h4 className="mt-[1.5cqw] text-[length:1.4cqw] font-bold text-gray-900">Build Digital</h4>
                        <p className="text-[length:0.95cqw] text-blue-600">by purepearl studio</p>
                        <div className="mt-[1.5cqw]">
                            <span className={level}>Beginner</span>
                        </div>
                        <p className="mt-[1cqw] text-[length:1.5cqw] font-bold text-blue-600">
                            $25<span className="text-[length:0.95cqw] font-normal text-gray-400">/lifetime</span>
                        </p>
                    </div>

                    {/* Front card */}
                    <div className="absolute left-[16.2%] top-[30%] z-20 h-[45.5%] w-[25.8%] rounded-[1.4cqw] bg-white p-[1.1cqw] shadow-lg">
                        <div className="relative h-[13.4cqw] overflow-hidden rounded-[1cqw]">
                            <Image src="/F3.jpg" alt="" fill className="object-cover" />
                            <div className="absolute inset-x-0 bottom-0 flex gap-[0.5cqw] p-[0.8cqw]">
                                <span className={pill}>17 Lessons</span>
                                <span className={pill}>2 hours 16 mins</span>
                                <span className={pill}>59 Comments</span>
                            </div>
                        </div>
                        <div className="mt-[1.5cqw] flex items-center justify-between">
                            <h3 className="text-[length:1.4cqw] font-bold text-gray-900">the Power of Big Data</h3>
                            <span className="text-[length:1.1cqw] font-medium text-gray-800">
                                4.5 <span className="text-[#ccff00]">★</span>
                            </span>
                        </div>
                        <p className="text-[length:0.95cqw] text-blue-600">by purepearl studio</p>
                        <div className="mt-[1cqw] flex items-center gap-[0.8cqw]">
                            <span className={level}>Beginner</span>
                            <div className="flex -space-x-[0.5cqw]">
                                {avatars.slice(0, 4).map((src, idx) => (
                                    <Image
                                        key={`${src}-${idx}`}
                                        src={src}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="h-[2.4cqw] w-[2.4cqw] rounded-full object-cover ring-2 ring-white"
                                    />
                                ))}
                                <span className="flex h-[2.4cqw] w-[2.4cqw] items-center justify-center rounded-full bg-black text-[length:0.85cqw] font-bold text-white ring-2 ring-white">
                                    26+
                                </span>
                            </div>
                        </div>
                        <p className="mt-[1cqw] text-[length:1.5cqw] font-bold text-blue-600">
                            $25<span className="text-[length:0.95cqw] font-normal text-gray-400">/lifetime</span>
                        </p>
                    </div>

                    {/* Happy Students */}
                    <div className="absolute left-[24.2%] top-[72%] z-30 h-[11.9%] w-[17.9%] rounded-[1.2cqw] bg-[#ccff00] p-[1cqw]">
                        <p className="text-[length:1.07cqw] font-semibold text-black">Happy Students</p>
                        <p className="text-[length:0.95cqw] text-black/70">
                            4.5 (240) <span className="text-blue-600">★</span>
                        </p>
                        <div className="mt-[0.6cqw] flex -space-x-[0.6cqw]">
                            {avatars.map((src, idx) => (
                                <Image
                                    key={`${src}-${idx}`}
                                    src={src}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="h-[2.4cqw] w-[2.4cqw] rounded-full object-cover ring-2 ring-[#ccff00]"
                                />
                            ))}
                            <span className="flex h-[2.8cqw] w-[2.8cqw] items-center justify-center rounded-full bg-black text-[length:0.85cqw] font-bold text-white">
                                2K+
                            </span>
                        </div>
                    </div>

                    {/* 3D shapes */}
                    {shapes.map((s, idx) => (
                        <Image
                            key={`${s.src}-${idx}`}
                            src={s.src}
                            alt=""
                            width={300}
                            height={300}
                            aria-hidden="true"
                            className={`pointer-events-none absolute h-auto select-none ${s.pos} ${s.z}`}
                        />
                    ))}
                </div>

                {/* RIGHT COLUMN: Register Form Box (Unchanged Original Card) */}
                <div className="relative z-10 mx-auto flex w-full max-w-md flex-col rounded-3xl bg-white p-8 shadow-2xl lg:absolute lg:left-[51.4%] lg:top-[12.2%] lg:mx-0 lg:w-[40.2%] lg:max-w-none lg:rounded-[1.9cqw] lg:p-[4.4cqw] lg:pb-[3cqw]">
                    <span className="text-xs font-semibold tracking-wide text-blue-600">
                        Create an Account
                    </span>
                    <h1 className="mb-8 mt-1 text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
                        Welcome to <br /> ByteSpace
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Full Name Field */}
                        <div>
                            <label className="mb-1.5 block text-xs font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Jamie Davis"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="mb-1.5 block text-xs font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="designer@example.com"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="mb-1.5 block text-xs font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                className="transform rounded-full bg-[#ccff00] px-8 py-2.5 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:scale-105 hover:bg-[#b3e600]"
                            >
                                Continue
                            </button>
                        </div>
                    </form>

                    {/* Footer Text */}
                    <div className="mt-12 text-center text-xs text-gray-500">
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium text-blue-600 hover:underline">
                            Login
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
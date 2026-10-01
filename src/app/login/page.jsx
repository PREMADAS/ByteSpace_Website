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
const field =
    "w-full h-[3.55cqw] rounded-[1cqw] border border-gray-200 bg-gray-50 px-[1.5cqw] text-[length:1.2cqw] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500";
const label = "block mb-[0.7cqw] text-[length:1.07cqw] font-medium text-gray-800";
const social =
    "flex h-[5cqw] w-[5cqw] items-center justify-center rounded-[1.2cqw] border border-gray-200 bg-white hover:bg-gray-50 transition-colors";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", { email, password });
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

            {/* Stage: lg te design er 844x607 ratio, baki % / cqw dia scale hoy */}
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
                    <h2 className="text-2xl font-semibold lg:text-[length:1.54cqw]">Sign in with ease</h2>
                    <p className="mt-2 text-sm leading-relaxed lg:mt-[1cqw] lg:text-[length:1.3cqw] lg:leading-[2.13cqw]">
                        Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
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
                                {avatars.slice(0, 4).map((src) => (
                                    <Image
                                        key={src}
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
                            {avatars.map((src) => (
                                <Image
                                    key={src}
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
                    {shapes.map((s) => (
                        <Image
                            key={s.src}
                            src={s.src}
                            alt=""
                            width={300}
                            height={300}
                            aria-hidden="true"
                            className={`pointer-events-none absolute h-auto select-none ${s.pos} ${s.z}`}
                        />
                    ))}
                </div>

                {/* Form card */}
                <div className="relative z-10 mx-auto flex w-full max-w-md flex-col rounded-2xl bg-white p-8 lg:absolute lg:left-[51.4%] lg:top-[12.2%] lg:mx-0 lg:h-[75.6%] lg:w-[40.2%] lg:max-w-none lg:rounded-[1.9cqw] lg:p-[4.4cqw] lg:pb-[3cqw]">
                    <span className="text-xs text-blue-600 lg:text-[length:1.3cqw]">Sign In</span>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-[length:3.1cqw] lg:leading-[3.6cqw]">
                        Welcome Back
                    </h1>

                    <form onSubmit={handleSubmit} className="mt-6 lg:mt-[3.3cqw]">
                        <label className={`${label} max-lg:text-xs`}>Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="designer@example.com"
                            className={`${field} max-lg:h-11 max-lg:text-sm`}
                        />

                        <label className={`${label} mt-4 lg:mt-[1.9cqw] max-lg:text-xs`}>Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            className={`${field} max-lg:h-11 max-lg:text-sm`}
                        />

                        <div className="mt-5 flex justify-end lg:mt-[1.8cqw]">
                            <button
                                type="submit"
                                className="rounded-full bg-[#ccff00] px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-[#b8e600] lg:h-[3.1cqw] lg:w-[7.1cqw] lg:p-0 lg:text-[length:1.2cqw]"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3 lg:my-[5.6cqw] lg:gap-[0.8cqw]">
                        <span className="h-px flex-1 bg-gray-200" />
                        <span className="text-xs text-gray-500 lg:text-[length:1.07cqw]">or</span>
                        <span className="h-px flex-1 bg-gray-200" />
                    </div>

                    {/* Social */}
                    <div className="flex justify-center gap-3 lg:gap-[1cqw]">
                        <button type="button" aria-label="Facebook" className={`${social} max-lg:h-12 max-lg:w-12`}>
                            <svg className="h-5 w-5 fill-black lg:h-[2.2cqw] lg:w-[2.2cqw]" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </button>
                        <button type="button" aria-label="Google" className={`${social} max-lg:h-12 max-lg:w-12`}>
                            <svg className="h-5 w-5 lg:h-[2.2cqw] lg:w-[2.2cqw]" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                            </svg>
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="mt-8 text-center text-xs text-gray-500 lg:mt-auto lg:text-[length:1.07cqw]">
                        New user?{" "}
                        <Link href="/register" className="text-blue-600 hover:underline">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
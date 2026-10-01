"use client";

import { use, useState } from "react";
import Link from "next/link";
import coursesData from "@/data/courses.json";

export default function CreatorProfilePage({ params }) {
    const { slug } = use(params);
    const [following, setFollowing] = useState(false);

    // JSON courses theke matching author courses filter kora
    const creatorCourses = coursesData.filter(
        (c) => c.author?.slug === slug || slug === "purepearl-studio"
    );

    // Default Creator Info
    const creator = {
        name: "PurePearl Studio",
        role: "Passionate UI/UX, Web designer",
        badge: "Creator",
        avatar: "/images/I-1.png", // Image path
        bio1: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
        bio2: "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
        productsCount: creatorCourses.length || 3,
        followersCount: 12,
    };

    return (
        <main className="min-h-screen bg-white">
            {/* ===== Top Blue Grid Section ===== */}
            <section
                className="relative bg-grid px-6 py-12 text-white"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            >
                <div className="mx-auto max-w-[1100px]">
                    {/* Header: Avatar, Name, Badge, Role */}
                    <div className="flex items-center gap-4">
                        <img
                            src={creator.avatar}
                            alt={creator.name}
                            className="h-20 w-20 rounded-2xl object-cover"
                        />
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl font-bold">{creator.name}</h1>
                                <span className="rounded-full bg-[#C8FF00] px-3 py-1 text-xs font-semibold text-black">
                                    {creator.badge}
                                </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-200">{creator.role}</p>
                        </div>
                    </div>

                    {/* Bio Text */}
                    <div className="mt-6 max-w-3xl space-y-3 text-xs leading-5 text-gray-100 sm:text-sm">
                        <p>{creator.bio1}</p>
                        <p>{creator.bio2}</p>
                    </div>

                    {/* Stats & Follow Button */}
                    <div className="mt-8 flex items-center justify-between">
                        <div className="flex gap-3">
                            <span className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black">
                                <strong className="text-blue-700">{creator.productsCount}</strong> Products
                            </span>
                            <span className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black">
                                <strong className="text-blue-700">{creator.followersCount}</strong> Followers
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => setFollowing(!following)}
                            className="rounded-full bg-[#C8FF00] px-6 py-2 text-xs font-semibold text-black transition hover:brightness-95"
                        >
                            {following ? "Following" : "Follow"}
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== Filter Toolbar Section ===== */}
            <section className="mx-auto max-w-[1100px] px-6 pt-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-3">
                        <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                            </svg>
                            Filter
                        </button>
                        <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="4" y="13" width="4" height="7" rx="1" />
                                <rect x="10" y="9" width="4" height="11" rx="1" />
                                <rect x="16" y="4" width="4" height="16" rx="1" />
                            </svg>
                            Level
                        </button>
                        <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                            Category
                        </button>
                    </div>

                    <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M6 12h12M9 18h6" />
                        </svg>
                        Most relevant
                    </button>
                </div>

                {/* ===== Course Cards Grid (JSON Data) ===== */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {creatorCourses.slice(0, 6).map((course) => (
                        <Link
                            key={course.id}
                            href={`/courses/${course.id}`}
                            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 transition hover:shadow-md"
                        >
                            {/* Card Image + Badges Overlay */}
                            <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-gray-100">
                                <img
                                    src={course.image || "/images/course-placeholder.jpg"}
                                    alt={course.title}
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                />
                                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 text-[10px]">
                                    <span className="rounded-full bg-white/80 px-2.5 py-1 text-gray-800 backdrop-blur-sm">
                                        {course.totalLessons ?? 17} Lessons
                                    </span>
                                    <span className="rounded-full bg-white/80 px-2.5 py-1 text-gray-800 backdrop-blur-sm">
                                        {course.totalHours ?? 2} hours 16 mins
                                    </span>
                                    <span className="rounded-full bg-white/80 px-2.5 py-1 text-gray-800 backdrop-blur-sm">
                                        {course.commentsCount ?? 59} Comments
                                    </span>
                                </div>
                            </div>

                            {/* Card Details */}
                            <div className="mt-3 px-1 pb-2">
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className="truncate text-sm font-bold text-black">
                                        {course.title}
                                    </h3>
                                    <span className="flex items-center gap-1 text-xs text-gray-700">
                                        {course.rating ?? 4.5}
                                        <span className="text-gray-400">★</span>
                                    </span>
                                </div>

                                <p className="mt-1 text-xs text-gray-500">
                                    by {course.author?.name ?? "purepearl studio"}
                                </p>

                                {/* Level and Student Avatars */}
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-[11px] text-gray-700">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#0B2FE0">
                                            <rect x="4" y="13" width="4" height="7" rx="1" />
                                            <rect x="10" y="9" width="4" height="11" rx="1" />
                                            <rect x="16" y="4" width="4" height="16" rx="1" />
                                        </svg>
                                        {course.level ?? "Beginner"}
                                    </span>

                                    <div className="flex items-center -space-x-1.5">
                                        <span className="h-6 w-6 rounded-full bg-gray-300 ring-2 ring-white" />
                                        <span className="h-6 w-6 rounded-full bg-gray-400 ring-2 ring-white" />
                                        <span className="h-6 w-6 rounded-full bg-gray-500 ring-2 ring-white" />
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8FF00] text-[9px] font-bold text-black ring-2 ring-white">
                                            26+
                                        </span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="mt-3 text-xs">
                                    <span className="text-sm font-bold text-[#0B2FE0]">${course.price ?? 25}</span>
                                    <span className="text-gray-400">/lifetime</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
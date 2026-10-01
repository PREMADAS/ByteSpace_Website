"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import coursesData from "@/data/courses.json";

// JSON e field na thakle design er default data dekhabe
const defaultLessons = [
    { title: "Introduction to Digital Assets", duration: "12 mins" },
    { title: "Design Principles for Impacts", duration: "21 mins" },
    { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
];

const defaultKeyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
];

const tabs = ["About", "Lessons", "Reviews"];
const defaultLessonIntro =
    "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.";

const defaultLessonContent =
    "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.";
const defaultProgressText =
    "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.";

const includes = [
    {
        label: "Learning Resources",
        d: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M14 3v6h6 M8 13h8 M8 17h5",
    },
    {
        label: "Quality Lesson Videos",
        d: "M3 6h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z M22 8l-5 4 5 4V8Z",
    },
    {
        label: "Certificate of Completion",
        d: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z M13 10h5 M13 14h5 M6 16c.5-1.5 3.5-1.5 4 0 M8 12a1.5 1.5 0 1 0 0-.01",
    },
    {
        label: "Private Consultation",
        d: "M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z",
    },
];

function Icon({ d, className = "h-4 w-4" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d={d} />
        </svg>
    );
}

export default function CourseDetails({ params }) {
    const { id } = use(params);
    const course = coursesData.find((c) => String(c.id) === String(id));

    const [activeTab, setActiveTab] = useState("About");
    const [copied, setCopied] = useState(false);

    if (!course) notFound();

    // ===== JSON theke data (na thakle default) =====
    const lessons =
        Array.isArray(course.lessons) && course.lessons.length > 0
            ? course.lessons
            : defaultLessons;
    const totalLessons = course.totalLessons ?? 112;
    const totalHours = course.totalHours ?? 24;
    const keyPoints = Array.isArray(course.keyPoints) ? course.keyPoints : defaultKeyPoints;
    const sneakPeek = Array.isArray(course.sneakPeek) ? course.sneakPeek : [];
    const modules = Array.isArray(course.modules) ? course.modules : [];
    const reviewsList = Array.isArray(course.reviewsList) ? course.reviewsList : [];
    const description = Array.isArray(course.description)
        ? course.description
        : typeof course.description === "string"
            ? course.description.split("\n\n")
            : [];

    const authorName = course.author?.name ?? "purepearl studio";
    const authorRole = course.author?.role ?? "Professional Creator";
    const authorSlug = course.author?.slug;
    const reviews = Array.isArray(course.reviews) ? course.reviews : [];
    const studentsCount = Array.isArray(course.students)
        ? course.students.length
        : typeof course.students === "number"
            ? course.students
            : 199;

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch { }
    };

    return (
        <section className="relative bg-white pb-20">
            {/* ===== Blue background + grid ===== */}
            <div
                className="absolute inset-x-0 top-0 h-[560px] bg-grid lg:h-[615px]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "100px 100px",
                }}
            />

            <div className="relative mx-auto max-w-[1100px] px-6 pt-9">
                {/* ===== Title row ===== */}
                <div className="flex min-h-[182px] items-start justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-semibold text-white">
                            {course.title}
                            {course.titleSuffix ?? ": A Comprehensive Guide"}
                        </h1>
                        <p className="mt-2 text-base font-semibold text-white">
                            {course.subtitle ??
                                "Unlock the Power of Digital Creation with Expert Guidance"}
                        </p>
                        <p className="mt-5 text-sm text-white">
                            by <span className="text-[#C8FF00]">{authorName}</span>
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs text-gray-800">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0B2FE0">
                                    <rect x="4" y="13" width="4" height="7" rx="1" />
                                    <rect x="10" y="9" width="4" height="11" rx="1" />
                                    <rect x="16" y="4" width="4" height="16" rx="1" />
                                </svg>
                                {course.level ?? "Intermediate"}
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs text-gray-800">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0B2FE0">
                                    <path d="m12 2 3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z" />
                                </svg>
                                {course.rating ?? 4.8} ({course.reviewCount ?? reviews.length} reviews)
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs text-gray-800">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B2FE0" strokeWidth="2">
                                    <circle cx="9" cy="8" r="3.5" />
                                    <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" strokeLinecap="round" />
                                    <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.5.6 4 2.6 4 6" strokeLinecap="round" />
                                </svg>
                                {studentsCount} Students
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleShare}
                        className="flex shrink-0 items-center gap-2 rounded-full bg-[#C8FF00] px-5 py-2 text-xs font-medium text-black"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
                        </svg>
                        {copied ? "Copied!" : "Share"}
                    </button>
                </div>

                {/* ===== Main grid ===== */}
                <div className="grid items-start gap-12 lg:grid-cols-[1fr_340px]">
                    {/* ---------- Left column ---------- */}
                    <div className="min-w-0">
                        {/* Video */}
                        <div className="relative h-[352px] w-full overflow-hidden rounded-3xl bg-gray-200">
                            <img
                                src={course.video?.poster || course.image}
                                alt={course.title}
                                className="h-full w-full object-cover"
                            />
                            <button
                                type="button"
                                aria-label="Play video"
                                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/50 backdrop-blur-md"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#333">
                                        <path d="M7 4v16l13-8z" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="mt-[88px] flex gap-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`rounded-full px-5 py-2 text-sm transition ${activeTab === tab
                                        ? "bg-[#C8FF00] font-medium text-black"
                                        : "bg-[#F1F1F3] text-[#3A3A4A] hover:bg-[#E6E6EA]"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* ---- About ---- */}
                        {activeTab === "About" && (
                            <div className="mt-8">
                                <h2 className="text-lg font-semibold text-black">Description</h2>
                                <div className="mt-4 space-y-5 text-sm leading-6 text-gray-600">
                                    {description.length > 0 ? (
                                        description.map((p, i) => <p key={i}>{p}</p>)
                                    ) : (
                                        <p>No description available.</p>
                                    )}
                                </div>

                                {sneakPeek.length > 0 && (
                                    <>
                                        <h2 className="mt-8 text-lg font-semibold text-black">
                                            Sneak Peak
                                        </h2>
                                        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                                            {sneakPeek.map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={typeof src === "string" ? src : src.image}
                                                    alt=""
                                                    className="h-[92px] w-full rounded-xl object-cover"
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}

                                <h2 className="mt-8 text-lg font-semibold text-black">Key Points</h2>
                                <ul className="mt-4 space-y-3">
                                    {keyPoints.map((point, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B2FE0]">
                                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
                                                    <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}


                        {/* ---- Lessons ---- */}
                        {activeTab === "Lessons" && (
                            <div className="mt-8">
                                <h2 className="text-lg font-semibold text-black">Explore the Modules</h2>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {course.lessonIntro ?? defaultLessonIntro}
                                </p>

                                <h2 className="mt-8 text-lg font-semibold text-black">Lesson List</h2>
                                <ul className="mt-4 space-y-4">
                                    {modules.length > 0 ? (
                                        <ul className="mt-4 space-y-4">
                                            {modules.map((m, i) => (
                                                <li key={i} className="flex items-start gap-4">
                                                    <span className="flex h-[54px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-[#C8FF00]">
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="#111">
                                                            <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h9A1.5 1.5 0 0 1 15 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 17.5v-11Z" />
                                                            <path d="m16.5 10 4.5-3v10l-4.5-3v-4Z" />
                                                        </svg>
                                                    </span>
                                                    <div>
                                                        <p className="text-sm font-medium text-black">{m.title}</p>
                                                        <p className="mt-1 text-sm leading-6 text-gray-600">{m.summary}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="mt-4 text-sm text-gray-500">No modules available.</p>
                                    )}
                                </ul>

                                <h2 className="mt-8 text-lg font-semibold text-black">Lesson Content</h2>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {course.lessonContent ?? defaultLessonContent}
                                </p>

                                <h2 className="mt-8 text-lg font-semibold text-black">Lesson Progress Tracking</h2>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {course.progressText ?? defaultProgressText}
                                </p>

                                {(() => {
                                    const progress = course.progress ?? 0;
                                    return (
                                        <div className="mt-5 rounded-2xl border border-gray-200 p-4">
                                            <p className="text-xs text-gray-700">Learning Progress</p>
                                            <p className="mt-1 text-3xl font-semibold text-black">{progress}%</p>
                                            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                                                <div
                                                    className="h-full rounded-full bg-[#C8FF00]"
                                                    style={{ width: `${progress}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })()}

                            </div>
                        )}

                        {/* ---- Reviews ---- */}
                        {/* ---- Reviews ---- */}
                        {activeTab === "Reviews" && (
                            <div className="mt-8">
                                {/* Title and Description */}
                                <h2 className="text-lg font-semibold text-black">What Learners Are Saying</h2>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Discover what our learners have to say about their experience with &apos;{course.title}{course.titleSuffix ?? ": A Comprehensive Guide"}.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                                </p>

                                {/* Rating Breakdown Card */}
                                <div className="mt-6 flex flex-col items-center gap-6 rounded-3xl border border-gray-200 p-6 sm:flex-row sm:p-8">
                                    <div className="flex h-36 w-36 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#C8FF00] p-4 text-center">
                                        <span className="text-xs font-medium text-gray-800">Ratings</span>
                                        <span className="text-4xl font-bold text-black">{course.rating ?? 4.7}</span>
                                    </div>

                                    <div className="w-full space-y-3">
                                        {[
                                            { stars: 5, percentage: "85%", count: 720 },
                                            { stars: 4, percentage: "45%", count: 120 },
                                            { stars: 3, percentage: "15%", count: 21 },
                                            { stars: 2, percentage: "8%", count: 12 },
                                            { stars: 1, percentage: "12%", count: 16 },
                                        ].map((item) => (
                                            <div key={item.stars} className="flex items-center gap-3 text-xs text-gray-500">
                                                <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                                                    <div
                                                        className="h-full rounded-full bg-[#C8FF00]"
                                                        style={{ width: item.percentage }}
                                                    />
                                                </div>
                                                <div className="flex shrink-0 items-center gap-1 text-gray-700">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 24 24"
                                                            fill={i < item.stars ? "#3A3A4A" : "#D1D5DB"}
                                                        >
                                                            <path d="m12 2 3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="w-8 text-right font-medium text-gray-600">{item.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Filter Buttons */}
                                <h3 className="mt-8 text-base font-semibold text-black">Individual Reviews:</h3>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    <button
                                        type="button"
                                        className="rounded-full bg-[#C8FF00] px-5 py-2 text-xs font-medium text-black"
                                    >
                                        All rating
                                    </button>
                                    {[5, 4, 3, 2, 1].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            className="flex items-center gap-1.5 rounded-full bg-[#F1F1F3] px-5 py-2 text-xs font-medium text-gray-700 hover:bg-gray-200"
                                        >
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#3A3A4A">
                                                <path d="m12 2 3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z" />
                                            </svg>
                                            {star}
                                        </button>
                                    ))}
                                </div>

                                {/* Existing Reviews List */}
                                <div className="mt-6 space-y-4">
                                    {reviews.length > 0 ? (
                                        reviews.map((r) => (
                                            <div key={r.id} className="rounded-3xl border border-gray-200 p-6">
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="flex items-center gap-3">
                                                        {r.avatar ? (
                                                            <img
                                                                src={r.avatar}
                                                                alt={r.name}
                                                                className="h-12 w-12 rounded-full object-cover"
                                                            />
                                                        ) : (
                                                            <span className="h-12 w-12 rounded-full bg-gray-200" />
                                                        )}
                                                        <div>
                                                            <p className="text-sm font-semibold text-black">{r.name}</p>
                                                            <p className="text-xs text-gray-500">{r.role}</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-xs text-gray-400">{r.date ?? "a year ago"}</span>
                                                </div>
                                                <div className="mt-3 flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 24 24"
                                                            fill={i < Math.floor(r.rating ?? 5) ? "#3A3A4A" : "#D1D5DB"}
                                                        >
                                                            <path d="m12 2 3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="mt-3 text-sm leading-6 text-gray-600">{r.comment}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-500">No reviews yet.</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ---------- Right sidebar card ---------- */}
                    <aside className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm lg:sticky lg:top-6">
                        <h3 className="text-base font-semibold text-black">
                            {totalLessons} Lessons ({totalHours} hours)
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {lessons.slice(0, 3).map((lesson, i) => (
                                <li key={i} className="flex items-start justify-between gap-3 text-xs text-gray-800">
                                    <span className="flex gap-4">
                                        <span>{String(i + 1).padStart(2, "0")}</span>
                                        <span className="max-w-[140px]">{lesson.title}</span>
                                    </span>
                                    <span className="shrink-0 text-[#0B2FE0]">{lesson.duration}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-3 text-xs text-gray-500">
                            {Math.max(totalLessons - 3, 0)} more videos
                        </p>

                        <p className="mt-6 text-xs leading-5 text-gray-500">
                            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                        </p>

                        <div className="mt-5">
                            <span className="text-3xl font-bold text-[#0B2FE0]">${course.price}</span>
                            <span className="text-xs text-gray-500">/lifetime</span>
                        </div>

                        <button
                            type="button"
                            className="mt-4 h-11 w-full rounded-full bg-[#C8FF00] text-sm font-medium text-black hover:brightness-95"
                        >
                            Enroll Now
                        </button>

                        <h4 className="mt-7 text-base font-semibold text-black">This course include</h4>
                        <ul className="mt-4 space-y-3">
                            {includes.map((item) => (
                                <li key={item.label} className="flex items-center gap-3 text-xs text-gray-700">
                                    <span className="text-[#0B2FE0]">
                                        <Icon d={item.d} />
                                    </span>
                                    {item.label}
                                </li>
                            ))}
                        </ul>

                        <hr className="my-6 border-gray-200" />

                        <div className="flex items-center gap-3">
                            {course.author?.avatar ? (
                                <img
                                    src={course.author.avatar}
                                    alt={authorName}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                            ) : (
                                <span className="h-10 w-10 rounded-full bg-gray-200" />
                            )}
                            <div>
                                <p className="text-sm font-medium text-black">{authorName}</p>
                                <p className="text-xs text-gray-600">{authorRole}</p>
                            </div>
                        </div>

                        <p className="mt-5 text-xs leading-5 text-gray-500">
                            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                        </p>

                        <Link
                            href={authorSlug ? `/creators/${authorSlug}` : "#"}
                            className="mt-4 inline-block rounded-full border border-gray-300 px-5 py-2 text-xs text-gray-800 hover:bg-gray-50"
                        >
                            See Full Profile
                        </Link>
                    </aside>
                </div>
            </div>
        </section>
    );
}
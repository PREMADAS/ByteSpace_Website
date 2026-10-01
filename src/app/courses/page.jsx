"use client";

import { useState, useRef, useEffect } from "react";
import coursesData from "@/data/courses.json";
import Link from "next/link";

// prothom 6 ta course 3 bar repeat = 18 ta card
const base = coursesData.slice(0, 6);
const allCourses = [...base, ...base, ...base].map((c, i) => ({ ...c, uid: i }));

const categories = ["Featured", ...new Set(coursesData.map((c) => c.category))];

const levelOptions = ["All", "Beginner", "Intermediate", "Advanced"].map((l) => ({
    value: l,
    label: l === "All" ? "All levels" : l,
}));

const categoryOptions = categories.map((c) => ({
    value: c,
    label: c === "Featured" ? "All categories" : c,
}));

const sortOptions = [
    { value: "relevant", label: "Most relevant" },
    { value: "low", label: "Price: Low to High" },
    { value: "high", label: "Price: High to Low" },
    { value: "az", label: "Title: A to Z" },
];

const searchOptions = [
    { value: "Courses", label: "Courses" },
    { value: "Authors", label: "Authors" },
];

const avatarImages = [
    "/images/I-1.png",
    "/images/I-2.png",
    "/images/I-3.png",
    "/images/I-4.png",
];
const TOTAL_PAGES = 5;

const outlineBtn =
    "flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 hover:bg-gray-50";

function Dropdown({ icon, label, options, value, onChange, buttonClass, align = "left", chevron }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button type="button" onClick={() => setOpen((o) => !o)} className={buttonClass}>
                {icon}
                {label}
                {chevron}
            </button>

            {open && (
                <ul
                    className={`absolute z-20 mt-2 min-w-[190px] rounded-xl border border-gray-200 bg-white p-1 shadow-lg ${align === "right" ? "right-0" : "left-0"
                        }`}
                >
                    {options.map((o) => (
                        <li key={o.value}>
                            <button
                                type="button"
                                onClick={() => {
                                    onChange(o.value);
                                    setOpen(false);
                                }}
                                className={`w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100 ${value === o.value ? "font-semibold text-[#0B2FE0]" : "text-gray-800"
                                    }`}
                            >
                                {o.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function CourseExplorer() {
    const [query, setQuery] = useState("");
    const [searchIn, setSearchIn] = useState("Courses");
    const [category, setCategory] = useState("Featured");
    const [level, setLevel] = useState("All");
    const [sort, setSort] = useState("relevant");
    const [page, setPage] = useState(1);

    // kono filter change hole page 1 e fire jabe
    const withReset = (setter) => (value) => {
        setter(value);
        setPage(1);
    };

    const activeCount =
        (category !== "Featured") + (level !== "All") + (query.trim() !== "") + (sort !== "relevant");

    const clearAll = () => {
        setQuery("");
        setSearchIn("Courses");
        setCategory("Featured");
        setLevel("All");
        setSort("relevant");
        setPage(1);
    };

    // ===== Filter + Search =====
    const q = query.trim().toLowerCase();

    const filtered = allCourses.filter((c) => {
        const categoryOk = category === "Featured" || c.category === category;
        const levelOk = level === "All" || (c.level ?? "Beginner") === level;
        const text = searchIn === "Authors" ? c.author?.name ?? "" : c.title;
        return categoryOk && levelOk && text.toLowerCase().includes(q);
    });

    // ===== Sort =====
    const courses = [...filtered].sort((a, b) => {
        if (sort === "low") return Number(a.price) - Number(b.price);
        if (sort === "high") return Number(b.price) - Number(a.price);
        if (sort === "az") return a.title.localeCompare(b.title);
        return a.uid - b.uid; // most relevant = original order
    });

    const goTo = (p) => {
        setPage(Math.min(Math.max(1, p), TOTAL_PAGES));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="bg-white">
            {/* ===== Blue Header ===== */}
            <div
                className="bg-grid px-6 pb-14 pt-8"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px)`,
                    backgroundSize: "max(60px, 8.3vw) max(60px, 8.3vw)",
                }}
            >
                <h1 className="text-center text-3xl font-semibold text-white">
                    Find Your Next Course
                </h1>

                <div className="mx-auto mt-6 flex max-w-[640px] items-center justify-center gap-3">
                    <div className="flex h-11 flex-1 items-center gap-2 rounded-full bg-white px-4">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                        </svg>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => withReset(setQuery)(e.target.value)}
                            placeholder="Search"
                            className="w-full bg-transparent text-sm text-black outline-none placeholder:text-gray-500"
                        />
                    </div>

                    <Dropdown
                        label={searchIn}
                        options={searchOptions}
                        value={searchIn}
                        onChange={withReset(setSearchIn)}
                        align="right"
                        buttonClass="flex h-11 items-center gap-2 rounded-full bg-[#C8FF00] px-5 text-sm font-medium text-black"
                        chevron={
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                    />
                </div>
            </div>

            <div className="mx-auto max-w-[1200px] px-6 py-10">
                {/* ===== Filter Row ===== */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-3">
                        {/* Filter = clear all */}
                        <button type="button" onClick={clearAll} className={outlineBtn}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" strokeLinejoin="round" />
                            </svg>
                            Filter
                            {activeCount > 0 && (
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0B2FE0] text-[10px] text-white">
                                    {activeCount}
                                </span>
                            )}
                        </button>

                        <Dropdown
                            label={level === "All" ? "Level" : level}
                            options={levelOptions}
                            value={level}
                            onChange={withReset(setLevel)}
                            buttonClass={outlineBtn}
                            icon={
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="4" y="13" width="4" height="7" rx="1" />
                                    <rect x="10" y="9" width="4" height="11" rx="1" />
                                    <rect x="16" y="4" width="4" height="16" rx="1" />
                                </svg>
                            }
                        />

                        <Dropdown
                            label={category === "Featured" ? "Category" : category}
                            options={categoryOptions}
                            value={category}
                            onChange={withReset(setCategory)}
                            buttonClass={outlineBtn}
                            icon={
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="14" width="7" height="7" rx="1" />
                                    <circle cx="17.5" cy="6.5" r="3.5" />
                                    <path d="m3 21 3.5-7 3.5 7H3Z" strokeLinejoin="round" />
                                </svg>
                            }
                        />
                    </div>

                    <Dropdown
                        label={sortOptions.find((s) => s.value === sort).label}
                        options={sortOptions}
                        value={sort}
                        onChange={withReset(setSort)}
                        align="right"
                        buttonClass={outlineBtn}
                        icon={
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 6h16M4 12h12M4 18h8" strokeLinecap="round" />
                            </svg>
                        }
                    />
                </div>

                {/* ===== Category Pills ===== */}
                <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => withReset(setCategory)(cat)}
                            className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${category === cat
                                ? "bg-[#C8FF00] font-medium text-black"
                                : "bg-[#F1F1F3] text-[#3A3A4A] hover:bg-[#E6E6EA]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ===== Course Cards ===== */}
                <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <Link
                            key={course.uid}
                            href={`/courses/${course.id}`}
                            className="h-[384px] w-[373px] rounded-[24px] border border-gray-200 bg-white p-4 transition hover:shadow-md"
                        >
                            <div className="relative h-[195.14px] w-[341px] overflow-hidden rounded-xl">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2 px-2">
                                    {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((text) => (
                                        <span
                                            key={text}
                                            className="whitespace-nowrap rounded-full bg-white/70 px-2.5 py-1 text-[10px] text-gray-700 backdrop-blur-sm"
                                        >
                                            {text}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-3 flex items-start justify-between gap-2">
                                <h3 className="truncate text-base font-semibold text-black">
                                    {course.title}
                                </h3>
                                <div className="flex shrink-0 items-center gap-1 text-sm text-gray-600">
                                    4.5 <span className="text-gray-300">★</span>
                                </div>
                            </div>

                            <p className="text-[10px] text-gray-500">
                                by{" "}
                                <span className="text-blue-600">
                                    {course.author?.name ?? "purepearl studio"}
                                </span>
                            </p>

                            <div className="mt-3 flex items-center gap-2">
                                <span className="rounded-full bg-[#F1F1F3] px-3 py-1.5 text-[11px] text-gray-700">
                                    {course.level ?? "Beginner"}
                                </span>
                                <div className="flex items-center -space-x-2">
                                    {avatarImages.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt=""
                                            className="h-6 w-6 rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#C8FF00] text-[9px] font-medium text-black">
                                        26+
                                    </span>
                                </div>
                            </div>

                            <div className="mt-3">
                                <span className="text-lg font-bold text-[#0B2FE0]">${course.price}</span>
                                <span className="text-[10px] text-gray-500">/lifetime</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {courses.length === 0 && (
                    <div className="py-16 text-center">
                        <p className="text-gray-500">No courses found.</p>
                        <button
                            type="button"
                            onClick={clearAll}
                            className="mt-3 text-sm text-[#0B2FE0] underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* ===== Pagination ===== */}
                {courses.length > 0 && (
                    <div className="mt-12 flex items-center justify-center gap-4">
                        <button
                            type="button"
                            onClick={() => goTo(page - 1)}
                            disabled={page === 1}
                            aria-label="Previous page"
                            className="flex h-9 w-12 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-40"
                        >
                            ‹
                        </button>

                        {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => (
                            <button
                                key={n}
                                type="button"
                                onClick={() => goTo(n)}
                                className={`text-sm ${n === page ? "text-gray-400" : "text-black hover:text-[#0B2FE0]"
                                    }`}
                            >
                                {n}
                            </button>
                        ))}

                        <button
                            type="button"
                            onClick={() => goTo(page + 1)}
                            disabled={page === TOTAL_PAGES}
                            aria-label="Next page"
                            className="flex h-9 w-12 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-40"
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
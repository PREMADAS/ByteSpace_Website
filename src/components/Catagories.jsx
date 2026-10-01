"use client";

import { useState } from "react";

const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
];

export default function Categories() {
    const [active, setActive] = useState("Featured");

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1440px] px-6 py-16 text-center md:px-16 md:py-24">
                {/* Heading */}
                <h2 className="text-3xl font-semibold leading-[1.2] text-[#0B0B1F] md:text-[44px]">
                    Discover Your Passion,
                    <br />
                    Build Your Skills
                </h2>

                {/* Paragraph */}
                <p className="mx-auto mt-6 max-w-[900px] text-sm leading-[1.8] text-[#9A9AAE] md:text-base">
                    At Bytespace Courses, we bring you closer to life-changing knowledge.
                    Explore a variety of courses across different fields, from technology
                    to the arts, and make a difference in your career and life.
                </p>

                {/* Category pills */}
                <div className="mx-auto mt-10 flex max-w-[1090px] flex-wrap items-center justify-center gap-3">
                    {categories.map((cat, index) => {
                        const isActive = active === cat;
                        return (
                            <button
                                key={`${cat}-${index}`}
                                type="button"
                                onClick={() => setActive(cat)}
                                className={`rounded-full px-5 py-2.5 text-sm transition ${isActive
                                    ? "bg-[#C8FF00] font-medium text-black"
                                    : "bg-[#F1F1F3] text-[#3A3A4A] hover:bg-[#E6E6EA]"
                                    }`}
                            >
                                {cat}
                            </button>
                        );
                    })}

                    <button
                        type="button"
                        className="px-2 text-sm font-medium text-[#0038FF] hover:underline"
                    >
                        + More
                    </button>
                </div>
            </div>
        </section>
    );
}
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden  bg-grid">
            {/* ===== Decorative 3D shapes ===== */}
            <Image
                src="/Mask Group (2).png"
                alt=""
                width={385}
                height={385}
                className="pointer-events-none absolute left-0 top-[12%] hidden w-[9%] min-w-[90px] md:block"
            />
            <Image
                src="/Cone.png"
                alt=""
                width={220}
                height={300}
                className="pointer-events-none absolute -right-2 top-[6%] hidden w-[11%] min-w-[100px] md:block"
            />
            <Image
                src="/Frame (1).png"
                alt=""
                width={100}
                height={100}
                className="pointer-events-none absolute left-[15%] top-[40%] hidden w-[5%] md:block"
            />
            <Image
                src="/Mask Group (1).png"
                alt=""
                width={130}
                height={130}
                className="pointer-events-none absolute right-[12%] top-[38%] hidden w-[8%] md:block"
            />

            {/* ===== Heading + search ===== */}
            <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-10 text-center md:pt-14">
                <h1 className="mx-auto max-w-[820px] text-4xl font-semibold leading-tight text-white md:text-[56px] md:leading-[1.15]">
                    Get Access to Hundreds Courses Available
                </h1>

                <p className="mx-auto mt-6 max-w-[620px] text-xs text-white/80 md:text-sm">
                    Unlock your creativity, gain valuable knowledge, and grow your
                    business with our wide range of courses.
                </p>

                <form
                    action="/courses"
                    className="mx-auto mt-8 flex max-w-[520px] items-center gap-3"
                >
                    <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 py-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#6b7280"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" />
                        </svg>
                        <input
                            type="text"
                            name="q"
                            placeholder="Course, topic, creator"
                            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-full bg-[#C8FF00] px-6 py-3 text-sm font-medium text-black hover:brightness-95"
                    >
                        Search
                    </button>
                </form>
            </div>

            {/* ===== Bottom stage: green circle + boy + cards ===== */}
            <div className="relative mx-auto mt-10 h-[420px] max-w-[1440px] overflow-hidden md:h-[520px]">
                {/* Green circle */}
                <div className="absolute left-1/2 top-16 aspect-square w-[900px] -translate-x-1/2 rounded-full bg-[#C8FF00] md:w-[1050px]" />

                {/* Boy */}
                <Image
                    src="/image.png"
                    alt="Student learning online"
                    width={520}
                    height={560}
                    priority
                    className="absolute bottom-0 left-1/2 z-10 h-[92%] w-auto -translate-x-1/2 object-contain"
                />

                {/* Card: UI/UX Design */}
                <div className="absolute left-[4%] top-[20%] z-20 rounded-xl bg-white px-4 py-3 shadow-lg md:left-[24%]">
                    <p className="text-sm font-medium text-gray-900">UI/UX Design</p>
                    <p className="text-[10px] text-gray-400">
                        200 Courses &nbsp;•&nbsp; 1000+ Students
                    </p>
                </div>

                {/* Card: Learning Progress */}
                <div className="absolute right-[4%] top-[28%] z-20 w-[170px] rounded-xl bg-white px-4 py-3 shadow-lg md:right-[24%] md:w-[200px]">
                    <p className="text-[11px] text-gray-600">Learning Progress</p>
                    <p className="mt-1 text-4xl font-semibold text-gray-900">55%</p>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-gray-200">
                        <div className="h-full w-[55%] rounded-full bg-[#C8FF00]" />
                    </div>
                </div>

                {/* Card: Happy Students */}
                <div className="absolute bottom-[8%] left-[4%] z-20 rounded-xl bg-white px-4 py-3 shadow-lg md:left-[19%]">
                    <p className="text-sm font-medium text-gray-900">Happy Students</p>
                    <p className="text-[10px] text-gray-500">
                        4.5 (240) <span className="text-[#9acd00]">★</span>
                    </p>
                    <Image
                        src="/Auto Layout Horizontal.png"
                        alt="Students"
                        width={150}
                        height={28}
                        className="mt-2 h-7 w-auto"
                    />
                </div>

                {/* Big white shapes at bottom */}
                <Image
                    src="/Mask Group.png"
                    alt=""
                    width={200}
                    height={200}
                    className="pointer-events-none absolute bottom-[4%] left-[3%] z-20 hidden w-[12%] md:block"
                />
                <Image
                    src="/Frame.png"
                    alt=""
                    width={200}
                    height={220}
                    className="pointer-events-none absolute bottom-[10%] right-[3%] z-20 hidden w-[10%] md:block"
                />
            </div>
        </section>
    );
}
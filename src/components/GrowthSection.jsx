import Image from "next/image";

const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
];

const features = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

function CheckIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="#0038FF" />
            <path
                d="m4.5 8.2 2.3 2.3 4.7-4.9"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function GrowthSection() {
    return (
        <section className="relative overflow-hidden bg-[#F8F8FB]">
            {/* ===== Background glows ===== */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -left-20 -top-24 h-[380px] w-[520px] rounded-full bg-[#DDFF3D]/40 blur-[110px]" />
                <div className="absolute right-0 top-0 h-[420px] w-[520px] rounded-full bg-[#C7CEF5]/40 blur-[120px]" />
                <div className="absolute left-[-6%] top-[48%] h-[300px] w-[300px] rounded-full bg-[#C7CEF5]/50 blur-[110px]" />
                <div className="absolute bottom-[-60px] left-[-4%] h-[320px] w-[420px] rounded-full bg-[#DDFF3D]/40 blur-[110px]" />
                <div className="absolute bottom-[-80px] right-[-4%] h-[360px] w-[460px] rounded-full bg-[#C7CEF5]/50 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-[1176px] space-y-20 px-6 py-16 md:space-y-28 md:py-24">
                {/* ===== Row 1 ===== */}
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-semibold leading-tight text-[#0B0B1F] md:text-[40px] md:leading-[1.2]">
                            Your Path to Professional
                            <br className="hidden md:block" /> Growth Starts Here!
                        </h2>

                        <p className="mt-6 max-w-[430px] text-sm leading-[1.9] text-[#4B4B5E]">
                            Explore our curated selection of courses tailored to enhance your
                            capabilities and accelerate your career journey. Whether you are
                            looking to sharpen specific skills, gain industry expertise, or
                            embark on a new career path entirely, we have the resources you
                            need.
                        </p>

                        <div className="mt-8 flex items-center gap-10">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <p className="text-2xl font-semibold text-[#0038FF] md:text-[28px]">
                                        {s.value}
                                    </p>
                                    <p className="text-xs text-[#4B4B5E]">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <Image
                            src="/B1.png"
                            alt="Learn Figma course preview"
                            width={520}
                            height={520}
                            className="h-auto w-full max-w-[520px]"
                        />
                    </div>
                </div>

                {/* ===== Row 2 ===== */}
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="order-2 flex justify-center md:order-1 md:justify-start">
                        <Image
                            src="/B2.png"
                            alt="Instructor dashboard preview"
                            width={520}
                            height={560}
                            className="h-auto w-full max-w-[520px]"
                        />
                    </div>

                    <div className="order-1 md:order-2 md:pl-10">
                        <h2 className="text-3xl font-semibold leading-tight text-[#0B0B1F] md:text-[40px] md:leading-[1.2]">
                            Create &amp; Manage
                            <br className="hidden md:block" /> Courses Easily.
                        </h2>

                        <p className="mt-6 max-w-[430px] text-sm leading-[1.9] text-[#4B4B5E]">
                            <span className="font-semibold text-[#0B0B1F]">ByteSpace</span>{" "}
                            supports individuals or entities in the creation, publication,
                            and administration of educational courses.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {features.map((f) => (
                                <li key={f} className="flex items-center gap-3 text-sm text-[#0B0B1F]">
                                    <CheckIcon />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
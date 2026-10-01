import Image from "next/image";
import Link from "next/link";

const paths = [
    { label: "Design", icon: "/V1.png" },
    { label: "Development", icon: "/V2.png" },
    { label: "IT & Software", icon: "/V3.png" },
    { label: "Business", icon: "/V4.png" },
    { label: "Marketing", icon: "/V5.png" },
    { label: "Photography", icon: "/vector (10).png" },
];

export default function LearningPaths() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1176px] px-6 pb-16 text-center md:pb-24">
                {/* Heading */}
                <h2 className="text-2xl font-semibold leading-tight text-[#0B0B1F] md:text-[32px]">
                    Explore Diverse Learning Paths at Bytespace
                </h2>

                {/* Paragraph */}
                <p className="mx-auto mt-4 max-w-[900px] text-sm leading-[1.8] text-[#9A9AAE] md:text-base">
                    At Bytespace, we believe in empowering individuals through knowledge.
                    Our diverse range of courses spans various fields, ensuring
                    there&apos;s something for everyone. Unleash your potential and
                    explore our carefully curated categories.
                </p>

                {/* Category cards */}
                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
                    {paths.map((item) => (
                        <Link
                            key={item.label}
                            href={`/courses?category=${encodeURIComponent(item.label)}`}
                            className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-white transition hover:border-[#C8FF00] hover:shadow-lg"
                        >
                            <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#C8FF00]">
                                <Image
                                    src={item.icon}
                                    alt=""
                                    width={28}
                                    height={28}
                                    className="h-7 w-7"
                                />
                            </span>
                            <span className="text-sm text-[#0B0B1F] md:text-base">
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
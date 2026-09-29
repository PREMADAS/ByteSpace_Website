import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
    return (
        <Link
            href={`/courses/${course.slug}`}
            className="block rounded-[20px] border border-gray-200 bg-white p-4 transition hover:shadow-lg"
        >
            {/* Thumbnail + chips */}
            <div className="relative aspect-[335/191] overflow-hidden rounded-xl">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(min-width: 1024px) 335px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                />
                <div className="absolute bottom-2 left-2 flex gap-2">
                    <span className="rounded-full bg-white/40 px-3 py-1 text-[10px] text-gray-700 backdrop-blur-sm">
                        {course.lessonsCount} Lessons
                    </span>
                    <span className="rounded-full bg-white/40 px-3 py-1 text-[10px] text-gray-700 backdrop-blur-sm">
                        {course.duration}
                    </span>
                    <span className="rounded-full bg-white/40 px-3 py-1 text-[10px] text-gray-700 backdrop-blur-sm">
                        {course.commentsCount} Comments
                    </span>
                </div>
            </div>

            {/* Title + rating */}
            <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="truncate text-base font-semibold text-[#0B0B1F]">
                    {course.title}
                </h3>
                <p className="shrink-0 text-sm text-gray-500">
                    {course.rating} <span className="text-gray-300">★</span>
                </p>
            </div>

            <p className="mt-0.5 text-[10px] text-gray-500">
                by <span className="text-[#0038FF]">{course.author.name}</span>
            </p>

            {/* Level + students */}
            <div className="mt-4 flex items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-[#F1F1F3] px-3 py-1.5 text-[10px] text-gray-700">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="#3A3A4A">
                        <rect x="0" y="5" width="2" height="5" rx="1" />
                        <rect x="4" y="2" width="2" height="8" rx="1" />
                        <rect x="8" y="0" width="2" height="10" rx="1" opacity="0.3" />
                    </svg>
                    {course.level}
                </span>

                <div className="flex items-center">
                    <Image
                        src="/A1.png"
                        alt="Students"
                        width={88}
                        height={28}
                        className="h-7 w-auto"
                    />

                </div>
            </div>

            {/* Price */}
            <p className="mt-4 text-lg font-semibold text-[#0038FF]">
                ${course.price}
                <span className="text-[10px] font-normal text-gray-500">
                    {course.priceLabel}
                </span>
            </p>
        </Link>
    );
}
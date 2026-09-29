import CourseCard from "./CourseCard";
import { getCourses } from "@/lib/courses";

export default async function FeaturedCourses() {
    const courses = await getCourses({ limit: 6 });

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1176px] px-6 pb-16 md:pb-24">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}
import courses from "@/data/courses.json";
import categories from "@/data/categories.json";

// Later you can replace the body of these functions with fetch()/DB calls.
// The rest of the app does not need to change.

export async function getCategories() {
    return categories;
}

/**
 * Home + Search page listing.
 * options: { category, search, level, sort }
 * sort: "relevant" | "price-low" | "price-high" | "rating"
 */
export async function getCourses({
    category = "Featured",
    search = "",
    level = "",
    sort = "relevant",
    limit,
} = {}) {
    let list = [...courses];

    if (category === "Featured") {
        list = list.filter((c) => c.featured);
    } else if (category) {
        list = list.filter((c) => c.category === category);
    }

    if (level) {
        list = list.filter((c) => c.level.toLowerCase() === level.toLowerCase());
    }

    if (search.trim()) {
        const q = search.trim().toLowerCase();
        list = list.filter(
            (c) =>
                c.title.toLowerCase().includes(q) ||
                c.category.toLowerCase().includes(q) ||
                c.author.name.toLowerCase().includes(q)
        );
    }

    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);

    return limit ? list.slice(0, limit) : list;
}

// Course Details page
export async function getCourseBySlug(slug) {
    return courses.find((c) => c.slug === slug) ?? null;
}

// Course Lessons page
export async function getCourseLessons(slug) {
    const course = await getCourseBySlug(slug);
    return course ? course.modules : [];
}

// Course Reviews page
export async function getCourseReviews(slug) {
    const course = await getCourseBySlug(slug);
    return course
        ? {
            rating: course.rating,
            total: course.reviewsCount,
            breakdown: course.ratingBreakdown,
            reviews: course.reviews,
        }
        : null;
}
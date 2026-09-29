import Categories from "@/components/Catagories";
import CreatorBanner from "@/components/CreatorBanner";
import FeaturedCourses from "@/components/FeaturedCourses";
import GrowthSection from "@/components/GrowthSection";
import Hero from "@/components/Hero";
import LearningPaths from "@/components/LearningPaths";
import LogoStrip from "@/components/LogoStrip";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Categories />
      <FeaturedCourses />
      <LearningPaths />
      <GrowthSection />
      <CreatorBanner />
      <TestimonialSection />
    </main>
  );
}
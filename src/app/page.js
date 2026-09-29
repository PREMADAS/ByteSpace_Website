import Categories from "@/components/Catagories";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Categories />
    </main>
  );
}
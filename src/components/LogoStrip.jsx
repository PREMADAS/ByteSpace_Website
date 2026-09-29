import Image from "next/image";

const logos = [
    { src: "/Frame (2).png", alt: "Logoipsum 1" },
    { src: "/Frame (3).png", alt: "Logoipsum 2" },
    { src: "/Frame (4).png", alt: "Logoipsum 3" },
    { src: "/Frame (5).png", alt: "Logoipsum 4" },
    { src: "/Frame (6).png", alt: "Logoipsum 5" },
];

export default function LogoStrip() {
    return (
        <section className="bg-[#F5F5F5]">
            <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-12 gap-y-8 px-6 py-12 md:min-h-[200px] md:gap-x-[70px] md:py-0">
                {logos.map((logo) => (
                    <Image
                        key={logo.src}
                        src={logo.src}
                        alt={logo.alt}
                        width={165}
                        height={32}
                        className="h-8 w-auto opacity-70 transition hover:opacity-100"
                    />
                ))}
            </div>
        </section>
    );
}
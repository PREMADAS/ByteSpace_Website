import Image from "next/image";
import Link from "next/link";

const links = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
];

export default function Navbar() {
    return (
        <header className="w-full bg-grid text-white" >
            <nav className="mx-auto flex h-[120px] max-w-[1440px] items-center justify-between px-6 md:px-16">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/Header_Logo.png"
                        alt="ByteSpace"
                        width={160}
                        height={40}
                        priority
                    />
                </Link>

                {/* Center links */}
                <ul className="hidden items-center gap-10 text-sm font-medium md:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="hover:text-lime-300">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-6 text-sm font-medium">
                    <Link href="/signin" className="hover:text-lime-300">
                        Sign In
                    </Link>
                    <Link href="/join" className="hover:text-lime-300">
                        Join Us
                    </Link>
                    <button aria-label="Cart">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <path d="M3 6h18" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header >
    );
}
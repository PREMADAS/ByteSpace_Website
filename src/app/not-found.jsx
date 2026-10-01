import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#0042FB] text-white overflow-hidden px-4 select-none">
            {/* Grid Background Pattern */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Main Content Container */}
            <div className="relative z-10 text-center flex flex-col items-center">

                {/* Large 404 Text with Gradient */}
                <h1 className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[280px] font-extrabold leading-none tracking-tight bg-gradient-to-b from-[#CCFF00] via-[#A8E600] to-transparent bg-clip-text text-transparent opacity-90">
                    404
                </h1>

                {/* Main Heading Text */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white -mt-8 sm:-mt-14 md:-mt-20">
                    The page you are looking <br className="hidden sm:block" />
                    for doesn’t exist
                </h2>

                {/* Subtitle / Small Description */}
                <p className="mt-6 text-xs sm:text-sm md:text-base text-blue-100/80 font-normal">
                    Try to use a correct url or go back to homepage to start again
                </p>

                {/* Back to Home Button */}
                <Link
                    href="/"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#CCFF00] px-8 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:scale-105 hover:bg-[#b8e600] focus:outline-none focus:ring-2 focus:ring-[#CCFF00] focus:ring-offset-2 focus:ring-offset-[#0042FB]"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    );
}
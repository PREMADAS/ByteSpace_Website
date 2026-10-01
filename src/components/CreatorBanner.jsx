import Image from 'next/image';

const shapes = [
    // top-left: lime spring
    { src: '/Mask Group (2).png', className: '-top-[3%] -left-[1%] w-[9%] min-w-[100px] rotate-[-20deg]' },
    // top-left: white squiggle
    { src: '/Frame (1).png', className: 'top-6 left-[150px] w-[70px] sm:w-[85px] hidden sm:block' },
    // left-bottom: white cone
    { src: '/Mask Group (1).png', className: 'top-[170px] -left-4 w-[70px] sm:w-[90px]' },
    // left-bottom: lime torus
    { src: '/Mask Group.png', className: '-bottom-[10%] left-[1%] w-[11%] min-w-[120px]' },
    // top-right: lime cone
    { src: '/M4.png', className: 'top-4 right-[110px] w-[85px] sm:w-[100px] hidden sm:block' },
    // right: white cylinder
    { src: '/cone.png', className: '-top-2 -right-8 w-[120px] sm:w-[170px]' },
    // bottom-right: lime spring
    { src: '/S1.png', className: '-bottom-10 right-4 w-[110px] sm:w-[150px]' },
];

const CreatorBanner = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#0033ee] text-white py-16 sm:py-20 px-6">
            {/* Background grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px)`,
                    backgroundSize: '86px 86px',
                }}
            />

            {/* 3D shapes */}
            {shapes.map((s) => (
                <Image
                    key={s.src}
                    src={s.src}
                    alt=""
                    width={200}
                    height={200}
                    aria-hidden="true"
                    className={`absolute h-auto pointer-events-none select-none ${s.className}`}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
                <h2 className="text-3xl sm:text-[38px] font-semibold leading-tight">
                    Unlock Your Potential as a <br className="hidden sm:inline" />
                    Creator with ByteSpace
                </h2>

                <p className="mt-10 text-xs sm:text-[13px] leading-6 max-w-2xl">
                    Experience the collaboration of numerous creators and an expanding selection of courses.
                    Register now and become a part of a community comprising over 10,000 local and international creators.
                    Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
                </p>

                <button className="mt-9 bg-[#ccff00] hover:bg-[#b8e600] text-black text-sm font-medium px-6 py-2.5 rounded-full transition-colors duration-300">
                    Join as Creator
                </button>
            </div>
        </section>
    );
};

export default CreatorBanner;
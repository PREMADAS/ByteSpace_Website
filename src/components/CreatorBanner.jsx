import React from 'react';

const CreatorBanner = () => {
    return (
        <div className="relative w-full overflow-hidden bg-[#0d47a1] text-white py-16 px-6 sm:px-12 ">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Decorative 3D Floating Shapes (Optional/Placeholders) */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#ccff00] rounded-full blur-2xl opacity-40 pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ccff00] rounded-full blur-2xl opacity-40 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center justify-center space-y-6">

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                    Unlock Your Potential as a <br className="hidden sm:inline" />
                    Creator with ByteSpace
                </h2>

                {/* Subtitle / Paragraph */}
                <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed opacity-90">
                    Experience the collaboration of numerous creators and an expanding selection of courses.
                    Register now and become a part of a community comprising over 10,000 local and international creators.
                    Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
                </p>

                {/* Call To Action Button */}
                <button className="mt-4 bg-[#ccff00] hover:bg-[#b3e600] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Join as Creator
                </button>

            </div>
        </div>
    );
};

export default CreatorBanner;
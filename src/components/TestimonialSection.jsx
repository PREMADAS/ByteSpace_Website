import React from 'react';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Sarah M.',
        role: 'Enthusiastic Learner',
        image: '/G1.png', // Replace with your image path
        quote:
            '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
        name: 'James L.',
        role: 'Lifelong Learner',
        image: '/G2.png', // Replace with your image path
        quote:
            '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
        name: 'Alex B.',
        role: 'Inspired Creator',
        image: '/G3.png', // Replace with your image path
        quote:
            '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
];

const TestimonialSection = () => {
    return (
        <section className="relative w-full bg-slate-50 py-16 px-6 sm:px-12 lg:px-20 overflow-hidden">
            {/* Background Soft Glow Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d9f99d] opacity-40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#dbeafe] opacity-50 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                        Discover What Our <br className="hidden sm:block" />
                        Community Is Saying
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        At ByteSpace, our vibrant community of learners and creators is at the
                        heart of what we do. Hear directly from those who have experienced the
                        transformative journey of learning and creating on our platform. Explore
                        testimonials that reflect the diverse perspectives of enthusiastic learners
                        and accomplished creators.
                    </p>
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white  p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Profile Avatar */}
                                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-slate-100">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Name & Role */}
                                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                                <p className="text-sm font-medium text-blue-600 mb-6">
                                    {item.role}
                                </p>

                                {/* Quote Text */}
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {item.quote}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
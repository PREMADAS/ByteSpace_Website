'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MainLayoutWrapper({ children }) {
    const pathname = usePathname();
    const hiddenRoutes = ['/login', '/register'];
    const isHidden = hiddenRoutes.includes(pathname);

    return (
        <>
            {!isHidden && <Navbar />}
            {children}
            {!isHidden && <Footer />}
        </>
    );
}
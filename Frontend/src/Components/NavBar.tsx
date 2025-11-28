import { useState, useEffect } from 'react';

export function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 text-white w-screen flex  p-4 justify-between md:justify-evenly items-center  z-50 transition-colors duration-300 ${scrolled ? 'bg-white text-black shadow-md' : 'bg-transparent'}`}>

            <img src="" alt="business-logo" className="h-10" />

            <ul className="hidden md:flex gap-6 font-medium">
                <a href="#">Services</a>
                <a href="#">Work</a>
                <a href="#">Gallery</a>
            </ul>

            <button className="md:hidden text-2xl">
                ☰
            </button>

            <button className="hidden md:block px-8 py-3 font-medium bg-black hover:bg-gray-900 transition-colors hover:text-white cursor-pointer rounded-xl">
                Enquire
            </button>
        </div>
    )
}
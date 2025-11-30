import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const homePage = () => {
        try{
            return navigate('/Mpho')
        }catch{
            console.error("Failed")
        }
    };

    const bookingPage = () => {
        try{
            return navigate('/Mpho/contact')
        }catch{
            console.error("Failed")
        }
    };

    return (
        <div className={`fixed top-0 left-0 text-white w-full flex  p-4 justify-between md:justify-evenly items-center  z-50 transition-colors duration-300 ${scrolled ? 'bg-black text-black shadow-md' : 'bg-transparent'}`}>

            <img src="" alt="business-logo" className="h-10" onClick={homePage}/>

            <ul className="hidden md:flex gap-6 font-medium">
                <a href="#">Services</a>
                <a href="#">Work</a>
                <a href="#">Gallery</a>
            </ul>

            <button className="md:hidden text-2xl">
                ☰
            </button>

            <button className="hidden md:block px-8 py-3 font-medium bg-orange-500 hover:bg-orange-600 transition-colors hover:text-white cursor-pointer rounded-xl" onClick={bookingPage}>
                Book Us
            </button>
        </div>
    )
}
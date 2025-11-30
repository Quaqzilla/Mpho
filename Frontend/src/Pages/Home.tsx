import { NavBar } from "@/Components/NavBar";
import vid from "./../assets/Images/1.mp4";
import drum from "./../assets/Images/drum.png";
import { Calendar, LocationEditIcon, Music, Users } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/Components/Footer";
import { useNavigate } from "react-router-dom";

export function Home() {
    const autoplay = React.useRef(
        Autoplay({ delay:2000, stopOnFocusIn:false, stopOnMouseEnter:false, stopOnInteraction:false, stopOnLastSnap:false})
    );

    const navigate = useNavigate();

    const bookingPage = () => {
        try{
            return navigate('/Mpho/contact')
        }catch{
            console.error("Failed")
        }
    };

    return (
        <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
            <NavBar />

            <div className="relative h-screen w-screen">
                <video
                    src={vid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-screen h-full object-cover rounded-b-3xl brightness-30"
                />

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                    <h1 className="text-7xl md:text-7xl font-bold text-center">
                        Batjha Ba <span className="text-orange-400">Afrika</span> 
                    </h1>
                    <p className="text-2xl mb-4 md:text-2xl md:font-light mt-4 text-center max-w-xl ">
                        Where feet leave a soothing African story
                    </p>

                    <p className="text-center md:text-lg text-gray-300 max-w-2xl mx-auto">
                        Experience the power, beauty, and cultural richness of African dance through authentic performances and educational programs
                    </p>

                    <div className="flex flex-col items-center md:flex-row md:gap-6">
                        <button className="mt-8 px-9 py-4 bg-orange-600 text-white cursor-pointer hover:bg-amber-500 rounded-md font-semibold transition-colors">
                            SEE OUR GALLERY
                        </button>

                        <button className="mt-8 px-9 py-4 bg-transparent border border-white text-white cursor-pointer rounded-md font-semibold transition-colors" onClick={bookingPage}>
                            BOOK US
                        </button> 
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-col w-full justify-evenly items-center h-full p-6 md:flex-row">

                <div className="flex flex-col gap-4 w-sm md:w-md lg:w-lg">
                    <h1 className="text-4xl text-center font-extrabold md:text-6xl md:font-medium md:text-left text-orange-600">ABOUT US</h1>
                    <div>
                        <p className="text-center p-3 text-white md:text-left">Welcome to Batjha Ba Afrika. <br /> We indulge in the <b>Entertainment industry</b> leading to over 18 years of success not from only what we serve, but from the message driven by our performances we manage to cultivate the attention of our clients. For future references we are implementing showcasing over international standards and build future leaders within the company yo proceed with the legacy.</p>
                    </div>
                </div>

                <img src={drum} alt="african drum" className="w-80 lg:100"/>
            </div>

            <section className="bg-[#222222] rounded-3xl mx-auto max-w-[calc(100%-2.5rem)] pt-12 flex flex-col gap-6 p-6 items-center w-full">
                <h1 className="text-3xl font-bold md:text-6xl">Upcoming <span className="text-orange-600">
                    Events</span></h1>

                <div className="w-full flex flex-col md:grid md:grid-cols-3 md:gap-4">
                    <div className="flex gap-6 p-6 w-70 px-8 bg-neutral-900 hover:bg-neutral-700 transition-colors cursor-pointer rounded-lg border-l-4 border-orange-500 md:w-100">

                        <div className="text-center min-w-[60px] shrink-0">
                            <p className="text-2xl font-bold text-orange-500">Day</p>
                            <p className="text-sm text-gray-400">Month</p>
                        </div>

                        <div className="flex flex-col min-w-0 flex-1">
                            <h1 className="text-xl font-bold mb-2">Event Name</h1>
                            <p className="text-gray-400 text-sm flex items-center gap-2 mb-1"><Calendar size={14}/> Date</p>
                            <p className="text-gray-500 text-sm flex items-center gap-2 mb-1"><LocationEditIcon size={14}/> Venue</p>
                        </div>

                    </div>
                </div>    
            </section>

            <section className="flex flex-col w-full items-center justify-center p-6 ">
                    <Carousel
                        plugins={[autoplay.current]}
                        className="w-full max-w-sm md:max-w-screen"
                        >
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                 <button className="mt-8 px-9 py-4 bg-orange-600 text-white cursor-pointer hover:bg-amber-500 rounded-md font-semibold transition-colors">
                    SEE OUR GALLERY
                </button>
            </section>

            <section className="flex flex-col w-full items-center justify-center p-6 pt-12 gap-4 bg-[#222222] rounded-3xl mx-auto max-w-[calc(100%-2.5rem)]">

                <h1 className="text-3xl font-bold md:text-6xl">What We <span className="text-orange-600">
                    Offer</span></h1>

                <p className="text-md text-center text-gray-300 mb-3 max-w-2xl mx-auto">
                    Bring the energy and beauty of African dance to your celebration, festival, or corporate event
                </p>

                <div className="flex flex-col items-center justify-center md:grid md:grid-cols-1">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="p-6 bg-neutral-700 rounded-lg">
                        <Calendar className="mx-auto mb-4 text-orange-500" size={40} />
                        <h4 className="text-xl font-bold mb-2">Festivals & Events</h4>
                        <p className="text-gray-400">Cultural celebrations and public performances</p>
                        </div>
                        
                        <div className="p-6 bg-neutral-700 rounded-lg">
                        <Users className="mx-auto mb-4 text-orange-500" size={40} />
                        <h4 className="text-xl font-bold mb-2">Private Functions</h4>
                        <p className="text-gray-400">Weddings, parties, and special occasions</p>
                        </div>
                        
                        <div className="p-6 bg-neutral-700 rounded-lg">
                        <Music className="mx-auto mb-4 text-orange-500" size={40} />
                        <h4 className="text-xl font-bold mb-2">Workshops</h4>
                        <p className="text-gray-400">Educational programs and dance classes</p>
                        </div>
                    </div>
                </div>

                <button className=" px-9 py-4 bg-orange-600 text-white cursor-pointer hover:bg-amber-500 rounded-md font-semibold transition-colors" onClick={bookingPage}>
                    Request Quotation
                </button>
            </section>

            <Footer/>

        </div>
    )
}
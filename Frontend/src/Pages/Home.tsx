import { NavBar } from "@/Components/NavBar";
import vid from "./../assets/Images/1.mp4";
import drum from "./../assets/Images/drum.png";
import { Calendar, LocateIcon, LocationEditIcon, PinIcon } from "lucide-react";

export function Home() {
    return (
        <div className="h-full w-full bg-black text-white">
            <NavBar />

            <div className="relative h-screen w-full">
                <video
                    src={vid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-screen h-full object-cover rounded-b-3xl brightness-30"
                />

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                    <h1 className="text-8xl md:text-7xl font-bold text-center">
                        Batjha Ba <span className="text-orange-400">Afrika</span> 
                    </h1>
                    <p className="text-3xl mb-4 md:text-2xl md:font-light mt-4 text-center max-w-xl ">
                        Where feet leave a soothing African story
                    </p>

                    <p className="text-center md:text-lg text-gray-300 max-w-2xl mx-auto">
                        Experience the power, beauty, and cultural richness of African dance through authentic performances and educational programs
                    </p>

                    <div className="flex flex-col items-center md:flex-row md:gap-6">
                        <button className="mt-8 px-9 py-4 bg-orange-600 text-white cursor-pointer hover:bg-amber-500 rounded-md font-semibold transition-colors">
                            SEE OUR GALLERY
                        </button>

                        <button className="mt-8 px-9 py-4 bg-transparent border border-white text-white cursor-pointer hover:bg-amber-500 rounded-md font-semibold transition-colors">
                            BOOK US
                        </button> 
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-col justify-evenly items-center h-full p-6 md:flex-row">

                <div className="flex flex-col gap-4 w-sm md:w-md lg:w-lg">
                    <h1 className="text-4xl text-center font-extrabold md:text-6xl md:font-medium md:text-left text-orange-600">ABOUT US</h1>
                    <div>
                        <p className="text-center text-white md:text-left">Welcome to Batjha Ba Afrika. <br /> We indulge in the <b>Entertainment industry</b> leading to over 18 years of success not from only what we serve, but from the message driven by our performances we manage to cultivate the attention of our clients. For future references we are implementing showcasing over international standards and build future leaders within the company yo proceed with the legacy.</p>
                    </div>
                </div>

                <img src={drum} alt="african drum" className="w-80 lg:100"/>
            </div>

            {/*Add the gallery carousel here*/}

            <section className="bg-gray-950 rounded-3xl mx-3 flex flex-col gap-6 p-6 items-center">
                <h1 className="text-3xl font-bold md:text-6xl">Upcoming <span className="text-orange-600">
                    Events</span></h1>

                <div className="flex gap-6 p-6 px-8 bg-neutral-900 hover:bg-neutral-700 transition-colors cursor-pointer rounded-lg border-l-4 border-orange-500">

                    <div className="text-center min-w-[60px]">
                      <p className="text-2xl font-bold text-orange-500">Day</p>
                      <p className="text-sm text-gray-400">Month</p>
                    </div>

                    <div>
                        <h1>Event Name</h1>
                        <p><Calendar size={14}/> Date</p>
                        <p><LocationEditIcon size={14}/> Venue</p>
                    </div>

                </div>
                
            </section>

        </div>
    )
}
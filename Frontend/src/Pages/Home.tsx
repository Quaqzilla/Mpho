import { NavBar } from "@/Components/NavBar";
import vid from "./../assets/Images/1.mp4";
import drum from "./../assets/Images/drum.png";

export function Home() {
    return (
        <div className="h-full w-full">
            <NavBar />

            <div className="relative h-screen w-full">
                <video
                    src={vid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-screen h-full object-cover rounded-b-3xl brightness-50"
                />

                <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-4 md:items-center">
                    <h1 className="text-8xl md:text-7xl font-bold md:text-center">
                        Batjha Ba Afrika
                    </h1>
                    <p className="text-2xl md:text-xl mt-4 md:text-center max-w-2xl ">
                        Where feet leave a soothing African story
                    </p>
                    <button className="mt-8 px-8 py-4 bg-black text-white cursor-pointer hover:bg-gray-900 rounded-lg font-semibold transition-colors">
                        Get Started
                    </button>
                </div>
            </div>

            <div className="flex flex-col justify-evenly items-center h-full p-6 md:flex-row">

                <div className="flex flex-col gap-4 w-sm md:w-md lg:w-lg">
                    <h1 className="text-4xl text-center font-bold md:text-6xl md:font-medium md:text-left text-[#be560c]">ABOUT US</h1>
                    <div>
                        <p className="text-center md:text-left">Welcome to Batjha Ba Afrika. <br /> We indulge in the <b>Entertainment industry</b> leading to over 18 years of success not from only what we serve, but from the message driven by our performances we manage to cultivate the attention of our clients. For future references we are implementing showcasing over international standards and build future leaders within the company yo proceed with the legacy.</p>
                    </div>
                </div>

                <img src={drum} alt="african drum" className="w-80 lg:100"/>
            </div>


        <div className="bg-black rounded-3xl h-screen mx-7">
            <img src="" alt="drum" />
            <p></p>
        </div>

        </div>
    )
}
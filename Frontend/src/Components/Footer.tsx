import { Facebook, Instagram, Twitter } from "lucide-react";


export function Footer(){
    return(
        <div className="bg-gray-900 h-60 flex flex-col justify-evenly items-center p-6 mt-5 md:flex-row md:items-start">
            <div className="flex flex-col gap-2">
                 <h1 className="text-2xl md:text-4xl font-bold text-center">
                    Batjha Ba <span className="text-orange-400">Afrika</span> 
                </h1>
                <p className="text-lg mb-4 md:text-xl md:font-light text-center ">
                    Where feet leave a soothing African story
                </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
                <h1 className="text-xl text-orange-400 mb-4 md:text-2xl font-medium text-center">
                    Quick Links 
                </h1>

                <ul className="flex flex-col gap-2">
                    <a href="">Services</a>
                    <a href="">Work</a>
                    <a href="">Gallery</a>
                </ul>
            </div>

            <div className="mt-4 flex flex-col gap-2 md:mt-0">
                <h1 className="text-xl text-orange-400 mb-4 md:text-2xl font-medium text-center">
                    Social media
                </h1>
                
                <div className="flex flex-row gap-2">
                    <Instagram/>
                    <Facebook/>
                    <Twitter/>
                </div>
            </div>
        </div>
    )
}
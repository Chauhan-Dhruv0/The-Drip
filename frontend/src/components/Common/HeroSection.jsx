import React from "react";
import './Style/HeroSection.css'

const HeroSection = () => {
    return (
        <div className="relative w-full h-[140vh] overflow-hidden border-50 border-black p-6">
            {/* Hero Background Section */}
            <div
                className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: "url(/assets/page-assets/store2.jpg)",
                }}
            ></div>

            <div className="absolute top-1/2 left-1/2 sm:left-[27%] -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[40%] p-6 flex justify-center items-center h-[50vh] bg-black text-white font-['Inter']">
                <div className="max-w-lg text-center">
                    <h1 className="text-[clamp(2rem,5vw,4rem)] font-extrabold tracking-[-0.05em] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                        The Drip
                    </h1>
                </div>
            </div>

            {/* Side Image (hidden on mobile) */}
            <img
    src="/assets/page-assets/ai-generated.jpg"
    alt="Aurora Side Image"
    className="side-image"
/>

        </div>
    );
};

export default HeroSection;

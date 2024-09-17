import React from 'react';

const Impact: React.FC = () => {
    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1726496170/water-desktop_fitepp.mp4" // Update the video path
                autoPlay
                loop
                muted
            ></video>

            {/* Overlay content */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">KEY FACTS</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg md:text-xl">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">1,200</span>
                            <span>Installations across various segments</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">~12,000 MLD</span>
                            <span>Water & Wastewater treated through Triveni projects</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">2,000+</span>
                            <span>Process equipment supplied and commissioned</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dark Overlay to enhance text visibility */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
        </div>
    );
};

export default Impact;

import React from 'react';
import { IconType } from 'react-icons'; // Import this to define the icon type

interface CardProps {
    title: string;
    tagline: string;
    text: string;
    bgImageSrc: string;
    icon: IconType; // Type for icons from react-icons
    onClick: () => void; // onClick handler prop
}

const Card: React.FC<CardProps> = ({ title, tagline, text, bgImageSrc, icon: Icon, onClick }) => {
    return (
        <div 
            onClick={onClick} // Add onClick handler here
            className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden flex flex-col text-center transition-transform duration-300 hover:scale-105"
        >
            <div className='relative'>
                <img src={bgImageSrc} alt={title} className="h-[600px] w-full object-cover" />
                <div className="absolute inset-0 bg-blue-600/40 flex flex-col items-center justify-center text-white">
                    <Icon className="text-6xl mb-4" /> {/* Dynamic icon */}
                    <h2 className="font-bold text-2xl">{title}</h2>
                </div>
            </div>
            <div className="p-4">
                <p className="text-gray-600">{text}</p>
                <p className="text-blue-600 hover:underline font-semibold mt-2">
                    {tagline}
                </p>
            </div>
        </div>
    );
};

export default Card;

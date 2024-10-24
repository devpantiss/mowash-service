import React from 'react';

interface ProgramCardProps {
    title: string;
    imageSrc: string;
    tagline: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, imageSrc, tagline }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col text-center">
            <div className='relative'>
                <img src={imageSrc} alt={title} className="h-[600px] w-full object-cover" />
                <div className="p-4 absolute bottom-0 w-[100%] h-[100px] bg-blue-600/50 text-white">
                    <h2 className="font-bold text-2xl">{title}</h2>
                </div>
            </div>
            <div className="p-4">
                <p className="text-blue-600 hover:underline font-semibold">
                    {tagline}
                </p>
            </div>
        </div>
    );
};

const MowashPreneurCards = () => {
    return (
        <section className="bg-blue-600 py-12 px-10">
            <div className="relative max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Sell Your Wash Products with us</h2>
                <p className="text-lg text-white mb-12">
                    Rich blended journeys that your people will love for making them more productive, effective and happier.
                </p>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ProgramCard
                        title="For Hand Hygiene"
                        imageSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727430056/hand_qpwdxw.png"
                        tagline="Clean hands, safe life."
                    />
                    <ProgramCard
                        title="For Menstural Hygiene"
                        imageSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727430057/menstural_repqrx.png"
                        tagline="Comfort in care."
                    />
                    <ProgramCard
                        title="For Leg Hygiene"
                        imageSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727430057/leg_bo15nt.png"
                        tagline="Fresh legs, strong steps."
                    />
                    <ProgramCard
                        title="For Facility Hygiene"
                        imageSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727430056/360_ilnxcw.png"
                        tagline="Clean spaces, healthy places."
                    />
                </div>
            </div>
            
        </section>
    );
};

export default MowashPreneurCards;

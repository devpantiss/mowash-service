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
                <div className="p-4 absolute bottom-0 w-[296px] h-[150px] bg-blue-600/50 text-white">
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
        <section className="bg-blue-600 py-12">
            <div className="relative max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Sell Your Wash Products with us</h2>
                <p className="text-lg text-white mb-12">
                    Rich blended journeys that your people will love for making them more productive, effective and happier.
                </p>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ProgramCard
                        title="For Hand Hygiene"
                        imageSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726667664/Untitled_design_2_otps8l.png"
                        tagline="Clean hands, safe life."
                    />
                    <ProgramCard
                        title="For Menstural Hygiene"
                        imageSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726667761/Untitled_design_4_ewqjom.png"
                        tagline="Comfort in care."
                    />
                    <ProgramCard
                        title="For Leg Hygiene"
                        imageSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726667463/Untitled_design_1_prt8qb.png"
                        tagline="Fresh legs, strong steps."
                    />
                    <ProgramCard
                        title="For Facility Hygiene"
                        imageSrc="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726668482/Untitled_design_6_qdpm9q.png"
                        tagline="Clean spaces, healthy places."
                    />
                </div>
            </div>
            <div className="bg-blue-600 mt-12 py-8 text-center">
                <h3 className="text-2xl text-white font-bold">We&apos;ve Got Your Back</h3>
                <p className="text-lg text-white max-w-3xl mx-auto mb-8">
                    What drives us: like-hearted, like-minded partnerships, programs that address your most urgent business problems such as attrition, retention and high-performance, with scalable and efficient solutions that work.
                </p>
                <a href="#" className="bg-white text-blue-600 py-3 px-8 rounded-lg shadow font-bold">
                    Know more
                </a>
            </div>
        </section>
    );
};

export default MowashPreneurCards;

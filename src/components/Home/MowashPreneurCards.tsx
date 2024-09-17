import React from 'react';

interface ProgramCardProps {
    title: string;
    description: string;
    imageSrc: string;
    link: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, imageSrc, link }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col text-center">
            <div className='relative'>
                <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                <div className="p-4 absolute bottom-0 w-[296px] h-[150px] bg-blue-600/50 text-white">
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <p className="text-lg">{description}</p>
                </div>
            </div>
            <div className="p-4">
                <a href={link} className="text-blue-600 hover:underline font-semibold">
                    Learn More
                </a>
            </div>
        </div>
    );
};

const MowashPreneurCards = () => {
    return (
        <section className="bg-blue-600 py-12">
            <div className="relative max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">MoWash-Preneur Services</h2>
                <p className="text-lg text-white mb-12">
                    Rich blended journeys that your people will love for making them more productive, effective and happier.
                </p>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ProgramCard
                        title="LEAP"
                        description="For Aspiring Women Managers"
                        imageSrc="https://cdn.harappa.education/wp-content/uploads/2022/10/14165130/program2.png"
                        link="#"
                    />
                    <ProgramCard
                        title="RISE"
                        description="For High-Performing Women Managers"
                        imageSrc="https://cdn.harappa.education/wp-content/uploads/2022/10/20122924/program1-1.png"
                        link="#"
                    />
                    <ProgramCard
                        title="GROW"
                        description="For First-Time Managers"
                        imageSrc="https://cdn.harappa.education/wp-content/uploads/2022/10/14165136/program3.png"
                        link="#"
                    />
                    <ProgramCard
                        title="SOAR"
                        description="For Mid-Level Managers"
                        imageSrc="https://cdn.harappa.education/wp-content/uploads/2022/10/14165145/program4.png"
                        link="#"
                    />
                </div>
            </div>
            <div className="bg-blue-600 mt-12 py-8 text-center">
                <h3 className="text-2xl text-white font-bold">We&apos;ve Got Your Back</h3>
                <p className="text-lg text-white max-w-3xl mx-auto mb-8">
                    What drives us: like-hearted, like-minded partnerships, programs that address your most urgent business problems such as attrition, retention and high-performance, with scalable and efficient solutions that work.
                </p>
                <a href="#" className="bg-white text-blue-600 py-3 px-8 rounded-lg shadow font-bold">
                    Write To Us
                </a>
            </div>
        </section>
    );
};

export default MowashPreneurCards;

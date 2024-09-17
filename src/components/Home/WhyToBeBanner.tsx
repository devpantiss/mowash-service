import React from 'react';

const WhyToBeBanner = () => {

  return (
    <section
      className="relative h-[400px] md:h-[600px] flex items-center justify-center text-black"
      style={{
        backgroundImage: 'url("/images/water.webp")',
        backgroundAttachment: 'fixed',
        // backgroundPosition: `center ${offsetY * 0.5}px`,
        backgroundSize: 'cover',
      }}
    >

      <div className="relative max-w-7xl h-full flex items-center text-black px-8 md:px-16 z-10">
        {/* Left Section: MoWash Engineer */}
        <div className="w-1/2">
          <h2 className="text-[44px] md:text-4xl font-bold mb-8">Why to be <span className='text-blue-600'>MoWash</span> Engineer</h2>
          <div className="flex justify-center items-center gap-x-6">
            <div className='flex flex-col justify-center items-center'>
              <p className="text-3xl font-bold text-blue-600">1,500</p>
              <p className='text-center'>Successful projects</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className='text-center'>Trained professionals</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className="text-3xl font-bold text-blue-600">10,000+</p>
              <p className='text-center'>Hours of fieldwork experience</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className="text-3xl font-bold text-blue-600">200+</p>
              <p className='text-center'>Workshops conducted</p>
            </div>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block h-[350px] w-[2px] bg-black mx-8"></div>

        {/* Right Section: MoWash Preneur */}
        <div className="w-1/2">
          <h2 className="text-[44px] md:text-4xl font-bold mb-8">Why to be <span className='text-blue-600'>MoWash</span> Preneur</h2>
          <div className="flex justify-center items-center gap-x-6">
            <div className='flex flex-col justify-center items-center'>
              <p className="text-3xl font-bold text-blue-600">2,000</p>
              <p className='text-center'>Ventures launched</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className="text-3xl font-bold text-blue-600">300+</p>
              <p className='text-center'>partnerships and collaborations</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className="text-3xl font-bold text-blue-600">50+</p>
              <p className='text-center'>Cities served</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className="text-3xl font-bold text-blue-600">1,200+</p>
              <p className='text-center'>Innovative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyToBeBanner;

import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover" // Make sure the video covers the entire background
        >
          <source src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1726648742/video_2024-09-18_14-07-28_yvaji6.mp4" type="video/mp4" /> {/* Path to your video */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Section Content */}
      <div className="flex flex-col items-center justify-center text-center h-full px-8">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">India&apos;s 1st Digital platform in WASH and Circular Economy</h1>

        <div className="flex justify-between gap-x-8 items-center">
          <div className="px-4 py-2 bg-black/30">
            <p className="mb-4 text-white">An Initiative by</p>
            <Image src="https://www.mowash.in/_next/image?url=%2FImages%2Flogo1.png&w=128&q=75" width={100} height={50} alt="logo" />
          </div>
          <div className="px-4 py-2 bg-black/30">
            <p className="text-white">Supported by</p>
            <Image src="https://www.mowash.in/_next/image?url=%2FImages%2FUNICEF-logo.png&w=128&q=75" width={100} height={50} alt="logo" />
          </div>
        </div>

      </div>
      <img
        src='https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726436377/header-bottom_mjvqka.svg'
        alt="footerImg"
        className='absolute bottom-0 w-full rotate-180'
      />
    </div>
  );
};

export default Hero;

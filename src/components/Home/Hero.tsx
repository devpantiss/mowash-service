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
          <source src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1727334535/InShot_20240918_133111349_uzzbqn.mp4" type="video/mp4" /> {/* Path to your video */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Section Content */}
      <div className="flex flex-col items-center justify-center text-center h-full px-8">
        <h1 className="text-white text-3xl md:text-4xl flex bg-[black]/40 rounded-md px-3 justify-center items-center font-bold mb-4"><Image src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726663506/151dcda9-7928-4436-95db-f7b98e833ff5-removebg-preview_khb1cd.png" height={80} width={80} alt="toilet"/>We are The Toilet Directors!</h1>

        {/* <div className="absolute bottom-5 left-[45%] z-20 flex justify-center gap-x-4 items-center">
          <div className="px-4">
            <Image src="https://www.mowash.in/_next/image?url=%2FImages%2Flogo1.png&w=128&q=75" width={160} height={130} alt="logo" />
            <p className="text-white text-center">An Initiative by</p>
          </div>
        </div> */}

      </div>

        {/* <img
          src='https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726674089/pngegg_fyr2md.png'
          alt="footerImg"
          className='w-full h-[480px] absolute bottom-0'
        /> */}
    </div>
  );
};

export default Hero;

import Link from "next/link";
import { FaTools, FaTruck, FaSolarPanel } from "react-icons/fa";
import { MdOutlinePlumbing } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative h-[100vh] lg:h-screen flex flex-col lg:flex-row">
      {/* Left Section: Video (Desktop) */}
      <div className="hidden lg:block w-1/2">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover h-full w-full"
        >
          <source
            src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735554334/FSTP_handler_1_syafil.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 w-full px-6 relative h-full flex flex-col justify-center items-center lg:bg-gradient-to-b from-black to-[#001F3F] bg-black bg-opacity-60 p-8">
        {/* Background Video for Mobile */}
        <div className="absolute inset-0 lg:hidden -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735554334/FSTP_handler_1_syafil.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Top Logos */}
        <div className="absolute w-full top-0 py-2 flex justify-center items-center bg-white left-0 right-0">
          <Link href="/">
            <img
              src="/images/mowash-logo.webp"
              alt="Mowash Logo"
              className="h-[60px] w-auto glow-effect"
            />
          </Link>
        </div>

        {/* Rotating Circle Section */}
        <div className="relative flex justify-center items-center ">
          {/* Rotating Dashed Circle */}
          <div className="absolute lg:top-20 top-28 rounded-full border-2 border-dashed border-blue-500 w-[300px] lg:w-[380px] h-[300px] lg:h-[380px] animate-spin-slow">
            {/* Icons Positioned Around the Circle */}
            <div className="absolute -top-8 left-1/2 transform bg-white rounded-full p-3 -translate-x-1/2 text-blue-500">
              <MdOutlinePlumbing className="text-6xl" />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform bg-white rounded-full p-3 -translate-x-1/2 text-blue-500">
              <FaTools className="text-5xl" />
            </div>
            <div className="absolute -left-8 top-1/2 bg-white rounded-full p-3 transform -translate-y-1/2 text-blue-500">
              <FaTruck className="text-6xl" />
            </div>
            <div className="absolute -right-8 top-1/2 transform bg-white rounded-full p-3 -translate-y-1/2 text-blue-500">
              <FaSolarPanel className="text-6xl" />
            </div>
          </div>

          {/* Headline */}
          <h1
            className="inline-block lg:text-4xl mb-6 leading-[1.5] text-center text-3xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 drop-shadow-lg animate-shine"
            style={{
              backgroundSize: "200%",
              backgroundPosition: "0%",
              animation: "shine 3s infinite linear",
            }}
          >
            We are The Toilet Directors
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row items-center gap-x-6 mt-24 lg:mt-44 gap-y-6 z-50">
          <Link
            href="/login"
            className="px-8 py-2 rounded-full bg-blue-600 text-white font-semibold transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-8 py-2 rounded-full bg-blue-600 text-white font-semibold transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Bottom Logos */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-between px-8 items-center">
          <div className="text-center">
            <p className="text-blue-500 lg:text-white font-bold text-sm">
              An Initiative by
            </p>
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727680521/pantiss_logo_kuiof0.png"
              alt="Pantiss Logo"
              className="h-[50px] lg:h-[70px] mt-2 w-auto"
            />
          </div>
          <div className="text-center">
            <p className="text-blue-500 lg:text-white font-bold text-sm">
              Supported by
            </p>
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726660522/1200px-UNICEF_Logo_gfi4tc.png"
              alt="UNICEF Logo"
              className="h-[40px] lg:h-[50px] mt-4 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

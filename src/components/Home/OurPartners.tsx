import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurPartners = () => {
  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Speed increased for smoother effect
    slidesToShow: 4, // Show 4 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // This will keep the slider moving continuously
    cssEase: "linear", // For smooth continuous scrolling
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-white flex flex-col lg:flex-row py-10 px-12 justify-center gap-x-16 items-center">
      {/* Image positioned at the top-left corner and rotated */}
      <div className="relative border-l-4 border-blue-600">
        <h1 className="text-4xl pl-2 font-bold">Our Partners</h1>
      </div>

      <div className="container w-[400px] lg:w-[1000px]">
        {/* Slider with Marquee Effect */}
        <Slider {...settings} className="gap-x-2"> {/* Added gap using Tailwind */}
          <div className="px-2">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055079/330px-DTE_pic_hrwr2q.jpg"
              alt="Down To Earth"
              className="h-36 w-full object-contain" // Set height and use object-contain for proper fit
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055079/CBC_logo.svg_ixkcmg.png"
              alt="CBC"
              className="h-36 w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055539/the-telegraph-logo-vector-removebg-preview_ovbazt.png"
              alt="The Telegraph"
              className="h-36 w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055080/pngwing.com_7_ixeqav.png"
              alt="TOI"
              className="h-36 w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055079/Thomson_Reuters_logo.svg_hrphwf.png"
              alt="Thomson Reuters"
              className="h-36 w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055080/iForest-Global-Black-Logo-and-Text_kvvqjw.png"
              alt="IForest"
              className="h-36 w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055080/Orissapost_qczf45.png"
              alt="OrissaPost"
              className="h-36 w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055080/1200px-UNICEF_Logo_g3gwyz.png"
              alt="Unicef"
              className="h-36 w-full object-contain"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurPartners;

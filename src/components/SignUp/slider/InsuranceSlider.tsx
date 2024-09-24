import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SlideData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
}

const CardSlider: React.FC = () => {
  const slides: SlideData[] = [
    {
      id: 1,
      title: "Fraud Detection Policy",
      description: "",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727162293/banner-24x7_zgfh1g.avif",
      linkText: "View details",
    },
    {
      id: 2,
      title: "Our claims assistance experts are available",
      description: "24x7* Assistance available for Health & Motor insurance",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727162293/beware-of-fraudsters_ogi2wk.avif",
      linkText: "Learn more",
    },
    {
      id: 3,
      title: "Got a question about insurance?",
      description: "Drop a message and we will help you quickly.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727162293/fraud_detection_policy_d7hsh2.avif",
      linkText: "Ask PB",
    },
    {
      id: 4,
      title: "Got a question about insurance?",
      description: "Drop a message and we will help you quickly.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727162293/homepage-g20-banner_uplv5j.avif",
      linkText: "Ask PB",
    },
  ];

  // Custom Next Arrow
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaChevronRight size={30} className="text-blue-500" />
      </div>
    );
  };

  // Custom Previous Arrow
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaChevronLeft size={30} className="text-blue-500" />
      </div>
    );
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: true, // Enable arrows
  };

  return (
    <div className="max-w-full mx-auto py-6 px-4 relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <div className="w-full">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                width={500}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;

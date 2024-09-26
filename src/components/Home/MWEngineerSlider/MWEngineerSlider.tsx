// components/Slider.tsx
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

type SlideItem = {
  id: number;
  title: string;
  price: string;
  discountedPrice: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
};

const slides: SlideItem[] = [
  {
    id: 1,
    title: "Toilet Mason, Electrician & Plumber",
    price: "₹ 546",
    discountedPrice: "₹ 464",
    imageUrl:
      "https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842795%2Fuploads%2F1721842795394-1.png.jpg&w=256&q=75",
    videoUrl:
      "https://aceblend.com/cdn/shop/files/quinn_vqxksymjj7u43ugmx7t1643h.mp4", // Add video URL for each product
    description: "DR. PARIKSHA RAO CLINICAL NUTRITIONIST",
  },
  {
    id: 2,
    title: "Cess Pool Vehicle Services Providers",
    price: "₹ 499",
    discountedPrice: "₹ 499",
    imageUrl:
      "https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842833%2Fuploads%2F1721842833295-2.png.jpg&w=256&q=75",
    videoUrl:
      "https://aceblend.com/cdn/shop/files/quinn_cw14y2bl1dsdj4rl2ss5wa20.mp4", // Add video URL for each product
    description: "Shivoham - Celebrity Fitness Coach",
  },
  {
    id: 3,
    title: "Wasste Collection, Segregation & Processing",
    price: "₹ 499",
    discountedPrice: "₹ 499",
    imageUrl:
      "https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842864%2Fuploads%2F1721842864505-3.png.jpg&w=256&q=75",
    videoUrl:
      "https://aceblend.com/cdn/shop/files/quinn_v2d4jc7nj9vmatmoa5wy9p3f.mp4", // Add video URL for each product
    description: "Shivoham - Celebrity Fitness Coach",
  },
  {
    id: 4,
    title: "Nal Jal Mitra for Dringking Water",
    price: "₹ 499",
    discountedPrice: "₹ 499",
    imageUrl:
      "https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842899%2Fuploads%2F1721842899350-4.png.jpg&w=256&q=75",
    videoUrl:
      "https://aceblend.com/cdn/shop/files/quinn_w0v4m1kbsd0vgtxjz3wr5xvg.mp4", // Add video URL for each product
    description: "Shivoham - Celebrity Fitness Coach",
  },
  {
    id: 5,
    title: "Solid & Liquid Waste Treatment",
    price: "₹ 499",
    discountedPrice: "₹ 499",
    imageUrl:
      "https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842927%2Fuploads%2F1721842927589-5.png.jpg&w=256&q=75",
    videoUrl:
      "https://aceblend.com/cdn/shop/files/quinn_wet7g4t7pmsa714plcrxhe0s.mp4", // Add video URL for each product
    description: "Shivoham - Celebrity Fitness Coach",
  },
  {
    id: 6,
    title: "Solar Plant & Water Pump EPC, O&M'",
    price: "₹ 499",
    discountedPrice: "₹ 499",
    imageUrl:
      "https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842959%2Fuploads%2F1721842959325-6.png.jpg&w=256&q=75",
    videoUrl:
      "https://aceblend.com/cdn/shop/files/quinn_b6mlz7s64pdadq2t5fcnr3lx.mp4", // Add video URL for each product
    description: "Shivoham - Celebrity Fitness Coach",
  },
  {
    id: 7,
    title: "Wash & Climate Change Complaint Institution",
    price: "₹ 499",
    discountedPrice: "₹ 499",
    imageUrl:
      'https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721842985%2Fuploads%2F1721842985878-7.png.jpg&w=256&q=75',
    videoUrl:
      "https://aceblend.com/cdn/shop/files/quinn_vqxksymjj7u43ugmx7t1643h.mp4", // Add video URL for each product
    description: "Shivoham - Celebrity Fitness Coach",
  },
  {
    id: 8,
    title: "Pond Restoration & Rejuvination",
    price: "₹ 499",
    discountedPrice: "₹ 499",
    imageUrl:
      "https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721843023%2Fuploads%2F1721843023351-8.png.jpg&w=256&q=75",
    videoUrl:
      "https://aceblend.com/cdn/shop/files/quinn_cw14y2bl1dsdj4rl2ss5wa20.mp4", // Add video URL for each product
    description: "Shivoham - Celebrity Fitness Coach",
  },
  {
    id: 9,
    title: "Essential Wash Services Bill Payment",
    price: "₹ 499",
    discountedPrice: "₹ 499",
    imageUrl:
      "https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1721843101%2Fuploads%2F1721843101241-10.png.jpg&w=256&q=75",
    videoUrl:
      "https://aceblend.com/cdn/shop/files/quinn_v2d4jc7nj9vmatmoa5wy9p3f.mp4", // Add video URL for each product
    description: "Shivoham - Celebrity Fitness Coach",
  },
  {
    id: 10,
    title: "Institutional Facility Management",
    price: "₹ 499",
    discountedPrice: "₹ 499",
    imageUrl:
      "https://www.mowash.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd1dbnkhw%2Fimage%2Fupload%2Fv1723195716%2Fuploads%2F1723195716444-10841340%2520%25281%2529.png.jpg&w=256&q=75",
    videoUrl:
      "https://aceblend.com/cdn/shop/files/quinn_w0v4m1kbsd0vgtxjz3wr5xvg.mp4", // Add video URL for each product
    description: "Shivoham - Celebrity Fitness Coach",
  },

  // Add more items as required...
];

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      onClick={onClick}
      style={{
        display: "block",
        position: "absolute",
        left: "-30px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        color: "white",
      }}
    >
      <FaChevronLeft size={30} />
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      onClick={onClick}
      style={{
        display: "block",
        position: "absolute",
        right: "-30px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        color: "white",
        backgroundColor: "blue",
      }}
    >
      <FaChevronRight size={30} />
    </div>
  );
};

const MWEngineerSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
  };

  return (
    <div className="px-4 py-6 relative">
      {/* Slider Indicator */}
      <div className="text-center mb-4">
        {/* Numeric Slider Indicator */}
        <span className="text-gray-700 text-lg font-semibold">
          {currentSlide + 1}/{slides.length}
        </span>
      </div>
      <Slider
        {...settings}
        className="py-12 w-[400px] md:w-[768px] lg:w-[1400px]"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative px-2">
            {/* Card Container */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{ width: "250px" }}
            >
              {/* Video Section */}
              <div className="relative">
                <video
                  src={slide.videoUrl}
                  autoPlay
                  loop
                  muted
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Product Details Section */}
              <div className="p-4 relative text-center">
                {/* Product Image */}
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="mx-auto absolute -top-12 left-[39%] w-16 h-16 object-contain"
                />
                {/* Product Title */}
                <h3 className="mt-4 text-lg font-semibold text-gray-700">
                  {slide.title}
                </h3>
                {/* Product Price */}
                <div className="mt-2">
                  <span className="line-through text-gray-400">
                    {slide.price}
                  </span>
                  <span className="ml-2 text-red-500 font-bold">
                    {slide.discountedPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MWEngineerSlider;

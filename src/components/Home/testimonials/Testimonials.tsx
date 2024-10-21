import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import styles from "./testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Dr. Kirti Bhushan Pradhan",
    title: "Senior Adviser(Healthcare Strategy & Mgt)",
    text: "PANTISS have dared to dream about a truly empowered rural India. The Pantiss Foundation is their ambitious endeavour to actualise that dream by creating and executing a holistic and sustainable model of development of rural India. Their approach of connecting rural India with not just urban India but also the world is truly exciting.",
    avatar: "https://pantiss.com/wp-content/uploads/2022/08/test1-150x150.png",
    bgcolor: "bg-gradient-to-r from-blue-500 to-blue-900",
  },
  {
    id: 2,
    name: "Shabaz Khan",
    title: "Climate Change Specialist, GIZ",
    text: "My main responsibilities include contributing to the operational planning for the implementation of the CSC project, coordinating and managing partnerships with state and city level government authorities, stakeholders, and national and international implementation partners.",
    avatar: "https://pantiss.com/wp-content/uploads/2022/08/test7-150x150.png",
    bgcolor: "bg-gradient-to-r from-red-500 to-red-900",
  },
  {
    id: 3,
    name: "Omm Priyadarshi",
    title: "National Convenor, Think India",
    text: "I have known PANTISS on both a personal and professional level and over the years have come to understand the passion that drives them. To do what they do, with no regard for applause or reward is something you don’t see very often. I support them wholeheartedly and wish them every success.",
    avatar: "https://pantiss.com/wp-content/uploads/2022/08/test4-150x150.png",
    bgcolor: "bg-gradient-to-r from-green-500 to-green-900",
  },
  {
    id: 4,
    name: "Samik Sundar Das",
    title: "Sr. Rural Development Specialist, World Bank",
    text: "I am deeply inspired by the work being done by PANTISS! It is rare to meet people who find motivation within themselves and create inspiration for others around them. Their determination comes from their deep-routed belief in the cause of Rural Empowerment. Their desire to create an India without barriers; an India free from poverty is beyond remarkable. The work done by their foundation – Pantiss – is commendable and their focus & conviction is unmatched.",
    avatar: "https://pantiss.com/wp-content/uploads/2022/08/test5-150x150.png",
    bgcolor: "bg-gradient-to-r from-yellow-500 to-yellow-900",
  },
  {
    id: 5,
    name: "Manjir Chatterjee",
    title: "Founder & CEO Folks India",
    text: "The initiative of PANTISS foundation in rural belt of Odisha, Jharkhand, Chhattisgarh & West Bengal is appreciable. I want to reach and understand rural India as a part of evolving as a player & writer because until we understand rural India we cannot bring about true changes.",
    avatar: "https://pantiss.com/wp-content/uploads/2022/08/test3-150x150.jpg",
    bgcolor: "bg-gradient-to-r from-yellow-500 to-yellow-900",
  },
  {
    id: 6,
    name: "Mrs Aparajita Gocchikar",
    title: 'International Chess Player"',
    text: "The work strategy they brought to the field or community is very much impressive. I am very delighted with PANTISS foundation’s continuous and a great focus on rural development or empowerment. I appreciate their selfless motivation and mission of transforming the lives of 1 million rural India in the next 5 years. I am inspiring their mission and wish them a great achievement.",
    avatar: "https://pantiss.com/wp-content/uploads/2022/08/test2-150x150.jpg",
    bgcolor: "bg-gradient-to-r from-yellow-500 to-yellow-900",
  },
];

const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      className="absolute flex justify-center items-center right-[10px] top-[-30px] lg:top-4 lg:right-4 bg-blue-600 text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </button>
  );
};

const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      className="absolute flex justify-center items-center top-[-30px] right-[60px] lg:top-4 lg:right-16 bg-blue-600 text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </button>
  );
};

const TestimonialCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative  flex flex-col justify-center items-center container mx-auto py-10">
      <div className="relative border-l-4 border-blue-600">
        <h1 className="text-4xl pl-2 font-bold">Testimonials</h1>
      </div>
      <div className="flex justify-center items-center px-4">
        <Slider
          {...settings}
          className="py-12 max-w-[500px] md:w-[768px] lg:w-[1400px]"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`px-4`}>
              {" "}
              {/* Added padding to control spacing */}
              <div className={`${styles.testimonial}`}>
                <div className="review flex justify-center items-center h-full">
                  <p className="text-white font-open">{testimonial.text}</p>
                </div>
                <div className={`${styles.reviewer}`}>
                  <img
                    src={testimonial.avatar}
                    className="rounded-full h-[70px]"
                    alt={testimonial.name}
                  />
                  <div className="text-right leading-none">
                    <span className="text-[18px] font-merri text-white">
                      {testimonial.name}
                      <br />
                      <span className="text-[12px] font-merri text-white">
                        {testimonial.title}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

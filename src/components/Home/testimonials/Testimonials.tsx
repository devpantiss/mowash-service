import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "@/components/Home/testimonials/testimonials.module.css";

interface Testimonial {
    id: number;
    name: string;
    title: string;
    videoSrc: string;
    avatar: string;
    bgcolor: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Dr. Kirti Bhushan Pradhan",
        title: "Senior Adviser (Healthcare Strategy & Mgt)",
        videoSrc: "https://path-to-your-video1.mp4",
        avatar: "https://pantiss.com/wp-content/uploads/2022/08/test1-150x150.png",
        bgcolor: "bg-gradient-to-r from-blue-500 to-blue-900",
    },
    {
        id: 2,
        name: "Shabaz Khan",
        title: "Climate Change Specialist, GIZ",
        videoSrc: "https://path-to-your-video2.mp4",
        avatar: "https://pantiss.com/wp-content/uploads/2022/08/test7-150x150.png",
        bgcolor: "bg-gradient-to-r from-red-500 to-red-900",
    },
    {
        id: 3,
        name: "Omm Priyadarshi",
        title: "National Convenor, Think India",
        videoSrc: "https://path-to-your-video3.mp4",
        avatar: "https://pantiss.com/wp-content/uploads/2022/08/test4-150x150.png",
        bgcolor: "bg-gradient-to-r from-green-500 to-green-900",
    },
    // Add more testimonials as needed
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
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        <div className="relative container mx-auto py-10">
            <div className="relative border-l-4 border-blue-600">
                <h1 className="text-4xl pl-2 font-bold">Testimonials</h1>
            </div>
            <div className="flex justify-center items-center px-4">
                <Slider {...settings} className="py-12 w-[400px] lg:w-[1000px]">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial bg-gradient-to-r from-blue-600 to-blue-700 m-4 flex flex-col justify-center items-center p-4 rounded-tr-none rounded-bl-none rounded-br-[25px] rounded-tl-[25px] mx-4 relative`}
                        >
                            <video
                                className="w-full h-full object-cover rounded-tr-none rounded-bl-none rounded-br-[25px] rounded-tl-[25px]"
                                src={testimonial.videoSrc}
                                autoPlay
                                loop
                                muted
                            ></video>

                            <div className="reviewer-overlay absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 flex items-center gap-x-4">
                                <img
                                    src={testimonial.avatar}
                                    className="rounded-full h-[50px] w-[50px] border-2 border-white"
                                    alt={testimonial.name}
                                />
                                <div className="text-white text-left">
                                    <span className="text-lg font-bold">{testimonial.name}</span>
                                    <br />
                                    <span className="text-sm">{testimonial.title}</span>
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

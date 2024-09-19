import React, { useState, useEffect, useRef } from 'react';
import { MdEngineering } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";

const SignupStep1: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [engineerCount, setEngineerCount] = useState(0);
  const [preneurCount, setPreneurCount] = useState(0);

  const engineerTarget = 120; // Actual number for MoWash Engineers
  const preneurTarget = 85;   // Actual number for MoWash Preneurs

  const counterRef = useRef<HTMLDivElement>(null);

  // Function to animate the counters
  const animateCounter = (start: number, end: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    let current = start;
    const duration = 1000; // Animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / end));

    const step = () => {
      current += 1;
      setter(current);
      if (current < end) {
        requestAnimationFrame(step);
      } else {
        setter(end);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    // Set up Intersection Observer to detect when the counter section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Counter section must be 50% visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Start the counters when the section becomes visible
    if (isVisible) {
      animateCounter(0, engineerTarget, setEngineerCount);
      animateCounter(0, preneurTarget, setPreneurCount);
    }
  }, [isVisible]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center justify-center h-[80vh] bg-gradient-to-b from-black to-blue-800">
      {/* Form Content */}
      <div className="w-full px-8 py-2 bg-transparent rounded-lg flex gap-8">
        {/* Left Section: Description and Counters */}
        <div 
          className="flex w-3/5 relative flex-col justify-center text-white p-8 rounded-lg"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726742454/jay-bhadreshwara-lux0psvZGLU-unsplash_whv55p.jpg')", // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className='absolute inset-0 z-10 bg-black/50'></div>
          <div className='z-30'>
            {/* Descriptions */}
          <h2 className="text-3xl font-bold mb-4">Who are we?</h2>
          <div className="mb-6">
            <p className="font-semibold text-lg">Mo WashEngineer:</p>
            <p className="text-sm">Our expert technicians who manage the washing and operational aspects of our business on the field.</p>
          </div>
          <div className="mb-6">
            <p className="font-semibold text-lg">Mo WashPreneur:</p>
            <p className="text-sm">Business-minded individuals focused on expanding and growing the MoWash brand by being the partner of our Store Products lineup.</p>
          </div>

          {/* Counters */}
          <div ref={counterRef} className="flex space-x-6">
            <div className="text-center">
              <p className="text-4xl font-bold">{engineerCount}</p>
              <p className="text-sm">Mo WashEngineers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">{preneurCount}</p>
              <p className="text-sm">Mo WashPreneurs</p>
            </div>
          </div>
          </div>
        </div>

        {/* Right Section: Options */}
        <div className="w-2/5 flex flex-col justify-center space-y-4">
          {/* Heading */}
          <h2 className="text-3xl text-white font-bold mb-6 text-left">Hey, I&apos;m a...</h2>

          {/* Option Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick('MoWash Engineer')}
              className={`w-full p-4 border-2 rounded-lg flex-col-reverse flex items-center justify-center 
                ${selectedOption === 'MoWash Engineer' ? 'border-blue-500 text-black bg-blue-100' : 'text-white border-gray-300'}`}
            >
              <span className="font-semibold">Mo WashEngineer</span>
              <MdEngineering className="text-8xl"/>
            </button>

            <button
              onClick={() => handleOptionClick('MoWash Preneur')}
              className={`w-full p-4 border-2 rounded-lg flex-col-reverse flex items-center justify-center 
                ${selectedOption === 'MoWash Preneur' ? 'border-blue-500 text-black bg-blue-100' : 'text-white border-gray-300'}`}
            >
              <span className="font-semibold">Mo WashPreneur</span>
              <GrUserManager className="text-8xl"/>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-blue-600" style={{ width: '8%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep1;

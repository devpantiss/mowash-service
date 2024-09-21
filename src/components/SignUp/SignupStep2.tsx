import React, { useState, useEffect, useRef } from 'react';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";

const SignupStep2: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [contractorCount, setContractorCount] = useState(0);
  const [partnerCount, setPartnerCount] = useState(0);

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
        animateCounter(0, engineerTarget, setContractorCount);
        animateCounter(0, preneurTarget, setPartnerCount);
      }
    }, [isVisible]);
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
    };

  return (
    <div className="flex items-center justify-center h-[80vh] bg-transparent">
      {/* Form Content */}
      <div className="w-full px-8 py-2 bg-transparent rounded-lg flex gap-8">
        <div className='flex flex-col justify-center space-y-4 w-2/5'>
          {/* Heading */}
        <h2 className="text-3xl text-white font-bold text-left mb-6">Are you a....</h2>

          {/* Options */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleOptionClick('Nano Contractor')}
              className={`w-full p-4 border-2 rounded-lg flex-col-reverse flex items-center justify-center 
                ${selectedOption === 'Nano Contractor' ? 'border-blue-500 text-black bg-blue-100' : 'text-white border-gray-300'}`}
            >
              <span className="font-semibold">Nano Contractor</span>
              <FaPeopleGroup className="text-8xl" />
            </button>

            <button
              onClick={() => handleOptionClick('MWC Partner')}
              className={`w-full p-4 border-2 rounded-lg flex-col-reverse flex items-center justify-center 
                ${selectedOption === 'MWC Partner' ? 'border-blue-500 text-black bg-blue-100' : 'text-white border-gray-300'}`}
            >
              <span className="font-semibold">MWC Partner</span>
              <FaUserGraduate className="text-8xl" />
            </button>
          </div>
        </div>


        <div 
          className="flex w-3/5 relative flex-col justify-center text-white p-8 rounded-lg"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726744112/josue-isai-ramos-figueroa-Pj4je7OjrME-unsplash_r5gxn2.jpg')", // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className='absolute inset-0 z-10 bg-black/50'></div>
          <div className='z-30'>
            {/* Descriptions */}
          <h2 className="text-3xl font-bold mb-4">Who are we?</h2>
          <div className="mb-6">
            <p className="font-semibold text-lg">Nano Contractors:</p>
            <p className="text-sm">Small scale independent contractors or businesses, who want to partner with us to get clients for their services business.</p>
          </div>
          <div className="mb-6">
            <p className="font-semibold text-lg">MWC Partners:</p>
            <p className="text-sm">Individuals who want to list their services on our platform to cater to the needs of ours users.</p>
          </div>

          {/* Counters */}
          <div ref={counterRef} className="flex space-x-6">
            <div className="text-center">
              <p className="text-4xl font-bold">{contractorCount}</p>
              <p className="text-sm">Nano Contractors</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">{partnerCount}</p>
              <p className="text-sm">Mo Wash Company Partners</p>
            </div>
          </div>
          </div>
        </div>
        
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-blue-600" style={{ width: '16%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep2;

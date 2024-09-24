import React, { useState, useEffect, useRef } from 'react';
import { FaBuilding, FaDumpster, FaIndustry, FaTools, FaTruck } from 'react-icons/fa';

// Options array based on the image content
const options = [
  { label: 'Residential Facilities', icon: <FaBuilding className='text-8xl' />, target: 1500, description: 'Service for residential buildings' },
  { label: 'Industrial Facilities', icon: <FaIndustry className='text-8xl' />, target: 1200, description: 'Service for industrial plants' },
  { label: 'Container and Dumpster', icon: <FaDumpster className='text-8xl' />, target: 800, description: 'Handling containers and dumpsters' },
  { label: 'Healthcare Facilities', icon: <FaBuilding className='text-8xl' />, target: 1000, description: 'Service for healthcare centers' },
  { label: 'Shopping Mall', icon: <FaBuilding className='text-8xl' />, target: 900, description: 'Service for shopping malls' },
  { label: 'Urban Local Body', icon: <FaTools className='text-8xl' />, target: 1100, description: 'Services for municipal bodies' },
  { label: 'Waste Segregation Center', icon: <FaTruck className='text-8xl' />, target: 950, description: 'Waste segregation services' },
];

const useInView = (ref: React.RefObject<HTMLDivElement>) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return inView;
};

const SignupStep5: React.FC = () => {
  // State to manage multiple selected options
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const detailRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(detailRef);

  // Toggle option selection
  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      // If option is already selected, remove it
      setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
    } else {
      // Otherwise, add it
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="flex flex-row h-[100vh] pt-20 bg-transparent">
      {/* Details Section */}
      <div className="relative w-2/5 overflow-y-auto p-8 text-white" ref={detailRef}>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726747073/anil-reddy-i8ODYfxh1j0-unsplash_q7xozl.jpg)' }}
        ></div>

        <div className="relative z-20 p-8 ">
          <h3 className="text-2xl font-bold mb-4">Service Details</h3>

          {/* Top Section: One-liner descriptions */}
          <div className="space-y-4">
            {options.map((option, index) => (
              <div key={index} className="flex justify-between">
                <span>{option.label}</span>
                <span>{option.description}</span>
              </div>
            ))}
          </div>

          {/* White Line Divider */}
          <div className="my-6 border-t border-white"></div>

          {/* Bottom Section: Counter Numbers */}
          <div className="grid grid-cols-4 gap-4">
            {options.map((option, index) => (
              <div key={index} className="text-center">
                <span className="text-2xl font-bold">{isInView ? <Counter target={option.target} /> : 0}</span>
                <div className="mt-2">{option.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Options Section */}
      <div className="flex flex-col w-3/5 p-8">
        <h2 className="text-3xl text-white font-bold mb-6">Select Your Services</h2>
        <div className="grid grid-cols-3 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.label)}
              className={`p-4 border-2 rounded-lg flex items-center justify-center 
                ${selectedOptions.includes(option.label) ? 'border-blue-500 text-blue-500 bg-blue-50' : 'text-white border-white'}`}
            >
              <span className="flex flex-col justify-center items-center">
                {option.icon}
                <span className="font-semibold">{option.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-blue-600" style={{ width: '32%' }}></div>
      </div>
    </div>
  );
};

const Counter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= target) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  return <>{count}</>;
};

export default SignupStep5;

import React, { useState, useEffect, useRef } from 'react';
import { FaToolbox, FaTruck, FaRecycle, FaWater, FaLeaf, FaSolarPanel, FaSeedling, FaMoneyBillWave } from 'react-icons/fa';
import { MdOutlineElectricalServices } from 'react-icons/md';
import { RiLayoutMasonryFill } from 'react-icons/ri';

const options = [
  { label: 'Toilet Mason', icon: <RiLayoutMasonryFill className='text-8xl' />, target: 1200, description: 'Handles masonry for toilets' },
  { label: 'Electrician', icon: <MdOutlineElectricalServices className='text-8xl' />, target: 800, description: 'Fixes electrical systems' },
  { label: 'Toilet Plumber', icon: <FaToolbox className='text-8xl' />, target: 900, description: 'Manages plumbing for toilets' },
  { label: 'Cess Pool Operator', icon: <FaTruck className='text-8xl' />, target: 500, description: 'Operates cesspool trucks' },
  { label: 'Sanitation Crew', icon: <FaRecycle className='text-8xl' />, target: 1000, description: 'Ensures sanitation services' },
  { label: 'Nal Jal Mitra', icon: <FaWater className='text-8xl' />, target: 1100, description: 'Works with water supply' },
  { label: 'STP Operator', icon: <FaLeaf className='text-8xl' />, target: 750, description: 'Operates sewage treatment plants' },
  { label: 'Solar Pump Operator', icon: <FaSolarPanel className='text-8xl' />, target: 600, description: 'Handles solar pump operations' },
  { label: 'Pond Excavator', icon: <FaSeedling className='text-8xl' />, target: 950, description: 'Excavates and maintains ponds' },
  { label: 'Water Bill Collector', icon: <FaMoneyBillWave className='text-8xl' />, target: 1200, description: 'Collects water bills' },
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

const SignupStep3: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(detailRef);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-row h-[80vh] bg-gradient-to-b from-black to-blue-800">
      {/* Options Section */}
      <div className="flex flex-col w-3/5 p-8">
        <h2 className="text-3xl text-white font-bold mb-6">My Expertise is...</h2>
        <div className="grid grid-cols-4 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.label)}
              className={`p-4 w-[200px] border-2 rounded-lg flex items-center justify-center 
                ${selectedOption === option.label ? 'border-blue-600 text-blue-500 bg-blue-100' : 'text-white border-gray-300'}`}
            >
              <span className="flex flex-col justify-center items-center">
                {option.icon}
                <span className="font-semibold">{option.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="relative w-2/5 h-full overflow-y-auto" ref={detailRef}>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726741910/pratik-gupta-PeG9dqAbyjE-unsplash_rlnwyt.jpg)' }}
        ></div>

        <div className="relative z-20 p-8 text-white">
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
          <div className="space-x-4 grid grid-cols-4">
            {options.map((option, index) => (
              <div key={index} className="text-center">
                <span className="text-2xl font-bold">{isInView ? <Counter target={option.target} /> : 0}</span>
                <div className="mt-2">{option.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-blue-600" style={{ width: '24%' }}></div>
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

export default SignupStep3;

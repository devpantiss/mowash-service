import React, { useState } from 'react';
import { FaBuilding, FaDumpster, FaIndustry, FaTools, FaTruck } from 'react-icons/fa';

// Options array based on the image content
const options = [
  { label: 'Residential Waste Management:', icon: <FaBuilding className='text-4xl text-blue-400' /> },
  { label: 'Industrial Waste Management', icon: <FaIndustry className='text-4xl text-blue-400' /> },
  { label: 'Container and Dumpster Services', icon: <FaDumpster className='text-4xl text-blue-400' /> },
  { label: 'Municipal Waste Management', icon: <FaTruck className='text-4xl text-blue-400' /> },
  { label: 'Construction & Demolition Waste Management', icon: <FaTools className='text-4xl text-blue-400' /> },
];

const SignupStep5: React.FC = () => {
  // State to manage multiple selected options
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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
    <div className="flex flex-col items-center justify-center h-[80vh] bg-white text-black">
      {/* Form Content */}
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Select Your Services</h2>

        {/* Options as cards (multiple choice) */}
        <div className="grid grid-cols-2 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.label)}
              className={`p-4 border rounded-lg flex items-center justify-between 
                ${selectedOptions.includes(option.label) ? 'border-blue-600 bg-blue-50' : 'border-gray-500'}`}
            >
              <span className="flex flex-col justify-center items-center space-x-4">
                {option.icon}
                <span className="font-semibold">{option.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-black" style={{ width: '32%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep5;

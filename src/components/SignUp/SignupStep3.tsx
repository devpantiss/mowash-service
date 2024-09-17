import React, { useState } from 'react';
import { FaToolbox, FaTruck, FaRecycle, FaWater, FaLeaf, FaSolarPanel, FaBuilding, FaSeedling, FaMoneyBillWave, FaUniversity } from 'react-icons/fa';

const options = [
  { label: 'Toilet Mason, Electrician & Plumber', icon: <FaToolbox className='text-4xl text-blue-400'/> },
  { label: 'Cess Pool vehicle services providers', icon: <FaTruck className='text-4xl text-blue-400'/> },
  { label: 'Waste collection, Segregation & Processing', icon: <FaRecycle className='text-4xl text-blue-400'/> },
  { label: 'Nal Jal Mitra for Drinking Water', icon: <FaWater className='text-4xl text-blue-400'/> },
  { label: 'Solid & Liquid Waste Treatment', icon: <FaLeaf className='text-4xl text-blue-400'/> },
  { label: 'Solar Plant & Water Pump EPC, O&M', icon: <FaSolarPanel className='text-4xl text-blue-400'/> },
  { label: 'WASH & Climate Change Compliant Institution', icon: <FaBuilding className='text-4xl text-blue-400'/> },
  { label: 'Pond Restoration & Rejuvenation', icon: <FaSeedling className='text-4xl text-blue-400'/> },
  { label: 'Essential Wash Services Bill Payment', icon: <FaMoneyBillWave className='text-4xl text-blue-400'/> },
  { label: 'Institutional Facility Management', icon: <FaUniversity className='text-4xl text-blue-400'/> }
];

const SignupStep3: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-white text-black">
      {/* Form Content */}
      <div className="w-fulls p-8 bg-white shadow-lg rounded-lg">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">My Expertise is...</h2>

        {/* Options as cards */}
        <div className="grid grid-cols-3 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.label)}
              className={`p-4 border rounded-lg flex items-center justify-center 
                ${selectedOption === option.label ? 'border-blue-600 bg-white' : 'border-gray-500'}`}
            >
              <span className="flex flex-col justify-center items-center space-x-12">
                {option.icon}
                <span className="font-semibold">{option.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-black" style={{ width: '24%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep3;

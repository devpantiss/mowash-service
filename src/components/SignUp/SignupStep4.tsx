import React, { useState } from 'react';
import { FaToolbox, FaTruck, FaRecycle, FaUserGraduate, FaWater, FaLeaf, FaSolarPanel, FaBuilding, FaSeedling, FaMoneyBillWave, FaUniversity } from 'react-icons/fa';
import { GrLocationPin } from 'react-icons/gr';
import { FaFileAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";


const options = [
  { label: 'Choose the Service', description: 'Select the service you would like to provide', icon: <FaToolbox className='text-4xl text-blue-400'/> },
  { label: 'Choose Your Location', description: 'Tell us About the Location You currently reside in', icon: <GrLocationPin className='text-4xl text-blue-400'/> },
  { label: 'Provide Us Your Details', description: 'Fill out the form with some Basic Information about yourself', icon: <FaFileAlt className='text-4xl text-blue-400'/> },
  { label: "Let's verify your credentials", description: 'Let us know about your certifications or any training you have undergone', icon: <FaUserGraduate className='text-4xl text-blue-400'/> },
  { label: "Congrats, You're a now a member of the MoWash Community", description: 'Lets get you a fair price for your skills', icon: <RiTeamFill className='text-4xl text-blue-400'/> },
];

const SignupStep4: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-[80vh]">
      {/* Left Side */}
      <div className="w-1/2 flex items-center justify-center bg-white text-black p-8">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold">It's easy to get started as an <span className='text-blue-600'>MWC Partner</span></h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-[white] text-black flex flex-col items-center justify-between p-8">
        {/* Steps */}
        <div className="space-y-8">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-200"
              onClick={() => handleOptionClick(option.label)}
            >
              <div className="flex-shrink-0">{option.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{option.label}</h3>
                <p className="text-gray-800">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      {/* <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-black" style={{ width: '24%' }}></div>
      </div> */}
    </div>
  );
};

export default SignupStep4;

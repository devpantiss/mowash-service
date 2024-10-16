import React, { useState } from 'react';
import { FaToolbox, FaUserGraduate } from 'react-icons/fa';
import { GrLocationPin } from 'react-icons/gr';
import { FaFileAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";


const options = [
  { label: 'Choose the Service', description: 'Select the service you would like to provide', icon: <FaToolbox className='lg:text-6xl text-5xl text-blue-400'/> },
  { label: 'Choose Your Location', description: 'Tell us About the Location You currently reside in', icon: <GrLocationPin className='lg:text-6xl text-5xl text-blue-400'/> },
  { label: 'Provide Us Your Details', description: 'Fill out the form with some Basic Information about yourself', icon: <FaFileAlt className='lg:text-6xl text-5xl text-blue-400'/> },
  { label: "Let's verify your credentials", description: 'Let us know about your certifications or any training you have undergone', icon: <FaUserGraduate className='lg:text-6xl text-5xl text-blue-400'/> },
  { label: "Congrats, You're a now a member of the MoWash Community", description: 'Lets get you a fair price for your skills', icon: <RiTeamFill className='lg:text-6xl text-5xl text-blue-400'/> },
];

const SignupStep4: React.FC = () => {
  const [_, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:h-[90vh] h-[100vh]">
      {/* Left Side */}
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-transparent text-black p-8">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-white">It&apos;s easy to get started as an <span className='text-white'>MWC Partner</span></h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 w-full bg-transparent ring-2 my-4 ring-white rounded-md text-black flex flex-col items-center justify-center p-8">
        {/* Steps */}
        <div className="space-y-6">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200"
              onClick={() => handleOptionClick(option.label)}
            >
              <div className="flex-shrink-0">{option.icon}</div>
              <div>
                <h3 className="text-xl text-blue-400 font-bold">{option.label}</h3>
                <p className="text-white">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignupStep4;

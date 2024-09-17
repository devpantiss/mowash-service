import React, { useState } from 'react';
import { MdEngineering } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";



const SignupStep1: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-50">
      {/* Form Content */}
      <div className="w-full max-w-xl p-8 bg-white shadow-lg rounded-lg">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Are You a...</h2>

        {/* Options */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleOptionClick('MoWash Engineer')}
            className={`w-full p-4 border rounded-lg flex items-center justify-between 
              ${selectedOption === 'MoWash Engineer' ? 'border-black bg-gray-100' : 'border-gray-300'}`}
          >
            <span className="font-semibold">MoWash Engineer</span>
            <MdEngineering className="text-4xl text-blue-400"/>
          </button>

          <button
            onClick={() => handleOptionClick('MoWash Preneur')}
            className={`w-full p-4 border rounded-lg flex items-center justify-between 
              ${selectedOption === 'MoWash Preneur' ? 'border-black bg-gray-100' : 'border-gray-300'}`}
          >
            <span className="font-semibold">MoWash Preneur</span>
            <GrUserManager className="text-4xl text-blue-400"/>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-black" style={{ width: '8%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep1;

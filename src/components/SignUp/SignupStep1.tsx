import React, { useState } from 'react';
import { MdEngineering } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";



const SignupStep1: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-blue-600">
      {/* Form Content */}
      <div className="w-full max-w-xl p-8 bg-white shadow-lg rounded-lg">
        {/* Heading */}
        <h2 className="text-3xl text-blue-600 font-bold text-left mb-6">Hey, I&apos;m a...</h2>

        {/* Options */}
        <div className="flex space-x-4">
          <button
            onClick={() => handleOptionClick('MoWash Engineer')}
            className={`w-full p-4 border rounded-lg flex-col-reverse flex items-center justify-center 
              ${selectedOption === 'MoWash Engineer' ? 'border-blue-600 bg-blue-100' : 'border-gray-300'}`}
          >
            <span className="font-semibold">Mo WashEngineer</span>
            <MdEngineering className="text-5xl text-blue-400"/>
          </button>

          <button
            onClick={() => handleOptionClick('MoWash Preneur')}
            className={`w-full p-4 border rounded-lg flex-col-reverse flex items-center justify-center 
              ${selectedOption === 'MoWash Preneur' ? 'border-blue-600 bg-blue-100' : 'border-gray-300'}`}
          >
            <span className="font-semibold">Mo WashPreneur</span>
            <GrUserManager className="text-5xl text-blue-400"/>
          </button>
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

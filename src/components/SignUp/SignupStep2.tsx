import React, { useState } from 'react';
import GroupIcon from '@mui/icons-material/Group'; // Group icon for Nano Contractor
import PersonIcon from '@mui/icons-material/Person'; // Single person icon for MWC Partner

const SignupStep2: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-50">
      {/* Form Content */}
      <div className="w-full max-w-xl p-8 bg-white shadow-lg rounded-lg">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Are you a....</h2>

        {/* Options */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleOptionClick('Nano Contractor')}
            className={`w-full p-4 border rounded-lg flex items-center justify-between 
              ${selectedOption === 'Nano Contractor' ? 'border-black bg-gray-100' : 'border-gray-300'}`}
          >
            <span className="font-semibold">Nano Contractor</span>
            <GroupIcon className="text-4xl text-blue-400" />
          </button>

          <button
            onClick={() => handleOptionClick('MWC Partner')}
            className={`w-full p-4 border rounded-lg flex items-center justify-between 
              ${selectedOption === 'MWC Partner' ? 'border-black bg-gray-100' : 'border-gray-300'}`}
          >
            <span className="font-semibold">MWC Partner</span>
            <PersonIcon className="text-4xl text-blue-400" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-black" style={{ width: '16%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep2;

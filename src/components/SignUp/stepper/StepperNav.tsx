import React from 'react';

interface StepperNavProps {
  currentStep: number;
  totalSteps: number;
  handlePrev: () => void;
  handleNext: () => void;
}

const StepperNav: React.FC<StepperNavProps> = ({
  currentStep,
  totalSteps,
  handlePrev,
  handleNext,
}) => {
  return (
    <div className="flex bg-transparent py-4 justify-between items-center gap-x-2">
      <button
        type="button"
        className={`px-6 py-2 mb-2 flex justify-center items-center gap-x-4 bg-white text-blue-600 ring-2 ring-black rounded-lg ${
          currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handlePrev}
        disabled={currentStep === 0}
      >
        <svg
          className="shrink-0 size-6"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Back
      </button>

      <button
        type="button"
        className={`px-6 py-2 mb-2 flex justify-center items-center gap-x-4 bg-white text-blue-600 ring-2 ring-black rounded-lg ${
          currentStep === totalSteps - 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleNext}
      >
        Next
        <svg
          className="shrink-0 size-6"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </div>
  );
};

export default StepperNav;

import React, { useState } from "react";
import SignupStep1 from "@/components/SignUp/SignupStep1";
import SignupStep2 from "@/components/SignUp/SignupStep2";
import SignupStep3 from "@/components/SignUp/SignupStep3";
import Image from "next/image";
import SignupStep4 from "@/components/SignUp/SignupStep4";
import SignupStep5 from "@/components/SignUp/SignupStep5";
import SignupStep6 from "@/components/SignUp/SignupStep6";
import SignupStep7 from "@/components/SignUp/SignupStep7";
import SignupStep8 from "@/components/SignUp/SignupStep8";
import SignupStep9 from "@/components/SignUp/SignupStep9";
import SignupStep10 from "@/components/SignUp/SignupStep10";
import SignupStep0 from "@/components/SignUp/SignupStep0";
import SignupStep11 from "@/components/SignUp/SignupStep11";
import SignupStep13 from "@/components/SignUp/SignupStep13";
import SignupStep12 from "@/components/SignUp/SignupStep12";




const Signup: React.FC = () => {
 

  const [step, setStep] = useState<number>(0);
  

  const handleNext = () => {
    if (step === 0) {
      setStep((prevStep) => Math.min(prevStep + 1, 13));
    } else if (step === 1) {
      setStep((prevStep) => Math.min(prevStep + 1, 13));
    } else if (step === 2) {
      setStep((prevStep) => Math.min(prevStep + 1, 13));
    } else if (step === 3) {
      setStep((prevStep) => Math.min(prevStep + 1, 13));
    } else if (step === 4) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 5) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 6) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 7) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 8) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 9) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 10) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 11) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 12) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    } else if (step === 13) {
      setStep((prevStep) => Math.min(prevStep + 1, 13))
    }
  };

  const handlePrev = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-blue-800">
        <div className="w-full p-4 rounded-lg shadow sm:p-6 md:px-8 md:py-6">
          <div data-hs-stepper="">
            <div className="h-24 bg-white px-8 flex justify-start items-center py-2 rounded-md">
              <Image src="https://www.mowash.in/Images/mo-wash-logo.svg" className="h-full " width={150} height={150} alt="logo" />
            </div>

            <div className="mt-5 sm:mt-8">
              {step === 0 && (
                <SignupStep0 />
              )}
              {step === 1 && (
                <SignupStep1 />
              )}
              {step === 2 && (
                <SignupStep2 />
              )}
              {step === 3 && (
                <SignupStep3 />
              )}
              {step === 4 && (
                <SignupStep4 />
              )}
              {step === 5 && (
                <SignupStep5 />
              )}
              {step === 6 && (
                <SignupStep6 />
              )}
              {step === 7 && (
                <SignupStep7 />
              )}
              {step === 8 && (
                <SignupStep8 />
              )}
              {step === 9 && (
                <SignupStep9 />
              )}
              {step === 10 && (
                <SignupStep11 />
              )}
              {step === 11 && (
                <SignupStep12 />
              )}
              {step === 12 && (
                <SignupStep13 />
              )}
              {step === 13 && (
                <SignupStep10 />
              )}


              <div className="flex bg-transparent py-4 justify-between items-center gap-x-2">
                <button
                  type="button"
                  className="px-6 py-2 mb-2 flex bg-white text-blue-600 ring-2 ring-black rounded-lg"
                  onClick={handlePrev}
                  disabled={step === 0}
                >
                  <svg
                    className="shrink-0 size-4"
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
                  className="px-6 py-2 mb-2 flex bg-white text-blue-600 ring-2 ring-black rounded-lg"
                  onClick={handleNext}
                >
                  Next
                  <svg
                    className="shrink-0 size-4"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

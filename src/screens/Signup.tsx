import { useState } from "react";
import Image from "next/image";
import StepNav from "@/components/SignUp/stepper/StepperNav";
import steps from "@/components/SignUp/stepper/Steps";
import Link from "next/link";

const Signup: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const totalSteps = steps?.length;

  const handleNext = () => {
    if (step === 7) {
      setStep(9);
    } else if (step === 8) {
      setStep(8);
    }else if (step === 10) {
      setStep(10);
    }else if (step === 9) {
      setStep(10);
    } else if (step < totalSteps - 1) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (step === 9) {
      setStep(7);
    } else if (step === 11) {
      setStep(7);
    } else if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  // Function to go to a specific step
  const goToStep = (stepIndex: number) => {
    setStep(stepIndex);
  };

  // Dynamically render the current step
  const StepComponent = steps[step];

  return (
    <div className="">
      <div className="h-full flex items-center justify-center">
        <div
          className="bg-red-600 w-full max-w-lg px-4 py-2 rounded-lg shadow-md"
          style={{
            background: "linear-gradient(to bottom, black, #001f3f)",
          }}
        >
          {/* Conditionally render header for all steps except SignupStep0 */}
          <div className="px-8 w-full z-50 bg-white flex justify-between items-center py-2 rounded-md">
            <div>
              <Link href="/">
                <Image
                  src="https://www.mowash.in/Images/mo-wash-logo.svg"
                  className="h-full py-4"
                  width={150}
                  height={150}
                  alt="logo"
                />
              </Link>
            </div>
            {step !== 0 && (
              <div>
                {/* Step navigation */}
                <StepNav
                  currentStep={step}
                  totalSteps={totalSteps}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                />
              </div>
            )}
          </div>

          <div className="">
            {/* Render the current step */}
            <StepComponent goToStep={goToStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

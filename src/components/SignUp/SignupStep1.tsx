import React, { useState, useRef } from "react";
import { MdEngineering } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import style from "@/components/common/input/input.module.css"; // Import your custom styles

const SignupStep1: React.FC = () => {
  // Form state variables
  const [yearsOfExperience, setYearsOfExperience] = useState<string>("");
  const [previousWork, setPreviousWork] = useState<string>("");
  const [currentIncome, setCurrentIncome] = useState<string>("");
  const [familyMembers, setFamilyMembers] = useState<string>("");

  // Error state variables for validation
  const [errors, setErrors] = useState<{
    yearsOfExperience?: string;
    previousWork?: string;
    currentIncome?: string;
    familyMembers?: string;
  }>({});

  const formRef = useRef<HTMLFormElement>(null);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form inputs
    const newErrors: typeof errors = {};

    if (!yearsOfExperience) {
      newErrors.yearsOfExperience = "Please select your years of experience.";
    }

    if (!previousWork.trim()) {
      newErrors.previousWork = "Please provide your previous employment.";
    }

    if (!currentIncome) {
      newErrors.currentIncome =
        "Please select your current monthly income range.";
    }

    if (!familyMembers) {
      newErrors.familyMembers = "Please select the number of family members.";
    }

    setErrors(newErrors);

    // If no errors, proceed with form submission (e.g., API call)
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      // Reset form
      setYearsOfExperience("");
      setPreviousWork("");
      setCurrentIncome("");
      setFamilyMembers("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-4">
      {/* Title */}
      <h1 className="text-white text-5xl font-bold mb-4 text-center">
        Experience Information
      </h1>
      <div className="w-full max-w-7xl bg-transparent ring-2 ring-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Left Section: Description */}
        <div
          className="w-full lg:w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726742454/jay-bhadreshwara-lux0psvZGLU-unsplash_whv55p.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 p-8 flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-white mb-6">
              At MoWash, we value your experience and dedication. Fill out this
              form to help us understand your background and how you can
              contribute to our mission.
            </p>
          </div>
        </div>

        {/* Right Section: Experience Form */}
        <div className="w-full lg:w-1/2 p-8">
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            {/* Previous Employment */}
            <div className={style.inputContainer}>
              <input
                placeholder="Previous Employment"
                className={style.inputField}
                type="text"
                value={previousWork}
                onChange={(e) => setPreviousWork(e.target.value)}
              />
              <label className={style.inputLabel}>Previous Employment</label>
              <span className={style.inputHighlight}></span>
              {errors.previousWork && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.previousWork}
                </p>
              )}
            </div>

            {/* Years of Experience */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">
                Years of Experience<span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col space-y-2">
                {["0-1", "1-3", "More than 3", "No experience"].map(
                  (option) => (
                    <label key={option} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="yearsOfExperience"
                        value={option}
                        checked={yearsOfExperience === option}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-white">{option}</span>
                    </label>
                  )
                )}
              </div>
              {errors.yearsOfExperience && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.yearsOfExperience}
                </p>
              )}
            </div>

            {/* Current Monthly Income */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">
                Current Monthly Income<span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col space-y-2">
                {[
                  "Less than ₹20,000",
                  "₹20,000 - ₹40,000",
                  "₹40,000 - ₹60,000",
                  "More than ₹60,000",
                ].map((range) => (
                  <label key={range} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="currentIncome"
                      value={range}
                      checked={currentIncome === range}
                      onChange={(e) => setCurrentIncome(e.target.value)}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-white">{range}</span>
                  </label>
                ))}
              </div>
              {errors.currentIncome && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentIncome}
                </p>
              )}
            </div>

            {/* Number of Family Members */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">
                Number of Family Members<span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col space-y-2">
                {[
                  "Less than 3 members",
                  "3-8 members",
                  "More than 8 members",
                ].map((range) => (
                  <label key={range} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="familyMembers"
                      value={range}
                      checked={familyMembers === range}
                      onChange={(e) => setFamilyMembers(e.target.value)}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-white">{range}</span>
                  </label>
                ))}
              </div>
              {errors.familyMembers && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.familyMembers}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-2 w-full bg-white text-blue-600 ring ring-blue-600 rounded-lg hover:bg-gray-100 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupStep1;

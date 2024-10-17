import React, { useState, useRef } from "react";
import { MdEngineering, MdCalendarToday } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaRupeeSign, FaUsers } from "react-icons/fa";
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
      <div className="w-full bg-transparent ring-2 ring-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Left Section: Description */}
        <div
          className="w-full lg:w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729141075/contru77_ynl2ll.jpg')",
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
                placeholder="Previous Employer"
                className={style.inputField}
                type="text"
                value={previousWork}
                onChange={(e) => setPreviousWork(e.target.value)}
              />
              <label className={style.inputLabel}>Previous Employer</label>
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
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "0-1", value: "0-1", icon: <MdCalendarToday /> },
                  { label: "1-3", value: "1-3", icon: <MdCalendarToday /> },
                  {
                    label: "More than 3",
                    value: "More than 3",
                    icon: <MdCalendarToday />,
                  },
                  {
                    label: "No experience",
                    value: "No experience",
                    icon: <MdCalendarToday />,
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    className={`p-4 rounded-lg border ${
                      yearsOfExperience === option.value
                        ? "bg-blue-500 text-white"
                        : "bg-transparent ring-2 ring-white text-white"
                    } cursor-pointer flex items-center space-x-2`}
                    onClick={() => setYearsOfExperience(option.value)}
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </div>
                ))}
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
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Less than ₹20,000",
                    value: "Less than ₹20,000",
                    icon: <FaRupeeSign />,
                  },
                  {
                    label: "₹20,000 - ₹40,000",
                    value: "₹20,000 - ₹40,000",
                    icon: <FaRupeeSign />,
                  },
                  {
                    label: "₹40,000 - ₹60,000",
                    value: "₹40,000 - ₹60,000",
                    icon: <FaRupeeSign />,
                  },
                  {
                    label: "More than ₹60,000",
                    value: "More than ₹60,000",
                    icon: <FaRupeeSign />,
                  },
                ].map((range) => (
                  <div
                    key={range.value}
                    className={`p-4 rounded-lg border ${
                      currentIncome === range.value
                        ? "bg-blue-500 text-white"
                        : "bg-transparent ring-2 ring-white text-white"
                    } cursor-pointer flex items-center space-x-2`}
                    onClick={() => setCurrentIncome(range.value)}
                  >
                    {range.icon}
                    <span>{range.label}</span>
                  </div>
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
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Less than 3 members",
                    value: "Less than 3 members",
                    icon: <FaUsers />,
                  },
                  {
                    label: "3-8 members",
                    value: "3-8 members",
                    icon: <FaUsers />,
                  },
                  {
                    label: "More than 8 members",
                    value: "More than 8 members",
                    icon: <FaUsers />,
                  },
                ].map((range) => (
                  <div
                    key={range.value}
                    className={`p-4 rounded-lg border ${
                      familyMembers === range.value
                        ? "bg-blue-500 text-white"
                        : "bg-transparent ring-2 ring-white text-white"
                    } cursor-pointer flex items-center space-x-2`}
                    onClick={() => setFamilyMembers(range.value)}
                  >
                    {range.icon}
                    <span>{range.label}</span>
                  </div>
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

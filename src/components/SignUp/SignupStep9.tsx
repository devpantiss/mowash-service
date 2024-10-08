import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaMale,
  FaFemale,
  FaGenderless,
  FaHandHoldingUsd,
  FaHardHat,
  FaHandPaper,
  FaVest,
  FaShoePrints,
  FaGlasses,
  FaHeadphones,
  FaShieldAlt,
} from "react-icons/fa";

interface FormData {
  safetyKitPhoto: File | null;
  selectedComponents: string[];
  profilePicture: File | null;
}

// Define the safety gear components with corresponding icons and colors
const safetyGearComponents = [
  {
    name: "Helmet",
    icon: FaHardHat,
    color: "#FFD700", // Gold
  },
  {
    name: "Gloves",
    icon: FaHandPaper,
    color: "#f4f72d", 
  },
  {
    name: "Reflective Vest",
    icon: FaVest,
    color: "#FFA500", // Orange
  },
  {
    name: "Boots",
    icon: FaShoePrints,
    color: "#8B4513", // Saddle Brown
  },
  {
    name: "Goggles",
    icon: FaGlasses,
    color: "#32CD32", // Lime Green
  },
  {
    name: "Ear Protection",
    icon: FaHeadphones,
    color: "#808080", // Gray
  },
  {
    name: "Face Shield",
    icon: FaShieldAlt,
    color: "#00CED1", // Dark Turquoise
  },
];

interface SignupStep9Props {
  goToStep: (stepIndex: number) => void; // Pass a function to change the step
}

const SignupStep9: React.FC<SignupStep9Props> = ({ goToStep }) => {
  const [formData, setFormData] = useState<FormData>({
    safetyKitPhoto: null,
    selectedComponents: [],
    profilePicture: null,
  });

  const [profilePreview, setProfilePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);
      setProfilePreview(previewUrl);
      setFormData({
        ...formData,
        [name]: file,
      });
    }
  };

  const handleRemoveFile = (type: "aadharCard" | "profilePicture") => {
    if (type === "profilePicture") {
      setProfilePreview(null);
      setFormData({
        ...formData,
        profilePicture: null,
      });
    }
  };

  const handleComponentSelect = (component: string) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedComponents: prevData.selectedComponents.includes(component)
        ? prevData.selectedComponents.filter((item) => item !== component)
        : [...prevData.selectedComponents, component],
    }));
  };

  const handleSkip = () => {
    goToStep(6);
  };

  const handleHelpMeDress = () => {
    // Show a message that the team will get in touch
    alert("Our team will get in touch with you shortly.");
  };

  return (
    <div className="flex flex-col lg:h-[85vh] pb-4 items-center justify-start mt-20 bg-transparent">
      <h2 className="text-3xl text-white font-bold text-left mb-6">
        Upload Your Photo in Safety Kit
      </h2>

      <div className="flex flex-col mt-8 lg:flex-row w-full max-w-8xl gap-x-12">
        <div className="lg:w-2/5 w-full flex flex-col justify-center items-center mb-8">
          <img
            className="max-w-full h-auto object-contain"
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1728304739/vecteezy_personal-protective-equipment-illustration_359530-removebg-preview_uo7nmg.png"
            alt="Safety Gear Illustration"
          />
          <img
            className="w-[250px] h-auto object-cover animate-vibration"
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1728304563/Screenshot_2024-10-07_at_6.05.10_PM_hpq5n3.png"
          />
        </div>
        <div className="lg:w-3/5 w-full">
          <div className="p-6 ring-white ring-2 rounded-md">
            <div className="flex flex-col-reverse lg:flex-row gap-8 w-full">
              {/* Photo Upload */}
              <div className="">
                <label className="block text-sm text-white font-medium mb-2">
                  Profile Picture
                </label>
                {!profilePreview ? (
                  <label
                    htmlFor="profilePicture"
                    className="labelFile flex flex-col justify-center w-[250px] h-[190px] items-center p-5 border-dotted border-2 text-white border-white"
                  >
                    <span>
                      <svg
                        viewBox="0 0 184.69 184.69"
                        width="60px"
                        height="60px"
                      >
                        <g>
                          <g>
                            <g>
                              <path
                                d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
                          C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
                          C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
                          c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
                          c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
                          c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
                          c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391
                          v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
                                style={{ fill: "white" }}
                              ></path>
                            </g>
                            <g>
                              <path
                                d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
                          c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
                          L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
                          c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
                          C104.91,91.608,107.183,91.608,108.586,90.201z"
                                style={{ fill: "white" }}
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <p className="text-center">
                      drag and drop your file here or click to select a file!
                    </p>
                    <input
                      className="input hidden"
                      type="file"
                      name="profilePicture"
                      id="profilePicture"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </label>
                ) : (
                  <div className="relative">
                    <img
                      src={profilePreview}
                      alt="Profile Preview"
                      className="mt-4 w-full h-44 rounded-lg object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveFile("profilePicture")}
                      className="absolute top-0 right-0 bg-gray-800 text-white p-1 rounded-full"
                    >
                      <AiOutlineClose size={18} />
                    </button>
                  </div>
                )}
              </div>

              {/* Video Tutorial - replaced with iframe */}
              <div className="flex-1">
                <label className="block text-white text-sm font-medium mb-2">
                  How to Wear Safety Gear
                </label>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/YJpgU4oJf-s?si=Y6H6CGiYskWZLAKr"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-64 rounded-lg border"
                />
              </div>
            </div>

            {/* Safety Gear Components Selection */}
            <div className="mt-8 w-full max-w-5xl">
              <h3 className="text-xl text-white font-semibold mb-4">
                Which Safety Gear Components Do You Have?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {safetyGearComponents.map((component) => {
                  const IconComponent = component.icon;
                  const isSelected = formData.selectedComponents.includes(
                    component.name
                  );

                  return (
                    <div
                      key={component.name}
                      onClick={() => handleComponentSelect(component.name)}
                      className={`cursor-pointer p-4 border rounded-lg flex justify-between items-center text-center transition ${
                        isSelected
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
                      }`}
                    >
                      <div className="text-4xl mb-2">
                        <IconComponent color={component.color} />
                      </div>
                      <div className="text-xl">{component.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 w-full max-w-5xl flex justify-between">
              <button
                onClick={handleSkip}
                className="px-6 py-2 bg-white text-blue-600 ring ring-blue-600 rounded-lg hover:bg-gray-100 transition"
              >
                Skip
              </button>
              <button
                onClick={handleHelpMeDress}
                className="px-6 py-2 bg-white text-blue-600 rounded-lg ring ring-blue-600 hover:bg-gray-100 transition"
              >
                Help Me Dress
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupStep9;

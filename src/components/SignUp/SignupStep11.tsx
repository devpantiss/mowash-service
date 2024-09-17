// components/SignupStep11.tsx

import { useState } from "react";
import { FaTimes } from "react-icons/fa";

type Section = "healthCard" | "pension" | "insurance" | "needs";

const SignupStep11: React.FC = () => {
  const [wantsWelfare, setWantsWelfare] = useState<boolean | null>(null);
  const [selectedOptions, setSelectedOptions] = useState({
    healthCard: "",
    pension: "",
    insurance: "",
    needs: "",
  });

  // Define the image uploads with strict section keys
  const [uploadedImages, setUploadedImages] = useState<{
    healthCardImage: File | null;
    pensionImage: File | null;
    insuranceImage: File | null;
    needsImage: File | null;
  }>({
    healthCardImage: null,
    pensionImage: null,
    insuranceImage: null,
    needsImage: null,
  });

  const handleSelection = (section: Section, option: string) => {
    setSelectedOptions({ ...selectedOptions, [section]: option });
  };

  const handleImageUpload = (section: Section, file: File) => {
    setUploadedImages((prev) => ({ ...prev, [`${section}Image`]: file }));
  };

  const removeImage = (section: Section) => {
    setUploadedImages((prev) => ({ ...prev, [`${section}Image`]: null }));
  };

  const renderImageUpload = (section: Section) => (
    <div className="mt-4">
      <label className="block text-gray-700 font-medium">
        Upload Document (Optional)
      </label>
      {!uploadedImages[`${section}Image`] ? (
        <input
          type="file"
          onChange={(e) =>
            e.target.files && handleImageUpload(section, e.target.files[0])
          }
          className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />
      ) : (
        <div className="flex items-center mt-2">
          <span className="text-sm text-gray-600">
            {uploadedImages[`${section}Image`]?.name}
          </span>
          <button
            type="button"
            className="ml-2 text-red-500"
            onClick={() => removeImage(section)}
          >
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100">
      {wantsWelfare === null ? (
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">
            Do you want to avail welfare schemes?
          </h1>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setWantsWelfare(true)}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Yes
            </button>
            <button
              onClick={() => setWantsWelfare(false)}
              className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
            >
              No
            </button>
          </div>
        </div>
      ) : wantsWelfare ? (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          {/* Section 1: Health Card */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Health Card</h2>
            <div className="mt-2 flex space-x-4">
              {["BSKY", "Ayushman Bharat", "ESIC", "Not Available"].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => handleSelection("healthCard", option)}
                    className={`${
                      selectedOptions.healthCard === option
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    } px-4 py-2 rounded-lg hover:bg-blue-400`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
            {selectedOptions.healthCard && renderImageUpload("healthCard")}
          </div>

          {/* Section 2: ATAL Pension */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">ATAL Pension</h2>
            <div className="mt-2 flex space-x-4">
              {["NPS", "EPF"].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelection("pension", option)}
                  className={`${
                    selectedOptions.pension === option
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } px-4 py-2 rounded-lg hover:bg-blue-400`}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedOptions.pension && renderImageUpload("pension")}
          </div>

          {/* Section 3: Accidental Insurance */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Accidental Insurance
            </h2>
            <div className="mt-2 flex space-x-4">
              {["PMSBY", "PMJJBY"].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelection("insurance", option)}
                  className={`${
                    selectedOptions.insurance === option
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } px-4 py-2 rounded-lg hover:bg-blue-400`}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedOptions.insurance && renderImageUpload("insurance")}
          </div>

          {/* Section 4: Let's Get Your Needs Met */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Let's Get Your Needs Met
            </h2>
            <div className="mt-2 flex space-x-4">
              {[
                "1 Nation 1 Ration Card",
                "LPG",
                "Not Available",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelection("needs", option)}
                  className={`${
                    selectedOptions.needs === option
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } px-4 py-2 rounded-lg hover:bg-blue-400`}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedOptions.needs && renderImageUpload("needs")}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
              onClick={() => alert("Skipped to next step!")}
            >
              Skip
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg">
          You have opted not to avail any welfare schemes.
        </div>
      )}
      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-black" style={{ width: '80%' }}></div>
      </div>
    </div>
  );
};

export default SignupStep11;

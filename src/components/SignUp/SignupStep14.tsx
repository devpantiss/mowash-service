import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import dynamic from "next/dynamic";
import styles from "../../components/common/input/input.module.css";
import animation from "../../components/assets/experience.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface SignupStep14Props {
  goToStep: (stepIndex: number) => void;
}

interface FormData {
  panCard: string;
  panImage: File | null;
  year_of_experience: string;
  current_monthly_income: string;
  number_of_family_members: string;
}

const SignupStep14: React.FC<SignupStep14Props> = ({ goToStep }) => {
  const [formData, setFormData] = useState<FormData>({
    panCard: "",
    panImage: null,
    year_of_experience: "",
    current_monthly_income: "",
    number_of_family_members: "",
  });

  const [panPreview, setPanPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      setPanPreview(URL.createObjectURL(file));
      setFormData((prev) => ({ ...prev, panImage: file }));
    }
  };

  const handleRemoveFile = () => {
    setPanPreview(null);
    setFormData((prev) => ({ ...prev, panImage: null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can validate the form if needed
    console.log("Form Submitted:", formData);
    goToStep(7);
  };

  return (
    <div className="flex justify-center items-center h-full lg:h-[100vh]">
      <div className="flex flex-col w-full items-center z-50 space-y-7 max-w-6xl md:h-full mb-10 rounded-lg mt-12 justify-center">
        <h2 className="text-5xl font-bold lg:text-center text-left text-white my-8">
          Professional History
        </h2>
        <div className="flex w-full max-w-8xl">
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-transparent p-4 ring-2 ring-white flex flex-col justify-center items-center rounded-tl-md rounded-bl-md space-y-6"
            >
              {/* PAN No and PAN Image Upload */}
              <div className="w-full flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3 w-full">
                  <div className={styles.inputContainer}>
                    <input
                      placeholder="PAN No."
                      className={styles.inputField}
                      type="text"
                      name="panCard"
                      value={formData.panCard}
                      onChange={handleInputChange}
                      required
                    />
                    <label className={styles.inputLabel}>PAN No.</label>
                    <span className={styles.inputHighlight}></span>
                  </div>
                </div>

                <div className="lg:w-1/3 w-full">
                  <label className="block text-sm text-white font-medium mb-2">
                    PAN Card Image
                  </label>
                  {!panPreview ? (
                    <label
                      htmlFor="panImage"
                      className="flex rounded-md flex-col justify-center w-full h-[190px] items-center p-5 border-dotted border-2 text-white border-white cursor-pointer"
                    >
                      <p className="text-center">
                        Drag and drop your file here or click to select a file
                      </p>
                      <input
                        className="hidden"
                        type="file"
                        name="panImage"
                        id="panImage"
                        onChange={handleFileChange}
                        accept="image/*"
                        required
                      />
                    </label>
                  ) : (
                    <div className="relative">
                      <img
                        src={panPreview}
                        alt="PAN Preview"
                        className="mt-4 w-full h-44 rounded object-cover"
                      />
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="absolute top-0 right-0 bg-gray-800 text-white p-1 rounded-full"
                      >
                        <AiOutlineClose size={18} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Fields */}
              <div className="w-full p-6">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center lg:gap-x-10 gap-y-8">
                  {/* Years of Experience */}
                  <div className="w-full">
                    <label className="block text-white font-semibold mb-2">
                      Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="year_of_experience"
                      value={formData.year_of_experience}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-transparent text-white rounded-md border border-white cursor-pointer"
                      required
                    >
                      <option value="" disabled>
                        Select Years of Experience
                      </option>
                      <option value="0-1">0-1</option>
                      <option value="1-3">1-3</option>
                      <option value="More than 3">More than 3</option>
                      <option value="No experience">No experience</option>
                    </select>
                  </div>

                  {/* Current Monthly Income */}
                  <div className="w-full">
                    <label className="block text-white font-semibold mb-2">
                      Current Monthly Income <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="current_monthly_income"
                      value={formData.current_monthly_income}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-transparent text-white rounded-md border border-white cursor-pointer"
                      required
                    >
                      <option value="" disabled>
                        Select Monthly Income
                      </option>
                      <option value="Less than ₹20,000">Less than ₹20,000</option>
                      <option value="₹20,000 - ₹40,000">₹20,000 - ₹40,000</option>
                      <option value="₹40,000 - ₹60,000">₹40,000 - ₹60,000</option>
                      <option value="More than ₹60,000">More than ₹60,000</option>
                    </select>
                  </div>

                  {/* Number of Family Members */}
                  <div className="w-full">
                    <label className="block text-white font-semibold mb-2">
                      Number of Family Members <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="number_of_family_members"
                      value={formData.number_of_family_members}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-transparent text-white rounded-md border border-white cursor-pointer"
                      required
                    >
                      <option value="" disabled>
                        Select Number of Family Members
                      </option>
                      <option value="Less than 3 members">
                        Less than 3 members
                      </option>
                      <option value="3-8 members">3-8 members</option>
                      <option value="More than 8 members">
                        More than 8 members
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {error && (
                <div className="w-full text-red-500 text-center">{error}</div>
              )}

              <button
                type="submit"
                className="px-6 py-2 w-full bg-white hover:bg-gray-100 text-blue-600 ring ring-blue-600 rounded-lg transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full relative hidden lg:block lg:w-1/3">
        <Lottie
          animationData={animation}
          loop={true}
          style={{ width: "100%", height: "600px" }}
          className="lg:fixed top-[30%] z-10 -right-[35%]"
        />
      </div>
    </div>
  );
};

export default SignupStep14;

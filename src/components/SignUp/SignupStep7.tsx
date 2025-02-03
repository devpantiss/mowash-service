import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Close icon from react-icons
import DatePicker from "react-datepicker"; // Import the date picker
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles
import styles from "@/components/common/input/input.module.css"; // Import the styles from module.css
import animation from "@/components/assets/info.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import { FaCalendarAlt, FaIdCard } from "react-icons/fa";

interface FormData {
  name: string;
  dateOfBirth: Date | null;
  gender: string;
  socialStatus: string;
  economicStatus: string;
  aadharNumber: string;
  aadharCard: File | null;
  profilePicture: File | null;
  panCard: File | null;
  panNumber: string;
}

const SignupStep7: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dateOfBirth: null,
    gender: "",
    socialStatus: "",
    economicStatus: "",
    aadharNumber: "",
    aadharCard: null,
    profilePicture: null,
    panCard: null,
    panNumber: "",
  });

  const [aadharPreview, setAadharPreview] = useState<string | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [panPreview, setPanPreview] = useState<string | null>(null);
  const [isDeclarationChecked, setIsDeclarationChecked] = useState(false);

  const [yearsOfExperience2, setYearsOfExperience2] = useState<string>("");
  const [previousWork2, setPreviousWork2] = useState<string>("");
  const [currentIncome2, setCurrentIncome2] = useState<string>("");
  const [familyMembers2, setFamilyMembers2] = useState<string>("");

  // Error state variables for validation
  const [errors, setErrors] = useState<{
    yearsOfExperience2?: string;
    previousWork2?: string;
    currentIncome2?: string;
    familyMembers2?: string;
  }>({});

  const formRef2 = useRef<HTMLFormElement>(null);

  // Function to handle form submission for the secondary part (if needed)
  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form inputs
    const newErrors: typeof errors = {};

    if (!yearsOfExperience2) {
      newErrors.yearsOfExperience2 = "Please select your years of experience.";
    }

    if (!previousWork2.trim()) {
      newErrors.previousWork2 = "Please provide your previous employment.";
    }

    if (!currentIncome2) {
      newErrors.currentIncome2 =
        "Please select your current monthly income range.";
    }

    if (!familyMembers2) {
      newErrors.familyMembers2 = "Please select the number of family members.";
    }

    setErrors(newErrors);

    // If no errors, proceed with form submission (e.g., API call)
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      // Reset form
      setYearsOfExperience2("");
      setPreviousWork2("");
      setCurrentIncome2("");
      setFamilyMembers2("");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: date,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);

      if (name === "aadharCard") {
        setAadharPreview(previewUrl);
      } else if (name === "profilePicture") {
        setProfilePreview(previewUrl);
      } else if (name === "panCard") {
        setPanPreview(previewUrl);
      }

      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
    }
  };

  const handleRemoveFile = (
    type: "aadharCard" | "profilePicture" | "panCard"
  ) => {
    if (type === "aadharCard") {
      setAadharPreview(null);
      setFormData((prev) => ({ ...prev, aadharCard: null }));
    } else if (type === "profilePicture") {
      setProfilePreview(null);
      setFormData((prev) => ({ ...prev, profilePicture: null }));
    } else if (type === "panCard") {
      setPanPreview(null);
      setFormData((prev) => ({ ...prev, panCard: null }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if declaration is checked
    if (!isDeclarationChecked) {
      alert("Please agree to the self-declaration before submitting the form.");
      return;
    }

    console.log("Form submitted", formData);
  };

  // Calculate age from date of birth
  const calculateAge = (dob: Date | null) => {
    if (!dob) return null;
    const diff = new Date().getTime() - dob.getTime();
    const age = new Date(diff).getUTCFullYear() - 1970; // Calculate age
    return age;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-full items-center space-y-7 max-w-6xl md:h-full mb-10 z-50 rounded-lg mt-12 justify-center">
        <h2 className="text-5xl font-bold lg:text-center text-left text-white my-8">
          Basic Information Form
        </h2>
        <div className="flex w-full max-w-8xl">
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-transparent p-4 ring-2 ring-white flex flex-col justify-center items-center rounded-tl-md rounded-bl-md space-y-6"
            >
              {/* Dropdowns for Social, Economic, and Gender */}
              <div className="flex flex-col lg:flex-row gap-6 w-full">
                {/* Social Status Dropdown */}
                <div className="w-full">
                  <label className="block text-sm text-white font-medium mb-2">
                    Social Status
                  </label>
                  <select
                    name="socialStatus"
                    value={formData.socialStatus}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-transparent text-white rounded-md border border-white"
                    required
                  >
                    <option value="">Select Social Status</option>
                    <option value="Ultra Poor">Ultra Poor</option>
                    <option value="BPL">BPL</option>
                    <option value="APL">APL</option>
                  </select>
                </div>
                {/* Economic Status Dropdown */}
                <div className="w-full">
                  <label className="block text-sm text-white font-medium mb-2">
                    Economic Status
                  </label>
                  <select
                    name="economicStatus"
                    value={formData.economicStatus}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-transparent text-white rounded-md border border-white"
                    required
                  >
                    <option value="">Select Economic Status</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="OBC">OBC</option>
                  </select>
                </div>
                {/* Gender Dropdown */}
                <div className="w-full">
                  <label className="block text-sm text-white font-medium mb-2">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-transparent text-white rounded-md border border-white"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>

              {/* Aadhar Number, Date of Birth, and PAN Number */}
              <div className="flex flex-col w-full lg:flex-row mt-12 lg:gap-x-12">
                {/* Date of Birth */}
                <div
                  className={`${styles.inputContainer} lg:w-1/2 w-full mt-6 relative flex items-center`}
                >
                  <FaCalendarAlt className="text-gray-400" />
                  <DatePicker
                    selected={formData.dateOfBirth}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select your date of birth"
                    className={`${styles.inputField} pl-10 w-full`}
                    showYearDropdown
                    yearDropdownItemNumber={100}
                    scrollableYearDropdown
                    maxDate={new Date()}
                    required
                  />
                  <label className={styles.inputLabel}>Date of Birth</label>
                  <span className={styles.inputHighlight}></span>
                  {formData.dateOfBirth && (
                    <p className="mt-2 text-white">
                      Your Age: {calculateAge(formData.dateOfBirth)}
                    </p>
                  )}
                </div>

                {/* Aadhar Number */}
                <div
                  className={`${styles.inputContainer} lg:w-1/2 mt-6 relative flex items-center`}
                >
                  <FaIdCard className="text-gray-400" />
                  <input
                    placeholder="Enter Your Aadhar Number"
                    className={`${styles.inputField} pl-10 w-full`}
                    type="text"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <label className={styles.inputLabel}>Aadhar Number</label>
                  <span className={styles.inputHighlight}></span>
                </div>

                {/* PAN Number */}
                <div
                  className={`${styles.inputContainer} lg:w-1/2 mt-6 relative flex items-center`}
                >
                  <FaIdCard className="text-gray-400" />
                  <input
                    placeholder="Enter Your PAN Number"
                    className={`${styles.inputField} pl-10 w-full`}
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <label className={styles.inputLabel}>PAN Number</label>
                  <span className={styles.inputHighlight}></span>
                </div>
              </div>

              {/* File Upload */}
              <div className="w-full flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 w-full">
                  <label className="block text-sm text-white font-medium mb-2">
                    Profile Picture
                  </label>
                  {!profilePreview ? (
                    <label
                      htmlFor="profilePicture"
                      className="labelFile rounded-md flex flex-col justify-center w-full h-[190px] items-center p-5 border-dotted border-2 text-white border-white"
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

                {/* Aadhaar Card Upload */}
                <div className="lg:w-1/2 w-full">
                  <label className="block text-sm text-white font-medium mb-2">
                    Aadhar Card
                  </label>
                  {!aadharPreview ? (
                    <label
                      htmlFor="aadharCard"
                      className="labelFile flex rounded-md flex-col justify-center w-full h-[190px] items-center p-5 border-dotted border-2 text-white border-white"
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
                        name="aadharCard"
                        id="aadharCard"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </label>
                  ) : (
                    <div className="relative">
                      <img
                        src={aadharPreview}
                        alt="Aadhar Preview"
                        className="mt-4 w-full h-44 rounded object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveFile("aadharCard")}
                        className="absolute top-0 right-0 bg-gray-800 text-white p-1 rounded-full"
                      >
                        <AiOutlineClose size={18} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full mt-6">
                <label className="block text-sm text-white font-medium mb-2">
                  Self Declaration
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="declaration"
                    name="declaration"
                    checked={isDeclarationChecked}
                    onChange={() =>
                      setIsDeclarationChecked(!isDeclarationChecked)
                    }
                    className="mr-2"
                  />
                  <label htmlFor="declaration" className="text-white">
                    I declare that the information provided is true and correct
                    to the best of my knowledge.
                  </label>
                </div>
              </div>

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
      <div className="w-full relative hidden z-10 lg:block lg:w-1/3">
        <Lottie
          animationData={animation}
          loop={true}
          style={{
            width: "100%",
            height: "600px",
          }}
          className="lg:fixed top-[30%] -right-[35%]"
        />
      </div>
    </div>
  );
};

export default SignupStep7;

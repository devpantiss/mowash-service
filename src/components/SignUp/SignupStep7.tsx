import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Close icon from react-icons
import {
  FaMale,
  FaFemale,
  FaGenderless,
  FaHandHoldingUsd,
  FaRegIdCard,
} from "react-icons/fa"; // Icons
import DatePicker from "react-datepicker"; // Import the date picker
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles
import styles from "@/components/common/input/input.module.css"; // Import the styles from module.css
import StatusDetails from "./StatusDetails/StatusDetails";

interface FormData {
  name: string;
  dateOfBirth: Date | null; // Update to Date type
  gender: string;
  socialStatus: string;
  economicStatus: string;
  aadharNumber: string;
  aadharCard: File | null;
  profilePicture: File | null;
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
  });

  const [aadharPreview, setAadharPreview] = useState<string | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({
      ...formData,
      dateOfBirth: date,
    });
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
      }

      setFormData({
        ...formData,
        [name]: file,
      });
    }
  };

  const handleRemoveFile = (type: "aadharCard" | "profilePicture") => {
    if (type === "aadharCard") {
      setAadharPreview(null);
      setFormData({
        ...formData,
        aadharCard: null,
      });
    } else if (type === "profilePicture") {
      setProfilePreview(null);
      setFormData({
        ...formData,
        profilePicture: null,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="flex flex-col items-center space-y-7 md:h-full mb-10 rounded-lg lg:h-[80vh] mt-12 justify-center">
      <StatusDetails />
      <h2 className="text-5xl font-bold lg:text-center text-left text-white my-8">
        Basic Information Form
      </h2>
      <div className="flex w-full max-w-8xl">
        <div className="lg:w-3/5 w-full">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-transparent p-4 ring-2 ring-white flex flex-col justify-center items-center rounded-tl-md rounded-bl-md space-y-6"
          >
            {/* Social and Economic Status and Gender Selection  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-8">
              <div>
                <label className="block text-sm text-white font-medium mb-2">
                  Social Status
                </label>
                <div className="flex gap-4 mt-2">
                  <div className="flex flex-col justify-center items-center text-white">
                    <div
                      onClick={() =>
                        setFormData({ ...formData, socialStatus: "Ultra Poor" })
                      }
                      className={`cursor-pointer p-4 border rounded-full flex flex-col items-center justify-center ${
                        formData.socialStatus === "Ultra Poor"
                          ? "bg-blue-100 text-blue-500 border-blue-600"
                          : "text-white"
                      }`}
                    >
                      <FaHandHoldingUsd size={44} />
                    </div>
                    <p className="mt-2">Ultra Poor</p>
                  </div>

                  <div className="flex flex-col justify-center items-center text-white">
                    <div
                      onClick={() =>
                        setFormData({ ...formData, socialStatus: "BPL" })
                      }
                      className={`cursor-pointer p-4 border rounded-full flex flex-col items-center justify-center ${
                        formData.socialStatus === "BPL"
                          ? "bg-blue-100 text-blue-500 border-blue-600"
                          : "text-white"
                      }`}
                    >
                      <FaHandHoldingUsd size={44} />
                    </div>
                    <p className="mt-2">BPL</p>
                  </div>
                  <div className="flex flex-col justify-center items-center text-white">
                    <div
                      onClick={() =>
                        setFormData({ ...formData, socialStatus: "APL" })
                      }
                      className={`cursor-pointer p-4 border rounded-full flex flex-col items-center justify-center ${
                        formData.socialStatus === "APL"
                          ? "bg-blue-100 text-blue-500 border-blue-600"
                          : "text-white"
                      }`}
                    >
                      <FaHandHoldingUsd size={44} />
                    </div>
                    <p className="mt-2">APL</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-white font-medium mb-2">
                  Economic Status
                </label>
                <div className="flex gap-4 mt-2">
                  <div className="flex flex-col justify-center items-center text-white">
                    <div
                      onClick={() =>
                        setFormData({ ...formData, economicStatus: "SC" })
                      }
                      className={`cursor-pointer p-4 border rounded-full flex flex-col items-center justify-center ${
                        formData.economicStatus === "SC"
                          ? "bg-blue-100 text-blue-500 border-blue-600"
                          : "text-white"
                      }`}
                    >
                      <FaRegIdCard size={44} />
                    </div>
                    <p className="mt-2">SC</p>
                  </div>

                  <div className="flex flex-col justify-center items-center text-white">
                    <div
                      onClick={() =>
                        setFormData({ ...formData, economicStatus: "ST" })
                      }
                      className={`cursor-pointer p-4 border rounded-full flex flex-col items-center justify-center ${
                        formData.economicStatus === "ST"
                          ? "bg-blue-100 text-blue-500 border-blue-600"
                          : "text-white"
                      }`}
                    >
                      <FaRegIdCard size={44} />
                    </div>
                    <p className="mt-2">ST</p>
                  </div>
                  <div className="flex flex-col justify-center items-center text-white">
                    <div
                      onClick={() =>
                        setFormData({ ...formData, economicStatus: "OBC" })
                      }
                      className={`cursor-pointer p-4 border rounded-full flex flex-col items-center justify-center ${
                        formData.economicStatus === "OBC"
                          ? "bg-blue-100 text-blue-500 border-blue-600"
                          : "text-white"
                      }`}
                    >
                      <FaRegIdCard size={44} />
                    </div>
                    <p className="mt-2">OBC</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-white font-medium mb-2">
                  Gender
                </label>
                <div className="flex gap-4 mt-2">
                  <div className="flex flex-col justify-center items-center text-white">
                    <div
                      onClick={() =>
                        setFormData({ ...formData, gender: "male" })
                      }
                      className={`cursor-pointer p-4 border rounded-full flex flex-col items-center justify-center ${
                        formData.gender === "male"
                          ? "bg-blue-100 text-blue-500 border-blue-600"
                          : "text-white"
                      }`}
                    >
                      <FaMale size={44} />
                    </div>
                    <p className="mt-2">Male</p>
                  </div>

                  <div className="flex flex-col justify-center items-center text-white">
                    <div
                      onClick={() =>
                        setFormData({ ...formData, gender: "female" })
                      }
                      className={`cursor-pointer p-4 border rounded-full flex flex-col items-center justify-center ${
                        formData.gender === "female"
                          ? "bg-blue-100 text-blue-500 border-blue-600"
                          : "text-white"
                      }`}
                    >
                      <FaFemale size={44} />
                    </div>
                    <p className="mt-2">Female</p>
                  </div>

                  <div className="flex flex-col justify-center items-center text-white">
                    <div
                      onClick={() =>
                        setFormData({ ...formData, gender: "others" })
                      }
                      className={`cursor-pointer p-4 border rounded-full flex flex-col items-center justify-center ${
                        formData.gender === "others"
                          ? "bg-blue-100 text-blue-500 border-blue-600"
                          : "text-white"
                      }`}
                    >
                      <FaGenderless size={44} />
                    </div>
                    <p className="mt-2">Others</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aadhar Number and Date of Birth */}
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-x-12">
              <div className={`${styles.inputContainer} mt-6`}>
                <input
                  placeholder="Enter Your Aadhar Number"
                  className={`${styles.inputField}`}
                  type="text"
                  name="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={handleInputChange}
                  required
                />
                <label className={styles.inputLabel}>Aadhar Number</label>
                <span className={styles.inputHighlight}></span>
              </div>

              {/* Date of Birth */}
              <div className={`${styles.inputContainer} mt-6`}>
                <DatePicker
                  selected={formData.dateOfBirth}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select your date of birth"
                  className={`${styles.inputField}`}
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
            </div>

            {/* File Upload */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-white font-medium mb-2">
                  Profile Picture
                </label>
                {!profilePreview ? (
                  <label
                    htmlFor="profilePicture"
                    className="labelFile rounded-md flex flex-col justify-center w-[200px] h-[190px] items-center p-5 border-dotted border-2 text-white border-white"
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
              <div>
                <label className="block text-sm text-white font-medium mb-2">
                  Aadhar Card
                </label>
                {!aadharPreview ? (
                  <label
                    htmlFor="aadharCard"
                    className="labelFile flex rounded-md flex-col justify-center w-[200px] h-[190px] items-center p-5 border-dotted border-2 text-white border-white"
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

            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg py-2 px-4 mt-8"
            >
              Submit
            </button>
          </form>
        </div>

        <div
          className="lg:block hidden lg:w-2/5 h-full rounded-br-md rounded-tr-md ring-2 ring-white"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726742454/jay-bhadreshwara-lux0psvZGLU-unsplash_whv55p.jpg')", // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SignupStep7;

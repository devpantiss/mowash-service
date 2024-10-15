// ./src/components/Certification.tsx

import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Dash/Layout";
import {
  AiOutlineClose,
  AiOutlineCheck,
  AiOutlineCloseCircle,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import {
  FaMoneyCheckAlt,
  FaLocationArrow,
  FaUserCheck,
  FaClipboardCheck,
  FaHandshake,
} from "react-icons/fa";
import style from "@/components/common/input/input.module.css"; // Import your CSS module

// Define the structure for each organization
interface Organization {
  name: string;
  logo: string;
}

// Define the structure for training centers
interface TrainingCenter {
  name: string;
  logo: string;
  description: string;
}

const organizations: Organization[] = [
  {
    name: "NSDC",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530989/NSDC-Preview-removebg-preview_iz8rat.png",
  },
  {
    name: "NSFDC",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530974/nsfdc-logo_oqjacv.png",
  },
  {
    name: "UNICEF",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530975/UNICEF-logo-blue_jyl67j.webp",
  },
  {
    name: "Mo Wash Company + SCCJ",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530988/mo-wash-logo_eiq199.svg",
  },
  {
    name: "UNDP",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530972/undp-logo-blue_cjemk6.svg",
  },
  {
    name: "HUDD, Govt. of Odisha",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530969/huddlogo-odisha_zczi0a.png",
  },
  {
    name: "Dept. of Panchayati Raj, Govt. of Odisha",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530969/huddlogo-odisha_zczi0a.png",
  },
  {
    name: "SKILL COUNCIL FOR GREEN JOBS",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530978/scgj_n7hvdt.gif",
  },
];

// Define the structure for training centers
const trainingCenters: TrainingCenter[] = [
  {
    name: "Green Skills Academy - Bhubaneswar",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530978/scgj_n7hvdt.gif",
    description:
      "Located in Bhubaneswar, offering comprehensive green job training.",
  },
  {
    name: "Green Skills Academy - Cuttack",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530978/scgj_n7hvdt.gif",
    description:
      "Located in Cuttack, providing hands-on training for green industries.",
  },
  // Add more training centers as needed
];

const Certification: React.FC = () => {
  const router = useRouter();
  const [isCertified, setIsCertified] = useState<boolean>(true); // Default to Yes
  const [selectedOption, setSelectedOption] = useState<
    "upload" | "joinAcademy" | null
  >(null);
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  const [certificatePreview, setCertificatePreview] = useState<string | null>(
    null
  );

  const [selectedTrainingCenter, setSelectedTrainingCenter] = useState<
    string | null
  >(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");

  // Handle file change for certificate upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);
      setCertificatePreview(previewUrl);
      setIsCertified(true); // Optionally set to true after upload
    }
  };

  // Handle remove certificate
  const handleRemoveFile = () => {
    setCertificatePreview(null);
  };

  // Handle go back from upload to main view
  const handleGoBack = () => {
    setSelectedOrg(null);
    setCertificatePreview(null);
    setSelectedOption(null);
  };

  // Define reference videos
  const referenceVideos = [
    {
      url: "https://www.youtube.com/embed/xyz",
      title: "Web Design for Web Developers",
      description:
        "Learn web design in 1 hour with 25+ simple-to-use rules and guidelines.",
      author: "Jonas Schmedtmann",
      rating: 4.5,
      reviews: 41368,
      duration: "2.5 total hours",
      level: "All Levels",
    },
    {
      url: "https://www.youtube.com/embed/abc",
      title: "How to Create an Online Course",
      description:
        "Use our best practices to plan, produce, and publish a well-designed course.",
      author: "Udemy Instructor Team",
      rating: 4.6,
      reviews: 5626,
      duration: "1.5 total hours",
      level: "Beginner",
    },
    {
      url: "https://www.youtube.com/embed/xyz",
      title: "Web Design for Web Developers",
      description:
        "Learn web design in 1 hour with 25+ simple-to-use rules and guidelines.",
      author: "Jonas Schmedtmann",
      rating: 4.5,
      reviews: 41368,
      duration: "2.5 total hours",
      level: "All Levels",
    },
    {
      url: "https://www.youtube.com/embed/abc",
      title: "How to Create an Online Course",
      description:
        "Use our best practices to plan, produce, and publish a well-designed course.",
      author: "Udemy Instructor Team",
      rating: 4.6,
      reviews: 5626,
      duration: "1.5 total hours",
      level: "Beginner",
    },
    {
      url: "https://www.youtube.com/embed/xyz",
      title: "Web Design for Web Developers",
      description:
        "Learn web design in 1 hour with 25+ simple-to-use rules and guidelines.",
      author: "Jonas Schmedtmann",
      rating: 4.5,
      reviews: 41368,
      duration: "2.5 total hours",
      level: "All Levels",
    },
    {
      url: "https://www.youtube.com/embed/abc",
      title: "How to Create an Online Course",
      description:
        "Use our best practices to plan, produce, and publish a well-designed course.",
      author: "Udemy Instructor Team",
      rating: 4.6,
      reviews: 5626,
      duration: "1.5 total hours",
      level: "Beginner",
    },
    {
      url: "https://www.youtube.com/embed/xyz",
      title: "Web Design for Web Developers",
      description:
        "Learn web design in 1 hour with 25+ simple-to-use rules and guidelines.",
      author: "Jonas Schmedtmann",
      rating: 4.5,
      reviews: 41368,
      duration: "2.5 total hours",
      level: "All Levels",
    },
    {
      url: "https://www.youtube.com/embed/abc",
      title: "How to Create an Online Course",
      description:
        "Use our best practices to plan, produce, and publish a well-designed course.",
      author: "Udemy Instructor Team",
      rating: 4.6,
      reviews: 5626,
      duration: "1.5 total hours",
      level: "Beginner",
    },
  ];

  // Handle Certification toggle
  const handleCertificationToggle = () => {
    setIsCertified(!isCertified);
    // Reset all states when toggling
    setSelectedOption(null);
    setSelectedOrg(null);
    setCertificatePreview(null);
    setSelectedTrainingCenter(null);
    setSelectedTimeSlot(null);
    setAddress("");
  };

  // Handle option selection in No view
  const handleOptionSelection = (option: "upload" | "joinAcademy") => {
    setSelectedOption(option);
  };

  // Handle training center selection
  const handleTrainingCenterSelection = (centerName: string) => {
    setSelectedTrainingCenter(centerName);
  };

  // Handle form submission for academy
  const handleAcademySubmit = () => {
    // Implement form submission logic
    // For now, just alert the details
    if (selectedTrainingCenter && selectedTimeSlot && address) {
      alert(
        `Training Center: ${selectedTrainingCenter}\nTime Slot: ${selectedTimeSlot}\nAddress: ${address}`
      );
      // Reset state or navigate as needed
      setSelectedOption(null);
      setSelectedTrainingCenter(null);
      setSelectedTimeSlot(null);
      setAddress("");
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <Layout>
      <div className="relative flex mx-auto flex-col lg:h-[90vh] h-[100vh] bg-transparent">
        <h1 className="text-4xl font-bold text-center my-8 text-white">
          Learning Programs/Certification
        </h1>
        {/* Top Right Toggle */}
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <span className="text-white font-medium">Certified:</span>
          <button
            className={`px-4 py-2 rounded-md ${
              isCertified
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            } text-white transition-colors duration-300`}
            onClick={handleCertificationToggle}
            aria-pressed={isCertified}
            aria-label="Toggle certification status"
          >
            {isCertified ? "Yes" : "No"}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center bg-transparent p-8 lg:p-16">
          {isCertified ? (
            // Yes View: Certificate and Reference Videos
            <div className="w-full">
              {/* First Row: Certificate Image and Organization Name + Logo */}
              <div className="flex flex-col lg:flex-row items-center justify-between bg-transparent ring-2 ring-white p-6 rounded-lg shadow-lg mb-8">
                {/* Certificate Image */}
                <div className="lg:w-4/5 w-full flex justify-center mb-4 lg:mb-0">
                  {certificatePreview ? (
                    <img
                      src={certificatePreview}
                      alt="Uploaded Certificate"
                      className="w-[300px] lg:w-[600px] h-auto object-contain"
                    />
                  ) : (
                    <div className="w-48 h-48 bg-gray-300 flex items-center justify-center rounded-lg">
                      <span className="text-gray-700">
                        No Certificate Uploaded
                      </span>
                    </div>
                  )}
                </div>

                {/* Organization Name and Logo */}
                <div className="lg:w-1/5 w-full flex flex-col justify-center items-center lg:items-start">
                  {selectedOrg ? (
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={
                          organizations.find((org) => org.name === selectedOrg)
                            ?.logo || ""
                        }
                        alt={`${selectedOrg} logo`}
                        className="w-44 h-44 mb-4 object-contain"
                      />
                      <h2 className="text-2xl font-semibold text-white">
                        {selectedOrg}
                      </h2>
                      <p className="text-gray-300 mt-2">
                        {
                          organizations.find((org) => org.name === selectedOrg)
                            ?.name
                        }
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530989/NSDC-Preview-removebg-preview_iz8rat.png" // Default logo
                        alt="Default Organization Logo"
                        className="w-44 h-44 mb-4 object-contain"
                      />
                      <h2 className="text-2xl font-semibold text-white">
                        Organization Name
                      </h2>
                      <p className="text-gray-300 mt-2">
                        National Skill Development Corporation
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            // No View: Options to Upload Certificate or Join Academy
            <div className="w-full">
              {/* Option Selection: Upload Certificate or Join Academy */}
              {!selectedOption && (
                <div className="flex flex-col lg:flex-row justify-center items-center bg-gray-800 p-6 rounded-lg shadow-lg mb-8 space-y-4 lg:space-y-0 lg:space-x-8">
                  {/* Upload Certificate Option */}
                  <div
                    className="cursor-pointer flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 transition transform hover:scale-105"
                    onClick={() => handleOptionSelection("upload")}
                  >
                    <AiOutlineCheck size={40} className="text-green-500 mb-4" />
                    <span className="text-lg font-semibold text-gray-800">
                      Upload Certificate
                    </span>
                  </div>

                  {/* Join Green Jobs Academy Option */}
                  <div
                    className="cursor-pointer flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:bg-yellow-100 transition transform hover:scale-105"
                    onClick={() => handleOptionSelection("joinAcademy")}
                  >
                    <FaUserCheck size={40} className="text-yellow-500 mb-4" />
                    <span className="text-lg font-semibold text-gray-800">
                      Join Green Jobs Academy
                    </span>
                  </div>
                </div>
              )}

              {/* Upload Certificate View */}
              {selectedOption === "upload" && (
                <div className="flex flex-col-reverse lg:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg">
                  {/* Left Section: Organization Selection */}
                  <div className="lg:w-1/2 w-full pr-4">
                    <h2 className="text-2xl text-white font-semibold mb-4">
                      Select Organization
                    </h2>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                      {organizations.map((org) => (
                        <div
                          key={org.name}
                          className={`cursor-pointer flex flex-col items-center bg-transparent ring-2 ring-blue-600 text-white p-4 rounded-lg hover:bg-blue-100 hover:text-blue-600 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 ${
                            selectedOrg === org.name
                              ? "border-2 border-blue-500"
                              : ""
                          }`}
                          onClick={() => setSelectedOrg(org.name)}
                        >
                          <img
                            src={org.logo}
                            alt={`${org.name} logo`}
                            className="w-20 h-20 mb-4 object-contain"
                          />
                          <span className="text-center text-lg font-semibold">
                            {org.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center mt-4">
                      <button
                        onClick={handleGoBack}
                        className="bg-gray-500 flex gap-x-4 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
                      >
                        <AiOutlineArrowLeft size={24} className="mr-2" />
                        Back
                      </button>
                    </div>
                  </div>

                  {/* Right Section: Certificate Upload */}
                  {selectedOrg && (
                    <div className="lg:w-1/2 w-full lg:pl-4 mb-6">
                      <h2 className="text-2xl text-white font-semibold mb-4">
                        Upload your certificate for {selectedOrg}
                      </h2>

                      {/* Custom File Upload Field */}
                      {!certificatePreview ? (
                        <label
                          htmlFor="certificateUpload"
                          className="labelFile flex flex-col justify-center w-full h-[190px] items-center p-5 rounded-md border-dotted border-2 text-white border-white cursor-pointer"
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
                            drag and drop your file here or click to select a
                            file!
                          </p>
                          <input
                            className="input hidden"
                            type="file"
                            name="certificateUpload"
                            id="certificateUpload"
                            onChange={handleFileChange}
                            accept="image/*"
                          />
                        </label>
                      ) : (
                        <div className="relative flex justify-center items-center">
                          <img
                            src={certificatePreview}
                            alt="Certificate Preview"
                            className="w-[300px] lg:w-[700px] h-auto object-cover mt-4 rounded-lg"
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
                  )}
                </div>
              )}

              {/* Join Green Jobs Academy View */}
              {selectedOption === "joinAcademy" && (
                <div className="flex flex-col bg-transparent ring-2 ring-white p-6 rounded-lg shadow-lg space-y-8">
                  {/* Training Centers Selection */}
                  {!selectedTrainingCenter ? (
                    <div>
                      <h2 className="text-2xl text-white font-semibold mb-4">
                        Select Training Center
                      </h2>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {trainingCenters.map((center) => (
                          <div
                            key={center.name}
                            className={`cursor-pointer flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:bg-green-100 transition transform hover:scale-105 ${
                              selectedTrainingCenter === center.name
                                ? "border-2 border-green-500"
                                : ""
                            }`}
                            onClick={() =>
                              handleTrainingCenterSelection(center.name)
                            }
                          >
                            <img
                              src={center.logo}
                              alt={`${center.name} logo`}
                              className="w-16 h-16 mb-4 object-contain"
                            />
                            <span className="text-center text-lg font-semibold">
                              {center.name}
                            </span>
                            <p className="text-center text-sm text-gray-700 mt-2">
                              {center.description}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center mt-4">
                        <button
                          onClick={() => setSelectedOption(null)}
                          className="bg-gray-500 flex gap-x-4 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
                        >
                          <AiOutlineArrowLeft size={24} className="mr-2" />
                          Back
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Time Slot and Address Input
                    <div className="space-y-4">
                      <h2 className="text-2xl text-white font-semibold">
                        Select Time Slot for Classes
                      </h2>
                      <select
                        value={selectedTimeSlot || ""}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="w-full p-2 rounded-lg border border-gray-300"
                      >
                        <option value="">Select a Time Slot</option>
                        <option value="Morning">Morning (9 AM - 12 PM)</option>
                        <option value="Afternoon">
                          Afternoon (1 PM - 4 PM)
                        </option>
                        <option value="Evening">Evening (5 PM - 8 PM)</option>
                      </select>

                      <h2 className="text-2xl text-white font-semibold">
                        Enter Your Residential Address for Kit Delivery
                      </h2>

                      {/* Residential Address Form using custom styles */}
                      <div className={style.inputContainer}>
                        <input
                          placeholder="Street Address"
                          className={style.inputField}
                          type="text"
                          // value={streetAddress}
                          // onChange={(e) => setStreetAddress(e.target.value)}
                        />
                        <label className={style.inputLabel}>
                          Street Address
                        </label>
                        <span className={style.inputHighlight}></span>
                      </div>

                      <div className={style.inputContainer}>
                        <input
                          placeholder="City"
                          className={style.inputField}
                          type="text"
                          // value={city}
                          // onChange={(e) => setCity(e.target.value)}
                        />
                        <label className={style.inputLabel}>City</label>
                        <span className={style.inputHighlight}></span>
                      </div>

                      <div className={style.inputContainer}>
                        <input
                          placeholder="State"
                          className={style.inputField}
                          type="text"
                          // value={state}
                          // onChange={(e) => setState(e.target.value)}
                        />
                        <label className={style.inputLabel}>State</label>
                        <span className={style.inputHighlight}></span>
                      </div>

                      <div className={style.inputContainer}>
                        <input
                          placeholder="Zip Code"
                          className={style.inputField}
                          type="text"
                          // value={zipCode}
                          // onChange={(e) => setZipCode(e.target.value)}
                        />
                        <label className={style.inputLabel}>Zip Code</label>
                        <span className={style.inputHighlight}></span>
                      </div>

                      <button
                        onClick={handleAcademySubmit}
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Reference Videos for Yes View */}
          {isCertified && (
            <div className="mt-8">
              <h2 className="text-3xl font-bold text-center text-white mb-6">
                Reference Videos
              </h2>
              <div className="gap-x-4 gap-y-4 grid grid-cols-1 lg:grid-cols-2">
                {referenceVideos.map((video, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row bg-gray-800 rounded-lg shadow-lg p-4 transition-all duration-300"
                  >
                    {/* Video thumbnail or iframe */}
                    <div className="flex-shrink-0 w-68 h-48 sm:w-64 sm:h-48 overflow-hidden rounded-lg">
                      <iframe
                        className="w-full h-full"
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {/* Video details */}
                    <div className="lg:ml-4 mt-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {video.title}
                        </h3>
                      </div>
                      <div className="flex flex-row lg:flex-row items-center text-gray-300 text-sm mt-4">
                        <div className="flex items-center">
                          <span className="font-medium">{video.author}</span>
                        </div>
                        <span className="mx-2">·</span>
                        <div className="flex items-center">
                          <span className="text-yellow-400">
                            ★ {video.rating}
                          </span>
                          <span className="ml-1">
                            ({video.reviews} reviews)
                          </span>
                        </div>
                        <span className="mx-2">·</span>
                        <div>
                          <span>{video.duration}</span> ·{" "}
                          <span>{video.level}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reference Videos for Join Academy Option */}
          {isCertified === false && selectedOption === "joinAcademy" && (
            <div className="mt-8">
              <h2 className="text-3xl font-bold text-center text-white mb-6">
                Reference Videos
              </h2>
              <div className="gap-x-4 gap-y-4 grid grid-cols-1 lg:grid-cols-2">
                {referenceVideos.map((video, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row bg-gray-800 rounded-lg shadow-lg p-4 transition-all duration-300"
                  >
                    {/* Video thumbnail or iframe */}
                    <div className="flex-shrink-0 w-68 h-48 sm:w-64 sm:h-48 overflow-hidden rounded-lg">
                      <iframe
                        className="w-full h-full"
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {/* Video details */}
                    <div className="lg:ml-4 mt-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {video.title}
                        </h3>
                      </div>
                      <div className="flex flex-row lg:flex-row items-center text-gray-300 text-sm mt-4">
                        <div className="flex items-center">
                          <span className="font-medium">{video.author}</span>
                        </div>
                        <span className="mx-2">·</span>
                        <div className="flex items-center">
                          <span className="text-yellow-400">
                            ★ {video.rating}
                          </span>
                          <span className="ml-1">
                            ({video.reviews} reviews)
                          </span>
                        </div>
                        <span className="mx-2">·</span>
                        <div>
                          <span>{video.duration}</span> ·{" "}
                          <span>{video.level}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Certification;

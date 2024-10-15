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

              {/* Reference Videos */}
              {/* <div className="flex flex-col gap-8">
                {referenceVideos.map((video, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
                  >
                    <iframe
                      width="100%"
                      height="200"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div> */}
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
                <div className="flex flex-col lg:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg">
                  {/* Left Section: Organization Selection */}
                  <div className="lg:w-1/2 w-full pr-4">
                    <h2 className="text-2xl text-white font-semibold mb-4">
                      Select Organization
                    </h2>
                    <div className="grid grid-cols-3 gap-4">
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
                    <div className="lg:w-1/2 w-full pl-4">
                      <h2 className="text-2xl text-white font-semibold mb-4">
                        Upload your certificate for {selectedOrg}
                      </h2>
                      {!certificatePreview ? (
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="w-full p-2 text-white bg-black border-white rounded-lg"
                        />
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
                    className="flex bg-gray-800 rounded-lg shadow-lg p-4 transition-all duration-300"
                  >
                    {/* Video thumbnail or iframe */}
                    <div className="flex-shrink-0 w-64 h-48sm:w-64 sm:h-48 overflow-hidden rounded-lg">
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
                    <div className="ml-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {video.title}
                        </h3>
                      </div>
                      <div className="flex flex-col lg:flex-rowitems-center text-gray-300 text-sm mt-4">
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
                    className="flex bg-gray-800 rounded-lg shadow-lg p-4 transition-all duration-300"
                  >
                    {/* Video thumbnail or iframe */}
                    <div className="flex-shrink-0 w-64 h-48sm:w-64 sm:h-48 overflow-hidden rounded-lg">
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
                    <div className="ml-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {video.title}
                        </h3>
                      </div>
                      <div className="flex flex-col lg:flex-rowitems-center text-gray-300 text-sm mt-4">
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

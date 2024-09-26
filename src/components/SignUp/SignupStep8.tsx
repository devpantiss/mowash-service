import React, { useState } from "react";
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

interface Organization {
  name: string;
  logo: string;
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
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530975/UNICEF-logo_lctnsz.webp",
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

const SignupStep8: React.FC = () => {
  const [isCertified, setIsCertified] = useState<boolean | null>(null);
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  const [certificatePreview, setCertificatePreview] = useState<string | null>(
    null
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);
      setCertificatePreview(previewUrl);
    }
  };

  const handleRemoveFile = () => {
    setCertificatePreview(null);
  };

  const handleGoBack = () => {
    setIsCertified(null);
    setSelectedOrg(null);
    setCertificatePreview(null);
  };

  return (
    <div className="flex flex-col h-[100vh] bg-transparent p-4">
      <div>
        {/* Yes/No options */}
        {isCertified === null && (
          <div className="flex flex-row-reverse space-x-4 w-full">
            <div className="w-1/2 flex flex-col justify-center items-center">
              <h1 className="text-3xl text-white font-bold mt-3 text-left mb-2">
                Are You Certified?
              </h1>
              <div className="flex gap-x-4">
                <div
                  className="cursor-pointer bg-white p-4 rounded-lg shadow-md hover:bg-blue-100 transition flex items-center space-x-2"
                  onClick={() => setIsCertified(true)}
                >
                  <AiOutlineCheck size={24} className="text-green-500" />
                  <span>Yes</span>
                </div>
                <div
                  className="cursor-pointer bg-white p-4 rounded-lg shadow-md hover:bg-red-100 transition flex items-center space-x-2"
                  onClick={() => setIsCertified(false)}
                >
                  <AiOutlineCloseCircle size={24} className="text-red-500" />
                  <span>No</span>
                </div>
              </div>
            </div>

            <div className="w-3/5 bg-white flex flex-col justify-center items-center text-black h-[100vh]  px-24 py-4">
              <h1 className="text-3xl text-blue-600 font-bold mt-3 mb-4">
                Skill Certifications and Their Importance
              </h1>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaClipboardCheck className="text-blue-600" size={24} />
                  <div>
                    <h2 className="text-xl font-semibold">
                      Validation of Skills
                    </h2>
                    <p className="text-gray-600">
                      Certifications serve as a powerful validation of your
                      skills, helping you stand out in the competitive job
                      market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaUserCheck className="text-blue-600" size={24} />
                  <div>
                    <h2 className="text-xl font-semibold">Proves Expertise</h2>
                    <p className="text-gray-600">
                      They prove your expertise and dedication to your
                      profession, making you a more credible candidate to
                      employers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaLocationArrow className="text-blue-600" size={24} />
                  <div>
                    <h2 className="text-xl font-semibold">
                      Better Opportunities
                    </h2>
                    <p className="text-gray-600">
                      Certified individuals are more likely to gain better and
                      higher-paying job opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaMoneyCheckAlt className="text-blue-600" size={24} />
                  <div>
                    <h2 className="text-xl font-semibold">
                      Increased Employability
                    </h2>
                    <p className="text-gray-600">
                      Certification increases your employability in the
                      industry, giving you an edge over non-certified
                      professionals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaHandshake className="text-blue-600" size={24} />
                  <div>
                    <h2 className="text-xl font-semibold">Industry Trust</h2>
                    <p className="text-gray-600">
                      Certified professionals earn the trust of the industry,
                      making collaborations and partnerships easier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* If user selects 'Yes' */}
      {isCertified === true && (
        <div className="w-full flex justify-between items-center pt-28">
          {/* Left section: Organization cards */}
          <div className="w-1/2 pr-4">
            <h2 className="text-3xl text-white font-bold text-left mb-2">
              From which organization are you certified?
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {organizations.map((org) => (
                <div
                  key={org.name}
                  className={`cursor-pointer flex flex-col items-center bg-transparent ring-2 ring-blue-600 text-white p-4 rounded-lg hover:bg-blue-100 hover:text-blue-600 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:ring-blue-500 ${
                    selectedOrg === org.name ? "border-2 border-blue-500" : ""
                  }`}
                  onClick={() => setSelectedOrg(org.name)}
                >
                  <img
                    src={org.logo}
                    alt={`${org.name} logo`}
                    className="w-20 h-20 mb-4"
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

          {/* Right section: File upload */}
          {selectedOrg && (
            <div className="w-1/2 pl-4">
              <h2 className="text-3xl text-white font-bold text-left mb-6">
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
                    className="w-[500px] h-full object-cover mt-4 rounded-lg"
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

      {/* If user selects 'No' */}
      {isCertified === false && (
        <div className=" flex justify-center items-center">
          <div className="w-full max-w-xl mt-36 flex flex-col justify-center items-center px-6 py-4 bg-white ring-2 ring-blue-600 text-blue-600">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Join Mo Wash <p className="text-green-500">Green</p> Jobs Academy
            </h2>
            <p className="text-center">
              Become part of the Green Jobs Academy and start your certification
              journey today.
            </p>
            <button className="mt-4 w-full p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Learn More
            </button>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="fixed bottom-0 w-full h-2 bg-gray-200">
        <div className="h-2 bg-blue-600" style={{ width: "56%" }}></div>
      </div>
    </div>
  );
};

export default SignupStep8;

import Link from "next/link";
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
    name: "SCGJ",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530978/scgj_n7hvdt.gif",
  },
];

const certifiedOptions = [
  "Mason",
  "Electrician",
  "Plumber",
  "Cesspool",
  "Sanitation Crew",
  "Nal Jal Mitra",
  "STP Operator",
  "Solar Pump Operator",
  "Pond Excavator",
  "Water Bill Collector",
];

const SignupStep8: React.FC = () => {
  const [isCertified, setIsCertified] = useState<boolean | null>(null);
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  const [certificatePreview, setCertificatePreview] = useState<string | null>(
    null
  );
  const [dateOfIssuance, setDateOfIssuance] = useState<string>("");
  const [certifiedFor, setCertifiedFor] = useState<string>("");

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

  const handleSubmit = () => {
    // Handle form submission here
    const formData = {
      dateOfIssuance,
      selectedOrg,
      certifiedFor,
      certificatePreview,
    };
    console.log(formData);
    // Submit logic
  };

  return (
    <div className="flex flex-col lg:h-[100vh] bg-transparent">
      <div>
        {/* Yes/No options */}
        {isCertified === null && (
          <div className="flex flex-col h-[100vh] lg:flex-row-reverse lg:space-x-4 lg:space-y-0 space-y-14 w-full">
            <div className="lg:w-1/2 w-full flex mb-6 flex-col justify-center items-center">
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

            <div className="lg:w-3/5 w-full bg-transparent ring-2 ring-white rounded-md flex flex-col justify-center items-center text-black lg:h-[90vh] lg:px-24 px-6 py-6">
              <h1 className="text-3xl text-white font-bold mt-3 mb-4">
                Skill Certifications and Their Importance
              </h1>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaClipboardCheck className="text-blue-600" size={24} />
                  <div>
                    <h2 className="text-xl text-white  font-semibold">
                      Validation of Skills
                    </h2>
                    <p className="text-white">
                      Certifications serve as a powerful validation of your
                      skills, helping you stand out in the competitive job
                      market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaUserCheck className="text-blue-600" size={24} />
                  <div>
                    <h2 className="text-xl text-white font-semibold">
                      Proves Expertise
                    </h2>
                    <p className="text-white">
                      They prove your expertise and dedication to your
                      profession, making you a more credible candidate to
                      employers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaLocationArrow className="text-blue-600" size={24} />
                  <div>
                    <h2 className="text-xl text-white font-semibold">
                      Better Opportunities
                    </h2>
                    <p className="text-white">
                      Certified individuals are more likely to gain better and
                      higher-paying job opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaMoneyCheckAlt className="text-blue-600" size={24} />
                  <div>
                    <h2 className="text-xl text-white font-semibold">
                      Increased Employability
                    </h2>
                    <p className="text-white">
                      Certification increases your employability in the
                      industry, giving you an edge over non-certified
                      professionals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaHandshake className="text-blue-600" size={24} />
                  <div>
                    <h2 className="text-xl text-white font-semibold">
                      Industry Trust
                    </h2>
                    <p className="text-white">
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
        <div>
          <div className="lg:w-1/2 w-full pr-4">
            <h2 className="text-3xl text-white mt-8 font-bold text-left mb-2">
              Certification Details
            </h2>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="text-white">Date of Issuance</label>
                <input
                  type="date"
                  value={dateOfIssuance}
                  onChange={(e) => setDateOfIssuance(e.target.value)}
                  className="w-full p-2 bg-transparent ring-white ring-2 placeholder:text-white text-white rounded-md"
                />
              </div>

              <div>
                <label className="text-white">Organization</label>
                <select
                  value={selectedOrg || ""}
                  onChange={(e) => setSelectedOrg(e.target.value)}
                  className="w-full p-2 bg-transparent ring-white ring-2 placeholder:text-white text-white rounded-md"
                >
                  <option value="" disabled>
                    Select an organization
                  </option>
                  {organizations.map((org) => (
                    <option key={org.name} value={org.name}>
                      {org.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-white">Certified For</label>
                <select
                  value={certifiedFor}
                  onChange={(e) => setCertifiedFor(e.target.value)}
                  className="w-full p-2 bg-transparent ring-white ring-2 placeholder:text-white text-white rounded-md"
                >
                  <option value="" disabled>
                    Select your profession
                  </option>
                  {certifiedOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center pt-10">
            {/* Left section: Organization cards */}
            <div className="lg:w-1/2 w-full pr-4">
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
                      className="lg:w-20 lg:h-20 w-14 h-14 mb-4"
                    />
                    <span className="text-center text-lg font-semibold">
                      {org.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-8">
                <button
                  onClick={handleGoBack}
                  className="px-6 py-2 flex bg-white text-blue-600 ring ring-blue-600 rounded-lg hover:bg-gray-100 transition"
                >
                  Back
                </button>
              </div>
            </div>

            {/* Right section: File upload */}
            {selectedOrg && (
              <div className="lg:w-1/2 w-full mb-4 lg:pl-4">
                <h2 className="text-3xl text-white font-bold text-left mb-6">
                  Upload your certificate for {selectedOrg}
                </h2>
                {!certificatePreview ? (
                  <label
                    htmlFor="aadharCard"
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
                      name="aadharCard"
                      id="aadharCard"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </label>
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
        </div>
      )}

      {/* If user selects 'No' */}
      {isCertified === false && (
        <div className=" flex h-[100vh] justify-center items-center">
          <div className="w-full max-w-xl flex flex-col justify-center items-center px-6 py-4 bg-white ring-2 rounded-md ring-blue-600 text-blue-600">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Join Mo Wash <p className="text-green-500">Green</p> Jobs Academy
            </h2>
            <p className="text-center">
              Become part of the Green Jobs Academy and start your certification
              journey today.
            </p>
            <Link href="/lms/greenjobsacademy" className="mt-4 w-full p-2 text-center bg-green-500 text-white rounded-md hover:bg-green-600 transition">Explore</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupStep8;

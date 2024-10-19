import Layout from "@/components/Dash/Layout";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

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
    name: "DPR, Govt. of Odisha",
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

const Certification: React.FC = () => {
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  const [certificatePreview, setCertificatePreview] = useState<string | null>(
    null
  );
  const [toggleCertificateView, setToggleCertificateView] =
    useState<boolean>(false);
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

  return (
    <Layout>
      <div className="flex flex-col items-center lg:p-10 py-10 px-6 bg-transparent">
        <div className="max-w-7xl">
          {/* Toggle switch between Certificate view or Upload option */}
          <div className="flex justify-end items-center mb-4">
            <label className="text-white mr-2">Toggle Certificate View</label>
            <input
              type="checkbox"
              checked={toggleCertificateView}
              onChange={() => setToggleCertificateView(!toggleCertificateView)}
              className="toggle-checkbox"
            />
          </div>

          {/* Toggled Views */}
          {toggleCertificateView ? (
            /* Certificate View with Organization Name */
            <div className="w-full flex flex-col lg:gap-x-8 gap-y-8 lg:flex-row justify-center lg:justify-between items-center pt-10">
              <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl text-white font-bold text-left mb-2">
                  Certified by {selectedOrg || "Organization"}
                </h2>
                <div className="relative flex justify-center items-center">
                  <img
                    src={
                      certificatePreview ||
                      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729329049/certificate-text-samples_qpmnwb.webp"
                    }
                    alt="Certificate Preview"
                    className="w-[600px] h-full object-cover mt-4 rounded-lg"
                  />
                  {certificatePreview && (
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="absolute top-0 right-0 bg-gray-800 text-white p-1 rounded-full"
                    >
                      <AiOutlineClose size={18} />
                    </button>
                  )}
                </div>
              </div>
              <div className="lg:w-1/2 w-full pr-4 text-white space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">
                    Date of Issuance:
                  </span>
                  <span className="text-md text-gray-300">10/09/1999</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">
                    Organization Issued:
                  </span>
                  <span className="text-md text-gray-300">SCGJ</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">Certified for:</span>
                  <span className="text-md text-gray-300">Plumbing</span>
                </div>
              </div>
            </div>
          ) : (
            /* Upload Section with Organization Name Selection */
            <div className="w-full flex flex-col-reverse justify-center lg:justify-between items-center pt-10">
              <div className="w-full">
                <h2 className="text-3xl text-white mt-8 font-bold text-left mb-2">
                  Certification Details
                </h2>

                {/* Form */}
                <div className="flex-col lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-4 space-y-4">
                  <div>
                    <label className="text-white mb-3">Date of Issuance</label>
                    <input
                      type="date"
                      value={dateOfIssuance}
                      onChange={(e) => setDateOfIssuance(e.target.value)}
                      className="w-full p-2 bg-transparent ring-white ring-2 placeholder:text-white text-white rounded-md"
                    />
                  </div>

                  <div>
                    <label className="text-white mb-3">Organization</label>
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
                    <label className="text-white mb-3">Certified For</label>
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
                <div className="mt-8">
                <Link href="#" className="px-6 py-3 rounded-md hover:bg-blue-600 text-white ring-2 ring-white">Submit</Link>

                </div>
              </div>
              <div className="w-full flex lg:flex-row flex-col-reverse justify-center lg:justify-between items-center pt-10">
                <div className="lg:w-1/2 w-full pr-4">
                  <h2 className="text-3xl text-white font-bold text-left mb-2">
                    Select the organization you are certified from
                  </h2>
                  <div className="grid grid-cols-3 gap-x-3 gap-y-6">
                    {organizations.map((org) => (
                      <div
                        key={org.name}
                        className={`cursor-pointer text-center flex flex-col items-center bg-transparent ring-2 ring-blue-600 text-white p-4 rounded-lg hover:bg-blue-100 hover:text-blue-600 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:ring-blue-500 ${
                          selectedOrg === org.name
                            ? "border-2 border-blue-500"
                            : ""
                        }`}
                        onClick={() => setSelectedOrg(org.name)}
                      >
                        <img
                          src={org.logo}
                          alt={`${org.name} logo`}
                          className="lg:w-16 lg:h-16 w-12 h-12"
                        />
                        <span className="text-lg font-semibold">
                          {org.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedOrg && (
                  <div className="lg:w-1/2 w-full mb-4 lg:pl-4">
                    <h2 className="text-3xl text-white font-bold text-left mb-6">
                      Upload your certificate for {selectedOrg}
                    </h2>
                    <div className="flex flex-col justify-center items-center space-y-4">
                      {/* Custom Upload Field */}
                      <label
                        htmlFor="panCard"
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
                          drag and drop your file here or click to select a
                          file!
                        </p>
                        <input
                          className="input hidden"
                          type="file"
                          name="panCard"
                          id="panCard"
                          onChange={handleFileChange}
                          accept="image/*"
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <hr className="my-10" />

          <div>
            <h1 className="text-5xl text-white font-bold">
              Not Certified Yet?
            </h1>
            <h2 className="text-xl text-white mt-4">
              Explore <span className="text-green-400">Green</span> Jobs Academy
              for getting the best professional exposure in the field of service
              that you want to pursue.
            </h2>
            <div className="mt-7">
              <Link
                href="/lms/greenjobsacademy"
                className="px-6 py-3 ring-2 text-white ring-white hover:bg-green-600 rounded-md"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certification;

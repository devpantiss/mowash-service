import React, { useState } from "react";
import style from "@/components/common/input/input.module.css"; // Assuming you place your styles in this CSS module file
import { AiOutlineClose } from "react-icons/ai";
import Layout from "@/components/Dash/Layout";
import animation from "@/components/assets/bank-animation.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const BankDetails: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [ifscCode, setIfscCode] = useState<string>("");
  const [branch, setBranch] = useState<string>("");
  const [aadharPreview, setAadharPreview] = useState<string | null>(null);

  const banks = [
    "Select a bank",
    "HDFC Bank",
    "ICICI Bank",
    "State Bank of India",
    "Axis Bank",
    "Punjab National Bank",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);
      setAadharPreview(previewUrl);
    }
  };

  const handleRemoveFile = (type: "aadharCard") => {
    if (type === "aadharCard") {
      setAadharPreview(null);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col justify-start items-center mt-12 lg:h-[85vh] bg-transparent">
        {/* Heading */}
        <h2 className="text-5xl font-bold lg:text-center text-left text-white my-8">
          Bank Details
        </h2>
        <div className="bg-transparent p-8 rounded-lg w-full px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section - Static Image */}
          <div className="flex justify-center items-center p-4 rounded-lg">
          <Lottie
              animationData={animation}
              loop={true}
              style={{
                width: "100%",
                height: "600px",
              }}
              className="block"
            />
            
            {/* <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727262465/7990322-removebg-preview_xs70dx.png"
              alt="Static Placeholder"
              className="max-w-full h-auto rounded-lg bounce"
            /> */}
          </div>

          {/* Right Section - Form */}
          <div className="bg-transparent p-8 rounded-lg ring-2 ring-white flex flex-col justify-center">
            {/* Form Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {/* Bank Dropdown */}
              <div className={style.inputContainer}>
                <select
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  required
                  className={style.inputField}
                >
                  {banks.map((bank) => (
                    <option key={bank} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
                <label className={style.inputLabel}>Select Bank</label>
                <span className={style.inputHighlight}></span>
              </div>

              {/* Account Number */}
              <div className={style.inputContainer}>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                  className={style.inputField}
                  placeholder="Enter Your Account Number"
                />
                <label className={style.inputLabel}>Account Number</label>
                <span className={style.inputHighlight}></span>
              </div>
            </div>

            {/* IFSC and Branch */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {/* IFSC Code */}
              <div className={style.inputContainer}>
                <input
                  type="text"
                  value={ifscCode}
                  onChange={(e) => setIfscCode(e.target.value)}
                  required
                  className={style.inputField}
                  placeholder="Enter Your IFSC Code"
                />
                <label className={style.inputLabel}>IFSC Code</label>
                <span className={style.inputHighlight}></span>
              </div>

              {/* Branch */}
              <div className={style.inputContainer}>
                <input
                  type="text"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  required
                  className={style.inputField}
                  placeholder="Enter Your Branch Name"
                />
                <label className={style.inputLabel}>Branch Name</label>
                <span className={style.inputHighlight}></span>
              </div>
            </div>

            {/* Passbook Image Upload */}
            {/* Aadhaar Card Upload */}
            <div className="w-full">
              <label className="block text-sm text-white font-medium mb-2">
                Aadhar Card
              </label>
              {!aadharPreview ? (
                <label
                  htmlFor="aadharCard"
                  className="labelFile flex flex-col justify-center w-full h-[190px] items-center p-5 border-dotted border-2 text-white border-white"
                >
                  <span>
                    <svg viewBox="0 0 184.69 184.69" width="60px" height="60px">
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

            {/* Submit Button */}
            <div className="mt-6">
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BankDetails;

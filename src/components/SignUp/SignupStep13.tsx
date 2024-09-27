import React, { useState } from "react";
import styles from "@/components/common/input/input.module.css"; // Assuming you place your styles in this CSS module file

const SignupStep13: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [ifscCode, setIfscCode] = useState<string>("");
  const [branch, setBranch] = useState<string>("");
  const [passbookImage, setPassbookImage] = useState<string | null>(null);

  const banks = [
    "Select a bank",
    "HDFC Bank",
    "ICICI Bank",
    "State Bank of India",
    "Axis Bank",
    "Punjab National Bank",
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPassbookImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center lg:h-[100vh] bg-transparent">
      <div className="bg-transparent p-8 rounded-lg w-full px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section - Static Image */}
        <div className="flex justify-center items-center p-4 rounded-lg">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727262465/7990322-removebg-preview_xs70dx.png"
            alt="Static Placeholder"
            className="max-w-full h-auto rounded-lg bounce"
          />
        </div>

        {/* Right Section - Form */}
        <div className="bg-transparent p-8 rounded-lg">
          {/* Heading */}
          <h2 className="text-3xl text-white font-bold text-left mb-6">
            Bank Details
          </h2>

          {/* Form Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Bank Dropdown */}
            <div className={`${styles.brutalist_container} mt-10`}>
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                required
                className={styles.brutalist_input}
              >
                {banks.map((bank) => (
                  <option key={bank} value={bank}>
                    {bank}
                  </option>
                ))}
              </select>
              <label className={styles.brutalist_label}>Select Bank</label>
            </div>

            {/* Account Number */}
            <div className={`${styles.brutalist_container} mt-10`}>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
                className={styles.brutalist_input}
                placeholder="Enter Your Account Number"
              />
              <label className={styles.brutalist_label}>Account Number</label>
            </div>
          </div>

          {/* IFSC and Branch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* IFSC Code */}
            <div className={`${styles.brutalist_container} mt-10`}>
              <input
                type="text"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                required
                className={styles.brutalist_input}
                placeholder=" Enter Your IFSC Code"
              />
              <label className={styles.brutalist_label}>IFSC Code</label>
            </div>

            {/* Branch */}
            <div className={`${styles.brutalist_container} mt-10`}>
              <input
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                required
                className={styles.brutalist_input}
                placeholder="Enter Your Branch Name"
              />
              <label className={styles.brutalist_label}>Branch Name</label>
            </div>
          </div>

          {/* Passbook Image Upload */}
          <div className={`${styles.brutalist_container} mt-16`}>
            {passbookImage ? (
              <div className="flex justify-center">
                <img
                  src={passbookImage}
                  alt="Passbook Preview"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            ) : (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className={styles.brutalist_input}
                />
                <label className={styles.brutalist_label}>
                  Upload Passbook Image
                </label>
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
  );
};

export default SignupStep13;
